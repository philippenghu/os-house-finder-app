import React from 'react';
import { Link } from 'react-router-dom';
import HomeCarousel from '../components/HomeCarousel';
import About from '../components/About';

const Landing = () => {

  return (
    <div>
      <HomeCarousel />
      <About/>
    </div>
  );
};

export default Landing;
