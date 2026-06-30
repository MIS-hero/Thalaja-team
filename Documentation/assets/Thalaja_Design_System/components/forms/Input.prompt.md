Labelled text field; indigo focus ring, red error state, supports RTL via `dir="rtl"`.

```jsx
<Input label="Item name" placeholder="e.g. Laban" iconLeft={<SearchIcon />} />
<Input label="الصنف" dir="rtl" placeholder="مثال: لبن" />
<Input label="Quantity" error="Required" />
```

Pass `iconLeft`/`iconRight` for adornments, `hint` for helper text, `error` to flag validation. Always set `dir="rtl"` for Arabic content fields.
