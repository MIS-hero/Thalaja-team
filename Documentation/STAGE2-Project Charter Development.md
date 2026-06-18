# Project Charter Development
---
### Group Members:
**Reem Alyamani**, **Aljawharah Alammar**, **Mousa Alrizqi**, **Randa Baeshen**, **Abdullah Almouraibd**

**Holberton School** – **Tuwaiq Academy**

- This report has is Stage two of the final project devoloment; it covers Objectives, scope, Stakeholders, Roles, Risks and the High-level plan.
---
## Project Purpose

The purpose of this project is to simplify grocery shopping and household coordination by providing a shared mobile application that enables family members to create, manage, and update grocery lists collaboratively in real time. The application aims to improve communication between household members, reduce duplicate purchases, and make grocery shopping more efficient and organized.

---

## Project Objectives

### Real-Time Collaboration

Develop a cross-platform mobile application that enables household members to create, manage, and synchronize grocery lists in real time.

### User Satisfaction

Achieve a minimum of 500 active users and maintain an average rating of 4.5 stars or higher within the first six months after release.

### Community Engagement

Within the first three months of beta launch, ensure that at least 65% of registered users create or join a shared household group, promoting collaboration and active engagement.

---

## Stakeholders and Team Roles

###  Project Manager

**Aljawharah Alammar**

Responsible for project planning, task management, team communication, monitoring overall project progress, contributing to frontend development, and participating in the design of the user interface and project visual identity.

###  Backend Developers

**Mousa Alrizqi**
**Abdullah Alotaibi**

Responsible for backend development, designing and maintaining the application's server-side architecture, developing APIs and database integration, implementing system features, debugging and resolving technical issues, making technical and architectural decisions, and ensuring reliable communication between the application's components.

### UI/UX Designers & Frontend Developers

**Randa Baeshen**
**Reem Alyamani**
**Aljawharah Alammar**

Responsible for designing the initial Figma prototypes, planning the dashboard interface, developing the project's visual identity, and contributing to frontend development.


### External Stakeholders

| Stakeholder           | Interest / Role in Project                                                                                                                                                                       |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Instructors / Mentors | Evaluate project progress, provide technical and project guidance, review deliverables, and offer feedback to help ensure the project meets academic and technical requirements.                 |
| End Users – Families  | Primary users of the application who rely on the platform to create, organize, and manage shared grocery lists, improving household coordination and reducing shopping mistakes.                 |
| Household Members     | Collaborate within shared groups by adding, editing, and updating grocery list items in real time. They benefit from improved communication, task distribution, and reduced duplicate purchases. |
| Beta Testers          | Test the application before release, identify usability issues and bugs, and provide feedback to improve the overall user experience and application reliability.                                |


---
## Scope

**In Scope:**

- Real-time Shared List Creation: Multiple members can add, edit, and delete items from a unified household list simultaneously.
- Granular Product Specifications: Fields for specifying Brand, Size/Weight (e.g., 500g, 1L), and Quantity to eliminate shopping errors.
- Smart Category Arrangement: Automatic sorting of items by aisle or category (e.g., Produce, Dairy, Frozen) to optimize the walking path through the store.
- Member Assignments: The ability to "claim" specific items on the list so other members know who is responsible for picking them up.
- Visual Status Indicators: Clear "In-Cart" vs. "Pending" states to prevent double-buying while members are in different aisles.
- Image References: Option to attach a photo of a specific product/brand to ensure the exact item is purchased.

**Out of Scope:**

- All Financial Transactions: No payment processing, bill splitting, or price tracking.
- Budgeting Tools: No tracking of total spending or monthly grocery costs.
- Store Inventory APIs: No real-time checking of whether an item is currently in stock at a specific local supermarket
---
## Risks

**Step 1: Identify Threats**

- Technical / Sync Risks: Data Desynchronization: Two Family members are at the store simultaneously. One checks off "1L Almarai Milk," but the update fails to sync to the other user's app due to poor cellular connectivity in the store, causing them to buy a second bottle (Double Buying).

- System Downtime: database goes down on a Saturday morning during peak weekend grocery shopping hours.

**User Adoption & UX Risks:**
- Form Fatigue: Because of requiring brand, size, and quantity, users might find it too hard to add simple items (e.g., typing out "Almarai, 1L, Full Fat" just for milk) and abandon the app for a basic notes app.

- Category Misalignment: auto-sorting places an item under "Bakery," but in the user's local store, that specific item is kept in the "Snacks" aisle, causing confusion.

**Step 2: Estimate Risk (The Impact/Likelihood Matrix)**

| Threat | Likelihood (1–5) | Impact (1–5) | Risk Exposure Score | Priority |
| :--- | :--- | :--- | :--- | :--- |
| In-store Sync Delay (Data collision) | 4 | 4 | 16 | High |
| User Abandonment (Form fatigue) | 3 | 4 | 12 | Medium |
| Wrong Category Sort (UX layout) | 4 | 2 | 8 | Low |
| Server Provider Outage | 1 | 5 | 5 | Low |

**Step 3: Manage and Mitigate Risks**

**Mitigation for Sync Failures (High Priority):**
- Strategy (Reduction): Implement Optimistic UI Updates. When a user checks an item, the app immediately shows it as "checked" locally and queues the network request. If the sync fails after a timeout, the app alerts the user: "Sync failed. Please check connection." rather than silently staying un-synced.

**Mitigation for Form Fatigue (Medium Priority):**
- Strategy (Avoidance): Build an Auto-complete / History cache. The first time they type "Milk," they fill out the brand and size. The next time they type "Milk," the app autofills their previously preferred brand and size in one click.

**Mitigation for Category Misalignment (Low Priority):**
- Strategy (Contingency): Allow users to manually drag and drop items to re-categorize them on the fly if the algorithm gets it wrong.

**Step 4: Monitor and Review**
- Review Metric: Track the percentage of offline sync conflicts resolved successfully in your backend logs.

- Feedback Loops: Check user analytics. If the drop-off rate on the "Add Item" screen is high, it means form fatigue is winning, and you need to simplify the data entry UI.
---
> **[Click here to view the full Project Timeline PDF](./Project_Timeline.pdf)**
---
![image1](image1.png)
