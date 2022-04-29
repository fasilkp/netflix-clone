import React, {useEffect, useState} from 'react'
import {API_KEY, imageUrl} from "../../urls"
import VideoStream from '../VideoStream/VideoStream'
import MyList from '../MyList/MyList'
import axios from '../../axios'
import "./banner.css"
import {Link} from 'react-router-dom'
import App from '../../App'

function Banner(props) {
    const [movie, setMovie] = useState([])
    function randomNumber(){
        let rN = Math.floor(Math.random() * 10);
        return rN
    }
    // onClick={()=>{setId(movie.id)}}
    useEffect(()=>{
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            let rN=randomNumber()
            setMovie(response.data.results[rN])
            console.log(response.data.results[rN].id);
        })
    },[])
    
    return (
            <div className="banner" style={{backgroundImage: `url(${movie ? imageUrl+movie.backdrop_path : ''})`}}>
                <div className="banner-container">
                    <h1 className="banner-head">{movie ? movie.title : ''}</h1>
                    <p className="banner-dscrptn">{movie ? movie.overview : ''}</p>
                    <div className="btns">
                        <Link to="/video-stream"><button onClick={()=>props.data.changeId(movie.id)} className="btn1">Play</button></Link>
                        <Link to="/my-list"><button className="btn2">My List</button></Link>
                    </div>
                </div>
            
                
            </div>
            
    )
}
export default Banner
