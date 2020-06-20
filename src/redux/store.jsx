import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../redux/reducers";
import { createBrowserHistory } from "history";
import { crashReporter } from "./crashReporter";

const history = createBrowserHistory({
  getUserConfirmation: (message, callback) => callback(window.confirm(message)),
});

const reducer = combineReducers({
  ...reducers,
});
const store = createStore(
  reducer,
  compose(applyMiddleware(...[thunk, crashReporter]))
);

export { store, history };
