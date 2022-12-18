import React from "react";
import { actors } from "../data";

function Actors() {

  console.log(actors)
  const actorsToDisplay= actors.map(a=>{
    const movies=a.movies.map(m=>{
      return <li>{m}</li>
    })

    return <div>
              <h3>{a.name}</h3>
              {movies}
           </div>
  })

  return(
    <div>
      <h1>Actors Page</h1>
      {actorsToDisplay}
    </div>
  )
}

export default Actors;
