import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Spin } from "antd";
import "swiper/css/pagination";
import { useBanner } from "../../hooks/useBanner";
import { Pagination, Autoplay } from "swiper/modules";
import "./carousel.scss";

export type BannerItem = {
  image: string;
  displayName: string;
  status: boolean;
};

const CustomCarousel: React.FC = () => {
  const { banners, isLoading, refetch } = useBanner({});

  useEffect(() => {
    refetch();
  }, []);

  if (isLoading) {
    return <Spin />;
  }

  const filteredBanners = banners?.data?.allBanner
    .filter((banner: BannerItem) => banner.status === true)
    .slice(0, 5); // Selecting first 5 active banners

  return (
    <div className="carousel">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {Array.isArray(filteredBanners) &&
          filteredBanners.map((item: BannerItem, index: number) => (
            <SwiperSlide key={index}>
              <img
                src={`http://localhost:4646${item.image}`}
                alt={`Hình ảnh ${item.displayName}`}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default CustomCarousel;
