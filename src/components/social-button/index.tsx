import { PrismicNextLink, type PrismicNextLinkProps } from '@prismicio/next'
import { SOCIAL_PROVIDERS } from './social-provider'

type SocialButtonProps = PrismicNextLinkProps & {
  social: string
}

export function SocialButton({ field, social }: SocialButtonProps) {
  const socialInfo = SOCIAL_PROVIDERS[social as keyof typeof SOCIAL_PROVIDERS]

  if (!socialInfo) {
    return null
  }

  return (
    <PrismicNextLink
      field={field}
      className="p-2 rounded-full hover:bg-foreground/10 dark:hover:bg-foreground/20 hover:ring-8 hover:ring-foreground/10 dark:hover:ring-foreground/20 transition-all duration-200 text-foreground"
    >
      {socialInfo.icon}
    </PrismicNextLink>
  )
}
