import * as React from 'react';
import { cn } from './lib/cn.js';
import { BorderGrid } from './border-grid.js';

export interface FeatureProps extends React.HTMLAttributes<HTMLDivElement> {
  headline: React.ReactNode;
}

function Feature({ headline, className, children, ...props }: FeatureProps) {
  return (
    <div className={cn('flex flex-col gap-2.5 bg-background p-7', className)} {...props}>
      <h3 className="font-heading text-[22px] leading-snug text-foreground">{headline}</h3>
      {children ? (
        <div className="text-small leading-[1.55] text-muted-foreground">{children}</div>
      ) : null}
    </div>
  );
}

export interface FeatureGridItem {
  headline: React.ReactNode;
  description: React.ReactNode;
}

export interface FeatureGridProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: readonly FeatureGridItem[];
}

function FeatureGrid({ items, className, children, ...props }: FeatureGridProps) {
  return (
    <BorderGrid className={cn('grid-cols-1 sm:grid-cols-2 lg:grid-cols-3', className)} {...props}>
      {items
        ? items.map((item, index) => (
            <Feature key={index} headline={item.headline}>
              {item.description}
            </Feature>
          ))
        : children}
    </BorderGrid>
  );
}

export { Feature, FeatureGrid };
