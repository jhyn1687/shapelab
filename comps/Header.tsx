import React from "react"
import Image from 'next/image'
import headerImage from '../public/header.jpg'


const Header = ({ children }: any) => {
  return (
    <div className="header">
      <div className="header-image">
        <Image src={headerImage} alt="me" layout="responsive"/>
      </div>
      { children }
    </div>
  )
}

export default Header