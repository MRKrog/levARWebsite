import React from 'react';
import { connect } from "react-redux";
import * as action from "../../redux/actions";

import Hero from '../../components/Hero/Hero.js'
import FeatureBar from '../../components/FeatureBar/FeatureBar.js';
import FeatureRow from '../../components/FeatureRow/FeatureRow.js';
import FourCarousel from '../../components/FourCarousel/FourCarousel.js';
import FeatureRowSingle from '../../components/FeatureRowSingle/FeatureRowSingle.js';

const Home = () => {
  return (
    <div className="Home">
      <Hero />
      <FeatureBar />
      <FeatureRow />
      <FourCarousel />
      <FeatureRowSingle />
    </div>
  )
}

export const mapStateToProps = state => ({
  loading: state.loading,
});

export const mapDispatchToProps = dispatch => ({
  setLoading: data => dispatch(action.setLoading(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
