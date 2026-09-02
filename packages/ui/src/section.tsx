import * as React from 'react';
import { cn } from './lib/cn.js';
import { Container } from './container.js';
import { Eyebrow } from './eyebrow.js';
import { Subheading } from './subheading.js';
import { Text } from './text.js';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  eyebrow?: React.ReactNode;
  headline?: React.ReactNode;
  subheadline?: React.ReactNode;
  cta?: React.ReactNode;
}

function Section({
  eyebrow,
  headline,
  subheadline,
  cta,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn('py-24', className)} {...props}>
      <Container className="flex flex-col gap-10 sm:gap-16">
        {headline ? (
          <div className="flex max-w-2xl flex-col gap-6">
            <div className="flex flex-col gap-2">
              {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
              <Subheading>{headline}</Subheading>
            </div>
            {subheadline ? <Text className="text-pretty">{subheadline}</Text> : null}
            {cta}
          </div>
        ) : null}
        {children}
      </Container>
    </section>
  );
}

export { Section };
