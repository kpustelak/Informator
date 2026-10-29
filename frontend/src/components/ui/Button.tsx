import type { ComponentProps } from 'react'

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors ' +
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ' +
  'disabled:cursor-not-allowed disabled:opacity-50'

const variants = {
  primary: 'bg-accent text-white enabled:hover:bg-accent-hover',
  secondary: 'border border-line bg-surface text-ink enabled:hover:bg-muted',
  ghost: 'text-ink enabled:hover:bg-muted',
  danger: 'bg-danger text-white enabled:hover:bg-danger-hover',
}

const sizes = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-6 text-base',
}

type ButtonProps = ComponentProps<'button'> & {
  variant?: keyof typeof variants
  size?: keyof typeof sizes
}

export function Button({ variant = 'primary', size = 'md', type = 'button', className = '', ...props }: ButtonProps) {
  return <button type={type} className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props} />
}
