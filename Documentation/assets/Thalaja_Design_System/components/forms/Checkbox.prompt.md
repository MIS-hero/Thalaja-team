Rounded checkbox — the workhorse "got it / checked off" control on list rows; fills mint with a chunky navy tick and strikes through its label.

```jsx
<Checkbox checked={done} onChange={setDone} label="Laban — 2 cartons" />
```

`onChange` receives the next boolean. Pair with a grocery row or use standalone. Bump `size` for emphasis.
