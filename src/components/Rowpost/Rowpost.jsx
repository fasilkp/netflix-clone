import axios from "axios";
import React, { useEffect, useState } from "react";
import { imageUrl, originals } from "../../utils/urls";
import "./rowpost.css";

function Rowpost(props) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let { data } = await axios.get(originals);
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
                backgroundImage:
                  `url(${imageUrl+item.backdrop_path})`,
              }}>
              <h4>{item.name}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Rowpost;
