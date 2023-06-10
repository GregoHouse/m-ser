const { User } = require("../db");

export const createUser = async (name, lastname, mail, password) => {
  const data = {
    name,
    lastname,
    mail,
    password,
  };
  if (!Object.values(data).every((value) => value)) throw Error("Missing data");
  const userCreated = await User.create({
    data,
  });
  return userCreated;
};
