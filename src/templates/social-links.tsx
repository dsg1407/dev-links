import { SocialButton } from '@/components/social-button'
import { createClient } from '@/prismicio'

export async function SocialLinks() {
  const client = createClient()
  const page = await client.getSingle('link_page')
  const { social_links } = page.data

  return (
    <aside className="p-6 flex gap-4 items-center justify-center">
      {social_links.map(
        social =>
          social.text && (
            <SocialButton
              key={social.key}
              field={social}
              social={social.text}
            />
          )
      )}
    </aside>
  )
}
