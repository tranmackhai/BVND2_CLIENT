import React, { useState, useEffect } from "react";
import "./menu.scss";
import logo from "../../assets/images/logo2.png";
import { Link } from "react-router-dom";

interface MenuProps {
  isMenuVisible: boolean;
  setMenuVisible: (isVisible: boolean) => void;
}

interface MenuItem {
  title: string;
  subItems?: MenuItem[];
  path?: string;
  externalLink?: string;
}

const Menu: React.FC<MenuProps> = ({ isMenuVisible, setMenuVisible }) => {
  const menuClass = isMenuVisible ? "menu menu-open" : "menu";
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});
  useEffect(() => {
    if (isMenuVisible) {
      setOpenItems({});
    }
  }, [isMenuVisible]);
  const toggleItem = (title: string) => {
    setOpenItems((prev) => ({ ...prev, [title]: !prev[title] }));
  };
  const handleCloseMenu = () => {
    setMenuVisible(false);
  };

  const menuItems: MenuItem[] = [
    {
      title: "Giới thiệu",
      subItems: [
        {
          title: "Lịch sử hình thành và phát triển",
          path: "/gioi-thieu/lich-su-hinh-thanh-va-phat-trien",
        },
        {
          title: "Chức năng - nhiệm vụ",
          path: "/gioi-thieu/chuc-nang-nhiem-vu",
        },
        {
          title: "Chính sách chất lượng",
          path: "/gioi-thieu/chinh-sach-chat-luong",
        },
        { title: "Cơ cấu tổ chức", path: "/gioi-thieu/co-cau-to-chuc" },
        { title: "Đội ngũ chuyên gia", path: "/gioi-thieu/doi-ngu-chuyen-gia" },
      ],
    },
    {
      title: "Khám chữa bệnh",
      subItems: [
        {
          title: "Lịch khám bệnh/ Tái khám",
          path: "/kham-chua-benh/lich-kham-benh-tai-kham",
        },
        { title: "Các chuyên khoa", path: "/kham-chua-benh/cac-chuyen-khoa" },
        { title: "Dịch vụ nổi bật", path: "/kham-chua-benh/dich-vu-noi-bat" },
        {
          title: "Bảng giá",
          subItems: [
            {
              title: "Bảng giá khám chữa bệnh",
              path: "/kham-chua-benh/bang-gia-kham-chua-benh",
            },
            {
              title: "Bảng giá các dịch vụ",
              path: "/kham-chua-benh/bang-gia-cac-dich-vu",
            },
          ],
        },
        {
          title: "Thủ tục khám bệnh",
          path: "/kham-chua-benh/thu-tuc-kham-benh",
        },
        {
          title: "Y học thường thức",
          path: "/kham-chua-benh/y-hoc-thuong-thuc",
        },
      ],
    },
    {
      title: "Tin tức",
      subItems: [
        { title: "Tin chuyên môn", path: "/tin-tuc/tin-chuyen-mon" },
        { title: "Tuyển dụng", path: "/tin-tuc/tuyen-dung" },
        { title: "Đào tạo", path: "/tin-tuc/dao-tao" },
        { title: "Chia sẻ yêu thương", path: "/tin-tuc/chia-se-yeu-thuong" },
        {
          title: "Đấu thầu - Mời chào giá",
          path: "/tin-tuc/dau-thau-moi-chao-gia",
        },
        { title: "Hợp tác quốc tế", path: "/tin-tuc/hop-tac-quoc-te" },

        {
          title: "Hoạt động đoàn thể",
          subItems: [
            {
              title: "Công tác Đảng",
              path: "/tin-tuc/cong-tac-dang",
            },
            {
              title: "Đoàn thanh niên",
              path: "/tin-tuc/doan-thanh-nien",
            },
            {
              title: "Công đoàn",
              path: "/tin-tuc/cong-doan",
            },
            {
              title: "Hội cựu chiến binh",
              path: "/tin-tuc/hoi-cuu-chien-binh",
            },
          ],
        },
      ],
    },
    {
      title: "Dành cho nhân viên y tế",
      subItems: [
        {
          title: "Thông tin y học chứng cứ",
          path: "/danh-cho-nhan-vien-y-te/thong-tin-y-hoc-chung-cu",
        },
        {
          title: "Phác đồ điều trị",
          path: "/danh-cho-nhan-vien-y-te/phac-do-dieu-tri",
        },
        {
          title: "Nghiên cứu khoa học",
          path: "/danh-cho-nhan-vien-y-te/nghien-cuu-khoa-hoc",
        },
        {
          title: "Mã ICD",
          externalLink: "https://icd.kcb.vn/#/search/search-global",
        },
      ],
    },
  ];

  const renderMenuItem = (item: MenuItem, level: number = 0) => (
    <div key={item.title}>
      <div
        className={level > 0 ? "sub-item" : "menu-item"}
        onClick={() => {
          if (item.subItems) {
            toggleItem(item.title);
          }
        }}
      >
        {item.externalLink ? (
          <a
            href={item.externalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="link-menu-fix"
          >
            {item.title}
          </a>
        ) : item.path ? (
          <Link
            to={item.path}
            onClick={handleCloseMenu}
            className="link-menu-fix"
          >
            {item.title}
          </Link>
        ) : (
          <span>{item.title}</span>
        )}
        {item.subItems && (
          <i
            className={`fa-solid fa-chevron-${
              openItems[item.title] ? "up" : "down"
            }`}
          ></i>
        )}
      </div>
      {item.subItems && openItems[item.title] && (
        <div>
          {item.subItems.map((subItem) => renderMenuItem(subItem, level + 1))}
        </div>
      )}
    </div>
  );

  return (
    <form className={menuClass}>
      <div className="menu-container">
        <i
          className="fas fa-times cart-close close-fix"
          onClick={handleCloseMenu}
        ></i>
        <img src={logo} alt="Bệnh viện Nhi Đồng 2" />
        <div style={{ width: "100%" }}>
          {menuItems.map((menuItem) => (
            <div className="menu-list" key={menuItem.title}>
              {renderMenuItem(menuItem)}
            </div>
          ))}
        </div>
      </div>
    </form>
  );
};

export default Menu;
