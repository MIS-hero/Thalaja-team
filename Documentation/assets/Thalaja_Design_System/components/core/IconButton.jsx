import React from 'react';

/**
 * Thalaja IconButton — square/circular icon-only control.
 */
export function IconButton({
  children,                // icon node
  variant = 'soft',        // 'soft' | 'solid' | 'ghost' | 'outline'
  size = 'md',             // 'sm' | 'md' | 'lg'
  shape = 'circle',        // 'circle' | 'rounded'
  tone = 'indigo',         // 'indigo' | 'red' | 'mint' | 'navy'
  disabled = false,
  ariaLabel,
  style = {},
  ...rest
}) {
  const dims = { sm: 36, md: 44, lg: 52 }[size] || 44;

  const tones = {
    indigo: { soft: ['var(--indigo-tint)', 'var(--indigo)'], solid: ['var(--indigo)', 'var(--cream)'] },
    red:    { soft: ['var(--red-tint)', 'var(--red-press)'],  solid: ['var(--red)', 'var(--cream)'] },
    mint:   { soft: ['var(--mint-tint)', 'var(--success-ink)'], solid: ['var(--mint)', 'var(--navy)'] },
    navy:   { soft: ['rgba(13,0,80,.06)', 'var(--navy)'],     solid: ['var(--navy)', 'var(--cream)'] },
  };
  const t = tones[tone] || tones.indigo;

  let bg = 'transparent', color = 'var(--navy)', border = '2px solid transparent';
  if (variant === 'soft') { [bg, color] = t.soft; }
  else if (variant === 'solid') { [bg, color] = t.solid; border = '2px solid var(--navy)'; }
  else if (variant === 'outline') { color = t.soft[1]; border = '2px solid var(--navy)'; }
  else if (variant === 'ghost') { color = t.soft[1]; }

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      disabled={disabled}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: dims,
        height: dims,
        flex: 'none',
        background: bg,
        color,
        border,
        borderRadius: shape === 'circle' ? 'var(--radius-pill)' : 'var(--radius-md)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1,
        transition: 'transform .08s ease, background .15s ease',
        WebkitTapHighlightColor: 'transparent',
        ...style,
      }}
      onMouseDown={(e) => { if (!disabled) e.currentTarget.style.transform = 'scale(0.9)'; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = ''; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = ''; }}
      {...rest}
    >
      {children}
    </button>
  );
}
