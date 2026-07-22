'use client'

import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin } from 'react-icons/fa6'
import type { IconType } from 'react-icons'
import { socialGroups, platformMeta } from '@/lib/hub-links'

const iconMap: Record<string, IconType> = {
  FaInstagram, FaFacebook, FaYoutube, FaLinkedin,
}

export function SocialLinks() {
  return (
    <div className="flex flex-col gap-3">
      {socialGroups.map((group) => (
        <div key={group.brand}>
          <div
            className="text-[11px] font-medium uppercase tracking-wide mb-1.5 px-0.5"
            style={{ color: '#525252' }}
          >
            {group.brand}
          </div>
          <div className="flex gap-2">
            {group.links.map((link) => {
              const meta = platformMeta[link.platform]
              const Icon = iconMap[meta.icon] ?? FaInstagram
              const label = `${link.platform} ${group.brand} — ${link.handle}`
              return (
                <a
                  key={link.platform}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="flex items-center justify-center w-11 h-11 rounded-lg transition-all duration-150"
                  style={{
                    border: `1px solid ${meta.color}25`,
                    backgroundColor: `${meta.color}0d`,
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLElement).style.backgroundColor = `${meta.color}1f`
                    ;(e.currentTarget as HTMLElement).style.borderColor = `${meta.color}55`
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLElement).style.backgroundColor = `${meta.color}0d`
                    ;(e.currentTarget as HTMLElement).style.borderColor = `${meta.color}25`
                  }}
                >
                  <Icon className="h-[18px] w-[18px] transition-colors" style={{ color: meta.color }} />
                </a>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
