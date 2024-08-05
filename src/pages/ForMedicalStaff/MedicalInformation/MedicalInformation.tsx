import React from "react";
import SideBar from "../../../components/SideBar/SideBar";
import PageTemplate from "../../../components/PageTemplate";
import { Link } from "react-router-dom";

const MedicalInformation: React.FC = () => {
  const breadcrumb = (
    <>
      <Link to="/" style={{ color: "#000" }}>
        <p>
          Trang Chủ <i className="fa-solid fa-angles-right"></i>
        </p>
      </Link>
      <p style={{ fontWeight: "700" }}>Thông Tin Y Học Chứng Cứ</p>
    </>
  );

  return (
    <PageTemplate
      title="THÔNG TIN Y HỌC CHỨNG CỨ"
      groupCategorySlug="thong-tin-y-hoc-chung-cu"
      description="Danh sách thông tin y học chứng cứ của bệnh viện nhi đồng 2"
      breadcrumb={breadcrumb}
      sidebar={<SideBar />}
      urlPath="/danh-cho-nhan-vien-y-te/thong-tin-y-hoc-chung-cu" 
    />
  );
};

export default MedicalInformation;
