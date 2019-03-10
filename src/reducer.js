
export const initState = {
	online: 0,
	message: [],
	status: 0
}

const reducer = ( state = initState, action ) => {
	switch (action.type) {
		case 'UPDATE_ONLINE':
			return { ...state, online: action.payload }
		case 'NEW_MESSAGE':
			return { ...state, message: [ ...state.message, action.payload ] }
		case 'UPDATE_STATUS':
			return { ...state, status: action.payload }
		default:
			return state
	}
}
export default reducer