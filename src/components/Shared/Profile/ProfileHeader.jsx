import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const ProfileHeader = () => {
  const { user } = useSelector((state) => state.userReducer);
  const { seller } = useSelector((state) => state.sellerReducer);

  return (
    <div className="header d-flex justify-content-between align-items-center flex-wrap py-5">
      <div className="links">
        <NavLink to={"/"} className="fs-5 me-2">
          Home
        </NavLink>
        /
        <NavLink className="text-dark fs-5 ms-2" to={"/profile"}>
          My Account
        </NavLink>
      </div>
      <div className="wellcome fs-5">
        wellcome !
        <span className="fw-bold fs-4 ms-3">
          {user.firstName || seller.firstName}
        </span>
      </div>
    </div>
  );
};

export default ProfileHeader;
