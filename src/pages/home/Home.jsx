import React from 'react'
import { CardContainer, HomeContainer, HomeImage } from './Home.style'
import Card from '../../components/card/Card'
import Header from '../../components/header/Header'
import homeImg from "../../assets/books.jpg"

const Home = () => {
  return (
    <HomeContainer>
      <Header/>
      <HomeImage>
        <img src={homeImg} alt='Home'/>

      </HomeImage>
      <CardContainer>
        <Card/>
      </CardContainer>
    </HomeContainer>
  )
}

export default Home