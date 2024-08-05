import React from "react";
import SideBar from "../../../../components/SideBar/SideBar";
import PageTemplate from "../../../../components/PageTemplate";
import { Link } from "react-router-dom";

const Union: React.FC = () => {
  const breadcrumb = (
    <>
      <Link to="/" style={{ color: "#000" }}>
        <p>
          Trang Chủ <i className="fa-solid fa-angles-right"></i>
        </p>
      </Link>
      <p style={{ fontWeight: "700" }}>Công Đoàn</p>
    </>
  );

  return (
    <PageTemplate
      title="CÔNG ĐOÀN"
      groupCategorySlug="cong-doan"
      description="Công đoàn bệnh viện nhi đồng 2"
      breadcrumb={breadcrumb}
      sidebar={<SideBar />}
      urlPath="/tin-tuc/cong-doan" 
    />
  );
};

export default Union;
