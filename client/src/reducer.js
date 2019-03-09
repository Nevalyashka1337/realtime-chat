
export const initState = {
	online: 0
}

const reducer = ( state = initState, action ) => {
	switch (action.type) {
		case 'UPDATE_ONLINE':
			return { ...state, online: action.payload }
		default:
			return state
	}
}
export default reducer