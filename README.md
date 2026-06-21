# Thalaja — Technical Design Document (Part 1)

**Project:** Thalaja (ثلاجة) — Collaborative Shopping List App  
**Status:** Architecture & Design Phase (Graduation Project)  
**Team:** Holberton final project

---

## 1. Introduction

### 1.1 Purpose

This document is the high-level technical blueprint for **Thalaja**, a collaborative grocery and occasion shopping app. It defines architecture, domain entities, UML diagrams, and repository structure before implementation — following the same documentation rigor as the **HBnB Evolution** project, adapted for a **Flutter + Flask + Supabase** full-stack deployment.

### 1.2 Problem Statement

Families, roommates, and friend groups struggle with duplicate purchases, forgotten items, and poor coordination during shopping. Paper lists and chat messages do not sync in real time. **Thalaja** solves this with shared lists, categorized items, recipe-to-list import, and a per-list **activity history** so every member sees who changed what.

### 1.3 Scope (Part 1)

| In Scope | Out of Scope (Later Phases) |
| :--- | :--- |
| High-level architecture & UML diagrams | --- |
| Domain model & entity relationships | --- |
| API interaction flows (sequence diagrams) | --- |
| Flutter Clean Architecture structure | Offline-first sync engine |
| Flask layered backend structure | Supabase Realtime subscriptions |

### 1.4 Documentation Stages

