import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { createRoot } from 'react-dom/client';
import { render } from 'react-dom';
import styles from './style/styles.scss';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
