import * as React from 'react';
import { cn } from './lib/cn.js';

export interface ImageSlotProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  src?: string;
  alt?: string;
}

function ImageSlot({ label, src, alt, className, ...props }: ImageSlotProps) {
  if (src) {
    return (
      <div className={cn('overflow-hidden rounded-sm', className)} {...props}>
        <img src={src} alt={alt ?? label} className="size-full object-cover" />
      </div>
    );
  }

  return (
    <div
      className={cn(
        'flex items-center justify-center rounded-sm border border-dashed border-border-strong bg-card px-6 text-center',
        className,
      )}
      {...props}
    >
      <p className="font-mono text-label uppercase tracking-label text-faint-foreground">{label}</p>
    </div>
  );
}

export { ImageSlot };
