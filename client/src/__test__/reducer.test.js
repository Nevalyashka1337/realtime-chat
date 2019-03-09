import { expect } from 'chai'
import reducer, { initState } from '../reducer'


describe('reducer', () => {
	test('should return initState', () => {
		const state = reducer(undefined, {})
		expect(state).equal(initState)
	})

	test('should handle online counter', () => {
		const action = { type: 'UPDATE_ONLINE', payload: 2 }
		const state = reducer(initState, action)
		expect(state).to.have.property('online').that.equals(2)
	})

	test('should add new message', () => {
		const action = { type: 'NEW_MESSAGE', payload: 'hello' }
		const state = reducer(initState, action)
		expect(state).to.have.property('message').lengthOf(1)
	})
})