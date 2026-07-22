import type { Metadata } from 'next'
import { HubPageClient } from '@/components/hub/HubPageClient'

export const metadata: Metadata = {
  title: 'Hub | Biodinâmica',
  description: 'Central de acesso rápido aos principais canais e plataformas da Biodinâmica.',
}

export default function HubPage() {
  return <HubPageClient />
}
