import { UserRound as UserIcon } from 'lucide-react' // Importando o ícone do Lucide
import Image from 'next/image'
import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

type AvatarImageProps = HTMLAttributes<HTMLDivElement> & {
  src?: string
  alt: string
}

function Profile({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('flex flex-col items-center gap-2', className)}
      {...props}
    >
      {children}
    </div>
  )
}

function Avatar({ src = '', alt, className }: AvatarImageProps) {
  const isValidImage = typeof src === 'string' && src.length > 0

  return (
    <div
      className={cn(
        'w-28 h-28 rounded-full flex items-center justify-center',
        !src &&
          'border-2 bg-zinc-300 dark:bg-zinc-700 border-zinc-400 dark:border-zinc-400',
        className
      )}
    >
      {isValidImage ? (
        <Image
          src={src}
          alt={alt}
          width={112}
          height={112}
          className="w-full h-full rounded-full object-cover outline-2 outline-foreground/50 -outline-offset-2"
        />
      ) : (
        <UserIcon className="text-zinc-400 w-12 h-12" />
      )}
    </div>
  )
}

function Title({ title }: { title: string }) {
  return <span className="text-foreground">{title}</span>
}

Profile.Avatar = Avatar
Profile.Title = Title

export { Profile }
