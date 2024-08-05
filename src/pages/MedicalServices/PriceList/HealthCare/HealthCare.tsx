import React from "react";
import SideBar from "../../../../components/SideBar/SideBar";
import PageTemplate from "../../../../components/PageTemplate";
import { Link } from "react-router-dom";

const HealthCare: React.FC = () => {
  const breadcrumb = (
    <>
      <Link to="/" style={{ color: "#000" }}>
        <p>
          Trang Chủ <i className="fa-solid fa-angles-right"></i>
        </p>
      </Link>
      <p style={{ fontWeight: "700" }}>Bảng Giá Khám Chữa Bệnh</p>
    </>
  );

  return (
    <PageTemplate
      title="BẢNG GIÁ KHÁM CHỮA BỆNH"
      groupCategorySlug="bang-gia-kham-chua-benh"
      description="Bảng giá khám chữa bệnh của bệnh viện nhi đồng 2"
      breadcrumb={breadcrumb}
      sidebar={<SideBar />}
      urlPath="/tin-tuc/bang-gia-kham-chua-benh" 
    />
  );
};

export default HealthCare;
