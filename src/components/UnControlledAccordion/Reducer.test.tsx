import {reducer, StateType, TOGGLE_CONSTANT} from './Reducer';

test('Reducer should change collapsed value to true', () => {
    // data
    const state: StateType = {
        collapsed: false
    }

    // action
    const newState =  reducer(state, {type:TOGGLE_CONSTANT})

    // expectation
    expect(newState.collapsed).toBe(true)
})

test('Reducer should change collapsed value to false', () => {
    // data
    const state: StateType = {
        collapsed: true
    }

    // action
    const newState =  reducer(state, {type:TOGGLE_CONSTANT})

    // expectation
    expect(newState.collapsed).toBe(false)
})

test('Reducer should return state if type is not defined', () => {
    // data
    const state: StateType = {
        collapsed: true
    }

    // action
    const newState =  reducer(state, {type:'undefined'})

    // expectation
    expect(newState.collapsed).toBe(true);
    expect(newState).toEqual(state);
})