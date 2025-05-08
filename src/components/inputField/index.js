import { useEffect, useState } from 'react';
import './index.css'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const InputField = ({handleInputChange, handleVoiceRecognition, inputValue}) => {
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
      } = useSpeechRecognition();
      const [isListening, setIsListening] = useState(false);
      const [transcriptedText, setTranscriptedText] = useState('');
      const listeningSupported = browserSupportsSpeechRecognition;

      useEffect(()=>{
        if(!listening && transcript){
          handleVoiceRecognition(transcript)
          resetTranscript()
        }
      }, [transcript, listening, resetTranscript])

      const finishListening = async () => {
        await SpeechRecognition.stopListening()
        setIsListening(false)
      }

      const startListening = (e) => {
        setIsListening(true)
        SpeechRecognition.startListening({
          continuous: true,
          language: 'en-US'
          
        })
      }


    return (
        <div className='inputWrapper'>
             <input
                placeholder='Type sign name'
                className='answerInput'
                type="text"
                name="name"
                value={inputValue}
                onChange={(e)=>{handleInputChange(e)}}
            />
            {listeningSupported && <button type='button'
              onMouseDown={startListening}
              onMouseUp={finishListening}
              onMouseLeave={finishListening} 
            ></button>}
        </div>
       
    )
}

export default InputField;