# CLAUDE.md — Thalaja

## Project State

Sprint 3 active (Jun 29–Jul 5): shared list infrastructure pt.2, multi-group support, history + catalog item-add paths.

| Deadline | Milestone |
|---|---|
| July 25 | Working MVP |
| August 20 | App Store, landing page, public presentation |

---

## Product Vision

Thalaja solves one specific problem: the person who shops for the whole household goes to the store without knowing what everyone needs. The core job is **collection** — aggregating every household member's requests into one actionable list before the buyer leaves.

**Cultural context is load-bearing, not decorative:**
- Target users are Saudi households with a monthly grocery ritual
- One designated buyer shops for everyone, often once a month
- Family members have no reliable way to submit requests before the trip
- The pain is duplicate purchases and forgotten items, not list organization
- Arabic is the primary language — RTL and Arabic-first, not translated

**Thalaja is NOT:**
- A general grocery manager
- A pantry or inventory tracker
- A shopping history tool (history serves the collection loop, not the other way)
- A meal planner
- A budget tracker

Every feature must serve the collection-to-purchase loop. If it doesn't make the buyer's job clearer or give requesters a voice, it does not belong.

---

## Before You Build

Before implementing any feature, screen, component, or API endpoint — ask. Do not assume. Do not invent requirements.

Ask these in order, one at a time, stopping when you have enough to proceed:

1. **Which user story does this map to?** State the US-XX ID. If it doesn't map to a documented story, flag it before proceeding.
2. **Who is the actor?** Guest, Member, Admin, or Buyer — and what is their specific goal in this moment?
3. **Does this serve the Saudi household collection problem, or is it generic grocery app functionality?** If it's generic, it needs stronger justification.
4. **What does the correct output look like?** Ask for an example, a sketch, or a reference before building the wrong thing.

Never start building to show progress. Start building when the requirement is unambiguous.

---

## Docs Index

Fetch these when the task requires it.

| File | Contents |
|---|---|
| `docs/architecture.md` | Stack table, Flutter + Flask folder structure, WebSocket event reference |
| `docs/domain.md` | Actors, key entity fields, HISTORY action enum, feature priority IDs |
| `docs/brand.md` | Color tokens, typography, logo system, category sticker rules |
| `Documentation/STAGE3-technical-documentation.md` | User stories, ER diagram, sequence diagrams, full API tables |
| `Documentation/thalaja-stage3-wireframes.md` | All 11 screen specs — layout, components, interaction states |
| `Documentation/STAGE2-project-charter.md` | Scope boundaries, risks, sprint plan |

---

## Non-Obvious Stack Constraints

- Flutter never calls Supabase directly. No Supabase Auth, no Supabase Realtime SDK, no Supabase Storage from the client. All calls go Flutter → Flask → Supabase.
- Flask-SocketIO is the only real-time channel. Scope: list-level sync only — item added/edited/removed/urgency-tagged. Buying View check/uncheck is NOT broadcast.
- WebSocket broadcast and History record write are the same transaction, not two separate steps.
- JWT is issued and validated exclusively by Flask.
- Supabase Storage is accessed via Flask service key only.

---

## Known Agent Mistakes

Update this section when a new pattern is identified.

- **Building the generic version.** When a requirement is ambiguous, Claude defaults to how any grocery app would solve it. Thalaja's answer is shaped by the Saudi family context. Ask before assuming.
- **Wrong primary color.** Tomato `#FF4924` is primary. Night `#0D0050` is text/dark. Frequently swapped.
- **Proposing Supabase-native alternatives.** Supabase Auth, Supabase Realtime, and direct client SDK calls are not options.
- **Meta-commentary in deliverable documents.** Artifacts must read as the team's own engineered documents — no reasoning traces, no inline rationale, no "Status: Resolved" commentary.
- **Scope creep during review.** Do not surface out-of-scope features as potential additions when reviewing design or architecture.
- **Re-asking after scope is set.** Clarifying questions belong before generation. Once requirements are established, proceed and state assumptions inline.

---

## Non-Obvious Business Rules

- Admin role is singular per group. Transfer is atomic — assigning a new admin removes the current admin's role in the same operation.
- `SHOPPING_LIST.group_id` is nullable. Private lists have no group.
- Buying View is fully locked. Add Item FAB is hidden, item edit is disabled — only check/uncheck is active.
- "Possible duplicate" warning on item add is non-blocking. User can proceed regardless.
- Bulk delete requires confirmation. The most recent bulk-delete HISTORY entry exposes a time-limited Undo button — no other entry does.

---

## Out of Scope

Not in this build: geofencing, occasion/event lists, financial tracking, price tracking, store inventory APIs, custom aisle sorting, in-app chat, AI recommendations, voice input, simultaneous multi-buyer sync.