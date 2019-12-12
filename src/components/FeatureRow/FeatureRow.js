import React from 'react';


const FeatureRow = () => {
  return (
    <div className="FeatureRow">
          <div className="container">
                <div className="row image">
                 <img width="100%" src={require('../../assets/images/integrationsmaster.png')} />
                </div>
                <div className="row" copy>
                  <div className="levarCopy">
                    <h3 className="mb-0">B2C E-Commerce &amp; Marketing</h3><br />
                    <p>
                      With a few clicks, and no technical lift, integrate your AR assets into your existing e-commerce site. With our Shopify app you will learn about your products, create high-fidelity AR assets, and tailor a next-generation experience for your customers.<br /><br />
                      AR is helping e-commerce buisnesses cut costs and generate more revenue everyday. Learn how you can do the same.
                    </p>
                    <button type="button" className="levarBtn" onClick="window.location.href = 'https://login.levarstaging.com/signup?response_type=token&client_id=49kg2mb5v9tamsbobbe25tk024&redirect_uri=https://levarstaging.com/';">Get Started Now!</button>
                  </div>
                </div>
        </div>
      </div>
  )
}

export default FeatureRow
