import React from "react";
import { Route } from "react-router-dom";
import Header from "../../components/Header";

function DefaultLayout({ component: Component, ...props }) {
  return (
    <Route
      {...props}
      render={(routeProps) => (
        <>
          <Header />
          <div className="main">
            <Component {...routeProps} />
          </div>
        </>
      )}
    />
  );
}

export default DefaultLayout;
