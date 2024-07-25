import { Input } from "antd";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo1 from "../../assets/images/logo_1.png";
import logo2 from "../../assets/images/logo_2.png";
import CustomDropdown from "../Dropdown/index";
import Menu from "../Menu";
import "./header.scss";
import menuItems from "./props";

const { Search } = Input;

const Header = () => {
  const navigate = useNavigate();

  const onSearch = (value: string) => {
    if (value) {
      navigate(`/tim-kiem/${encodeURIComponent(value)}`);
    }
  };

  const [sidebarFix, setSidebarFix] = useState(false);

  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 110) {
        setSidebarFix(true);
      } else {
        setSidebarFix(false);
      }
    });
  }, []);

  return (
    <header className="header">
      <div className="header-info">
        <Link to="/">
          <div className="header-logo">
            <img src={logo1} alt="bệnh viện Nhi Đồng 2" />
            <div style={{ paddingTop: "12px" }}>
              <h1>BỆNH VIỆN NHI ĐỒNG 2</h1>
              <img
                src={logo2}
                alt="bệnh viện Nhi Đồng 2"
                style={{ width: "200px" }}
                className="img-fix"
              />
            </div>
          </div>
        </Link>

        <div className="header-search">
          <div className="header-searchbar">
            <Search
              placeholder="Tìm kiếm..."
              allowClear
              style={{ width: 300 }}
              className="placeholder"
              onSearch={onSearch}
            />
            <a
              href="https://www.facebook.com/bvnd2"
              target="_blank"
              style={{ margin: "0 6px" }}
            >
              <div>
                <i className="fa-brands fa-facebook-f"></i>
              </div>
            </a>
            <a
              href="https://www.youtube.com/@benhviennhiong2362"
              target="_blank"
            >
              <div>
                <i className="fa-brands fa-youtube"></i>
              </div>
            </a>
          </div>
          <div className="header-keywords">
            <Link to="/tim-kiem/Nhi%20Đồng%202">
              <span>Nhi Đồng 2</span>
            </Link>
            <Link
              to="/tim-kiem/thành%20tích%20nổi%20bật"
              style={{ marginLeft: "10px" }}
            >
              <span>thành tích nổi bật</span>
            </Link>
            <Link to="/tim-kiem/ghép%20gan" style={{ marginLeft: "10px" }}>
              <span>ghép gan</span>
            </Link>
            <Link to="/tim-kiem/thành%20công" style={{ marginLeft: "10px" }}>
              <span>thành công</span>
            </Link>
          </div>
        </div>
        <div className="header-menu">
          <i className="fa-solid fa-bars" onClick={toggleMenu}></i>
        </div>
      </div>
      <div
        className={
          sidebarFix ? "header-sidebar header-fixed" : "header-sidebar"
        }
      >
        <Link to="/">
          <i className="fa-solid fa-house-chimney"></i>
        </Link>
        <CustomDropdown title="GIỚI THIỆU" items={menuItems.introduction} />
        <CustomDropdown
          title="KHÁM CHỮA BỆNH"
          items={menuItems.medicalServices}
        />
        <CustomDropdown title="TIN TỨC" items={menuItems.news} />
        <CustomDropdown
          title="DÀNH CHO NHÂN VIÊN Y TẾ"
          items={menuItems.forMedicalStaff}
        />
      </div>
      <Menu isMenuVisible={isMenuVisible} setMenuVisible={setIsMenuVisible} />
    </header>
  );
};

export default Header;
