import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { routes } from "../router";

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
    </Routes>
  );
}

export default AppRouter;
