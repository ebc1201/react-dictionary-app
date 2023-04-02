import React, { useState } from 'react';
import Meaning from './Meaning';
import './Results.css';
import Photos from './Photos';

export default function Results(props) {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const speak = () => {
    const utterance = new SpeechSynthesisUtterance(props.results.word);
    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
  };

  if (props.results && !props.results.message) {
    return (
      <div className='Results'>
        <section>
          <h2>
            <strong className='word'>{props.results.word}</strong>
            <br />
          </h2>

          <button className='sound' onClick={speak} disabled={isSpeaking}>
            <i className='fa-solid fa-volume-high' />
            {''}
            <span className='phonetics'>{props.results.phonetic}</span>
          </button>
        </section>

        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
