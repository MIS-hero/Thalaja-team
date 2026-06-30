import React from 'react';

const BLOB_PATH = "M 123.7 22.3 Q 110.0 10.0 123.7 22.3 Q 137.4 34.6 154.9 35.1 Q 172.4 35.7 175.7 52.9 Q 179.1 70.1 194.1 81.3 Q 209.1 92.5 196.7 107.8 Q 184.2 123.1 191.6 142.3 Q 199.1 161.4 179.2 165.1 Q 159.4 168.9 151.6 185.8 Q 143.8 202.7 126.9 196.8 Q 110.0 190.9 93.3 196.2 Q 76.7 201.6 68.1 185.9 Q 59.5 170.1 40.7 165.5 Q 21.8 160.9 29.0 142.0 Q 36.1 123.0 22.8 107.6 Q 9.4 92.3 25.9 81.6 Q 42.3 70.9 44.8 53.1 Q 47.2 35.2 64.8 34.6 Q 82.3 33.9 96.2 22.0 Z";

const TONES = {
  red: 'var(--red)', mint: 'var(--mint)', indigo: 'var(--indigo)',
  lilac: 'var(--lilac)', navy: 'var(--navy)', cream: 'var(--cream)',
};

/**
 * Thalaja Blob — the signature starburst sticker shape.
 * Use as a decorative container behind an icon/emoji, an empty-state graphic,
 * or a category token. Pass children to center content inside it.
 */
export function Blob({
  size = 80,
  tone = 'red',
  halo = 'var(--cream)',   // outline color; null for none
  haloWidth = 7,
  rotate = 0,
  children,
  style = {},
  ...rest
}) {
  const fill = TONES[tone] || tone;
  return (
    <span
      style={{
        position: 'relative', display: 'inline-grid', placeItems: 'center',
        width: size, height: size, flex: 'none', transform: rotate ? `rotate(${rotate}deg)` : undefined,
        ...style,
      }}
      {...rest}
    >
      <svg viewBox="0 0 220 220" width={size} height={size} style={{ position: 'absolute', inset: 0, color: fill }}>
        <path d={BLOB_PATH} fill="currentColor"
          stroke={halo || 'none'} strokeWidth={halo ? haloWidth : 0} />
      </svg>
      {children != null ? (
        <span style={{ position: 'relative', display: 'grid', placeItems: 'center', transform: rotate ? `rotate(${-rotate}deg)` : undefined }}>
          {children}
        </span>
      ) : null}
    </span>
  );
}
