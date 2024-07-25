import { useState, useEffect } from "react";
import { Spin, Pagination } from "antd";
import { Link, useLocation } from "react-router-dom";
import SideBar from "../../../../components/SideBar/SideBar";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { usePosts } from "../../../../hooks/usePost";
import { format } from "date-fns";
import ReactHtmlParser from "react-html-parser";

type TPostsDto = {
  title: string;
  content: string;
  thumbnail?: string;
  file?: string;
  isActive: boolean;
  groupCategorySlug: string;
  slug?: string;
  updatedAt: string;
};

const Service: React.FC = () => {
  const location = useLocation();
  const groupCategorySlug = location.pathname.split("/")[2];
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const { posts, refetch, isLoading } = usePosts({
    groupCategorySlug,
  });

  useEffect(() => {
    refetch();
  }, []);

  if (isLoading) {
    return <Spin />;
  }

  const filteredPosts = () => {
    let filteredData = posts?.data?.data;
    filteredData = filteredData?.filter((post: TPostsDto) => post.isActive);
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
          <title>Bảng giá các dịch vụ | Website Bệnh viện nhi đồng 2</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <div className="posts-path">
          <Link to="/" style={{ color: "#000" }}>
            <p>
              Trang Chủ <i className="fa-solid fa-angles-right"></i>
            </p>
          </Link>
          <p style={{ fontWeight: "700" }}>Bảng Giá Các Dịch Vụ</p>
        </div>
        <div className="posts-box" style={{ backgroundColor: "transparent" }}>
          <h2 style={{ marginBottom: "16px" }}>BẢNG GIÁ CÁC DỊCH VỤ </h2>
          <hr
            style={{
              background:
                "linear-gradient(to right, #228b22, rgba(51, 255, 102, 0))",
              width: "75%",
            }}
            className="gradient-line"
          />
          <div style={{ display: "flex" }}>
            <div className="w-100" style={{ width: "75%" }}>
              <div>
                {slicedData.map((post: TPostsDto, index: number) => (
                  <Link
                    to={`/kham-chua-benh/bang-gia-cac-dich-vu/${post.slug}`}
                    key={index}
                  >
                    <div className="box-list">
                      <div className="box-list-img">
                        <img src={`http://localhost:4646${post.thumbnail}`} />
                      </div>
                      <div className="box-list-content">
                        <p className="box-list-content-date">
                          {" "}
                          {format(new Date(post.updatedAt), "dd/MM/yyyy")}{" "}
                        </p>
                        <p className="box-list-content-title">{post.title}</p>
                        <p className="box-list-content-summary">
                          {ReactHtmlParser(post.content)}
                        </p>
                      </div>
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

export default Service;
