import React from "react";
import { movies } from "../data";

function Movies() {

const moviesToDisplay=movies.map(m=>{
  const lis = m.genres.map(g=>{
    return <li>{g}</li>
  })

  return <div>
            <h2>{m.title}</h2>
            <h3>{m.time} min.</h3>
            <ul>{lis}</ul>
         </div>
})


  return (<div>
            <h1>Movies Page</h1>
            {moviesToDisplay}
         </div>
  )
}

export default Movies;
