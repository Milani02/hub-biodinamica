'use client'

import { Globe, BookOpen, GraduationCap, Building2, Headphones, Headset } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { HubLink } from '@/lib/hub-links'

const iconMap: Record<string, LucideIcon> = {
  Globe, BookOpen, GraduationCap, Building2, Headphones, Headset,
}

export function HubCard({ link }: { link: HubLink }) {
  const Icon = iconMap[link.icon] ?? Globe
  const c = link.color

  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3.5 rounded-xl px-4 py-3.5 transition-all duration-150"
      style={{
        border: `1px solid ${c}25`,
        backgroundColor: `${c}0d`,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.backgroundColor = `${c}1f`
        ;(e.currentTarget as HTMLElement).style.borderColor = `${c}55`
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.backgroundColor = `${c}0d`
        ;(e.currentTarget as HTMLElement).style.borderColor = `${c}25`
      }}
    >
      <div
        className="flex items-center justify-center w-11 h-11 rounded-lg shrink-0 transition-colors"
        style={{ backgroundColor: `${c}20` }}
      >
        <Icon className="h-5 w-5 transition-colors" style={{ color: c }} />
      </div>
      <div className="min-w-0">
        <div className="text-[15px] font-semibold truncate leading-tight transition-colors"
          style={{ color: '#d4d4d4' }}>
          {link.title}
        </div>
        <div className="text-[12px] truncate leading-tight mt-1 transition-colors"
          style={{ color: '#525252' }}>
          {link.description}
        </div>
      </div>
    </a>
  )
}
