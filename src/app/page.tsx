import { PrismicNextLink } from '@prismicio/next'
import Link from 'next/link'
import { Button } from '@/components/button'
import { createClient } from '@/prismicio'
import { Header } from '@/templates/header'
import { SocialLinks } from '@/templates/social-links'

export async function generateMetadata() {
  const client = createClient()
  const page = await client.getSingle('link_page')

  return { title: `${page.data.username} | Dev Links` }
}

export default async function Home() {
  const client = createClient()
  const page = await client.getSingle('link_page')
  const { links } = page.data

  return (
    <div className="flex-1 flex flex-col items-center mt-14 mb-8 max-w-xl w-full mx-auto">
      <Header />
      <main className="p-6 w-full space-y-4">
        {links.map(item => (
          <Button asChild key={item.key}>
            <PrismicNextLink field={item}>{item.text}</PrismicNextLink>
          </Button>
        ))}
      </main>
      <SocialLinks />
      <footer className="p-6 text-sm">
        Feito com <span className="text-red-400">♥</span> por{' '}
        <Link href="https://danielsg.dev" target="_blank" className="border-b">
          Daniel Gonçalves
        </Link>
      </footer>
    </div>
  )
}
