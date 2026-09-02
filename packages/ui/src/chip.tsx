import * as React from 'react';
import { cn } from './lib/cn.js';

function Chip({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-sm border border-border-strong px-3 py-1.5 font-sans text-small text-muted-foreground',
        className,
      )}
      {...props}
    />
  );
}

export { Chip };
