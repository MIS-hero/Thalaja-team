// Thalaja UI kit — primitives. Cosmetic recreations of the design-system
// components (components/**), token-driven, inlined for a self-contained kit.
const BLOB_PATH = "M 123.7 22.3 Q 110.0 10.0 123.7 22.3 Q 137.4 34.6 154.9 35.1 Q 172.4 35.7 175.7 52.9 Q 179.1 70.1 194.1 81.3 Q 209.1 92.5 196.7 107.8 Q 184.2 123.1 191.6 142.3 Q 199.1 161.4 179.2 165.1 Q 159.4 168.9 151.6 185.8 Q 143.8 202.7 126.9 196.8 Q 110.0 190.9 93.3 196.2 Q 76.7 201.6 68.1 185.9 Q 59.5 170.1 40.7 165.5 Q 21.8 160.9 29.0 142.0 Q 36.1 123.0 22.8 107.6 Q 9.4 92.3 25.9 81.6 Q 42.3 70.9 44.8 53.1 Q 47.2 35.2 64.8 34.6 Q 82.3 33.9 96.2 22.0 Z";

function Blob({ size = 80, tone = 'red', halo = 'var(--cream)', haloWidth = 7, rotate = 0, children, style = {} }) {
  const TONES = { red:'var(--red)', mint:'var(--mint)', indigo:'var(--indigo)', lilac:'var(--lilac)', navy:'var(--navy)', cream:'var(--cream)' };
  const fill = TONES[tone] || tone;
  return (
    <span style={{ position:'relative', display:'inline-grid', placeItems:'center', width:size, height:size, flex:'none', transform: rotate?`rotate(${rotate}deg)`:undefined, ...style }}>
      <svg viewBox="0 0 220 220" width={size} height={size} style={{ position:'absolute', inset:0, color:fill }}>
        <path d={BLOB_PATH} fill="currentColor" stroke={halo||'none'} strokeWidth={halo?haloWidth:0}/>
      </svg>
      {children!=null && <span style={{ position:'relative', display:'grid', placeItems:'center', transform: rotate?`rotate(${-rotate}deg)`:undefined }}>{children}</span>}
    </span>
  );
}

function Button({ children, variant='primary', size='md', iconLeft, iconRight, block=false, disabled=false, style={}, ...rest }) {
  const sizes = { sm:{h:36,p:'0 16px',f:14,g:6}, md:{h:48,p:'0 22px',f:16,g:8}, lg:{h:56,p:'0 28px',f:18,g:10} }[size];
  const V = {
    primary:{ bg:'var(--red)', c:'var(--cream)', sh:'var(--shadow-pop)', b:'2.5px solid var(--navy)' },
    secondary:{ bg:'var(--indigo)', c:'var(--cream)', sh:'var(--shadow-pop)', b:'2.5px solid var(--navy)' },
    mint:{ bg:'var(--mint)', c:'var(--navy)', sh:'var(--shadow-pop)', b:'2.5px solid var(--navy)' },
    outline:{ bg:'transparent', c:'var(--navy)', sh:'none', b:'2.5px solid var(--navy)' },
    ghost:{ bg:'transparent', c:'var(--indigo)', sh:'none', b:'2.5px solid transparent' },
  }[variant];
  return (
    <button disabled={disabled} style={{
      display: block?'flex':'inline-flex', width: block?'100%':'auto', alignItems:'center', justifyContent:'center',
      gap:sizes.g, height:sizes.h, padding:sizes.p, fontFamily:'var(--font-body)', fontWeight:700, fontSize:sizes.f, lineHeight:1,
      color:V.c, background:V.bg, border:V.b, borderRadius:'var(--radius-pill)', boxShadow:V.sh, whiteSpace:'nowrap',
      cursor:disabled?'not-allowed':'pointer', opacity:disabled?0.45:1, transition:'transform .08s, box-shadow .08s', WebkitTapHighlightColor:'transparent', ...style }}
      onMouseDown={e=>{ if(disabled||V.sh==='none')return; e.currentTarget.style.transform='translate(2px,3px)'; e.currentTarget.style.boxShadow='none'; }}
      onMouseUp={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow=V.sh; }}
      onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow=V.sh; }} {...rest}>
      {iconLeft && <span style={{display:'inline-flex',flex:'none'}}>{iconLeft}</span>}{children}{iconRight && <span style={{display:'inline-flex',flex:'none'}}>{iconRight}</span>}
    </button>
  );
}

