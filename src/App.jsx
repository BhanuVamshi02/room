import { useState, useEffect } from "react";
import "./App.css";
import { fetchDataFromApi } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";

import { getApiConfiguration } from "./store/homeSlice";
//importing the above function

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = () => {
    fetchDataFromApi("/movie/popular").then((response) => {
      console.log(response);
      dispatch(getApiConfiguration(response));
    });
  };

  return <h1>Hello WORLD</h1>;
}

export default App;
