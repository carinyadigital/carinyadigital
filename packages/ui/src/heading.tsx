import * as React from 'react';
import { cn } from './lib/cn.js';

const Heading = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h1
      ref={ref}
      className={cn(
        'font-heading text-display font-normal tracking-tight text-balance text-foreground',
        className,
      )}
      {...props}
    />
  ),
);
Heading.displayName = 'Heading';

export { Heading };
