import React from "react";
import { Route } from "react-router-dom";
import Header from "../header/Header";
const ProtectedRoute = ({ path, Component, exact }) => {
  return (
    <Route path={path} exact={exact ? exact : false}>
      <div className="w-screen  h-screen flex flex-col justify-start box-border overflow-auto">
        <Header />
        <div className="w-full h-full flex items-stretch  overflow-auto">
          <Component />
        </div>
      </div>
    </Route>
  );
};

export default ProtectedRoute;
