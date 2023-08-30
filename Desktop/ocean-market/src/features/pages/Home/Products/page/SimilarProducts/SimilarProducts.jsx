import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../../../../../../components/Home/Product";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getRelatedProductAsync } from "../../state/getRelatedProductAsync";
import GradiantCirculeLoading from "../../../../../../core/GradiantCirculeLoading";
function SimilarProducts(id) {
  const dispatch = useDispatch();
  const swiperRef = useRef(null);
  const { i18n } = useTranslation();
  const language = i18n.language;
  useEffect(() => {
    dispatch(getRelatedProductAsync(id));
  }, []);
  const relatedProducts = useSelector(
    (state) => state.getRelatedProductReducer.details
  );
  const loading = useSelector(
    (state) => state.getRelatedProductReducer.loading
  );
  const handleNext = () => {
    if (swiperRef.current !== null) {
      swiperRef.current.swiper.slideNext();
    }
  };
  const handlePrev = () => {
    if (swiperRef.current !== null) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  return (
    <>
      {loading ? (
        <Box sx={{ height: "200px", position: "relative" }}>
          <GradiantCirculeLoading />
        </Box>
      ) : relatedProducts && relatedProducts.data.products.length !== 0 ? (
        <>
          <Box sx={{ pt: 6, pb: 2 }}>
            <Typography sx={{ textAlign: "center", fontSize: "22px" }}>
              Similar Products
            </Typography>
          </Box>
          <Box
            className="mySwiper"
            sx={{
              width: "100%",
              height: { xs: "230px", sm: "350px", md: "450px" },
              margin: "auto",
            }}>
            <Swiper
              ref={swiperRef}
              loop={true}
              style={{ height: "100%" }}
              navigation={{
                prevEl: "swiper-button-prev",
                nextEl: ".swiper-button-next",
              }}
              slidesPerView={5}
              spaceBetween={4}
              slidesPerGroup={5}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                  slidesPerGroup: 2,
                },
                600: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                  slidesPerGroup: 3,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                  slidesPerGroup: 4,
                },
                1250: {
                  slidesPerView: 5,
                  spaceBetween: 15,
                },
              }}
              modules={[Navigation]}>
              {relatedProducts.data.products.map((product) => (
                <SwiperSlide key={product._id}>
                  <Link
                    to={`/product-detail/:${product._id}`}
                    style={{
                      textDecoration: "none",
                      width: "100%",
                      height: "100%",
                    }}>
                    <Product
                      id={product._id}
                      name={product.name}
                      imageCover={product.image_cover}
                      rating={product.rating}
                      isNew={product.isNew}
                      isLike={product.isLiked}
                      listColors={product.colors}
                      isActive={product.isActive}
                      special={product.special}
                      name_ar={product?.name_ar || product.name}
                      code={
                        language === "ar" ? product.code_ar : product.code_en
                      }
                    />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-button-prev" onClick={handlePrev}></div>
            <div className="swiper-button-next" onClick={handleNext}></div>
          </Box>
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default SimilarProducts;
