import React from 'react'
import "../src/components/Home.css"
import Image from '../src/components/Image'
import Arrow from '../assert/Arrow.png'
import IntroductionTitle from '../src/components/IntroductionTitle'
import ArrowText from '../src/components/ArrowText'
export default function Home() {
    
  return (
    <div id="homediv">
      <div id="mobileSizediv">
    <IntroductionTitle/>
    </div>
      {/* <img src="../assert/Arrow.png" id='ArrowImg' /> */}
      <ArrowText/>
    <div id="ArrowTextDiv">
        <img src={Arrow} id='ArrowImg' ></img>
        <h2 id="name">Hello,I Am<br></br>ManojKumar</h2>
    </div>
    </div>  
  )
}
