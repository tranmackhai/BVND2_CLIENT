import React from "react";
import SideBar from "../../../components/SideBar/SideBar";
import PageTemplate from "../../../components/PageTemplate";
import { Link } from "react-router-dom";

const Train: React.FC = () => {
  const breadcrumb = (
    <>
      <Link to="/" style={{ color: "#000" }}>
        <p>
          Trang Chủ <i className="fa-solid fa-angles-right"></i>
        </p>
      </Link>
      <p style={{ fontWeight: "700" }}>Đào Tạo</p>
    </>
  );

  return (
    <PageTemplate
      title="ĐÀO TẠO"
      groupCategorySlug="dao-tao"
      description="Danh sách đào tạo của bệnh viện nhi đồng 2"
      breadcrumb={breadcrumb}
      sidebar={<SideBar />}
      urlPath="/tin-tuc/dao-tao" 
    />
  );
};

export default Train;
