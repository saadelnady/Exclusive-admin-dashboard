import React from "react";
import { useSelector } from "react-redux";
import { DashboardCard } from "./DashBoardCard";

export const Statstics = (props) => {
  const { admins } = useSelector((state) => state.adminReducer);
  const { sellers } = useSelector((state) => state.sellerReducer);

  const sellersCount = sellers.length;
  const adminsCount = admins.length - 1;
  return (
    <div className="d-flex justify-content-evenly p-4">
      <DashboardCard
        icon="seller"
        count={sellersCount}
        title="Total Sellers"
        className="p-5 rounded"
        props={props}
      />
      <DashboardCard
        icon="admin"
        count={adminsCount}
        title="Total admins"
        className="p-5 rounded"
        props={props}
      />
    </div>
  );
};
