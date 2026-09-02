import * as React from 'react';
import { cn } from './lib/cn.js';

function BorderGrid({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('grid gap-px bg-border', className)}
      {...props}
    />
  );
}

export { BorderGrid };
