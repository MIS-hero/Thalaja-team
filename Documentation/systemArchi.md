``` mermaid
flowchart TB
    User["User"] --> Device["Hardware Platform: Phone or Laptop"]

    Device --> Frontend["Front-End: Mobile App or Web App"]

    Frontend -->|"Requests: login, groups, lists, items"| Backend["Back-End API"]

    Backend -->|"Stores and retrieves data"| Database[("Database: Users, Groups, Lists, Items, Reminders")]

    Backend -->|"Connects to"| External["External Services: Notifications, Barcode, Voice, Photos, Location"]

    Backend --> Security["Security: Login, Forgot Password, Permissions"]

    Backend --> Interfaces["System Interfaces: API Requests and Real-Time Sync"]

    Backend --> Software["Software Platform: App, API, Database Tools, Sync Tools"]

    Backend --> Structure["System Structure: Users, Groups, Lists, Items, Categories, Reminders"]

    Interfaces -->|"Live updates for shared lists"| Frontend
```
