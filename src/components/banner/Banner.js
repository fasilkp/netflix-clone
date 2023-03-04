import React, { useEffect, useState } from "react";
import "./banner.css";
import { RiAddFill, RiPlayFill } from "react-icons/ri";
import axios from "axios";
import genre, { imageUrl } from "../../utils/urls";
import { Link } from "react-router-dom";

function Banner() {
  const [banner, setBanner] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      let { data } = await axios.get(genre.trending);
      let rN = Math.floor(Math.random() * 20);
      setBanner(data.results[rN]);
    };
    fetchData();
  }, []);
  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${imageUrl + banner.backdrop_path})` }}
    >
      <div className="banner-sec-1">
        <h4>
          NETFLIX <span>ORIGINALS</span>{" "}
        </h4>
        <h1>{
          banner.name ? banner.name : banner.original_title ? banner.original_title : banner.original_name
          }</h1>
        <p>{banner.overview}</p>
        <div className="btns">
          <Link to={"/watch/"+banner.id}>
            <button>
              <RiPlayFill className="icon" /> Play
            </button>
          </Link>
          <button>
            <RiAddFill className="icon" /> List
          </button>
        </div>
      </div>
      <div className="banner-sec-2"></div>
    </div>
  );
}

export default Banner;
