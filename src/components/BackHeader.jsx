import { C } from '../lib/constants'

export default function BackHeader({ onBack, title }) {
  return (
    <div style={{ padding: '24px 20px 16px', display: 'flex', alignItems: 'center', gap: 14 }}>
      <button onClick={onBack} style={{
        background: C.card, border: `1px solid ${C.border}`, borderRadius: 10,
        width: 36, height: 36, color: C.muted, fontSize: 18, cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}>←</button>
      <div style={{ fontSize: 20, fontWeight: 800 }}>{title}</div>
    </div>
  )
}
