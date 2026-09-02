import * as React from 'react';
import { cn } from './lib/cn.js';

function Stack({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('flex', className)} {...props} />;
}

export { Stack };
