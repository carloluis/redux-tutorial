const loggerMiddleware = ({ getState }) => next => action => {
    console.group(action.type);
    console.info('[current state]:', getState());
    console.info('[action]:', action);
    next(action);
    console.info('[next state]:', getState());
    console.groupEnd(action.type);
};

module.exports = loggerMiddleware;
