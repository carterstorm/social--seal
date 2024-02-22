import classNames from "classnames";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import swiperComponentStyles from "./swiperComponentStyles.module.scss";
import { swiperBreakpoints, swiperData } from "../../../constants";

export function SwiperComponent() {
  return (
    <div className={classNames(swiperComponentStyles.swiper)}>
      <Swiper
        breakpoints={swiperBreakpoints}
        loop={true}
        grabCursor={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}>
        {swiperData.map((element) => (
          <SwiperSlide key={element.id}>
            <div className={classNames(swiperComponentStyles.slide)}>
              <img
                className={classNames(swiperComponentStyles.slide__image)}
                src={element.url}
                alt={element.url}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
