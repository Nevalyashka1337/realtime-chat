import React from 'react'
import './Chat.css'
import ChatHeader from '../chat-header'

function Chat(props) {
	return (
		<div className="chat-wrapper">
			<div className="chat-pager">
				<ChatHeader/>
				<div className="chat-body">
					<div className="chat-display">
						<p>msg-1</p><br/>
						<p>msg-2</p><br/>
						<p>msg-3</p><br/>
						<p>msg-4</p><br/>
						<p>msg-5</p><br/>
					</div>
					<div className="chat-form">
						<form>
							<input type="text" placeholder="write a message..."/>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Chat
