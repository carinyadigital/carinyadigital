import * as React from 'react';
import { cn } from './lib/cn.js';

const Main = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <main ref={ref} className={cn('isolate', className)} {...props} />
  ),
);
Main.displayName = 'Main';

export { Main };
