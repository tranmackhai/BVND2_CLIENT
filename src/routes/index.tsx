import { size } from "lodash";
import React from "react";
import { Route, Routes } from "react-router-dom";
import PageLayout from "../layouts/PageLayout";
import MedicalInformation from "../pages/ForMedicalStaff/MedicalInformation";
import ScientificResearch from "../pages/ForMedicalStaff/ScientificResearch";
import TreatmentRegimen from "../pages/ForMedicalStaff/TreatmentRegimen";
import Home from "../pages/Home";
import History from "../pages/Introduce/History";
import Mission from "../pages/Introduce/Mission";
import Organization from "../pages/Introduce/Organization";
import Policy from "../pages/Introduce/Policy";
import Team from "../pages/Introduce/Team";
import Calendar from "../pages/MedicalServices/Calendar";
import ConventionalMedicine from "../pages/MedicalServices/ConventionalMedicine";
import HealthCare from "../pages/MedicalServices/PriceList/HealthCare";
import ServicePrice from "../pages/MedicalServices/PriceList/Service/Service";
import Procedure from "../pages/MedicalServices/Procedure";
import Service from "../pages/MedicalServices/Service";
import Specialist from "../pages/MedicalServices/Specialist";
import PartyWork from "../pages/News/Activities/PartyWork";
import Union from "../pages/News/Activities/Union";
import Veterans from "../pages/News/Activities/Veterans";
import YouthUnion from "../pages/News/Activities/YouthUnion";
import Bidding from "../pages/News/Bidding";
import InternationalCooperation from "../pages/News/InternationalCooperation";
import ProfessionalNews from "../pages/News/ProfessionalNews";
import Recruitment from "../pages/News/Recruitment";
import ShareLove from "../pages/News/ShareLove";
import Train from "../pages/News/Train";
import { TRoute } from "../types/index";
import Article from "../pages/Article";
import Search from "../pages/Search";
import NotFound from "../pages/NotFound";

