import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Drizzle, generateStore } from '@drizzle/store';
import MetaCoin from './contracts/MetaCoin.json';

const options = { contracts: [MetaCoin] };
const drizzleStore = generateStore(options);
const drizzle = new Drizzle(options, drizzleStore);

ReactDOM.render(<App drizzle={drizzle} />, document.getElementById('root'));
