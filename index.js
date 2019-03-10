const WebSocket = require('ws')
const express = require('express')
const app = express()

app.use(express.static('./client/build'))
app.get('/', (req, res) => {
	res.sendFile('./client/build/index.html')
})

const WS_PORT = 1337
const EXPRESS_PORT = process.env.PORT || 80

const wss = new WebSocket.Server({ port: WS_PORT })

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

wss.on('listening', () => console.log(`wss is running on port: ${WS_PORT}`))
app.listen(EXPRESS_PORT, () => console.log(`server is running on port: ${EXPRESS_PORT}`))