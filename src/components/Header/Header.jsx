import React from "react";
import { RiSearchLine } from "react-icons/ri";
import "./Header.css";

function Header() {
    return (
        <div className="header">
            <div className="head-sec-1">
                <img
                    src="https://pngimg.com/uploads/netflix/netflix_PNG25.png"
                    alt=""
                />
                <b>Home</b>
                <b>TV Shows</b>
                <b>Movies</b>
            </div>
            <div className="head-sec-2">
                <b><RiSearchLine /></b>
                <b>Kids</b>
                <b>DVD</b>
                <img
                    src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
                    alt=""
                />
            </div>
        </div>
    );
}

export default Header;
