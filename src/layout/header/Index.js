import { IoIosNotifications } from "react-icons/io";
import { FaEnvelope } from "react-icons/fa";
import { useSelector } from "react-redux";
import { serverUrl } from "@api/API";
import { CgMenuRight } from "react-icons/cg";
import "./styles/AdminHeader.css";

const AdminHeader = ({ handleSidebarActivation }) => {
  const { user } = useSelector((state) => state.userReducer);

  return (
    <div className="admin-header">
      <CgMenuRight
        className="fs-1 cursor-pointer burger-icon"
        onClick={() => {
          handleSidebarActivation();
        }}
      />
      <div className="d-flex align-items-center flex-wrap">
        <IoIosNotifications className="fs-2 cursor-pointer" />
        <FaEnvelope className="fs-2 cursor-pointer" />
        <img
          src={`${serverUrl}/${user.image}`}
          alt="AdminImage"
          className="admin-image rounded-pill ms-3"
        />
      </div>
    </div>
  );
};

export default AdminHeader;
