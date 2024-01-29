import { useState, useEffect } from "react";
import ROAD_SIGNS from "../../constants/roadSigns/roadSigns";
import './index.css'
import shuffle from "../../helpers/shuffleArray";
import TestCard from "../TestCard";
import Conclusion from "../Conclusion";

export default function Test() {
    const [currentStep, setCurrentStep] = useState('test')
    const [usersAnswer, setUsersAnswer] = useState('')
    const [basicSigns, setBasicSigs] = useState([])
    const [passedSigns, setPassedSigns] = useState([])
    const [mistakesArr, setMistakes] = useState([])
    const totalQuestions = ROAD_SIGNS.length;

    useEffect(()=>{
        resetState();
    }, [])

    const resetState = () => {
        const shuffledArray = shuffle(ROAD_SIGNS)
        setBasicSigs(shuffledArray)
        setPassedSigns([])
        setMistakes([])
    }
    
    const handleInputChnage = (e) => {
        setUsersAnswer(e.target.value)
    }

    const submitSign = (isHint) => {
        const currentSign = basicSigns[0]
        const mainArray = basicSigns;
        const updatedCurrentSign = {
            ...currentSign,
            usersAnswer: isHint ? 'used hint' : usersAnswer,
            usedHint: isHint
        }

        if(isHint){
            updatedCurrentSign.isCorrect = false
        }

        mainArray.splice(0, 1)
        setPassedSigns([...passedSigns, updatedCurrentSign])
        setBasicSigs(mainArray)
        setUsersAnswer('')
        if(isHint){
            return setCurrentStep('test')
        }
        setCurrentStep('check')
    }

    const backToStart = () => {
        resetState()
        setCurrentStep('test')
    }

    const switchToFinalStep = () => {
        const filteredObjects = passedSigns.filter(sign => sign.isCorrect === false);
        
        setMistakes(filteredObjects)
        setCurrentStep('conclusion')
    }

    const handleNextSign = (type) => {
        console.log('handleNextSign')
        const newPassedSigns = [...passedSigns]

        if(type === 'correct') {
            newPassedSigns[newPassedSigns.length - 1].isCorrect = true;
            setPassedSigns(newPassedSigns)
            setCurrentStep('test')
        }

        if(type === 'error') {
            newPassedSigns[newPassedSigns.length - 1].isCorrect = false;
            setPassedSigns(newPassedSigns)
            setCurrentStep('test')
        }

        if(!basicSigns.length){
            switchToFinalStep()
        }
    }
    
    const renderTest = () => {
        switch(currentStep) {
            case 'check':
                const signToCheck = passedSigns[passedSigns.length - 1]
        
                return (
                    <TestCard
                        icon={signToCheck.icon}
                        handleInputChnage={handleInputChnage}
                        submitSign={submitSign}
                        label={signToCheck.label}
                        type={signToCheck.type}
                        description={signToCheck.description}
                        total={totalQuestions}
                        usersAnswer={signToCheck.usersAnswer}
                        usedHint={signToCheck.usedHint}
                        handleNextSign={handleNextSign}
                        currentQuestion={totalQuestions - basicSigns.length}
                        isCheck={true}
                    />
                )
            case 'conclusion':
                const mistakesAmount = mistakesArr.length;
                const totalSigns = passedSigns.length;
        
                return (
                    <Conclusion
                        mistakesAmount={mistakesAmount}
                        totalSigns={totalSigns}
                        mistakesArr={mistakesArr}
                        backToStart={backToStart}
                     />
                )
            default:
                const currentSign = basicSigns[0]

                if(!currentSign) return

                return (
                    <TestCard
                        icon={currentSign.icon}
                        handleInputChnage={handleInputChnage}
                        submitSign={submitSign}
                        label={currentSign.label}
                        type={currentSign.type}
                        description={currentSign.description}
                        total={totalQuestions}
                        currentQuestion={totalQuestions - basicSigns.length}
                    />
                )
          }
    }

    return (
        <div className="main">
            {renderTest()}
        </div>
    );
}