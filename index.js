const createStore = require('./redux');

// actions

const increment = { type: 'INCREMENT', payload: 1 };
const decrement = { type: 'DECREMENT', payload: 1 };
const reset = { type: 'RESET' };

// reducer

const DEFAULT_STATE = 0;

function reducer(state = DEFAULT_STATE, action) {
	switch (action.type) {
		case 'INCREMENT':
			return state + action.payload;
		case 'DECREMENT':
			return state - action.payload;
		case 'RESET':
			return DEFAULT_STATE;
		default:
			return state;
	}
}

// creating the redux store

const store = createStore(undefined, reducer);

const unsubscribe = store.subscribe(state => console.info('state:', state));

// log example

console.info('initial state:', store.getState()); // -> 0

store.dispatch(increment); // -> 1
store.dispatch(decrement); // -> 0
store.dispatch(increment); // -> 1
store.dispatch(increment); // -> 2
store.dispatch(reset); // -> 0
unsubscribe();
store.dispatch(increment);

console.info('final state:', store.getState()); // -> 1
