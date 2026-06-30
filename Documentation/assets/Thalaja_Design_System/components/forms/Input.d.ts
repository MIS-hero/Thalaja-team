import * as React from 'react';

/** Thalaja Input — labelled text field with adornments and validation. */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'style'> {
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  /** Field label above the control. */
  label?: string;
  /** Helper text below. */
  hint?: string;
  /** Error message — turns the border red and replaces hint. */
  error?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  /** Text direction, e.g. 'rtl' for Arabic. */
  dir?: 'rtl' | 'ltr';
  disabled?: boolean;
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
}

export function Input(props: InputProps): JSX.Element;
