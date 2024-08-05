import React from "react";
import SideBar from "../../../../components/SideBar/SideBar";
import PageTemplate from "../../../../components/PageTemplate";
import { Link } from "react-router-dom";

const YouthUnion: React.FC = () => {
  const breadcrumb = (
    <>
      <Link to="/" style={{ color: "#000" }}>
        <p>
          Trang Chủ <i className="fa-solid fa-angles-right"></i>
        </p>
      </Link>
      <p style={{ fontWeight: "700" }}>Đoàn Thanh Niên</p>
    </>
  );

  return (
    <PageTemplate
      title="ĐOÀN THANH NIÊN"
      groupCategorySlug="doan-thanh-nien"
      description="Đoàn thanh niên bệnh viện nhi đồng 2"
      breadcrumb={breadcrumb}
      sidebar={<SideBar />}
      urlPath="/tin-tuc/doan-thanh-nien" 
    />
  );
};

export default YouthUnion;
