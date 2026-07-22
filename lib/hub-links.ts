export interface HubLink {
  title: string
  description: string
  href: string
  icon: string
  color: string
}

export const leftLinks: HubLink[] = [
  {
    title: 'Bioteca',
    description: 'Sistema de cursos',
    href: 'https://bioteca.biodinamica.com.br/',
    icon: 'BookOpen',
    color: '#0ea5e9',
  },
  {
    title: 'WebChamado',
    description: 'Suporte técnico',
    href: 'https://www.webchamado.biodinamica.com.br/',
    icon: 'Headphones',
    color: '#f97316',
  },
  {
    title: 'Ciosp',
    description: 'Painel de controle',
    href: 'https://ciosp.biodinamica.com.br/login',
    icon: 'GraduationCap',
    color: '#a855f7',
  },
]

export const EMPLOYEE_ACCENT = '#8b5cf6'

export const employeePortalLink: HubLink = {
  title: 'Portal do colaborador',
  description: 'Acesso do colaborador',
  href: 'https://portalcolaborador.biodinamica.com.br/',
  icon: 'Contact',
  color: EMPLOYEE_ACCENT,
}

export interface RhLink {
  entity: string
  href: string
  icon: string
  color: string
}

export const rhLinks: RhLink[] = [
  { entity: 'Biodinâmica', href: 'http://192.168.1.31:8484/rh/#/login', icon: '/rh/bio.png', color: '#22c55e' },
  { entity: 'MultiBrasil', href: 'http://192.168.1.31:8585/rh04/#/login', icon: '/rh/multi.png', color: '#4c56c9' },
  { entity: 'DPO', href: 'http://192.168.1.31:8686/rh09/#/login', icon: '/rh/dpo.png', color: '#1a73b8' },
]

export const portalLinks: HubLink[] = [
  {
    title: 'Site Biodinâmica',
    description: 'Site institucional',
    href: 'https://biodinamica.com.br/',
    icon: 'Globe',
    color: '#22c55e',
  },
  {
    title: 'Loja Oraltech',
    description: 'Produtos Oraltech',
    href: 'https://oraltech.com.br/',
    icon: 'Building2',
    color: '#06b6d4',
  },
]

export type SocialPlatform = 'Instagram' | 'Facebook' | 'YouTube' | 'LinkedIn'

export interface SocialLink {
  platform: SocialPlatform
  handle: string
  href: string
}

export interface SocialGroup {
  brand: string
  links: SocialLink[]
}

export const socialGroups: SocialGroup[] = [
  {
    brand: 'Biodinâmica',
    links: [
      { platform: 'Instagram', handle: '@biodinamicabrasil', href: 'https://www.instagram.com/biodinamicabrasil/' },
      { platform: 'Facebook', handle: '/biodinamica', href: 'https://www.facebook.com/biodinamica' },
      { platform: 'YouTube', handle: 'Canal oficial', href: 'https://www.youtube.com/@BiodinamicaOdonto' },
      { platform: 'LinkedIn', handle: 'Grupo Biodinâmica', href: 'https://www.linkedin.com/company/grupobiodinamica/' },
    ],
  },
  {
    brand: 'Oraltech',
    links: [
      { platform: 'Instagram', handle: '@oraltechbrasil', href: 'https://www.instagram.com/oraltechbrasil/' },
      { platform: 'Facebook', handle: '/oraltech', href: 'https://www.facebook.com/oraltech' },
      { platform: 'YouTube', handle: '@oraltech_brasil', href: 'https://www.youtube.com/@oraltech_brasil' },
    ],
  },
  {
    brand: 'Injecta',
    links: [
      { platform: 'Instagram', handle: '@injecta.brasil', href: 'https://www.instagram.com/injecta.brasil/' },
      { platform: 'Facebook', handle: '/injecta.brasil1', href: 'https://www.facebook.com/injecta.brasil1' },
    ],
  },
]

export const platformMeta: Record<SocialPlatform, { icon: string; color: string }> = {
  Instagram: { icon: 'FaInstagram', color: '#ec4899' },
  Facebook: { icon: 'FaFacebook', color: '#6366f1' },
  YouTube: { icon: 'FaYoutube', color: '#ef4444' },
  LinkedIn: { icon: 'FaLinkedin', color: '#0a66c2' },
}

export const DEV_ACCENT = '#f59e0b'

export interface DevItem {
  title: string
  icon: string
}

export const devItems: DevItem[] = [
  { title: 'ChatBio', icon: 'Bot' },
  { title: 'GED', icon: 'FileText' },
  { title: 'Sac Biodinâmica', icon: 'Headset' },
]
