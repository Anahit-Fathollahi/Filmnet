import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
const Home = React.lazy(() => import("./pages/Home"));
const Films = React.lazy(() => import("./pages/Films"));

function App() {
  const { t } = useTranslation();
  return (
    <Router>
      <Suspense fallback={<div>loading</div>}>
        <Navbar />
        <Routes>
          <Route
            index
            element={
              <React.Suspense fallback={<>{t("loading")}</>}>
                <Home />
              </React.Suspense>
            }
          />
          <Route
            path="/contents"
            element={
              <React.Suspense fallback={<>{t("loading")}</>}>
                <Films />
              </React.Suspense>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
