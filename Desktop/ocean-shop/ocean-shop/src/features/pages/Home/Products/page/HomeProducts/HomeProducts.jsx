import HomeContainer from "../../../../../../components/Home/HomeContainer";
import HomeProduct from "./HomeProduct/HomeProduct";

function HomeProducts() {
  return (
    <HomeContainer>
      <HomeProduct
        id="newArrival"
        type="New_Arrival"
        typeName="newArrival"
        title="New Arrival"
        link="/all-products"
        linkName="See All"
        sx={{
          right: "80px",
        }}
        sxBox={{
          mb: 4,
        }}
      />
      <HomeProduct
        id="topRated"
        type="Top_Rated"
        typeName="topRated"
        title="Top Rated"
        link="/all-products"
        linkName="See All"
        sx={{
          right: "80px",
        }}
        sxBox={{
          mb: 4,
        }}
      />
      <HomeProduct
        id="offers"
        type="Offers"
        typeName="offers"
        title="Special Offers"
        link="/all-products"
        linkName="See All"
        sx={{
          right: "80px",
        }}
        sxBox={{
          mb: 4,
        }}
      />
    </HomeContainer>
  );
}

export default HomeProducts;
