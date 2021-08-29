import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./component/Card";

function App() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    randomUser();
  }, []);

  function randomUser() {
    axios
      .get("https://randomuser.me/api/")
      .then((response) => setUser(response.data.results));

  }

  return (
    <div className="App">
      {user.map((user, index) => (
        <Card user={user} key={index} randomUser={randomUser}/>
      ))}
    </div>
  );
}

export default App;
