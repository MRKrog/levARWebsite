import React from 'react';

const FourCarousel = () => {
  return (
  <div className="container">
    <div className="FourCarousel">
      <section className="FourCarousel-Container">
        <div className="carousel-category">
          <div className="icon-box">
            <div className="icon-box-icon">
              <img alt="Add Alt Tag Copy" src={require('../../assets/images/LevAR Portal.png')} width={67} />
            </div>
          </div>
          <h4 className="category-label">levAR Portal</h4>
          <p className="levarCopy">The levAR Portal connects you with all your product data, AR assets, product and AR performance and allows</p>
        </div>
        <div className="carousel-category">
          <div className="icon-box">
            <div className="icon-box-icon">
              <img alt="Add Alt Tag Copy" src={require('../../assets/images/Asset Creation.png')} width={73} />
            </div>
          </div>
          <h4 className="category-label">Asset Creation</h4>
          <p className="levarCopy">We create high fidelity 3D assets from your physical products. All done in house with straightforward pricing.</p>
        </div>
        <div className="carousel-category">
          <div className="icon-box">
            <div className="icon-box-icon">
              <img alt="Add Alt Tag Copy" src={require('../../assets/images/Integrations.png')} width={67} className="mt-3" />
            </div>
          </div>
          <h4 className="category-label">Integrations</h4>
          <p className="levarCopy ">Integrate your new AR assets into your existing e-commerce and marketing workflows - with one click.</p>
        </div>
        <div className="carousel-category">
          <div className="icon-box">
            <div className="icon-box-icon">
              <img alt="Add Alt Tag Copy" src={require('../../assets/images/B2B Catalog App.png')} width={67} />
            </div>
          </div>
          <h4 className="category-label">B2B Catalog App</h4>
          <p className="levarCopy ">Cut down on physical product samples. Instead, push your AR assets straight to your buyers with our 1st party app.</p>
        </div>
      </section>
    </div>
  </div>
  )
}

export default FourCarousel;
