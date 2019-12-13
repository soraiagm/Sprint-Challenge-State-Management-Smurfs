import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from 'redux';
import { reducer } from '../src/utils/reducer.js';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import "./index.css";
import App from "./components/App";

// const store = createStore(
//     reducer,
//     applyMiddleware(logger, thunk)
//     );

// ReactDOM.render(
// <Provider store={store}>
//     <App />
// </Provider>,
// document.getElementById("root"));

ReactDOM.render(<App />, document.getElementById("root"));
