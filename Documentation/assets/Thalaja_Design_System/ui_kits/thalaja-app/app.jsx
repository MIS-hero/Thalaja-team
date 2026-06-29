// Thalaja UI kit — app shell, screens, and demo state.
// Primitives come from ui.jsx (window.*), icons from icons.jsx (window.Icons).
const { useState } = React;
const I = window.Icons;

// ── Demo data ─────────────────────────────────────────────
const MEMBERS = ['Reem','Sara','Khalid','Nora','Mona'];
const CATS = [
  { id:'all', label:'All', icon:'🧺' },
  { id:'dairy', label:'Dairy', icon:'🥛', tone:'indigo' },
  { id:'produce', label:'Produce', icon:'🥬', tone:'mint' },
  { id:'bakery', label:'Bakery', icon:'🍞', tone:'red' },
  { id:'pantry', label:'Pantry', icon:'🫙', tone:'lilac' },
  { id:'meat', label:'Meat', icon:'🍗', tone:'red' },
];
const initialLists = [
  { id:'l1', title:'Weekend run', accent:'red', members:['Reem','Sara','Khalid','Nora','Mona'], items:[
    { id:1, name:'Laban', note:'2 cartons · full fat', cat:'dairy', by:'Reem', qty:2, done:false },
    { id:2, name:'Cucumber', note:'1 kg', cat:'produce', by:'Sara', qty:1, done:false },
    { id:3, name:'Tamees bread', note:'4 loaves', cat:'bakery', by:'Khalid', qty:4, done:false },
    { id:4, name:'Tomatoes', note:'1.5 kg', cat:'produce', by:'Nora', qty:1, done:true },
    { id:5, name:'Eggs', note:'1 tray', cat:'dairy', by:'Reem', qty:1, done:true },
    { id:6, name:'Chicken', note:'2 kg · whole', cat:'meat', by:'Mona', qty:2, done:false },
  ]},
  { id:'l2', title:'Ramadan pantry', accent:'indigo', members:['Reem','Nora','Mona'], items:[
    { id:1, name:'Dates — Sukkari', note:'2 kg', cat:'pantry', by:'Nora', qty:2, done:true },
    { id:2, name:'Vermicelli', note:'3 packs', cat:'pantry', by:'Reem', qty:3, done:false },
    { id:3, name:'Rose water', note:'1 bottle', cat:'pantry', by:'Mona', qty:1, done:false },
  ]},
  { id:'l3', title:'Coffee corner', accent:'mint', members:['Khalid','Reem'], items:[
    { id:1, name:'Arabic coffee beans', note:'500 g', cat:'pantry', by:'Khalid', qty:1, done:false },
    { id:2, name:'Cardamom', note:'100 g', cat:'pantry', by:'Reem', qty:1, done:false },
  ]},
];
const catIcon = id => (CATS.find(c=>c.id===id)||{}).icon || '🛒';
const catTone = id => (CATS.find(c=>c.id===id)||{}).tone || 'lilac';

// ── Phone frame ───────────────────────────────────────────
function Phone({ children }) {
  return (
    <div style={{ width:390, height:'min(844px, 94vh)', background:'var(--cream)', borderRadius:46, border:'3px solid var(--navy)',
      boxShadow:'0 30px 70px rgba(13,0,80,.28)', overflow:'hidden', position:'relative', display:'flex', flexDirection:'column' }}>
      <div style={{ height:50, flex:'none', display:'flex', alignItems:'center', justifyContent:'space-between', padding:'0 26px 0 30px', fontFamily:'var(--font-body)', fontWeight:700, fontSize:15, color:'var(--navy)' }}>
        <span>9:41</span>
        <span style={{ position:'absolute', left:'50%', top:9, transform:'translateX(-50%)', width:110, height:26, background:'var(--navy)', borderRadius:999 }}/>
        <span style={{ display:'flex', gap:6, alignItems:'center' }}>
          <svg width="18" height="12" viewBox="0 0 18 12" fill="var(--navy)"><rect x="0" y="7" width="3" height="5" rx="1"/><rect x="5" y="4" width="3" height="8" rx="1"/><rect x="10" y="1.5" width="3" height="10.5" rx="1"/><rect x="15" y="0" width="3" height="12" rx="1" opacity="0.35"/></svg>
          <svg width="22" height="12" viewBox="0 0 24 12" fill="none"><rect x="1" y="1" width="20" height="10" rx="3" stroke="var(--navy)" strokeWidth="1.5"/><rect x="3" y="3" width="14" height="6" rx="1.5" fill="var(--navy)"/><rect x="22" y="4" width="1.5" height="4" rx="1" fill="var(--navy)"/></svg>
        </span>
      </div>
      <div style={{ flex:1, minHeight:0, position:'relative', display:'flex', flexDirection:'column' }}>{children}</div>
    </div>
  );
}

