import { useTranslation } from "react-i18next";
import HomeContainer from "../../../../../../components/Home/HomeContainer";
import HomeProduct from "./HomeProduct/HomeProduct";

function HomeProducts() {
  const {i18n,t } = useTranslation();
  const language = i18n.language;
  return (
    <HomeContainer>
      <HomeProduct
        id="newArrival"
        type="New_Arrival"
        typeName="newArrival"
        title={t("home.titles.new")}
        link="/all-products"
        linkName={t("home.links.all")}
        sx={{
          left: language === "ar" ? "80px" : "unset",
          right: language === "ar" ? "unset" : "80px",
        }}
        sxBox={{
          mb: 4,
        }}
      />
      <HomeProduct
        id="topRated"
        type="Top_Rated"
        typeName="topRated"
        title={t("home.titles.top")}
        link="/all-products"
        linkName={t("home.links.all")}
        sx={{
          left: language === "ar" ? "80px" : "unset",
          right: language === "ar" ? "unset" : "80px",
        }}
        sxBox={{
          mb: 4,
        }}
      />
      <HomeProduct
        id="offers"
        type="Offers"
        typeName="offers"
        title={t("home.titles.offers")}
        link="/all-products"
        linkName={t("home.links.all")}
        sx={{
          left: language === "ar" ? "80px" : "unset",
          right: language === "ar" ? "unset" : "80px",
        }}
        sxBox={{
          mb: 4,
        }}
      />
    </HomeContainer>
  );
}

export default HomeProducts;
