# Sequence Diagrams

## 1. Register Account

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

---

## 2. Sign In

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

---

## 3. Reset Forgotten Password

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

---

## 4. Create Group

```mermaid
sequenceDiagram
    actor Admin
    participant App as Flutter App
    participant API as Flask API
    participant GroupService as Group Service
    participant DB as Supabase PostgreSQL

    Admin->>App: Enter group name
    App->>API: POST /groups
    API->>GroupService: createGroup(adminId, groupName)
    GroupService->>GroupService: Generate invite code
    GroupService->>DB: Save group and admin membership
    DB-->>GroupService: Group created
    GroupService-->>API: Group details with invite code
    API-->>App: 201 Created
    App-->>Admin: Show group and invite code
```

---

## 5. Join Group

```mermaid
sequenceDiagram
    actor Member
    participant App as Flutter App
    participant API as Flask API
    participant GroupService as Group Service
    participant DB as Supabase PostgreSQL

    Member->>App: Enter invite code
    App->>API: POST /groups/join
    API->>GroupService: joinGroup(userId, inviteCode)
    GroupService->>DB: Find group by invite code

    alt Invalid invite code
        DB-->>GroupService: No group found
        GroupService-->>API: Join failed
        API-->>App: 404 Not Found
        App-->>Member: Show invalid invite code message
    else Valid invite code
        DB-->>GroupService: Group found
        GroupService->>DB: Add user as group member
        DB-->>GroupService: Member added
        GroupService-->>API: Group details
        API-->>App: 200 OK
        App-->>Member: Show group lists
    end
```

---

## 6. Create Shopping List

```mermaid
sequenceDiagram
    actor User
    participant App as Flutter App
    participant API as Flask API
    participant ListService as List Service
    participant DB as Supabase PostgreSQL

    User->>App: Create shopping list
    App->>API: POST /groups/{groupId}/lists
    API->>ListService: createList(userId, groupId, categoryId, title)
    ListService->>DB: Check group membership

    alt User is not a group member
        DB-->>ListService: Membership not found
        ListService-->>API: Access denied
        API-->>App: 403 Forbidden
        App-->>User: Show permission error
    else User is a group member
        DB-->>ListService: Membership valid
        ListService->>DB: Save shopping list
        DB-->>ListService: List created
        ListService-->>API: List details
        API-->>App: 201 Created
        App-->>User: Open new list
    end
```

---

## 7. Add Item to List

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

---

## 8. Mark Item as Purchased

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

---

## 9. View List History

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
