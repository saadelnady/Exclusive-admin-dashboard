import { useState } from "react";

import { Statstics } from "../Shared/Statstics";
import "./styles/AdminDashboard.css";
import { useSelector } from "react-redux";
import { List } from "../Shared/List";
const AdminDashboard = () => {
  const [isAdmins, setIsAdmins] = useState(true);

  const adminReducer = useSelector((state) => state.adminReducer);
  const sellerReducer = useSelector((state) => state.sellerReducer);

  return (
    <div className={`AdminDashboard w-100 `}>
      <Statstics isAdmins={isAdmins} setIsAdmins={setIsAdmins} />
      {isAdmins ? (
        <List data={adminReducer.admins} isLoading={adminReducer.isLoading} />
      ) : (
        <List
          data={sellerReducer.sellers}
          isLoading={sellerReducer.isLoading}
        />
      )}
    </div>
  );
};
export default AdminDashboard;
