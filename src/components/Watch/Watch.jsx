import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import YouTube from "react-youtube";
import { API_KEY } from "../../utils/urls";
import axios from "axios";
import novideo from "../../images/novideo.png";
import "./watch.css";

// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { RiArrowDownSLine } from "react-icons/ri";

function Watch() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [moviedetails, setMoviedetails] = useState({});

  const opts = {
    height: "750px",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  useEffect(() => {
    async function fetchData() {
      let { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US&=&=43969`
      );
      if (data) {
        setMovie(data.results[0]);
      }
      let res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
      );
      console.log(res.data);
      setMoviedetails(res.data);
    }
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className="watchMain">
        {movie?.key ? (
          <div className="watch-container">
            <YouTube videoId={movie.key} opts={opts} />
          </div>
        ) : (
          <div className="novideo-container">
            <img src={novideo} alt="" />
            <h3>No Video Available</h3>
          </div>
        )}
        <div className="description-container">
          <Accordion
            style={{ padding: "5px 10px" }}
            sx={{
              backgroundColor: "#292929",
            }}
          >
            <AccordionSummary
              sx={{
                backgroundColor: "#292929",
                color: "white",
              }}
              expandIcon={<RiArrowDownSLine className="textWhite" />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{moviedetails.original_title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  color: "white",
                }}
              >
                {moviedetails.overview}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </>
  );
}

export default Watch;
