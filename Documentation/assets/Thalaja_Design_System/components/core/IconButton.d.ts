import * as React from 'react';

/** Thalaja IconButton — square or circular icon-only control. */
export interface IconButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'aria-label'> {
  /** Icon node. */
  children?: React.ReactNode;
  /** @default 'soft' */
  variant?: 'soft' | 'solid' | 'ghost' | 'outline';
  /** @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  /** @default 'circle' */
  shape?: 'circle' | 'rounded';
  /** Color family. @default 'indigo' */
  tone?: 'indigo' | 'red' | 'mint' | 'navy';
  /** Accessible label (icon-only). */
  ariaLabel?: string;
  disabled?: boolean;
}

export function IconButton(props: IconButtonProps): JSX.Element;
