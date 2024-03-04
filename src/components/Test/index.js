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
    const [currentSignIndex, setCurrentSignIndex] = useState(0)
    const totalQuestions = ROAD_SIGNS.length;

    useEffect(()=>{
        initState();
    }, [])

    const initState = () => {
        const shuffledArray = shuffle(ROAD_SIGNS)
        setBasicSigs(shuffledArray)
    }

    const handleInputChange = (e) => {
        setUsersAnswer(e.target.value)
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
            submitSign: submitSign,
            total: totalQuestions,
            currentQuestion: totalQuestions - basicSigns.length
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
