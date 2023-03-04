import React from 'react'
import Banner from '../banner/Banner'
import Header from '../Header/Header'
import Rowpost from '../Rowpost/Rowpost'

function Home() {
  return (
    <>
    <Header/>
    <Banner/>
    <Rowpost header="Trending" genre='trending' />
    <Rowpost header="Netflix Originals" small={true} genre='originals' />
    <Rowpost header="Action" small={true} genre='action' />
    <Rowpost header="Comedy" small={true} genre='comedyMovies' />
    <Rowpost header="Horror" small={true} genre='horrorMovies' />
    </>
  )
}

export default Home