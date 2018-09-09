import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import './reset.css';
import App from './components/App/App';
import Store from './Store'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Store>
        <App />
    </Store>,
    document.getElementById('root')
);
registerServiceWorker();