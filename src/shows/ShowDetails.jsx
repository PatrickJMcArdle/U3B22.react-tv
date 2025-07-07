import { useState } from "react";
import EpisodeDetails from "../episodes/EpisodeDetails";
import EpisodeList from "../episodes/EpisodeList";
import "./shows.css";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails( {show} ) {
  const [selectedEpisode, setSelectedEpisode] = useState(null)
  if (!show) {
    return (
      <section className="show-details">
        <h2>Show Details</h2>
        <p>Select a show to learn more.</p>
      </section>
    )
  }
  
  return (
    <div className="show-details">
      <h2>{show.name}</h2>
      <EpisodeList
        name={name}
        episodes={show.episodes}
        selectedEpisode={selectedEpisode}
        setSelectedEpisode={setSelectedEpisode}
      />
      <EpisodeDetails
        episode={selectedEpisode}
      />
    </div>
  );
}
