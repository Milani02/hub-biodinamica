'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Construction, Bot, FileText, Headset } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { devItems, DEV_ACCENT as ACCENT } from '@/lib/hub-links'

const iconMap: Record<string, LucideIcon> = { Bot, FileText, Headset }

const HAZARD_STRIPES = `linear-gradient(135deg, ${ACCENT} 25%, transparent 25%, transparent 50%, ${ACCENT} 50%, ${ACCENT} 75%, transparent 75%, transparent)`

export function DevelopmentArea() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="w-full flex flex-col items-center">
      {/* faixa de obra decorativa — listras "andando" */}
      <div
        className="animate-hazard-scroll h-[3px] w-full max-w-xs rounded-full mb-5 opacity-60"
        style={{ backgroundImage: HAZARD_STRIPES, backgroundSize: '28px 28px' }}
      />

      <div className="flex items-center gap-2 mb-3.5">
        <Construction className="h-4 w-4" style={{ color: ACCENT }} />
        <span
          className="text-[12px] font-bold uppercase tracking-wide"
          style={{ color: '#a3a3a3' }}
        >
          Em desenvolvimento
        </span>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        {devItems.map((item) => {
          const Icon = iconMap[item.icon] ?? Bot
          return (
            <div
              key={item.title}
              aria-disabled="true"
              title="Em desenvolvimento — disponível em breve"
              className="relative flex items-center gap-2.5 rounded-lg px-4 py-3 select-none overflow-hidden"
              style={{
                border: `1.5px dashed ${ACCENT}40`,
                backgroundColor: `${ACCENT}0a`,
                cursor: 'not-allowed',
                opacity: 0.7,
              }}
            >
              {/* brilho de "scanner" passando pelo card */}
              <div
                className="animate-dev-shimmer pointer-events-none absolute inset-y-0 left-0 w-1/3"
                style={{
                  background: `linear-gradient(90deg, transparent, ${ACCENT}30, transparent)`,
                  transform: 'skewX(-20deg)',
                }}
              />

              <motion.div
                className="flex items-center justify-center w-9 h-9 rounded-md shrink-0"
                style={{ backgroundColor: `${ACCENT}1f` }}
                animate={reduceMotion ? undefined : { scale: [1, 1.1, 1] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Icon className="h-[18px] w-[18px]" style={{ color: ACCENT }} />
              </motion.div>
              <span className="text-[13px] font-medium whitespace-nowrap" style={{ color: '#c4c4c4' }}>
                {item.title}
              </span>
              <span
                className="shrink-0 text-[9px] font-bold uppercase tracking-wide px-2 py-1 rounded-full leading-none"
                style={{ backgroundColor: ACCENT, color: '#1a1a1a' }}
              >
                Em breve
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
