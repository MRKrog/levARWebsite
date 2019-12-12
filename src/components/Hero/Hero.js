import React from 'react';

const Hero = () => {
  return (
    <div className="Hero">
      <div className="container">
        <div className="column video">
          <video width="100%" src={require('../../assets/images/rotatecube.mp4')} autoPlay loop muted />
        </div>
        <div className="column text-content">
          <h2 className="levarH2">Augmented Reality that moves your business forward</h2>
          <p className="levarCopy">Drive Engagement. Reduce Costs. Increase Sales.</p>
          <button type="button" className="levarBtn" onClick="">Login!</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
