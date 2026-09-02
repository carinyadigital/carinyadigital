import * as React from 'react';
import { cn } from './lib/cn.js';
import { Container } from './container.js';
import { Subheading } from './subheading.js';
import { Text } from './text.js';

export interface CallToActionProps extends React.HTMLAttributes<HTMLElement> {
  headline: React.ReactNode;
  subheadline?: React.ReactNode;
  cta?: React.ReactNode;
  tone?: 'default' | 'inverse';
  align?: 'start' | 'center';
}

function CallToAction({
  headline,
  subheadline,
  cta,
  tone = 'default',
  align = 'center',
  className,
  children,
  ...props
}: CallToActionProps) {
  return (
    <section
      className={cn(
        'py-24',
        tone === 'inverse' && 'dark bg-background text-foreground',
        className,
      )}
      {...props}
    >
      <Container
        className={cn(
          'flex gap-5',
          align === 'center' && 'max-w-xl flex-col items-center text-center',
          align === 'start' && 'flex-wrap items-end justify-between text-left',
        )}
      >
        <div className={cn('flex flex-col gap-3', align === 'start' && 'max-w-[44ch]')}>
          <Subheading className={align === 'center' ? 'max-w-4xl' : undefined}>{headline}</Subheading>
          {subheadline ? <Text>{subheadline}</Text> : null}
        </div>
        {cta}
        {children}
      </Container>
    </section>
  );
}

export { CallToAction };
