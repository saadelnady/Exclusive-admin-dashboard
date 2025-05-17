import React from "react";
import ProfileHeader from "../../Shared/Profile/ProfileHeader";
import { useSelector } from "react-redux";
import ProfileDetails from "../../Shared/Profile/ProfileDetails";

const Index = () => {
  const { admin } = useSelector((state) => state.adminReducer);
  const { seller } = useSelector((state) => state.sellerReducer);
  return (
    <div className="container profile ">
      <ProfileHeader admin={admin} seller={seller} />
      <ProfileDetails admin={admin} seller={seller} />
    </div>
  );
};

export default Index;
