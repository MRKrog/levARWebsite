import React from 'react';

const FeatureRow = () => {

  return (
    <div className="container">
      <div className="FeatureRow">
        <div className="row image">
          <img width="100%" alt="levar images" src={require('../../assets/images/integrationsmaster.png')} />
        </div>
        <div className="row copy-container">
          <h3 className="levarH3">B2C E-Commerce &amp; Marketing</h3>
          <p className="levarCopy">
            With a few clicks, and no technical lift, integrate your AR assets into your existing e-commerce site. With our Shopify app you will learn about your products, create high-fidelity AR assets, and tailor a next-generation experience for your customers.<br /><br />
            AR is helping e-commerce buisnesses cut costs and generate more revenue everyday. Learn how you can do the same.
          </p>
          <button type="button" className="levarBtn">Get Started Now!</button>
        </div>
      </div>
      <div className="FeatureRow">
        <div className="row copy-container">
          <h3 className="levarH3">B2C E-Commerce &amp; Marketing</h3>
          <p className="levarCopy">
            Differentiating your products on a crowded e-commerce landscape is more important than ever. Traditional methods of product visualization are not enough for today's hyper-informed buyers.<br/><br/>
            Enter next generation 3D product visualization.<br/><br/>
            While the means for producing 3D content are in-accessible for most e-commerce proffessionals, levAR dramatically simplifies the process.<br/><br/>
            Through a propietary pipeline combining Photogrammetry and Tradtional 3D Modeling, levAR creates the most lifelike versions of your product on the market -- and we do it fast.<br/><br/>
            We’ll work with you to create the best 3D representations of your products at an affordable price.
          </p>
          <button type="button" className="levarBtn">Get Started Now!</button>
        </div>
        <div className="row image">
          <img width="100%" alt="levar images" src={require('../../assets/images/assetpage1.png')} />
        </div>
      </div>
    </div>
  )
}

export default FeatureRow
