'use client';

import * as React from 'react';
import { Button as BaseButton } from '@base-ui/react/button';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from './lib/cn.js';

const buttonVariants = cva(
  'inline-flex items-center justify-center font-sans text-small font-medium transition-colors focus-visible:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-45',
  {
    variants: {
      variant: {
        primary:
          'rounded-sm border border-transparent bg-primary px-[26px] py-[13px] text-primary-foreground hover:bg-eucalypt-dark',
        secondary:
          'rounded-sm border border-foreground bg-transparent px-[25px] py-3 text-foreground hover:bg-paper-raised',
        ghost: 'rounded-sm border border-transparent bg-transparent px-[25px] py-3 text-foreground hover:bg-paper-raised',
        destructive:
          'rounded-sm border border-transparent bg-destructive px-[26px] py-[13px] text-destructive-foreground hover:bg-destructive/90',
        link: 'rounded-sm border-transparent bg-transparent p-0 text-primary underline-offset-4 hover:underline',
      },
      size: {
        md: 'text-small',
        sm: 'px-5 py-2.5 text-label',
        lg: 'px-8 py-3.5 text-body',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

export interface ButtonProps
  extends
    Omit<React.ComponentPropsWithoutRef<typeof BaseButton>, 'render'>,
    VariantProps<typeof buttonVariants> {
  render?: React.ReactElement;
  block?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, render, block = false, ...props }, ref) => {
    return (
      <BaseButton
        ref={ref}
        render={render}
        nativeButton={render ? false : undefined}
        className={cn(buttonVariants({ variant, size }), block && 'flex w-full', className)}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export interface ButtonLinkProps
  extends Omit<ButtonProps, 'render' | 'nativeButton'> {
  href: string;
}

const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ href, className, variant, size, block = false, ...props }, ref) => {
    return (
      <BaseButton
        ref={ref as React.Ref<HTMLButtonElement>}
        nativeButton={false}
        render={<a href={href} />}
        className={cn(buttonVariants({ variant, size }), block && 'flex w-full', className)}
        {...props}
      />
    );
  },
);
ButtonLink.displayName = 'ButtonLink';

export { Button, ButtonLink, buttonVariants };
