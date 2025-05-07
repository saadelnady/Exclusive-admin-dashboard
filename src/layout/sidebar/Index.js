import { NavLink, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { userLogout } from "../../store/actions/user/userActions";

import { adminLinks } from "./data";
import styles from "./styles/styles.module.scss";

const AdminSideBar = ({ isActive, handleSidebarActivation }) => {
  const { user } = useSelector((state) => state.userReducer);
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
    dispatch(userLogout(payLoad));
  };
  return (
    <div
      className={` ${styles["Admin-SideBar"]} px-3 ${isActive ? "active" : ""}`}
    >
      <div className="d-flex justify-content-between align-items-center px-1">
        <h2 className="text-light py-5 px-3">{user.firstName}.</h2>
        <FaXmark
          onClick={() => {
            handleSidebarActivation();
          }}
          className="close-Sidebar"
        />
      </div>
      <div className="Admin-links d-flex justify-content-between flex-column">
        <ul className="main-nav">
          {adminLinks.map((link) => (
            <li
              key={link.id}
              className={`fs-5 cursor-pointer ${
                link.children
                  ? "d-flex justify-content-between align-items-center"
                  : ""
              }`}
              onClick={() => link.toggleKey && HandleToggle(link.toggleKey)}
            >
              <NavLink to={`${link.to}`} className="d-flex align-items-center">
                {link.icon}
                {link.title.replace(/-/g, " ")}
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
                    <li key={child.id} className="fs-5 ms-3 mt-2">
                      <NavLink
                        to={`${child.to}`}
                        className="btn btn-danger d-flex"
                      >
                        {child.title.replace(/-/g, " ")}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <button className="btn btn-danger" onClick={handleLogOut}>
          Log out
        </button>
      </div>
    </div>
  );
};

export default AdminSideBar;
