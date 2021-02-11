import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import Header from "./components/ui/Header";

const App = () => {
  const [items, setItems] = useState([]);
  const [items1, setItems1] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters`
      );
      const result1 = await axios(
        `https://www.breakingbadapi.com/api/episodes`
      );
      console.log(result1.data);

      setItems(result.data);
      setItems1(result1.data);
    };
    fetchItems();
  }, []);

  return (
    <div className="App">
      <Header itm={items} itm1={items1} />
    </div>
  );
};

export default App;
