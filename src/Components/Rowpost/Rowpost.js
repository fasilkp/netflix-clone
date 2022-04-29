import React, {useEffect, useState} from 'react'
import {imageUrl} from "../../urls"
import axios from '../../axios'
import "./rowpost.css"
// import App from '../../App'
import {Link} from 'react-router-dom'

function Rowpost(props) {
    const [movies, setMovies]=useState([])
    useEffect(()=>{
        axios.get(props.genre).then((response)=>{
            setMovies(response.data.results)
        })
    },[])
    
    return (
        <div className="rowpost">
            <h2 className="title">{props.title}</h2>
            <div className="rowposts">
                {movies.map((data)=>{  
                        if(data.id===126280)
                            data.name="Movie Title"
                        else if(data.id===440249)
                            {data.title="Movie Title"
                            data.backdrop_path="/iXbWpCkIauBMStSTUT9v4GXvdgH.jpg"}
                        return(
                                <div className="image" id={props.isSmall ? "smallImage" : "bigImage"} onClick={()=>props.data.changeId(data.id)} style={{backgroundImage: `url(${data ? imageUrl+data.backdrop_path : ''})`}}>
                                    <h2>{data.title ? data.title : data.name}</h2>
                                    <p className="row-desc">{data ? data.overview : ''}</p>
                                    <Link to="/video-stream"><i class="fas fa-play"></i></Link>
                                </div>
                            )
                    })
                }
            </div>
        </div>
    )
}

export default Rowpost