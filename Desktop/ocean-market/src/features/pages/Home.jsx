import CategoriesHome from "./Home/Categories/page/CategoriesHome/CategoriesHome";
import BrandsHome from "./Home/Brand/page/BrandsHome/BrandsHome";
import Navbar from "./Home/Navbar/Navbar";
import HomeProducts from "./Home/Products/page/HomeProducts/HomeProducts";
import useGuest from "./useGuest";
import SliderCarousel from "./Home/Slider/page/SliderCarousel/SliderCarousel";
import Footer from "./Home/Footer/Page/Footer";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
function Home() {
  useGuest();
  return (
    <>
      <Navbar />
      <Link to="https://wa.me/963933323900">
      <IconButton>
        <WhatsAppIcon sx={{color:"#fff" ,position:"fixed" ,right:"30px",fontSize:{xs:"40px",md:"40px",lg:"50px"},bottom:"30px",zIndex:"5",backgroundColor:"green",borderRadius:"100%",p:1}}/>
      </IconButton>
      </Link>
      <SliderCarousel />
      <CategoriesHome />
      <BrandsHome />
      <HomeProducts />
      <Footer />
    </>
  );
}
export default Home;
