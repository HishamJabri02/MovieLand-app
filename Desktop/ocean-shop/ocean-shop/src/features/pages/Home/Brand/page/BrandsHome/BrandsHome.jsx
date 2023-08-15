import { brandsAsync } from "../../state/brandsAsync";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import GradiantCirculeLoading from "../../../../../../core/GradiantCirculeLoading";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./BrandsHome.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import HeaderFeature from "../../../../../../components/Home/HeaderFeature";
import { uploadImage } from "../../../../../../core/uploadImage";
import { Link } from "react-router-dom";
function BrandsHome() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (brands === "") {
      dispatch(brandsAsync());
    }
  }, []);
  const loading = useSelector((state) => state.brandsReducer.loading);
  const brands = useSelector((state) => state.brandsReducer.brands);
  const brandRef = useRef(null);

  useEffect(() => {
    if (
      brands.length !== 0 &&
      brands.length <= 8 &&
      brandRef.current &&
      window.innerWidth > 1024
    ) {
      brandRef.current.wrapperEl.style.justifyContent = "center";
    }
  }, [brands]);

  const handleSwiper = (swiper) => {
    brandRef.current = swiper;
  };
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex(index + 1);
  };

  const handlePrev = () => {
    setIndex(index - 1);
  };
  return (
    <Box sx={{ position: "relative", px: 4, mb: 2 }}>
      <HeaderFeature
        title="Luxury Brands"
        explain="It Satisfies Your Longing For A Charming And Radiant Look"
        link="/all-brands"
        linkName="See All"
        sx={{
          right: "70px",
        }}
      />
      {loading ? (
        <Box sx={{ height: "200px", position: "relative" }}>
          <GradiantCirculeLoading />
        </Box>
      ) : (
        <div className="mySwiper">
          {brands.length > 0 && (
            <Swiper
              onSwiper={handleSwiper}
              navigation={{
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
              }}
              slidesPerView={1}
              spaceBetween={4}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                420: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 5,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 6,
                },
                1024: {
                  slidesPerView: 6,
                  spaceBetween: 10,
                },
                1200: {
                  slidesPerView: 7,
                  spaceBetween: 15,
                },
              }}
              index={index}
              modules={[Autoplay, Pagination, Navigation]}>
              {brands.map((item) => (
                <SwiperSlide key={item._id}>
                  <Link
                    to={`/brands/:${item._id}`}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}>
                    <img
                      src={uploadImage(item.imageLogo)}
                      className="brand-image"
                    />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
          <div className="swiper-button-prev" onClick={handlePrev}></div>
          <div className="swiper-button-next" onClick={handleNext}></div>
        </div>
      )}
    </Box>
  );
}
export default BrandsHome;
