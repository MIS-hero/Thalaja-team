import React from 'react';

/**
 * Thalaja SegmentedControl — pill tab switcher for view modes / filters.
 */
export function SegmentedControl({
  options = [],          // [{ value, label, badge }] or ['A','B']
  value,
  onChange,
  size = 'md',           // 'sm' | 'md'
  style = {},
  ...rest
}) {
  const opts = options.map((o) => (typeof o === 'string' ? { value: o, label: o } : o));
  const h = size === 'sm' ? 36 : 44;

  return (
    <div
      role="tablist"
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 4, padding: 4,
        background: 'var(--surface-sunken)', border: '2px solid var(--navy)',
        borderRadius: 'var(--radius-pill)', ...style,
      }}
      {...rest}
    >
      {opts.map((o) => {
        const active = o.value === value;
        return (
          <button
            key={o.value}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange && onChange(o.value)}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              height: h, padding: '0 18px', border: 'none', cursor: 'pointer',
              borderRadius: 'var(--radius-pill)',
              background: active ? 'var(--navy)' : 'transparent',
              color: active ? 'var(--cream)' : 'var(--text-muted)',
              fontFamily: 'var(--font-body)', fontWeight: 'var(--fw-bold)',
              fontSize: size === 'sm' ? 'var(--fs-body-sm)' : 'var(--fs-body)',
              transition: 'background .15s ease, color .15s ease',
              whiteSpace: 'nowrap',
            }}
          >
            {o.label}
            {o.badge != null ? (
              <span style={{
                minWidth: 18, height: 18, padding: '0 5px', borderRadius: 999,
                background: active ? 'var(--mint)' : 'var(--ink-100)',
                color: 'var(--navy)', fontSize: 11, fontWeight: 700,
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              }}>{o.badge}</span>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}
