import { ChevronLeft } from 'lucide-react'
import { C } from '../lib/constants'

export default function BackHeader({ onBack, title }) {
  return (
    <div style={{ padding: '24px 8px 16px', display: 'flex', alignItems: 'center', gap: 14 }}>
      <button aria-label="Volver" onClick={onBack} style={{
        background: C.card, border: `1px solid ${C.border}`, borderRadius: 10,
        width: 36, height: 36, color: C.muted, cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}><ChevronLeft size={22} color="#fff" strokeWidth={2.5} aria-hidden="true" /></button>
      <div style={{ fontSize: 20, fontWeight: 800 }}>{title}</div>
    </div>
  )
}
