// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { Provider } from "react-redux";
import { store } from "./store/index.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import en from "./lang/en.json";
import ar from "./lang/ar.json";
import { IntlProvider } from "react-intl";
const locale = localStorage.getItem("locale") || "ar";

const messages = {
  en,
  ar,
};
const router = createBrowserRouter(
  [
    {
      path: "/*",
      element: <App />,
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
    },
  }
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <IntlProvider
      locale={locale}
      messages={messages[locale]}
      defaultLocale="ar"
    >
      <RouterProvider router={router} />
    </IntlProvider>
  </Provider>
);
