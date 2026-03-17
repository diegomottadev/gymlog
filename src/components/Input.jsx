import { C } from '../lib/constants'

export default function Input({ value, onChange, placeholder, type = 'text', step, min, style = {} }) {
  return (
    <input type={type} value={value} onChange={onChange} placeholder={placeholder} step={step} min={min}
      style={{
        width: '100%', background: C.hi, border: `1px solid ${C.border}`, borderRadius: 12,
        padding: '12px 16px', color: C.text, fontSize: 14, outline: 'none', marginBottom: 10, ...style
      }} />
  )
}
