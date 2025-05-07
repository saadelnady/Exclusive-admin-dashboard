import React from "react";
import { serverUrl } from "../../../API/API";
import { formatDateAndTime } from "../../../helpers/formated_date_time";
import { HiDotsVertical } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import Loading  from "../../Shared/Loading";

export const List = ({ data, isLoading }) => {
  return (
    <>
      {isLoading && <Loading />}
      <div className="list">
        <table className="w-100 bg-light rounded text-center ">
          <thead>
            <tr className="border-bottom">
              <th>ID</th>
              <th>Image</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
              <th>Mobilephone</th>
              <th>join Date</th>
              <th>updated Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map(
              (item, index) =>
                item?.role !== "ADMIN" && (
                  <tr key={index} className="border-bottom ">
                    <td>{index}</td>
                    <td>
                      <img src={`${serverUrl}/${item.image}`} alt="" />
                    </td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.email}</td>
                    <td>{item.mobilePhone}</td>
                    <td>{formatDateAndTime(item.createdAt)}</td>
                    <td>{formatDateAndTime(item.updatedAt)}</td>

                    <td>
                      <div className="options-wrapper">
                        <HiDotsVertical className=" " />
                        <div className="options">
                          <button className="block">
                            <NavLink>
                              <FaRegEdit /> Block
                            </NavLink>
                          </button>
                          <button>
                            <RiDeleteBin6Line /> Delete
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                )
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};
