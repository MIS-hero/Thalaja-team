Quantity stepper for grocery items — pill with a navy outline, minus/plus shrink on press, clamps to min/max.

```jsx
<QtyStepper value={qty} onChange={setQty} min={1} unit="kg" />
```

`onChange` receives the clamped value. Add `unit` for weight/volume. Use `size="sm"` inside dense list rows.
