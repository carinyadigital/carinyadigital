import * as React from 'react';
import { cn } from './lib/cn.js';

export interface FaqItemProps extends React.HTMLAttributes<HTMLDetailsElement> {
  question: React.ReactNode;
  children: React.ReactNode;
}

function FaqItem({ question, children, className, ...props }: FaqItemProps) {
  return (
    <details
      className={cn('group border-t border-border py-5', className)}
      {...props}
    >
      <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-heading text-[19px] leading-snug text-foreground [&::-webkit-details-marker]:hidden">
        <span>{question}</span>
        <span className="mt-1 shrink-0 font-mono text-label text-muted-foreground group-open:hidden" aria-hidden="true">
          +
        </span>
        <span className="mt-1 hidden shrink-0 font-mono text-label text-muted-foreground group-open:inline" aria-hidden="true">
          −
        </span>
      </summary>
      <div className="mt-2 max-w-prose pr-12 text-small leading-body text-muted-foreground">
        {children}
      </div>
    </details>
  );
}

export interface FaqListProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  heading?: React.ReactNode;
}

function FaqList({ heading = 'FAQs', className, children, ...props }: FaqListProps) {
  return (
    <div className={cn('mx-auto w-full max-w-3xl', className)} {...props}>
      {heading ? (
        <h2 className="mb-8 font-heading text-h2 font-normal text-foreground">{heading}</h2>
      ) : null}
      <div className="flex flex-col border-b border-border">{children}</div>
    </div>
  );
}

export { FaqItem, FaqList };
