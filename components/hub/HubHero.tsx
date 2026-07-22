import Image from "next/image"

export function HubHero() {
  return (
    <div className="flex flex-col gap-3 animate-fade-up">
      <Image
        src="/logo.png"
        alt="Biodinâmica"
        width={160}
        height={56}
        priority
        className="h-10 w-auto object-contain object-left"
      />
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white leading-tight">
          Biodinâmica
        </h1>
        <p className="mt-1.5 text-sm text-white/40 leading-relaxed max-w-xs">
          Acesse rapidamente nossos principais canais, plataformas e conteúdos.
        </p>
      </div>
      <div className="h-px w-16 bg-white/[0.08]" />
    </div>
  )
}
