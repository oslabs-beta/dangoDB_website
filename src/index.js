import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { createRoot } from 'react-dom/client';
import { render } from 'react-dom';
//did you mean to import main.scss?
import styles from './style/styles.scss';
// import '../emilia/styles/_main.scss';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
// ReactDOM.render(<App />, document.getElementById('root'));
