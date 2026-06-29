import * as React from 'react';

/**
 * Thalaja Card — rounded surface container.
 *
 * @startingPoint section="Core" subtitle="Rounded surfaces incl. the hard-pop card" viewport="700x220"
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  /** @default 'plain' */
  variant?: 'plain' | 'pop' | 'sunken' | 'brand';
  /** Optional tinted fill. */
  tone?: 'red' | 'mint' | 'indigo' | 'lilac';
  /** @default 'md' */
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** @default 'lg' */
  radius?: 'md' | 'lg' | 'xl';
}

export function Card(props: CardProps): JSX.Element;
