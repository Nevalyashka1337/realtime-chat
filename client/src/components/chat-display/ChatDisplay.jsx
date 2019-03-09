import React from 'react'
import { connect } from 'react-redux'

function ChatDisplay({ messageList }) {
	return (
		<div className="chat-display">
			{messageList.map(({ text, id }) => {
				return (
					<React.Fragment key={id}>
						<p>{text}</p><br/>
					</React.Fragment>
				)
			})}
		</div>
	)
}

const mapStateToProps = state => ({
	messageList: state.message
})

export default connect(
	mapStateToProps
)(ChatDisplay)
