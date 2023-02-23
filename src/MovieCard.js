import React, { useEffect, useState } from "react";
import SearchIcon from "./searchIcon.png"
import { MovieList } from "./MovieList"; 
import { DefaultMovie } from "./DefaultMovie";


const List = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

 
const StoreList = async (searchTerm = "Nepal") => {
  const a = await DefaultMovie(searchTerm);
  setMovies(a);
}

// const StoreList = async () => {
//   let a;
//   if (searchTerm.length > 0){
//      a = await DefaultMovie(searchTerm);
//   }else{
//      a = await DefaultMovie("Nepal");
//   } 
//   setMovies(a);
// }

useEffect(() => {
  StoreList();
 }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => StoreList(searchTerm)}
        />
      </div>
      
 

{movies && movies.length >0 ? movies.map((movie)=> <MovieList title={movie.Title} poster={movie.Poster} year={movie.Year} type={movie.Type} imdbID={movie.imdbID}/>) : "No movies Found" }
   
  
     
      
    </div>
  );
};

export default List;
