import React, {Component} from 'react';
import Head from 'next/head'
import Image from 'next/image'
import headerImage from '../public/header.jpg'

const Home = () => {
  return (
    <div>
      <Head>
        <title>My a title</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Head>
        <meta property="og:title" content="My old title" key="title" />
      </Head>
      <Image src={headerImage} alt="me" layout="responsive"/>
      <p>Hello world!</p>

    </div>
  )
}

export default Home;
