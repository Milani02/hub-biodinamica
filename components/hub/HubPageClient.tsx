'use client'

import { useRef, useState, useCallback, useLayoutEffect } from 'react'
import { motion, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'
import { SplineScene } from './SplineScene'
import { HubCard } from './HubCard'
import { SocialLinks } from './SocialLinks'
import { EmployeeArea } from './EmployeeArea'
import { DevelopmentArea } from './DevelopmentArea'
import { leftLinks, portalLinks, sacLinks } from '@/lib/hub-links'

const SPLINE_SCENE = 'https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode'
const SPOT_SIZE = 320

const SPOT_GRADIENT = 'radial-gradient(circle at center, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.06) 50%, transparent 75%)'

export function HubPageClient() {
  const cardRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)
  const [fit, setFit] = useState({ scale: 1, height: 0 })

  // coordenadas absolutas do viewport (para o spotlight fixo fora do card)
  const mouseX = useSpring(0, { bounce: 0, duration: 80 })
  const mouseY = useSpring(0, { bounce: 0, duration: 80 })
  const spotLeft = useTransform(mouseX, (x) => `${x - SPOT_SIZE / 2}px`)
  const spotTop  = useTransform(mouseY, (y) => `${y - SPOT_SIZE / 2}px`)

  // coordenadas relativas ao card (para o spotlight absoluto dentro do card)
  const cardX = useSpring(0, { bounce: 0, duration: 80 })
  const cardY = useSpring(0, { bounce: 0, duration: 80 })
  const cardSpotLeft = useTransform(cardX, (x) => `${x - SPOT_SIZE / 2}px`)
  const cardSpotTop  = useTransform(cardY, (y) => `${y - SPOT_SIZE / 2}px`)

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    mouseX.set(e.clientX)
    mouseY.set(e.clientY)
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect()
      cardX.set(e.clientX - rect.left)
      cardY.set(e.clientY - rect.top)
    }
  }, [mouseX, mouseY, cardX, cardY])

  // encolhe o conteúdo inteiro proporcionalmente quando a altura da tela não é
  // suficiente para exibir tudo sem rolagem (monitores desktop mais baixos)
  useLayoutEffect(() => {
    function recalc() {
      const el = contentRef.current
      if (!el) return

      const isDesktop = window.innerWidth >= 1024
      if (!isDesktop) {
        setFit({ scale: 1, height: 0 })
        return
      }

      const prevTransform = el.style.transform
      el.style.transform = 'none'
      const natural = el.scrollHeight
      el.style.transform = prevTransform

      const available = window.innerHeight
      const scale = natural > 0 ? Math.min(1, available / natural) : 1
      setFit({ scale, height: natural * scale })
    }

    recalc()
    const timers = [setTimeout(recalc, 300), setTimeout(recalc, 1200)]
    window.addEventListener('resize', recalc)
    return () => {
      timers.forEach(clearTimeout)
      window.removeEventListener('resize', recalc)
    }
  }, [])

  return (
    <div
      onMouseMove={onMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col items-center justify-center min-h-screen w-full text-foreground overflow-hidden"
      style={{ backgroundColor: '#000000' }}
    >
      {/* spotlight fixo — cobre toda a página fora do card */}
      <motion.div
        className="pointer-events-none fixed rounded-full blur-2xl"
        style={{
          width: SPOT_SIZE,
          height: SPOT_SIZE,
          left: spotLeft,
          top: spotTop,
          opacity: hovered ? 1 : 0,
          background: SPOT_GRADIENT,
          transition: 'opacity 0.15s ease',
          zIndex: 5,
        }}
      />

      <div
        className="w-full"
        style={fit.scale < 1 ? { height: fit.height, overflow: 'hidden' } : undefined}
      >
      <div
        ref={contentRef}
        className="w-full max-w-[1600px] mx-auto flex flex-col items-center px-4 sm:px-8 md:px-16"
        style={fit.scale < 1 ? { transform: `scale(${fit.scale})`, transformOrigin: 'top center' } : undefined}
      >

        {/* ── HEADER com logo ── */}
        <div className="w-full flex justify-center pb-4 sm:pb-6 relative" style={{ zIndex: 10 }}>
          <Image
            src="/logo.png"
            alt="Biodinâmica"
            width={480}
            height={140}
            priority
            className="h-14 sm:h-20 lg:h-24 w-auto object-contain"
          />
        </div>

        {/* ── LAYOUT: esquerda | robô | direita ── */}
        <div className="flex flex-col lg:flex-row w-full gap-8 lg:gap-0 relative lg:min-h-[500px]" style={{ zIndex: 10 }}>

          {/* ── ESQUERDA ── */}
          <div className="relative flex flex-col justify-center gap-4 lg:p-6 w-full lg:w-[300px]" style={{ zIndex: 10 }}>
            <div className="flex flex-col gap-2.5">
              {leftLinks.map((link) => (
                <HubCard key={link.title} link={link} />
              ))}
            </div>
            <div className="h-px w-full" style={{ backgroundColor: '#ffffff14' }} />
            <div>
              <div
                className="text-[11px] font-medium uppercase tracking-wide mb-2 px-0.5"
                style={{ color: '#525252' }}
              >
                Área do colaborador
              </div>
              <EmployeeArea />
            </div>
          </div>

          {/* ── CENTRO: robô Spline ── */}
          <div
            className="relative rounded-lg overflow-hidden w-full h-72 sm:h-80 md:h-96 lg:h-auto lg:flex-1"
            style={{ minHeight: 0, zIndex: 10, background: 'radial-gradient(ellipse at 50% 55%, #065f46 0%, #022c22 38%, #000000 72%)' }}
          >
            <SplineScene scene={SPLINE_SCENE} className="absolute inset-0" />
          </div>

          {/* ── DIREITA ── */}
          <div className="relative flex flex-col justify-center gap-4 lg:p-6 w-full lg:w-[300px]" style={{ zIndex: 10 }}>
            <div className="flex flex-col gap-2.5">
              {portalLinks.map((link) => (
                <HubCard key={link.title} link={link} />
              ))}
            </div>
            <div className="h-px w-full" style={{ backgroundColor: '#ffffff14' }} />
            <SocialLinks />
          </div>

        </div>

        {/* ── SAC ── */}
        <div className="w-full flex flex-col items-center pt-8 relative" style={{ zIndex: 10 }}>
          <div
            className="text-[11px] font-medium uppercase tracking-wide mb-3 px-0.5"
            style={{ color: '#525252' }}
          >
            SAC
          </div>
          <div className="flex flex-col sm:flex-row w-full gap-2.5 sm:max-w-3xl">
            {sacLinks.map((link) => (
              <div key={link.title} className="flex-1">
                <HubCard link={link} />
              </div>
            ))}
          </div>
        </div>

        {/* ── EM DESENVOLVIMENTO ── */}
        <div className="w-full flex justify-center pt-10 pb-8 relative" style={{ zIndex: 10 }}>
          <DevelopmentArea />
        </div>
      </div>
      </div>
    </div>
  )
}
