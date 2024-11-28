import React from "react";

import TaApp from "./toolkitApiTp/TaApp";
import "bootstrap/dist/css/bootstrap.min.css"
import { Provider } from "react-redux";
import { store } from "./toolkitApiTp/Store";

export default function App() {

  return (
    <Provider store={store}>
      <TaApp />
    </Provider>
      
  );
}
