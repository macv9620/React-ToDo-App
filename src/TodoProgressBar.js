import React from "react";
import './TodoProgress.css';

function TodoProgressBar({total, completed}) {
  const progressPercentage = Math.round(Number(completed)/Number(total)*100);

  const progressPercentageString = {width: `${progressPercentage}%`};

  return (
    <div className="w3-light-grey w3-round-xlarge">
      <div className="w3-container w3-blue w3-round-xlarge" style={progressPercentageString}>
        {`${progressPercentage}%`}
      </div>
    </div>
  );
}

export { TodoProgressBar };
