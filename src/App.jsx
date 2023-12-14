import { useState, useEffect } from "react";
import "./App.css";
import { fetchDataFromApi } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";

import { getApiConfiguration } from "./store/homeSlice";
//importing the above function

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  //using useSelector getting the state values from home from store.js

  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = () => {
    fetchDataFromApi("/movie/popular").then((response) => {
      console.log(response);
      //dispatching or setting the value of state of given function to response
      dispatch(getApiConfiguration(response));
    });
  };

  return <h1>{url?.total_pages}</h1>;
}

export default App;
