const initialValues = {
  image: "",
  firstName: "",
  lastName: "",
  email: "",
  address: "",
  mobilePhone: "",
  currentPassword: "",
  newPassword: "",
  newPasswordConfirmed: "",
};

// ==================================================================================

const validate = (values) => {
  const errors = {};

  if (!values?.firstName) {
    errors.firstName = "First name is required !";
  } else if (values?.firstName?.trim().length < 3) {
    errors.firstName = "First name must be at least 3 characters !";
  } else if (values?.firstName?.trim().length > 20) {
    errors.firstName = "First name must be less than 20 characters !";
  }
  // ==================================================================================
  if (!values?.lastName) {
    errors.firstName = "Last name is required !";
  } else if (values?.lastName?.trim().length < 3) {
    errors.lastName = "Last name must be at least 3 characters !";
  } else if (values?.lastName?.length > 20) {
    errors.lastName = "Last name must be less than 20 characters !";
  }

  // ==================================================================================
  if (!/^\S+@\S+\.\S+$/.test(values?.email?.trim())) {
    errors.email = "Invalid email address !";
  }
  // ==================================================================================
  if (!values?.address) {
    errors.address = "Address is required !";
  } else if (values?.address && values?.address?.length < 5) {
    errors.address = "Address must be at least 5 characters !";
  } else if (values?.address && values?.address?.length > 100) {
    errors.address = "Address must be less than 100 characters !";
  }
  // ==================================================================================

  if (!/^\d{11}$/.test(values?.mobilePhone?.trim())) {
    errors.mobilePhone = "Invalid phone number !";
  }

  // ==================================================================================

  if (!values?.currentPassword && values?.newPassword) {
    errors.currentPassword = "Current password is required !";
  }

  // ==================================================================================
  if (!values?.currentPassword && values?.newPasswordConfirmed) {
    errors.currentPassword = "Current password is required !";
  }

  // ==================================================================================

  if (values?.currentPassword && !values?.newPassword) {
    errors.newPassword = "New password is required !";
  }

  if (values?.currentPassword && !values?.newPasswordConfirmed) {
    errors.newPasswordConfirmed = "New password Confirmed  is required !";
  }

  // ==================================================================================
  if (
    values?.currentPassword &&
    !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{9,25}$/.test(
      values.currentPassword
    )
  ) {
    errors.currentPassword =
      "Current password must contain at least one uppercase letter, one lowercase letter, and one number !";
  }
  // ==================================================================================

  if (values?.newPassword && !/^.{9,25}$/.test(values?.newPassword)) {
    errors.newPassword = "New password must be between 9 and 25 characters !";
  } else if (
    values?.newPassword &&
    !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{9,25}$/.test(values?.newPassword)
  ) {
    errors.newPassword =
      "New password must contain at least one uppercase letter, one lowercase letter, and one number !";
  }
  // ==================================================================================

  if (
    values?.newPasswordConfirmed &&
    !/^.{9,25}$/.test(values?.newPasswordConfirmed)
  ) {
    errors.newPasswordConfirmed =
      "new password confirmed must be between 9 and 25 characters !";
  } else if (
    values?.newPasswordConfirmed &&
    !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{9,25}$/.test(
      values?.newPasswordConfirmed
    )
  ) {
    errors.newPasswordConfirmed =
      "New password Confirmed must contain at least one uppercase letter, one lowercase letter, and one number !";
  }
  // ==================================================================================
  if (values?.newPassword !== values?.newPasswordConfirmed) {
    errors.newPasswordConfirmed = "Not matched password !";
  }
  return errors;
};

export { initialValues, validate };
