import CategoriesHome from "./Home/Categories/page/CategoriesHome/CategoriesHome";
import BrandsHome from "./Home/Brand/page/BrandsHome/BrandsHome";
import Navbar from "./Home/Navbar/Navbar";
import HomeProducts from "./Home/Products/page/HomeProducts/HomeProducts";
import useGuest from "./useGuest";
import SliderCarousel from "./Home/Slider/page/SliderCarousel/SliderCarousel";
import Footer from "./Home/Footer/Page/Footer";
function Home() {
  useGuest();
  return (
    <>
      <Navbar />
      <SliderCarousel />
      <CategoriesHome />
      <BrandsHome />
      <HomeProducts />
      <Footer />
    </>
  );
}
export default Home;
