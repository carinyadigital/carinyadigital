import * as React from 'react';
import { cn } from './lib/cn.js';

function InverseSurface({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <section
      className={cn('dark bg-background py-24 text-foreground', className)}
      {...props}
    />
  );
}

export { InverseSurface };
