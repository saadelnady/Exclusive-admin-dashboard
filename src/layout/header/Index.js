import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CgMenuRight } from "react-icons/cg";
import { IoIosNotifications } from "react-icons/io";
import { FaEnvelope } from "react-icons/fa";
import { serverUrl } from "@api/API";
import "./styles/AdminHeader.css";
import { setLocale } from "@/store/actions/language/languageActionsCreators";

const AdminHeader = ({ handleSidebarActivation }) => {
  const dispatch = useDispatch();
  const { admin } = useSelector((state) => state.adminReducer);
  const { locale } = useSelector((state) => state.localeReducer);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const changeLanguage = (lang) => {
    dispatch(setLocale(lang));
    setDropdownOpen(false);
  };

  return (
    <div className="admin-header d-flex justify-content-between align-items-center">
      <CgMenuRight
        className="fs-1 cursor-pointer burger-icon"
        onClick={handleSidebarActivation}
      />

      <div className="d-flex align-items-center flex-wrap gap-3">
        <IoIosNotifications className="fs-2 cursor-pointer" />
        <FaEnvelope className="fs-2 cursor-pointer" />

        <div className="language-dropdown position-relative">
          <button
            className="btn btn-light dropdown-toggle"
            onClick={toggleDropdown}
          >
            {locale === "en" ? "English" : "العربية"}
          </button>

          {dropdownOpen && (
            <ul
              className="dropdown-menu show"
              style={{ position: "absolute", top: "100%", left: 0 }}
            >
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => changeLanguage("en")}
                  disabled={locale === "en"}
                >
                  English
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => changeLanguage("ar")}
                  disabled={locale === "ar"}
                >
                  العربية
                </button>
              </li>
            </ul>
          )}
        </div>

        <img
          src={`${serverUrl}/${admin.image}`}
          alt="AdminImage"
          className="admin-image rounded-pill ms-3"
        />
      </div>
    </div>
  );
};

export default AdminHeader;
