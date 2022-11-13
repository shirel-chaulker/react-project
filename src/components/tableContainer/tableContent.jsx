import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./style.css";

export const TableContent = ({
  moviesArr,
  handleLike,
  handleDelete,
  handleFilter,
  filter,
}) => {
  const filterClass = (movieGenre) => {
    if (movieGenre === "All") {
      if (filter === undefined || filter === "All") {
        return "list-group-item active";
      } else {
        return "list-group-item";
      }
    } else if (movieGenre === "Action") {
      if (filter === "Action") {
        return "list-group-item active";
      } else {
        return "list-group-item";
      }
    } else if (movieGenre === "Drama") {
      if (filter === "Drama") {
        return "list-group-item active";
      } else {
        return "list-group-item";
      }
    } else if (movieGenre === "Comedy") {
      if (filter === "Comedy") {
        return "list-group-item active";
      } else {
        return "list-group-item";
      }
    }
  };
  return (
    <div className="container">
      <div className="filter">
        <ul className="list-group">
          <li className={filterClass("All")} aria-current="true">
            <button className="filterBtn" onClick={() => handleFilter("All")}>
              All
            </button>
          </li>
          <li className={filterClass("Action")}>
            <button
              className="filterBtn"
              onClick={() => handleFilter("Action")}
            >
              Action
            </button>
          </li>
          <li className={filterClass("Drama")}>
            <button className="filterBtn" onClick={() => handleFilter("Drama")}>
              Drama
            </button>
          </li>
          <li className={filterClass("Comedy")}>
            <button
              className="filterBtn"
              onClick={() => handleFilter("Comedy")}
            >
              Comedy
            </button>
          </li>
        </ul>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Genre</th>
            <th scope="col">Stock</th>
            <th scope="col">Rate</th>
            <th scope="col">Rate</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {moviesArr &&
            moviesArr.map((m) => {
              return (
                <tr>
                  {/* <th scope="col">{m.id}</th> */}
                  <td>{m.title}</td>
                  <td>{m.genre}</td>
                  <td>{m.stock}</td>
                  <td>{m.rate}</td>
                  <td className="iconLove">
                    {m.isLike ? (
                      <div
                        onClick={() => {
                          handleLike(m.id, false);
                        }}
                      >
                        <FavoriteIcon />
                      </div>
                    ) : (
                      <div
                        onClick={() => {
                          handleLike(m.id, true);
                        }}
                      >
                        <FavoriteBorderIcon />
                      </div>
                    )}
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => {
                        handleDelete(m.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
