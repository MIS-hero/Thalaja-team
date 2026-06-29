import React from 'react';

const BLOB_PATH = "M 123.7 22.3 Q 110.0 10.0 123.7 22.3 Q 137.4 34.6 154.9 35.1 Q 172.4 35.7 175.7 52.9 Q 179.1 70.1 194.1 81.3 Q 209.1 92.5 196.7 107.8 Q 184.2 123.1 191.6 142.3 Q 199.1 161.4 179.2 165.1 Q 159.4 168.9 151.6 185.8 Q 143.8 202.7 126.9 196.8 Q 110.0 190.9 93.3 196.2 Q 76.7 201.6 68.1 185.9 Q 59.5 170.1 40.7 165.5 Q 21.8 160.9 29.0 142.0 Q 36.1 123.0 22.8 107.6 Q 9.4 92.3 25.9 81.6 Q 42.3 70.9 44.8 53.1 Q 47.2 35.2 64.8 34.6 Q 82.3 33.9 96.2 22.0 Z";

const FILLS = ['var(--red)', 'var(--indigo)', 'var(--mint)', 'var(--lilac-deep)'];
const INK = { 'var(--red)': 'var(--cream)', 'var(--indigo)': 'var(--cream)', 'var(--mint)': 'var(--navy)', 'var(--lilac-deep)': 'var(--navy)' };

/**
 * Thalaja Avatar — person/household identity.
 * `shape="blob"` uses the brand starburst sticker; `circle` is a plain round avatar.
 */
export function Avatar({
  name = '',
  src,
  size = 44,
  shape = 'circle',     // 'circle' | 'blob'
  colorIndex,           // override auto color (0-3)
  style = {},
  ...rest
}) {
  const initials = name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

  const idx = colorIndex != null
    ? colorIndex % FILLS.length
    : [...name].reduce((a, c) => a + c.charCodeAt(0), 0) % FILLS.length;
  const fill = FILLS[idx];
  const ink = INK[fill];

  const fontSize = Math.round(size * 0.4);

  if (shape === 'blob') {
    return (
      <span style={{ position: 'relative', display: 'inline-grid', placeItems: 'center', width: size, height: size, flex: 'none', ...style }} {...rest}>
        <svg viewBox="0 0 220 220" width={size} height={size} style={{ position: 'absolute', inset: 0, color: fill }}>
          <path d={BLOB_PATH} fill="currentColor" stroke="var(--cream)" strokeWidth="8" />
        </svg>
        <span style={{ position: 'relative', fontFamily: 'var(--font-display)', fontWeight: 'var(--fw-bold)', fontSize, color: ink }}>
          {initials}
        </span>
      </span>
    );
  }

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: size,
        height: size,
        flex: 'none',
        borderRadius: 'var(--radius-pill)',
        background: src ? 'var(--surface-sunken)' : fill,
        border: '2px solid var(--navy)',
        overflow: 'hidden',
        color: ink,
        fontFamily: 'var(--font-display)',
        fontWeight: 'var(--fw-bold)',
        fontSize,
        ...style,
      }}
      {...rest}
    >
      {src
        ? <img src={src} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        : initials}
    </span>
  );
}

/** Overlapping avatar cluster for household members. */
export function AvatarGroup({ children, max = 4, size = 36, style = {} }) {
  const items = React.Children.toArray(children);
  const shown = items.slice(0, max);
  const extra = items.length - shown.length;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', ...style }}>
      {shown.map((child, i) => (
        <span key={i} style={{ marginLeft: i === 0 ? 0 : -size * 0.32, zIndex: i }}>
          {React.cloneElement(child, { size })}
        </span>
      ))}
      {extra > 0 ? (
        <span style={{
          marginLeft: -size * 0.32, width: size, height: size, borderRadius: 'var(--radius-pill)',
          background: 'var(--navy)', color: 'var(--cream)', border: '2px solid var(--cream)',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--font-body)', fontWeight: 'var(--fw-bold)', fontSize: Math.round(size * 0.34), zIndex: 99,
        }}>+{extra}</span>
      ) : null}
    </span>
  );
}
