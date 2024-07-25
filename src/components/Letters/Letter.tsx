import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Spin, Image } from "antd";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./letter.scss";
import { usePosts } from "../../hooks/usePost";
import { format } from "date-fns";

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

const Letter: React.FC = () => {
  const groupCategorySlug = "chia-se-yeu-thuong";

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
    .slice(0, 6);
  return (
    <section className="section letter">
      <div className="box letter-box">
        <h2 className="h2">CẢM NHẬN CỦA THÂN NHÂN BỆNH NHI</h2>
        <hr
          style={{
            background:
              "linear-gradient(to right, #228b22, rgba(51, 255, 102, 0))",
          }}
          className="gradient-line"
        />
        <div>
          <Swiper
            style={{ paddingBottom: "36px" }}
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              993: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1201: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            modules={[Pagination]}
          >
            {filteredPosts.map((post: TPostsDto, index: number) => (
              <SwiperSlide key={index}>
                <div className="letter-list">
                  <Image
                    className="img"
                    src={`http://localhost:4646${post.thumbnail}`}
                    alt={`Hình ảnh của ${post.title}`}
                    width="100%"
                    preview={{
                      mask: <span style={{ color: "white" }}>Xem ảnh</span>,
                    }}
                  />
                  <p> {format(new Date(post.updatedAt), "dd/MM/yyyy")} </p>
                  <h3>{post.title}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Letter;
