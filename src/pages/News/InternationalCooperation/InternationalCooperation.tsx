import React from "react";
import SideBar from "../../../components/SideBar/SideBar";
import PageTemplate from "../../../components/PageTemplate";
import { Link } from "react-router-dom";

const InternationalCooperation: React.FC = () => {
  const breadcrumb = (
    <>
      <Link to="/" style={{ color: "#000" }}>
        <p>
          Trang Chủ <i className="fa-solid fa-angles-right"></i>
        </p>
      </Link>
      <p style={{ fontWeight: "700" }}>Hợp Tác Quốc Tế</p>
    </>
  );

  return (
    <PageTemplate
      title="HỢP TÁC QUỐC TẾ"
      groupCategorySlug="hop-tac-quoc-ten"
      description="Danh sách hợp tác quốc tế của bệnh viện nhi đồng 2"
      breadcrumb={breadcrumb}
      sidebar={<SideBar />}
      urlPath="/tin-tuc/hop-tac-quoc-te" 
    />
  );
};

export default InternationalCooperation;
