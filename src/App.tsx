import { Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MainRoutes from "./routes/index";
import { Spin } from "antd";
import Scroll from "./components/Scroll";
const MyPage = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <main className="overflow-x-hidden">
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen">
            <Spin />
          </div>
        }
      >
        <div className="sharethis-sticky-share-buttons"></div>
        <MainRoutes />
        <Scroll />
      </Suspense>
    </main>
  );
};

export default MyPage;
