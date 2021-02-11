import React from "react";

const EpisodeDetails = ({ item }) => {
  return (
    <div className="card">
      <h1>{item.title}</h1>
      <ul>
        <li>
          <strong>Season:</strong> {item.season}
        </li>
        <li>
          <strong>Episode:</strong> {item.episode}
        </li>
        <li>
          <strong>Series:</strong> {item.series}
        </li>
        <li>
          <strong>Characters:</strong> {item.characters}
        </li>
      </ul>
    </div>
  );
};

export default EpisodeDetails;