// ── Bottom tab bar ────────────────────────────────────────
function TabBar({ tab, setTab }) {
  const tabs = [ {id:'home',icon:I.home,label:'Lists'}, {id:'shop',icon:I.cart,label:'Shop'}, {id:'people',icon:I.users,label:'Household'} ];
  return (
    <div style={{ flex:'none', display:'flex', alignItems:'center', justifyContent:'space-around', padding:'8px 16px 22px', background:'var(--surface-card)', borderTop:'1.5px solid var(--border-soft)' }}>
      {tabs.map(t=>{ const a=t.id===tab; const Ico=t.icon; return (
        <button key={t.id} onClick={()=>setTab(t.id)} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:3, border:'none', background:'none', cursor:'pointer', padding:'4px 14px', color:a?'var(--red)':'var(--ink-300)' }}>
          <Ico size={25} sw={a?2.6:2.2}/>
          <span style={{ fontFamily:'var(--font-body)', fontWeight:700, fontSize:11, color:a?'var(--navy)':'var(--ink-300)' }}>{t.label}</span>
        </button>
      ); })}
    </div>
  );
}

// ── Home screen ───────────────────────────────────────────
function HomeScreen({ lists, openList, onAdd }) {
  return (
    <div style={{ flex:1, minHeight:0, overflowY:'auto', padding:'8px 20px 16px' }}>
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:18 }}>
        <div>
          <div style={{ fontFamily:'var(--font-body)', fontSize:14, fontWeight:600, color:'var(--text-muted)' }}>Sabah al-khair, Reem 👋</div>
          <div style={{ fontFamily:'var(--font-display)', fontSize:28, fontWeight:700, color:'var(--navy)', lineHeight:1.2 }}>Al-Otaibi fridge</div>
        </div>
        <IconButton tone="indigo" variant="soft" ariaLabel="Notifications"><I.bell size={22}/></IconButton>
      </div>

      <div onClick={onAdd} style={{ display:'flex', alignItems:'center', gap:12, padding:'13px 16px', background:'var(--surface-card)', border:'2px solid var(--navy)', borderRadius:'var(--radius-pill)', boxShadow:'var(--shadow-pop-sm)', cursor:'pointer', marginBottom:22 }}>
        <I.search size={20} stroke="var(--ink-300)"/>
        <span style={{ flex:1, fontFamily:'var(--font-body)', fontWeight:600, color:'var(--ink-300)', fontSize:15 }}>Add to a list…</span>
        <I.mic size={20} stroke="var(--indigo)"/>
      </div>

      <Card tone="lilac" radius="lg" padding="md" style={{ display:'flex', alignItems:'center', gap:14, marginBottom:24, border:'2px solid var(--navy)' }}>
        <Blob size={56} tone="red" rotate={-8}><I.sparkle size={26} stroke="var(--cream)"/></Blob>
        <div style={{ flex:1 }}>
          <div style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:17, color:'var(--navy)' }}>Suhoor is in 3 days</div>
          <div style={{ fontFamily:'var(--font-body)', fontSize:13, color:'var(--navy)', opacity:.8 }}>Thalaja noticed you're low on dates & laban.</div>
        </div>
      </Card>

      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:12 }}>
        <span style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:20, color:'var(--navy)' }}>Shared lists</span>
        <Badge tone="neutral">{lists.length}</Badge>
      </div>
      <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
        {lists.map(l=>(
          <ListSummaryCard key={l.id} title={l.title} household="Al-Otaibi household" members={l.members}
            total={l.items.length} done={l.items.filter(i=>i.done).length} accent={l.accent} onClick={()=>openList(l.id)} />
        ))}
      </div>
    </div>
  );
}

