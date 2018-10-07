import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import createStore from "./store";
import App from "./App";
import SocketHoc from "./hoc/SocketHoc";

const { store, persistor } = createStore();
const AppWithSocket = SocketHoc(App);
render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppWithSocket />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
