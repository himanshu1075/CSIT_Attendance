import React from 'react';
import './FalseCredentials.css';

function FalseCredentials() {
  return (
    <div className="false-credentials">
      <h3>Invalid credentials. Please try again.</h3>
      <div className="popup">
        <p>Invalid username or password</p>
      </div>
    </div>
  );
}

export default FalseCredentials;
