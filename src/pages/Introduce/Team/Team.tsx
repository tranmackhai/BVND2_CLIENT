import React, { useState, useEffect } from "react";
import { Input } from "antd";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Spin } from "antd";
import { useDoctor } from "../../../hooks/useDoctor";
import { Helmet, HelmetProvider } from "react-helmet-async";

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

import { Grid, Pagination } from "swiper/modules";

const { Search } = Input;

const Team: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const { doctors, isLoading, refetch } = useDoctor({});

  useEffect(() => {
    refetch();
  }, []);

  if (isLoading) {
    return <Spin />;
  }

  const handleSearch = (value: string) => {
    setSearchQuery(value.toLowerCase());
    console.log(searchQuery);
  };

  const specialties = [
    {
      title: "Chuyên khoa nội",
      doctors: doctors?.data?.allDoctor.filter(
        (doctor: DoctorItem) =>
          doctor.specialty === Specialty.InternalMedicine && doctor.status
      ),
    },
    {
      title: "Chuyên khoa ngoại",
      doctors: doctors?.data?.allDoctor.filter(
        (doctor: DoctorItem) =>
          doctor.specialty === Specialty.SurgicalSpecialty && doctor.status
      ),
    },
    {
      title: "Cận lâm sàng",
      doctors: doctors?.data?.allDoctor.filter(
        (doctor: DoctorItem) =>
          doctor.specialty === Specialty.ClinicalMedicine && doctor.status
      ),
    },
  ];

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Đội ngũ chuyên gia | Website Bệnh viện nhi đồng 2</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <div className="posts-path">
          <Link to="/" style={{ color: "#000" }}>
            <p>
              Trang Chủ <i className="fa-solid fa-angles-right"></i>
            </p>
          </Link>
          <p style={{ fontWeight: "700" }}>Đội Ngũ Chuyên Gia</p>
        </div>
        <div className="posts-box">
          <Search
            placeholder="Nhập tên bác sĩ bạn cần tìm"
            allowClear
            onSearch={handleSearch}
            style={{ width: "100%" }}
            className="placeholder"
          />
          {specialties.map((specialty, index) => {
            const filteredDoctors = specialty.doctors.filter(
              (doctor: DoctorItem) => {
                const searchTerms = searchQuery.split(" ");
                return searchTerms.every((term) =>
                  doctor.name.toLowerCase().includes(term)
                );
              }
            );

            if (filteredDoctors.length === 0) return null;

            return (
              <div key={index}>
                <h2
                  style={{
                    marginTop: "24px",
                    marginLeft: "12px",
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "#1c86ee",
                  }}
                >
                  {specialty.title}
                </h2>
                <Swiper
                  style={{ paddingBottom: "16px" }}
                  slidesPerView={1}
                  grid={{ rows: 1 }}
                  breakpoints={{
                    769: { slidesPerView: 3, grid: { rows: 1 } },
                    993: { slidesPerView: 3, grid: { rows: 2 } },
                    1201: { slidesPerView: 4, grid: { rows: 2 } },
                  }}
                  spaceBetween={30}
                  pagination={true}
                  modules={[Grid, Pagination]}
                >
                  {filteredDoctors.map((doctor: DoctorItem, idx: number) => (
                    <SwiperSlide key={idx}>
                      <div
                        className="doctors-list"
                        style={{ marginBottom: "12px" }}
                      >
                        <img
                          src={`http://localhost:4646${doctor.image}`}
                          alt={doctor.name}
                        />
                        <h3>{doctor.name}</h3>
                        <p>{doctor.position}</p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            );
          })}
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Team;
