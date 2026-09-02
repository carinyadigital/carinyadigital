'use client';

import { useState } from 'react';
import { TextLink } from '@carinya-digital/ui';
import { nav } from '@/content/site';

export function MobileNav({ githubHref = nav.github.href }: { githubHref?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        className="inline-flex size-10 items-center justify-center rounded-sm text-foreground hover:bg-paper-raised"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="currentColor" className="size-6" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M3.748 8.248a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75ZM3.748 15.75a.75.75 0 0 1 .75-.751h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>
      {open ? (
        <div className="fixed inset-0 top-[73px] z-20 bg-background px-6 py-10">
          <nav className="flex flex-col gap-6">
            <TextLink variant="nav" href={nav.resources.href} className="text-h3 font-heading normal-case tracking-tight" onClick={() => setOpen(false)}>
              {nav.resources.label}
            </TextLink>
            <TextLink variant="nav" href={githubHref} className="text-h3 font-heading normal-case tracking-tight" onClick={() => setOpen(false)}>
              GitHub
            </TextLink>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
