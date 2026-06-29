import React from 'react';

/**
 * Thalaja Button — the primary action control.
 * Bold, rounded, with the signature hard-pop shadow on solid variants.
 */
export function Button({
  children,
  variant = 'primary',   // 'primary' | 'secondary' | 'mint' | 'ghost' | 'outline' | 'danger'
  size = 'md',           // 'sm' | 'md' | 'lg'
  iconLeft,
  iconRight,
  block = false,
  disabled = false,
  type = 'button',
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { height: 'var(--control-h-sm)', padding: '0 16px', font: 'var(--fs-body-sm)', gap: 6 },
    md: { height: 'var(--control-h-md)', padding: '0 22px', font: 'var(--fs-body)', gap: 8 },
    lg: { height: 'var(--control-h-lg)', padding: '0 28px', font: 'var(--fs-body-lg)', gap: 10 },
  };
  const s = sizes[size] || sizes.md;

  const variants = {
    primary:   { background: 'var(--red)',    color: 'var(--cream)', shadow: 'var(--shadow-pop)', border: '2.5px solid var(--navy)' },
    secondary: { background: 'var(--indigo)',  color: 'var(--cream)', shadow: 'var(--shadow-pop)', border: '2.5px solid var(--navy)' },
    mint:      { background: 'var(--mint)',    color: 'var(--navy)',  shadow: 'var(--shadow-pop)', border: '2.5px solid var(--navy)' },
    outline:   { background: 'transparent',    color: 'var(--navy)',  shadow: 'none',              border: '2.5px solid var(--navy)' },
    ghost:     { background: 'transparent',    color: 'var(--indigo)',shadow: 'none',              border: '2.5px solid transparent' },
    danger:    { background: 'var(--red-tint)',color: 'var(--red-press)', shadow: 'none',          border: '2.5px solid var(--red)' },
  };
  const v = variants[variant] || variants.primary;

  return (
    <button
      type={type}
      disabled={disabled}
      style={{
        display: block ? 'flex' : 'inline-flex',
        width: block ? '100%' : 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        gap: s.gap,
        height: s.height,
        padding: s.padding,
        fontFamily: 'var(--font-body)',
        fontWeight: 'var(--fw-bold)',
        fontSize: s.font,
        lineHeight: 1,
        color: v.color,
        background: v.background,
        border: v.border,
        borderRadius: 'var(--radius-pill)',
        boxShadow: v.shadow,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1,
        transition: 'transform .08s ease, box-shadow .08s ease, background .15s ease',
        userSelect: 'none',
        WebkitTapHighlightColor: 'transparent',
        ...style,
      }}
      onMouseDown={(e) => {
        if (disabled || v.shadow === 'none') return;
        e.currentTarget.style.transform = 'translate(2px, 3px)';
        e.currentTarget.style.boxShadow = 'none';
      }}
      onMouseUp={(e) => {
        if (disabled) return;
        e.currentTarget.style.transform = '';
        e.currentTarget.style.boxShadow = v.shadow;
      }}
      onMouseLeave={(e) => {
        if (disabled) return;
        e.currentTarget.style.transform = '';
        e.currentTarget.style.boxShadow = v.shadow;
      }}
      {...rest}
    >
      {iconLeft ? <span style={{ display: 'inline-flex', flex: 'none' }}>{iconLeft}</span> : null}
      {children}
      {iconRight ? <span style={{ display: 'inline-flex', flex: 'none' }}>{iconRight}</span> : null}
    </button>
  );
}