function IconButton({ children, variant='soft', size='md', shape='circle', tone='indigo', style={}, ...rest }) {
  const dim = { sm:36, md:44, lg:52 }[size];
  const T = {
    indigo:{ soft:['var(--indigo-tint)','var(--indigo)'], solid:['var(--indigo)','var(--cream)'] },
    red:{ soft:['var(--red-tint)','var(--red-press)'], solid:['var(--red)','var(--cream)'] },
    mint:{ soft:['var(--mint-tint)','var(--success-ink)'], solid:['var(--mint)','var(--navy)'] },
    navy:{ soft:['rgba(13,0,80,.06)','var(--navy)'], solid:['var(--navy)','var(--cream)'] },
  }[tone];
  let bg='transparent', c='var(--navy)', b='2px solid transparent';
  if(variant==='soft'){[bg,c]=T.soft;} else if(variant==='solid'){[bg,c]=T.solid; b='2px solid var(--navy)';}
  else if(variant==='outline'){c=T.soft[1]; b='2px solid var(--navy)';} else if(variant==='ghost'){c=T.soft[1];}
  return (
    <button style={{ display:'inline-flex', alignItems:'center', justifyContent:'center', width:dim, height:dim, flex:'none',
      background:bg, color:c, border:b, borderRadius: shape==='circle'?'var(--radius-pill)':'var(--radius-md)', cursor:'pointer',
      transition:'transform .08s', WebkitTapHighlightColor:'transparent', ...style }}
      onMouseDown={e=>e.currentTarget.style.transform='scale(0.9)'} onMouseUp={e=>e.currentTarget.style.transform=''} onMouseLeave={e=>e.currentTarget.style.transform=''} {...rest}>
      {children}
    </button>
  );
}

function Badge({ children, tone='neutral', variant='soft', size='md', dot=false, style={} }) {
  const T = {
    neutral:{ soft:['rgba(13,0,80,.06)','var(--ink-700)'], solid:['var(--navy)','var(--cream)'] },
    red:{ soft:['var(--red-tint)','var(--red-press)'], solid:['var(--red)','var(--cream)'] },
    mint:{ soft:['var(--mint-tint)','var(--success-ink)'], solid:['var(--mint)','var(--navy)'] },
    indigo:{ soft:['var(--indigo-tint)','var(--indigo-press)'], solid:['var(--indigo)','var(--cream)'] },
    lilac:{ soft:['var(--lilac)','var(--navy)'], solid:['var(--lilac-deep)','var(--navy)'] },
  }[tone];
  const [bg,c] = variant==='solid'?T.solid:T.soft;
  const d = size==='sm'?{f:11,p:'2px 8px',h:20}:{f:13,p:'3px 10px',h:24};
  return (
    <span style={{ display:'inline-flex', alignItems:'center', gap:5, height:d.h, padding:d.p,
      background: variant==='outline'?'transparent':bg, color: variant==='outline'?T.soft[1]:c,
      border: variant==='outline'?`1.5px solid ${T.soft[1]}`:'1.5px solid transparent', borderRadius:'var(--radius-pill)',
      fontFamily:'var(--font-body)', fontWeight:700, fontSize:d.f, lineHeight:1, whiteSpace:'nowrap', ...style }}>
      {dot && <span style={{ width:6, height:6, borderRadius:999, background:'currentColor', flex:'none' }}/>}{children}
    </span>
  );
}

