The heart of the app — a checkable row on a shared grocery list. Composes Checkbox, a category token, the adder's avatar, and a trailing slot.

```jsx
<GroceryItem
  name="Laban"
  note="2 cartons · full fat"
  category="🥛"
  categoryTone="indigo"
  addedBy="Reem"
  checked={done}
  onToggle={setDone}
  trailing={<QtyStepper value={qty} onChange={setQty} size="sm" />}
/>
```

Checked rows dim and strike through. `category` takes an emoji or icon node; `addedBy` shows who put it on the list. For Arabic lists pass `dir="rtl"`. Stack rows with a `gap` of `--space-2`.
