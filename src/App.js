import { Route, Routes } from "react-router-dom";

import styles from "./styles/App.module.scss";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Admin from "./layout";

import Login from "./components/login";
import ProtectedRoute from "./components/Shared/ProtectedRoute.jsx";

import { IntlProvider, useIntl } from "react-intl";
import ar from "@/languages/ar.json";
import en from "@/languages/en.json";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const languages = {
  ar,
  en,
};

function App() {
  const { locale } = useSelector((state) => state.localeReducer);
  const messages = languages[locale];

  useEffect(() => {
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);
  return (
    <IntlProvider messages={messages} defaultLocale="ar" locale={locale}>
      <div className={styles.app}>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
        </Routes>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </IntlProvider>
  );
}

export default App;
