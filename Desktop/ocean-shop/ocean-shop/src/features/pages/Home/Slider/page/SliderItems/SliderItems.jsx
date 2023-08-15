import { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./SliderItems.css";
import { Autoplay } from "swiper";
import Navbar from "../../../Navbar/Navbar";
import { useSelector } from "react-redux";
import GradiantCirculeLoading from "../../../../../../core/GradiantCirculeLoading";
import { uploadImage } from "../../../../../../core/uploadImage";
export default function SliderItems() {
  const navigate = useNavigate();
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  const { id } = useParams();
  const loading = useSelector((state) => state.sliderReducer.loading);
  const stories = useSelector((state) => state.sliderReducer.stories);
  const onSlideChange = (swiper) => {
    if (swiper.isEnd) {
      setTimeout(() => {
        if (swiper.isEnd) {
          swiper.autoplay.stop();
          navigate("/");
        }
      }, 11000);
    }
  };
  return (
    <>
      <Navbar />
      <Swiper
        className="slider"
        centeredSlides={true}
        autoplay={{
          delay: 11000,
          disableOnInteraction: false,
        }}
        initialSlide={id}
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        onSlideChange={onSlideChange}
        onAutoplayTimeLeft={onAutoplayTimeLeft}>
        {loading ? (
          <GradiantCirculeLoading />
        ) : (
          stories.map((item, index) => (
            <SwiperSlide key={index} className="slider-item">
              <img src={uploadImage(item.photo_url)} alt="" />
            </SwiperSlide>
          ))
        )}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
