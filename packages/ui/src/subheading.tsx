import * as React from 'react';
import { cn } from './lib/cn.js';

const Subheading = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h2
      ref={ref}
      className={cn('font-heading text-h2 font-normal text-pretty text-foreground', className)}
      {...props}
    />
  ),
);
Subheading.displayName = 'Subheading';

export { Subheading };
