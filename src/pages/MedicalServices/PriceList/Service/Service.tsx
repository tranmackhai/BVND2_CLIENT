import React from "react";
import SideBar from "../../../../components/SideBar/SideBar";
import PageTemplate from "../../../../components/PageTemplate";
import { Link } from "react-router-dom";

const Service: React.FC = () => {
  const breadcrumb = (
    <>
      <Link to="/" style={{ color: "#000" }}>
        <p>
          Trang Chủ <i className="fa-solid fa-angles-right"></i>
        </p>
      </Link>
      <p style={{ fontWeight: "700" }}>Bảng Giá Các Dịch Vụ</p>
    </>
  );

  return (
    <PageTemplate
      title="BẢNG GIÁ CÁC DỊCH VỤ"
      groupCategorySlug="bang-gia-cac-dich-vu"
      description="Bảng giá các dịch vụ của bệnh viện nhi đồng 2"
      breadcrumb={breadcrumb}
      sidebar={<SideBar />}
      urlPath="/tin-tuc/bang-gia-cac-dich-vu" 
    />
  );
};

export default Service;
