import { useState, useEffect } from "react";
import { Col, Row, Spin, Pagination } from "antd";
import { Link, useNavigate, useLocation } from "react-router-dom";
import SideBar from "../../../components/SideBar";
import { usePosts } from "../../../hooks/usePost";
import "./specialist.scss";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { format } from "date-fns"; // Import format function from date-fns
import ReactHtmlParser from "react-html-parser"; // Import react-html-parser

interface SpecialistProps {
  specialty: string;
}

type TPostsDto = {
  title: string;
  content: string;
  thumbnail?: string;
  file?: string;
  isActive: boolean;
  groupCategorySlug: string;
  slug?: string;
  postCategory?: Specialty;
  updatedAt: string;
};

enum Specialty {
  InternalMedicine = "InternalMedicine", // Chuyên khoa nội
  SurgicalSpecialty = "SurgicalSpecialty", // Chuyên khoa ngoại
  ClinicalMedicine = "ClinicalMedicine", // Cận lâm sàng
}

const Specialist = ({ specialty }: SpecialistProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const groupCategorySlug = location.pathname.split("/")[2];
  // const [keyword, setKeyword] = useState("");
  const [currentSpecialty, setCurrentSpecialty] = useState<Specialty | null>(
    null
  );
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10; // Số lượng bài viết trên mỗi trang

  const { posts, refetch, isLoading } = usePosts({
    // keyword,
    groupCategorySlug,
  });

  useEffect(() => {
    refetch();
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const specialtyParam = params.get("specialty") as Specialty;
    if (specialtyParam) {
      setCurrentSpecialty(specialtyParam);
    }
  }, [location.search]);

  const handleSpecialtyClick = (specialty: Specialty, path: string) => {
    setCurrentSpecialty(specialty);
    setCurrentPage(1);
    navigate(`${path}?specialty=${specialty}`);
  };

  if (isLoading) {
    return <Spin />;
  }

  const getTitle = () => {
    switch (specialty) {
      case "Chuyên khoa ngoại":
        return "Chuyên khoa ngoại | Website Bệnh viện nhi đồng 2";
      case "Chuyên khoa nội":
        return "Chuyên khoa nội | Website Bệnh viện nhi đồng 2";
      case "Cận lâm sàng":
        return "Cận lâm sàng | Website Bệnh viện nhi đồng 2";
      default:
        return "Các chuyên khoa | Website Bệnh viện nhi đồng 2";
    }
  };

  // Lọc và hiển thị các bài viết theo chuyên khoa được chọn
  const filteredPosts = () => {
    let filteredData = posts?.data?.data;

    if (currentSpecialty) {
      filteredData = filteredData?.filter(
        (post: TPostsDto) =>
          post.isActive && post.postCategory === currentSpecialty
      );
    } else {
      filteredData = filteredData?.filter((post: TPostsDto) => post.isActive);
    }

    return filteredData;
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const startIndex = (currentPage - 1) * pageSize;
  const slicedData = filteredPosts()?.slice(startIndex, startIndex + pageSize);

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{getTitle()}</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <div className="posts-path">
          <p>
            Trang chủ <i className="fa-solid fa-angles-right"></i>
          </p>
          <p>Các chuyên khoa</p>
        </div>
        <div className="posts-box" style={{ backgroundColor: "transparent" }}>
          <h2 style={{ marginBottom: "16px", letterSpacing: "2px" }}>
            CÁC CHUYÊN KHOA
          </h2>
          <div style={{ display: "flex" }}>
            <div className="w-100" style={{ width: "75%" }}>
              <Row gutter={[32, 16]}>
                <Col span={8}>
                  <div
                    className="specialist-button"
                    onClick={() =>
                      handleSpecialtyClick(
                        Specialty.SurgicalSpecialty,
                        "/kham-chua-benh/cac-chuyen-khoa/chuyen-khoa-ngoai"
                      )
                    }
                  >
                    Chuyên khoa ngoại
                  </div>
                </Col>
                <Col span={8}>
                  <div
                    className="specialist-button"
                    onClick={() =>
                      handleSpecialtyClick(
                        Specialty.InternalMedicine,
                        "/kham-chua-benh/cac-chuyen-khoa/chuyen-khoa-noi"
                      )
                    }
                  >
                    Chuyên khoa nội
                  </div>
                </Col>
                <Col span={8}>
                  <div
                    className="specialist-button"
                    onClick={() =>
                      handleSpecialtyClick(
                        Specialty.InternalMedicine,
                        "/kham-chua-benh/cac-chuyen-khoa/can-lam-sang"
                      )
                    }
                  >
                    Cận lâm sàng
                  </div>
                </Col>
              </Row>
              <div>
                {slicedData?.map((post: TPostsDto, index: number) => (
                  <Link
                    to={`/kham-chua-benh/cac-chuyen-khoa/${post.slug}`}
                    key={index}
                    style={{ color: "#000" }}
                  >
                    <div
                      className="specialist-box"
                      style={{ maxHeight: "102px" }}
                    >
                      <p
                        style={{
                          fontSize: "12px",
                          color: "#808080",
                          marginBottom: "0.5rem",
                        }}
                      >
                        {format(new Date(post.updatedAt), "dd/MM/yyyy")}{" "}
                        {/* Định dạng ngày */}
                      </p>
                      <p style={{ fontWeight: "700", marginBottom: "0.5rem" }}>
                        {post.title}
                      </p>
                      <p
                        className="specialist-content"
                        style={{ maxHeight: "32px" }}
                      >
                        {ReactHtmlParser(post.content)}
                      </p>
                    </div>
                  </Link>
                ))}
                <Pagination
                  style={{ marginTop: "12px" }}
                  current={currentPage}
                  onChange={handlePageChange}
                  total={filteredPosts()?.length}
                  pageSize={pageSize}
                  showSizeChanger={false}
                />
              </div>
            </div>
            <div className="none" style={{ width: "25%", marginLeft: "12px" }}>
              <SideBar />
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Specialist;
