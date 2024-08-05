import React from "react";
import SideBar from "../../../components/SideBar/SideBar";
import PageTemplate from "../../../components/PageTemplate";
import { Link } from "react-router-dom";

const TreatmentRegimen: React.FC = () => {
  const breadcrumb = (
    <>
      <Link to="/" style={{ color: "#000" }}>
        <p>
          Trang Chủ <i className="fa-solid fa-angles-right"></i>
        </p>
      </Link>
      <p style={{ fontWeight: "700" }}>Phác Đồ Điều Trị</p>
    </>
  );

  return (
    <PageTemplate
      title="PHÁC ĐỒ ĐIỀU TRỊ"
      groupCategorySlug="phac-do-dieu-tri"
      description="Danh sách phác đồ điều trị của bệnh viện nhi đồng 2"
      breadcrumb={breadcrumb}
      sidebar={<SideBar />}
      urlPath="/danh-cho-nhan-vien-y-te/phac-do-dieu-tri" 
    />
  );
};

export default TreatmentRegimen;
