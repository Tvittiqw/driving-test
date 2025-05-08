import React from "react";
import "./App.css";
import NavCard from "./components/NavCard";
import navigationList from "./constants/mainPage";
import signs from "./constants/roadSigns/roadSigns";

function App() {
  const renderNavigationList = () => {
    return navigationList.map((item) => {
      const totalQuestions = signs[item.type].length;

      return (
        <NavCard
          key={item.title}
          card={item}
          questionQuantity={totalQuestions}
        />
      );
    });
  };

  return <div className="testsContaiter">{renderNavigationList()}</div>;
}

export default App;
