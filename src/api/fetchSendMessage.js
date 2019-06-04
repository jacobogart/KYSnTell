export const fetchSendMessage = (message) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(message)
  }
  return fetch('/api/messages', options)
    .then(response => {
      if (!response.ok) {
        throw Error('Failed to send message')
      } else {
        return response.json();
      }
    })
}
  