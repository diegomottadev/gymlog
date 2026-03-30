import { useState, useRef } from 'react'
import { C } from '../lib/constants'

export default function ExName({ name, style = {} }) {
  const [show, setShow] = useState(false)
  const timer = useRef(null)

  const toggle = (e) => {
    e.stopPropagation()
    setShow(true)
    if (timer.current) clearTimeout(timer.current)
    timer.current = setTimeout(() => setShow(false), 2000)
  }

  const handleKey = (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(e) }
  }

  return (
    <span role="button" tabIndex={0} onClick={toggle} onKeyDown={handleKey} aria-label={name}
      style={{ flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', position: 'relative', cursor: 'default', ...style }}>
      {name}
      {show && (
        <span role="tooltip" style={{
          position: 'absolute', left: 0, bottom: '100%', marginBottom: 4,
          background: C.card, border: `1px solid ${C.border}`, borderRadius: 8,
          padding: '6px 10px', fontSize: 12, color: C.text, whiteSpace: 'normal',
          zIndex: 10, boxShadow: '0 4px 12px rgba(0,0,0,.5)', maxWidth: '70vw',
          lineHeight: 1.4
        }}>{name}</span>
      )}
    </span>
  )
}
