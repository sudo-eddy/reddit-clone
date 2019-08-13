import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router-dom';

import App from './containers/App';
import Routes from './routes';
import registerServiceWorker from './utils/registerServiceWorker';

ReactDOM.render(
<Routes history={browserHistory} />,
document.getElementById('root')
);
registerServiceWorker();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

