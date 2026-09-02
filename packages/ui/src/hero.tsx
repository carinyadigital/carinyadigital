import * as React from 'react';
import { cn } from './lib/cn.js';
import { Container } from './container.js';
import { Heading } from './heading.js';
import { Text } from './text.js';

export interface HeroProps extends React.HTMLAttributes<HTMLElement> {
  eyebrow?: React.ReactNode;
  headline: React.ReactNode;
  subheadline?: React.ReactNode;
  cta?: React.ReactNode;
  media?: React.ReactNode;
  tone?: 'default' | 'inverse';
}

function Hero({
  eyebrow,
  headline,
  subheadline,
  cta,
  media,
  tone = 'default',
  className,
  children,
  ...props
}: HeroProps) {
  const copy = (
    <div className="flex flex-col gap-5">
      {eyebrow}
      <Heading>{headline}</Heading>
      {subheadline ? (
        <Text size="lg" className="max-w-[56ch]">
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
        className={cn(media && 'grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16')}
      >
        {copy}
        {media}
      </Container>
    </section>
  );
}

export { Hero };
