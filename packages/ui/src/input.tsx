import * as React from 'react';
import { cn } from './lib/cn.js';

export interface InputProps extends Omit<React.ComponentProps<'input'>, 'size'> {
  label?: React.ReactNode;
  invalid?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, invalid = false, id, ...props }, ref) => {
    const inputId = id ?? props.name;

    const field = (
      <input
        ref={ref}
        id={inputId}
        aria-invalid={invalid}
        className={cn(
          'block w-full rounded-sm border border-input bg-card px-3.5 py-3 font-sans text-small text-foreground outline-none transition-colors',
          'placeholder:text-faint-foreground',
          'focus:border-ring focus:outline-2 focus:outline-offset-0 focus:outline-ring/30',
          'disabled:cursor-not-allowed disabled:opacity-50',
          invalid && 'border-destructive focus:border-destructive focus:outline-destructive/30',
          className,
        )}
        {...props}
      />
    );

    if (!label) {
      return field;
    }

    return (
      <label className="flex flex-col gap-2 font-sans" htmlFor={inputId}>
        <span className="font-mono text-[11px] uppercase tracking-label text-faint-foreground">
          {label}
        </span>
        {field}
      </label>
    );
  },
);
Input.displayName = 'Input';

export { Input };
