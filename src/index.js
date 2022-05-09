import React from 'react';
import ReactDOM from 'react-dom';
import styles from './scss/style.scss';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
// ReactDOM.render(<App />, document.getElementById('root'));
