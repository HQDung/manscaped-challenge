import React from "react";
import { NavLink } from "react-router-dom";

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

const Dashboard: React.FC<DashboardLayoutProps> = (props) => {
  return (
    <div className="w-full max-w-5xl mx-auto space-y-6 py-6">
      <NavLink to="/" className="text-xl font-semibold">
        &#60; Back
      </NavLink>
      <div>{props.children}</div>
    </div>
  );
};

export default React.memo(Dashboard);
