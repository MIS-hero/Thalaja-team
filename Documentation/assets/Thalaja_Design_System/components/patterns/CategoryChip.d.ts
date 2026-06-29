import * as React from 'react';

/** Thalaja CategoryChip — selectable filter chip for grocery categories. */
export interface CategoryChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: React.ReactNode;
  /** Emoji or icon node. */
  icon?: React.ReactNode;
  selected?: boolean;
  /** @default 'indigo' */
  tone?: 'indigo' | 'red' | 'mint' | 'lilac';
}

export function CategoryChip(props: CategoryChipProps): JSX.Element;
