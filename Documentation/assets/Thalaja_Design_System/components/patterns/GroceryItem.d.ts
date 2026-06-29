import * as React from 'react';

/**
 * Thalaja GroceryItem — a single row in a shared grocery list.
 *
 * @startingPoint section="Patterns" subtitle="Checkable shared-list row" viewport="700x120"
 */
export interface GroceryItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Item name. */
  name: React.ReactNode;
  /** Secondary line (quantity, notes). */
  note?: React.ReactNode;
  checked?: boolean;
  onToggle?: (checked: boolean) => void;
  /** Emoji string or node shown in a tinted category token. */
  category?: React.ReactNode;
  /** @default 'lilac' */
  categoryTone?: 'red' | 'mint' | 'indigo' | 'lilac';
  /** Name of the member who added it — renders a small avatar. */
  addedBy?: string;
  /** Right-aligned slot, typically a QtyStepper or IconButton. */
  trailing?: React.ReactNode;
  dir?: 'rtl' | 'ltr';
}

export function GroceryItem(props: GroceryItemProps): JSX.Element;
