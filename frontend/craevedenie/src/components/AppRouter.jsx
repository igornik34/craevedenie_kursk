import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { routes } from "../router";
import Qrcode from "../pages/Qrcode";

function AppRouter() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
        <Route path={'/qrcode'} element={<Qrcode />}/>
    </Routes>
  );
}

export default AppRouter;
