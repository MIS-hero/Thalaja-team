Identity chip for people and households; auto-derives initials and a brand color from the name.

```jsx
<Avatar name="Reem Al-Otaibi" size={48} />
<Avatar name="Khalid" shape="blob" />
<AvatarGroup max={4} size={36}>
  <Avatar name="Reem" /><Avatar name="Sara" /><Avatar name="Nora" /><Avatar name="Faisal" /><Avatar name="Mona" />
</AvatarGroup>
```

`shape="blob"` swaps the circle for the brand starburst sticker (great for playful contexts / empty states). Pass `src` for a photo, `colorIndex` (0-3) to pin a color. `AvatarGroup` overlaps children and shows a navy "+N" overflow.
