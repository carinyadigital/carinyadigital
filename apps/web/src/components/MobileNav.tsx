'use client';

import { Dialog } from '@base-ui/react/dialog';
import { cn, textLinkVariants } from '@carinya-digital/ui';
import { nav } from '@/content/site';

const menuLinkClass = cn(
  textLinkVariants({ variant: 'nav' }),
  'text-h3 font-heading normal-case tracking-tight',
);

export function MobileNav() {
  return (
    <div className="lg:hidden">
      <Dialog.Root>
        <Dialog.Trigger
          aria-label="Open menu"
          className="inline-flex size-10 items-center justify-center rounded-sm text-foreground hover:bg-paper-raised"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="size-6" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M3.748 8.248a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75ZM3.748 15.75a.75.75 0 0 1 .75-.751h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Popup className="fixed inset-0 z-50 flex flex-col bg-background px-6 py-6 outline-none">
            <div className="flex justify-end">
              <Dialog.Close
                aria-label="Close menu"
                className="inline-flex size-10 items-center justify-center rounded-sm text-foreground hover:bg-paper-raised"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </Dialog.Close>
            </div>
            <Dialog.Title className="sr-only">Menu</Dialog.Title>
            <nav className="mt-10 flex flex-col gap-6">
              {nav.items.map((item) => (
                <Dialog.Close
                  key={item.href}
                  nativeButton={false}
                  render={<a href={item.href} className={menuLinkClass} />}
                >
                  {item.label}
                </Dialog.Close>
              ))}
              <Dialog.Close
                nativeButton={false}
                render={<a href={nav.cta.href} className={menuLinkClass} />}
              >
                {nav.cta.label}
              </Dialog.Close>
            </nav>
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
