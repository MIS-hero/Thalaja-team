import * as React from 'react';

/**
 * Thalaja Blob — the signature starburst sticker shape.
 *
 * @startingPoint section="Brand" subtitle="The starburst sticker motif" viewport="700x200"
 */
export interface BlobProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Pixel size. @default 80 */
  size?: number;
  /** Fill color token name or CSS color. @default 'red' */
  tone?: 'red' | 'mint' | 'indigo' | 'lilac' | 'navy' | 'cream' | string;
  /** Outline color; pass null for no halo. @default cream */
  halo?: string | null;
  /** Outline width. @default 7 */
  haloWidth?: number;
  /** Rotation in degrees (content is counter-rotated upright). @default 0 */
  rotate?: number;
  /** Centered content (icon, emoji, initials). */
  children?: React.ReactNode;
}

export function Blob(props: BlobProps): JSX.Element;
