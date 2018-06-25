const { TOGGLE_FLAG } = require('../actions/toggle.actions');

function toggleReducer(state = false, action){
    return action.type === TOGGLE_FLAG ? !state : state;
}

module.exports = toggleReducer;
