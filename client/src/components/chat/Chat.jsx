import React from 'react'
import './Chat.css'
import ChatHeader from '../chat-header'
import ChatDisplay from '../chat-display'
import ChatForm from '../chat-form'

function Chat(props) {
	return (
		<div className="chat-wrapper">
			<div className="chat-pager">
				<ChatHeader/>
				<div className="chat-body">
					<ChatDisplay/>
					<ChatForm/>
				</div>
			</div>
		</div>
	)
}

export default Chat
