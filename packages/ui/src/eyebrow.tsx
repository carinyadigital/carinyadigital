import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from './lib/cn.js';

const eyebrowVariants = cva(
  'font-mono text-label font-medium uppercase tracking-label-loose',
  {
    variants: {
      tone: {
        clay: 'text-secondary',
        sage: 'text-accent-tint',
        muted: 'text-muted-foreground',
      },
    },
    defaultVariants: {
      tone: 'clay',
    },
  },
);

export interface EyebrowProps
  extends React.HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof eyebrowVariants> {}

function Eyebrow({ className, tone, ...props }: EyebrowProps) {
  return <p className={cn(eyebrowVariants({ tone }), className)} {...props} />;
}

export { Eyebrow, eyebrowVariants };
