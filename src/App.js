import React from "react";
import { Provider } from "react-redux";
import Routes from "./router";
import { store, history } from "./redux/store";
import "./App.css";
import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes history={history} />
      </Provider>
    </div>
  );
}

export default App;
