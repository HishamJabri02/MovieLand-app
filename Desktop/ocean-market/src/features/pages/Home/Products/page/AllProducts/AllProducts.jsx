import { useState } from "react";
import Navbar from "../../../Navbar/Navbar";
import AllProductsHeader from "./AllProductsHeader";
import ProductsList from "./ProductsList";
function AllProducts() {
  const [age, setAge] = useState("New_Arrival");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <Navbar />
      <AllProductsHeader age={age} handleChange={handleChange} />
      <ProductsList type={age} />
    </>
  );
}
export default AllProducts;
