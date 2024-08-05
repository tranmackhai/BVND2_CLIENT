import React from "react";
import SideBar from "../../../components/SideBar/SideBar";
import PageTemplate from "../../../components/PageTemplate";
import { Link } from "react-router-dom";

const Procedure: React.FC = () => {
  const breadcrumb = (
    <>
      <Link to="/" style={{ color: "#000" }}>
        <p>
          Trang Chủ <i className="fa-solid fa-angles-right"></i>
        </p>
      </Link>
      <p style={{ fontWeight: "700" }}>Thủ Tục Khám Bệnh</p>
    </>
  );

  return (
    <PageTemplate
      title="THỦ TỤC KHÁM BỆNH"
      groupCategorySlug="thu-tuc-kham-benh"
      description="Thủ tục khám bệnh của bệnh viện nhi đồng 2"
      breadcrumb={breadcrumb}
      sidebar={<SideBar />}
      urlPath="/tin-tuc/thu-tuc-kham-benh" 
    />
  );
};

export default Procedure;
