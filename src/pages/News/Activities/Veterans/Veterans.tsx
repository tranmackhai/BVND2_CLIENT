import React from "react";
import SideBar from "../../../../components/SideBar/SideBar";
import PageTemplate from "../../../../components/PageTemplate";
import { Link } from "react-router-dom";

const Veterans: React.FC = () => {
  const breadcrumb = (
    <>
      <Link to="/" style={{ color: "#000" }}>
        <p>
          Trang Chủ <i className="fa-solid fa-angles-right"></i>
        </p>
      </Link>
      <p style={{ fontWeight: "700" }}>Hội Cựu Chiến Binh</p>
    </>
  );

  return (
    <PageTemplate
      title="CÔNG ĐOÀN"
      groupCategorySlug="hoi-cuu-chien-binh"
      description="Hội cựu chiến binh bệnh viện nhi đồng 2"
      breadcrumb={breadcrumb}
      sidebar={<SideBar />}
      urlPath="/tin-tuc/hoi-cuu-chien-binh" 
    />
  );
};

export default Veterans;
