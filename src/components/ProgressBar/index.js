import React from 'react';
import './index.css'

const ProgressBar = ({ progressPercent, totalQuestions, currentQuestion }) => {
    return (
      <div className='progressWrapper'>
        <div className="progress-bar">
            <div className="progress" style={{ width: `${progressPercent}%` }}></div>
        </div>
        <p className='greyText'>{`Question ${currentQuestion}/${totalQuestions}`}</p>
      </div>  
      
    );
  };

  export default ProgressBar;