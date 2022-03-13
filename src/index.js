import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import pokemonReducer from "./reducers/pokemonReducer";
import { logActions, reportError } from "./middlewares";
import thunk from "redux-thunk";

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhacers = composeAlt(
  applyMiddleware(thunk, logActions, reportError)
);

const store = createStore(pokemonReducer, composeEnhacers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
