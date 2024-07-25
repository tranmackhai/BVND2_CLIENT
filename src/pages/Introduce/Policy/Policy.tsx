import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Image } from "antd";
import image from "../../../assets/images/CSCL.png";

const Policy = () => {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Chính sách chất lượng | Website Bệnh viện nhi đồng 2</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <div className="posts-path">
          <Link to="/" style={{ color: "#000" }}>
            <p>
              Trang Chủ <i className="fa-solid fa-angles-right"></i>
            </p>
          </Link>
          <p style={{ fontWeight: "700" }}>Chính Sách Chất Lượng</p>
        </div>
        <div
          className="posts-box"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Image
            src={image}
            preview={{
              mask: <span style={{ color: "white" }}>Xem ảnh</span>,
            }}
          />
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Policy;
