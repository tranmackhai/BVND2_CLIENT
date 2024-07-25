import type { MenuProps } from "antd";
import { Link } from "react-router-dom";

const menuItems: { [key: string]: MenuProps["items"] } = {
  introduction: [
    {
      key: "1",
      type: "group",
      children: [
        {
          key: "1-1",
          label: (
            <Link to="/gioi-thieu/lich-su-hinh-thanh-va-phat-trien">
              Lịch sử hình thành và phát triển
            </Link>
          ),
        },
        {
          key: "1-2",
          label: (
            <Link to="/gioi-thieu/chuc-nang-nhiem-vu">
              Chức năng - Nhiệm vụ
            </Link>
          ),
        },
        {
          key: "1-3",
          label: (
            <Link to="/gioi-thieu/chinh-sach-chat-luong">
              Chính sách chất lượng
            </Link>
          ),
        },
        {
          key: "1-4",
          label: <Link to="/gioi-thieu/co-cau-to-chuc">Cơ cấu tổ chức</Link>,
        },
        {
          key: "1-5",
          label: (
            <Link to="/gioi-thieu/doi-ngu-chuyen-gia">Đội ngũ chuyên gia</Link>
          ),
        },
      ],
    },
  ],
  medicalServices: [
    {
      key: "2",
      type: "group",
      children: [
        {
          key: "2-1",
          label: (
            <Link to="/kham-chua-benh/lich-kham-benh-tai-kham">
              Lịch khám bệnh/ Tái khám
            </Link>
          ),
        },
        {
          key: "2-2",
          label: (
            <Link to="/kham-chua-benh/cac-chuyen-khoa">Các chuyên khoa</Link>
          ),
        },
        {
          key: "2-3",
          label: (
            <Link to="/kham-chua-benh/dich-vu-noi-bat">Dịch vụ nổi bật</Link>
          ),
        },
        {
          key: "2-4",
          label: "Bảng giá",
          children: [
            {
              key: "2-4-1",
              label: (
                <Link to="/kham-chua-benh/bang-gia-kham-chua-benh">
                  Bảng giá khám chữa bệnh
                </Link>
              ),
            },
            {
              key: "2-4-2",
              label: (
                <Link to="/kham-chua-benh/bang-gia-cac-dich-vu">
                  Bảng giá các dịch vụ
                </Link>
              ),
            },
          ],
        },
        {
          key: "2-5",
          label: (
            <Link to="/kham-chua-benh/thu-tuc-kham-benh">
              Thủ tục khám bệnh
            </Link>
          ),
        },
        {
          key: "2-6",
          label: (
            <Link to="/kham-chua-benh/y-hoc-thuong-thuc">
              Y học thường thức
            </Link>
          ),
        },
      ],
    },
  ],
  news: [
    {
      key: "3",
      type: "group",
      children: [
        {
          key: "3-1",
          label: <Link to="/tin-tuc/tin-chuyen-mon">Tin chuyên môn</Link>,
        },
        {
          key: "3-2",
          label: <Link to="/tin-tuc/tuyen-dung">Tuyển dụng</Link>,
        },
        {
          key: "3-3",
          label: <Link to="/tin-tuc/dao-tao">Đào tạo</Link>,
        },
        {
          key: "3-4",
          label: (
            <Link to="/tin-tuc/chia-se-yeu-thuong">Chia sẻ yêu thương</Link>
          ),
        },
        {
          key: "3-5",
          label: (
            <Link to="/tin-tuc/dau-thau-moi-chao-gia">
              Đấu thầu - Mời chào giá
            </Link>
          ),
        },
        {
          key: "3-6",
          label: <Link to="/tin-tuc/hop-tac-quoc-te">Hợp tác quốc tế</Link>,
        },
        {
          key: "3-7",
          label: "Hoạt động đoàn thể",
          children: [
            {
              key: "3-7-1",
              label: <Link to="/tin-tuc/cong-tac-dang">Công tác đảng</Link>,
            },
            {
              key: "3-7-2",
              label: <Link to="/tin-tuc/doan-thanh-nien">Đoàn thanh niên</Link>,
            },
            {
              key: "3-7-3",
              label: <Link to="/tin-tuc/cong-doan">Công đoàn</Link>,
            },
            {
              key: "3-7-4",
              label: (
                <Link to="/tin-tuc/hoi-cuu-chien-binh">Hội cựu chiến binh</Link>
              ),
            },
          ],
        },
      ],
    },
  ],
  forMedicalStaff: [
    {
      key: "4",
      type: "group",
      children: [
        {
          key: "4-1",
          label: (
            <Link to="/danh-cho-nhan-vien-y-te/thong-tin-y-hoc-chung-cu">
              Thông tin y học chứng cứ
            </Link>
          ),
        },
        {
          key: "4-2",
          label: (
            <Link to="/danh-cho-nhan-vien-y-te/phac-do-dieu-tri">
              Phác đồ điều trị
            </Link>
          ),
        },
        {
          key: "4-3",
          label: (
            <Link to="/danh-cho-nhan-vien-y-te/nghien-cuu-khoa-hoc">
              Nghiên cứu khoa học
            </Link>
          ),
        },
        {
          key: "4-4",
          label: (
            <a href="https://icd.kcb.vn/" target="_blank">
              Mã ICD
            </a>
          ),
        },
      ],
    },
  ],
};

export default menuItems;
