/* eslint-disable react/prop-types */
import { NavbarItemsData } from "../data/NavbarItemsData";
import { NavLink } from "react-router-dom";
import "./NavbarItems.css";
const NavbarItems = ({ menu }) => {
  return (
    <>
      {NavbarItemsData.map((item) => (
        <NavLink
          key={item.id}
          className={menu ? "menu-links" : "nav-links"}
          to={item.url}>
          {item.name}
        </NavLink>
      ))}
    </>
  );
};
export default NavbarItems;
