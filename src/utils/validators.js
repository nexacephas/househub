const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^\+?[0-9]{7,15}$/;
const PASSWORD_MIN_LENGTH = 8;

export const isValidEmail = (email) =>
  typeof email === "string" && EMAIL_REGEX.test(email.trim());

export const isValidPhone = (phone) =>
  typeof phone === "string" && PHONE_REGEX.test(phone.trim());

export const isValidPassword = (password) =>
  typeof password === "string" && password.trim().length >= PASSWORD_MIN_LENGTH;

export const getPasswordStrength = (password) => {
  if (!password) return "empty";
  if (
    password.length >= 12 &&
    /[A-Z]/.test(password) &&
    /[0-9]/.test(password) &&
    /[^A-Za-z0-9]/.test(password)
  ) {
    return "strong";
  }
  if (password.length >= 10 && (/[A-Z]/.test(password) || /[0-9]/.test(password))) {
    return "fair";
  }
  return "weak";
};

export const getPasswordStrengthLabel = (strength) => {
  switch (strength) {
    case "strong":
      return "Strong password";
    case "fair":
      return "Good password";
    case "weak":
      return "Weak password";
    default:
      return "Choose a secure password";
  }
};

export const splitFullName = (fullName) => {
  const values = (fullName || "").trim().split(/\s+/);
  return {
    firstName: values[0] || "",
    lastName: values.slice(1).join(" ") || "",
  };
};

export const validateRegisterStep2 = ({ fullName, email, phone }) => {
  const errors = {};

  if (!fullName?.trim()) {
    errors.fullName = "Full name is required.";
  } else if (fullName.trim().split(/\s+/).length < 2) {
    errors.fullName = "Please enter your first and last name.";
  }

  if (!email?.trim()) {
    errors.email = "Email is required.";
  } else if (!isValidEmail(email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!phone?.trim()) {
    errors.phone = "Phone number is required.";
  } else if (!isValidPhone(phone)) {
    errors.phone = "Enter a valid phone number.";
  }

  return errors;
};

export const validateRegisterStep3 = ({ password, confirmPassword, acceptTerms }) => {
  const errors = {};

  if (!password) {
    errors.password = "Password is required.";
  } else if (!isValidPassword(password)) {
    errors.password = `Password must be at least ${PASSWORD_MIN_LENGTH} characters.`;
  }

  if (!confirmPassword) {
    errors.confirmPassword = "Confirm your password.";
  } else if (password !== confirmPassword) {
    errors.confirmPassword = "Passwords do not match.";
  }

  if (!acceptTerms) {
    errors.acceptTerms = "You must agree to the terms and conditions.";
  }

  return errors;
};

export const validateLoginData = ({ email, password }) => {
  const errors = {};

  if (!email?.trim()) {
    errors.email = "Email is required.";
  } else if (!isValidEmail(email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!password) {
    errors.password = "Password is required.";
  }

  return errors;
};

export const validateForgotPasswordData = ({ email }) => {
  const errors = {};

  if (!email?.trim()) {
    errors.email = "Email is required.";
  } else if (!isValidEmail(email)) {
    errors.email = "Enter a valid email address.";
  }

  return errors;
};

export const validateResetPasswordData = ({ password, confirmPassword }) => {
  const errors = {};

  if (!password) {
    errors.password = "Password is required.";
  } else if (!isValidPassword(password)) {
    errors.password = `Password must be at least ${PASSWORD_MIN_LENGTH} characters.`;
  }

  if (!confirmPassword) {
    errors.confirmPassword = "Confirm your password.";
  } else if (password !== confirmPassword) {
    errors.confirmPassword = "Passwords do not match.";
  }

  return errors;
};

export const validateProfileData = ({ firstName, lastName, email, phone }) => {
  const errors = {};

  if (!firstName?.trim()) {
    errors.firstName = "First name is required.";
  }

  if (!lastName?.trim()) {
    errors.lastName = "Last name is required.";
  }

  if (!email?.trim()) {
    errors.email = "Email is required.";
  } else if (!isValidEmail(email)) {
    errors.email = "Enter a valid email address.";
  }

  if (phone?.trim() && !isValidPhone(phone)) {
    errors.phone = "Enter a valid phone number.";
  }

  return errors;
};

export const validatePasswordUpdate = ({ currentPassword, newPassword, confirmPassword }) => {
  const errors = {};

  if (!currentPassword) {
    errors.currentPassword = "Current password is required.";
  }

  if (!newPassword) {
    errors.newPassword = "New password is required.";
  } else if (!isValidPassword(newPassword)) {
    errors.newPassword = `Password must be at least ${PASSWORD_MIN_LENGTH} characters.`;
  }

  if (!confirmPassword) {
    errors.confirmPassword = "Confirm your password.";
  } else if (newPassword !== confirmPassword) {
    errors.confirmPassword = "Passwords do not match.";
  }

  return errors;
};
