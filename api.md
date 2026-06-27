## External API Table

| Module | API Name | Method | Endpoint | Auth | Related Story |
|---|---|---|---|---|---|
| Auth | Register | POST | /auth/register | No | assumed |
| Auth | Login | POST | /auth/login | No | High #1 |
| Auth | Forgot Password | POST | /auth/forgot-password | No | High #2 |
| Auth | Reset Password | POST | /auth/reset-password | No | High #2 |
| User | Get Profile | GET | /users/me | Yes | assumed |
| User | Update Profile | PATCH | /users/me | Yes | assumed |
| Group | Create Group | POST | /groups | Yes | High #3 |
| Group | Join Group | POST | /groups/join | Yes | High #4 |
| Group | List My Groups | GET | /groups | Yes | High #4 |
| Group | Update Group Settings | PATCH | /groups/{groupId} | Yes (admin) | assumed |
| List | Create List | POST | /lists | Yes | High #3 |
| List | Get My Lists | GET | /lists | Yes | High |
| List | Get List Detail | GET | /lists/{listId} | Yes | High |
| List | Delete List | DELETE | /lists/{listId} | Yes (owner) | assumed |
| List | Get Permissions | GET | /lists/{listId}/permissions | Yes (owner) | High #8 |
| List | Set Permission | PUT | /lists/{listId}/permissions/{userId} | Yes (owner) | High #8 |
| List | Get History | GET | /lists/{listId}/history | Yes | assumed |
| Item | Add Item | POST | /lists/{listId}/items | Yes | High #4 |
| Item | Update Item | PATCH | /lists/{listId}/items/{itemId} | Yes | High #5 |
| Item | Delete Item | DELETE | /lists/{listId}/items/{itemId} | Yes | High #5 |
| Item | Mark Purchased | PATCH | /lists/{listId}/items/{itemId}/purchase | Yes | High #7 |
| Item | Upload Item Photo | POST | /lists/{listId}/items/{itemId}/photo | Yes | Low #3 |
| Category | List Categories | GET | /categories | Yes | Medium #2 |
| Category | Create Category | POST | /categories | Yes | Medium #3, #5, #6 |
| Recipe | Create Recipe | POST | /recipes | Yes | Medium #4 |
| Recipe | Add Recipe to List | POST | /lists/{listId}/items/from-recipe/{recipeId} | Yes | Medium #4 |
| Reminder | Create Reminder | POST | /reminders | Yes | Medium #7 |
| Reminder | List Reminders | GET | /reminders | Yes | Medium #7 |
| Reminder | Delete Reminder | DELETE | /reminders/{id} | Yes | Medium #7 |

## Internal API / Backend Operations Table

| Layer | Internal Operation | Purpose | Used By External API | Related Story |
|---|---|---|---|---|
| Service | create_user() | Hash password, insert USER row | /auth/register | assumed |
| Service | authenticate_user() | Verify credentials, issue JWT | /auth/login | High #1 |
| Service | generate_reset_token() | Create + store reset token, send email | /auth/forgot-password | High #2 |
| Service | reset_password() | Validate token, update password hash | /auth/reset-password | High #2 |
| Service | create_group() | Insert GROUP, add creator as admin member | /groups | High #3 |
| Service | join_group_by_code() | Validate invite code, insert GROUP_MEMBER | /groups/join | High #4 |
| Service | update_group_settings() | Update name/invite code | /groups/{groupId} | assumed |
| Service | create_list() | Insert SHOPPING_LIST (nullable group_id) | /lists | High #3 |
| Service | validate_group_membership() | Check user belongs to group before list creation | /lists | High |
| Service | add_item_to_list() | Check permission, insert LIST_ITEM, broadcast via Sync | /lists/{listId}/items | High #4 |
| Service | update_item() | Edit item fields | /lists/{listId}/items/{itemId} | High #5 |
| Service | delete_item() | Remove item, log history | /lists/{listId}/items/{itemId} | High #5 |
| Service | mark_item_as_purchased() | Toggle is_bought, set bought_by, log history | /lists/{listId}/items/{itemId}/purchase | High #7 |
| Service | validate_list_permission() | Check can_add/can_edit/can_delete for user | item endpoints | High #8 |
| Service | set_list_permission() | Upsert LIST_PERMISSION row | /lists/{listId}/permissions/{userId} | High #8 |
| Service | create_category() | Insert CATEGORY (scoped to user/group or system) | /categories | Medium #2, #3, #5, #6 |
| Service | create_recipe() | Insert RECIPE + RECIPE_INGREDIENT rows | /recipes | Medium #4 |
| Service | add_recipe_ingredients_to_list() | Bulk-insert LIST_ITEM rows from recipe | /lists/{listId}/items/from-recipe/{recipeId} | Medium #4 |
| Service | create_reminder() | Insert REMINDER row | /reminders | Medium #7 |
| Service | get_due_reminders() | Query reminders due and not yet sent | scheduled job (not REST) | Medium #7 |
| Service | log_history_event() | Insert HISTORY row on item/list actions | called internally by item/list services | assumed |
| Service | get_list_history() | Query HISTORY by list_id | /lists/{listId}/history | assumed |
| Service | upload_item_image() | Store file in Supabase Storage, return URL | /lists/{listId}/items/{itemId}/photo | Low #3 |
| Repository | UserRepository.find_by_email() | Lookup for login/register | auth_service | High #1, #2 |
| Repository | GroupRepository.find_by_invite_code() | Lookup for join flow | group_service | High #4 |
| Repository | GroupMemberRepository.add_member() / get_role() | Membership + role checks | group_service, list_service | High #3, #4, #8 |
| Repository | ListRepository.get_user_lists() / get_group_lists() | Aggregate private + shared lists | list_service | High |
| Repository | ItemRepository.save() / delete() | CRUD for LIST_ITEM | list_service | High #4, #5, #7 |
| Repository | ListPermissionRepository.get_permission() | Permission lookup | list_service | High #8 |
| Repository | CategoryRepository.list_for_user() | System + scoped categories | list_service | Medium #2, #3, #5, #6 |
| Repository | RecipeRepository.save_with_ingredients() | Recipe + ingredients in one transaction | list_service | Medium #4 |
| Repository | ReminderRepository.find_due() | Scheduled job query | reminder_service | Medium #7 |
| Repository | HistoryRepository.save_event() / find_by_list() | History CRUD | history_service | assumed |
| Helper | hash_password() / verify_password() | bcrypt wrapper | auth_service | High #1 |
| Helper | generate_jwt() / decode_jwt() | Token issuing/verification | auth_service, require_auth | High #1 |
| Helper | require_auth() | Decorator checking JWT on protected routes | all protected routes | — |
| Helper | require_list_owner() | Decorator for permission-management endpoints | permissions endpoint | High #8 |
