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
    const { setStatus } = this.props
    const ws = new WebSocket(`${URL}`)
    ws.onopen = ({ currentTarget }) => setStatus(currentTarget.readyState)
    ws.onclose = ({ currentTarget }) => setStatus(currentTarget.readyState)
  }

  render() {
    const { status } = this.props
    return (
      <>
        { status === 0 && <Preloader/> }
        { status === 1 && <Chat/> }
        { ( status === 2 || status === 3 ) && <Error/> }
      </>
    );
  }
}

const mapStateToProps = state => ({
  online: state.online,
  message: state.message,
  status: state.status
})

const mapDispatchToProps = dispatch => ({
  setStatus: statusCode => {
    dispatch({ type: 'UPDATE_STATUS', payload: statusCode })
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)