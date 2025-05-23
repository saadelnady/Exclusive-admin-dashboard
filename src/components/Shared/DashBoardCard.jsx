import { FaUserTie } from "react-icons/fa";
import { RiUser3Fill } from "react-icons/ri";

export const DashboardCard = ({ icon, count, title, props }) => {
  const Icon = icon === "seller" ? FaUserTie : RiUser3Fill;
  const { setIsUsers } = props;
  const handleList = () => {
    icon === "seller" ? setIsUsers(false) : setIsUsers(true);
  };
  return (
    <div
      className=" bg-light d-flex p-3 rounded cursor-pointer"
      onClick={() => {
        handleList();
      }}
    >
      <Icon className="fs-1" />
      <div>
        <p>{count}</p>
        <p>{title}</p>
      </div>
    </div>
  );
};
