import React from 'react';

import mikePhoto from '../../assets/images/team/mike.jpg';
import tylerPhoto from '../../assets/images/team/tyler.jpg';
import trePhoto from '../../assets/images/team/tre.jpg';
import vikPhoto from '../../assets/images/team/vik.jpg';
import leahPhoto from '../../assets/images/team/leah.jpg';
import benCullyPhoto from '../../assets/images/team/BenCully.jpg';
import danPhoto from '../../assets/images/team/dan.jpg';
import benPhoto from '../../assets/images/team/ben.jpg';

const About = () => {
  return (
    <div className="container">
      <div className="About">
        <div className="About-Intro">
          <div className="row">
            <h2>The levAR Team</h2>
            <p className="levarCopy">
              The levAR team is made up of a people who commit themselves
              to being driven and creative. It's a group that believes
              in working together to solve hard problems while having
              fun while doing it. We work together every day to build a
              platform that works for today's ecommerce businesses and
              brands but also one that will continue to provide value
              in the future.
            </p>
          </div>
        </div>
        <div className="About-Employees">
          <section className="employee" style={{ backgroundImage: `url(${trePhoto})` }}>
            <p className="name">Tre Lucas</p>
            <p className="title">CEO</p>
          </section>
          <section className="employee" style={{ backgroundImage: `url(${tylerPhoto})` }}>
            <p className="name">Tyler Blake</p>
            <p className="title">CMO</p>
          </section>
          <section className="employee" style={{ backgroundImage: `url(${leahPhoto})` }}>
            <p className="name">Leah Pizzella</p>
            <p className="title">Operations Manager</p>
          </section>
          <section className="employee" style={{ backgroundImage: `url(${danPhoto})` }}>
            <p className="name">Daniel Esrig</p>
            <p className="title">CTO</p>
          </section>
          <section className="employee" style={{ backgroundImage: `url(${benPhoto})` }}>
            <p className="name">Ben Chapman</p>
            <p className="title">SHADE Engineer</p>
          </section>
          <section className="employee" style={{ backgroundImage: `url(${benCullyPhoto})` }}>
            <p className="name">Ben Cully</p>
            <p className="title">Full Stack Engineer</p>
          </section>
          <section className="employee" style={{ backgroundImage: `url(${mikePhoto})` }}>
            <p className="name">Michael Krog</p>
            <p className="title">Full Stack Engineer</p>
          </section>
          <section className="employee" style={{ backgroundImage: `url(${vikPhoto})` }}>
            <p className="name">Vikram Bhaduri</p>
            <p className="title">Graphics Engineer and Front End Developer</p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default About;
