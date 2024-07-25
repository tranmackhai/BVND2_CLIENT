import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Spin } from "antd";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { usePosts } from "../../hooks/usePost";
import { format } from "date-fns";
import ReactHtmlParser from "react-html-parser";
import "swiper/css";
import "./news.scss";

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

const News: React.FC = () => {
  const groupCategorySlug = "tin-chuyen-mon";

  const { posts, refetch, isLoading } = usePosts({
    groupCategorySlug,
  });

  useEffect(() => {
    refetch();
  }, []);

  if (isLoading) {
    return <Spin />;
  }

  const filteredPosts = posts?.data?.data
    .filter((post: TPostsDto) => post.isActive)
    .slice(0, 3);

  return (
    <section className="section news">
      <div className="box news-box">
        <div className="news-title">
          <h2 className="h2">TIN TỨC</h2>
          <div>
            <Link to="/tin-tuc/tin-chuyen-mon">
              <p>Xem Thêm Tin Tức</p>
            </Link>
            <i className="fa-solid fa-chevron-right"></i>
          </div>
        </div>
        <hr
          style={{
            background:
              "linear-gradient(to right, #cd950c, rgba(51, 255, 102, 0))",
          }}
          className="gradient-line"
        />
        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={true}
            modules={[Pagination]}
            breakpoints={{
              993: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            {filteredPosts.map((post: TPostsDto, index: number) => (
              <SwiperSlide key={index}>
                <Link to={`/tin-tuc/tin-chuyen-mon/${post.slug}`}>
                  <div className="news-list">
                    <p className="news-list-time">
                      {format(new Date(post.updatedAt), "dd/MM/yyyy")}{" "}
                    </p>
                    <h3 className="news-list-title">{post.title}</h3>
                    <p className="news-list-content">
                      {" "}
                      {ReactHtmlParser(post.content)}
                    </p>
                    <p className="news-list-check">Xem thêm</p>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default News;
