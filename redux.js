// VERY SIMPLE Redux implementation

function redux(initialState, reducer) {
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
            return () => {
                listeners = listeners.filter(l => l !== listener);
            };
        }
    };
}

module.exports = redux;
