import React from 'react'

import{Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import{CTA, Brand, Navbar } from '/components';

const App = () => {
  return (
    <div className= "App">
        <div className= "graidient_bg">
            <Navbar />
            <Header />


        </div>
        <Brand />
        <WhatGPT3 />
        <Fetures />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
}

export default App