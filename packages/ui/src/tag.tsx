import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from './lib/cn.js';

const tagVariants = cva(
  'inline-flex items-center rounded-pill px-3 py-1.5 font-mono text-label uppercase tracking-label',
  {
    variants: {
      tone: {
        light: 'bg-tag-light text-primary',
        dark: 'bg-ink text-accent-tint',
      },
    },
    defaultVariants: {
      tone: 'light',
    },
  },
);

export interface TagProps
  extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof tagVariants> {}

function Tag({ className, tone, ...props }: TagProps) {
  return <span className={cn(tagVariants({ tone }), className)} {...props} />;
}

export { Tag, tagVariants };
