import React from 'react';
import { Avatar, AvatarGroup } from '../core/Avatar.jsx';

/**
 * Thalaja ListSummaryCard — a tappable card for a shared grocery list.
 * Shows title, household, member cluster, and a progress bar.
 */
export function ListSummaryCard({
  title,
  household,
  members = [],        // array of names
  total = 0,
  done = 0,
  accent = 'red',      // 'red' | 'indigo' | 'mint' | 'lilac'
  onClick,
  style = {},
  ...rest
}) {
  const accents = {
    red: 'var(--red)', indigo: 'var(--indigo)', mint: 'var(--mint)', lilac: 'var(--lilac-deep)',
  };
  const bar = accents[accent] || accents.red;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;

  return (
    <div
      onClick={onClick}
      style={{
        display: 'flex', flexDirection: 'column', gap: 14,
        padding: 18, background: 'var(--surface-card)',
        border: '2.5px solid var(--navy)', borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-pop)', cursor: onClick ? 'pointer' : 'default',
        transition: 'transform .1s ease, box-shadow .1s ease',
        ...style,
      }}
      onMouseDown={(e) => { if (onClick) { e.currentTarget.style.transform = 'translate(2px,3px)'; e.currentTarget.style.boxShadow = 'none'; } }}
      onMouseUp={(e) => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = 'var(--shadow-pop)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = 'var(--shadow-pop)'; }}
      {...rest}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
        <div style={{ minWidth: 0 }}>
          <div style={{
            fontFamily: 'var(--font-display)', fontWeight: 'var(--fw-bold)', fontSize: 'var(--fs-title)',
            color: 'var(--text-strong)', lineHeight: 1.15, marginBottom: 2,
          }}>{title}</div>
          {household ? (
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-caption)', color: 'var(--text-muted)', fontWeight: 600 }}>{household}</div>
          ) : null}
        </div>
        <span style={{
          width: 14, height: 14, borderRadius: 999, background: bar, flex: 'none',
          border: '2px solid var(--navy)', marginTop: 4,
        }} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
        <div style={{ height: 12, borderRadius: 999, background: 'var(--surface-sunken)', overflow: 'hidden', border: '1.5px solid var(--border-soft)' }}>
          <div style={{ width: `${pct}%`, height: '100%', background: bar, borderRadius: 999, transition: 'width .3s ease' }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'var(--fs-caption)', color: 'var(--text-muted)' }}>
            {done}/{total} done
          </span>
          {members.length ? (
            <AvatarGroup size={28} max={4}>
              {members.map((m, i) => <Avatar key={i} name={m} />)}
            </AvatarGroup>
          ) : null}
        </div>
      </div>
    </div>
  );
}
