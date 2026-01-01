'use client'

import * as SwitchPrimitive from '@radix-ui/react-switch'
import { MoonStar, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import * as React from 'react'
import { cn } from '@/lib/utils'

function ThemeSwitch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isLight = resolvedTheme === 'light'

  function handleToggle(checked: boolean) {
    setTheme(checked ? 'light' : 'dark')
  }

  return (
    <SwitchPrimitive.Root
      checked={isLight}
      onCheckedChange={handleToggle}
      className={cn(
        'my-1 w-16 h-6 rounded-full bg-foreground/5 dark:bg-foreground/10 border border-foreground/50 backdrop:blur-xs inline-flex shrink-0 items-center transition-all duration-200 ease-in-out cursor-pointer focus:outline-none',
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        className={cn(
          'p-2 rounded-full bg-white drop-shadow-sm flex items-center justify-center',
          'transition-all duration-200 outline-none',
          'will-change-transform data-[state=checked]:translate-x-[calc(4rem-100%-1px)]',
          'data-[state=unchecked]:translate-x-0',
          'hover:ring-8 hover:ring-foreground/2 dark:hover:ring-foreground/5'
        )}
      >
        {isLight ? (
          <Sun size={16} className="text-black" />
        ) : (
          <MoonStar size={16} className="text-black" />
        )}
      </SwitchPrimitive.Thumb>
    </SwitchPrimitive.Root>
  )
}

export { ThemeSwitch }
