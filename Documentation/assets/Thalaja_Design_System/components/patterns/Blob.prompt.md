The signature starburst sticker — Thalaja's most recognizable shape. Use as a decorative backdrop for icons, category tokens, and empty-state art.

```jsx
<Blob size={96} tone="mint" rotate={-8}>
  <CartIcon size={40} color="var(--navy)" />
</Blob>
```

`tone` accepts a brand name (`red|mint|indigo|lilac|navy|cream`) or any CSS color. The cream `halo` outline gives the sticker its peel-off look — keep it on color backgrounds, set `halo={null}` on cream. Children are auto-counter-rotated so they stay upright when you `rotate` the blob. Overlap several at different sizes/tones for the brand "sticker stack".
