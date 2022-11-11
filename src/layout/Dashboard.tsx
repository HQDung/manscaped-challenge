import React from "react";

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

const Dashboard: React.FC<DashboardLayoutProps> = (props) => {
  return (
    <div>
      Dashboard
      <div>{props.children}</div>
    </div>
  );
};

export default React.memo(Dashboard);
