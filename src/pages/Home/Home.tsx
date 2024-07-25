import Carousel from "../../components/Carousel";
import Departments from "../../components/Departments";
import Achievements from "../../components/Achievements";
import Doctors from "../../components/Doctors";
import Videos from "../../components/Videos";
import News from "../../components/News";
import Letters from "../../components/Letters";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Home = () => {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Nhi đồng 2 - Bệnh viện nhi đồng 2</title>
          <meta name="description" content="Trang chủ của Bệnh viện Nhi đồng 2, cung cấp các thông tin về khoa phòng, bác sĩ, và các dịch vụ y tế." />
          <meta name="keywords" content="Nhi đồng 2, Bệnh viện, Nhi khoa, Bác sĩ, Dịch vụ y tế, Sức khỏe trẻ em" />
          <meta name="author" content="Bệnh viện Nhi đồng 2" />
          <link rel="canonical" href="https://bvnd2.vercel.app/" />
          <meta name="description" content="Helmet application" />
        </Helmet>
        <Carousel />
        <Departments />
        <Doctors />
        <News />
        <Videos />
        <Letters />
        <Achievements />
      </div>
    </HelmetProvider>
  );
};

export default Home;
