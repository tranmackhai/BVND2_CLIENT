import React, { useEffect } from "react";
import "./achievement.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Spin } from "antd";
import "swiper/css";
import { useStatistical } from "../../hooks/useStatistical";
import { BASE_URL } from "../../constants";

interface StatisticalItem {
  icon: string;
  figures: string;
  title: string;
}

const Achievement: React.FC = () => {
  const { statisticals, isLoading, refetch } = useStatistical({});

  useEffect(() => {
    refetch();
  }, []);

  if (isLoading) {
    return <Spin />;
  }

  const formatNumber = (numberString: string) => {
    const number = parseFloat(numberString);
    return number.toLocaleString("vi-VN");
  };

  return (
    <section className="section achievement">
      <div className="achievement-list">
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          breakpoints={{
            769: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            993: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
        >
          {statisticals?.data
            .slice(0, 5)
            .map((item: StatisticalItem, index: number) => (
              <SwiperSlide key={index}>
                <div className="achievement-list-item">
                  <div>
                    <img
                      style={{
                        objectFit: "cover",
                        width: "101px",
                        height: "101px",
                      }}
                      src={`${BASE_URL.BASE_URL_IMAGE}${item.icon}`}
                      alt={item.title}
                    />
                  </div>
                  <h1>{formatNumber(item.figures)}</h1>
                  <hr
                    style={{
                      width: "50%",
                    }}
                  />
                  <p>{item.title}</p>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Achievement;
