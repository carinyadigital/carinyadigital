import * as React from 'react';
import { cn } from './lib/cn.js';
import { Container } from './container.js';
import { Heading } from './heading.js';
import { Text } from './text.js';

export interface HeroProps extends React.HTMLAttributes<HTMLElement> {
  eyebrow?: React.ReactNode;
  headline: React.ReactNode;
  headlineClassName?: string;
  subheadline?: React.ReactNode;
  cta?: React.ReactNode;
  media?: React.ReactNode;
  tone?: 'default' | 'inverse';
  align?: 'start' | 'center';
}

function Hero({
  eyebrow,
  headline,
  headlineClassName,
  subheadline,
  cta,
  media,
  tone = 'default',
  align = 'start',
  className,
  children,
  ...props
}: HeroProps) {
  const centered = align === 'center' && !media;

  const copy = (
    <div className={cn('flex flex-col gap-5', centered && 'items-center text-center')}>
      {eyebrow}
      <Heading className={headlineClassName}>{headline}</Heading>
      {subheadline ? (
        <Text size="lg" className={cn('max-w-[56ch]', centered && 'text-center')}>
          {subheadline}
        </Text>
      ) : null}
      {cta}
      {children}
    </div>
  );

  return (
    <section
      className={cn(
        'py-16 sm:py-24',
        tone === 'inverse' && 'dark bg-background text-foreground',
        className,
      )}
      {...props}
    >
      <Container
        className={cn(
          media && 'grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16',
          centered && 'flex flex-col items-center',
        )}
      >
        {copy}
        {media}
      </Container>
    </section>
  );
}

export { Hero };
