import * as React from 'react';
import { cn } from './lib/cn.js';

export interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  value: React.ReactNode;
  label: React.ReactNode;
}

function Stat({ value, label, className, ...props }: StatProps) {
  return (
    <div className={cn('rounded-sm bg-card p-7', className)} {...props}>
      <div className="font-heading text-[48px] leading-none text-secondary">{value}</div>
      <div className="mt-2.5 max-w-[220px] font-sans text-small text-charcoal">{label}</div>
    </div>
  );
}

export { Stat };
