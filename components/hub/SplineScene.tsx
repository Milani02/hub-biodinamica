'use client'

import { lazy, Suspense, useCallback, useEffect, useRef } from 'react'
import type { Application } from '@splinetool/runtime'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const appRef = useRef<Application | null>(null)

  const onLoad = useCallback((app: Application) => {
    appRef.current = app
    // Cap pixel ratio at 1 — corta trabalho da GPU pela metade em displays com escala
    ;(app as any).setPixelRatio?.(Math.min(window.devicePixelRatio, 1))
  }, [])

  // Pausa renderização quando aba não está visível
  useEffect(() => {
    const handleVisibility = () => {
      const app = appRef.current as any
      if (!app) return
      if (document.hidden) {
        app.stop?.()
      } else {
        app.play?.()
      }
    }
    document.addEventListener('visibilitychange', handleVisibility)
    return () => document.removeEventListener('visibilitychange', handleVisibility)
  }, [])

  return (
    <Suspense fallback={<div className={className} style={{ width: '100%', height: '100%' }} />}>
      <Spline
        scene={scene}
        className={className}
        renderOnDemand
        onLoad={onLoad}
      />
    </Suspense>
  )
}
