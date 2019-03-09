
export const initState = {
	online: 0,
	message: []
}

const reducer = ( state = initState, action ) => {
	switch (action.type) {
		case 'UPDATE_ONLINE':
			return { ...state, online: action.payload }
		case 'NEW_MESSAGE':
			return { ...state, message: [ ...state.message, action.payload ] }
		default:
			return state
	}
}
export default reducer