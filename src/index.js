import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from './context';

ReactDOM.render(
    <Provider>
        <Router>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
