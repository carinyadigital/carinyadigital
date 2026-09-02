import * as React from 'react';
import { cn } from './lib/cn.js';

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('rounded-sm bg-card p-7 text-card-foreground', className)}
      {...props}
    />
  ),
);
Card.displayName = 'Card';

const CardIndex = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('font-mono text-label text-secondary', className)}
      {...props}
    />
  ),
);
CardIndex.displayName = 'CardIndex';

const CardTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('mt-3 font-heading text-[22px] leading-snug text-foreground', className)}
      {...props}
    />
  ),
);
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('mt-2 text-small leading-[1.55] text-muted-foreground', className)}
      {...props}
    />
  ),
);
CardDescription.displayName = 'CardDescription';

export interface ContentCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  index?: React.ReactNode;
  title: React.ReactNode;
  children?: React.ReactNode;
}

function ContentCard({ index, title, children, className, ...props }: ContentCardProps) {
  return (
    <Card className={className} {...props}>
      {index ? <CardIndex>{index}</CardIndex> : null}
      <CardTitle>{title}</CardTitle>
      {children ? <CardDescription>{children}</CardDescription> : null}
    </Card>
  );
}

export { Card, CardIndex, CardTitle, CardDescription, ContentCard };
