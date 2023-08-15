/* eslint-disable react/prop-types */
import { NavbarItemsData } from "../data/NavbarItemsData";
import { NavLink } from "react-router-dom";
import "./NavbarItems.css";
import { useTranslation } from "react-i18next";
const NavbarItems = ({ menu }) => {
  const {t}=useTranslation()
  return (
    <>
      {NavbarItemsData.map((item) => (
        <NavLink
          key={item.id}
          className={menu ? "menu-links" : "nav-links"}
          to={item.url}>
          {t(`navbar.links.${item.name}`)}
        </NavLink>
      ))}
    </>
  );
};
export default NavbarItems;