const AV_FILLS = ['var(--red)','var(--indigo)','var(--mint)','var(--lilac-deep)'];
const AV_INK = { 'var(--red)':'var(--cream)','var(--indigo)':'var(--cream)','var(--mint)':'var(--navy)','var(--lilac-deep)':'var(--navy)' };
function Avatar({ name='', src, size=44, shape='circle', colorIndex, style={} }) {
  const initials = name.trim().split(/\s+/).slice(0,2).map(w=>w[0]).join('').toUpperCase();
  const idx = colorIndex!=null ? colorIndex%4 : [...name].reduce((a,c)=>a+c.charCodeAt(0),0)%4;
  const fill = AV_FILLS[idx], ink = AV_INK[fill], fs = Math.round(size*0.4);
  if(shape==='blob') return (
    <span style={{ position:'relative', display:'inline-grid', placeItems:'center', width:size, height:size, flex:'none', ...style }}>
      <svg viewBox="0 0 220 220" width={size} height={size} style={{ position:'absolute', inset:0, color:fill }}><path d={BLOB_PATH} fill="currentColor" stroke="var(--cream)" strokeWidth="8"/></svg>
      <span style={{ position:'relative', fontFamily:'var(--font-display)', fontWeight:700, fontSize:fs, color:ink }}>{initials}</span>
    </span>
  );
  return (
    <span style={{ display:'inline-flex', alignItems:'center', justifyContent:'center', width:size, height:size, flex:'none',
      borderRadius:'var(--radius-pill)', background: src?'var(--surface-sunken)':fill, border:'2px solid var(--navy)', overflow:'hidden',
      color:ink, fontFamily:'var(--font-display)', fontWeight:700, fontSize:fs, ...style }}>
      {src ? <img src={src} alt={name} style={{ width:'100%', height:'100%', objectFit:'cover' }}/> : initials}
    </span>
  );
}
function AvatarGroup({ children, max=4, size=36, style={} }) {
  const items = React.Children.toArray(children), shown = items.slice(0,max), extra = items.length-shown.length;
  return (
    <span style={{ display:'inline-flex', alignItems:'center', ...style }}>
      {shown.map((ch,i)=><span key={i} style={{ marginLeft: i===0?0:-size*0.32, zIndex:i }}>{React.cloneElement(ch,{size})}</span>)}
      {extra>0 && <span style={{ marginLeft:-size*0.32, width:size, height:size, borderRadius:'var(--radius-pill)', background:'var(--navy)', color:'var(--cream)', border:'2px solid var(--cream)', display:'inline-flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--font-body)', fontWeight:700, fontSize:Math.round(size*0.34), zIndex:99 }}>+{extra}</span>}
    </span>
  );
}

function Checkbox({ checked=false, onChange, label, size=24, style={} }) {
  return (
    <label style={{ display:'inline-flex', alignItems:'center', gap:10, cursor:'pointer', userSelect:'none', ...style }}>
      <span onClick={e=>{ e.preventDefault(); onChange&&onChange(!checked); }} style={{ display:'inline-flex', alignItems:'center', justifyContent:'center', width:size, height:size, flex:'none', borderRadius:Math.round(size*0.32), background: checked?'var(--mint)':'var(--surface-card)', border:'2.5px solid var(--navy)', transition:'background .15s' }}>
        <svg width={size*0.62} height={size*0.62} viewBox="0 0 24 24" fill="none" style={{ opacity: checked?1:0, transition:'opacity .12s' }}><path d="M5 13l4 4L19 7" stroke="var(--navy)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </span>
      {label && <span style={{ fontFamily:'var(--font-body)', fontSize:16, fontWeight:500, color:'var(--text-body)', textDecoration: checked?'line-through':'none', textDecorationColor:'var(--ink-300)', opacity: checked?0.55:1 }}>{label}</span>}
    </label>
  );
}

function QtyStepper({ value=1, onChange, min=0, max=99, unit, size='md', style={} }) {
  const dim = size==='sm'?32:40;
  const set = n => onChange && onChange(Math.max(min, Math.min(max, n)));
  const Btn = ({ sign, onClick, dis }) => (
    <button onClick={onClick} disabled={dis} style={{ width:dim, height:dim, flex:'none', display:'inline-flex', alignItems:'center', justifyContent:'center', background:'var(--surface-card)', border:'none', borderRadius:'var(--radius-pill)', cursor:dis?'not-allowed':'pointer', opacity:dis?0.35:1, color:'var(--navy)', transition:'transform .08s' }}
      onMouseDown={e=>{ if(!dis) e.currentTarget.style.transform='scale(0.86)'; }} onMouseUp={e=>e.currentTarget.style.transform=''} onMouseLeave={e=>e.currentTarget.style.transform=''}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round">{sign==='+'?<><path d="M12 5v14"/><path d="M5 12h14"/></>:<path d="M5 12h14"/>}</svg>
    </button>
  );
  return (
    <span style={{ display:'inline-flex', alignItems:'center', gap:2, padding:3, background:'var(--surface-sunken)', border:'2px solid var(--navy)', borderRadius:'var(--radius-pill)', ...style }}>
      <Btn sign="-" onClick={()=>set(value-1)} dis={value<=min}/>
      <span style={{ minWidth:dim, textAlign:'center', fontFamily:'var(--font-display)', fontWeight:700, fontSize: size==='sm'?16:19, color:'var(--navy)', fontVariantNumeric:'tabular-nums', display:'inline-flex', alignItems:'baseline', justifyContent:'center', gap:3 }}>
        {value}{unit && <span style={{ fontSize:11, fontFamily:'var(--font-body)', fontWeight:700, color:'var(--text-muted)' }}>{unit}</span>}
      </span>
      <Btn sign="+" onClick={()=>set(value+1)} dis={value>=max}/>
    </span>
  );
}

