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

| Screen |
|---|
| Screen 1 — Register | 
| Screen 2 — Login |    
| Screen 3 — Groups Home | 
| Screen 4 — Group Detail |
| Screen 5 — List Detail | 
| Screen 6 — Item Add Sheet | 
| Screen 7 — Buying View | 
| Screen 8 — History Screen | 
| Screen 9 — Recipe Detail / Create | 
| Screen 10 — Notifications & Buyer Assignment | 
| Screen 11 — Group Admin Settings | 

Figma Mockup

<p align="center">
  <img src="images/register.png" width="180">
  <img src="images/login.png" width="180">
  <img src="images/groups_Home.png" width="180">
  <img src="images/groups.png" width="180">
</p>

<p align="center">
  <img src="images/list_Detail.png" width="180">
  <img src="images/item_add.png" width="180">
  <img src="images/History (2).png" width="180">
  <img src="images/History_screen.png" width="180">
  

</p>



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
            device_ds["datasources/device (camera, scanner)"]
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
            auth_routes["auth.py (register + OTP, login + OTP)"]
            group_routes["groups.py (create/join, membership, roles)"]
            list_routes["lists.py (shared lists)"]
            item_routes["items.py (CRUD, mark purchased, bulk delete)"]
            category_routes["categories.py (system-defined aisle categories)"]
            recipe_routes["recipes.py"]
            notification_routes["notifications.py (heading to store, assign buyer, remind)"]
            history_routes["history.py (action log)"]
        end
        subgraph services_pkg["app/services/"]
            auth_service["auth_service.py (OTP via Authentica)"]
            group_service["group_service.py (membership + roles)"]
            list_service["list_service.py"]
            item_service["item_service.py"]
            recipe_service["recipe_service.py"]
            notification_service["notification_service.py (FCM)"]
            history_service["history_service.py"]
        end
        subgraph models_pkg["app/models/"]
            user_m["user.py"]
            user_device_m["user_device.py"]
            group_m["group.py"]
            member_m["group_member.py (role: admin | member)"]
            list_m["shopping_list.py"]
            item_m["grocery_item.py"]
            cat_m["category.py"]
            recipe_m["recipe.py"]
            ingredient_m["recipe_ingredient.py"]
            action_m["list_action.py"]
        end
        subgraph persist_pkg["app/persistence/"]
            repos["repositories/"]
        end
        config["app/config.py"]
        extensions["app/extensions.py"]
    end

    subgraph External["External Services"]
        subgraph Supabase["Supabase"]
            postgres["PostgreSQL Database"]
            realtime["Supabase Realtime"]
            storage["Supabase Storage"]
        end
        fcm["Firebase Cloud Messaging (FCM)"]
        authentica["Authentica (OTP / SMS)"]
    end

    presentation --> domain
    presentation --> core
    data --> domain
    data --> core
    remote_ds -->|REST + JWT| api_pkg
    realtime_ds -->|subscribe to channels| realtime
    device_ds --> repo_impl
    repo_impl --> remote_ds
    repo_impl --> realtime_ds

    api_pkg --> services_pkg
    services_pkg --> models_pkg
    services_pkg --> persist_pkg
    persist_pkg --> models_pkg
    persist_pkg --> postgres
    postgres -->|change events| realtime
    notification_service -->|push| fcm
    auth_service -->|send / verify OTP| authentica
    item_service --> storage

    api_pkg --> extensions
    api_pkg --> config