// ── List detail screen ────────────────────────────────────
function ListDetail({ list, back, toggle, setQty, onAdd }) {
  const [cat, setCat] = useState('all');
  const [seg, setSeg] = useState('todo');
  const visible = list.items.filter(i =>
    (cat==='all' || i.cat===cat) && (seg==='todo' ? !i.done : i.done));
  const todo = list.items.filter(i=>!i.done).length;
  const done = list.items.filter(i=>i.done).length;
  const acc = { red:'var(--red)', indigo:'var(--indigo)', mint:'var(--mint)' }[list.accent];

  return (
    <div style={{ flex:1, minHeight:0, display:'flex', flexDirection:'column' }}>
      <div style={{ flex:'none', padding:'4px 18px 16px' }}>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:14 }}>
          <IconButton tone="navy" variant="soft" ariaLabel="Back" onClick={back}><I.chevronLeft size={22}/></IconButton>
          <div style={{ display:'flex', gap:8 }}>
            <IconButton tone="navy" variant="soft" ariaLabel="Share"><I.share size={20}/></IconButton>
            <IconButton tone="navy" variant="soft" ariaLabel="More"><I.dots size={20}/></IconButton>
          </div>
        </div>
        <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:14 }}>
          <Blob size={52} tone={list.accent} rotate={-6}><I.cart size={24} stroke={list.accent==='mint'?'var(--navy)':'var(--cream)'}/></Blob>
          <div style={{ flex:1, minWidth:0 }}>
            <div style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:26, color:'var(--navy)', lineHeight:1 }}>{list.title}</div>
            <div style={{ display:'flex', alignItems:'center', gap:8, marginTop:6 }}>
              <AvatarGroup size={26} max={4}>{list.members.map((m,i)=><Avatar key={i} name={m}/>)}</AvatarGroup>
              <span style={{ fontFamily:'var(--font-body)', fontSize:13, fontWeight:600, color:'var(--text-muted)' }}>{list.members.length} shopping</span>
            </div>
          </div>
        </div>
        <SegmentedControl value={seg} onChange={setSeg} size="sm" style={{ width:'100%', display:'flex' }}
          options={[{value:'todo',label:'To buy',badge:todo},{value:'done',label:'Bought',badge:done}]} />
      </div>

      <div style={{ flex:'none', display:'flex', gap:8, padding:'0 18px 14px', overflowX:'auto' }}>
        {CATS.map(c=>(
          <CategoryChip key={c.id} label={c.label} icon={c.icon} tone={c.tone||'indigo'} selected={cat===c.id} onClick={()=>setCat(c.id)} />
        ))}
      </div>

      <div style={{ flex:1, minHeight:0, overflowY:'auto', padding:'0 18px 90px', display:'flex', flexDirection:'column', gap:10 }}>
        {visible.length===0 ? (
          <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:12, padding:'40px 0', textAlign:'center' }}>
            <Blob size={88} tone="lilac" halo={null}><I.check size={40} stroke="var(--navy)"/></Blob>
            <div style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:19, color:'var(--navy)' }}>{seg==='todo'?'All bought! 🎉':'Nothing here yet'}</div>
          </div>
        ) : visible.map(it=>(
          <GroceryItem key={it.id} name={it.name} note={it.note} category={catIcon(it.cat)} categoryTone={catTone(it.cat)}
            addedBy={it.by} checked={it.done} onToggle={()=>toggle(it.id)}
            trailing={!it.done ? <QtyStepper value={it.qty} onChange={q=>setQty(it.id,q)} size="sm"/> : null} />
        ))}
      </div>

      <div style={{ position:'absolute', left:0, right:0, bottom:0, padding:'12px 18px 18px', background:'linear-gradient(to top, var(--cream) 70%, transparent)' }}>
        <Button variant="primary" block size="lg" iconLeft={<I.plus size={22}/>} onClick={onAdd}>Add item</Button>
      </div>
    </div>
  );
}

