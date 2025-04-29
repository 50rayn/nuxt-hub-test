export default defineWebSocketHandler({
  open() {
    console.log('[ws] open')
  },

  message(peer, message) {
    console.log('[ws] message', message)
    if (message.text().includes('ping')) {
      peer.send('pong')
    }
    else {
      peer.send(`Gotten ${message.text()}`)
    }
  },

  close(peer, event) {
    console.log('[ws] close', event)
  },

  error(peer, error) {
    console.log('[ws] error', error)
  }
})
