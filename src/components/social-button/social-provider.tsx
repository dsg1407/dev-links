import {
  AtSign,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from 'lucide-react'

export type SocialProvider =
  | 'linkedin'
  | 'facebook'
  | 'twitter'
  | 'threads'
  | 'github'
  | 'instagram'
  | 'youtube'

export const SOCIAL_PROVIDERS = {
  linkedin: {
    name: 'LinkedIn',
    icon: <Linkedin className="h-6 w-6" />,
  },
  facebook: {
    name: 'Facebook',
    icon: <Facebook className="h-6 w-6" />,
  },
  twitter: {
    name: 'Twitter',
    icon: <Twitter className="h-6 w-6" />,
  },
  threads: {
    name: 'Threads',
    icon: <AtSign className="h-6 w-6" />,
  },
  github: {
    name: 'GitHub',
    icon: <Github className="h-6 w-6" />,
  },
  instagram: {
    name: 'Instagram',
    icon: <Instagram className="h-6 w-6" />,
  },
  youtube: {
    name: 'YouTube',
    icon: <Youtube className="h-6 w-6" />,
  },
}
