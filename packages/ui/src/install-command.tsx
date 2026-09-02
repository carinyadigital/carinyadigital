'use client';

import * as React from 'react';
import { Button } from './button.js';
import { cn } from './lib/cn.js';

export interface InstallCommandProps extends React.HTMLAttributes<HTMLDivElement> {
  snippet: string;
}

function InstallCommand({ snippet, className, ...props }: InstallCommandProps) {
  const [copied, setCopied] = React.useState(false);

  async function copy() {
    await navigator.clipboard.writeText(snippet);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div
      className={cn(
        'flex flex-wrap items-start justify-between gap-5 rounded-md border border-border bg-charcoal p-6',
        className,
      )}
      {...props}
    >
      <pre className="min-w-[260px] flex-1 font-mono text-small leading-[1.7] text-inverse whitespace-pre-wrap">
        {snippet}
      </pre>
      <Button type="button" size="sm" onClick={copy}>
        {copied ? 'Copied' : 'Copy'}
      </Button>
    </div>
  );
}

export { InstallCommand };
