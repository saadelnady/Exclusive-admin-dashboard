import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

const AddressBook = () => {
  return (
    <div className="col-10 col-sm-7 col-lg-8 py-5 px-3 shadow rounded over-flow-scroll">
      <div className="d-flex justify-content-between">
        <h3>My addresses</h3>
        <button className="btn submit">Add new</button>
      </div>
      <div className="d-flex justify-content-between align-items-center rounded shadow p-3 mt-3  ">
        <p> Default </p>
        <p>Saad Elnady</p>
        <p> 1234 **** *** ****</p>
        <p> 08/2024</p>
        <AiOutlineDelete className="fs-3 cursor-pointer" />
      </div>
    </div>
  );
};

export default AddressBook;
