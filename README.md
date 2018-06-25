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
- [ ] `combineReducers`
- [ ] `middlewares`

<details>
<summary>Example</summary>

```js
const createStore = require('./redux');

const store = createStore(INITIAL_STATE, reducer);

const unsubscribe = store.subscribe(state => {});

// unsubscribe();
```

</details>

## More

Check the Redux official [docs](https://redux.js.org/).

## License

MIT © [Carloluis](https://github.com/carloluis)
