import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import pokemonReducer from "./reducers/pokemonReducer";
import { logActions } from "./middlewares";

const composeEnhacers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logActions)
);

const store = createStore(pokemonReducer, composeEnhacers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
