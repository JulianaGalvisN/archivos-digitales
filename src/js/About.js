import React from 'react'
import Banner from './Banner';
import Navbar from './Navbar';
import este_manual from '../images/este-manual.png'

function About(props) {
  return (
    <div className="About">

      <Navbar/>

      <Banner
      title1="Este"
      title2="manual"
      bgImage={este_manual}
      height="350px"
      margin="true"
      />
    </div>

  );
}

export default About;
