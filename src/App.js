import React from 'react';
import './App.css';
import NavCard from './components/NavCard';
import navigationList from './constants/mainPage';

function App() {

  const renderNavigationList = () => {
    return (
      navigationList.map(item=>{
        return (
          <NavCard 
            key={item.title}
            card={item}
          />
        )
      })
    )
  }

  return (
      <div className='testsContaiter'>
        {renderNavigationList()}
      </div>
  );
}

export default App;
