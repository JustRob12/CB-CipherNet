import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Your main component
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.register();
