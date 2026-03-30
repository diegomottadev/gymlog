import { Component } from 'react'
import { C, A } from '../lib/constants'
import { AlertTriangle, RefreshCw } from 'lucide-react'

export default class ErrorBoundary extends Component {
  state = { hasError: false, error: null }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, info) {
    console.error('[gymlog] ErrorBoundary:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          minHeight: '100vh', padding: 32, background: C.bg, color: C.text, fontFamily: C.font, textAlign: 'center'
        }}>
          <AlertTriangle size={48} color={C.warning} style={{ marginBottom: 16 }} />
          <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>Algo salió mal</div>
          <div style={{ fontSize: 14, color: C.sub, marginBottom: 24, maxWidth: 300 }}>
            Hubo un error inesperado. Intentá recargar la página.
          </div>
          <button onClick={() => window.location.reload()}
            style={{
              display: 'flex', alignItems: 'center', gap: 8,
              background: A, color: '#111', border: 'none', borderRadius: 12,
              padding: '12px 24px', fontSize: 15, fontWeight: 700, cursor: 'pointer'
            }}>
            <RefreshCw size={16} /> Recargar
          </button>
          <div style={{ fontSize: 11, color: C.muted, marginTop: 24, maxWidth: 300, wordBreak: 'break-all' }}>
            {this.state.error?.message}
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
