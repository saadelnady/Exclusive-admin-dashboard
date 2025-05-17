import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAdminProfile,
  fetchAdmins,
} from "../store/actions/admin/adminActions.js";
import { Route, Routes } from "react-router-dom";

import AdminSideBar from "./sidebar";
import AdminHeader from "./header";

import { fetchSellers } from "../store/actions/seller/sellerActions.js";
import styles from "./styles.module.scss";
import adminRoutes from "./routes.js";

const Admin = () => {
  const [isWarning, setIsWarning] = useState(false);
  const token = localStorage.getItem("TOKEN");
  const handleShowWarning = () => {
    setIsWarning(!isWarning);
  };
  const dispatch = useDispatch();
  // =================================================================================
  const [isActive, setIsActive] = useState(false);
  const handleSidebarActivation = () => {
    setIsActive(!isActive);
  };
  // =================================================================================
  useEffect(() => {
    dispatch(fetchAdminProfile());
    dispatch(fetchSellers());
  }, [dispatch]);

  return (
    <div className={`${styles["admin-layout"]}`}>
      <AdminSideBar
        isActive={isActive}
        handleSidebarActivation={handleSidebarActivation}
      />
      <div className="d-flex flex-column w-100">
        <AdminHeader handleSidebarActivation={handleSidebarActivation} />
        <Routes>
          {adminRoutes(isWarning, handleShowWarning).map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
    </div>
  );
};
export default Admin;
