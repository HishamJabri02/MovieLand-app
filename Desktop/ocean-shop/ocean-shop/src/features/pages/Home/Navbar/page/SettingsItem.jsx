import { Link } from "react-router-dom";
import { SettingsItemData } from "../data/SettingsItemData";
function SettingsItem() {
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
          {item.name}
        </Link>
      ))}
    </>
  );
}

export default SettingsItem;
