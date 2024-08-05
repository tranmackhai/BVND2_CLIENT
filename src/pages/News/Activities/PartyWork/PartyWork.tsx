import React from "react";
import SideBar from "../../../../components/SideBar/SideBar";
import PageTemplate from "../../../../components/PageTemplate";
import { Link } from "react-router-dom";

const PartyWork: React.FC = () => {
  const breadcrumb = (
    <>
      <Link to="/" style={{ color: "#000" }}>
        <p>
          Trang Chủ <i className="fa-solid fa-angles-right"></i>
        </p>
      </Link>
      <p style={{ fontWeight: "700" }}>Công Tác Đảng</p>
    </>
  );

  return (
    <PageTemplate
      title="CÔNG TÁC ĐẢNG"
      groupCategorySlug="cong-tac-dang"
      description="Danh sách công tác Đảng của bệnh viện nhi đồng 2"
      breadcrumb={breadcrumb}
      sidebar={<SideBar />}
      urlPath="/tin-tuc/cong-tac-dang" 
    />
  );
};

export default PartyWork;
