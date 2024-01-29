import React from 'react';
import './App.css';
import TestCard from './components/NavCard';
import testsList from './constants/mainPage';

function App() {

  const renderTestsList = () => {
    return (
      testsList.map((item, index)=>{
        return (
          <TestCard 
            key={index}
            card={item}
          />
        )
      })
    )
  }

  return (
      <div className='testsContaiter'>
        {renderTestsList()}
      </div>
  );
}

export default App;
