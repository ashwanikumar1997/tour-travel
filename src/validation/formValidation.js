export const emailValidate = ({ email }) => {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  return emailRegex.test(email);
};

export const nameValidation = ({ name }) => {
    const nameRegex = /^[A-Za-z\s\-']+$/;
  return nameRegex.test(name);
};

export const numberValidation = ({ number }) => {
  const parsedNumber = parseInt(number);
  return !isNaN(parsedNumber);
};

export const imageValidation = ({ file }) => {
  if (!file) {
    return true; // No file selected is considered valid
  }

  const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
  if (allowedTypes.includes(file.type)) {
    return true;
  } else {
    return false;
  }
};
