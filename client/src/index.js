import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.sass';
import App from './components/App/App';
import Store from './Store'
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Store>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Store>,
    document.getElementById('root')
);
registerServiceWorker();