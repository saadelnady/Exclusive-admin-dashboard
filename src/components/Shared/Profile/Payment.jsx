import React from "react";
import visaImage from "../../../assets/images/pngs/ic_Visa.png";
import { AiOutlineDelete } from "react-icons/ai";

const Payment = () => {
  return (
    <div className="col-10 col-sm-9 col-md-8 py-5 px-3 shadow rounded over-flow-scroll">
      <div className="d-flex justify-content-between">
        <h3>Payment Methods</h3>
        <button className="btn submit">Add new</button>
      </div>
      <div className="d-flex justify-content-between align-items-center rounded shadow p-3 mt-3">
        <img src={visaImage} alt="" />
        <p>Saad Elnady</p>
        <p> 1234 **** *** ****</p>
        <p> 08/2024</p>
        <AiOutlineDelete className="fs-3 cursor-pointer" />
      </div>
    </div>
  );
};

export default Payment;