function SegmentedControl({ options=[], value, onChange, size='md', style={} }) {
  const opts = options.map(o=> typeof o==='string'?{value:o,label:o}:o);
  const h = size==='sm'?36:44;
  return (
    <div style={{ display:'inline-flex', alignItems:'center', gap:4, padding:4, background:'var(--surface-sunken)', border:'2px solid var(--navy)', borderRadius:'var(--radius-pill)', ...style }}>
      {opts.map(o=>{ const a=o.value===value; return (
        <button key={o.value} onClick={()=>onChange&&onChange(o.value)} style={{ display:'inline-flex', alignItems:'center', gap:6, height:h, padding:'0 18px', border:'none', cursor:'pointer', borderRadius:'var(--radius-pill)', background:a?'var(--navy)':'transparent', color:a?'var(--cream)':'var(--text-muted)', fontFamily:'var(--font-body)', fontWeight:700, fontSize:size==='sm'?14:16, transition:'background .15s, color .15s', whiteSpace:'nowrap' }}>
          {o.label}{o.badge!=null && <span style={{ minWidth:18, height:18, padding:'0 5px', borderRadius:999, background:a?'var(--mint)':'var(--ink-100)', color:'var(--navy)', fontSize:11, fontWeight:700, display:'inline-flex', alignItems:'center', justifyContent:'center' }}>{o.badge}</span>}
        </button>
      ); })}
    </div>
  );
}

function Card({ children, variant='plain', tone, padding='md', radius='lg', style={}, ...rest }) {
  const pads = { none:0, sm:'12px', md:'20px', lg:'32px' };
  const radii = { md:'var(--radius-md)', lg:'var(--radius-lg)', xl:'var(--radius-xl)' };
  const fills = { red:'var(--red-tint)', mint:'var(--mint-tint)', indigo:'var(--indigo-tint)', lilac:'var(--lilac)' };
  let bg='var(--surface-card)', border='1.5px solid var(--border-soft)', boxShadow='none';
  if(tone) bg = fills[tone]||bg;
  if(variant==='pop'){ border='2.5px solid var(--navy)'; boxShadow='var(--shadow-pop)'; }
  else if(variant==='sunken'){ bg='var(--surface-sunken)'; }
  else if(variant==='brand'){ bg='var(--red)'; border='2.5px solid var(--navy)'; boxShadow='var(--shadow-pop)'; }
  return <div style={{ background:bg, border, borderRadius:radii[radius], boxShadow, padding:pads[padding], color: variant==='brand'?'var(--cream)':'var(--text-body)', ...style }} {...rest}>{children}</div>;
}

function CategoryChip({ label, icon, selected=false, onClick, tone='indigo', style={} }) {
  const T = { indigo:'var(--indigo)', red:'var(--red)', mint:'var(--mint)', lilac:'var(--lilac-deep)' };
  const sel = T[tone], selInk = (tone==='mint'||tone==='lilac')?'var(--navy)':'var(--cream)';
  return (
    <button onClick={onClick} style={{ display:'inline-flex', alignItems:'center', gap:7, height:38, padding:'0 16px', cursor:'pointer', background: selected?sel:'var(--surface-card)', color: selected?selInk:'var(--text-body)', border:`2px solid ${selected?'var(--navy)':'var(--border-soft)'}`, borderRadius:'var(--radius-pill)', fontFamily:'var(--font-body)', fontWeight:700, fontSize:14, boxShadow: selected?'var(--shadow-pop-sm)':'none', transition:'background .15s, transform .08s, box-shadow .08s', whiteSpace:'nowrap', ...style }}
      onMouseDown={e=>e.currentTarget.style.transform='scale(0.96)'} onMouseUp={e=>e.currentTarget.style.transform=''} onMouseLeave={e=>e.currentTarget.style.transform=''}>
      {icon!=null && <span style={{ fontSize:16, lineHeight:1 }}>{icon}</span>}{label}
    </button>
  );
}

