import React, { useEffect, useState } from "react";
import "./banner.css";
import { RiAddFill, RiPlayFill } from "react-icons/ri";
import axios from "axios";
import genre, {imageUrl} from "../../utils/urls";

function Banner() {
  const [banner, setBanner]=useState({})
  useEffect(()=>{
      const fetchData=async ()=>{
        let { data } = await axios.get(genre.originals);
        let rN= Math.floor(Math.random()*20);
        setBanner(data.results[rN])
      }
      fetchData()
  },[])
  return (
    <div className="banner" style={{backgroundImage:`url(${imageUrl + banner.backdrop_path})`}}>
      <div className="banner-sec-1">
        <h4>NETFLIX <span>ORIGINALS</span> </h4>
        <h1>{banner.name}</h1>
        <p>
          {banner.overview}
        </p>
        <div className="btns">
          <button> <RiPlayFill className="icon" /> Play</button>
          <button> <RiAddFill className="icon"/> List</button>
        </div>
      </div>
      <div className="banner-sec-2"></div>
    </div>
  );
}

export default Banner;
