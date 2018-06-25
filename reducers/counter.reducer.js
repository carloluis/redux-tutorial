const {
    COUNTER_DECREMENT,
    COUNTER_INCREMENT,
    COUNTER_RESET
} = require('../actions/counter.actions');

const DEFAULT_STATE = 0;

function reducer(state = DEFAULT_STATE, action) {
	switch (action.type) {
		case COUNTER_INCREMENT:
			return state + action.payload;
		case COUNTER_DECREMENT:
			return state - action.payload;
		case COUNTER_RESET:
			return DEFAULT_STATE;
		default:
			return state;
	}
}

module.exports = reducer;
