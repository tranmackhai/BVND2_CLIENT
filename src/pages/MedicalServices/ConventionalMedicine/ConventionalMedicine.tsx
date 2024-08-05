import React from "react";
import SideBar from "../../../components/SideBar/SideBar";
import PageTemplate from "../../../components/PageTemplate";
import { Link } from "react-router-dom";

const ConventionalMedicine: React.FC = () => {
  const breadcrumb = (
    <>
      <Link to="/" style={{ color: "#000" }}>
        <p>
          Trang Chủ <i className="fa-solid fa-angles-right"></i>
        </p>
      </Link>
      <p style={{ fontWeight: "700" }}>Y Học Thường Thức</p>
    </>
  );

  return (
    <PageTemplate
      title="Y HỌC THƯỜNG THỨC"
      groupCategorySlug="y-hoc-thuong-thuc"
      description="Y học thường thức của bệnh viện nhi đồng 2"
      breadcrumb={breadcrumb}
      sidebar={<SideBar />}
      urlPath="/tin-tuc/y-hoc-thuong-thuc" 
    />
  );
};

export default ConventionalMedicine;