// ── Add item sheet ────────────────────────────────────────
function AddSheet({ onClose, onConfirm }) {
  const [name, setName] = useState('');
  const [cat, setCat] = useState('produce');
  const [qty, setQty] = useState(1);
  const [by, setBy] = useState('Reem');
  return (
    <div style={{ position:'absolute', inset:0, zIndex:20, display:'flex', flexDirection:'column', justifyContent:'flex-end' }}>
      <div onClick={onClose} style={{ position:'absolute', inset:0, background:'rgba(13,0,80,.4)' }}/>
      <div style={{ position:'relative', background:'var(--surface-card)', borderTopLeftRadius:32, borderTopRightRadius:32, border:'2.5px solid var(--navy)', borderBottom:'none', padding:'14px 20px 26px', boxShadow:'0 -10px 40px rgba(13,0,80,.2)' }}>
        <div style={{ width:44, height:5, borderRadius:999, background:'var(--ink-100)', margin:'0 auto 16px' }}/>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:16 }}>
          <span style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:22, color:'var(--navy)', lineHeight:1.2 }}>Add item</span>
          <IconButton tone="navy" variant="soft" size="sm" ariaLabel="Close" onClick={onClose}><I.x size={18}/></IconButton>
        </div>
        <input autoFocus value={name} onChange={e=>setName(e.target.value)} placeholder="What do we need?"
          style={{ width:'100%', height:52, padding:'0 18px', marginBottom:16, boxSizing:'border-box', background:'var(--surface-card)', border:'2px solid var(--navy)', borderRadius:'var(--radius-md)', outline:'none', fontFamily:'var(--font-body)', fontSize:17, fontWeight:600, color:'var(--text-body)' }}/>
        <div style={{ fontFamily:'var(--font-body)', fontWeight:700, fontSize:13, color:'var(--text-muted)', marginBottom:8 }}>Category</div>
        <div style={{ display:'flex', gap:8, flexWrap:'wrap', marginBottom:18 }}>
          {CATS.filter(c=>c.id!=='all').map(c=>(
            <CategoryChip key={c.id} label={c.label} icon={c.icon} tone={c.tone||'indigo'} selected={cat===c.id} onClick={()=>setCat(c.id)} />
          ))}
        </div>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:22 }}>
          <span style={{ fontFamily:'var(--font-body)', fontWeight:700, fontSize:15, color:'var(--navy)' }}>Quantity</span>
          <QtyStepper value={qty} onChange={setQty} min={1}/>
        </div>
        <Button variant="primary" block size="lg" iconLeft={<I.plus size={22}/>}
          onClick={()=>onConfirm({ name: name.trim()||'New item', cat, qty, by })}>Add to list</Button>
      </div>
    </div>
  );
}

