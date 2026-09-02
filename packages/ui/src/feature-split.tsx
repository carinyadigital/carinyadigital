import * as React from 'react';
import { cn } from './lib/cn.js';
import { Container } from './container.js';
import { Eyebrow } from './eyebrow.js';
import { Subheading } from './subheading.js';
import { Text } from './text.js';

export interface FeatureSplitProps extends React.HTMLAttributes<HTMLElement> {
  eyebrow?: React.ReactNode;
  headline: React.ReactNode;
  children?: React.ReactNode;
  media: React.ReactNode;
  mediaPosition?: 'start' | 'end';
  tone?: 'default' | 'card' | 'inverse';
}

function FeatureSplit({
  eyebrow,
  headline,
  children,
  media,
  mediaPosition = 'start',
  tone = 'default',
  className,
  ...props
}: FeatureSplitProps) {
  return (
    <section
      className={cn(
        'py-24',
        tone === 'card' && 'bg-card',
        tone === 'inverse' && 'dark bg-background text-foreground',
        className,
      )}
      {...props}
    >
      <Container
        className={cn(
          'grid items-center gap-12 lg:grid-cols-2 lg:gap-16',
          mediaPosition === 'end' && 'lg:[&>*:first-child]:order-2',
        )}
      >
        <div>{media}</div>
        <div>
          {eyebrow ? <Eyebrow tone={tone === 'inverse' ? 'sage' : 'clay'}>{eyebrow}</Eyebrow> : null}
          <Subheading className={cn(eyebrow && 'mt-4')}>{headline}</Subheading>
          {children ? <div className="mt-4 max-w-[46ch]">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}

export interface FeatureCopyProps {
  children: React.ReactNode;
}

function FeatureCopy({ children }: FeatureCopyProps) {
  return <Text>{children}</Text>;
}

export { FeatureSplit, FeatureCopy };
