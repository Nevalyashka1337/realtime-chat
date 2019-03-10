import React from 'react'
import { connect } from 'react-redux'

class ChatDisplay extends React.Component {
	
	componentDidUpdate() {
		this.scrollToBottom()
	}
	
	scrollToBottom = () => {
		this.messagesEnd.scrollIntoView({ behavior: 'smooth' })
	}

	render() {
		return (
			<div className="chat-display">
				{this.props.messageList.map(({ text, id }) => {
					return (
						<React.Fragment key={id}>
							<p>{text}</p><br/>
						</React.Fragment>
					)
				})}
				<div style={{ float:"left", clear: "both" }}
					ref={el => this.messagesEnd = el }>
        </div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	messageList: state.message
})

export default connect(
	mapStateToProps
)(ChatDisplay)
