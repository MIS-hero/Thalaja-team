Primary tap-target button — use for any committed action; rounded pill with a bold navy outline and hard-pop shadow that depresses on press.

```jsx
<Button variant="primary" size="lg" iconLeft={<PlusIcon />} block>
  Add to list
</Button>
```

Variants: `primary` (red, default CTA), `secondary` (indigo), `mint` (success / confirm), `outline` (navy stroke on transparent), `ghost` (text-only, low emphasis), `danger` (red-tint destructive). Sizes `sm | md | lg`. Solid variants animate a 2px press into their shadow; `ghost`/`outline` don't. Keep labels short and sentence case.
