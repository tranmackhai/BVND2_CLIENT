import React from "react";
import SideBar from "../../../components/SideBar/SideBar";
import PageTemplate from "../../../components/PageTemplate";
import { Link } from "react-router-dom";

const ShareLove: React.FC = () => {
  const breadcrumb = (
    <>
      <Link to="/" style={{ color: "#000" }}>
        <p>
          Trang Chủ <i className="fa-solid fa-angles-right"></i>
        </p>
      </Link>
      <p style={{ fontWeight: "700" }}>Chia Sẻ Yêu Thương</p>
    </>
  );

  return (
    <PageTemplate
      title="CHIA SẺ YÊU THƯƠNG"
      groupCategorySlug="chia-se-yeu-thuong"
      description="Danh sách chia sẽ yêu thương của bệnh viện nhi đồng 2"
      breadcrumb={breadcrumb}
      sidebar={<SideBar />}
      urlPath="/tin-tuc/chia-se-yeu-thuong" 
    />
  );
};

export default ShareLove;
