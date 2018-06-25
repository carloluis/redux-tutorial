const { createStore, combineReducers } = require('./redux');
const { counterIncrement, counterDecrement, counterReset } = require('./actions/counter.actions');
const counter = require('./reducers/counter.reducer');

function toggle(state = false, action){
    if (action.type === 'TOGGLE') {
        return !state;
    }
    return state;
}

const reducer = combineReducers({ counter, toggle });

const store = createStore(undefined, reducer);

console.info('initial state:', store.getState()); // -> 0

const unsubscribe = store.subscribe(state => console.info('state:', state));

store.dispatch(counterIncrement()); // -> 1
store.dispatch(counterDecrement()); // -> 0
store.dispatch(counterIncrement()); // -> 1
store.dispatch(counterIncrement()); // -> 2
store.dispatch(counterReset()); // -> 0
unsubscribe();
store.dispatch(counterIncrement());

console.info('final state:', store.getState()); // -> 1
