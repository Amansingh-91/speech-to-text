import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const SpeechToText = () => {
  const { transcript, resetTranscript,listening ,browserSupportsSpeechRecognition} = useSpeechRecognition();
  if(!browserSupportsSpeechRecognition){
    console.log("browser not supported");
  }

  const handleStart = () => {
    SpeechRecognition.startListening({ continuous: true });
  };

  const handleStop = () => {
    SpeechRecognition.stopListening();
  };

  return (
    <div>
      <h1>Speech to Text</h1>
        <h3>{listening ? "On": "Off"}</h3>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  );
};

export default SpeechToText;
