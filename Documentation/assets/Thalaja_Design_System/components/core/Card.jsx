import React from 'react';

/**
 * Thalaja Card — rounded surface container.
 * `pop` gives the signature hard-offset shadow + bold outline.
 */
export function Card({
  children,
  variant = 'plain',   // 'plain' | 'pop' | 'sunken' | 'brand'
  tone,                // optional accent: 'red' | 'mint' | 'indigo' | 'lilac'
  padding = 'md',      // 'none' | 'sm' | 'md' | 'lg'
  radius = 'lg',       // 'md' | 'lg' | 'xl'
  style = {},
  ...rest
}) {
  const pads = { none: 0, sm: 'var(--space-3)', md: 'var(--space-5)', lg: 'var(--space-7)' };
  const radii = { md: 'var(--radius-md)', lg: 'var(--radius-lg)', xl: 'var(--radius-xl)' };

  const toneFills = {
    red: 'var(--red-tint)', mint: 'var(--mint-tint)',
    indigo: 'var(--indigo-tint)', lilac: 'var(--lilac)',
  };

  let bg = 'var(--surface-card)';
  let border = '1.5px solid var(--border-soft)';
  let boxShadow = 'none';

  if (tone) bg = toneFills[tone] || bg;

  if (variant === 'pop') {
    border = '2.5px solid var(--navy)';
    boxShadow = 'var(--shadow-pop)';
  } else if (variant === 'sunken') {
    bg = 'var(--surface-sunken)';
    border = '1.5px solid var(--border-soft)';
  } else if (variant === 'brand') {
    bg = 'var(--red)';
    border = '2.5px solid var(--navy)';
    boxShadow = 'var(--shadow-pop)';
  }

  return (
    <div
      style={{
        background: bg,
        border,
        borderRadius: radii[radius] || radii.lg,
        boxShadow,
        padding: pads[padding] ?? pads.md,
        color: variant === 'brand' ? 'var(--cream)' : 'var(--text-body)',
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
