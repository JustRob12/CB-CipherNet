import React from 'react';
import ReactDOM from 'react-dom';
import ComingSoon from '../src/ComingSoon';
import * as serviceWorker from '..App'; // Adjust if using service workers

ReactDOM.render(
    <React.StrictMode>
        <ComingSoon />
    </React.StrictMode>,
    document.getElementById('root')
);

// Register the service worker (if needed)
serviceWorker.register();
