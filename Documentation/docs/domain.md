# Domain Reference — Thalaja

## Actors

| Actor | Description |
|---|---|
| **Guest** | Unauthenticated, app installed |
| **Member** | Authenticated, belongs to one or more groups |
| **Admin** | Member with admin role — singular per group, transfer is atomic |
| **Buyer** | Member assigned/volunteered for current trip — not a permanent role, not a DB role |

## Key Entity Fields

Full ER diagram and all field definitions: `Documentation/STAGE3-technical-documentation.md` → Section 2.

Non-obvious fields that affect implementation decisions:

| Entity | Field | Note |
|---|---|---|
| `GROUP_MEMBER` | `role` | enum: `admin` \| `member`. One admin per group at all times. |
| `SHOPPING_LIST` | `group_id` | Nullable — null means private list (no group). |
| `SHOPPING_LIST` | `status` | enum: `active` → `completed`. One valid transition, triggered by buyer via "Complete Trip". |
| `LIST_ITEM` | `is_urgent` | bool, default false. Set by requester at add time. |
| `LIST_ITEM` | `bought_by` | Nullable FK to USER. Set when buyer checks item in Buying View. |
| `LIST_PERMISSION` | `can_add / can_edit / can_delete` | Per-user overrides for list access. Check before any item write operation. |

## HISTORY Action Enum

Valid values for `HISTORY.action`:

`item_added` · `item_edited` · `item_removed` · `bulk_deleted` · `item_checked` · `item_unchecked` · `list_created` · `list_completed` · `recipe_imported` · `member_joined`

`HISTORY.metadata` is JSON — stores item name, quantity, and actor details scoped to the action type.

## Undo Behavior

Only the most recent `bulk_deleted` HISTORY entry exposes an Undo button. Time-limited. No other action type has Undo.

## Feature Priority

Full user story text: `Documentation/STAGE3-technical-documentation.md` → Section 1.2.

| Priority | IDs |
|---|---|
| Must Have | US-01, 02, 04, 05, 06, 07, 13, 15, 16, 17, 24, 25, 26, 28, 30 |
| Should Have | US-03, 08, 09, 10, 11, 12, 14, 18, 21, 22, 23, 27, 29, 31, 33, 34 |
| Could Have | US-19, 20, 32, 35 |

US-19 (barcode) and US-20 (photo recognition) are Sprint 5 only. Do not pull them into earlier sprints.
