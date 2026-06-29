import * as React from 'react';

/**
 * Thalaja ListSummaryCard — tappable summary of a shared grocery list.
 *
 * @startingPoint section="Patterns" subtitle="Shared-list card with progress" viewport="700x240"
 */
export interface ListSummaryCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: React.ReactNode;
  /** Household / group name. */
  household?: React.ReactNode;
  /** Member names — rendered as an avatar cluster. */
  members?: string[];
  /** Total item count. @default 0 */
  total?: number;
  /** Completed item count. @default 0 */
  done?: number;
  /** Accent color for the dot + progress bar. @default 'red' */
  accent?: 'red' | 'indigo' | 'mint' | 'lilac';
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export function ListSummaryCard(props: ListSummaryCardProps): JSX.Element;
