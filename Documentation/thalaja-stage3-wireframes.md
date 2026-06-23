# Thalaja — Wireframe Notes
## Screen Inventory for Figma Design

> These notes define layout, components, interactions, and states for each screen.
> Use them to build frames in Figma. Once designs are complete, embed the Figma mockup links back into the main Stage 3 documentation.

---

## Table of Contents

- [Screen 1 — Register](#screen-1--register)
- [Screen 2 — Login](#screen-2--login)
- [Screen 3 — Groups Home](#screen-3--groups-home)
- [Screen 4 — Group Detail](#screen-4--group-detail)
- [Screen 5 — List Detail](#screen-5--list-detail)
- [Screen 6 — Item Add Sheet](#screen-6--item-add-sheet-bottom-sheet)
- [Screen 7 — Buying View](#screen-7--buying-view)
- [Screen 8 — History Screen](#screen-8--history-screen)
- [Screen 9 — Recipe Detail / Create](#screen-9--recipe-detail--create)
- [Screen 10 — Notifications & Buyer Assignment](#screen-10--notifications--buyer-assignment)
- [Screen 11 — Group Admin Settings](#screen-11--group-admin-settings)

---

## Screen 1 — Register

**Layout:** Single-column form, centered vertically. Thalaja logo at top.

**Components:**
- Name field (text input)
- Email field (email keyboard type)
- Password field (obscured, show/hide toggle)
- "Create Account" primary button
- "Already have an account? Sign in" text link at bottom

**Interactions:**
- Inline field validation on blur — red border + error message below field
- "Create Account" button disabled until all fields pass validation
- On success: navigate to Groups Home

**States to design:** default · field validation error · email already in use · loading (button spinner)

---

## Screen 2 — Login

**Layout:** Single-column form, centered vertically. Thalaja logo at top.

**Components:**
- Email field
- Password field (obscured, show/hide toggle)
- "Sign In" primary button
- "Don't have an account? Register" text link at bottom
- Forgot password link (post-MVP — render greyed out as placeholder only)

**Interactions:**
- On success: navigate to Groups Home
- On failure: inline error banner — "Incorrect email or password" (do not specify which field is wrong)

**States to design:** default · error banner · loading

---

## Screen 3 — Groups Home

**Layout:** Scrollable list view. Top app bar with app name and profile avatar (tapping avatar opens profile settings). FAB bottom-right for creating a group.

**Components:**
- Group cards — group icon, group name, member count, most recent list name
- FAB: "Create Group" → opens bottom sheet
- Bottom sheet — Create Group: group name field + group icon picker + confirm button → displays generated invite code on success
- "Join a Group" text link or secondary button beneath the FAB

**Interactions:**
- Tap group card → Group Detail
- Long-press group card → context menu: "Leave Group" (non-admins), "Delete Group" (admin)

**States to design:** empty (no groups) · populated · create group sheet · invite code reveal screen

---

## Screen 4 — Group Detail

**Layout:** Top section shows group icon, group name, and a member avatar strip (max 5 visible, +N overflow). Below: two tabbed sections — **Lists** and **Recipes** — organised within the same screen.

**Components:**

**Lists tab:**
- List cards — list icon, list name, item count, urgent item count (badge), last updated timestamp, status chip (Active / Completed)
- FAB: "New List" (visible on Lists tab)
- Long-press list card → admin context menu: rename, remove

**Recipes tab:**
- Recipe cards — recipe image thumbnail, recipe name, ingredient count, created by (member name)
- FAB: "New Recipe" (visible on Recipes tab)
- Long-press recipe card → admin context menu: delete
- Tap recipe card → Recipe Detail

**Persistent controls:**
- All members: share invite code button accessible from top bar
- Admin only: kebab menu (⋮) in top bar → Group Admin Settings screen

**Interactions:**
- Tap list card → List Detail
- Tap member avatar strip → member list overlay showing name and role

**States to design:** Lists tab populated · Lists tab empty · Recipes tab populated · Recipes tab empty · admin view vs. member view distinction

---

## Screen 5 — List Detail

**Layout:** Top app bar with list name, History icon button, and Buying Mode icon button. Scrollable item list grouped by aisle category. FAB bottom-right: "Add Item."

**Components:**
- Item cards — name, brand (if set), quantity + unit, notes snippet, image thumbnail (if set), urgency badge (if `is_urgent` is true), requester avatar + name
- Real-time sync active while screen is open via WebSocket — additions, edits, and removals from other members appear without pull-to-refresh (US-24)
- "Possible duplicate" inline warning banner on add when item name closely matches an existing list entry (US-25)
- Bulk delete: accessible via list options menu (⋮ top bar) — requires confirmation dialog showing item count; most recent bulk delete entry in the action log includes an "Undo" button (US-23)

**Interactions:**
- Tap item card → item edit sheet
- Long-press item card → context menu: edit, delete
- FAB → Item Add Sheet (Screen 6)
- History button → History Screen (Screen 8)
- Buying Mode button → Buying View (Screen 7)

**States to design:** populated list · empty list · real-time item arrival animation · duplicate warning banner · bulk delete confirmation dialog · post-bulk-delete undo state

---

## Screen 6 — Item Add Sheet (Bottom Sheet)

**Layout:** Modal bottom sheet, scrollable. Segmented tab row at top for add paths.

**Add path tabs:**

| Tab | Description | Sprint Target |
|---|---|---|
| Manual | Full item detail form | Sprint 2 |
| History | Searchable list of items this member has previously added | Sprint 3 |
| Catalog | Browsable grocery catalog | Sprint 3 |
| Barcode | Camera scanning overlay | Sprint 5 — shown disabled until built |
| Photo | Camera shutter for item recognition | Sprint 5 — shown disabled until built |
| Recipe | List of saved recipes; tap to preview ingredients then import | Sprint 5 |

**Manual tab components:**
- Name (text, required)
- Brand (text, optional)
- Quantity (numeric) + Unit (dropdown or text: kg / g / L / ml / pcs / box / etc.)
- Notes (multiline, optional)
- Urgency toggle — off by default, labeled "Mark as Urgent"
- Image attach button — opens camera or photo library

**States to design:** each tab default · barcode and photo disabled states · manual tab validation errors · catalog loading state

---

## Screen 7 — Buying View

**Layout:** Full-screen. Top bar with list name and "Exit Buying Mode" button. Urgency filter toggle below top bar. Items grouped under aisle section headers, ordered by a standard grocery store aisle sequence.

**Components:**
- Aisle section headers (e.g., Produce, Dairy, Meat, Frozen, Bakery, Pantry, Beverages, Household)
- Checklist item rows — name, brand, quantity, image thumbnail (if set), requester name
- Urgency filter toggle: "Show All" / "Urgent Only" — filters without leaving the view
- Tap item → marks as bought (strikethrough + dimmed); checked items sink to bottom of their aisle section. Tap again → unmarks.
- "Complete Trip" button fixed at bottom — visible once at least one item is checked

**Locked behavior:**
- "Add Item" FAB is hidden
- Item edit is disabled
- Only check and uncheck interactions are active

**Interactions:**
- "Complete Trip" → confirmation dialog → list closes → saved to group trip history → navigate back to Group Detail with list status updated to Completed

**States to design:** in-progress shop · urgent-only filtered view · all items checked · complete trip confirmation dialog

---

## Screen 8 — History Screen

**Layout:** Accessed via the History icon button on List Detail. Two tabs: **Action Log** and **Trip History**.

**Action Log tab:**
- Chronological feed, newest first
- Each entry: actor avatar + name · human-readable action description · relative timestamp
- Action types: item added · item edited · item removed · bulk delete (with "Undo" button on the most recent entry, time-limited) · item checked as bought · item unchecked · list created · list completed · recipe imported · member joined group

**Trip History tab:**
- Past completed shopping trips for this list, newest first
- Trip card: date · buyer name · item count · expandable to show the full item list from that trip

---

## Screen 9 — Recipe Detail / Create

**Layout:** Recipes are surfaced in two places: the **Recipes tab on Group Detail** (browse and manage) and the **Item Add Sheet Recipe tab** (browse and import only). This screen covers the Recipe Detail view and the Create/Edit form, reached by tapping a recipe card or the "New Recipe" FAB on Group Detail.

**Components:**
- Recipe cards — recipe image thumbnail, recipe name, ingredient count, created by (member name)
- FAB: "New Recipe"
- Recipe create/edit form:
  - Name (text, required)
  - Image (optional — camera or photo library)
  - Instructions (multiline, step-by-step text)
  - Ingredients section — rows of: ingredient name + quantity + unit; "Add Ingredient" button to append a row
  - "Save Recipe" confirm button
- Recipe detail view — full ingredients list · instructions · "Add All to List" button (prompts list selector if member belongs to multiple active groups)
- Admin only: "Delete Recipe" option visible on recipe detail

**States to design:** recipe list populated · empty recipe list · recipe detail · create form · edit form

---

## Screen 10 — Notifications & Buyer Assignment

**Layout:** Accessible from List Detail via a dedicated button or top bar action. Contains three notification actions as distinct UI sections.

**Heading to Store** (US-30)
- Button: "I'm Heading to the Store"
- On tap: confirmation dialog ("This will notify all group members to add their last items. Continue?") → sends FCM push notification to all group members → confirmation feedback to buyer

**Assign Buyer** (US-31)
- Label: "Assign a Buyer for This Trip"
- Member picker showing current group members
- On confirm: sends FCM push notification to selected member ("You've been assigned as buyer for [list name]. Head to the store when ready.")
- Confirmation feedback shown inline

**Remind Member** (US-32, Could Have)
- Label: "Remind Someone to Add Their Items"
- Member picker showing current group members
- On confirm: sends FCM push notification to selected member ("Don't forget to add your items to [list name] before the next trip.")
- Confirmation feedback shown inline

**States to design:** default · confirmation dialogs · sent feedback state

---

## Screen 11 — Group Admin Settings

**Layout:** Settings-style screen. Accessible via the kebab menu (⋮) on Group Detail. Visible only to the group admin.

**Group Identity**
- Group name — editable inline field, save on tap confirm
- Group icon — tap to change (image picker or icon/emoji selector)

**Members**
- Member list rows: avatar · name · role chip (Admin / Member) · kebab menu per row
- Member kebab options: "Remove from Group" · "Transfer Admin Role" (removes current admin's role, assigns to this member — requires confirmation dialog)
- Invite Code display with copy button and "Regenerate" option

**Danger Zone**
- "Delete Group" — destructive action, confirmation dialog required, clearly separated visually

> *Note: List removal is triggered from the list card long-press on Group Detail (admin only). Recipe removal is triggered from Recipe detail (admin only). Both are admin-gated actions but do not live on this settings screen.*

---

*Thalaja Team · Wireframe Notes for Figma · Stage 3*