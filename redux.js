// VERY SIMPLE Redux implementation

function createStore(reducer, initialState /*, enhancer*/) {
    let state = reducer(initialState, { type: '$REDUX_INIT' });
    let listeners = [];

    return {
        getState() {
            return state;
        },
        dispatch(action) {
            // TODO: invoke enhancer middlewares before action reach the reducer
            state = reducer(state, action);
            listeners.forEach(listener => listener(state));
        },
        subscribe(listener) {
            listeners.push(listener);
            return () => (listeners = listeners.filter(l => l !== listener));
        }
    };
}

function combineReducers(reducers) {
    const reducerKeys = Object.keys(reducers);
    return (state = {}, action) => {
        const nextState = {};
        for (let i = 0; i < reducerKeys.length; i++) {
            const key = reducerKeys[i];
            const reducer = reducers[key];
            const prevStateForKey = state[key];
            const nextStateForKey = reducer(prevStateForKey, action);
            nextState[key] = nextStateForKey;
        }
        return nextState;
    };
}

module.exports = {
    combineReducers,
    createStore
};
