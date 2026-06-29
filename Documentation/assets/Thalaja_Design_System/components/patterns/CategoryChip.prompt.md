Selectable category filter chip; fills with its tone + a small pop shadow when selected.

```jsx
<CategoryChip label="Dairy" icon="🥛" tone="indigo" selected={cat==='dairy'} onClick={()=>setCat('dairy')} />
```

Lay chips in a horizontally scrolling row above a list. Use `icon` for an emoji or icon node. Tones map to brand colors.
