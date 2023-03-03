import React from "react";
import "./banner.css";
import { RiAddFill, RiPlayFill } from "react-icons/ri";

function Banner() {
  return (
    <div className="banner">
      <div className="banner-sec-1">
        <h4>NETFLIX <span>ORIGINALS</span> </h4>
        <h1>Attack on Titan</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
          facilis molestias ea error quasi dolorem nostrum tenetur excepturi
          ipsa modi at ratione mollitia harum, nemo soluta explicab
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
