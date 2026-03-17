import { A, C } from '../lib/constants'

export default function Btn({ onClick, children, variant = 'primary', style = {}, disabled = false }) {
  const v = {
    primary: { background: A, color: '#111' },
    ghost: { background: 'transparent', color: C.muted, border: `1px solid ${C.border}` },
    danger: { background: 'transparent', color: C.danger, border: `1px solid ${C.danger}` }
  }
  return (
    <button onClick={disabled ? undefined : onClick} style={{
      padding: '10px 20px', borderRadius: 10, fontWeight: 700, fontSize: 14,
      cursor: disabled ? 'not-allowed' : 'pointer', border: 'none',
      transition: 'opacity .15s', opacity: disabled ? .4 : 1, ...v[variant], ...style
    }}>
      {children}
    </button>
  )
}
