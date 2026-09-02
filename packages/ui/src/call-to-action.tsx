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
}

function CallToAction({
  headline,
  subheadline,
  cta,
  tone = 'default',
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
      <Container className="flex max-w-xl flex-col items-center gap-5 text-center">
        <Subheading className="max-w-4xl">{headline}</Subheading>
        {subheadline ? <Text>{subheadline}</Text> : null}
        {cta}
        {children}
      </Container>
    </section>
  );
}

export { CallToAction };