| Stage | Document | Focus |
| :--- | :--- | :--- |
| **Stage 1** | [SharePoint — Stage 1](https://github.com/MIS-hero/Thalaja-team/blob/main/Documentation/STAGE1-ideation.md) | Vision, requirements, initial design |
| **Stage 2** | [SharePoint — Stage 2](https://github.com/MIS-hero/Thalaja-team/blob/main/Documentation/STAGE2-project-charter.md) | Implementation details, testing, deployment |
| **Miro Board** | [Thalaja Miro](https://miro.com/welcomeonboard/TGNsOHQ4SVpPN2l3VnFmQmpSMFVNVFdzbUFabGZvaW5MM1B0SE5BSG1nT0ZoOTFyWE5hZVNXWjBjMzhIeHNjZFR0N3JXUjBoRmc2cDlyTUJOSitsTm5CNmN6am1pT3JZZzVram40NXhscWQ5RHVqMVllcVlTbEp1Um4zM3hFcHF0R2lncW1vRmFBVnlLcVJzTmdFdlNRPT0hdjE=?share_link_id=514202759014) | Visual diagrams, wireframes, team collaboration |

---

## 2. Tech Stack

| Layer | Technology | Role |
| :--- | :--- | :--- |
| **Mobile Client** | Flutter (Dart) | Cross-platform iOS & Android UI |
| **Client Architecture** | Clean Architecture | Separation: Presentation → Domain → Data |
| **State Management** | BLoC / Riverpod / Cubet *(choose one)* | Predictable UI state |
| **Backend API** | Flask (Python) | REST API, business logic, authentication |
| **Database** | Supabase (PostgreSQL) | Persistent storage only — **no Supabase Auth on frontend** |
| **Authentication** | Flask JWT (access + refresh tokens) | Login/register handled entirely by backend |
| **ORM** | SQLAlchemy | Maps Python models to Supabase PostgreSQL |
| **API Communication** | HTTP / Dio (Flutter) | JSON REST between Flutter ↔ Flask |

> **Important:** Supabase is used purely as a managed PostgreSQL host. The Flutter app never calls Supabase Auth or Supabase client SDK directly. All data access goes through the Flask API.

---

## 3. High-Level Architecture

### 3.1 Architecture Overview

The system uses a **three-tier layered architecture** on the backend (mirroring HBnB) and **Clean Architecture** on the Flutter client. A **Facade** (`ThalajaFacade`) centralizes business rules on the server. Every mutating action on a shopping list writes a **History** record for the activity feed.

```mermaid
flowchart TB
    subgraph Client["Flutter App (Clean Architecture)"]
        P[Presentation Layer<br/>Pages · Widgets · BLoC]
        D[Domain Layer<br/>Entities · UseCases · Repo Interfaces]
        DA[Data Layer<br/>Models · RemoteDataSource · Repo Impl]
        P --> D --> DA
    end

    subgraph Server["Flask Backend (Layered)"]
        API[Presentation Layer<br/>REST API v1]
        FAC[Business Logic<br/>ThalajaFacade]
        MOD[Domain Models]
        REPO[Persistence Layer<br/>Repositories]
        API --> FAC --> MOD --> REPO
    end

    DB[(Supabase PostgreSQL)]

    DA -->|DIO + JWT| API
    REPO --> DB
```

### 3.2 Package Diagram

```mermaid
graph TB
    subgraph FlutterApp["📱 thalaja_mobile (Flutter)"]
        subgraph presentation["presentation/"]
            pages["pages/"]
            widgets["widgets/"]
            bloc["bloc/"]
        end
        subgraph domain["domain/"]
            entities["entities/"]
            usecases["usecases/"]
            repo_iface["repositories/ (interfaces)"]
        end
        subgraph data["data/"]
            models["models/"]
            datasources["datasources/"]
            repo_impl["repositories/ (impl)"]
        end
        subgraph core["core/"]
            network["network/"]
            errors["errors/"]
            utils["utils/"]
        end
    end

    subgraph FlaskAPI["🐍 thalaja_api (Flask)"]
        subgraph api_pkg["app/api/v1/"]
            auth_routes["auth.py"]
            group_routes["groups.py"]
            list_routes["lists.py"]
            item_routes["items.py"]
            category_routes["categories.py"]
            history_routes["histories.py"]
        end
        subgraph services_pkg["app/services/"]
            facade["facade.py"]
        end
        subgraph models_pkg["app/models/"]
            user_m["user.py"]
            group_m["group.py"]
            list_m["shopping_list.py"]
            item_m["list_item.py"]
            cat_m["category.py"]
            hist_m["history.py"]
        end
        subgraph persist_pkg["app/persistence/"]
            repos["repositories/"]
        end
        config["app/config.py"]
        extensions["app/extensions.py"]
    end

    subgraph Supabase["☁️ Supabase"]
        postgres["PostgreSQL Database"]
    end

    presentation --> domain
    domain --> data
    data -->|REST + JWT| api_pkg
    api_pkg --> services_pkg
    services_pkg --> models_pkg
    models_pkg --> persist_pkg
    persist_pkg --> postgres
```

### 3.3 Explanatory Notes

| Layer | Responsibility |
| :--- | :--- |
| **Flutter Presentation** | Screens, widgets, navigation, BLoC/Provider. No business logic. |
| **Flutter Domain** | Pure Dart entities, use cases (`CreateList`, `ToggleItem`), repository contracts. |
| **Flutter Data** | DTOs, API client (Dio), maps JSON ↔ entities, implements domain repos. |
| **Flask API** | DIO routing, request validation, JWT middleware, JSON serialization. |
| **Flask Facade** | Orchestrates workflows: validates membership, writes History, calls repos. |
| **Flask Persistence** | SQLAlchemy repositories abstract Supabase PostgreSQL. |

---

## 4. Domain Model — Final Entities Table

> Redesigned from the initial sketch. **Family → Group**, **Occasion → Category**, plus **History**, **GroupMember**, and **Recipe** for Bring-like recipe support.

| Entity | Attributes | Relationships |
| :--- | :--- | :--- |
| **User** | `id` (UUID), `name`, `email`, `phone`, `avatar_url`, `password_hash`, `created_at`, `updated_at` | Belongs to many **Groups** via **GroupMember**. Creates **Lists**, performs **History** actions. |
| **Group** | `id`, `name`, `type` (`family` \| `friends`), `invite_code`, `admin_id`, `avatar_url`, `created_at` | Has many **GroupMembers**, many **Lists**. `admin_id` → **User**. |
| **GroupMember** | `id`, `group_id`, `user_id`, `role` (`admin` \| `member`), `joined_at` | Junction: **User** ↔ **Group**. |
| **Category** | `id`, `name`, `icon`, `type` (`occasion` \| `recipe` \| `grocery_aisle` \| `custom`), `is_system` (bool), `created_by` (nullable) | Has many **Recipes** (when type = recipe). Referenced by **Lists** and **ListItems**. |
| **Recipe** | `id`, `category_id`, `title`, `description`, `image_url`, `servings`, `created_by`, `created_at` | Belongs to **Category**. Has many **RecipeIngredients**. Can be imported into a **List**. |
| **RecipeIngredient** | `id`, `recipe_id`, `name`, `quantity`, `unit`, `grocery_category_id` | Belongs to **Recipe**. Maps to grocery aisle **Category**. |
| **ShoppingList** | `id`, `group_id`, `category_id`, `title`, `status` (`active` \| `completed` \| `archived`), `created_by`, `created_at`, `completed_at` | Belongs to **Group** and **Category**. Has many **ListItems** and **Histories**. |
| **ListItem** | `id`, `list_id`, `name`, `quantity`, `unit`, `grocery_category_id`, `notes`, `is_bought`, `added_by`, `bought_by`, `bought_at`, `created_at` | Belongs to **ShoppingList** and optional **Category** (aisle). |
| **History** | `id`, `list_id`, `user_id`, `action` (enum), `entity_type`, `entity_id`, `summary`, `metadata` (JSON), `created_at` | Belongs to **ShoppingList** and **User**. Immutable activity log. |

### 4.1 History Action Types

| Action | Trigger | Example Summary |
| :--- | :--- | :--- |
| `list_created` | New list in group | "Ahmed created Picnic list" |
| `item_added` | Item added | "Sara added Milk (2 L)" |
| `item_updated` | Qty/notes changed | "Omar updated Chicken quantity to 1 kg" |
| `item_removed` | Item deleted | "Layla removed Bread" |
| `item_checked` | Marked bought | "Khalid bought Eggs" |
| `item_unchecked` | Unmarked bought | "Nour unchecked Butter" |
| `list_completed` | All items bought / manual close | "Group completed Weekly Groceries" |
| `recipe_imported` | Recipe → list | "Fatima imported Shakshuka recipe (8 items)" |
| `member_joined` | User joined group | "Yousef joined Family Group" |

### 4.2 Entity Relationship Diagram

```mermaid
erDiagram
    USER ||--o{ GROUP_MEMBER : "joins"
    GROUP ||--o{ GROUP_MEMBER : "has"
    USER ||--o{ GROUP : "administers"
    GROUP ||--o{ SHOPPING_LIST : "owns"
    CATEGORY ||--o{ SHOPPING_LIST : "templates"
    CATEGORY ||--o{ RECIPE : "contains"
    RECIPE ||--o{ RECIPE_INGREDIENT : "has"
    SHOPPING_LIST ||--o{ LIST_ITEM : "contains"
    SHOPPING_LIST ||--o{ HISTORY : "logs"
    USER ||--o{ HISTORY : "performs"
    USER ||--o{ LIST_ITEM : "adds/buys"
    CATEGORY ||--o{ LIST_ITEM : "aisle"

    USER {
        uuid id PK
        string name
        string email
        string phone
        string avatar_url
        string password_hash
    }

    GROUP {
        uuid id PK
        string name
        enum type
        string invite_code
        uuid admin_id FK
    }

    GROUP_MEMBER {
        uuid id PK
        uuid group_id FK
        uuid user_id FK
        enum role
    }

    CATEGORY {
        uuid id PK
        string name
        string icon
        enum type
        bool is_system
    }

    RECIPE {
        uuid id PK
        uuid category_id FK
        string title
        int servings
    }

    SHOPPING_LIST {
        uuid id PK
        uuid group_id FK
        uuid category_id FK
        enum status
        uuid created_by FK
    }

    LIST_ITEM {
        uuid id PK
        uuid list_id FK
        string name
        float quantity
        string unit
        bool is_bought
    }

    HISTORY {
        uuid id PK
        uuid list_id FK
        uuid user_id FK
        enum action
        json metadata
    }
```

---

## 5. Class Diagram

```mermaid
classDiagram
    class User {
        +UUID id
        +String name
        +String email
        +String phone
        +String avatarUrl
        +register()
        +updateProfile()
    }

    class Group {
        +UUID id
        +String name
        +GroupType type
        +String inviteCode
        +UUID adminId
        +generateInviteCode()
        +addMember(userId, role)
        +removeMember(userId)
    }

    class GroupMember {
        +UUID id
        +UUID groupId
        +UUID userId
        +MemberRole role
        +DateTime joinedAt
    }

    class Category {
        +UUID id
        +String name
        +String icon
        +CategoryType type
        +Boolean isSystem
        +getRecipes()
    }

    class Recipe {
        +UUID id
        +UUID categoryId
        +String title
        +Int servings
        +getIngredients()
        +toListItems()
    }

    class RecipeIngredient {
        +UUID id
        +String name
        +Float quantity
        +String unit
        +UUID groceryCategoryId
    }

    class ShoppingList {
        +UUID id
        +UUID groupId
        +UUID categoryId
        +ListStatus status
        +create()
        +complete()
        +getItems()
        +getHistory()
    }

    class ListItem {
        +UUID id
        +String name
        +Float quantity
        +String unit
        +Boolean isBought
        +toggleBought(userId)
        +update(qty, notes)
    }

    class History {
        +UUID id
        +HistoryAction action
        +String summary
        +JSON metadata
        +DateTime createdAt
        +static log(listId, userId, action)
    }

    class ThalajaFacade {
        +createGroup(userId, data)
        +joinGroup(userId, inviteCode)
        +createList(userId, groupId, categoryId)
        +addItem(userId, listId, itemData)
        +toggleItem(userId, itemId)
        +importRecipe(userId, listId, recipeId)
        +getListHistory(listId)
        -validateMembership(userId, groupId)
        -writeHistory(...)
    }

    class BaseRepository {
        <<interface>>
        +getById(id)
        +save(entity)
        +delete(id)
    }

    User "1" --> "*" GroupMember
    Group "1" --> "*" GroupMember
    User "1" --> "*" Group : admin
    Group "1" --> "*" ShoppingList
    Category "1" --> "*" ShoppingList
    Category "1" --> "*" Recipe
    Recipe "1" --> "*" RecipeIngredient
    ShoppingList "1" --> "*" ListItem
    ShoppingList "1" --> "*" History
    User "1" --> "*" History
    ThalajaFacade --> BaseRepository
    ThalajaFacade --> History : writes
```

### 5.1 Explanatory Notes

- **Group** replaces Family — `type` distinguishes family households vs friend/roommate groups.
- **Category** replaces Occasion — doubles as occasion template (Picnic, BBQ), grocery aisle (Dairy, Produce), or recipe container.
- **History** is append-only; the Facade writes a record on every state-changing operation.
- **ThalajaFacade** mirrors HBnB's `HBnBFacade` — single entry point for all business workflows.

---

## 6. Use Case Diagram

```mermaid
flowchart LR
    subgraph Actors
        U((Registered User))
        A((Group Admin))
        G((Guest / New User))
    end

    subgraph Authentication
        UC1[Register Account]
        UC2[Login]
        UC3[Update Profile]
    end

    subgraph GroupManagement
        UC4[Create Group]
        UC5[Join Group via Invite Code]
        UC6[Invite Member]
        UC7[Leave Group]
        UC8[Manage Group Settings]
    end

    subgraph ListManagement
        UC9[Create Shopping List]
        UC10[View Group Lists]
        UC11[Archive / Complete List]
        UC12[Delete List]
    end

    subgraph ItemManagement
        UC13[Add Item]
        UC14[Edit Item]
        UC15[Remove Item]
        UC16[Toggle Item Bought]
        UC17[Filter by Grocery Category]
    end

    subgraph RecipeFeatures
        UC18[Browse Recipe Categories]
        UC19[View Recipe Details]
        UC20[Import Recipe to List]
    end

    subgraph HistoryFeatures
        UC21[View List Activity History]
        UC22[View Who Bought Item]
    end

    G --> UC1
    G --> UC2
    U --> UC2
    U --> UC3
    U --> UC5
    U --> UC7
    U --> UC9
    U --> UC10
    U --> UC13
    U --> UC14
    U --> UC15
    U --> UC16
    U --> UC17
    U --> UC18
    U --> UC19
    U --> UC20
    U --> UC21
    U --> UC22
    A --> UC4
    A --> UC6
    A --> UC8
    A --> UC11
    A --> UC12
```

### 6.1 Primary Use Cases (MVP)

| ID | Use Case | Actor | Priority |
| :--- | :--- | :--- | :--- |
| UC-01 | Register / Login | Guest | Must |
| UC-02 | Create or Join Group | User | Must |
| UC-03 | Create List from Category | User | Must |
| UC-04 | Add / Check / Uncheck Items | User | Must |
| UC-05 | View List History | User | Must |
| UC-06 | Import Recipe to List | User | Should |
| UC-07 | Complete / Archive List | Admin | Should |

---

## 7. Sequence Diagrams

### 7.1 User Registration & Login

```mermaid
sequenceDiagram
    actor User
    participant Flutter as Flutter App
    participant API as Flask API
    participant Facade as ThalajaFacade
    participant Repo as UserRepository
    participant DB as Supabase PostgreSQL

    Note over User,DB: Registration
    User->>Flutter: Enter name, email, password
    Flutter->>API: POST /api/v1/auth/register
    API->>Facade: register_user(data)
    Facade->>Repo: find_by_email(email)
    Repo->>DB: SELECT user
    DB-->>Repo: null
    Facade->>Repo: save(new User)
    Repo->>DB: INSERT user
    DB-->>Repo: user_id
    Facade-->>API: UserDTO
    API-->>Flutter: 201 Created + JWT tokens
    Flutter-->>User: Navigate to Home

    Note over User,DB: Login
    User->>Flutter: Enter email, password
    Flutter->>API: POST /api/v1/auth/login
    API->>Facade: authenticate(email, password)
    Facade->>Repo: find_by_email(email)
    Repo->>DB: SELECT user
    DB-->>Repo: user row
    Facade->>Facade: verify_password()
    Facade-->>API: JWT access + refresh
    API-->>Flutter: 200 OK + tokens
    Flutter-->>User: Navigate to Groups
```

---

### 7.2 Create Group & Invite Member

```mermaid
sequenceDiagram
    actor Admin
    participant Flutter as Flutter App
    participant API as Flask API
    participant Facade as ThalajaFacade
    participant GRepo as GroupRepository
    participant HRepo as HistoryRepository
    participant DB as Supabase PostgreSQL

    Admin->>Flutter: Create "Family" group
    Flutter->>API: POST /api/v1/groups
    API->>Facade: create_group(adminId, data)
    Facade->>Facade: generate_invite_code()
    Facade->>GRepo: save(Group + GroupMember admin)
    GRepo->>DB: INSERT group, group_member
    DB-->>GRepo: group_id
    Facade-->>API: GroupDTO + invite_code
    API-->>Flutter: 201 Created
    Flutter-->>Admin: Show invite code

    Admin->>Flutter: Share invite code
    actor Member
    Member->>Flutter: Enter invite code
    Flutter->>API: POST /api/v1/groups/join
    API->>Facade: join_group(userId, inviteCode)
    Facade->>GRepo: find_by_invite_code()
    GRepo->>DB: SELECT group
    Facade->>GRepo: add_member(userId, member)
    GRepo->>DB: INSERT group_member
    Facade->>HRepo: log(member_joined)
    HRepo->>DB: INSERT history
    Facade-->>API: GroupDTO
    API-->>Flutter: 200 OK
    Flutter-->>Member: Show group lists
```

---

### 7.3 Create Shopping List

```mermaid
sequenceDiagram
    actor User
    participant Flutter as Flutter App
    participant API as Flask API
    participant Facade as ThalajaFacade
    participant LRepo as ListRepository
    participant HRepo as HistoryRepository
    participant DB as Supabase PostgreSQL

    User->>Flutter: Select Group → Category (Picnic)
    Flutter->>API: POST /api/v1/groups/{id}/lists
    API->>Facade: create_list(userId, groupId, categoryId, title)
    Facade->>Facade: validate_membership(userId, groupId)
    alt Not a member
        Facade-->>API: 403 Forbidden
    else Is member
        Facade->>LRepo: save(ShoppingList)
        LRepo->>DB: INSERT shopping_list
        DB-->>LRepo: list_id
        Facade->>HRepo: log(list_created)
        HRepo->>DB: INSERT history
        Facade-->>API: ListDTO
        API-->>Flutter: 201 Created
        Flutter-->>User: Open empty list
    end
```

---

### 7.4 Add Item & Toggle Bought (with History)

```mermaid
sequenceDiagram
    actor User
    participant Flutter as Flutter App
    participant API as Flask API
    participant Facade as ThalajaFacade
    participant IRepo as ItemRepository
    participant HRepo as HistoryRepository
    participant DB as Supabase PostgreSQL

    User->>Flutter: Add "Milk 2L"
    Flutter->>API: POST /api/v1/lists/{id}/items
    API->>Facade: add_item(userId, listId, data)
    Facade->>Facade: validate_membership()
    Facade->>IRepo: save(ListItem)
    IRepo->>DB: INSERT list_item
    Facade->>HRepo: log(item_added, metadata)
    HRepo->>DB: INSERT history
    Facade-->>API: ItemDTO
    API-->>Flutter: 201 Created
    Flutter-->>User: Item appears in list

    User->>Flutter: Tap to mark bought
    Flutter->>API: PATCH /api/v1/items/{id}/toggle
    API->>Facade: toggle_item(userId, itemId)
    Facade->>IRepo: update(is_bought=true, bought_by)
    IRepo->>DB: UPDATE list_item
    Facade->>HRepo: log(item_checked)
    HRepo->>DB: INSERT history
    Facade-->>API: ItemDTO
    API-->>Flutter: 200 OK
    Flutter-->>User: Item styled as bought
```

---

### 7.5 Import Recipe to Shopping List

```mermaid
sequenceDiagram
    actor User
    participant Flutter as Flutter App
    participant API as Flask API
    participant Facade as ThalajaFacade
    participant RRepo as RecipeRepository
    participant IRepo as ItemRepository
    participant HRepo as HistoryRepository
    participant DB as Supabase PostgreSQL

    User->>Flutter: Select Recipe "Shakshuka"
    Flutter->>API: POST /api/v1/lists/{id}/import-recipe
    API->>Facade: import_recipe(userId, listId, recipeId)
    Facade->>Facade: validate_membership()
    Facade->>RRepo: get_ingredients(recipeId)
    RRepo->>DB: SELECT recipe_ingredients
    DB-->>RRepo: ingredients[]
    loop Each ingredient
        Facade->>IRepo: save(ListItem)
        IRepo->>DB: INSERT list_item
    end
    Facade->>HRepo: log(recipe_imported, count=8)
    HRepo->>DB: INSERT history
    Facade-->>API: ListDTO with new items
    API-->>Flutter: 200 OK
    Flutter-->>User: 8 items added to list
```

---

### 7.6 View List Activity History

```mermaid
sequenceDiagram
    actor User
    participant Flutter as Flutter App
    participant API as Flask API
    participant Facade as ThalajaFacade
    participant HRepo as HistoryRepository
    participant DB as Supabase PostgreSQL

    User->>Flutter: Open list → History tab
    Flutter->>API: GET /api/v1/lists/{id}/history
    API->>Facade: get_list_history(userId, listId)
    Facade->>Facade: validate_membership()
    Facade->>HRepo: find_by_list_id(listId)
    HRepo->>DB: SELECT history ORDER BY created_at DESC
    DB-->>HRepo: history rows
    Facade-->>API: HistoryDTO[]
    API-->>Flutter: 200 OK
    Flutter-->>User: Timeline of all member actions
```

---

## 8. API Endpoints Overview

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/v1/auth/register` | Register new user |
| `POST` | `/api/v1/auth/login` | Login, receive JWT |
| `POST` | `/api/v1/auth/refresh` | Refresh access token |
| `GET` | `/api/v1/users/me` | Current user profile |
| `POST` | `/api/v1/groups` | Create group |
| `POST` | `/api/v1/groups/join` | Join via invite code |
| `GET` | `/api/v1/groups` | List user's groups |
| `GET` | `/api/v1/groups/{id}` | Group details + members |
| `POST` | `/api/v1/groups/{id}/lists` | Create shopping list |
| `GET` | `/api/v1/groups/{id}/lists` | Lists in group |
| `GET` | `/api/v1/lists/{id}` | List with items |
| `PATCH` | `/api/v1/lists/{id}/complete` | Mark list completed |
| `POST` | `/api/v1/lists/{id}/items` | Add item |
| `PATCH` | `/api/v1/items/{id}` | Update item |
| `PATCH` | `/api/v1/items/{id}/toggle` | Toggle bought status |
| `DELETE` | `/api/v1/items/{id}` | Remove item |
| `GET` | `/api/v1/categories` | All categories (system + custom) |
| `GET` | `/api/v1/categories/{id}/recipes` | Recipes in category |
| `POST` | `/api/v1/lists/{id}/import-recipe` | Import recipe ingredients |
| `GET` | `/api/v1/lists/{id}/history` | Activity history feed |

---

## 9. Project Repository Structure

```text
thalaja/
├── docs/                              # Graduation documentation
│   ├── part1/                         # Stage 1 — Design (this document)
│   │   ├── README.md
│   │   ├── diagrams/                  # Exported PNG/SVG from Miro
│   │   │   ├── package_diagram.png
│   │   │   ├── class_diagram.png
│   │   │   ├── use_case_diagram.png
│   │   │   └── sequence_*.png
│   │   └── resources/                 # PDFs, reference videos
│   └── part2/                         # Stage 2 — Implementation report
│
├── thalaja_mobile/                    # Flutter client (Clean Architecture)
│   ├── lib/
│   │   ├── main.dart
│   │   ├── app.dart
│   │   ├── core/
│   │   │   ├── constants/
│   │   │   ├── errors/
│   │   │   ├── network/
│   │   │   │   ├── api_client.dart
│   │   │   │   └── auth_interceptor.dart
│   │   │   └── utils/
│   │   ├── features/
│   │   │   ├── auth/
│   │   │   │   ├── data/
│   │   │   │   │   ├── datasources/
│   │   │   │   │   ├── models/
│   │   │   │   │   └── repositories/
│   │   │   │   ├── domain/
│   │   │   │   │   ├── entities/
│   │   │   │   │   ├── repositories/
│   │   │   │   │   └── usecases/
│   │   │   │   └── presentation/
│   │   │   │       ├── bloc/
│   │   │   │       ├── pages/
│   │   │   │       └── widgets/
│   │   │   ├── groups/
│   │   │   ├── lists/
│   │   │   ├── items/
│   │   │   ├── categories/
│   │   │   ├── recipes/
│   │   │   └── history/
│   │   └── injection_container.dart   # Dependency injection (get_it)
│   ├── test/
│   ├── pubspec.yaml
│   └── README.md
│
├── thalaja_api/                       # Flask backend (Layered + Facade)
│   ├── app/
│   │   ├── __init__.py                # App factory
│   │   ├── config.py                  # Supabase DB URL, JWT secret
│   │   ├── extensions.py              # SQLAlchemy, JWT, CORS
│   │   ├── api/
│   │   │   └── v1/
│   │   │       ├── __init__.py
│   │   │       ├── auth.py
│   │   │       ├── groups.py
│   │   │       ├── lists.py
│   │   │       ├── items.py
│   │   │       ├── categories.py
│   │   │       └── histories.py
│   │   ├── models/
│   │   │   ├── base_model.py
│   │   │   ├── user.py
│   │   │   ├── group.py
│   │   │   ├── group_member.py
│   │   │   ├── category.py
│   │   │   ├── recipe.py
│   │   │   ├── shopping_list.py
│   │   │   ├── list_item.py
│   │   │   └── history.py
│   │   ├── services/
│   │   │   └── facade.py              # ThalajaFacade
│   │   └── persistence/
│   │       └── repositories/
│   │           ├── user_repository.py
│   │           ├── group_repository.py
│   │           ├── list_repository.py
│   │           ├── item_repository.py
│   │           └── history_repository.py
│   ├── migrations/                    # Alembic DB migrations
│   ├── tests/
│   ├── requirements.txt
│   ├── run.py
│   └── README.md
│
├── supabase/
│   ├── seed.sql                       # System categories & sample recipes
│   └── schema.sql                     # Reference schema (managed by Alembic)
│
├── .env.example
└── README.md                          # Root project overview
```

---

## 10. Development Roadmap (Graduation Phases)

| Phase | Title | Deliverables | Status |
| :--- | :--- | :--- | :--- |
| **Part 1** | Technical Documentation & Design | UML diagrams, entity model, architecture doc, Miro board | 🔄 In Progress |
| **Part 2** | Backend — Business Logic & API | Flask models, Facade, REST endpoints, Supabase schema | ⏳ Upcoming |
| **Part 3** | Flutter Client | Clean Architecture features, JWT auth flow, list UI | ⏳ Upcoming |
| **Part 4** | Integration & Deployment | End-to-end testing, APK build, API deployment, Stage 2 report | ⏳ Upcoming |

---

## 11. Comparison: Thalaja vs Bring!

| Feature | Bring! | Thalaja |
| :--- | :--- | :--- |
| Shared lists | ✅ Family / friends | ✅ **Groups** (family or friends) |
| Real-time sync | ✅ | ✅ Via API polling → WebSockets later |
| Categories | ✅ Grocery aisles | ✅ **Categories** (aisle + occasion + recipe) |
| Recipes | ✅ Recipe book + import | ✅ **Recipe** entity with ingredient import |
| Activity log | ❌ Limited | ✅ **History** per list |
| Auth | Bring account | ✅ Flask JWT (no Supabase Auth) |
| Platform | iOS / Android | ✅ Flutter cross-platform |

---

## 12. Conclusion

Thalaja applies proven **layered backend architecture** (HBnB-style Facade + Repositories) with **Flutter Clean Architecture** on the client. Renaming **Family → Group** and **Occasion → Category** makes the domain flexible for households and friend circles, groceries and recipes. The **History** entity gives every shopping list a transparent audit trail — a differentiator over apps like [Bring!](https://www.getbring.com/en/features/collaborative) that focus on lists without detailed per-user activity feeds.

By keeping **Supabase as database-only** and routing all logic through **Flask**, authentication stays centralized, graduation requirements are easier to demonstrate, and the persistence layer can evolve without touching the Flutter domain layer.

---


---

## 14. References

- [Bring! — Collaborative Shopping Lists](https://www.getbring.com/en/features/collaborative)
- [HBnB Evolution — Part 1 Design Reference](https://github.com/holbertonschool/hbnb)
- [Stage 1 Documentation (SharePoint)](https://studentksuedu-my.sharepoint.com/:w:/g/personal/446202251_student_ksu_edu_sa/IQD6pDC0-m2jQaqCCHfWs8nsAckIfo9m3vAC1H3J-0wdCIc?e=f71gFo)
- [Stage 2 Documentation (SharePoint)](https://studentksuedu-my.sharepoint.com/:w:/g/personal/446202251_student_ksu_edu_sa/IQAl74pkVmisTp_nztUkk_9TAYOv3VAYCVgtzZNhhaxhp5U?rtime=oNSzrYbF3kg)
- [Thalaja Miro Board](https://miro.com/welcomeonboard/TGNsOHQ4SVpPN2l3VnFmQmpSMFVNVFdzbUFabGZvaW5MM1B0SE5BSG1nT0ZoOTFyWE5hZVNXWjBjMzhIeHNjZFR0N3JXUjBoRmc2cDlyTUJOSitsTm5CNmN6am1pT3JZZzVram40NXhscWQ5RHVqMVllcVlTbEp1Um4zM3hFcHF0R2lncW1vRmFBVnlLcVJzTmdFdlNRPT0hdjE=?share_link_id=514202759014)
- [Project Repository](https://github.com/0-Mousa-0/fe)
