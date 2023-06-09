import "./TodoProgress.css";


function TodoProgressBar({totalTodos, completedTodos}) {
  if (totalTodos === 0) {
    return (
      <div className="w3-light-grey w3-round-xlarge">
        <div
          className="w3-container w3-blue w3-round-xlarge"
          style={{width: '0%'}}
        >
          0%
        </div>
      </div>
    );
  } else {
    const progressPercentage = Math.round(
      (Number(completedTodos) / Number(totalTodos)) * 100
    );

    const progressPercentageString = { width: `${progressPercentage}%` };

    return (
      <div className="w3-light-grey w3-round-xlarge">
        <div
          className="w3-container w3-blue w3-round-xlarge"
          style={progressPercentageString}
        >
          {`${progressPercentage}%`}
        </div>
      </div>
    );
  }
}

export { TodoProgressBar };
