import { useState, useEffect } from 'react';
import { A, C } from '../lib/constants';

// TEST MODE: cambiar a true para probar, y elegir el daysLeft abajo
const TEST_MODE = false;
const TEST_DAYS_LEFT = 0; // 2 = warning, 1 = urgent, 0 = expired

export default function SubscriptionModal({ subscription, role, email, exempt, currentView, onRenew, onLogout }) {
  const [dismissed, setDismissed] = useState(false);

  // Resetear dismissed cuando sale de la pagina de pago
  useEffect(() => {
    if (currentView !== 'premium' && dismissed) setDismissed(false);
  }, [currentView]);

  if (dismissed) return null;

  if (!TEST_MODE) {
    if (role === 'admin') return null;
    if (exempt) return null;
    if (!subscription || subscription.status === 'none') return null;
  }

  let daysLeft;
  if (TEST_MODE) {
    daysLeft = TEST_DAYS_LEFT;
  } else {
    let endDate;
    if (subscription.status === 'trial') {
      endDate = subscription.trialEnd;
    } else if (subscription.status === 'active') {
      endDate = subscription.currentPeriodEnd;
    } else if (subscription.status === 'expired') {
      endDate = subscription.currentPeriodEnd || subscription.trialEnd;
    } else {
      return null;
    }

    if (!endDate) return null;

    const now = new Date();
    const end = endDate instanceof Date ? endDate : new Date(endDate?.seconds ? endDate.seconds * 1000 : endDate);
    daysLeft = Math.ceil((end - now) / (1000 * 60 * 60 * 24));
  }

  let mode = null;
  if (daysLeft <= 0) mode = 'expired';
  else if (daysLeft <= 1) mode = 'urgent';
  else if (daysLeft <= 3) mode = 'warning';

  if (!mode) return null;
  if (dismissed) return null;

  const isExpired = mode === 'expired';

  const config = {
    warning: {
      icon: '\u26a0\ufe0f',
      title: 'Tu suscripción vence pronto',
      message: `Te quedan ${daysLeft} día${daysLeft !== 1 ? 's' : ''}. Renová a tiempo para no perder el acceso.`,
      borderColor: `${A}88`,
      renewLabel: 'Renovar ahora',
    },
    urgent: {
      icon: '\ud83d\udd34',
      title: '¡Último día de suscripción!',
      message: 'Tu acceso se desactiva hoy. Renová ahora para seguir entrenando sin interrupciones.',
      borderColor: A,
      renewLabel: 'Renovar ahora',
    },
    expired: {
      icon: '\ud83d\udeab',
      title: 'Suscripción vencida',
      message: 'Tu suscripción expiró. Para seguir usando Gym Tracker, renovála desde acá.',
      borderColor: C.danger,
      renewLabel: 'Renovar suscripción',
    },
  };

  const c = config[mode];

  const overlay = {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0,0,0,.85)',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const box = {
    background: C.card,
    borderRadius: 20,
    padding: '32px 24px',
    maxWidth: 400,
    width: '100%',
    border: `1px solid ${c.borderColor}`,
  };

  const iconStyle = { fontSize: 48, textAlign: 'center', marginBottom: 12 };
  const titleStyle = { fontSize: 20, fontWeight: 800, marginBottom: 8, textAlign: 'center', color: '#fff' };
  const messageStyle = { fontSize: 14, color: '#ccc', textAlign: 'center', marginBottom: 24, lineHeight: 1.5 };

  const renewBtn = {
    width: '100%',
    padding: 14,
    borderRadius: 14,
    background: A,
    color: '#111',
    fontWeight: 700,
    fontSize: 15,
    border: 'none',
    cursor: 'pointer',
  };

  const dismissBtn = {
    width: '100%',
    marginTop: 10,
    padding: 12,
    background: 'transparent',
    border: `1px solid ${C.border}`,
    borderRadius: 14,
    color: C.muted,
    fontSize: 13,
    cursor: 'pointer',
  };

  const logoutLink = {
    marginTop: 16,
    textAlign: 'center',
    color: C.muted,
    fontSize: 13,
    cursor: 'pointer',
  };

  return (
    <div style={overlay} onClick={isExpired ? undefined : () => setDismissed(true)}>
      <div style={box} onClick={e => e.stopPropagation()}>
        <div style={iconStyle}>{c.icon}</div>
        <div style={titleStyle}>{c.title}</div>
        <div style={messageStyle}>{c.message}</div>
        <button style={renewBtn} onClick={() => { setDismissed(true); onRenew(); }}>{c.renewLabel}</button>
        {!isExpired && (
          <button style={dismissBtn} onClick={() => setDismissed(true)}>Despues</button>
        )}
        {isExpired && (
          <div style={logoutLink} onClick={onLogout}>Cerrar sesion</div>
        )}
      </div>
    </div>
  );
}
