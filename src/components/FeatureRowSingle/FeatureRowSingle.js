import React from 'react';

const FeatureRowSingle = () => {

  return (
    <div className="container">
      <div className="FeatureRowSingle">
        <div className="row copy-container">
          <h3 className="levarH3">Yes, we make all our own assets</h3>
          <p className="levarCopy">
             Your assets are our business. We don't farm your products to 3rd parties like the other guys. Good 3D Art is what makes AR valuable. We're not just a technology company. levAR knows that for your business to be succesful with AR, you need no technical lift and the best looking assets.<br /><br />
             No matter if your users are on a mobile device, their desktop, or a VR headset, our assets just work.<br /><br />
             Take a look for yourself.
          </p>
          <button type="button" className="levarBtn">Learn More!</button>
        </div>
        <div className="row image">
          <img width="100%" alt="levar images" src={require('../../assets/images/Tire-asset.png')} />
        </div>
      </div>
    </div>
  )
}

export default FeatureRowSingle
