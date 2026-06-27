# Thalaja — Stage 3 Technical Documentation
## Section 1: User Stories and Mockups

---

## Table of Contents

- [1.1 Actors](#11-actors)
- [1.2 User Stories](#12-user-stories)
- [1.3 MoSCoW Summary](#13-moscow-summary)
- [1.4 Mockups](#14-mockups)

---

## 1.1 Actors

| Actor | Description |
|---|---|
| **Guest** | Unauthenticated user who has installed the app |
| **Member** | Authenticated user belonging to one or more groups |
| **Admin** | Member with the admin role in a specific group — can manage group membership, names, icons, and remove lists and recipes. Admin role is singular per group; transferring it removes the current admin's privileges. |
| **Buyer** | Member who has been assigned or has volunteered for the current shopping trip — not a permanent role |

---

## 1.2 User Stories

### Authentication & Onboarding

| ID | Story | Priority |
|---|---|---|
| US-01 | As a guest, I want to create an account with my name, email, and password, so that I can join or create a household group. | **Must Have** |
| US-02 | As a guest, I want to log in with my email and password, so that I can access my groups and lists. | **Must Have** |
| US-03 | As a member, I want to update my display name and avatar, so that my identity is recognizable to other group members. | Should Have |

---

### Group Management

| ID | Story | Priority |
|---|---|---|
| US-04 | As a member, I want to create a group and receive a shareable invite code, so that I can bring my household or friends into one shared space. | **Must Have** |
| US-05 | As a member, I want to join a group using an invite code, so that I can access its shared lists. | **Must Have** |
| US-06 | As a member, I want to belong to multiple groups at the same time, so that I can coordinate groceries across different households. | **Must Have** |
| US-07 | As a member, I want to share the group invite code with others, so that I can bring new people in without requiring admin action. | **Must Have** |
| US-08 | As an admin, I want to remove a member from the group, so that I control who has access to our lists. | Should Have |
| US-09 | As an admin, I want to edit the group name and icon, so that the group is clearly identifiable across multiple groups. | Should Have |
| US-10 | As an admin, I want to transfer my admin role to another member — losing my own admin status in the process — so that group ownership can be handed over cleanly. | Should Have |
| US-11 | As an admin, I want to remove a list from the group, so that the group's list view stays relevant and organized. | Should Have |
| US-12 | As an admin, I want to remove a recipe from the group, so that outdated or unused recipes don't clutter the recipe library. | Should Have |

---

### List Management

| ID | Story | Priority |
|---|---|---|
| US-13 | As a member, I want to create and name a shared grocery list within a group, so that everyone can add their items before the shopping trip. | **Must Have** |
| US-14 | As an admin, I want to edit the list name and icon after creation, so that lists can be renamed or visually distinguished without recreating them. | Should Have |
| US-15 | As a buyer, I want to close the active list when the shopping trip is done, so that it moves to the group's trip history and the active view stays clean. | **Must Have** |

---

### Item Submission

| ID | Story | Priority |
|---|---|---|
| US-16 | As a member, I want to add an item manually with name, brand, quantity, unit, and notes, so that the buyer has the detail they need to find exactly what I want. | **Must Have** |
| US-17 | As a member, I want to browse my item history and re-add a past item, so that I don't have to re-enter its details from scratch. | **Must Have** |
| US-18 | As a member, I want to browse a grocery catalog and select items from it, so that I can add common products without typing. | Should Have |
| US-19 | As a member, I want to scan an item's barcode, so that its name and details are filled in automatically. | Could Have |
| US-20 | As a member, I want to take a photo of an item and have it identified automatically, so that I can add it quickly without knowing the exact product name. | Could Have |
| US-21 | As a member, I want to attach an image to an item I'm adding, so that the buyer can visually confirm the exact product on the shelf. | Should Have |
| US-22 | As a member, I want to mark an item as urgent when adding it, so that the buyer knows it cannot wait for the next full trip. | Should Have |
| US-23 | As a member, I want to bulk-delete all items from the list after a confirmation step, so that I can reset the list when needed — with the option to undo the action via the list's action log. | Should Have |

---

### Real-Time Collaboration

| ID | Story | Priority |
|---|---|---|
| US-24 | As a member viewing a list, I want to see other members' additions, edits, and removals appear in real time without refreshing, so that the list stays synchronized during active collaboration. | **Must Have** |

---

### Duplicate Prevention

| ID | Story | Priority |
|---|---|---|
| US-25 | As a member, I want to see a non-blocking warning when the item I'm adding may already be on the list, so that I can decide whether to add it anyway or update the existing entry instead. | **Must Have** |

---

### Buying View

| ID | Story | Priority |
|---|---|---|
| US-26 | As a buyer, I want a dedicated buying view that locks the list from edits, organizes items by grocery aisle category in a standard store aisle sequence, and lets me check off items as I shop, so that I can move through the store efficiently without accidental changes. | **Must Have** |
| US-27 | As a buyer, I want to filter the buying view to show only urgent items, so that I can complete a quick trip when I don't have time for a full shop. | Should Have |

---

### History

| ID | Story | Priority |
|---|---|---|
| US-28 | As a member, I want to browse the action log for a list — showing who added, edited, removed, or bulk-deleted items and when — so that I stay informed of all updates made by other members. | **Must Have** |
| US-29 | As a member, I want to see a trip history showing past completed shopping trips, so that I can reference what was bought in previous trips. | Should Have |

---

### Notifications

| ID | Story | Priority |
|---|---|---|
| US-30 | As a buyer, I want to tap a "heading to store" button that sends a push notification to all group members, so that they have a final window to add any last-minute items before I leave. | **Must Have** |
| US-31 | As a member, I want to assign a buyer for the upcoming trip and send them a push notification, so that the designated person knows they are expected to shop. | Should Have |
| US-32 | As a member, I want to send a reminder notification to a specific group member to add their items to the list, so that no one's needs are missed before the trip. | Could Have |

---

### Recipes

| ID | Story | Priority |
|---|---|---|
| US-33 | As a member, I want to create and save a recipe with a name, image, step-by-step instructions, and an ingredients list (name, quantity, and unit per ingredient), so that I can reuse it across multiple shopping trips. | Should Have |
| US-34 | As a member, I want to import all ingredients from a saved recipe to the active list in one tap, so that I don't have to add each ingredient individually. | Should Have |
| US-35 | As a group, I want to share saved recipes within our group, so that any member can view and import a group recipe to the list. | Could Have |

---

## 1.3 MoSCoW Summary

| Priority | Story IDs | Count |
|---|---|---|
| **Must Have** | US-01, 02, 04, 05, 06, 07, 13, 15, 16, 17, 24, 25, 26, 28, 30 | 15 |
| **Should Have** | US-03, 08, 09, 10, 11, 12, 14, 18, 21, 22, 23, 27, 29, 31, 33, 34 | 16 |
| **Could Have** | US-19, 20, 32, 35 | 4 |
| **Won't Have (this phase)** | Geofence triggers · Occasion/event lists · Financial tracking · Store inventory APIs · Aisle sorting algorithms · Simultaneous multi-buyer sync · AI recommendations · Voice input · In-app chat | — |

---

## 1.4 Mockups

Eleven screens. Wireframe specifications are in [`thalaja-stage3-wireframes.md`](./thalaja-stage3-wireframes.md). Figma designs will be embedded below as they are completed.

| Screen | Figma Mockup |
|---|---|
| Screen 1 — Register | 📐 *[to be embedded]* |
| Screen 2 — Login | 📐 *[to be embedded]* |
| Screen 3 — Groups Home | 📐 *[to be embedded]* |
| Screen 4 — Group Detail | 📐 *[to be embedded]* |
| Screen 5 — List Detail | 📐 *[to be embedded]* |
| Screen 6 — Item Add Sheet | 📐 *[to be embedded]* |
| Screen 7 — Buying View | 📐 *[to be embedded]* |
| Screen 8 — History Screen | 📐 *[to be embedded]* |
| Screen 9 — Recipe Detail / Create | 📐 *[to be embedded]* |
| Screen 10 — Notifications & Buyer Assignment | 📐 *[to be embedded]* |
| Screen 11 — Group Admin Settings | 📐 *[to be embedded]* |

---
# Thalaja — Technical Diagrams

## 1. Package Diagram

```mermaid
graph TB
    subgraph FlutterApp["thalaja_mobile (Flutter)"]
        subgraph presentation["presentation/"]
            pages["pages/"]
            widgets["widgets/"]
            bloc["bloc/"]
        end
        subgraph domain["domain/"]
            entities["entities/"]
            usecases["usecases/"]
            repo_iface["repositories/ interfaces"]
        end
        subgraph data["data/"]
            models["models/"]
            remote_ds["datasources/remote (REST client)"]
            realtime_ds["datasources/realtime (Supabase channels)"]
            device_ds["datasources/device (camera, mic, scanner)"]
            repo_impl["repositories/ implementations"]
        end
        subgraph core["core/"]
            network["network/"]
            errors["errors/"]
            utils["utils/"]
        end
    end

    subgraph FlaskAPI["thalaja_api (Flask)"]
        subgraph api_pkg["app/api/v1/"]
            auth_routes["auth.py (login, register, reset-password)"]
            group_routes["groups.py (create/join, membership, roles)"]
            list_routes["lists.py (private/shared lists)"]
            item_routes["items.py (CRUD, mark purchased)"]
            category_routes["categories.py (custom/event/seasonal)"]
            recipe_routes["recipes.py"]
            reminder_routes["reminders.py"]
            history_routes["history.py (purchase history)"]
        end
        subgraph services_pkg["app/services/"]
            auth_service["auth_service.py"]
            group_service["group_service.py (membership + permissions)"]
            list_service["list_service.py (lists, items, categories, recipes)"]
            reminder_service["reminder_service.py"]
            history_service["history_service.py"]
        end
        subgraph models_pkg["app/models/"]
            user_m["user.py"]
            group_m["group.py"]
            member_m["group_member.py (role: owner/contributor/viewer)"]
            list_m["shopping_list.py"]
            item_m["list_item.py"]
            cat_m["category.py"]
            recipe_m["recipe.py"]
            reminder_m["reminder.py"]
            hist_m["history.py"]
            perm_m["list_permission.py"]
        end
        subgraph persist_pkg["app/persistence/"]
            repos["repositories/"]
        end
        config["app/config.py"]
        extensions["app/extensions.py"]
    end

    subgraph Supabase["Supabase"]
        postgres["PostgreSQL Database"]
        realtime["Supabase Realtime (live sync)"]
    end

    presentation --> domain
    presentation --> core
    data --> domain
    data --> core
    remote_ds -->|REST + JWT| api_pkg
    realtime_ds -->|subscribe| realtime
    device_ds --> repo_impl
    repo_impl --> remote_ds
    repo_impl --> realtime_ds

    api_pkg --> auth_service
    api_pkg --> group_service
    api_pkg --> list_service
    api_pkg --> reminder_service
    api_pkg --> history_service

    auth_service --> models_pkg
    group_service --> models_pkg
    list_service --> models_pkg
    reminder_service --> models_pkg
    history_service --> models_pkg

    auth_service --> persist_pkg
    group_service --> persist_pkg
    list_service --> persist_pkg
    reminder_service --> persist_pkg
    history_service --> persist_pkg

    persist_pkg --> models_pkg
    persist_pkg --> postgres
    postgres -->|change events| realtime

    api_pkg --> extensions
    api_pkg --> config
```

---

## 2. Entity-Relationship Diagram

```mermaid
erDiagram
    USER ||--o{ GROUP_MEMBER : joins
    GROUP ||--o{ GROUP_MEMBER : has
    USER ||--o{ SHOPPING_LIST : creates
    GROUP |o--o{ SHOPPING_LIST : owns
    SHOPPING_LIST ||--o{ LIST_ITEM : contains
    CATEGORY |o--o{ LIST_ITEM : classifies
    CATEGORY ||--o{ RECIPE : groups
    RECIPE ||--o{ RECIPE_INGREDIENT : has
    SHOPPING_LIST ||--o{ HISTORY : logs
    USER ||--o{ HISTORY : performs
    USER ||--o{ LIST_ITEM : adds
    USER |o--o{ LIST_ITEM : buys
    SHOPPING_LIST ||--o{ REMINDER : has
    LIST_ITEM |o--o{ REMINDER : triggers
    USER ||--o{ REMINDER : receives
    SHOPPING_LIST ||--o{ LIST_PERMISSION : controls
    USER ||--o{ LIST_PERMISSION : has
    USER |o--o{ CATEGORY : creates
    GROUP |o--o{ CATEGORY : scopes

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
        uuid created_by FK
        uuid group_id FK
    }
    RECIPE {
        uuid id PK
        uuid category_id FK
        string title
        int servings
    }
    RECIPE_INGREDIENT {
        uuid id PK
        uuid recipe_id FK
        string name
        float quantity
        string unit
    }
    SHOPPING_LIST {
        uuid id PK
        uuid group_id FK
        uuid created_by FK
        string name
        enum status
    }
    LIST_ITEM {
        uuid id PK
        uuid list_id FK
        uuid category_id FK
        uuid added_by FK
        uuid bought_by FK
        string name
        string brand
        float quantity
        string unit
        bool is_bought
        string image_url
        string barcode
    }
    REMINDER {
        uuid id PK
        uuid list_id FK
        uuid item_id FK
        uuid user_id FK
        string message
        datetime remind_at
        bool is_sent
    }
    LIST_PERMISSION {
        uuid id PK
        uuid list_id FK
        uuid user_id FK
        bool can_add
        bool can_edit
        bool can_delete
    }
    HISTORY {
        uuid id PK
        uuid list_id FK
        uuid user_id FK
        enum action
        json metadata
        datetime created_at
    }
```

---

## 3. Use Case Diagram

```mermaid
flowchart LR
    Guest((Guest / New User))
    User((Registered User))
    Admin((Group Admin))
    Admin -->|is a| User
    subgraph System["Thalaja Shopping List System"]
        Register["Register Account"]
        Login["Sign In"]
        ResetPassword["Reset Forgotten Password"]
        UpdateProfile["Update Profile"]
        CreateGroup["Create Group"]
        JoinGroup["Join Group"]
        InviteMember["Invite Member"]
        ManageGroup["Manage Group Settings"]
        CreatePrivateList["Create Private List"]
        CreateSharedList["Create Shared List"]
        ViewLists["View Lists"]
        ControlContributors["Control List Contributors"]
        ArchiveList["Archive / Complete List"]
        DeleteList["Delete List"]
        AddItem["Add Item"]
        AddItemDetails["Add Item Details"]
        EditItem["Edit Item"]
        RemoveItem["Delete Item"]
        MarkPurchased["Mark Item as Purchased"]
        SyncList["Sync Shared List in Real Time"]
        ManageCategories["Manage Categories"]
        CreateRecipeCategory["Create Recipe-Based Category"]
        AddRecipeIngredients["Add Recipe Ingredients to List"]
        CreateReminder["Create Reminder"]
        ReceiveReminder["Receive Notification"]
        ViewHistory["View Purchase History"]
        AddByVoice["Add Item by Voice"]
        AddByBarcode["Add Item by Barcode"]
        AddByCamera["Add Item by Camera Recognition"]
    end
    Guest --> Register
    Guest --> Login
    Guest --> ResetPassword
    User --> Login
    User --> ResetPassword
    User --> UpdateProfile
    User --> CreateGroup
    User --> JoinGroup
    User --> CreatePrivateList
    User --> CreateSharedList
    User --> ViewLists
    User --> ControlContributors
    User --> ArchiveList
    User --> DeleteList
    User --> AddItem
    User --> EditItem
    User --> RemoveItem
    User --> MarkPurchased
    User --> ManageCategories
    User --> CreateRecipeCategory
    User --> AddRecipeIngredients
    User --> CreateReminder
    User --> ReceiveReminder
    User --> ViewHistory
    User --> AddByVoice
    User --> AddByBarcode
    User --> AddByCamera
    Admin --> InviteMember
    Admin --> ManageGroup
    AddItem -.->|includes| AddItemDetails
    EditItem -.->|includes| SyncList
    RemoveItem -.->|includes| SyncList
    MarkPurchased -.->|includes| SyncList
    AddRecipeIngredients -.->|includes| AddItem
    AddByVoice -.->|extends| AddItem
    AddByBarcode -.->|extends| AddItem
    AddByCamera -.->|extends| AddItem
```

---

## 4. Sequence Diagrams

### 4.1 Register Account

```mermaid
sequenceDiagram
    actor Guest
    participant App as Flutter App
    participant API as Flask API
    participant Auth as Auth Service
    participant DB as Supabase PostgreSQL

    Guest->>App: Enter name, email, and password
    App->>API: POST /auth/register
    API->>Auth: registerUser(name, email, password)
    Auth->>DB: Check if email already exists

    alt Email already exists
        DB-->>Auth: User found
        Auth-->>API: Registration failed
        API-->>App: 409 Conflict
        App-->>Guest: Show email already used message
    else Email is available
        DB-->>Auth: No user found
        Auth->>DB: Create user with hashed password
        DB-->>Auth: User created
        Auth-->>API: User data and tokens
        API-->>App: 201 Created
        App-->>Guest: Navigate to home
    end
```

### 4.2 Sign In

```mermaid
sequenceDiagram
    actor User
    participant App as Flutter App
    participant API as Flask API
    participant Auth as Auth Service
    participant DB as Supabase PostgreSQL

    User->>App: Enter email and password
    App->>API: POST /auth/login
    API->>Auth: authenticate(email, password)
    Auth->>DB: Find user by email

    alt Invalid email or password
        DB-->>Auth: User not found or password mismatch
        Auth-->>API: Authentication failed
        API-->>App: 401 Unauthorized
        App-->>User: Show login error
    else Valid credentials
        DB-->>Auth: User found
        Auth->>Auth: Verify password
        Auth-->>API: Generate access token
        API-->>App: 200 OK with token
        App-->>User: Navigate to groups
    end
```

### 4.3 Reset Forgotten Password

```mermaid
sequenceDiagram
    actor User
    participant App as Flutter App
    participant API as Flask API
    participant Auth as Auth Service
    participant Email as Email Service
    participant DB as Supabase PostgreSQL

    User->>App: Request password reset
    App->>API: POST /auth/forgot-password
    API->>Auth: createResetToken(email)
    Auth->>DB: Find user by email

    alt Email not registered
        DB-->>Auth: No user found
        Auth-->>API: Reset request accepted
        API-->>App: 200 OK
        App-->>User: Show check your email message
    else Email registered
        DB-->>Auth: User found
        Auth->>DB: Save reset token
        Auth->>Email: Send password reset link
        Email-->>User: Password reset email
        Auth-->>API: Reset email sent
        API-->>App: 200 OK
        App-->>User: Show check your email message
    end
```

### 4.4 Create Group

```mermaid
sequenceDiagram
    actor User
    participant App as Flutter App
    participant API as Flask API
    participant GroupService as Group Service
    participant DB as Supabase PostgreSQL

    User->>App: Enter group name
    App->>API: POST /groups
    API->>GroupService: createGroup(userId, groupName)
    GroupService->>GroupService: Generate invite code
    GroupService->>DB: Save group and add user as member with role=admin
    DB-->>GroupService: Group created
    GroupService-->>API: Group details with invite code
    API-->>App: 201 Created
    App-->>User: Show group and invite code (user is now admin)
```

### 4.5 Join Group

```mermaid
sequenceDiagram
    actor User
    participant App as Flutter App
    participant API as Flask API
    participant GroupService as Group Service
    participant DB as Supabase PostgreSQL

    User->>App: Enter invite code
    App->>API: POST /groups/join
    API->>GroupService: joinGroup(userId, inviteCode)
    GroupService->>DB: Find group by invite code

    alt Invalid invite code
        DB-->>GroupService: No group found
        GroupService-->>API: Join failed
        API-->>App: 404 Not Found
        App-->>User: Show invalid invite code message
    else Valid invite code
        DB-->>GroupService: Group found
        GroupService->>DB: Add user as group member with role=member
        DB-->>GroupService: Member added
        GroupService-->>API: Group details
        API-->>App: 200 OK
        App-->>User: Show group lists
    end
```

### 4.6 Create Shopping List

```mermaid
sequenceDiagram
    actor User
    participant App as Flutter App
    participant API as Flask API
    participant ListService as List Service
    participant DB as Supabase PostgreSQL

    User->>App: Create shopping list
    App->>API: POST /lists

    alt List is private (no groupId provided)
        API->>ListService: createList(userId, null, title)
        ListService->>DB: Save shopping list with group_id = null
        DB-->>ListService: List created
        ListService-->>API: List details
        API-->>App: 201 Created
        App-->>User: Open new private list
    else List is shared (groupId provided)
        API->>ListService: createList(userId, groupId, title)
        ListService->>DB: Check group membership

        alt User is not a group member
            DB-->>ListService: Membership not found
            ListService-->>API: Access denied
            API-->>App: 403 Forbidden
            App-->>User: Show permission error
        else User is a group member
            DB-->>ListService: Membership valid
            ListService->>DB: Save shopping list with group_id
            DB-->>ListService: List created
            ListService-->>API: List details
            API-->>App: 201 Created
            App-->>User: Open new shared list
        end
    end
```

### 4.7 Add Item to List

```mermaid
sequenceDiagram
    actor User
    participant App as Flutter App
    participant API as Flask API
    participant ItemService as Item Service
    participant DB as Supabase PostgreSQL
    participant Sync as Real-Time Sync

    User->>App: Add item details
    App->>API: POST /lists/{listId}/items
    API->>ItemService: addItem(userId, listId, itemData)
    ItemService->>DB: Check list permission

    alt User cannot add items
        DB-->>ItemService: Permission denied
        ItemService-->>API: Access denied
        API-->>App: 403 Forbidden
        App-->>User: Show permission error
    else User can add items
        DB-->>ItemService: Permission valid
        ItemService->>DB: Save list item
        DB-->>ItemService: Item created
        ItemService->>Sync: Broadcast item added
        Sync-->>App: Update shared list
        ItemService-->>API: Item details
        API-->>App: 201 Created
        App-->>User: Show item in list
    end
```

### 4.8 Mark Item as Purchased

```mermaid
sequenceDiagram
    actor User
    participant App as Flutter App
    participant API as Flask API
    participant ItemService as Item Service
    participant DB as Supabase PostgreSQL
    participant Sync as Real-Time Sync

    User->>App: Mark item as purchased
    App->>API: PATCH /items/{itemId}/purchase
    API->>ItemService: markItemAsPurchased(userId, itemId)
    ItemService->>DB: Check list permission

    alt User cannot update item
        DB-->>ItemService: Permission denied
        ItemService-->>API: Access denied
        API-->>App: 403 Forbidden
        App-->>User: Show permission error
    else User can update item
        DB-->>ItemService: Permission valid
        ItemService->>DB: Update item status and buyer
        DB-->>ItemService: Item updated
        ItemService->>Sync: Broadcast purchased status
        Sync-->>App: Update shared list
        ItemService-->>API: Updated item details
        API-->>App: 200 OK
        App-->>User: Show item as purchased
    end
```

### 4.9 View List History

```mermaid
sequenceDiagram
    actor User
    participant App as Flutter App
    participant API as Flask API
    participant HistoryService as History Service
    participant DB as Supabase PostgreSQL

    User->>App: Open list history
    App->>API: GET /lists/{listId}/history
    API->>HistoryService: getListHistory(userId, listId)
    HistoryService->>DB: Check list membership

    alt User is not allowed to view history
        DB-->>HistoryService: Access denied
        HistoryService-->>API: Forbidden
        API-->>App: 403 Forbidden
        App-->>User: Show permission error
    else User is allowed
        DB-->>HistoryService: Access allowed
        HistoryService->>DB: Get list history
        DB-->>HistoryService: History records
        HistoryService-->>API: History list
        API-->>App: 200 OK
        App-->>User: Show activity timeline
    end
```
*Thalaja Team · Stage 3 Technical Documentation · Section 1 of 7*
