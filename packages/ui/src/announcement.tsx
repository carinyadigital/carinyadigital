import * as React from 'react';
import { cn } from './lib/cn.js';

export interface AnnouncementProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  href: string;
  cta?: React.ReactNode;
}

function Announcement({ href, cta = 'View', className, children, ...props }: AnnouncementProps) {
  return (
    <a
      href={href}
      className={cn(
        'inline-flex max-w-full items-center gap-3 rounded-sm border border-border bg-card px-3.5 py-2 font-mono text-label uppercase tracking-label text-foreground transition-colors hover:border-foreground',
        className,
      )}
      {...props}
    >
      <span className="truncate">{children}</span>
      <span className="h-3 w-px shrink-0 bg-border" aria-hidden="true" />
      <span className="shrink-0 text-primary">
        {cta} →
      </span>
    </a>
  );
}

export { Announcement };
