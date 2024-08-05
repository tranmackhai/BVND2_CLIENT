import React from "react";
import SideBar from "../../../components/SideBar/SideBar";
import PageTemplate from "../../../components/PageTemplate";
import { Link } from "react-router-dom";

const Recruitment: React.FC = () => {
  const breadcrumb = (
    <>
      <Link to="/" style={{ color: "#000" }}>
        <p>
          Trang Chủ <i className="fa-solid fa-angles-right"></i>
        </p>
      </Link>
      <p style={{ fontWeight: "700" }}>Tuyển Dụng</p>
    </>
  );

  return (
    <PageTemplate
      title="TUYỂN DỤNG"
      groupCategorySlug="tuyen-dung"
      description="Danh sách tuyển dụng của bệnh viện nhi đồng 2"
      breadcrumb={breadcrumb}
      sidebar={<SideBar />}
      urlPath="/tin-tuc/tuyen-dung" 
    />
  );
};

export default Recruitment;
