import * as React from 'react';

/** Thalaja Avatar — person or household identity chip. */
export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Display name — drives initials and auto color. */
  name?: string;
  /** Optional image URL. */
  src?: string;
  /** Pixel size. @default 44 */
  size?: number;
  /** @default 'circle' */
  shape?: 'circle' | 'blob';
  /** Force a palette color (0-3) instead of hashing the name. */
  colorIndex?: number;
}

export function Avatar(props: AvatarProps): JSX.Element;

/** Overlapping cluster of avatars with a "+N" overflow chip. */
export interface AvatarGroupProps {
  children?: React.ReactNode;
  /** Max avatars before collapsing. @default 4 */
  max?: number;
  /** Pixel size applied to every avatar. @default 36 */
  size?: number;
  style?: React.CSSProperties;
}

export function AvatarGroup(props: AvatarGroupProps): JSX.Element;
