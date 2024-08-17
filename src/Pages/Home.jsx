import React, { useState } from 'react'
import './pages.css'
import Header from '../Components/Header'
import ExploreMenu from '../Components/ExploreMenu'
import FoodDisplay from '../Components/FoodDisplay'
import AppDownload from '../Components/AppDownload'

function Home() {


    const [category , setCategory] = useState('All')

  return (
    <div>
        <Header/>
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category} />
        <AppDownload/>
    </div>
  )
}

export default Home