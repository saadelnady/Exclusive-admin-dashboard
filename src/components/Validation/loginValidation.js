const initialValues = {
  email: "",
  password: "",
};

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "email is required";
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "password is required";
  } else if (!/^.{9,25}$/.test(values.password)) {
    errors.password = "Password must be between 6 and 20 characters";
  } else if (
    !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{9,25}$/.test(values.password)
  ) {
    errors.password =
      "Password must contain at least one uppercase letter, one lowercase letter, and one number";
  }
  return errors;
};
export { initialValues, validate };
