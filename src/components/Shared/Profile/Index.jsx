import "./styles/Profile.css";

import ProfileHeader from "./ProfileHeader";

import { useSelector } from "react-redux";
import ProfileNavbar from "./ProfileNavbar";
import { Route, Routes } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import MyOrders from "./MyOrders.jsx";
import Inbox from "./Inbox.jsx";
import AddressBook from "./AddressBook.jsx";
import Payment from "./Payment.jsx";
import Returns from "./Returns.jsx";
import CancelledOrders from "./CancelledOrders.jsx";
import TrackOrder from "./TrackOrder.jsx";

export const Index = () => {
  const { isLoggedIn } = useSelector((state) => state.userReducer);
  return (
    <div className="container profile mb-5">
      <ProfileHeader />

      <div className="d-flex justify-content-between flex-wrap">
        {isLoggedIn && <ProfileNavbar />}
        <Routes>
          <Route path="/" element={<ProfileDetails />} />
          <Route path="/myorders" element={<MyOrders />} />
          <Route path="/trackorder" element={<TrackOrder />} />
          <Route path="/addressbook" element={<AddressBook />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/myreturns" element={<Returns />} />
          <Route path="/mycancellations" element={<CancelledOrders />} />
          <Route path="/inbox" element={<Inbox />} />
        </Routes>
      </div>
    </div>
  );
};
export default Index;
