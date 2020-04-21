import axios from "axios";

const baseURL = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    const { data } = await axios.get(baseURL);
    const modifiedData = {
      confirmed: data.confirmed,
      recovered: data.recovered,
      deaths: data.deaths,
      lastUpdate: data.lastUpdate,
    };
    return modifiedData;
  } catch (err) {
    console.error(err.message);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${baseURL}/daily`);
    // console.log("data", data);
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));

    return modifiedData;
  } catch (err) {
    console.error(err.message);
  }
};

export const countries = async () => {
  try {
    const { data } = await axios.get(`${baseURL}/countries`);
    console.log("Countries >>", data);
  } catch (err) {
    console.error(err.message);
  }
};
