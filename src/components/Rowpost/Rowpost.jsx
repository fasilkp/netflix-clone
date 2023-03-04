import axios from "axios";
import React, { useEffect, useState } from "react";
import genre, { imageUrl } from "../../utils/urls";
import "./rowpost.css";

function Rowpost(props) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let { data } = await axios.get(genre[props.genre]);
      console.log(data);
      setMovies(data.results);
    };
    fetchData();
  }, []);
  return (
    <div className="rowpost">
      <h2>{props.header}</h2>
      <div
        className={
          props.small ? "rowpost-container small" : "rowpost-container"
        }
      >
        {movies.map((item) => {
          return (
            <div
              className="rowpost-item"
              style={{
                backgroundImage: `url(${imageUrl + item.backdrop_path})`,
              }}
            >
              <h4>
                {item.name
                  ? item.name
                  : item.original_title
                  ? item.original_title
                  : item.original_name}
              </h4>
              <hr />
              <p>
                {item.overview}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Rowpost;
