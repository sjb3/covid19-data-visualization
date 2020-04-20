import axios from "axios";

const baseURL = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    const { data } = await axios.get(baseURL);
    return response;
  } catch (err) {
    console.error(err.message);
  }
};