// ── Household screen ──────────────────────────────────────
function Household() {
  const roles = { Reem:'Admin', Sara:'Member', Khalid:'Member', Nora:'Member', Mona:'Member' };
  return (
    <div style={{ flex:1, minHeight:0, overflowY:'auto', padding:'8px 20px 16px' }}>
      <div style={{ fontFamily:'var(--font-display)', fontSize:30, fontWeight:700, color:'var(--navy)', marginBottom:18 }}>Household</div>
      <Card variant="brand" radius="xl" padding="lg" style={{ marginBottom:22, position:'relative', overflow:'hidden' }}>
        <Blob size={130} tone="indigo" halo="var(--red)" haloWidth={5} style={{ position:'absolute', right:-30, top:-30, opacity:.9 }}/>
        <div style={{ position:'relative' }}>
          <div style={{ fontFamily:'var(--font-body)', fontWeight:700, fontSize:13, opacity:.85, letterSpacing:'.04em', textTransform:'uppercase' }}>Family fridge</div>
          <div style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:30, lineHeight:1.05, margin:'4px 0 14px' }}>Al-Otaibi household</div>
          <AvatarGroup size={38} max={5}>{MEMBERS.map((m,i)=><Avatar key={i} name={m}/>)}</AvatarGroup>
        </div>
      </Card>

      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:12 }}>
        <span style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:20, color:'var(--navy)' }}>Members</span>
        <Button variant="outline" size="sm" iconLeft={<I.plus size={18}/>}>Invite</Button>
      </div>
      <div style={{ display:'flex', flexDirection:'column', gap:10, marginBottom:20 }}>
        {MEMBERS.map(m=>(
          <div key={m} style={{ display:'flex', alignItems:'center', gap:12, padding:'10px 14px', background:'var(--surface-card)', border:'1.5px solid var(--border-soft)', borderRadius:'var(--radius-md)' }}>
            <Avatar name={m} size={42}/>
            <div style={{ flex:1 }}>
              <div style={{ fontFamily:'var(--font-body)', fontWeight:700, fontSize:16, color:'var(--text-strong)' }}>{m}</div>
              <div style={{ fontFamily:'var(--font-body)', fontSize:12, color:'var(--text-muted)' }}>{m==='Reem'?'You':'Joined this month'}</div>
            </div>
            <Badge tone={roles[m]==='Admin'?'mint':'neutral'}>{roles[m]}</Badge>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── App shell ─────────────────────────────────────────────
function App() {
  const [tab, setTab] = useState('home');
  const [lists, setLists] = useState(initialLists);
  const [openId, setOpenId] = useState(null);
  const [sheet, setSheet] = useState(false);

  const open = lists.find(l=>l.id===openId);
  const update = (id, fn) => setLists(ls => ls.map(l => l.id===id ? fn(l) : l));
  const toggle = (itemId) => update(openId, l => ({ ...l, items: l.items.map(i=>i.id===itemId?{...i,done:!i.done}:i) }));
  const setQty = (itemId, q) => update(openId, l => ({ ...l, items: l.items.map(i=>i.id===itemId?{...i,qty:q}:i) }));
  const addItem = (data) => {
    const targetId = openId || lists[0].id;
    update(targetId, l => ({ ...l, items: [{ id: Date.now(), name:data.name, note:`${data.qty} · added by ${data.by}`, cat:data.cat, by:data.by, qty:data.qty, done:false }, ...l.items] }));
    if(!openId){ setOpenId(targetId); setTab('home'); }
    setSheet(false);
  };

  let body;
  if(open){ body = <ListDetail list={open} back={()=>setOpenId(null)} toggle={toggle} setQty={setQty} onAdd={()=>setSheet(true)} />; }
  else if(tab==='people'){ body = <Household/>; }
  else if(tab==='shop'){ body = <ShopScreen lists={lists} openList={id=>setOpenId(id)} />; }
  else { body = <HomeScreen lists={lists} openList={id=>setOpenId(id)} onAdd={()=>setSheet(true)} />; }

  return (
    <Phone>
      {body}
      {!open && <TabBar tab={tab} setTab={t=>{ setTab(t); setOpenId(null); }} />}
      {sheet && <AddSheet onClose={()=>setSheet(false)} onConfirm={addItem} />}
    </Phone>
  );
}

// ── Shop (aggregated buy view) ────────────────────────────
function ShopScreen({ lists, openList }) {
  const all = lists.flatMap(l => l.items.filter(i=>!i.done).map(i=>({ ...i, list:l.title, listId:l.id, accent:l.accent })));
  const byCat = {};
  all.forEach(i => { (byCat[i.cat] = byCat[i.cat]||[]).push(i); });
  return (
    <div style={{ flex:1, minHeight:0, overflowY:'auto', padding:'8px 20px 16px' }}>
      <div style={{ fontFamily:'var(--font-display)', fontSize:30, fontWeight:700, color:'var(--navy)', marginBottom:4 }}>Shopping run</div>
      <div style={{ fontFamily:'var(--font-body)', fontSize:14, color:'var(--text-muted)', fontWeight:600, marginBottom:20 }}>{all.length} items across {lists.length} lists, grouped by aisle</div>
      {Object.entries(byCat).map(([c, items])=>(
        <div key={c} style={{ marginBottom:22 }}>
          <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:10 }}>
            <span style={{ fontSize:18 }}>{catIcon(c)}</span>
            <span style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:17, color:'var(--navy)', textTransform:'capitalize' }}>{c}</span>
            <Badge tone="neutral" size="sm">{items.length}</Badge>
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
            {items.map(it=>(
              <div key={it.listId+it.id} style={{ display:'flex', alignItems:'center', gap:12, padding:'11px 14px', background:'var(--surface-card)', border:'1.5px solid var(--border-soft)', borderRadius:'var(--radius-md)' }}>
                <span style={{ width:34, height:34, flex:'none', borderRadius:'var(--radius-sm)', background:'var(--surface-sunken)', display:'inline-flex', alignItems:'center', justifyContent:'center', fontSize:17 }}>{catIcon(it.cat)}</span>
                <div style={{ flex:1, minWidth:0 }}>
                  <div style={{ fontFamily:'var(--font-body)', fontWeight:700, fontSize:15, color:'var(--text-strong)' }}>{it.name}</div>
                  <div style={{ fontFamily:'var(--font-body)', fontSize:12, color:'var(--text-muted)' }}>{it.list} · {it.qty}×</div>
                </div>
                <Avatar name={it.by} size={26}/>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
