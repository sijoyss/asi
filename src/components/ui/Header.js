import React, { useState } from "react";
import { Navbar } from "react-bootstrap";
import "./Header.css";
import Episode from "../../components/episodes/Episode";
import Character from "../../components/characters/Character";

const Header = ({ itm, itm1 }) => {
  const [view, setView] = useState(false);

  const handleInputChange = (value) => {
    console.log(value);
    if (value === "Characters") {
      setView(true);
    } else {
      setView(false);
    }
  };

  return (
    <div className="navbar_container">
      <Navbar className="nav">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Breaking_Bad_logo.svg/1024px-Breaking_Bad_logo.svg.png"
          alt="logo"
          width="250"
        />
      </Navbar>

      <select
        className="form-control"
        name="city"
        onChange={(e) => handleInputChange(e.target.value)}
      >
        <option Value="select">View By:</option>
        <option value="Characters">Characters</option>
        <option Value="Episodes">Episodes</option>
      </select>
      {view ? <Character items={itm} /> : <Episode items={itm1} />}
    </div>
  );
};

export default Header;
