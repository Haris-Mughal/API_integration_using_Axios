import "./App.scss";
import "bootstrap/dist/js/bootstrap.bundle";

import { useEffect, useState } from "react";
import axios from "./axios";
// import API from "./axios";

// const API = "https://jsonplaceholder.typicode.com/posts";
function App() {
  const [myData, setMyData] = useState([]);
  // const [isError, setIsError] = useState("");

  // --------------------------------------Using Promises ----------------------------

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      // .get("/post")
      .then((res) => setMyData(res.data));
    // .catch((err) => setIsError(err.message));
  }, []);

  // ------------------------------------Using Async Await --------------------------

  const getApiData = async (posts) => {
    try {
      // const res = await axios.get("/posts"); //Axios file ma yahan '/posts' likhny ki bat hui h
      const res = await axios.get(posts);
      setMyData(res.data);
    } catch (error) {
      // setIsError(err.message);
      console.log(error.message);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div className="py-3">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="text-center">API integration using Axios</h1>
          </div>
        </div>
        {/* <div className="row">
          <div className="col">
            {isError !== "" && (
              <h3 className="text-center mt-4">⚠️ {isError}</h3>
            )}
          </div>
        </div> */}
      </div>
      {/* <div className="dataBody">
        {myData.map((posts) => {
          const { id, title, body } = posts;
          return (
            <div className="card" key={id}>
              <h2>{title}</h2>
              <p>{body}</p>
            </div>
          );
        })}
      </div> */}
      <div className="dataBody">
        {myData.slice(0, 9).map((posts) => {
          const { id, title, body } = posts;
          return (
            <div className="card" key={id}>
              <h2>{title.slice(0, 15).toUpperCase()}</h2>
              <p>{body.slice(0, 100)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