function GroceryItem({ name, note, checked=false, onToggle, category, categoryTone='lilac', addedBy, trailing, style={} }) {
  const tf = { red:'var(--red-tint)', mint:'var(--mint-tint)', indigo:'var(--indigo-tint)', lilac:'var(--lilac)' }[categoryTone]||'var(--lilac)';
  return (
    <div style={{ display:'flex', alignItems:'center', gap:12, padding:'12px 14px', background:'var(--surface-card)', border:'1.5px solid var(--border-soft)', borderRadius:'var(--radius-md)', opacity:checked?0.72:1, transition:'opacity .15s', ...style }}>
      <Checkbox checked={checked} onChange={onToggle} size={26}/>
      {category!=null && <span style={{ display:'inline-flex', alignItems:'center', justifyContent:'center', width:40, height:40, flex:'none', fontSize:20, background:tf, borderRadius:'var(--radius-sm)' }}>{category}</span>}
      <span style={{ flex:1, minWidth:0, display:'flex', flexDirection:'column', gap:2 }}>
        <span style={{ fontFamily:'var(--font-body)', fontWeight:700, fontSize:16, color:'var(--text-strong)', textDecoration:checked?'line-through':'none', textDecorationColor:'var(--ink-300)', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{name}</span>
        {note && <span style={{ fontFamily:'var(--font-body)', fontSize:13, color:'var(--text-muted)', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{note}</span>}
      </span>
      {addedBy && <Avatar name={addedBy} size={28}/>}{trailing!=null && <span style={{ flex:'none' }}>{trailing}</span>}
    </div>
  );
}

function ListSummaryCard({ title, household, members=[], total=0, done=0, accent='red', onClick, style={} }) {
  const A = { red:'var(--red)', indigo:'var(--indigo)', mint:'var(--mint)', lilac:'var(--lilac-deep)' };
  const bar = A[accent]||A.red, pct = total>0?Math.round(done/total*100):0;
  return (
    <div onClick={onClick} style={{ display:'flex', flexDirection:'column', gap:14, padding:18, background:'var(--surface-card)', border:'2.5px solid var(--navy)', borderRadius:'var(--radius-lg)', boxShadow:'var(--shadow-pop)', cursor:onClick?'pointer':'default', transition:'transform .1s, box-shadow .1s', ...style }}
      onMouseDown={e=>{ if(onClick){ e.currentTarget.style.transform='translate(2px,3px)'; e.currentTarget.style.boxShadow='none'; } }}
      onMouseUp={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='var(--shadow-pop)'; }}
      onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='var(--shadow-pop)'; }}>
      <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap:12 }}>
        <div style={{ minWidth:0 }}>
          <div style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:22, color:'var(--text-strong)', lineHeight:1.15, marginBottom:2 }}>{title}</div>
          {household && <div style={{ fontFamily:'var(--font-body)', fontSize:13, color:'var(--text-muted)', fontWeight:600 }}>{household}</div>}
        </div>
        <span style={{ width:14, height:14, borderRadius:999, background:bar, flex:'none', border:'2px solid var(--navy)', marginTop:4 }}/>
      </div>
      <div style={{ display:'flex', flexDirection:'column', gap:7 }}>
        <div style={{ height:12, borderRadius:999, background:'var(--surface-sunken)', overflow:'hidden', border:'1.5px solid var(--border-soft)' }}><div style={{ width:`${pct}%`, height:'100%', background:bar, borderRadius:999, transition:'width .3s' }}/></div>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          <span style={{ fontFamily:'var(--font-body)', fontWeight:700, fontSize:13, color:'var(--text-muted)' }}>{done}/{total} done</span>
          {members.length>0 && <AvatarGroup size={28} max={4}>{members.map((m,i)=><Avatar key={i} name={m}/>)}</AvatarGroup>}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Blob, Button, IconButton, Badge, Avatar, AvatarGroup, Checkbox, QtyStepper, SegmentedControl, Card, CategoryChip, GroceryItem, ListSummaryCard });
