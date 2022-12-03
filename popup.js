// Copyright (C) 2022 Adam K Dean <adamkdean@googlemail.com>
// Use of this source code is governed by the GPL-3.0
// license that can be found in the LICENSE file.

// Get a reference to the background page
const backgroundPage = chrome.extension.getBackgroundPage()

// Log a message to the console using the background page's `console.log()` method
console.log(chrome.extension)

// const logContainer = document.querySelector('#log-container')
// const form = document.querySelector('form')
// const statusContainer = document.querySelector('#status')
// const statusText = document.querySelector('#status-text')
// const username = document.querySelector('#username')
// const connectButton = document.querySelector('#connect-button')
// const disconnectButton = document.querySelector('#disconnect-button')

// // Send a message to the background script
// chrome.runtime.sendMessage('Hello from the popup.html')

// // Receive a message from the background script
// chrome.runtime.onMessage.addListener((message) => {
//   console.log(`Received message: ${message}`)
// })


// let socket = null

// function log(message) {
//   const p = document.createElement('p')
//   p.textContent = message
//   logContainer.appendChild(p)
//   logContainer.scrollTop = logContainer.scrollHeight
//   statusText.innerHTML = message
// }

// username.addEventListener('input', () => {
//   connectButton.disabled = !username.value
// })

// disconnectButton.addEventListener('click', () => {
//   if (socket) socket.close()
//   log('Disconnected')
// })

// form.addEventListener('submit', (event) => {
//   event.preventDefault()
//   if (!username.value) return console.error('error: username required')

//   socket = new WebSocket(`ws://localhost:8080?username=${username.value}`)
//   log(`Connecting with username ${username.value}...`)

//   socket.onopen = () => {
//     log(`Connected as ${username.value}`)
//     form.style.display = 'none'
//     disconnectButton.style.display = 'block'
//   }

//   socket.onerror = (error) => {
//     console.error('WebSocket error:', error)
//     log('Error connecting')
//   }

//   socket.onclose = () => {
//     log('Disconnected')
//     form.style.display = 'flex'
//     disconnectButton.style.display = 'none'
//   }

//   socket.addEventListener('message', (message) => {
//     log(`received message: ${message.data}`)

//     if (message.data === 'SESSION_PENDING') {
//       log(`Connected as ${username.value} (waiting for other user)`)
//     }

//     if (message.data === 'SERVER_BUSY') {
//       log('Server busy')
//       socket.close()
//     }

//     if (message.data === 'USERNAME_BUSY') {
//       log('Username in use')
//       socket.close()
//     }

//     if (message.data === 'SESSION_ACTIVE') {
//       log('Session active')
//     }

//     if (message.data === 'SESSION_TERMINATED') {
//       log('Session terminated')
//       form.style.display = 'flex'
//       disconnectButton.style.display = 'none'
//     }
//   })
// })

// const observer = new MutationObserver((mutations) => {
//   mutations.forEach((mutation) => {
//     mutation.addedNodes.forEach((node) => {
//       if (node.classList && node.classList.contains('ConversationItem__Message-sc-18srrdc-1 ixLEsD')) {
//         console.log('new message detected')
//       }
//     })
//   })
// })

// observer.observe(document, { childList: true })
