import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

const paragraphs = [
  "Bệnh viện Nhi Đồng 2 tọa lạc trên một khu đất cao với diện tích 8,6 hecta, giáp 4 mặt tiền đường: Lý Tự Trọng, Chu Mạnh Trinh, Nguyễn Du và Hai Bà Trưng (Q.1). Bệnh viện có vị trí đẹp và gắn liền với quá trình phát triển của thành phố.",
  "Được thành lập từ ngày 01/06/1978; Bệnh viện Nhi đồng 2 là bệnh viện chuyên khoa Nhi – hạng 1, trực thuộc Sở Y tế TP.HCM. Đồng thời, cũng là một trong 4 bệnh viện Nhi hàng đầu tại Việt Nam phụ trách công tác khám, chữa bệnh cho các bé từ 0 đến dưới 16 tuổi. Bệnh viện có 1.400 giường bệnh, được xây dựng trong khuôn viên 8,6 hecta, nhiều cây xanh, thoáng mát, sân chơi rộng rãi, thân thiện với trẻ em…",
  "Hệ thống trang thiết bị y tế hiện đại cùng với đội ngũ các bác sĩ giỏi chuyên môn, giàu y đức đã đáp ứng tốt nhu cầu chăm sóc sức khỏe cho các bệnh nhi. Bên cạnh đó, bệnh viện còn là trung tâm đào tạo thực hành cho các trường: Đại học Y Dược TP.HCM, Đại học Y khoa Phạm Ngọc Thạch, Đại học Nguyễn Tất Thành… ; Là cơ sở đào tạo y khoa liên tục do Bộ Y tế cấp mã đào tạo. Ngoài ra, bệnh viện cũng là nơi tiếp nhận sinh viên quốc tế đến tham quan và học tập về chuyên ngành nhi khoa.",
  "Bệnh viện cũng là một trung tâm hợp tác nghiên cứu lâm sàng với các viện, bệnh viện đầu ngành trong cả nước, Tổ chức Y tế thế giới, các trường đại học và viện nghiên cứu của các nước phát triển…",
  "Bệnh viện có 10 phòng chức năng, 38 khoa lâm sàng và cận lâm sàng với đầy đủ các chuyên khoa (đặc biệt là khoa Ngoại Thần kinh, vật lý trị liệu, khoa Tâm lý, khoa Sức khỏe trẻ em…).",
  "Từ năm 2004, Bệnh viện đã triển khai thực hiện phẫu thuật ghép thận và ghép gan. Năm 2010, triển khai đơn vị phẫu thuật tim hở và thông tim can thiệp. Bệnh viện Nhi đồng 2 là cơ sở nhi khoa duy nhất trong cả nước có phẫu thuật chấn thương sọ não và bệnh lý ngoại thần kinh nhi khoa…",
  "Ban Giám đốc gồm 01 Bác sĩ Giám đốc và 03 Bác sĩ Phó Giám đốc.",
  "Khu điều trị ngoại trú bao gồm: khoa Khám bệnh, Cấp cứu, Sức khỏe trẻ em, khoa Tâm lý - phòng khám theo yêu cầu Chất lượng cao có thể đáp ứng 5.000 đến 6.000 lượt khám mỗi ngày. Đội ngũ nhân viên y tế với phong cách, thái độ phục vụ luôn hướng tới sự hài lòng người bệnh.",
  "Với tiêu chí lấy người bệnh làm trung tâm và chất lượng khám, chữa bệnh là ưu tiên hàng đầu cùng với sự quyết tâm của toàn thể cán bộ nhân viên y tế. Bệnh viện Nhi Đồng 2 sẽ phấn đấu hoàn thành xuất sắc nhiệm vụ chăm sóc sức khỏe nhân dân đồng thời sẽ phát triển bệnh viện trở thành bệnh viện chuyên khoa nhi hiện đại ngang tầm các nước trong khu vực",
];

const Mission = () => {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Chức năng - nhiệm vụ | Website Bệnh viện nhi đồng 2</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <div className="posts-path">
          <Link to="/" style={{ color: "#000" }}>
            <p>
              Trang Chủ <i className="fa-solid fa-angles-right"></i>
            </p>
          </Link>
          <p style={{ fontWeight: "700" }}>Chức Năng - Nhiệm Vụ</p>
        </div>
        <div className="posts-box">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="p-text">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Mission;
