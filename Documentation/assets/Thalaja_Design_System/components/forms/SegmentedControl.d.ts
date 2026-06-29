import * as React from 'react';

export interface SegmentOption {
  value: string;
  label: string;
  /** Optional count pill. */
  badge?: number | string;
}

/** Thalaja SegmentedControl — pill tab switcher for filters / view modes. */
export interface SegmentedControlProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Strings or `{value,label,badge}` objects. */
  options: (SegmentOption | string)[];
  value?: string;
  onChange?: (value: string) => void;
  /** @default 'md' */
  size?: 'sm' | 'md';
}

export function SegmentedControl(props: SegmentedControlProps): JSX.Element;
