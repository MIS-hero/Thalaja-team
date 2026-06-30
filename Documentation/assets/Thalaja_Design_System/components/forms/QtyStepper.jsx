import React from 'react';

/**
 * Thalaja QtyStepper — quantity control for grocery items.
 */
export function QtyStepper({
  value = 1,
  onChange,
  min = 0,
  max = 99,
  unit,
  size = 'md',     // 'sm' | 'md'
  disabled = false,
  style = {},
  ...rest
}) {
  const dim = size === 'sm' ? 32 : 40;
  const set = (next) => {
    if (disabled || !onChange) return;
    onChange(Math.max(min, Math.min(max, next)));
  };

  const btn = (sign, onClick, dis) => (
    <button
      type="button"
      onClick={onClick}
      disabled={dis}
      style={{
        width: dim, height: dim, flex: 'none',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        background: 'var(--surface-card)', border: 'none', borderRadius: 'var(--radius-pill)',
        cursor: dis ? 'not-allowed' : 'pointer', opacity: dis ? 0.35 : 1,
        color: 'var(--navy)', transition: 'transform .08s ease',
      }}
      onMouseDown={(e) => { if (!dis) e.currentTarget.style.transform = 'scale(0.86)'; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = ''; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = ''; }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round">
        {sign === '+' ? <><path d="M12 5v14" /><path d="M5 12h14" /></> : <path d="M5 12h14" />}
      </svg>
    </button>
  );

  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 2,
        padding: 3, background: 'var(--surface-sunken)',
        border: '2px solid var(--navy)', borderRadius: 'var(--radius-pill)',
        opacity: disabled ? 0.5 : 1, ...style,
      }}
      {...rest}
    >
      {btn('-', () => set(value - 1), disabled || value <= min)}
      <span style={{
        minWidth: dim, textAlign: 'center', fontFamily: 'var(--font-display)',
        fontWeight: 'var(--fw-bold)', fontSize: size === 'sm' ? 16 : 19, color: 'var(--navy)',
        fontVariantNumeric: 'tabular-nums', display: 'inline-flex', alignItems: 'baseline', justifyContent: 'center', gap: 3,
      }}>
        {value}{unit ? <span style={{ fontSize: 11, fontFamily: 'var(--font-body)', fontWeight: 700, color: 'var(--text-muted)' }}>{unit}</span> : null}
      </span>
      {btn('+', () => set(value + 1), disabled || value >= max)}
    </span>
  );
}
