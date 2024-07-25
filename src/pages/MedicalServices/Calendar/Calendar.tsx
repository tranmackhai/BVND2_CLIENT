import { Image } from "antd";
import { Link } from "react-router-dom";
import img from "../../../assets/images/KHOA SỨC KHỎE TRẺ EM.png";
import img2 from "../../../assets/images/KHOA SỨC KHỎE TRẺ EM (2).png";
import img3 from "../../../assets/images/KHOA SỨC KHỎE TRẺ EM (4).png";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Calendar = () => {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Lịch khám bệnh | Website Bệnh viện nhi đồng 2</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <div className="posts-path">
          <Link to="/" style={{ color: "#000" }}>
            <p>
              Trang Chủ <i className="fa-solid fa-angles-right"></i>
            </p>
          </Link>
          <p style={{ fontWeight: "700" }}>Lịch Khám Bệnh / Tái Khám</p>
        </div>
        <div className="posts-box">
          <Image
            src={img}
            width="100%"
            preview={{
              mask: <span style={{ color: "white" }}>Xem ảnh</span>,
            }}
          />
          <Image
            src={img2}
            width="100%"
            preview={{
              mask: <span style={{ color: "white" }}>Xem ảnh</span>,
            }}
          />
          <Image
            src={img3}
            width="100%"
            preview={{
              mask: <span style={{ color: "white" }}>Xem ảnh</span>,
            }}
          />
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Calendar;
