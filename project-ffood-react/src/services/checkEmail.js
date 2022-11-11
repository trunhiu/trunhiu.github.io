import axios from "axios";

export const checkEmail = async (email) => {
  const res = await axios.get(`http://localhost:3001/users?email=${email}`);

  return res.data;
};
