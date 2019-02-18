import React from 'react';
import Resume from '../assets/Resume.jpg';

function MySampleComponent(){
  return (
    <div class="container">
      <style jsx>{`
      img {
        height: 50%;
        width: 50%;
      }
    `}
    </style>
      <div>
        <img src={Resume}/>
      </div>
    </div> 
  );
}

export default MySampleComponent;