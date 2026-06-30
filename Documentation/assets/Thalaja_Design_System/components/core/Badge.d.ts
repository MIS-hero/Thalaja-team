import * as React from 'react';

/** Thalaja Badge — small status / count pill. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  /** @default 'neutral' */
  tone?: 'neutral' | 'red' | 'mint' | 'indigo' | 'lilac' | 'navy';
  /** @default 'soft' */
  variant?: 'soft' | 'solid' | 'outline';
  /** @default 'md' */
  size?: 'sm' | 'md';
  /** Leading status dot. @default false */
  dot?: boolean;
}

export function Badge(props: BadgeProps): JSX.Element;
