import Navbar  from './Components/Navbar/Navbar';
import './App.css';
import {useState} from 'react'
import Banner from './Components/Banner/Banner';
import VideoStream from './Components/VideoStream/VideoStream';
import MyList from './Components/MyList/MyList';
import Rowpost, { URLID } from './Components/Rowpost/Rowpost';
import {action, originals, RomanceMovies, horrorMovies, comedyMovies, Documentaries, trending} from './urls'
import {BrowserRouter as Router,Route, Link} from 'react-router-dom'

function App() {
  const [id, setId]=useState('hai')
  const changeId=(childId)=>{
      setId(childId)
  }
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Route exact path="/">
            <Banner data={{id:id, changeId:changeId.bind(this)}}/>
            <Rowpost title="Trending" genre={trending} data={{id:id, changeId:changeId.bind(this)}}/>
            <Rowpost title="Netflix Originals" genre={originals} isSmall data={{id:id, changeId:changeId.bind(this)}}/>
            <Rowpost title="Action" genre={action} isSmall data={{id:id, changeId:changeId.bind(this)}}/>
            <Rowpost title="Horror Movies" genre={horrorMovies} isSmall data={{id:id, changeId:changeId.bind(this)}}/>
            <Rowpost title="Romance Movies" genre={RomanceMovies} isSmal data={{id:id, changeId:changeId.bind(this)}}/>
            <Rowpost title="Comedy Movies" genre={comedyMovies} isSmall data={{id:id, changeId:changeId.bind(this)}}/>
            <Rowpost title="Documnetary" genre={Documentaries} isSmall data={{id:id, changeId:changeId.bind(this)}}/>
        </Route>
        <Route path="/video-stream">
          <VideoStream id={id}/>
        </Route>
        <Route path="/series-tv">
          <h1>series tv</h1>
        </Route>
        <Route path="/my-list">
          <MyList></MyList>
        </Route>
        
        

      </div>
    </Router>
  );
}

export default App;
