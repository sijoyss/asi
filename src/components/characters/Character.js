import React from "react";
import CharacterDetail from "./CharacterDetails";
const Character = ({ items }) => {
  return (
    <section className="cards">
      {items.map((item) => (
        <CharacterDetail key={item.char_id} item={item}></CharacterDetail>
      ))}
    </section>
  );
};

export default Character;