const routes: TRoute[] = [
  {
    path: "/",
    element: Home,
    layout: PageLayout,
  },
  {
    path: "/gioi-thieu/lich-su-hinh-thanh-va-phat-trien",
    element: History,
    layout: PageLayout,
  },
  {
    path: "/gioi-thieu/chuc-nang-nhiem-vu",
    element: Mission,
    layout: PageLayout,
  },
  {
    path: "/gioi-thieu/chinh-sach-chat-luong",
    element: Policy,
    layout: PageLayout,
  },
  {
    path: "/gioi-thieu/co-cau-to-chuc",
    element: Organization,
    layout: PageLayout,
  },
  {
    path: "/gioi-thieu/doi-ngu-chuyen-gia",
    element: Team,
    layout: PageLayout,
  },
  {
    path: "/kham-chua-benh/lich-kham-benh-tai-kham",
    element: Calendar,
    layout: PageLayout,
  },
  {
    path: "/kham-chua-benh/cac-chuyen-khoa",
    element: Specialist,
    layout: PageLayout,
    props: { specialty: "all" },
    subRoutes: [
      {
        path: "/:slug",
        element: Article,
        layout: PageLayout,
      },
      {
        path: "/chuyen-khoa-ngoai",
        element: Specialist,
        layout: PageLayout,
        props: { specialty: "Chuyên khoa ngoại" },
      },
      {
        path: "/chuyen-khoa-noi",
        element: Specialist,
        layout: PageLayout,
        props: { specialty: "Chuyên khoa nội" },
      },
      {
        path: "/can-lam-sang",
        element: Specialist,
        layout: PageLayout,
        props: { specialty: "Cận lâm sàng" },
      },
    ],
  },
  {
    path: "/kham-chua-benh/dich-vu-noi-bat",
    element: Service,
    layout: PageLayout,
    subRoutes: [
      {
        path: "/:slug",
        element: Article,
        layout: PageLayout,
      },
    ],
  },
  {
    path: "/kham-chua-benh/bang-gia-kham-chua-benh",
    element: HealthCare,
    layout: PageLayout,
    subRoutes: [
      {
        path: "/:slug",
        element: Article,
        layout: PageLayout,
      },
    ],
  },
  {
    path: "/kham-chua-benh/bang-gia-cac-dich-vu",
    element: ServicePrice,
    layout: PageLayout,
    subRoutes: [
      {
        path: "/:slug",
        element: Article,
        layout: PageLayout,
      },
    ],
  },
  {
    path: "/kham-chua-benh/thu-tuc-kham-benh",
    element: Procedure,
    layout: PageLayout,
    subRoutes: [
      {
        path: "/:slug",
        element: Article,
        layout: PageLayout,
      },
    ],
  },
  {
    path: "/kham-chua-benh/y-hoc-thuong-thuc",
    element: ConventionalMedicine,
    layout: PageLayout,
    subRoutes: [
      {
        path: "/:slug",
        element: Article,
        layout: PageLayout,
      },
    ],
  },
  {
    path: "/tin-tuc/tin-chuyen-mon",
    element: ProfessionalNews,
    layout: PageLayout,
    subRoutes: [
      {
        path: "/:slug",
        element: Article,
        layout: PageLayout,
      },
    ],
  },
  {
    path: "/tin-tuc/tuyen-dung",
    element: Recruitment,
    layout: PageLayout,
    subRoutes: [
      {
        path: "/:slug",
        element: Article,
        layout: PageLayout,
      },
    ],
  },
  {
    path: "/tin-tuc/dao-tao",
    element: Train,
    layout: PageLayout,
    subRoutes: [
      {
        path: "/:slug",
        element: Article,
        layout: PageLayout,
      },
    ],
  },
  {
    path: "/tin-tuc/chia-se-yeu-thuong",
    element: ShareLove,
    layout: PageLayout,
    subRoutes: [
      {
        path: "/:slug",
        element: Article,
        layout: PageLayout,
      },
    ],
  },
  {
    path: "/tin-tuc/dau-thau-moi-chao-gia",
    element: Bidding,
    layout: PageLayout,
    subRoutes: [
      {
        path: "/:slug",
        element: Article,
        layout: PageLayout,
      },
    ],
  },
  {
    path: "/tin-tuc/hop-tac-quoc-te",
    element: InternationalCooperation,
    layout: PageLayout,
    subRoutes: [
      {
        path: "/:slug",
        element: Article,
        layout: PageLayout,
      },
    ],
  },
  {
    path: "/tin-tuc/cong-tac-dang",
    element: PartyWork,
    layout: PageLayout,
    subRoutes: [
      {
        path: "/:slug",
        element: Article,
        layout: PageLayout,
      },
    ],
  },
  {
    path: "/tin-tuc/doan-thanh-nien",
    element: YouthUnion,
    layout: PageLayout,
    subRoutes: [
      {
        path: "/:slug",
        element: Article,
        layout: PageLayout,
      },
    ],
  },
  {
    path: "/tin-tuc/cong-doan",
    element: Union,
    layout: PageLayout,
    subRoutes: [
      {
        path: "/:slug",
        element: Article,
        layout: PageLayout,
      },
    ],
  },
  {
    path: "/tin-tuc/hoi-cuu-chien-binh",
    element: Veterans,
    layout: PageLayout,
    subRoutes: [
      {
        path: "/:slug",
        element: Article,
        layout: PageLayout,
      },
    ],
  },
  {
    path: "/danh-cho-nhan-vien-y-te/thong-tin-y-hoc-chung-cu",
    element: MedicalInformation,
    layout: PageLayout,
    subRoutes: [
      {
        path: "/:slug",
        element: Article,
        layout: PageLayout,
      },
    ],
  },
  {
    path: "/danh-cho-nhan-vien-y-te/phac-do-dieu-tri",
    element: TreatmentRegimen,
    layout: PageLayout,
    subRoutes: [
      {
        path: "/:slug",
        element: Article,
        layout: PageLayout,
      },
    ],
  },
  {
    path: "/danh-cho-nhan-vien-y-te/nghien-cuu-khoa-hoc",
    element: ScientificResearch,
    layout: PageLayout,
    subRoutes: [
      {
        path: "/:slug",
        element: Article,
        layout: PageLayout,
      },
    ],
  },
  {
    path: "/:title",
    element: Article,
    layout: PageLayout,
  },
  {
    path: "/tim-kiem/:keyword",
    element: Search,
    layout: PageLayout,
  },
];

const renderRouter = (props: {
  routes: TRoute[] | undefined;
  pathPrefix?: string;
}): React.ReactElement => {
  const { routes, pathPrefix } = props;
  return (
    <React.Fragment>
      {routes?.map((route: TRoute, index: number): React.ReactElement => {
        const Layout = route.layout || React.Fragment;
        const Page = route.element;
        const path = route.path === "*" ? "*" : (pathPrefix ?? "") + route.path;
        const pageProps = route.props || {}; // Lấy props từ cấu hình route
        return (
          <React.Fragment key={index}>
            <Route
              path={path}
              element={
                <Layout>
                  <Page {...pageProps} />
                </Layout>
              }
            />
            {size(route?.subRoutes) > 0 &&
              renderRouter({ routes: route.subRoutes, pathPrefix: path })}
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};

const MainRoutes = (): React.ReactElement => {
  return (
    <Routes>
      {renderRouter({
        routes,
        pathPrefix: "",
      })}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MainRoutes;
