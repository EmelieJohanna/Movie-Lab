import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import App from "./App.jsx";
import { HelmetProvider } from "react-helmet-async";
import ReactGA from "react-ga4";
import TagManager from "react-gtm-module";
import "./index.css";

const GA_MEASUREMENT_ID = "G-GV9B2BV4X0";

const tagManagerArgs = {
  gtmId: "GTM-WXCJLL7G",
};
ReactGA.initialize(GA_MEASUREMENT_ID);
TagManager.initialize(tagManagerArgs);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </Provider>
  </StrictMode>
);
