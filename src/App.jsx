import { useState, useEffect } from "react";
import "./App.css";
import { fetchDataFromApi } from "./utils/api";

function App() {
  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = () => {
    fetchDataFromApi("/movie/popular").then((response) => {
      console.log(response);
    });
  };

  return <h1>Hello WORLD</h1>;
}

export default App;
