import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

if ( process.env.NODE_ENV === 'development' ) serviceWorker.unregister();
else if ( process.env.NODE_ENV === 'production' ) serviceWorker.register()