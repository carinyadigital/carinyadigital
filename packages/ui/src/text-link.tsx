import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from './lib/cn.js';

const textLinkVariants = cva('inline-flex w-fit items-center no-underline transition-colors', {
  variants: {
    variant: {
      nav: 'font-mono text-label uppercase tracking-label text-foreground hover:text-primary',
      action:
        'font-mono text-label uppercase tracking-label text-primary border-b border-primary pb-0.5 hover:text-eucalypt-dark hover:border-eucalypt-dark',
      muted:
        'font-mono text-label uppercase tracking-label text-muted-foreground border-b border-border-strong pb-0.5 hover:text-foreground',
      body: 'text-primary underline underline-offset-2 hover:text-eucalypt-dark',
    },
  },
  defaultVariants: {
    variant: 'action',
  },
});

export interface TextLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof textLinkVariants> {
  href: string;
}

function TextLink({ className, variant, href, ...props }: TextLinkProps) {
  return <a href={href} className={cn(textLinkVariants({ variant }), className)} {...props} />;
}

export { TextLink, textLinkVariants };
