import * as React from 'react';

/** Thalaja QtyStepper — minus / value / plus quantity control. */
export interface QtyStepperProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'onChange'> {
  value?: number;
  /** Receives the clamped next value. */
  onChange?: (value: number) => void;
  /** @default 0 */
  min?: number;
  /** @default 99 */
  max?: number;
  /** Optional unit shown next to the number, e.g. 'kg'. */
  unit?: string;
  /** @default 'md' */
  size?: 'sm' | 'md';
  disabled?: boolean;
}

export function QtyStepper(props: QtyStepperProps): JSX.Element;
