import React from 'react';

const About = () => {
  return (
    <div>
      <h1 className='display-4'>About Contact manager</h1>
      <p className='lead'>A simple Contact Manager Web Application</p>
      <p className='secondary-text'>Version 0.0.1</p>
    </div>
  );
};
//If we want to access params passedin URL
//props.match.params.param_name

export default About;
