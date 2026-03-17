export async function requestNotifPermission() {
  if (!('Notification' in window)) return 'denied'
  return await Notification.requestPermission()
}

export function sendNotification(title, body) {
  if ('Notification' in window && Notification.permission === 'granted') {
    new Notification(title, {
      body,
      icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💪</text></svg>"
    })
  }
}
