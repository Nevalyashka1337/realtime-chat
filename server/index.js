const WebSocket = require('ws')

const PORT = 1337

const wss = new WebSocket.Server({ port: PORT })

const send = (type, msg) => {
	wss.clients.forEach(client => {
		if ( client.readyState === WebSocket.OPEN ) {
			client.send(JSON.stringify({
				type: type,
				payload: msg
			}))
		}
	})
}

wss.on('connection', ws => {
	
	send('UPDATE_ONLINE', wss.clients.size)
	
	ws.on('message', msg => {
		if ( typeof msg === 'string' && msg.length > 0 && msg.length <= 100 ){
			send('NEW_MESSAGE', {
				id: "" + new Date().getTime() + new Date().getMilliseconds(),
				text: msg
			})
		}
	})

	ws.on('close', () => send('UPDATE_ONLINE', wss.clients.size))
})

wss.on('listening', () => console.log(`wss is running on port: ${PORT}`))