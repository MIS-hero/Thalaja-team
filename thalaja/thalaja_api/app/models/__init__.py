"""Model registry.

Importing the models here ensures SQLAlchemy is aware of every table
when create_all() / Alembic autogenerate runs.

Only User is active for US-01/02/36; the rest are ERD stubs and are
commented out until their stories are implemented.
"""
from app.models.user import User  # noqa: F401

# Activate as each feature lands:
# from app.models.user_device import UserDevice
# from app.models.group import Group
# from app.models.group_member import GroupMember
# from app.models.category import Category
# from app.models.item import Item
# from app.models.shopping_list import ShoppingList
# from app.models.list_item import ListItem
# from app.models.history import ListAction
# from app.models.trip import Trip
# from app.models.recipe import Recipe
# from app.models.recipe_ingredient import RecipeIngredient
# from app.models.instruction import Instruction
