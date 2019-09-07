import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from './context';

ReactDOM.render(
    <Provider>
        <Router>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
