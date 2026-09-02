import * as React from 'react';
import { cn } from './lib/cn.js';
import { Container } from './container.js';
import { Subheading } from './subheading.js';
import { Text } from './text.js';

export interface StatBandItem {
  value: React.ReactNode;
  label: React.ReactNode;
}

export interface StatBandProps extends React.HTMLAttributes<HTMLDivElement> {
  items: StatBandItem[];
  headline?: React.ReactNode;
  description?: React.ReactNode;
}

const columnClass: Record<number, string> = {
  1: 'md:grid-cols-1',
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
  4: 'md:grid-cols-4',
};

function StatBand({ items, headline, description, className, ...props }: StatBandProps) {
  const columns = Math.min(Math.max(items.length, 1), 4);
  const hasIntro = Boolean(headline || description);

  const grid = (
    <div className={cn('border-y border-border', !hasIntro && className)} {...(!hasIntro ? props : {})}>
      <Container className={cn('grid px-0', columnClass[columns])}>
        {items.map((item, index) => (
          <div
            key={index}
            className={cn(
              'px-6 py-12 text-center lg:px-10',
              index < items.length - 1 && 'border-b border-border md:border-b-0 md:border-r',
            )}
          >
            <div className="font-heading text-[40px] leading-none text-secondary">{item.value}</div>
            <div className="mt-2 font-sans text-small text-muted-foreground">{item.label}</div>
          </div>
        ))}
      </Container>
    </div>
  );

  if (!hasIntro) {
    return grid;
  }

  return (
    <section className={cn('py-24', className)} {...props}>
      <Container className="mb-12 grid gap-6 lg:grid-cols-2">
        {headline ? <Subheading>{headline}</Subheading> : <div />}
        {description ? <Text className="max-w-xl">{description}</Text> : null}
      </Container>
      {grid}
    </section>
  );
}

export { StatBand };
