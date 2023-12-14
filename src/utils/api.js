import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_KEY = import.meta.env.VITE_APP_API_KEY;

//defining headers for axios
const headers = {
  Authorization: "bearer " + TMDB_KEY,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    //getting the response and destructing and storing it in data
    // const { data } = await axios.get(BASE_URL + url, {
    const { data } = await axios.get(BASE_URL + url, {
      headers: headers,
      params: params,
    });
    return data;
  } catch (error) {
    console.log("Error while fetching data", error);
    return error;
  }
};
