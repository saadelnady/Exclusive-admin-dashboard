import React, { useState, useEffect } from "react";

import styles from "./styles/styles.module.scss";

const Table = ({ cols = [], rows = [] }) => {
  const [dropdownId, setDropdownId] = useState(null);

  const toggleDropdown = (id) => {
    setDropdownId(dropdownId === id ? null : id);
  };

  useEffect(() => {
    const handleClickOutside = () => setDropdownId(null);
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);
  return (
    <div className={styles["table-wrapper"]}>
      <table className="custom-table">
        <thead>
          <tr>
            {cols.map((col, idx) => (
              <th key={idx}>{col.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td colSpan={cols.length}>لا توجد بيانات</td>
            </tr>
          ) : (
            rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {cols.map((col, colIndex) => (
                  <td key={colIndex}>
                    {col.render
                      ? col.render(row, {
                          dropdownId,
                          toggleDropdown,
                        })
                      : row[col.key]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
