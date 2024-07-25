import React from "react";
import { Row, Col } from "antd";
import "./footer.scss";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-information">
        <h2>BỆNH VIỆN NHI ĐỒNG 2</h2>
        <hr
          style={{
            width: "85%",
            margin: "12px auto 18px 0",
          }}
        />
        <Row
          gutter={[16, 8]}
          justify="space-between"
          align="middle"
        >
          <Col md={{ span: 8 }} className="footer-contact fixed">
            <p style={{ marginBottom: "8px" }}>
              Địa chỉ: 14 Lý Tự Trọng, Phường Bến Nghé, Quận 1, TP. HCM
            </p>
            <p>
              <i className="fa-solid fa-phone"></i> Tel: (028) 38295724. (giờ
              hành chính)
            </p>
            <p>
              <i className="fa-solid fa-fax"></i> Fax: (028) 38295723.
            </p>
            <p>
              <i className="fa-solid fa-envelope"></i> Email:
              benhviennhi@benhviennhi.org.vn
            </p>
            <hr
              style={{
                margin: "12px auto 4px 0",
              }}
            />
            <p style={{ fontWeight: "700" }}>Liên kết mạng xã hội:</p>
            <div style={{ display: "flex" }}>
              <a href="https://www.facebook.com/bvnd2" target="_blank">
                <div
                  style={{ backgroundColor: "#4267B2" }}
                  className="footer-social-link"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </div>
              </a>
              <a
                href="https://www.youtube.com/@benhviennhiong2362"
                target="_blank"
              >
                <div
                  style={{ backgroundColor: "#FF0000", marginLeft: "12px" }}
                  className="footer-social-link"
                >
                  <i className="fa-brands fa-youtube"></i>
                </div>
              </a>
            </div>
          </Col>

          <Col md={{ span: 8 }} className="footer-services fixed">
            <b>1. KHÁM BỆNH THEO YÊU CẦU CHẤT LƯỢNG CAO</b>
            <p>
              <i className="fa-solid fa-phone"></i> Điện thoại: (028) 1080
            </p>
            <hr />
            <b>2. KHÁM DỊCH VỤ PHẪU THUẬT TRONG NGÀY</b>
            <p>
              <i className="fa-solid fa-phone"></i> Điện thoại: (028) 22103982
            </p>
            <hr />
            <b>3. ĐƯỜNG DÂY NÓNG</b>
            <p>
              <i className="fa-solid fa-phone"></i> Điện thoại: (028) 19009095
            </p>
          </Col>
          <Col md={{ span: 8 }} className="footer-map fixed">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.387954825168!2d106.69946927573606!3d10.78156945909738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f49a8134407%3A0x8b3ac844e0a002a4!2zQuG7h25oIHZp4buHbiBOaG7huqVjIE5o4bqtdSDEkOG7m25nIDI!5e0!3m2!1svi!2s!4v1713495876524!5m2!1svi!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
        </Row>
      </div>
      <div className="footer-copyright">
        <p>
          Copyright 2024 © <b>Bệnh viện Nhi Đồng 2</b> 
        </p>
      </div>
    </footer>
  );
};

export default Footer;
