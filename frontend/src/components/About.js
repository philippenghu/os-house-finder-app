import React from 'react';
import ProfessionalCard from './ProfessionalCard'


function About() {
  return (
    <>
      <h1 className='text-center'>About us</h1>
      <div className='container-xl pt-4 d-flex  justify-content-center'>
     
          <ProfessionalCard name='Employee 1' title='Frontend developer' description='1st Employee' image='images/Shirt.png' />
          <ProfessionalCard name='Employee 2' title='Backend developer' description='2st Employee' image='images/Shirt.png' />
          <ProfessionalCard name='Employee 3' title='Product manager' description='3st Employee' image='images/Shirt.png' />
          <ProfessionalCard name='Employee 4' title='UX designer' description='4st Employee' image='images/Shirt.png' />
        
      </div>
    </>
  );
}

export default About;