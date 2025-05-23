import { fetchAdmins } from "@/store/actions/admin/adminActions";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { List } from "../Shared/List";

const AllAdmins = () => {
  const { admins, isLoading } = useSelector((state) => state.adminReducer);
  console.log("admins", admins);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAdmins());
  }, [dispatch]);
  return (
    <div>
      <List data={admins} isLoading={isLoading} />
    </div>
  );
};

export default AllAdmins;
