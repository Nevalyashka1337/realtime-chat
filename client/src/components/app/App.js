import React, { Component } from 'react'
import { connect } from 'react-redux'
import Preloader from '../preloader'
import Error from '../error'
import Chat from '../chat'
import './App.css'

let URL = ''

if ( process.env.NODE_ENV === 'development' ) URL = 'ws://localhost:1337/'
else if ( process.env.NODE_ENV === 'production' ) URL = ''


class App extends Component {
  
  componentDidMount() {
    const { setStatus, setOnline, addMessage } = this.props
    this.ws = new WebSocket(`${URL}`)
    this.ws.onopen = ({ currentTarget }) => setStatus(currentTarget.readyState)
    this.ws.onclose = ({ currentTarget }) => setStatus(currentTarget.readyState)
    this.ws.onmessage = ({ data }) => {
      const res = JSON.parse(data)
      if ( res.type === 'UPDATE_ONLINE' ) {
        setOnline(res.payload)
      } else if ( res.type === 'NEW_MESSAGE' ) {
        addMessage(res.payload)
      }
    }
  }

  sendMessage = msg => {
    this.ws.send(msg)
  }

  render() {
    const { status } = this.props
    return (
      <>
        { status === 0 && <Preloader/> }
        { status === 1 && <Chat onSendMsg={this.sendMessage}/> }
        { ( status === 2 || status === 3 ) && <Error/> }
      </>
    );
  }
}

const mapStateToProps = state => ({
  status: state.status
})

const mapDispatchToProps = dispatch => ({
  setStatus: statusCode => {
    dispatch({ type: 'UPDATE_STATUS', payload: statusCode })
  },
  setOnline: online => {
    dispatch({ type: 'UPDATE_ONLINE', payload: online })
  },
  addMessage: msg => {
    dispatch({ type: 'NEW_MESSAGE', payload: msg })
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)