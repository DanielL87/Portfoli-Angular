import React from 'react';

function AboutMe() {
  return (
    <div>
      <style jsx>{`
        h2{
            font-size: 20px;   
        }
        `}
      </style>
      <div className='contactInfo'>
        <h2>Contact Info</h2>
        <hr />
        <p><a href='https://github.com/DanielL87'>Github</a> | <a href='https://www.linkedin.com/in/daniel-lira-ba462217a/'>LinkedIn</a></p>
        <h2>I was born and raised in Southern California. Have a background in Architectural Design.
            I am currently enrolled at Epicodus, where I hope to evolve my current skillset.
        </h2>
        <p>Currently Live in Seattle, WA</p>
        <p>Contact Me at <a href='devidra87@gmail.com'>devidra87@gmail.com</a></p>
      </div>
    </div>
  );
}
  
export default AboutMe;