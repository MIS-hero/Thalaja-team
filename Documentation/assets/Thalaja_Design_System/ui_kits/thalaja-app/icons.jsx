// Thalaja UI kit — icon set. Lucide-style line icons (stroke 2.2, round caps),
// inlined for a self-contained kit. Lucide is the canonical icon system (see README ICONOGRAPHY).
const Icon = ({ d, size = 24, stroke = 'currentColor', sw = 2.2, fill = 'none', children, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={stroke}
    strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" {...rest}>
    {children || (Array.isArray(d) ? d.map((p, i) => <path key={i} d={p} />) : <path d={d} />)}
  </svg>
);

const Icons = {
  plus: (p) => <Icon {...p}><path d="M12 5v14"/><path d="M5 12h14"/></Icon>,
  check: (p) => <Icon {...p}><path d="M20 6L9 17l-5-5"/></Icon>,
  search: (p) => <Icon {...p}><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></Icon>,
  home: (p) => <Icon {...p}><path d="M3 10.5L12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/></Icon>,
  list: (p) => <Icon {...p}><path d="M8 6h13"/><path d="M8 12h13"/><path d="M8 18h13"/><circle cx="3.5" cy="6" r="1.2"/><circle cx="3.5" cy="12" r="1.2"/><circle cx="3.5" cy="18" r="1.2"/></Icon>,
  users: (p) => <Icon {...p}><circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5"/><path d="M16 5.2a3.2 3.2 0 010 5.6"/><path d="M21 20c0-2.8-1.8-4.8-4-5.3"/></Icon>,
  bell: (p) => <Icon {...p}><path d="M6 8a6 6 0 0112 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 003.4 0"/></Icon>,
  cart: (p) => <Icon {...p}><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/><path d="M2 3h2.2l2.3 12.4a1.6 1.6 0 001.6 1.3h8.9a1.6 1.6 0 001.6-1.3L21 7H5.3"/></Icon>,
  trash: (p) => <Icon {...p}><path d="M3 6h18"/><path d="M8 6V4h8v2"/><path d="M6 6l1 14h10l1-14"/></Icon>,
  chevronLeft: (p) => <Icon {...p}><path d="M15 5l-7 7 7 7"/></Icon>,
  chevronRight: (p) => <Icon {...p}><path d="M9 5l7 7-7 7"/></Icon>,
  x: (p) => <Icon {...p}><path d="M6 6l12 12"/><path d="M18 6L6 18"/></Icon>,
  dots: (p) => <Icon {...p}><circle cx="5" cy="12" r="1.4"/><circle cx="12" cy="12" r="1.4"/><circle cx="19" cy="12" r="1.4"/></Icon>,
  share: (p) => <Icon {...p}><circle cx="18" cy="5" r="2.6"/><circle cx="6" cy="12" r="2.6"/><circle cx="18" cy="19" r="2.6"/><path d="M8.3 10.8l7.4-4.3"/><path d="M8.3 13.2l7.4 4.3"/></Icon>,
  clock: (p) => <Icon {...p}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></Icon>,
  sparkle: (p) => <Icon {...p}><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/></Icon>,
  mic: (p) => <Icon {...p}><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0014 0"/><path d="M12 18v3"/></Icon>,
};

window.Icons = Icons;
window.Icon = Icon;
