import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./style.scss";
import "./sd-style.scss";
import FooterBar from "./components/FooterBar";

const footer = ReactDOM.createRoot(
  document.getElementById("footer") as HTMLElement
);
footer.render(
  <React.StrictMode>
    <Provider store={store}>
      <FooterBar />
    </Provider>
  </React.StrictMode>
);
