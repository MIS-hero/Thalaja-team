import React from 'react';

/**
 * Thalaja Checkbox — used heavily as the "got it" tick on grocery rows.
 * Rounded, mint when checked, with a hand-drawn check.
 */
export function Checkbox({
  checked = false,
  onChange,
  label,
  size = 24,
  disabled = false,
  style = {},
  ...rest
}) {
  return (
    <label
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 10,
        cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1,
        userSelect: 'none', ...style,
      }}
      {...rest}
    >
      <span
        onClick={(e) => { if (!disabled && onChange) { e.preventDefault(); onChange(!checked); } }}
        style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          width: size, height: size, flex: 'none',
          borderRadius: Math.round(size * 0.32),
          background: checked ? 'var(--mint)' : 'var(--surface-card)',
          border: `2.5px solid var(--navy)`,
          transition: 'background .15s ease, transform .1s ease',
          transform: checked ? 'scale(1)' : 'scale(1)',
        }}
      >
        <svg width={size * 0.62} height={size * 0.62} viewBox="0 0 24 24" fill="none"
          style={{ opacity: checked ? 1 : 0, transition: 'opacity .12s ease' }}>
          <path d="M5 13l4 4L19 7" stroke="var(--navy)" strokeWidth="3.5"
            strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      {label ? (
        <span style={{
          fontFamily: 'var(--font-body)', fontSize: 'var(--fs-body)', fontWeight: 'var(--fw-medium)',
          color: 'var(--text-body)',
          textDecoration: checked ? 'line-through' : 'none',
          textDecorationColor: 'var(--ink-300)',
          opacity: checked ? 0.55 : 1,
        }}>{label}</span>
      ) : null}
    </label>
  );
}
