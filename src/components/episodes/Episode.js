import React from "react";
import EpisodeDetails from "./EpisodeDetails";

const Episode = ({ items }) => {
  return (
    <section className="cards">
      {items.map((item) => (
        <EpisodeDetails key={item.episode_id} item={item}></EpisodeDetails>
      ))}
    </section>
  );
};

export default Episode;
