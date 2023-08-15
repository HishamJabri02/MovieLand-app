import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./SliderCarousel.css";
import HeaderFeature from "../../../../../../components/Home/HeaderFeature";
import { Pagination, Navigation } from "swiper";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sliderAsync } from "../../state/sliderAsync";
import GradiantCirculeLoading from "../../../../../../core/GradiantCirculeLoading";
import { Link } from "react-router-dom";
import { uploadImage } from "../../../../../../core/uploadImage";
export default function SliderCarousel() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (stories.length === 0) {
      dispatch(sliderAsync());
    }
  }, []);
  const loading = useSelector((state) => state.sliderReducer.loading);
  const stories = useSelector((state) => state.sliderReducer.stories);
  const storyRef = useRef(null);
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex(index + 1);
  };

  const handlePrev = () => {
    setIndex(index - 1);
  };
  useEffect(() => {
    if (
      stories.length !== 0 &&
      stories.length < 7 &&
      storyRef.current &&
      window.innerWidth > 640
    ) {
      storyRef.current.wrapperEl.style.justifyContent = "center";
    }
  }, [stories]);

  const handleSwiper = (swiper) => {
    storyRef.current = swiper;
  };
  return (
    <>
      <HeaderFeature title="Special Offers" />
      <div className="mySlider">
        <Swiper
          onSwiper={handleSwiper}
          navigation={{
            prevEl: ".mySlider .swiper-button-prev",
            nextEl: ".mySlider .swiper-button-next",
          }}
          slidesPerView={1}
          spaceBetween={4}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            320: {
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
              spaceBetween: 10,
            },
            1200: {
              slidesPerView: 7,
              spaceBetween: 30,
            },
          }}
          index={index}
          modules={[Pagination, Navigation]}>
          {loading ? (
            <GradiantCirculeLoading />
          ) : (
            stories.map((item, index) => (
              <SwiperSlide key={item._id}>
                <Link
                  to={`/stories/${index}`}
                  style={{
                    position: "relative",
                    display: "inline-block",
                    borderRadius: "100%",
                    width: "95%",
                    backgroundColor: "#fff",
                  }}>
                  <img src={uploadImage(item.photo_url)} alt="" />
                  <span
                    style={{
                      position: "absolute",
                      top: "-2px",
                      bottom: "-2px",
                      left: "-2px",
                      right: "-2px",
                      zIndex: "-1",
                      background:
                        "linear-gradient(to left, #4BE1EC 0%, #9931D6 50%, #DC136E 100%)",
                      borderRadius: "100%",
                    }}></span>
                </Link>
              </SwiperSlide>
            ))
          )}
        </Swiper>
        <div className="swiper-button-prev" onClick={handlePrev}></div>
        <div className="swiper-button-next" onClick={handleNext}></div>
      </div>
    </>
  );
}
