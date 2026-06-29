Icon-only control for toolbars, list rows, and headers; circular by default, shrinks on press.

```jsx
<IconButton tone="red" variant="solid" ariaLabel="Add item">
  <PlusIcon />
</IconButton>
```

Variants: `soft` (tinted fill, default), `solid` (full color + navy outline), `outline`, `ghost`. Tones: `indigo | red | mint | navy`. Sizes `sm(36) | md(44) | lg(52)` — never below 44px for primary taps. `shape="rounded"` for a squircle instead of a circle.
