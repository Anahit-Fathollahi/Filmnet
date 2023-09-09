import React from "react";
import { useTranslation } from "react-i18next";
import notFound from "../../../public/images/logo/notFound.jpg";
import "./index.scss";

function NotFoundPage() {
  const { t } = useTranslation();
  return (
    <div className="notFound">
      <img loading="lazy" src={notFound} />
      <h1>{t("notFound")}</h1>
    </div>
  );
}

export default NotFoundPage;
