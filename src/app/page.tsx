import Link from 'next/link'
import { Button } from '@/components/button'
import { Header } from '@/templates/header'
import { SocialLinks } from '@/templates/social-links'

export default function Home() {
  return (
    <div className="flex-1 flex flex-col items-center mt-14 mb-8 max-w-xl w-full mx-auto">
      <Header />
      <main className="p-6 w-full space-y-4">
        <Button asChild>
          <Link href={'/#'}>asd</Link>
        </Button>
        <Button asChild>
          <Link href={'/#'}>asd</Link>
        </Button>
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
