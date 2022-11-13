const moviesDB = [
  {
    id: 1,
    title: "Spiderman",
    genre: "Action",
    rate: 10,
    stock: 5,
    isLike: false,
  },
  { id: 2, title: "Batman", genre: "Action", rate: 6, stock: 5, isLike: false },
  { id: 3, title: "Hulk", genre: "Action", rate: 7, stock: 5, isLike: false },
  {
    id: 4,
    title: "IronMan",
    genre: "Action",
    rate: 10,
    stock: 5,
    isLike: false,
  },
  { id: 5, title: "Titanic", genre: "Drama", rate: 4, stock: 3, isLike: false },
  {
    id: 6,
    title: "50 shades of gray",
    genre: "Romance",
    rate: 6,
    stock: 3,
    isLike: false,
  },
  {
    id: 7,
    title: "simpsons",
    genre: "comedy",
    rate: 3,
    stock: 4,
    isLike: false,
  },
];

export const setMovieLike = (id, isLike) => {
  let movie = moviesDB.find((m) => m.id === id)[0];
  if (movie) {
    movie.isLike = isLike;
  }
  let moviesWithoutId = moviesDB.filter((m) => m.id !== id);
  moviesDB = [...moviesWithoutId, movie];
};

export const getMoviesFromServer = () => {
  //get from server take time
  return moviesDB;
};
