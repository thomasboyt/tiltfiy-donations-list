import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'whatwg-fetch';

require('../styles/entry.scss');

import Store from './Store';
const store = new Store();

import App from './App';

ReactDOM.render(<App store={store} />, document.getElementById('container'));