const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=18fbff21";

export const DefaultMovie = async (title) => {
  const response = await fetch(`${API_URL}&s=${title}`);
  const data = await response.json();
  // console.log(data.Search);
  console.log(data);
  return data.Search;
  // setMovies(data.Search);
};
