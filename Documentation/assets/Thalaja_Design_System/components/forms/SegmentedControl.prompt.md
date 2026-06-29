Pill segmented switcher for list filters and view modes (To buy / Bought, All / Mine).

```jsx
<SegmentedControl
  value={tab}
  onChange={setTab}
  options={[{value:'todo',label:'To buy',badge:8},{value:'done',label:'Bought',badge:3}]}
/>
```

Active segment fills navy with cream text; inactive is muted. Accepts plain strings or `{value,label,badge}`. Keep to 2-3 segments.
