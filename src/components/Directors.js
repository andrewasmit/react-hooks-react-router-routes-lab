import React from "react";
import { directors } from "../data";

console.log(directors)

function Directors() {

  const directorsToDisplay = directors.map(d=>{
    const moviesToDisplay = d.movies.map(m=>{
      return <li>{m}</li>

    })
    return <div>
              <h3>{d.name}</h3>
              <ul>{moviesToDisplay}</ul>
           </div>
  })

  return(
    <div>
        <h1>Directors Page</h1>
        {directorsToDisplay}
    </div>
  )
}

export default Directors;
