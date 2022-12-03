// Copyright (C) 2022 Adam K Dean <adamkdean@googlemail.com>
// Use of this source code is governed by the GPL-3.0
// license that can be found in the LICENSE file.

const form = document.querySelector('form')
const statusContainer = document.querySelector('#status')
const statusText = document.querySelector('#status-text')
const username = document.querySelector('#username')
const connectButton = document.querySelector('#connect-button')
const disconnectButton = document.querySelector('#disconnect-button')

let socket = null

username.addEventListener('input', () => {
  connectButton.disabled = !username.value
})

disconnectButton.addEventListener('click', () => {
  if (socket) socket.close()
  statusText.innerHTML = 'Disconnected'
})

form.addEventListener('submit', (event) => {
  event.preventDefault()
  if (!username.value) return console.error('error: username required')

  socket = new WebSocket(`ws://localhost:8080?username=${username.value}`)
  statusText.innerHTML = `Connecting with username ${username.value}...`
  console.log(`Connecting with username ${username.value}...`)

  socket.onopen = () => {
    statusText.innerHTML = `Connected as ${username.value}`
    form.style.display = 'none'
    disconnectButton.style.display = 'block'
  }

  socket.onerror = (error) => {
    console.error('WebSocket error:', error)
    statusText.innerHTML = 'Error connecting'
  }

  socket.onclose = () => {
    statusText.innerHTML = 'Disconnected'
    form.style.display = 'flex'
    disconnectButton.style.display = 'none'
  }

  socket.addEventListener('message', (message) => {
    console.log('received message:', message.data)

    if (message.data === 'SESSION_PENDING') {
      statusText.innerHTML = `Connected as ${username.value} (waiting for other user)`
    }

    if (message.data === 'SESSION_ACTIVE') {
      statusText.innerHTML = 'Session active'
    }

    if (message.data === 'SESSION_TERMINATED') {
      statusText.innerHTML = 'Session terminated'
      form.style.display = 'flex'
      disconnectButton.style.display = 'none'
    }
  })
})
