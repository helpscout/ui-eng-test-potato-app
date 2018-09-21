import React from 'react';
import ReactDOM from 'react-dom';
import 'spectre.css/dist/spectre-icons.css';
import 'spectre.css/dist/spectre.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
