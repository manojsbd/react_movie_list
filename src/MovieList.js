import React from 'react'

export const MovieList = ({imdbID,title,type,poster,year}) => {
  return (
    <>
   <div className="movie" key={imdbID}>
        <div>
          <p>{year}</p>
        </div>

        <div>
          <img
            src={poster !== "N/A" ? poster : "https://via.placeholder.com/400"}
            alt={title}
          />
        </div>

        <div>
          <span>{type}</span>
          <h3>{title}</h3>
        </div>
      </div>
    </>
    
  )
}
