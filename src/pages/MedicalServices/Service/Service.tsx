import { useState, useEffect, useCallback } from "react";
import { Col, Row, Spin, Pagination } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./service.scss";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { usePosts } from "../../../hooks/usePost";
import { format } from "date-fns"; 
import ReactHtmlParser from "react-html-parser"; 
import { BASE_URL } from "../../../constants";

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
  const navigate = useNavigate();
  const location = useLocation();
  const groupCategorySlug = location.pathname.split("/")[2];
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(16);

  const { posts, refetch, isLoading } = usePosts({
    isActive: true,
    page,
    pageSize,
    groupCategorySlug,
  });

  const handleChangPage = useCallback((page: number, pageSize: number) => {
    setPage(page);
    setPageSize(pageSize);
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    refetch();
  }, [page, pageSize, refetch]);

  if (isLoading) {
    return <Spin />;
  }

  const firstActivePost = posts?.data?.data.find(
    (post: TPostsDto) => post.isActive
  );

  const activePosts = posts?.data?.data.filter(
    (post: TPostsDto) => post.isActive
  );

  const postsFromSecond = activePosts.slice(1, 5); 

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
                        backgroundImage: `url('http://192.168.61.1:4646/${firstActivePost.thumbnail.replace(
                          /\\/g,
                          "/"
                        )}')`,
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
                              ? `url('http://192.168.61.1:4646/${post.thumbnail.replace(
                                  /\\/g,
                                  "/"
                                )}')`
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
            {posts?.data.data.map((post: TPostsDto, index: number) => (
              <Col
                key={index}
                lg={{ span: 6 }}
                md={{ span: 8 }}
                sm={{ span: 12 }}
              >
                <div
                  onClick={() => {
                    navigate(`/kham-chua-benh/dich-vu-noi-bat/${post.slug}`);
                  }}
                >
                  <div className="service-box">
                    <img
                      src={`${BASE_URL.BASE_URL_IMAGE}${post.thumbnail}`}
                      alt={post.title}
                    />
                    <p className="service-time">
                      {format(new Date(post.updatedAt), "dd/MM/yyyy")}{" "}
                    </p>
                    <p className="service-title">{post.title}</p>
                    <div className="service-content">
                      {ReactHtmlParser(post.content)}
                    </div>
                  </div>
                </div>
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
            style={{ marginTop: "12px" }}
            current={page}
            pageSize={pageSize}
            onChange={(page: number, pageSize: number) => {
              handleChangPage(page, pageSize);
            }}
            total={posts?.data.meta?.totalPosts}
          />
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Service;
