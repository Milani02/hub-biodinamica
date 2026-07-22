'use client'

import Image from 'next/image'
import { Contact } from 'lucide-react'
import { employeePortalLink, rhLinks, EMPLOYEE_ACCENT as ACCENT } from '@/lib/hub-links'

export function EmployeeArea() {
  return (
    <div
      className="rounded-xl p-3 flex flex-col gap-3"
      style={{ border: `1px solid ${ACCENT}25`, backgroundColor: `${ACCENT}0a` }}
    >
      {/* Portal do colaborador — item principal, em destaque */}
      <a
        href={employeePortalLink.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3.5 rounded-lg px-3.5 py-3 transition-all duration-150"
        style={{ border: `1px solid ${ACCENT}45`, backgroundColor: `${ACCENT}1a` }}
        onMouseEnter={(e) => {
          ;(e.currentTarget as HTMLElement).style.backgroundColor = `${ACCENT}28`
          ;(e.currentTarget as HTMLElement).style.borderColor = `${ACCENT}70`
        }}
        onMouseLeave={(e) => {
          ;(e.currentTarget as HTMLElement).style.backgroundColor = `${ACCENT}1a`
          ;(e.currentTarget as HTMLElement).style.borderColor = `${ACCENT}45`
        }}
      >
        <div
          className="flex items-center justify-center w-11 h-11 rounded-lg shrink-0"
          style={{ backgroundColor: `${ACCENT}30` }}
        >
          <Contact className="h-5 w-5" style={{ color: ACCENT }} />
        </div>
        <div className="min-w-0">
          <div className="text-[15px] font-semibold leading-tight" style={{ color: '#e5e5e5' }}>
            {employeePortalLink.title}
          </div>
          <div className="text-[12px] truncate leading-tight mt-1" style={{ color: '#8a8a8a' }}>
            {employeePortalLink.description}
          </div>
        </div>
      </a>

      {/* Meu RH — subseção com destaque próprio, cada empresa com sua cor e logo */}
      <div
        className="rounded-lg p-2.5"
        style={{ border: '1px solid #ffffff1a', backgroundColor: '#ffffff08' }}
      >
        <div
          className="text-[12px] font-bold uppercase tracking-wide mb-2 px-0.5"
          style={{ color: '#c4c4c4' }}
        >
          Meu RH
        </div>
        <div className="flex flex-col gap-1.5">
          {rhLinks.map((rh) => (
            <a
              key={rh.entity}
              href={rh.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 rounded-md px-2.5 py-2.5 transition-all duration-150"
              style={{ border: `1px solid ${rh.color}30`, backgroundColor: `${rh.color}12` }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.backgroundColor = `${rh.color}25`
                ;(e.currentTarget as HTMLElement).style.borderColor = `${rh.color}60`
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.backgroundColor = `${rh.color}12`
                ;(e.currentTarget as HTMLElement).style.borderColor = `${rh.color}30`
              }}
            >
              <div
                className="flex items-center justify-center w-9 h-9 rounded-md shrink-0 overflow-hidden"
                style={{ backgroundColor: `${rh.color}20` }}
              >
                <Image src={rh.icon} alt={rh.entity} width={24} height={24} className="w-6 h-6 object-contain" />
              </div>
              <span className="text-[13px] font-medium truncate" style={{ color: '#e5e5e5' }}>
                {rh.entity}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
