import React, { useState } from "react";
import { compare } from "../../helpers/helper";
import { TableContent } from "../tableContainer/tableContent";
import { getMoviesFromServer } from "../../services/moviesServices";
import "./style.css";

let moviesFromDb = getMoviesFromServer().sort((a, b) => compare(a, b));
export const MoviesContainer = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [movies, setMovies] = useState(moviesFromDb);
  const [filter, setFilter] = useState("All");

  const handleDelete = (id) => {
    let newData = movies.filter((m) => m.id !== id);
    newData = newData.sort((a, b) => compare(a, b));
    setMovies(newData);
  };

  const handleIsLike = (id, isLike) => {
    //get movie by id
    let movie = movies.find((m) => m.id === id);
    //check if movie exist not equal to null or undefined
    if (movie) {
      //change ths status if is like
      movie.isLike = isLike;
    }
    //get all movies that not effect, not equal to id
    let moviesWithoutId = movies.filter((m) => m.id !== id);
    //create new array contains the movies and the new movie that was edited

    let newData = [...moviesWithoutId, movie].sort((a, b) => compare(a, b));
    setMovies(newData);
  };

  const handleFilter = (movieGenre) => {
    setFilter(movieGenre);
    if (movieGenre !== "All") {
      let filteredMovies = moviesFromDb.filter((m) => {
        return m.genre === movieGenre;
      });
      setMovies(filteredMovies);
    } else {
      setMovies(moviesFromDb);
    }
  };

  return (
    <div>
      <h1>showing {movies.length} movies on DVD store</h1>
      <TableContent
        moviesArr={movies}
        handleLike={handleIsLike}
        handleDelete={handleDelete}
        handleFilter={handleFilter}
        filter={filter}
      ></TableContent>
    </div>
  );
};
