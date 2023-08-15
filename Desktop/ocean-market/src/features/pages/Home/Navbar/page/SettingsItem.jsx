import { Link } from "react-router-dom";
import { SettingsItemData } from "../data/SettingsItemData";
import { useTranslation } from "react-i18next";
function SettingsItem() {
  const {t}=useTranslation()
  return (
    <>
      {SettingsItemData.map((item) => (
        <Link
          to={item.url}
          key={item.id}
          style={{
            textDecoration: "none",
            color: "black",
            fontSize: "14px",
          }}>
          {t(`navbar.links.${item.name}`)}
        </Link>
      ))}
    </>
  );
}

export default SettingsItem;
