import React, { useState } from "react";
import useData from "../hooks/useData";

const Content = () => {
  const [numApiCalls, setNumApiCalls] = useState(0);
  const { data, fetchData } = useData();

  const onButtonClick = () => {
    setNumApiCalls(numApiCalls + 1);
    fetchData();
  };

  return (
    <div>
      <h1>Number of API calls: {numApiCalls}</h1>
      <br />
      <h2>Message from API:</h2>
      <br />
      <h3>{data}</h3>
      <br />
      <button type="button" className="btn btn-primary" onClick={onButtonClick}>
        Click me to Refresh the Data
      </button>
    </div>
  );
};

export default Content;
