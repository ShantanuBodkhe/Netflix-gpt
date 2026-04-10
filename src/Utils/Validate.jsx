export const checkValidData = (email, password) => {
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/gm.test(
    email,
  );
  const passwordRegex = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);

  if (!emailRegex) return "Email is not valid";
  if (!passwordRegex) return "Password is not valid ";

  return null;
};

