# redux-tutorial

> Simple Redux implementation for learning purposes

[![GitHub license](https://img.shields.io/github/license/carloluis/redux-tutorial.svg)](https://github.com/carloluis/redux-tutorial/blob/master/LICENSE)

## Start

Clone this [Repo](https://github.com/carloluis/redux-tutorial.git) and use [Node.js](https://nodejs.org/) to execute:

```bash
git clone https://github.com/carloluis/redux-tutorial.git
cd redux-tutorial
node index.js
```

## Features

- [x] `createStore`
- [x] `combineReducers`
- [x] `middlewares`

<details>
<summary>Example</summary>

```js
const { createStore, combineReducers } = require('./redux');

const reducer = combineReducers({ reducer1, reducer2, /*...*/ reducerN });
const store = createStore(reducer, INITIAL_STATE);

const unsubscribe = store.subscribe(state => { /* */ });

// unsubscribe();
```

</details>

## More

Check the Redux official [docs](https://redux.js.org/).

## License

MIT © [Carloluis](https://github.com/carloluis)
