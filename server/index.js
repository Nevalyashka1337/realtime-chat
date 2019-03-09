const WebSocket = require('ws')

const PORT = 1337

const wss = new WebSocket.Server({ port: PORT })

wss.on('connection', ws => {
	console.log('new connection')
})

wss.on('listening', () => console.log(`wss is running on port: ${PORT}`))