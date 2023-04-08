import React from "react";
import './TodoProgress.css';

function TodoProgressBar() {
  return (
    <div className="w3-light-grey w3-round-xlarge">
      <div className="w3-container w3-blue w3-round-xlarge" style={{width: "50%"}}>
        50%
      </div>
    </div>
  );
}

export { TodoProgressBar };
