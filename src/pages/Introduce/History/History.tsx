import { Image } from "antd";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import img from "../../../assets/images/Grall-Hospital.jpg";
import img2 from "../../../assets/images/41_Pano_trien lam 4 the ky Phap - Viet -FINAL-061(1).jpg";
import img3 from "../../../assets/images/sdsds(1).jpg";
import img4 from "../../../assets/images/1(5).jpg";
import img5 from "../../../assets/images/D4wdmhC.jpg";
import img6 from "../../../assets/images/_facebook_1504185329625.jpg";
import img7 from "../../../assets/images/20_big.jpg";
import img8 from "../../../assets/images/15115771056_89d8a692ce_o.jpg";
import img9 from "../../../assets/images/15138793245_e7e31fbe63_o.jpg";
import img10 from "../../../assets/images/uyuy.jpg";
import img11 from "../../../assets/images/BV-nhi-dong.jpg";

const sections = [
  {
    paragraphs: [
      <>
        Vào năm 1862, Quân đội Pháp thành lập <strong>Bệnh viện Quân sự</strong>{" "}
        (Tiếng Pháp là Hôpital militaire) khi họ mới xâm chiếm Nam Kỳ. Cơ sở này
        vào cuối thập niên 1870 chuyển về số 14 rue Lagrandière, tức địa điểm
        hiện nay (14 Lý Tự Trọng, P. Bến Nghé, Q.1, TP.HCM).
      </>,
    ],
    images: [img, img2, img3, img4],
  },
  {
    paragraphs: [
      <>
        Tại cơ sở này nhà bác học Albert Calmette đã thành lập Viện Pasteur
        (Pasteur-Institut) đầu tiên ở ngoài nước Pháp vào năm 1891.
      </>,
    ],
    images: [img5],
  },
  {
    paragraphs: [
      <>
        Cấu trúc các tòa nhà trong khuôn viên đều là sườn sắt tiền chế đem ráp
        lại trên nền bằng đá. Mọi vật liệu được mang từ Pháp sang.
      </>,
    ],
    images: [img6, img7],
  },
  {
    paragraphs: [
      <>
        Từ năm 1905 trở đi cơ sở y tế này dưới sự điều hành của bác sĩ Charles
        Grall đã mở cửa chữa trị cho mọi thành phần, quân sự cũng như dân sự kể
        cả dân bản xứ.
      </>,
    ],
    images: [img8],
  },
  {
    paragraphs: [
      <>
        - Năm 1925, Bệnh viện Quân sự chính thức đổi tên thành{" "}
        <strong>"Bệnh viện Grall"</strong>
        để vinh danh Giám đốc Y tế Nam Kỳ (bác sĩ Charles Grall).
      </>,
    ],
    images: [img9],
  },
  {
    paragraphs: [
      <>
        - Tháng 4/1945 (thời Đệ Nhị Thế chiến) bệnh viện bị trúng bom, phá sập
        mé phía bắc, tiêu hủy các phòng thí nghiệm.
      </>,
      <>
        - Năm 1956, dưới chính thể Việt Nam Cộng Hòa, chính phủ Pháp ký biên bản
        tiếp tục điều hành Bệnh viện Grall, thuộc Bộ ngoại giao Pháp (Bệnh viện
        có 560 giường).
      </>,
    ],
    images: [img10],
  },
  {
    paragraphs: [
      <>
        - Năm 1976, Người Pháp rút đi, Bệnh viện Grall được chuyển giao cho nhà
        chức trách Cộng hòa Xã hội Chủ nghĩa Việt Nam.
      </>,
      <>
        - Năm 1978, Bệnh viện Grall đổi tên thành{" "}
        <strong>Bệnh viện Nhi đồng 2</strong> và trở thành bệnh viện chuyên khoa
        Nhi phụ trách khám và điều trị bệnh cho các bé từ 0 đến dưới 16 tuổi.
      </>,
    ],
    images: [img11],
  },
];

const History = () => {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            Lịch sử hình thành và phát triển | Website Bệnh viện nhi đồng 2
          </title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <div className="posts-path">
          <Link to="/" style={{ color: "#000" }}>
            <p>
              Trang Chủ <i className="fa-solid fa-angles-right"></i>
            </p>
          </Link>
          <p style={{ fontWeight: "700" }}>Lịch Sử Hình Thành Và Phát Triển</p>
        </div>
        <div className="posts-box">
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              {section.paragraphs.map((paragraph, paragraphIndex) => (
                <p className="p-text" key={paragraphIndex}>
                  {paragraph}
                </p>
              ))}
              {section.images.map((image, imageIndex) => (
                <div className="flex-box" key={imageIndex}>
                  <Image
                    src={image}
                    width="80%"
                    preview={{
                      mask: <span style={{ color: "white" }}>Xem ảnh</span>,
                    }}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </HelmetProvider>
  );
};

export default History;
