import { expect } from 'chai'
import reducer, { initState } from '../reducer'


describe('reducer', () => {
	test('should return initState', () => {
		const state = reducer(undefined, {})
		expect(state).equal(initState)
	})
})