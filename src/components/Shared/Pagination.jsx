// Pagination.js

import React from "react";
import "./styles/Pagination.css";

export const Pagination = ({
  itemsPerPage,
  currentPage,
  totalItems,
  paginate,
}) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination">
      <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
        <button
          className="page-link  "
          onClick={() => paginate(currentPage - 1)}
        >
          Previous
        </button>
      </li>
      {pageNumbers.map((number) => (
        <li
          key={number}
          className={`page-item z-1 ${currentPage === number ? "active" : ""}`}
          onClick={() => paginate(number)}
        >
          <button className="page-link pagination-btn">{number}</button>
        </li>
      ))}

      <li
        className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}
      >
        <button
          className="page-link  "
          onClick={() => paginate(currentPage + 1)}
        >
          Next
        </button>
      </li>
    </ul>
  );
};
