// VERY SIMPLE Redux implementation

function createStore(reducer, initialState, enhancer) {
    if (typeof enhancer === 'function') {
        return enhancer(createStore)(reducer, initialState);
    }

    let state = reducer(initialState, { type: '$REDUX_INIT' });
    let listeners = [];

    return {
        getState() {
            return state;
        },
        dispatch(action) {
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

function applyMiddlewares(...middlewares) {
    return createStore => (...args) => {
        const store = createStore(...args);
        let dispatch = () => {};

        const middlewareApi = {
            getState: store.getState,
            dispatch: (...args) => dispatch(...args)
        };

        const chain = middlewares.map(middleware => middleware(middlewareApi));
        dispatch = chain.reduce((a, b) => (...args) => a(b(...args)))(store.dispatch);

        return {
            ...store,
            dispatch
        };
    };
}

module.exports = {
    applyMiddlewares,
    combineReducers,
    createStore
};
