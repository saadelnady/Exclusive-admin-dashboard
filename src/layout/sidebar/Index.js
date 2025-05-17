import { NavLink, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { adminLogout } from "../../store/actions/admin/adminActions";
import IcPower from "./assets/images/svgs/ic-power.svg";
import IcCircle from "./assets/images/svgs/ic-circle.svg";
import { adminLinks } from "./data";
import styles from "./styles/styles.module.scss";
import { FormattedMessage } from "react-intl";
import Logo from "@/assets/images/pngs/logo.png";
const AdminSideBar = ({ isActive, handleSidebarActivation }) => {
  const { admin } = useSelector((state) => state.adminReducer);
  const [toggleStates, setToggleStates] = useState({
    isCategoriesActive: false,
    isSubCategoriesActive: false,
    isProductsActive: false,
  });
  const dispatch = useDispatch();
  const HandleToggle = (key) => {
    setToggleStates((prevStates) => ({
      ...prevStates,
      [key]: !prevStates[key],
    }));
  };

  const navigate = useNavigate();

  const handleLogOut = () => {
    const payLoad = { toast, navigate, role: "ADMIN" };
    dispatch(adminLogout(payLoad));
  };
  return (
    <div
      className={` ${styles["Admin-SideBar"]} px-3 ${isActive ? "active" : ""}`}
    >
      <div className="logo">
        <img src={Logo} alt="" />
      </div>

      <div className="Admin-links ">
        <button className="btn btn-danger" onClick={handleLogOut}>
          <IcPower />
        </button>
        <ul className="main-nav">
          {adminLinks.map((link) => (
            <li
              key={link.id}
              className="nav-item"
              onClick={() => link.toggleKey && HandleToggle(link.toggleKey)}
            >
              <NavLink to={`${link.to}`}>
                {link.icon}
                <FormattedMessage id={link.title} />
              </NavLink>

              {link.children && (
                <span>
                  <i
                    className={`text-light arrow-right fa fa-chevron-right ${
                      toggleStates[link.toggleKey] && "active"
                    }`}
                  ></i>
                </span>
              )}

              {/* Children submenu */}
              {link.children && toggleStates[link.toggleKey] && (
                <ul className="sub-nav">
                  {link.children.map((child) => (
                    <li key={child.id}>
                      <NavLink to={`${child.to}`} className="child-link">
                        <IcCircle />
                        <FormattedMessage id={child.title} />
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminSideBar;
