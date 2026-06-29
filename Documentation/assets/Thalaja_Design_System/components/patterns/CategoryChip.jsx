import React from 'react';

/**
 * Thalaja CategoryChip — selectable filter chip for grocery categories.
 */
export function CategoryChip({
  label,
  icon,            // emoji or node
  selected = false,
  onClick,
  tone = 'indigo', // 'indigo' | 'red' | 'mint' | 'lilac'
  style = {},
  ...rest
}) {
  const tones = {
    indigo: 'var(--indigo)', red: 'var(--red)', mint: 'var(--mint)', lilac: 'var(--lilac-deep)',
  };
  const sel = tones[tone] || tones.indigo;
  const selInk = tone === 'mint' || tone === 'lilac' ? 'var(--navy)' : 'var(--cream)';

  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 7,
        height: 38, padding: '0 16px', cursor: 'pointer',
        background: selected ? sel : 'var(--surface-card)',
        color: selected ? selInk : 'var(--text-body)',
        border: `2px solid ${selected ? 'var(--navy)' : 'var(--border-soft)'}`,
        borderRadius: 'var(--radius-pill)',
        fontFamily: 'var(--font-body)', fontWeight: 'var(--fw-bold)', fontSize: 'var(--fs-body-sm)',
        boxShadow: selected ? 'var(--shadow-pop-sm)' : 'none',
        transition: 'background .15s ease, transform .08s ease, box-shadow .08s ease',
        whiteSpace: 'nowrap',
        ...style,
      }}
      onMouseDown={(e) => { e.currentTarget.style.transform = 'scale(0.96)'; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = ''; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = ''; }}
      {...rest}
    >
      {icon != null ? <span style={{ fontSize: 16, lineHeight: 1 }}>{icon}</span> : null}
      {label}
    </button>
  );
}
