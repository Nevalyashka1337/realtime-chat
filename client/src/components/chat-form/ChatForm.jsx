import React from 'react'

class ChatForm extends React.Component {
	
	state = {
		msg: ''
	}

	handleMsg = ({ target }) => {
		this.setState({
			msg: target.value
		})
	}

	handleSubmit = e => {
		e.preventDefault()
		console.log(this.state)
		this.setState({
			msg: ''
		})
	}

	render() {
		return (
			<div className="chat-form">
				<form onSubmit={this.handleSubmit}>
					<input type="input" placeholder="write a message..."
					onChange={this.handleMsg} value={this.state.msg}
					/>
				</form>
			</div>
		)
	}
}

export default ChatForm
