import React from "react";
import ProfileHeader from "../../Shared/Profile/ProfileHeader";
import { useSelector } from "react-redux";
import ProfileDetails from "../../Shared/Profile/ProfileDetails";

const Index = () => {
  const { user } = useSelector((state) => state.userReducer);
  const { seller } = useSelector((state) => state.sellerReducer);
  return (
    <div className="container profile ">
      <ProfileHeader user={user} seller={seller} />
      <ProfileDetails user={user} seller={seller} />
    </div>
  );
};

export default Index;
