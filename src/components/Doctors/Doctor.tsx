import React, { useEffect } from "react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Spin } from "antd";
import "./doctor.scss";
import { useDoctor } from "../../hooks/useDoctor";

export type DoctorItem = {
  image: string;
  name: string;
  position: string;
  specialty: Specialty;
  status: boolean;
};

enum Specialty {
  InternalMedicine = "InternalMedicine", // Chuyên khoa nội
  SurgicalSpecialty = "SurgicalSpecialty", // Chuyên khoa ngoại
  ClinicalMedicine = "ClinicalMedicine", // Cận lâm sàng
}

const Doctors: React.FC = () => {
  const { doctors, isLoading, refetch } = useDoctor({});

  useEffect(() => {
    refetch();
  }, []);

  if (isLoading) {
    return <Spin />;
  }

  const filteredDoctors = doctors?.data?.allDoctor.filter(
    (doctor: DoctorItem) => doctor.status === true
  );

  return (
    <section className="doctors">
      <h2>ĐỘI NGŨ CHUYÊN GIA</h2>
      <div style={{ padding: "24px 12px" }}>
        <Swiper
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
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
            1201: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
          onSwiper={(swiper) => {
            swiper.el.onmouseover = () => {
              swiper.autoplay.stop();
            };
            swiper.el.onmouseout = () => {
              swiper.autoplay.start();
            };
          }}
          modules={[Autoplay]}
        >
          {Array.isArray(filteredDoctors) &&
            filteredDoctors.map((item: DoctorItem, index: number) => (
              <SwiperSlide key={index}>
                <div className="doctors-list">
                  <img
                    src={`http://localhost:4646${item.image}`}
                    alt={`Hình ảnh của ${item.name}`}
                  />
                  <h3>{item.name}</h3>
                  <p>{item.position}</p>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Doctors;
