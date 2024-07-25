import { useState, useEffect } from "react";
import { Col, Row, Spin, Pagination } from "antd";
import { Link, useLocation } from "react-router-dom";
import "./service.scss";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { usePosts } from "../../../hooks/usePost";
import { format } from "date-fns"; // Import format function from date-fns
import ReactHtmlParser from "react-html-parser"; // Import react-html-parser

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
  const pageSize = 16;

  const { posts, refetch, isLoading } = usePosts({
    groupCategorySlug,
  });

  useEffect(() => {
    refetch();
  }, []);

  if (isLoading) {
    return <Spin />;
  }

  const filteredPosts = posts?.data?.data.filter(
    (post: TPostsDto) => post.isActive
  );

  const firstActivePost = posts?.data?.data.find(
    (post: TPostsDto) => post.isActive
  );

  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const activePosts = posts?.data?.data.filter(
    (post: TPostsDto) => post.isActive
  );

  const postsFromSecond = activePosts.slice(1, 5); // Lấy từ index 1 đến index 4 (4 bài viết)

  // Calculate start and end index for pagination
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Dịch vụ nổi bật | Website Bệnh viện nhi đồng 2</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <div className="posts-path">
          <p>
            Trang chủ <i className="fa-solid fa-angles-right"></i>
          </p>
          <p>Dịch Vụ</p>
        </div>
        <div className="posts-box" style={{ backgroundColor: "transparent" }}>
          <div className="fix-none" style={{ marginBottom: "24px" }}>
            <Row gutter={[24, 24]}>
              <Col span={12}>
                {firstActivePost && (
                  <Link
                    to={`/kham-chua-benh/dich-vu-noi-bat/${firstActivePost.slug}`}
                  >
                    <div
                      className="service"
                      style={{
                        backgroundImage: `url(http://localhost:4646${firstActivePost.thumbnail.replace(
                          /\\/g,
                          "/"
                        )})`,
                      }}
                    >
                      {firstActivePost.title}
                    </div>
                  </Link>
                )}
              </Col>
              <Col span={12}>
                <Row gutter={[8, 8]}>
                  {postsFromSecond.map((post: TPostsDto, index: number) => (
                    <Col key={index} span={12}>
                      <Link to={`/kham-chua-benh/dich-vu-noi-bat/${post.slug}`}>
                        <div
                          className="service-outstanding"
                          style={{
                            backgroundImage: post.thumbnail
                              ? `url(http://localhost:4646${post.thumbnail.replace(
                                  /\\/g,
                                  "/"
                                )})`
                              : undefined,
                          }}
                        >
                          {post.title}
                        </div>
                      </Link>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </div>
          <Row gutter={[32, 32]}>
            {currentPosts.map((post: TPostsDto, index: number) => (
              <Col
                key={index}
                lg={{ span: 6 }}
                md={{ span: 8 }}
                sm={{ span: 12 }}
              >
                <Link to={`/kham-chua-benh/dich-vu-noi-bat/${post.slug}`}>
                  <div className="service-box">
                    <img
                      src={`http://localhost:4646${post.thumbnail}`}
                      alt={post.title}
                    />
                    <p className="service-time">
                      {format(new Date(post.updatedAt), "dd/MM/yyyy")}{" "}
                    </p>
                    <p className="service-title">{post.title}</p>
                    <p className="service-content">
                      {ReactHtmlParser(post.content)}
                    </p>
                  </div>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "12px",
          }}
        >
          <Pagination
            current={currentPage}
            total={filteredPosts.length}
            pageSize={pageSize}
            showSizeChanger={false}
            onChange={handlePageChange}
          />
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Service;
