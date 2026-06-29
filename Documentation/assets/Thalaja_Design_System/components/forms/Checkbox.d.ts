import * as React from 'react';

/** Thalaja Checkbox — rounded mint tick, with optional strike-through label. */
export interface CheckboxProps extends Omit<React.HTMLAttributes<HTMLLabelElement>, 'onChange'> {
  checked?: boolean;
  /** Receives the next checked value. */
  onChange?: (checked: boolean) => void;
  label?: React.ReactNode;
  /** Box size in px. @default 24 */
  size?: number;
  disabled?: boolean;
}

export function Checkbox(props: CheckboxProps): JSX.Element;
