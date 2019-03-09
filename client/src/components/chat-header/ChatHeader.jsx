import React from 'react'
import { connect } from 'react-redux'

function ChatHeader({ online }) {
	return (
		<div className="chat-header">
			<span className="status-dot"></span>
			<p>{online} online</p>
		</div>
	)
}

const mapStateToProps = state => ({
	online: state.online
})

export default connect(
	mapStateToProps
)(ChatHeader)
