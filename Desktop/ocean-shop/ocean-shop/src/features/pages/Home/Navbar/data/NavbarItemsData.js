const token = localStorage.getItem("token");
export const NavbarItemsData = [
  { id: 1, name: "Home", url: token ? "/" : "/?guest=true" },
  { id: 2, name: "Categories", url: "/all-categories" },
  { id: 3, name: "Product", url: "/all-products" },
  { id: 4, name: "Brand", url: "/all-brands" },
  { id: 5, name: "About Us", url: "/about-us" },
];
