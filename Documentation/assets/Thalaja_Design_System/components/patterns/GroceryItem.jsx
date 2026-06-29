import React from 'react';
import { Checkbox } from '../forms/Checkbox.jsx';
import { Avatar } from '../core/Avatar.jsx';

/**
 * Thalaja GroceryItem — the core shared-list row.
 * Composes Checkbox + (optional) category token + meta + a trailing slot.
 */
export function GroceryItem({
  name,
  note,              // secondary line e.g. "2 cartons · full fat"
  checked = false,
  onToggle,
  category,          // emoji string or node, shown in a tinted token
  categoryTone = 'lilac',
  addedBy,           // name -> small avatar
  trailing,          // node on the right (e.g. QtyStepper)
  dir,
  style = {},
  ...rest
}) {
  const toneFill = {
    red: 'var(--red-tint)', mint: 'var(--mint-tint)',
    indigo: 'var(--indigo-tint)', lilac: 'var(--lilac)',
  }[categoryTone] || 'var(--lilac)';

  return (
    <div
      dir={dir}
      style={{
        display: 'flex', alignItems: 'center', gap: 12,
        padding: '12px 14px', background: 'var(--surface-card)',
        border: '1.5px solid var(--border-soft)', borderRadius: 'var(--radius-md)',
        opacity: checked ? 0.72 : 1, transition: 'opacity .15s ease',
        ...style,
      }}
      {...rest}
    >
      <Checkbox checked={checked} onChange={onToggle} size={26} />

      {category != null ? (
        <span style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          width: 40, height: 40, flex: 'none', fontSize: 20,
          background: toneFill, borderRadius: 'var(--radius-sm)',
        }}>{category}</span>
      ) : null}

      <span style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <span style={{
          fontFamily: 'var(--font-body)', fontWeight: 'var(--fw-bold)', fontSize: 'var(--fs-body)',
          color: 'var(--text-strong)',
          textDecoration: checked ? 'line-through' : 'none',
          textDecorationColor: 'var(--ink-300)',
          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
        }}>{name}</span>
        {note ? (
          <span style={{
            fontFamily: 'var(--font-body)', fontSize: 'var(--fs-caption)', color: 'var(--text-muted)',
            overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
          }}>{note}</span>
        ) : null}
      </span>

      {addedBy ? <Avatar name={addedBy} size={28} /> : null}
      {trailing != null ? <span style={{ flex: 'none' }}>{trailing}</span> : null}
    </div>
  );
}
