import React from 'react'
import Banner from '../banner/Banner'
import Header from '../Header/Header'
import Rowpost from '../Rowpost/Rowpost'

function Home() {
  return (
    <>
    <Header/>
    <Banner/>
    <Rowpost header="Latets" />
    <Rowpost header="Netflix Originals" small={true} />
    </>
  )
}

export default Home