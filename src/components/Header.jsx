import React from 'react';

function Header(){
  var myStyledComponentStyles = {
    backgroundColor: '#4682b4',
    fontFamily: 'sans-serif',
    paddingTop: '50px'
    
  };
  return (
    <div style={myStyledComponentStyles}>
      <h1>Help Queue!</h1>
    </div>
  );
}

export default Header;