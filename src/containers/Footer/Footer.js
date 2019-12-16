import React, { Component } from 'react';

class Footer extends Component {

  render() {
    return (
      <div className="Footer">
        <div className="Footer-Container">
          <section className="Footer-Top">
            <div className="row">
              <h5 className="levarH5">LEVAR HQ</h5>
              <p className="levarCopy">
                <b>Augmented Reality Solutions</b><br/><br/>
                levAR 222 W Merchandise Mart Plaza<br/>
                #1212, Chicago, IL 60604
              </p>
              <a href="mailto:info@levar.co">info@levar.co</a>
            </div>
            <div className="row footerForm">
              <div className="klaviyo-form-KDWZdH"></div>
            </div>
          </section>
          <section className="Footer-Bottom">
            <p>2019 levAR, All Rights Reserved</p>
          </section>
        </div>
      </div>
    )
  }
}

export default Footer;
