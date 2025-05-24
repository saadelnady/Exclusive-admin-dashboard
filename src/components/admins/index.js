import { fetchAdmins } from "@/store/actions/admin/adminActions";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "../Shared/Table/Index";
import { FormattedMessage } from "react-intl";
import Loading from "../Shared/loading";

const AllAdmins = () => {
  const { admins, isLoading } = useSelector((state) => state.adminReducer);
  console.log("admins", admins);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAdmins());
  }, [dispatch]);

  const handleView = (admin) => alert(`عرض: ${admin.firstName}`);
  const handleEdit = (admin) => alert(`تعديل: ${admin.firstName}`);
  const handleDelete = (admin) => {
    if (window.confirm(`هل أنت متأكد من حذف ${admin.firstName}؟`)) {
      alert("تم الحذف");
    }
  };

  const cols = [
    {
      key: "name",
      label: "الاسم",
      render: (admin) => `${admin.firstName} ${admin.lastName}`,
    },
    { key: "email", label: "البريد الإلكتروني" },
    { key: "role", label: "الدور" },
    { key: "mobilePhone", label: "الهاتف" },
    {
      key: "actions",
      label: "الإجراءات",
      render: (admin, { dropdownId, toggleDropdown }) => (
        <div className="dropdown" onClick={(e) => e.stopPropagation()}>
          <button
            className="menu-button"
            onClick={() => toggleDropdown(admin._id)}
          >
            ⋮
          </button>
          {dropdownId === admin._id && (
            <ul className="dropdown-menu">
              <li onClick={() => handleView(admin)}>عرض</li>
              <li onClick={() => handleEdit(admin)}>تعديل</li>
              <li onClick={() => handleDelete(admin)}>حذف</li>
            </ul>
          )}
        </div>
      ),
    },
  ];
  {
    isLoading && (
      <h3>
        {" "}
        <FormattedMessage id="loading" />
      </h3>
    );
  }
  return (
    <div className="page">
      <Table cols={cols} rows={admins} />
    </div>
  );
};

export default AllAdmins;
