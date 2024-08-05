// src/pages/ProfessionalNews.tsx
import React from "react";
import SideBar from "../../../components/SideBar/SideBar";
import PageTemplate from "../../../components/PageTemplate";
import { Link } from "react-router-dom";

const ProfessionalNews: React.FC = () => {
  const breadcrumb = (
    <>
      <Link to="/" style={{ color: "#000" }}>
        <p>
          Trang Chủ <i className="fa-solid fa-angles-right"></i>
        </p>
      </Link>
      <p style={{ fontWeight: "700" }}>Tin Chuyên Môn</p>
    </>
  );

  return (
    <PageTemplate
      title="TIN CHUYÊN MÔN"
      groupCategorySlug="tin-chuyen-mon"
      description="Danh sách tin chuyên môn của bệnh viện nhi đồng 2"
      breadcrumb={breadcrumb}
      sidebar={<SideBar />}
      urlPath="/tin-tuc/tin-chuyen-mon" 
    />
  );
};

export default ProfessionalNews;
