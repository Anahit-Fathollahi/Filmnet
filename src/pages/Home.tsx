import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();
  return (
    <div className="home-cmponent">
      <h1>{t("welcome home")}</h1>
    </div>
  );
}

export default Home;
