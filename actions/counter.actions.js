const COUNTER_INCREMENT = 'COUNTER_INCREMENT';
const counterIncrement = (payload = 1) => ({
    type: COUNTER_INCREMENT,
    payload: 1
});

const COUNTER_DECREMENT = 'COUNTER_DECREMENT';
const counterDecrement = (payload = 1) => ({
    type: COUNTER_DECREMENT,
    payload: 1
});

const COUNTER_RESET = 'COUNTER_RESET';
const counterReset = () => ({
    type: COUNTER_RESET
});

module.exports = {
    COUNTER_DECREMENT,
    COUNTER_INCREMENT,
    COUNTER_RESET,
    counterDecrement,
    counterIncrement,
    counterReset
};
