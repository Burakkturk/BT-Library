import React from 'react'
import { IconContainer, InfoContainer, ProfileImg,AboutContainer } from './About.style'
import profile from "../../components/icon/Icon"
import {iconData} from "../../helper/iconData" 
import Icon from '../../components/icon/Icon'

const About = () => {
  return (
    <AboutContainer>
      <ProfileImg src={profile} alt='Burak'/>
      <InfoContainer>
        <h2>Hi, I'm Burak Türk</h2>
        <h3>
          I'm currently learning different full-stack development languages.
        </h3>
        <h4>
          I already know JavaScript, ReactJS, Next.js, React Native, Django, Node.js, MongoDB, SQL, Phyton, and AWS services.
        </h4>
        <h4> You can ask me anyhthing you want to know</h4>
        <IconContainer>
        {iconData.map(item => (
            <a href={item.href}>
              <Icon key={item.icon} {...item} />
            </a>
          ))}
        </IconContainer>
      </InfoContainer>
    </AboutContainer>
  )
}

export default About