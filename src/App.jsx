/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */
import { useState } from "react";
import { tvShows } from "./shows/data";
import ShowSelection from "./shows/ShowSelection";
import ShowDetails from "./shows/ShowDetails";

export default function App() {
  //LN 12 CODE NEEDS THE [] TO WORK
  const [shows, setShows] = useState(tvShows);
  const [selectedShow, setSelectedShow] = useState()
  
  return (
    <>
      <header>
        <p>React TV</p>
        <ShowSelection 
          shows={shows}
          setSelectedShow={setSelectedShow}
        />
      </header>
      <main>
        <ShowDetails
          show={selectedShow}
        />
      </main>
    </>
  );
}
