import { SocialButton } from '@/components/social-button'

const data = [
  {
    socialName: 'twitter',
    url: 'https://twitter.com/dsg1407_',
  },
  {
    socialName: 'linkedin',
    url: 'https://www.linkedin.com/in/dsg1407',
  },
  {
    socialName: 'facebook',
    url: 'https://www.facebook.com/dsg1407',
  },
  {
    socialName: 'threads',
    url: 'https://www.threads.net/@dsg1407',
  },
  {
    socialName: 'github',
    url: 'https://github.com/dsg1407',
  },
]

export function SocialLinks() {
  return (
    <aside className="p-6 flex gap-4 items-center justify-center">
      {data.map(social => (
        <SocialButton
          key={social.socialName}
          href={social.url}
          social={social.socialName}
        />
      ))}
    </aside>
  )
}
