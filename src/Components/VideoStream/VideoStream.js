import React , {useState, useEffect} from 'react'
import YouTube from 'react-youtube'
import Rowpost from '../Rowpost/Rowpost'
import axios from '../../axios'
import {API_KEY} from "../../urls"
import "./videostream.css"
function VideoStream(props) {
    const [urlId, seturlId]= useState('')
    const [comment, setComment]=useState([])
    const opts = {
        height: '500',
        width: '100%',
        playerVars: {
          autoplay: 0,
        },
      };
      let id=props.id 
    useEffect(()=>{
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US&=&=43969`).then((response)=>{   
            if(response.data.results.length!==0){
                seturlId(response.data.results[0])
            }
            else{
                alert('trailor not available')
            }})
        axios.get('https://www.googleapis.com/youtube/v3/commentThreads?key=AIzaSyD2a_bbp6SuhKEnRUHa82sCWzy1qTnp1ZM&textFormat=plainText&part=snippet&videoId=kffacxfA7G4&maxResults=50').then((res)=>{   
            setComment(res.data.items)
            console.log(comment[0]);
            })
    },[])
    return (
        
        <div className="video">
            {urlId ? 
                <div className="yt-video">
                    <YouTube opts={opts} videoId={urlId.key}/>
                    
                </div> : "no video avilable"}
                <div className="comments">
                    <h3>Comments</h3>
                    <div className="ip-field">
                        <input type="text" placeholder="Type Your Comment here..." className="input"/>
                        <button className="sent-btn">Send </button>
                    </div>
                    {comment.map((obj)=>{
                                return(
                                    <div className="comment-box">
                                            <div className="author">
                                                <img src={obj.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                                                <h3>{obj.snippet.topLevelComment.snippet.authorDisplayName}</h3>
                                            </div>
                                            <p className="comment-para">{obj.snippet.topLevelComment.snippet.textDisplay}</p>
                                            <div className="impression">
                                                <i class="fas fa-thumbs-up"></i><span>64</span>
                                                <i class="fas fa-thumbs-down"></i><span>13</span>
                                                </div>
                                    </div>
                                )
                            })
                        }
                </div>
                
        </div>     
    )
}

export default VideoStream
