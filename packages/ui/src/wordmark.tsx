import * as React from 'react';
import { cn } from './lib/cn.js';

export interface WordmarkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
}

function Wordmark({ href = '/', className, ...props }: WordmarkProps) {
  return (
    <a
      href={href}
      aria-label="Carinya Digital"
      className={cn('inline-flex items-start gap-2 no-underline', className)}
      {...props}
    >
      <span
        className="mt-2 inline-block size-2 shrink-0 rounded-full bg-primary"
        aria-hidden="true"
      />
      <span className="font-heading text-[19px] leading-[1.15] font-normal text-foreground">
        carinya
        <br />
        <span className="font-semibold text-primary">digital</span>
      </span>
    </a>
  );
}

export { Wordmark };
