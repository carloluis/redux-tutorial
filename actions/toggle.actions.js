const TOGGLE_FLAG = 'TOGGLE_FLAG';
const toggleFlag = (payload = 1) => ({
    type: TOGGLE_FLAG
});

module.exports = {
    TOGGLE_FLAG,
    toggleFlag
};
