import { Profile } from '@/components/profile'
import { ThemeSwitch } from '@/components/theme-switch'

export function Header() {
  const src = '/avatar.png'
  return (
    <header className="w-full flex flex-col items-center">
      <Profile className="p-6">
        <Profile.Avatar src={src} alt="User Avatar" />
        <Profile.Title title="@dsg1407" />
      </Profile>
      <ThemeSwitch />
    </header>
  )
}
