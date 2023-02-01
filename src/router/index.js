import React, { useLayoutEffect } from "react";
import { ROUTES } from "./routes";
import { Home, LeaderBoard, Contest } from "../pages";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

//Scroll to top on every route change
const ScrollToTop = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.LEADERBOARD} element={<LeaderBoard />} />
            <Route path={ROUTES.CONTEST} element={<Contest />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default Router;
