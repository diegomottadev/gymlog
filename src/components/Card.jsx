import { C } from '../lib/constants'

export default function Card({ children, style = {}, onClick }) {
  return (
    <div onClick={onClick} style={{
      background: C.card, border: `1px solid ${C.border}`, borderRadius: 16,
      padding: '16px 20px', marginBottom: 12, cursor: onClick ? 'pointer' : 'default', ...style
    }}>
      {children}
    </div>
  )
}
