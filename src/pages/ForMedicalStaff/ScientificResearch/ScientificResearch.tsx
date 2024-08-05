import React from "react";
import SideBar from "../../../components/SideBar/SideBar";
import PageTemplate from "../../../components/PageTemplate";
import { Link } from "react-router-dom";

const ScientificResearch: React.FC = () => {
  const breadcrumb = (
    <>
      <Link to="/" style={{ color: "#000" }}>
        <p>
          Trang Chủ <i className="fa-solid fa-angles-right"></i>
        </p>
      </Link>
      <p style={{ fontWeight: "700" }}>Nghiên Cứu Khoa Học</p>
    </>
  );

  return (
    <PageTemplate
      title="NGHIÊN CỨU KHOA HỌC"
      groupCategorySlug="nghien-cuu-khoa-hoc"
      description="Danh sách nghiên cứu khoa học của bệnh viện nhi đồng 2"
      breadcrumb={breadcrumb}
      sidebar={<SideBar />}
      urlPath="/danh-cho-nhan-vien-y-te/nghien-cuu-khoa-hoc" 
    />
  );
};

export default ScientificResearch;
