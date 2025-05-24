import { fetchAdmin } from "@/store/actions/admin/adminActions";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ShowAdmin = () => {
  const { adminId } = useParams();
  const { admin } = useSelector((state) => state.adminReducer);
  const dispatch = useDispatch();
  console.log("admin", admin);
  console.log("adminId >>>>", adminId);

  useEffect(() => {
    dispatch(fetchAdmin({ adminId }));
  }, [adminId, dispatch]);
  return <div>saaad</div>;
};

export default ShowAdmin;
