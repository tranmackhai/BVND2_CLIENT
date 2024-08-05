// src/components/PageTemplate.tsx
import React, { useState, useEffect, useCallback } from "react";
import { Spin, Pagination } from "antd";
import { useNavigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { usePosts } from "../../hooks/usePost";
import { format } from "date-fns";
import ReactHtmlParser from "react-html-parser";
import { BASE_URL } from "../../constants";

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

type PageTemplateProps = {
  title: string;
  groupCategorySlug: string;
  description?: string;
  breadcrumb: React.ReactNode;
  sidebar: React.ReactNode;
  urlPath: string; 
};

const PageTemplate: React.FC<PageTemplateProps> = ({
  title,
  groupCategorySlug,
  description,
  breadcrumb,
  sidebar,
  urlPath, 
}) => {
  const navigate = useNavigate();
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);

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

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{title} | Website Bệnh viện nhi đồng 2</title>
          <meta name="description" content={description || "Helmet application"} />
        </Helmet>
        <div className="posts-path">
          {breadcrumb}
        </div>
        <div className="posts-box" style={{ backgroundColor: "transparent" }}>
          <h2 style={{ marginBottom: "16px", letterSpacing: "2px" }}>
            {title}
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
              <div>
                {posts?.data.data.map((post: TPostsDto, index: number) => (
                  <div
                    key={index}
                    onClick={() => {
                      navigate(`${urlPath}/${post.slug}`);
                    }}
                  >
                    <div className="box-list">
                      <div className="box-list-img">
                        <img src={`${BASE_URL.BASE_URL_IMAGE}${post.thumbnail}`} />
                      </div>
                      <div className="box-list-content">
                        <p className="box-list-content-date">
                          {format(new Date(post.updatedAt), "dd/MM/yyyy")}
                        </p>
                        <p className="box-list-content-title">{post.title}</p>
                        <div className="box-list-content-summary">
                          {ReactHtmlParser(post.content)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
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
            <div className="none" style={{ width: "25%", marginLeft: "12px" }}>
              {sidebar}
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default PageTemplate;
