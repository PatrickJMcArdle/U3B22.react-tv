import "./shows.css";

/** A navbar that allows users to choose between a list of shows */
export default function ShowSelection( {shows, setSelectedShow} ) {
  
  return (
    <nav className="shows">
      {shows.map((show) => {
        console.log("Key:", show.name);
      return (
      <a
        className={"show" + (show === selectedShow ? "selected" : "")}//the extra bit of + (show === selectedShow ? "selected" : "") is for the css where there is a .show.selected tag
        key={show.name}
        onClick={() => {
          setSelectedShow(show)}}
      >
        {show.name}
      </a>
      )
  })}
  </nav>
  );

}
