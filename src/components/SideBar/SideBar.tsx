import { Spin } from "antd";
import { format } from "date-fns"; // Import format function from date-fns
import React from "react";
import { Link } from "react-router-dom";
import img5 from "../../assets/images/11111111111111(3).jpg";
import img3 from "../../assets/images/33333333333333(1).jpg";
import img2 from "../../assets/images/IUIU.jpg";
import img4 from "../../assets/images/sddddd.jpg";
import { BASE_URL } from "../../constants";
import thumnail_default from "../../assets/images/thumbnail_default.png";
import { usePosts } from "../../hooks/usePost";
import "./sideBar.scss";

type TPostsDto = {
  title: string;
  content: string;
  thumbnail?: string;
  file?: string;
  isActive: boolean;
  groupCategorySlug?: string;
  slug?: string;
  updatedAt: string;
};

const SideBar: React.FC = () => {
  const { posts, isLoading } = usePosts({
    isActive: true,
    groupCategorySlug: "",
  });

  if (isLoading) {
    return <Spin />;
  }

  const filteredPosts = posts?.data?.data
    .filter((post: TPostsDto) => post.isActive)
    .slice(0, 5);

  return (
    <div className="sidebar">
      <div className="sidebar-first">
        <div className="sidebar-title">THỜI GIAN LÀM VIỆC</div>
        <div className="sidebar-content">
          <p>HÀNH CHÍNH: 7H00 - 16H30 (THỨ 2 - 6)</p>
          <p>KHÁM & CẤP CỨU: 24/24</p>
        </div>
      </div>
      <div>
        <div className="sidebar-second">
          <div className="sidebar-box">
            <p style={{ marginBottom: "0", fontSize: "14px" }}>TIN TỨC MỚI</p>
          </div>
          {filteredPosts && filteredPosts.length > 0 ? (
            filteredPosts.map((post: TPostsDto, index: number) => (
              <Link
                // to={`/${groupCategorySlugfirst}/${groupCategorySlug}/${post.slug}`}
                to={`/${post.slug}`}
                key={index}
              >
                <div className="sidebar-box-item">
                  <div style={{ width: "40%" }}>
                    <img
                      src={
                        post.thumbnail
                          ? `${BASE_URL.BASE_URL_IMAGE}${post.thumbnail}`
                          : `${thumnail_default}`
                      }
                      alt={post.title}
                    />
                  </div>
                  <div style={{ marginLeft: "6px", width: "60%" }}>
                    <p style={{ color: "#808080", fontSize: "11px" }}>
                      {format(new Date(post.updatedAt), "dd/MM/yyyy")}
                    </p>
                    <p className="sidebar-box-content">{post.title}</p>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p>Không có dữ liệu</p>
          )}
        </div>
      </div>
      <div className="sidebar-listbox">
        <a
          href="https://drive.google.com/file/d/1YJMlHFx4igdBZNfSIhi9X5R5L-7tooWH/view"
          target="_blank"
        >
          <img
            src="http://www.benhviennhi.org.vn//upload/files/%C3%82N/PAYMENT-02.jpg"
            alt="Các hình thức thanh toán"
          />
        </a>
      </div>
      {/* <div className="sidebar-listbox">
        <a
          href="http://benhviennhi.org.vn/news/detail/5798/cac-van-ban-lien-quan-den-cong-tac-phong--chong-dich-benh-covid-19.html"
          target="_blank"
        >
          <img
            src={img1}
            alt="Văn bản chỉ đạo công tác phòng, chống dịch COVID-19"
          />
        </a>
      </div> */}
      <div className="sidebar-listbox">
        <a
          href="https://moh.gov.vn/workspace/Pages/DuongDayNong_V2.aspx"
          target="_blank"
        >
          <img
            src="http://www.benhviennhi.org.vn//upload/images/DSG.jpg"
            alt="Đường dây nóng ngành y tế"
          />
        </a>
      </div>
      <div className="sidebar-listbox">
        <a href="https://icd.kcb.vn/#/search/search-global" target="_blank">
          <img src={img2} alt="Tra cứu mã ICD" />
        </a>
      </div>
      <div className="sidebar-listbox">
        <a
          href="https://www.medinet.hochiminhcity.gov.vn/default.aspx"
          target="_blank"
        >
          <img src={img3} alt="Cổng thông tin sở y tế TP.HCM" />
        </a>
      </div>
      <div className="sidebar-listbox">
        <a
          href="https://phapdien.moj.gov.vn/Pages/chi-tiet-bo-phap-dien.aspx"
          target="_blank"
        >
          <img
            src="http://www.benhviennhi.org.vn//upload/images/Tieu%20de%20Bo%20phap%20dien1.jpg"
            alt="Bộ pháp điển"
          />
        </a>
      </div>
      <div className="sidebar-listbox">
        <a
          href="https://cas.tphcm.gov.vn/cas/login?service=https://lienthongvanban.tphcm.gov.vn:443/app-store/shiro-cas&orgname=Trung%20t%E2m%20C%F4ng%20ngh%C7%20Th%F4ng%20tin%20v%E0%20Truy%C1n%20th%F4ng%20TP.HCM"
          target="_blank"
        >
          <img src={img4} alt="Liên thông văn bản" />
        </a>
      </div>
      <div className="sidebar-listbox">
        <a href="https://pddt.medinet.org.vn/Home/HDSD" target="_blank">
          <img src={img5} alt="Kho phác đồ điều trị" />
        </a>
      </div>
      <div className="sidebar-listbox">
        <a
          href="https://thuvienphapluat.vn/phap-luat/ho-tro-phap-luat/thuc-hien-bao-cao-va-ghi-nhan-su-co-y-khoa-tai-co-so-kham-chua-benh-the-nao-cac-hinh-thuc-bao-cao-s-30669.html"
          target="_blank"
        >
          <img
            src="http://www.benhviennhi.org.vn//upload/images/jhjhj.jpg"
            alt="Báo cáo sự cố y khoa"
          />
        </a>
      </div>
      {/* <div className="sidebar-listbox">
        <a
          href="http://www.benhviennhi.org.vn/news/detail/7041/lich-tiep-cong-dan-cua-giam-Doc-benh-vien-nhi-Dong-2---nam-2024.html"
          target="_blank"
        >
          <img src={img6} alt="Lịch tiếp công dân" />
        </a>
      </div>
      <div className="sidebar-listbox">
        <a
          href="http://www.benhviennhi.org.vn/news/detail/6908/quyet-Dinh-so-1238qD-bvnD2-ve-ban-hanh-quy-che-phat-ngon-va-cung-cap-thong-tin-cho-bao-chi-cua-benh-vien-nhi-Dong-2.html"
          target="_blank"
        >
          <img src={img7} alt="Quy chế phát ngôn" />
        </a>
      </div>
      <div className="sidebar-listbox">
        <a
          href="http://www.benhviennhi.org.vn/news/detail/7054/cong-bo-chinh-sach-bao-mat-va-khieu-nai-phan-hoi-lien-quan-xet-nghiem.html"
          target="_blank"
        >
          <img
            src="http://www.benhviennhi.org.vn//upload/images/AN-QLCL/Untitled%20design%20(3).png"
            alt="Công bố chính sách bảo mật và khiếu nại phản hồi liên quan xét nghiệm"
          />
        </a>
      </div> */}
    </div>
  );
};

export default SideBar;
