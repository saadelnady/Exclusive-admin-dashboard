import { fetchAdmins, deleteAdmin } from "@/store/actions/admin/adminActions";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "../Shared/Table/Index";
import { FormattedMessage, useIntl } from "react-intl";
import Loading from "../Shared/loading";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

import styles from "./styles/styles.module.scss";
import Warning from "../Shared/Warning";
import { RiDeleteBin6Line } from "react-icons/ri";
import Pagenation from "../Shared/pagenation/Index";
import SearchBar from "../Shared/search/Index";
import { Col, Row } from "react-bootstrap";

const AllAdmins = ({ isWarning, handleShowWarning }) => {
  const { admins, isLoading, total, currentPage, pageSize, totalPages } =
    useSelector((state) => state.adminReducer);
  const { locale } = useIntl();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdmins({ limit: 10, page: 1 }));
  }, [dispatch]);

  const handlePageChange = (newPage) => {
    if (newPage !== currentPage) {
      dispatch(fetchAdmins({ limit: 10, page: newPage }));
    }
  };

  const [openMenuId, setOpenMenuId] = useState(null);
  const [selectedAdmin, setSelectedAdmin] = useState(null);
  const menuRefs = useRef({});

  useEffect(() => {
    const handleClickOutside = (e) => {
      const clickedOutsideAll = Object.keys(menuRefs.current).every((key) => {
        const ref = menuRefs.current[key];
        return ref && !ref.contains(e.target);
      });

      if (clickedOutsideAll) {
        setOpenMenuId(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const cancelHandler = () => {
    setSelectedAdmin(null);
  };
  const handleDeleteAdmin = () => {
    if (!selectedAdmin) return;
    dispatch(
      deleteAdmin({
        adminId: selectedAdmin?._id,
        locale,
        toast,
      })
    );
  };
  const searchHandler = (e) => {
    dispatch(fetchAdmins({ text: e, limit: 10, page: 1, locale }));
  };
  const popupInfo = {
    Icon: <RiDeleteBin6Line />,
    subMessage:
      "You will delete every products related to this subCategory too",
    message: "Are you sure to Delete this subCategory ?",
    actionTitle: "Delete",
  };
  const cols = [
    {
      label: "#",
      name: "#",
      render: (row, rowIdx) => (
        <div>
          {currentPage === 1 ? rowIdx + 1 : (currentPage - 1) * 10 + rowIdx + 1}
        </div>
      ),
    },
    {
      label: "image",
      name: "image",
      render: (row, rowIdx) => (
        <div className="admin-img">
          <img src={row?.image} alt="admin-img" />
        </div>
      ),
    },
    {
      label: "name",
      name: "name",
      render: (row) => <div>{`${row?.firstName} ${row?.lastName}`}</div>,
    },
    {
      label: "email",
      name: "email",
      render: (row) => <div>{`${row?.email}`}</div>,
    },
    {
      label: "phone",
      name: "phone",
      render: (row) => <div>{`${row?.mobilePhone}`}</div>,
    },
    {
      label: "actions",
      name: "actions",
      render: (row) => (
        <div
          className="actions"
          ref={(el) => {
            if (el) menuRefs.current[row._id] = el;
          }}
        >
          <button
            className="actions-btn"
            onClick={() =>
              setOpenMenuId((prev) => (prev === row._id ? null : row._id))
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <circle cx="8" cy="3" r="1.5" />
              <circle cx="8" cy="8" r="1.5" />
              <circle cx="8" cy="13" r="1.5" />
            </svg>
          </button>
          {openMenuId === row?._id && (
            <div className="custom-dropdown">
              <NavLink to={`/admins/show/${row._id}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="bi bi-eye"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>

                <FormattedMessage id="view" />
              </NavLink>

              <button
                onClick={() => {
                  handleShowWarning(popupInfo);
                  setSelectedAdmin(row);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-trash"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 5.5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0v-6a.5.5 0 0 1 .5-.5zm5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0v-6a.5.5 0 0 1 .5-.5z" />
                  <path
                    fillRule="evenodd"
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1 0-2h3.5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1H14.5a1 1 0 0 1 1 1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118z"
                  />
                </svg>
                <FormattedMessage id="delete" />
              </button>
            </div>
          )}
        </div>
      ),
    },
  ];

  if (isLoading) {
    return (
      <div className={`page ${styles.admins}`}>
        <Loading />
      </div>
    );
  }

  return (
    <div className={`page ${styles.admins}`}>
      <div className="page-header">
        <Row className="align-items-center gap-y-3 justify-content-between ">
          <Col xs={12}>
            <div className="text">
              <h4 className="page-title">
                <FormattedMessage id="admins" />
              </h4>
              <p className="page-description">
                <FormattedMessage id="adminsDescription" />
              </p>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <SearchBar searchHandler={searchHandler} />
          </Col>
          <Col xs={12} md={3}>
            <NavLink to="/admins/new">
              + <FormattedMessage id="add-admin" />
            </NavLink>
          </Col>
        </Row>
      </div>
      <Table cols={cols} rows={admins} />
      {admins?.length > 0 && totalPages > 1 && (
        <Pagenation
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
      {isWarning && (
        <Warning
          handleShowWarning={handleShowWarning}
          actionHandler={handleDeleteAdmin}
          popupInfo={popupInfo}
          cancelHandler={cancelHandler}
        />
      )}
    </div>
  );
};

export default AllAdmins;
