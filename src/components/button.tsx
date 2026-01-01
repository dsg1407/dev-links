import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'

export function Button({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> & {
  asChild?: boolean
}) {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      className={cn(
        'block w-full text-center py-4 px-6 bg-foreground/5 dark:bg-foreground/10 border border-foreground/50 backdrop:blur-xs rounded-lg transition-colors hover:bg-foreground/2 dark:hover:bg-foreground/5 hover:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground/30 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer',
        className
      )}
      {...props}
    />
  )
}
