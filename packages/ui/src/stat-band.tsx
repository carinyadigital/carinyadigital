import * as React from 'react';
import { cn } from './lib/cn.js';
import { Container } from './container.js';

export interface StatBandItem {
  value: React.ReactNode;
  label: React.ReactNode;
}

export interface StatBandProps extends React.HTMLAttributes<HTMLDivElement> {
  items: StatBandItem[];
}

function StatBand({ items, className, ...props }: StatBandProps) {
  return (
    <div className={cn('border-y border-border', className)} {...props}>
      <Container className="grid px-0 md:grid-cols-3">
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
}

export { StatBand };
