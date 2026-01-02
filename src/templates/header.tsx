import { Profile } from '@/components/profile'
import { ThemeSwitch } from '@/components/theme-switch'
import { createClient } from '@/prismicio'

export async function Header() {
  const client = createClient()
  const page = await client.getSingle('link_page')
  const { avatar, username } = page.data

  return (
    <header className="w-full flex flex-col items-center">
      <Profile className="p-6">
        <Profile.Avatar
          src={avatar.url as string}
          alt={avatar.alt || 'User Avatar'}
        />
        <Profile.Title title={`${username}`} />
      </Profile>
      <ThemeSwitch />
    </header>
  )
}
