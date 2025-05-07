import React from "react";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { PiAddressBook } from "react-icons/pi";
import { MdPayment } from "react-icons/md";
import { IoBagOutline } from "react-icons/io5";
import { MdOutlineTrackChanges } from "react-icons/md";
import { HiOutlineReceiptRefund } from "react-icons/hi";
import { GiCancel } from "react-icons/gi";
import { AiOutlineMessage } from "react-icons/ai";

const ProfileNavbar = () => {
  return (
    <aside className="links d-flex flex-column col-2 col-md-4 col-lg-3 shadow rounded px-3 align-self-start">
      <NavLink
        className="my-4 fs-5 text-dark text-center text-md-start"
        to="/profile"
      >
        <CgProfile className="fs-1" />
        <span className="d-none d-md-inline">Manage My Account</span>
      </NavLink>
      <NavLink
        className="mb-4 fs-5 text-dark text-center text-md-start"
        to="/profile/addressbook"
      >
        <PiAddressBook className="fs-1" />
        <span className="d-none d-md-inline"> Address Book</span>
      </NavLink>
      <NavLink
        className="mb-4 fs-5 text-dark text-center text-md-start"
        to="/profile/payment"
      >
        <MdPayment className="fs-1" />
        <span className="d-none d-md-inline"> My Payment Options</span>
      </NavLink>
      <NavLink
        className="mb-4 fs-5 text-dark text-center text-md-start"
        to="/profile/myorders"
      >
        <IoBagOutline className="fs-1" />
        <span className="d-none d-md-inline"> My Orders</span>
      </NavLink>
      <NavLink
        className="mb-4 fs-5 text-dark text-center text-md-start"
        to="/profile/trackorder"
      >
        <MdOutlineTrackChanges className="fs-1" />
        <span className="d-none d-md-inline"> Track order</span>
      </NavLink>
      <NavLink
        className="mb-4 fs-5 text-dark text-center text-md-start"
        to="/profile/myreturns"
      >
        <HiOutlineReceiptRefund className="fs-1" />
        <span className="d-none d-md-inline"> My Returns</span>
      </NavLink>
      <NavLink
        className="mb-4 fs-5 text-dark text-center text-md-start"
        to="/profile/mycancellations"
      >
        <GiCancel className="fs-1" />
        <span className="d-none d-md-inline"> My Cancellations</span>
      </NavLink>

      <NavLink
        className="mb-4 fs-5 text-dark text-center text-md-start"
        to="/profile/inbox"
      >
        <AiOutlineMessage className="fs-1" />
        <span className="d-none d-md-inline">Inbox</span>
      </NavLink>
    </aside>
  );
};

export default ProfileNavbar;
