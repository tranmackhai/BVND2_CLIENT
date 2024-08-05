import { Pagination, Spin } from "antd";
import React, { useCallback, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";
import SideBar from "../../components/SideBar/SideBar";
import { usePosts } from "../../hooks/usePost";
import { BASE_URL } from "../../constants/index";
import ReactHtmlParser from "react-html-parser";
import thumnail_default from "../../assets/images/thumbnail_default.png";

const Search: React.FC = () => {
  const location = useLocation();
  const keyword = decodeURIComponent(location.pathname.split("/")[2] || "");

  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);

  const { posts, isLoading } = usePosts({ keyword, isActive: true });

  const handleChangPage = useCallback((page: number, pageSize: number) => {
    setPage(page);
    setPageSize(pageSize);
  }, []);

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Tìm kiếm: {keyword} | Website Bệnh viện nhi đồng 2</title>
          <meta
            name="description"
            content={`Kết quả tìm kiếm cho "${keyword}" tại Bệnh viện nhi đồng 2`}
          />
        </Helmet>
        <div className="posts-path">
          <Link to="/" style={{ color: "#000" }}>
            <p>
              Trang Chủ <i className="fa-solid fa-angles-right"></i>
            </p>
          </Link>
          <p style={{ fontWeight: "700" }}>
            Tìm kiếm: <span>{keyword}</span>
          </p>
        </div>
        <div className="posts-box" style={{ backgroundColor: "transparent" }}>
          <h2 style={{ marginBottom: "16px", letterSpacing: "2px" }}>
            {keyword}
          </h2>
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
              {isLoading ? (
                <Spin />
              ) : (
                <div>
                  {posts?.data?.data && posts.data.data.length > 0 ? (
                    posts.data.data.map((post: any) => (
                      <Link to={`/${post.slug}`} key={post.slug}>
                        <div className="box-list">
                          <div className="box-list-img">
                            <img
                              src={
                                post.thumbnail
                                  ? `${BASE_URL.BASE_URL_IMAGE}${post.thumbnail}`
                                  : `${thumnail_default}`
                              }
                              alt={post.title}
                            />
                          </div>
                          <div className="box-list-content">
                            <span className="box-list-content-date">
                              {post.createdAt}
                            </span>
                            <p className="box-list-content-title">
                              {post.title}
                            </p>
                            <div
                              className="specialist-content"
                              style={{ maxHeight: "32px" }}
                            >
                              {ReactHtmlParser(post.content)}
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <p style={{ fontSize: "1rem" }}>
                      Không tìm thấy kết quả phù hợp.
                    </p>
                  )}
                  <Pagination
                    style={{ marginTop: "12px" }}
                    current={page}
                    total={posts?.data?.meta?.totalPosts}
                    pageSize={pageSize}
                    onChange={(page: number, pageSize: number) => {
                      handleChangPage(page, pageSize);
                    }}
                  />
                </div>
              )}
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

export default Search;
