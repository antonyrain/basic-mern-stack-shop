import "./AboutScreen.css";
import React from 'react';


const AboutScreen = () => {
    return (
      <div className="aboutscreen">
        <h1 className="about-screen-title">About us</h1>
        <div className="about-screen-content">
          <p><br/>Easy path to the perfect online shop:</p>
          <p>Custom Website Development From Scratch. Build and run your ecommerce website with us:</p>
          <p><br/><a href="https://www.fiverr.com/antonyrain/do-mern-application-for-you"><button className="button-link">Fiverr</button></a></p>
          <p><br/><a href="https://www.upwork.com/freelancers/~0105ee3369b81bd58c"><button className="button-link">Upwork</button></a></p>
          <p><br/>Services:</p>
          <p><br/>Front To Back - full stack application with React.js, Redux, Node.js, Express.js and MongoDB.</p>
          <p><br/>- Building a backend API with Node.js and Express.js.</p>
          <p>- Building a frontend to work with the API. Integrating a great React app with a backend.</p>
          <p>- Using Redux for app state management.</p>
          <p>- Deploy application to VPS or Cloud Server.</p>
          <p>- Install and Configure Nginx on Ubuntu</p>
          <p>- Binding domain name.</p>
          <p>- HTTPS SSL</p>
          <p><br/>The preferred way of contacting me is to mail me at:</p>
          <p>ragozin01@gmail.com</p>
        </div>
      </div>
    );
  };
  
  
  export { AboutScreen };