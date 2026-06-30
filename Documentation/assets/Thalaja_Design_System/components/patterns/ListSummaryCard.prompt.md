Tappable card summarizing a shared list — title, household, member cluster, and progress. Built on the hard-pop card; depresses on press.

```jsx
<ListSummaryCard
  title="Weekend run"
  household="Al-Otaibi household"
  members={["Reem","Sara","Khalid","Nora","Mona"]}
  total={12} done={5} accent="red"
  onClick={openList}
/>
```

Use one accent per list to make them scannable on the home grid. The progress bar fills to `done/total`.
