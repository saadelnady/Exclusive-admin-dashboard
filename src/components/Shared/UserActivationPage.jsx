import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import { serverUrl } from "../../API/API";

const UserActivationPage = () => {
  const { activationToken } = useParams();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [firstName, setFirstName] = useState("");

  useEffect(() => {
    if (activationToken) {
      const activationEmail = async () => {
        try {
          const response = await axios.post(
            `${serverUrl}/api/users/activation`,
            {
              activationToken,
            }
          );
           setFirstName(response?.data?.data?.currentUser?.firstName);
        } catch (error) {
          setError(true);
          setErrorMessage(error?.response?.data?.message);
          console.error("Activation email error:", error);
        }
      };

      activationEmail();
    }
  }, [activationToken]);

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 fs-5">
      {error ? (
        <>
          <p>{errorMessage}</p>
        </>
      ) : (
        <p>
          hello {firstName}
          <br />
          Your account has been created successfully
        </p>
      )}
    </div>
  );
};
export default UserActivationPage;
