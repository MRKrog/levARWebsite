import React from 'react';
// import { connect } from "react-redux";
// import * as action from "../../redux/actions";
import Hero from '../../components/Hero/Hero.js'
import FeatureBar from '../../components/FeatureBar/FeatureBar.js'
import FeatureRow from '../../components/FeatureRow/FeatureRow.js'
import FourCarousel from '../../components/FourCarousel/FourCarousel.js'


const Home = () => {
  return (
    <div className="Home">
      <Hero />
      <FeatureBar />
      <FeatureRow />
      <FourCarousel />
      <FeatureRow />

    </div>
  )
}

export default Home;
