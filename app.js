import React from "react";
import ReactDOM from "react-dom";
import rootReducer from "./reducers";
import { Provider } from "react-redux";
import { createStore } from "redux";
import PopUp from "./components/pop_up";
import "./css/styles.scss";

const store = createStore(rootReducer);

class CapybaraExtension extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PopUp />
      </Provider>
    );
  }
}

window.addEventListener("load", () => {
  app();
});

const app = () => {
  if (!document.getElementById("capybara-extension-container")) {
    let container = document.createElement("div");
    container.setAttribute("id", "capybara-extension-container");

    document.body.appendChild(container);
  }
  ReactDOM.render(
    <CapybaraExtension />,
    document.getElementById("capybara-extension-container")
  );
};
