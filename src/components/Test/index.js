import { useState, useEffect, useCallback } from "react";
import signs from "../../constants/roadSigns/roadSigns";
import './index.css'
import shuffle from "../../helpers/shuffleArray";
import TestCard from "../TestCard";
import Conclusion from "../Conclusion";
import { useParams } from "react-router-dom";

export default function Test() {
    const { testName } = useParams()
    const [currentStep, setCurrentStep] = useState('test')
    const [usersAnswer, setUsersAnswer] = useState('')
    const [basicSigns, setBasicSigs] = useState([])
    const [currentSignIndex, setCurrentSignIndex] = useState(0)
    console.log('basicSigns',basicSigns)
    console.log('currentSignIndex',currentSignIndex)
    const totalQuestions = signs[testName].length;
    
    const initState = useCallback(() => {
        const shuffledArray = shuffle(signs[testName])
        setBasicSigs(shuffledArray)
    }, [testName])

    useEffect(()=>{
        initState();
    }, [testName, initState])

    const handleInputChange = (e) => {
        setUsersAnswer(e.target.value)
    }

    const handleVoiceRecognition = (text) => {
        setUsersAnswer(text)
    }

    const submitSign = (isHint) => {
        const updatedBasicSigns = basicSigns.map((sign, index) => {
            if(index === currentSignIndex) {
                const updatedCurrentSign = {
                    ...sign,
                    usersAnswer: isHint ? 'used hint' : usersAnswer,
                    usedHint: isHint,
                }

                if(isHint) {
                    updatedCurrentSign.isCorrect = false;
                }

                return updatedCurrentSign
            } else {
                return sign
            }
        })

        if(isHint){
            setCurrentSignIndex(currentSignIndex + 1)
            setCurrentStep('test')
            return
        }

        setUsersAnswer('')
        setBasicSigs(updatedBasicSigns)
        setCurrentStep('check')
    }

    const backToStart = () => {
        initState()
        setCurrentStep('test')
    }

    const handleNextSign = (type) => {
        setBasicSigs(prevBasicSigns => {
            return prevBasicSigns.map((sign, index) => {
                return index === currentSignIndex
                    ? {...sign, isCorrect: type === 'correct'}
                    : sign;
            });
        });

        setCurrentSignIndex(currentSignIndex + 1);
        setCurrentStep(currentSignIndex + 1 === basicSigns.length ? 'conclusion' : 'test');
    }

    const renderTest = () => {
        const commonProps = {
            handleInputChange: handleInputChange,
            handleVoiceRecognition: handleVoiceRecognition,
            submitSign: submitSign,
            total: totalQuestions,
            currentQuestion: currentSignIndex,
            inputValue: usersAnswer
        };

        switch(currentStep) {
            case 'check':
                const signToCheck = basicSigns[currentSignIndex]

                return (
                    <TestCard
                        {...commonProps}
                        icon={signToCheck.icon}
                        label={signToCheck.label}
                        type={signToCheck.type}
                        description={signToCheck.description}
                        usersAnswer={signToCheck.usersAnswer}
                        usedHint={signToCheck.usedHint}
                        handleNextSign={handleNextSign}
                        isCheck={true}
                    />
                )
            case 'conclusion':
                const mistakesArr = basicSigns.filter(item => !item.isCorrect)
                const mistakesAmount = mistakesArr.length;

                return (
                    <Conclusion
                        mistakesAmount={mistakesAmount}
                        totalSigns={totalQuestions}
                        mistakesArr={mistakesArr}
                        backToStart={backToStart}
                     />
                )
            default:
                const currentSign = basicSigns[currentSignIndex]

                if(!currentSign) return null

                return (
                    <TestCard
                        {...commonProps}
                        icon={currentSign.icon}
                        label={currentSign.label}
                        type={currentSign.type}
                        description={currentSign.description}
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
