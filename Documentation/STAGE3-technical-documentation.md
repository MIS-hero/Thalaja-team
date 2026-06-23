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

*Thalaja Team · Stage 3 Technical Documentation · Section 1 of 7*