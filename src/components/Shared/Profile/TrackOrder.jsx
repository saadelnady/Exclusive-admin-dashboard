import React from "react";
import { MdOutlineTrackChanges } from "react-icons/md";

import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
const TrackOrder = () => {
  return (
    <div className="col-10 col-md-8 shadow p-5 rounded over-flow-auto d-flex flex-column justify-content-between over-flow-scroll">
      <table className="w-100 rounded">
        <thead>
          <tr className="">
            <th className="py-3">Order ID</th>
            <th>Status</th>
            <th>Item Qty</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border">
            <td>1</td>
            <td>Processing</td>
            <td>20</td>
            <td>Us$ 300 </td>
            <td>
              <MdOutlineTrackChanges className="fs-3" />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="d-flex">
        <p className="text-end w-100 align-self-end">1-1 of 10 </p>
        <FaAngleLeft className="fs-3 cursor-pointer" />
        <FaAngleRight className="fs-3 cursor-pointer" />
      </div>
    </div>
  );
};

export default TrackOrder;
