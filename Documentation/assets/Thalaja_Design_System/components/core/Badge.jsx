import React from 'react';

/**
 * Thalaja Badge — small status / count pill.
 */
export function Badge({
  children,
  tone = 'neutral',   // 'neutral' | 'red' | 'mint' | 'indigo' | 'lilac' | 'navy'
  variant = 'soft',   // 'soft' | 'solid' | 'outline'
  size = 'md',        // 'sm' | 'md'
  dot = false,
  style = {},
  ...rest
}) {
  const tones = {
    neutral: { soft: ['rgba(13,0,80,.06)', 'var(--ink-700)'], solid: ['var(--navy)', 'var(--cream)'] },
    red:     { soft: ['var(--red-tint)', 'var(--red-press)'], solid: ['var(--red)', 'var(--cream)'] },
    mint:    { soft: ['var(--mint-tint)', 'var(--success-ink)'], solid: ['var(--mint)', 'var(--navy)'] },
    indigo:  { soft: ['var(--indigo-tint)', 'var(--indigo-press)'], solid: ['var(--indigo)', 'var(--cream)'] },
    lilac:   { soft: ['var(--lilac)', 'var(--navy)'], solid: ['var(--lilac-deep)', 'var(--navy)'] },
    navy:    { soft: ['rgba(13,0,80,.08)', 'var(--navy)'], solid: ['var(--navy)', 'var(--cream)'] },
  };
  const t = tones[tone] || tones.neutral;
  const [bg, color] = variant === 'solid' ? t.solid : t.soft;

  const dims = size === 'sm'
    ? { font: 'var(--fs-micro)', pad: '2px 8px', h: 20 }
    : { font: 'var(--fs-caption)', pad: '3px 10px', h: 24 };

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        height: dims.h,
        padding: dims.pad,
        background: variant === 'outline' ? 'transparent' : bg,
        color: variant === 'outline' ? t.soft[1] : color,
        border: variant === 'outline' ? `1.5px solid ${t.soft[1]}` : '1.5px solid transparent',
        borderRadius: 'var(--radius-pill)',
        fontFamily: 'var(--font-body)',
        fontWeight: 'var(--fw-bold)',
        fontSize: dims.font,
        lineHeight: 1,
        whiteSpace: 'nowrap',
        ...style,
      }}
      {...rest}
    >
      {dot ? <span style={{ width: 6, height: 6, borderRadius: 999, background: 'currentColor', flex: 'none' }} /> : null}
      {children}
    </span>
  );
}