```

---

## 2. Entity-Relationship Diagram

> **Subject Areas:** Entities are grouped by domain in the source below (Group · Grocery List · Recipe). For a color-coded presentation version, export to dbdiagram.io or Figma where visual subject areas can be applied without altering the schema.

```mermaid
erDiagram

    %% ═══════════════════════════════════════════════════
    %% GROUP DOMAIN
    %% ═══════════════════════════════════════════════════

    USER {
        uuid        id             PK
        varchar     name
        varchar     email
        varchar     phone
        varchar     avatar_url
        varchar     password_hash
        timestamp   created_at
        timestamp   updated_at
    }

    USER_DEVICE {
        uuid        id             PK
        uuid        user_id        FK
        varchar     fcm_token
        enum        platform
        timestamp   updated_at
    }

    %% invite_code: alphanumeric unique string, UNIQUE constraint on column
    %% type enum: individual | household (individual = personal/private group)
    GROUP {
        uuid        id             PK
        uuid        created_by     FK
        varchar     name
        varchar     image_url
        enum        type
        varchar     invite_code
        timestamp   created_at
        timestamp   updated_at
    }

    GROUP_MEMBER {
        uuid        id             PK
        uuid        group_id       FK
        uuid        user_id        FK
        enum        role
        timestamp   joined_at
    }

    %% ═══════════════════════════════════════════════════
    %% GROCERY LIST DOMAIN
    %% ═══════════════════════════════════════════════════

    %% type enum values: Fresh Produce · Meat & Seafood · Dairy & Eggs · Bakery · Pantry
    %% Cooking Essentials · Breakfast · Snacks · Beverages · Frozen · Ready-to-Eat
    %% Baby · Personal Care · Health · Household · Pets
    CATEGORY {
        uuid        id             PK
        enum        type
        varchar     image_url
    }

    SHOPPING_LIST {
        uuid        id             PK
        uuid        group_id       FK
        uuid        created_by     FK
        uuid        completed_by   FK
        varchar     name
        enum        status
        timestamp   created_at
        timestamp   updated_at
        timestamp   completed_at
    }

    GROCERY_ITEM {
        uuid        id             PK
        uuid        list_id        FK
        uuid        category_id    FK
        uuid        added_by       FK
        uuid        bought_by      FK
        varchar     name
        varchar     brand
        float       quantity
        varchar     unit
        boolean     is_bought
        boolean     is_urgent
        varchar     image_url
        varchar     barcode
        text        notes
        timestamp   created_at
        timestamp   updated_at
    }

    LIST_ACTION {
        uuid        id                    PK
        uuid        list_id               FK
        uuid        user_id               FK
        enum        action
        json        metadata
        timestamp   undo_available_until
        boolean     is_undone
        timestamp   created_at
    }

    %% ═══════════════════════════════════════════════════
    %% RECIPE DOMAIN
    %% ═══════════════════════════════════════════════════

    RECIPE {
        uuid        id             PK
        uuid        group_id       FK
        uuid        created_by     FK
        varchar     name
        varchar     image_url
        enum        type
        varchar     description
        text        instructions
        timestamp   created_at
        timestamp   updated_at
    }

    RECIPE_INGREDIENT {
        uuid        id             PK
        uuid        recipe_id      FK
        varchar     name
        float       quantity
        varchar     unit
    }

    %% ═══════════════════════════════════════════════════
    %% RELATIONSHIPS
    %% ═══════════════════════════════════════════════════

    USER          ||--o{  USER_DEVICE        : "registers"
    USER          ||--o{  GROUP_MEMBER       : "joins"
    USER          ||--o{  LIST_ACTION        : "performs"
    USER          ||--o{  RECIPE             : "creates"

    GROUP         ||--|{  GROUP_MEMBER       : "has"
    GROUP         ||--o{  SHOPPING_LIST      : "contains"
    GROUP         ||--o{  RECIPE             : "owns"

    SHOPPING_LIST ||--o{  GROCERY_ITEM       : "contains"
    SHOPPING_LIST ||--o{  LIST_ACTION        : "logs"

    CATEGORY      |o--o{  GROCERY_ITEM       : "classifies"

    RECIPE        ||--|{  RECIPE_INGREDIENT  : "has"
```

---

## 3. Use Case Diagram

```mermaid
flowchart LR
    Guest((Guest))
    Member((Member))
    Buyer((Buyer))
    Admin((Admin))

    Buyer -->|is a| Member
    Admin -->|is a| Member

    subgraph System["Thalaja — Grocery Coordination System"]

        Register["Register Account"]
        SignIn["Sign In"]
        ResetPassword["Reset Password"]
        UpdateProfile["Update Profile"]

        CreateGroup["Create Group"]
        JoinGroup["Join Group via Invite Code"]
        ShareInviteCode["Share Invite Code"]
        EditGroupInfo["Edit Group Name & Icon"]
        RemoveMember["Remove Member"]
        TransferAdmin["Transfer Admin Role"]

        CreateList["Create Shopping List"]
        ViewLists["View Lists"]
        RemoveList["Remove List from Group"]

        AddItem["Add Item"]
        AddItemDetails["Fill Item Details"]
        BrowseItemHistory["Browse Item History"]
        BrowseCatalog["Browse Grocery Catalog"]
        AddByBarcode["Add by Barcode"]
        AddByPhoto["Add by Photo Recognition"]
        ImportRecipeIngredients["Import Recipe Ingredients"]
        EditItem["Edit Item"]
        DeleteItem["Delete Item"]
        MarkUrgent["Mark Item as Urgent"]
        BulkDelete["Bulk Delete Items"]
        SyncList["Sync Shared List in Real Time"]

        EnterBuyingMode["Enter Buying Mode"]
        CheckOffItem["Check Off Item"]
        FilterUrgentItems["Filter Urgent Items"]
        CompleteTrip["Complete Trip"]

        ViewActionLog["View Action Log"]
        ViewTripHistory["View Trip History"]
        ReAddUnpurchased["Re-add Unpurchased Items"]

        HeadingToStore["Announce Heading to Store"]
        AssignBuyer["Assign Buyer"]
        RemindMember["Remind Member to Add Items"]

        CreateRecipe["Create Recipe"]
        ViewRecipes["Browse Recipes"]
        ImportAllIngredients["Import All Ingredients to List"]
        ShareRecipe["Share Recipe in Group"]
        DeleteRecipe["Delete Recipe"]
    end

    %% Guest
    Guest --> Register
    Guest --> SignIn
    Guest --> ResetPassword

    %% Member
    Member --> SignIn
    Member --> ResetPassword
    Member --> UpdateProfile
    Member --> CreateGroup
    Member --> JoinGroup
    Member --> ShareInviteCode
    Member --> CreateList
    Member --> ViewLists
    Member --> AddItem
    Member --> EditItem
    Member --> DeleteItem
    Member --> MarkUrgent
    Member --> BulkDelete
    Member --> ViewActionLog
    Member --> ViewTripHistory
    Member --> AssignBuyer
    Member --> RemindMember
    Member --> CreateRecipe
    Member --> ViewRecipes
    Member --> ImportAllIngredients
    Member --> ShareRecipe

    %% Buyer
    Buyer --> HeadingToStore
    Buyer --> EnterBuyingMode
    Buyer --> CheckOffItem
    Buyer --> FilterUrgentItems
    Buyer --> CompleteTrip

    %% Admin
    Admin --> EditGroupInfo
    Admin --> RemoveMember
    Admin --> TransferAdmin
    Admin --> RemoveList
    Admin --> DeleteRecipe

    %% includes
    AddItem -.->|includes| AddItemDetails
    AddItem -.->|includes| SyncList
    EditItem -.->|includes| SyncList
    DeleteItem -.->|includes| SyncList
    CheckOffItem -.->|includes| SyncList
    ViewTripHistory -.->|includes| ReAddUnpurchased

    %% extends
    BrowseItemHistory -.->|extends| AddItem
    BrowseCatalog -.->|extends| AddItem
    ImportRecipeIngredients -.->|extends| AddItem
    AddByBarcode -.->|extends| AddItem
    AddByPhoto -.->|extends| AddItem
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
    participant Authentica as Authentica (OTP)
    participant DB as Supabase PostgreSQL

    Guest->>App: Enter name, email, and phone
    App->>API: POST /auth/register
    API->>Auth: initiateRegistration(name, email, phone)
    Auth->>DB: Check if phone already registered

    alt Phone already registered
        DB-->>Auth: User found
        Auth-->>API: Registration failed
        API-->>App: 409 Conflict
        App-->>Guest: Show phone already in use message
    else Phone is available
        DB-->>Auth: No user found
        Auth->>Authentica: POST /otp/send { phone }
        Authentica-->>Auth: OTP sent
        Auth-->>API: OTP dispatched
        API-->>App: 200 OK — OTP sent
        App-->>Guest: Show OTP entry screen

        Guest->>App: Enter OTP
        App->>API: POST /auth/register/verify { phone, otp, name, email }
        API->>Auth: completeRegistration(phone, otp, name, email)
        Auth->>Authentica: POST /otp/verify { phone, otp }

        alt OTP invalid or expired
            Authentica-->>Auth: Verification failed
            Auth-->>API: OTP rejected
            API-->>App: 422 Unprocessable Entity
            App-->>Guest: Show invalid OTP message
        else OTP valid
            Authentica-->>Auth: Verified
            Auth->>DB: Create USER record
            DB-->>Auth: User created
            Auth-->>API: User data and JWT
            API-->>App: 201 Created
            App-->>Guest: Navigate to Groups Home
        end
    end
```

### 4.2 Sign In

```mermaid
sequenceDiagram
    actor User
    participant App as Flutter App
    participant API as Flask API
    participant Auth as Auth Service
    participant Authentica as Authentica (OTP)
    participant DB as Supabase PostgreSQL

    User->>App: Enter phone number
    App->>API: POST /auth/login { phone }
    API->>Auth: initiateLogin(phone)
    Auth->>DB: Find user by phone

    alt Phone not registered
        DB-->>Auth: No user found
        Auth-->>API: User not found
        API-->>App: 404 Not Found
        App-->>User: Show phone not registered message
    else Phone registered
        DB-->>Auth: User found
        Auth->>Authentica: POST /otp/send { phone }
        Authentica-->>Auth: OTP sent
        Auth-->>API: OTP dispatched
        API-->>App: 200 OK — OTP sent
        App-->>User: Show OTP entry screen

        User->>App: Enter OTP
        App->>API: POST /auth/login/verify { phone, otp }
        API->>Auth: completeLogin(phone, otp)
        Auth->>Authentica: POST /otp/verify { phone, otp }

        alt OTP invalid or expired
            Authentica-->>Auth: Verification failed
            Auth-->>API: OTP rejected
            API-->>App: 422 Unprocessable Entity
            App-->>User: Show invalid OTP message
        else OTP valid
            Authentica-->>Auth: Verified
            Auth->>DB: Load user by phone
            DB-->>Auth: User record
            Auth-->>API: JWT issued
            API-->>App: 200 OK with token
            App-->>User: Navigate to Groups Home
        end
    end
```

### 4.3 Account Recovery

> **Note:** With Authentica OTP authentication, account recovery is handled by re-verifying ownership of the registered phone number. There is no email-based password reset flow. If a user loses access to their phone, account recovery is handled via Authentica support procedures. This sequence diagram is deferred pending final confirmation of the Authentica account recovery flow.

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

    User->>App: Enter list name
    App->>API: POST /groups/{groupId}/lists
    API->>ListService: createList(userId, groupId, name)
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
        App-->>User: Open new list
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
    participant Realtime as Supabase Realtime

    User->>App: Fill item details
    App->>API: POST /lists/{listId}/items
    API->>ItemService: addItem(userId, listId, itemData)
    ItemService->>DB: Check group membership for list

    alt User is not a group member
        DB-->>ItemService: Membership not found
        ItemService-->>API: Access denied
        API-->>App: 403 Forbidden
        App-->>User: Show permission error
    else User is a group member
        DB-->>ItemService: Membership valid
        ItemService->>DB: Save grocery item and log LIST_ACTION
        DB-->>ItemService: Item created
        DB-)Realtime: Change event — INSERT on GROCERY_ITEM
        Realtime--)App: Real-time update pushed to list subscribers
        ItemService-->>API: Item details
        API-->>App: 201 Created
        App-->>User: Show item in list
    end
```

### 4.8 Mark Item as Purchased

```mermaid
sequenceDiagram
    actor Buyer
    participant App as Flutter App
    participant API as Flask API
    participant ItemService as Item Service
    participant DB as Supabase PostgreSQL
    participant Realtime as Supabase Realtime

    Buyer->>App: Tap item to check off
    App->>API: PATCH /lists/{listId}/items/{itemId}/purchase
    API->>ItemService: markItemAsPurchased(userId, listId, itemId)
    ItemService->>DB: Check group membership for list

    alt User is not a group member
        DB-->>ItemService: Membership not found
        ItemService-->>API: Access denied
        API-->>App: 403 Forbidden
        App-->>Buyer: Show permission error
    else User is a group member
        DB-->>ItemService: Membership valid
        ItemService->>DB: Set is_bought = true, bought_by = userId, log LIST_ACTION
        DB-->>ItemService: Item updated
        DB-)Realtime: Change event — UPDATE on GROCERY_ITEM
        Realtime--)App: Real-time update pushed to list subscribers
        ItemService-->>API: Updated item
        API-->>App: 200 OK
        App-->>Buyer: Show item as checked off
    end
```

### 4.9 View Action Log

```mermaid
sequenceDiagram
    actor User
    participant App as Flutter App
    participant API as Flask API
    participant HistoryService as History Service
    participant DB as Supabase PostgreSQL

    User->>App: Open action log for list
    App->>API: GET /lists/{listId}/actions
    API->>HistoryService: getActionLog(userId, listId)
    HistoryService->>DB: Check group membership for list

    alt User is not a group member
        DB-->>HistoryService: Membership not found
        HistoryService-->>API: Forbidden
        API-->>App: 403 Forbidden
        App-->>User: Show permission error
    else User is a group member
        DB-->>HistoryService: Membership valid
        HistoryService->>DB: Query LIST_ACTION by list_id ORDER BY created_at DESC
        DB-->>HistoryService: Action log records
        HistoryService-->>API: Action log entries
        API-->>App: 200 OK
        App-->>User: Show action timeline
    end
```
## External API Table

| Module | API Name | Method | Endpoint | Auth | Related Story |
|---|---|---|---|---|---|
| Auth | Register — Send OTP | POST | /auth/register | No | US-01 |
| Auth | Register — Verify OTP | POST | /auth/register/verify | No | US-01 |
| Auth | Login — Send OTP | POST | /auth/login | No | US-02 |
| Auth | Login — Verify OTP | POST | /auth/login/verify | No | US-02 |
| User | Get Profile | GET | /users/me | Yes | US-03 |
| User | Update Profile | PATCH | /users/me | Yes | US-03 |
| User | Register Device Token | POST | /users/me/devices | Yes | US-30, US-31, US-32 |
| Group | Create Group | POST | /groups | Yes | US-04 |
| Group | Join Group | POST | /groups/join | Yes | US-05 |
| Group | List My Groups | GET | /groups | Yes | US-06 |
| Group | Get Group Members | GET | /groups/{groupId}/members | Yes | US-08, US-10 |
| Group | Update Group | PATCH | /groups/{groupId} | Yes (admin) | US-09 |
| Group | Remove Member | DELETE | /groups/{groupId}/members/{userId} | Yes (admin) | US-08 |
| Group | Transfer Admin | PATCH | /groups/{groupId}/admin | Yes (admin) | US-10 |
| List | Create List | POST | /groups/{groupId}/lists | Yes | US-13 |
| List | Get Group Lists | GET | /groups/{groupId}/lists | Yes | US-13 |
| List | Get List Detail | GET | /lists/{listId} | Yes | US-13 |
| List | Update List | PATCH | /lists/{listId} | Yes (admin) | US-14 |
| List | Remove List | DELETE | /lists/{listId} | Yes (admin) | US-11 |
| List | Complete Trip | PATCH | /lists/{listId}/complete | Yes | US-15 |
| List | Get Action Log | GET | /lists/{listId}/actions | Yes | US-28 |
| Item | Add Item | POST | /lists/{listId}/items | Yes | US-16 |
| Item | Update Item | PATCH | /lists/{listId}/items/{itemId} | Yes | US-16 |
| Item | Delete Item | DELETE | /lists/{listId}/items/{itemId} | Yes | US-16 |
| Item | Bulk Delete Items | DELETE | /lists/{listId}/items | Yes | US-23 |
| Item | Undo Bulk Delete | POST | /lists/{listId}/actions/{actionId}/undo | Yes | US-23 |
| Item | Mark Purchased | PATCH | /lists/{listId}/items/{itemId}/purchase | Yes | US-26 |
| Item | Upload Item Image | POST | /lists/{listId}/items/{itemId}/image | Yes | US-21 |
| Item | Lookup by Barcode | GET | /items/barcode/{code} | Yes | US-19 |
| Category | List Categories | GET | /categories | Yes | US-26 |
| Recipe | Create Recipe | POST | /groups/{groupId}/recipes | Yes | US-33 |
| Recipe | Get Group Recipes | GET | /groups/{groupId}/recipes | Yes | US-33, US-35 |
| Recipe | Get Recipe | GET | /recipes/{recipeId} | Yes | US-34 |
| Recipe | Update Recipe | PATCH | /recipes/{recipeId} | Yes | US-33 |
| Recipe | Delete Recipe | DELETE | /recipes/{recipeId} | Yes (admin) | US-12 |
| Recipe | Import to List | POST | /lists/{listId}/items/from-recipe/{recipeId} | Yes | US-34 |
| Notification | Heading to Store | POST | /lists/{listId}/notifications/heading-to-store | Yes | US-30 |
| Notification | Assign Buyer | POST | /lists/{listId}/notifications/assign-buyer | Yes | US-31 — sends FCM only, does not modify list |
| Notification | Remind Member | POST | /lists/{listId}/notifications/remind-member | Yes | US-32 |

## Internal API / Backend Operations Table

| Layer | Internal Operation | Purpose | Used By External API | Related Story |
|---|---|---|---|---|
| Service | send_registration_otp() | Call Authentica POST /otp/send with phone; reject if phone already registered | /auth/register | US-01 |
| Service | complete_registration() | Call Authentica POST /otp/verify; on success insert USER row | /auth/register/verify | US-01 |
| Service | send_login_otp() | Verify phone exists in USER, then call Authentica POST /otp/send | /auth/login | US-02 |
| Service | complete_login() | Call Authentica POST /otp/verify; on success load USER by phone, issue JWT | /auth/login/verify | US-02 |
| Service | register_device_token() | Upsert USER_DEVICE row with FCM token | /users/me/devices | US-30, US-31, US-32 |
| Service | create_group() | Insert GROUP, add creator as admin GROUP_MEMBER | /groups | US-04 |
| Service | join_group_by_code() | Validate invite code, insert GROUP_MEMBER with role=member | /groups/join | US-05 |
| Service | update_group() | Update name or image_url | /groups/{groupId} | US-09 |
| Service | remove_member() | Delete GROUP_MEMBER row, verify caller is admin | /groups/{groupId}/members/{userId} | US-08 |
| Service | transfer_admin() | Set target member role=admin, set caller role=member | /groups/{groupId}/admin | US-10 |
| Service | validate_group_membership() | Check USER is a GROUP_MEMBER before list or item operations | all list + item endpoints | US-13, US-16 |
| Service | create_list() | Insert SHOPPING_LIST with group_id (always required) | /groups/{groupId}/lists | US-13 |
| Service | complete_trip() | Set status=completed, completed_by, completed_at on SHOPPING_LIST | /lists/{listId}/complete | US-15 |
| Service | assign_buyer() | Query USER_DEVICE for target member, fire FCM push — does not modify SHOPPING_LIST | /lists/{listId}/notifications/assign-buyer | US-31 |
| Service | add_item_to_list() | Check membership, insert GROCERY_ITEM, write LIST_ACTION (Supabase CDC fires real-time event) | /lists/{listId}/items | US-16 |
| Service | update_item() | Edit GROCERY_ITEM fields, write LIST_ACTION | /lists/{listId}/items/{itemId} | US-16 |
| Service | delete_item() | Delete GROCERY_ITEM, write LIST_ACTION | /lists/{listId}/items/{itemId} | US-16 |
| Service | bulk_delete_items() | Delete all GROCERY_ITEM rows for list, write LIST_ACTION with full item snapshot in metadata, set undo_available_until | /lists/{listId}/items | US-23 |
| Service | undo_bulk_delete() | Read LIST_ACTION.metadata, re-insert GROCERY_ITEM rows, set is_undone=true | /lists/{listId}/actions/{actionId}/undo | US-23 |
| Service | mark_item_as_purchased() | Set is_bought=true, bought_by=userId on GROCERY_ITEM, write LIST_ACTION (Supabase CDC fires real-time event) | /lists/{listId}/items/{itemId}/purchase | US-26 |
| Service | check_duplicate_item() | Fuzzy-match item name against active GROCERY_ITEM rows on same list; returns match candidates | called by add_item_to_list() before insert | US-25 |
| Service | upload_item_image() | Store file in Supabase Storage, update GROCERY_ITEM.image_url | /lists/{listId}/items/{itemId}/image | US-21 |
| Service | get_action_log() | Query LIST_ACTION by list_id ORDER BY created_at DESC | /lists/{listId}/actions | US-28 |
| Service | create_recipe() | Insert RECIPE + RECIPE_INGREDIENT rows in one transaction | /groups/{groupId}/recipes | US-33 |
| Service | add_recipe_ingredients_to_list() | Bulk-insert GROCERY_ITEM rows from RECIPE_INGREDIENT | /lists/{listId}/items/from-recipe/{recipeId} | US-34 |
| Service | send_heading_to_store() | Query USER_DEVICE for all group members, fire FCM batch push | /lists/{listId}/notifications/heading-to-store | US-30 |
| Service | send_remind_member() | Query USER_DEVICE for target member, fire FCM push | /lists/{listId}/notifications/remind-member | US-32 |
| Repository | UserRepository.find_by_phone() | Lookup for OTP login flow | auth_service | US-01, US-02 |
| Repository | UserDeviceRepository.upsert() | Save or update FCM token per user+platform | auth_service | US-30, US-31, US-32 |
| Repository | GroupRepository.find_by_invite_code() | Lookup for join flow | group_service | US-05 |
| Repository | GroupMemberRepository.add_member() / get_role() | Membership inserts and role checks | group_service, list_service | US-04, US-05, US-08 |
| Repository | ListRepository.get_group_lists() | Fetch all SHOPPING_LIST rows for a group | list_service | US-13 |
| Repository | ItemRepository.save() / delete() / bulk_delete() | CRUD for GROCERY_ITEM | item_service | US-16, US-23, US-26 |
| Repository | ActionRepository.save_event() / find_by_list() | LIST_ACTION insert and query | history_service, item_service | US-23, US-28 |
| Repository | CategoryRepository.list_all() | Return all system-defined CATEGORY rows | item_service | US-26 |
| Repository | RecipeRepository.save_with_ingredients() | Recipe + ingredients in one transaction | recipe_service | US-33 |
| Helper | generate_jwt() / decode_jwt() | Token issuing/verification | auth_service, require_auth | US-01, US-02 |
| Helper | require_auth() | Decorator validating JWT on protected routes | all protected routes | — |
| Helper | require_admin() | Decorator verifying caller has role=admin in the target group | group + list admin endpoints | US-08, US-09, US-10, US-11, US-12 |


*Thalaja Team · Stage 3 Technical Documentation*
