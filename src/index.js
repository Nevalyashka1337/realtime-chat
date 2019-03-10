import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import * as serviceWorker from './serviceWorker'
import store from './store'
import { Provider } from 'react-redux'

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
, document.getElementById('root'))

if ( process.env.NODE_ENV === 'development' ) serviceWorker.unregister();
else if ( process.env.NODE_ENV === 'production' ) serviceWorker.register()
