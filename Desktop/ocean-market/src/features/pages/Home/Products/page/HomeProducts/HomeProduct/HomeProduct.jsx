/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper";
// import { useEffect, useRef } from "react";
// import { allProductsAsync } from "../../../state/AllProductsAsync";
// import { useDispatch, useSelector } from "react-redux";
// import Product from "../../../../../../../components/Home/Product";
// import { Box } from "@mui/material";
// import HeaderFeature from "../../../../../../../components/Home/HeaderFeature";
// import { Link } from "react-router-dom";
// import { useTranslation } from "react-i18next";

// function HomeProduct({ type, typeName, title, link, linkName, sx, sxBox }) {
//   const dispatch = useDispatch();
//   const swiperRef = useRef(null);
//   const { t, i18n } = useTranslation();
//   const language = i18n.language;
//   useEffect(() => {
//     dispatch(allProductsAsync({ type, pageNumber: 1 }));
//   }, []);
//   const productsType = useSelector(
//     (state) => state.allProductsReducer[typeName]
//   );
//   const handleNext = () => {
//     if (swiperRef.current !== null) {
//       swiperRef.current.swiper.slideNext();
//     }
//   };

//   const handlePrev = () => {
//     if (swiperRef.current !== null) {
//       swiperRef.current.swiper.slidePrev();
//     }
//   };

//   return (
//     <>
//       <HeaderFeature
//         title={title}
//         link={link}
//         linkName={linkName}
//         sx={sx}
//         sxBox={sxBox}
//       />
//       <Box
//         className="mySwiper"
//         sx={{
//           width: "100%",
//           height: { xs: "230px", sm: "350px", md: "450px" },
//           margin: "auto",
//         }}>
//         <Swiper
//           ref={swiperRef}
//           loop={true}
//           style={{ height: "100%" }}
//           navigation={{
//             prevEl: `.swiper-button-prev-${type}`,
//             nextEl: `.swiper-button-next-${type}`,
//           }}
//           slidesPerView={5}
//           spaceBetween={4}
//           slidesPerGroup={5}
//           breakpoints={{
//             0: {
//               slidesPerView: 2,
//               spaceBetween: 10,
//               slidesPerGroup: 2,
//             },
//             600: {
//               slidesPerView: 3,
//               spaceBetween: 10,
//               slidesPerGroup: 3,
//             },
//             1024: {
//               slidesPerView: 4,
//               spaceBetween: 10,
//               slidesPerGroup: 4,
//             },
//             1250: {
//               slidesPerView: 5,
//               spaceBetween: 15,
//             },
//           }}
//           modules={[Navigation]}>
//           {productsType.map((product) => (
//             <SwiperSlide key={product._id}>
//               <Link
//                 to={`/product-detail/:${product._id}`}
//                 style={{
//                   textDecoration: "none",
//                   width: "100%",
//                   height: "100%",
//                 }}>
//                 <Product
//                   id={product._id}
//                   name={product.name}
//                   imageCover={product.image_cover}
//                   rating={product.rating}
//                   isNew={product.isNew}
//                   isLike={product.isLiked}
//                   listColors={product.colors}
//                   isActive={product.isActive}
//                   special={product.special}
//                   name_ar={product?.name_ar || product.name}
//                   code={language === "ar" ? product.code_ar : product.code_en}
//                 />
//               </Link>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//         <div
//           className={`swiper-button-prev swiper-button-prev-${type}`}
//           onClick={handlePrev}></div>
//         <div
//           className={`swiper-button-next swiper-button-next-${type}`}
//           onClick={handleNext}></div>
//       </Box>
//     </>
//   );
// }

// export default HomeProduct;
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect } from "react";
import { allProductsAsync } from "../../../state/AllProductsAsync";
import { useDispatch, useSelector } from "react-redux";
import Product from "../../../../../../../components/Home/Product";
import { Box } from "@mui/material";
import HeaderFeature from "../../../../../../../components/Home/HeaderFeature";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./HomeProduct.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 5, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 2,
    slidesToSlide: 2,
  },
};
function HomeProduct({ type, typeName, title, link, linkName, sx, sxBox }) {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const language = i18n.language;
  useEffect(() => {
    dispatch(allProductsAsync({ type, pageNumber: 1 }));
  }, []);
  const productsType = useSelector(
    (state) => state.allProductsReducer[typeName]
  );
  return (
    <>
      <HeaderFeature
        title={title}
        link={link}
        linkName={linkName}
        sx={sx}
        sxBox={sxBox}
      />
      <Box
        className="mySwiper"
        sx={{
          width: "100%",
          height: { xs: "230px", sm: "350px", md: "450px" },
          margin: "auto",
        }}>
        <Carousel
          swipeable={false}
          draggable={false}
          responsive={responsive}
          infinite={true}
          keyBoardControl={true}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["mobile"]}
          itemClass="carousel-item-padding-40-px">
          {productsType.map((product) => (
            <Box key={product._id} sx={{ height: "100%" }}>
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
                  code={language === "ar" ? product.code_ar : product.code_en}
                />
              </Link>
            </Box>
          ))}
        </Carousel>
      </Box>
    </>
  );
}
export default HomeProduct;
