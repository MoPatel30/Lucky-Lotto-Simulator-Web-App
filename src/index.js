import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App, RandomNumber} from './App'
import * as serviceWorker from './serviceWorker';
//import {PlayerOne, PlayerTwo, Players, PlayersToo} from './players';



ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<RandomNumber />, document.getElementById('random-num'));

//ReactDOM.render(<Players />, document.getElementById('first-player'));

//ReactDOM.render(<PlayersToo />, document.getElementById('second-player'));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
