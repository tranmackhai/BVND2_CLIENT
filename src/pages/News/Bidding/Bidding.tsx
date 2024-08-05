import React from "react";
import SideBar from "../../../components/SideBar/SideBar";
import PageTemplate from "../../../components/PageTemplate";
import { Link } from "react-router-dom";

const Bidding: React.FC = () => {
  const breadcrumb = (
    <>
      <Link to="/" style={{ color: "#000" }}>
        <p>
          Trang Chủ <i className="fa-solid fa-angles-right"></i>
        </p>
      </Link>
      <p style={{ fontWeight: "700" }}>Đấu Thầu - Mời Chào Giá</p>
    </>
  );

  return (
    <PageTemplate
      title="ĐẤU THẦU - MỜI CHÀO GIÁ"
      groupCategorySlug="dau-thau-moi-chao-gia"
      description="Danh sách đấu thầu - mời chào giá của bệnh viện nhi đồng 2"
      breadcrumb={breadcrumb}
      sidebar={<SideBar />}
      urlPath="/tin-tuc/dau-thau-moi-chao-gia" 
    />
  );
};

export default Bidding;
