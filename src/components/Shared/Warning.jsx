import { CiWarning } from "react-icons/ci";
import "./styles/Warning.css";
const Warning = ({
  handleShowWarning,
  actionHandler,
  popupInfo,
  cancelHandler,
}) => {
  const { Icon, actionTitle, message, subMessage } = popupInfo;
  return (
    <div className="warning-layout d-flex justify-content-center align-items-center position-fixed top-0 left-0 w-100 h-100 z-3">
      <div className="text-center p-4 bg-light col-10 col-sm-8 col-md-6 rounded">
        <CiWarning className="warning-icon" />
        <h3>{message}</h3>
        {subMessage && <p className="warning-sub-messge my-3">{subMessage}</p>}
        <div className="d-flex align-items-center justify-content-center my-3">
          <button
            onClick={() => {
              actionHandler();
              handleShowWarning();
            }}
            className="btn btn-danger border d-flex align-items-center me-3"
          >
            {Icon}
            {actionTitle}
          </button>
          <button
            onClick={() => {
              cancelHandler();
              handleShowWarning();
            }}
            className="btn border"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Warning;
