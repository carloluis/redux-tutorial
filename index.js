const { createStore, combineReducers, applyMiddlewares } = require('./redux');
const { counterIncrement, counterDecrement, counterReset } = require('./actions/counter.actions');
const { toggleFlag } = require('./actions/toggle.actions');
const counter = require('./reducers/counter.reducer');
const toggle = require('./reducers/toggle.reducer');

const reducer = combineReducers({ counter, toggle });

const loggerMiddleware = ({ getState }) => next => action => {
    console.group(action.type);
    console.info('[current state]:', getState());
    console.info('[action]:', action);
    next(action);
    console.info('[next state]:', getState());
    console.groupEnd(action.type);
};

const store = createStore(reducer, undefined, applyMiddlewares(loggerMiddleware));

console.info('initial state:', store.getState()); // -> 0

const unsubscribe = store.subscribe(state => console.info('check state:', state));

store.dispatch(counterIncrement()); // -> 1
store.dispatch(counterDecrement()); // -> 0
store.dispatch(counterIncrement()); // -> 1
store.dispatch(counterIncrement()); // -> 2
store.dispatch(counterReset()); // -> 0
unsubscribe();
store.dispatch(counterIncrement());
store.dispatch(toggleFlag());

console.info('final state:', store.getState()); // -> { counter: 1, toggle: true }
