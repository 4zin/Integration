export const validation = (input) => {
  let errors = {};
  let emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  let passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!emailRegex.test(input.email)) {
    errors.email = "Invalid email";
  }
  if (input.email.length >= 35) {
    errors.email = "Email must contain no more than 35 characters";
  }

  if (!input.password) {
    errors.password = "Please provide a password";
  }

  if (!passwordRegex.test(input.password)) {
    errors.password =
      "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character";
  }

  return errors;
};
