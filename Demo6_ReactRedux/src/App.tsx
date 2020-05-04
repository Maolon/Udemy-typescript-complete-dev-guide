import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { MainPage } from "./components/Main";
import { reducers } from "./reducers";

const store = createStore(reducers, applyMiddleware(thunk));

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <MainPage />
        </Provider>
      </div>
    );
  }
}

export default App;
