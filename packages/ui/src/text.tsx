import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from './lib/cn.js';

const textVariants = cva('font-sans text-pretty text-muted-foreground', {
  variants: {
    size: {
      md: 'text-body',
      lg: 'text-body-lg',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof textVariants> {}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, size, ...props }, ref) => (
    <p ref={ref} className={cn(textVariants({ size }), className)} {...props} />
  ),
);
Text.displayName = 'Text';

export { Text, textVariants };
