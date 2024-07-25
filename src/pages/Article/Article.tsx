import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLocation, useParams } from "react-router-dom";
import { ClockCircleOutlined, FileSyncOutlined } from "@ant-design/icons";
import { Image, Spin } from "antd";
import { usePosts } from "../../hooks/usePost";
import SideBar from "../../components/SideBar";
import { format } from "date-fns";
import ReactHtmlParser from "react-html-parser";
import NewPost from "../../components/NewPost";

const Article: React.FC = () => {
  const location = useLocation();
  const groupCategorySlug = location.pathname.split("/")[2];

  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<any>(null);

  const { posts, isLoading } = usePosts({
    slug,
    groupCategorySlug,
  });

  useEffect(() => {
    if (posts && posts?.data) {
      const foundPost = posts?.data.data.find(
        (post: any) => post.slug === slug
      );
      setPost(foundPost);
    }
  }, [slug, posts]);

  if (isLoading) return <Spin />;

  const openFileInNewTab = (fileUrl: string) => {
    // Use fetch to get the file as blob
    fetch(`http://localhost:4646${fileUrl}`)
      .then(response => response.blob())
      .then(blob => {
        // Create a blob URL
        const url = URL.createObjectURL(blob);
        // Open the blob URL in a new tab
        window.open(url, '_blank');
      })
      .catch(error => console.error('Error opening file:', error));
  };

  console.log(post);
  return (
    <HelmetProvider>
      {post && (
        <div>
          <Helmet>
            <meta charSet="utf-8" />
            <title>{post.title}</title>
            <meta name="description" content="Helmet application" />
          </Helmet>
          <div
            className="posts-box"
            style={{ display: "flex", backgroundColor: "transparent" }}
          >
            <div
              className="witdh-lg-100"
              style={{
                width: "75%",
                backgroundColor: "#fff",
                padding: "12px",
                borderRadius: "12px",
              }}
            >
              <h1
                style={{
                  fontWeight: "700",
                  fontSize: "24px",
                  lineHeight: "1.2",
                }}
              >
                {post.title}
              </h1>
              <div
                style={{
                  display: "flex",
                  borderTop: "1px solid #DDDDDD",
                  borderBottom: "1px solid #DDDDDD",
                  padding: "10px 0",
                  marginBottom: "16px",
                }}
              >
                <p
                  style={{
                    marginBottom: "0",
                    color: "#555555",
                    fontSize: "14px",
                  }}
                >
                  <ClockCircleOutlined />{" "}
                  <span>{format(new Date(post.updatedAt), "dd/MM/yyyy")}</span>
                </p>
              </div>
              <div className="article">
                {ReactHtmlParser(post.content, {
                  transform: (node) => {
                    if (
                      node.type === "tag" &&
                      node.name === "img" &&
                      node.attribs
                    ) {
                      return (
                        <Image
                          key={node.attribs.src}
                          src={node.attribs.src}
                          alt={node.attribs.alt || ""}
                          style={{ maxWidth: "100%" }}
                        />
                      );
                    }
                    return undefined;
                  },
                })}
              </div>
              {post.files &&
                JSON.parse(post.files).map((file: string, index: number) => (
                  <div className="files_container" key={index}>
                    Các file đính kèm:{" "}
                    <div className="files">
                      <span className="image-file">
                        <FileSyncOutlined />
                      </span>
                      <span className="title-file">
                        <span
                          style={{ cursor: "pointer", color: "blue" }}
                          onClick={() => openFileInNewTab(file)}
                        >
                          {file.split("/").pop()}
                        </span>
                      </span>
                    </div>
                  </div>
                ))}
              <div style={{ paddingTop: "12px", paddingRight: "30px" }}>
                <p
                  style={{
                    fontWeight: 500,
                    fontSize: "16px",
                    textAlign: "right",
                    marginBottom: "24px",
                  }}
                >
                  Đăng bởi: <strong>Bệnh viện nhi đồng 2</strong>
                </p>
                <div className="sharethis-inline-share-buttons"></div>
                <NewPost />
              </div>
            </div>
            <div
              className="witdh-lg-none"
              style={{ width: "25%", marginLeft: "12px" }}
            >
              <SideBar />
            </div>
          </div>
        </div>
      )}
    </HelmetProvider>
  );
};

export default Article;
