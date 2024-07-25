import { Image } from "antd";
import { Link } from "react-router-dom";
import img1 from "../../../assets/images/bangiamdoc.png";
import img2 from "../../../assets/images/phongchucnang.png";
import img3 from "../../../assets/images/lamsangngoai.png";
import img4 from "../../../assets/images/lamsangnoi.png";
import img5 from "../../../assets/images/CLS.png";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Organization = () => {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Tổ chức bệnh viện | Website Bệnh viện nhi đồng 2</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <div className="posts-path">
          <Link to="/" style={{ color: "#000" }}>
            <p>
              Trang Chủ <i className="fa-solid fa-angles-right"></i>
            </p>
          </Link>
          <p style={{ fontWeight: "700" }}>Sơ Đồ Tổ Chức</p>
        </div>
        <div className="posts-box">
          <Image
            src={img1}
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
          <Image
            src={img4}
            width="100%"
            preview={{
              mask: <span style={{ color: "white" }}>Xem ảnh</span>,
            }}
          />
          <Image
            src={img5}
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

export default Organization;
