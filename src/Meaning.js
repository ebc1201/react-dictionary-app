import React from 'react';
import Synonyms from './Synonyms';
import './Meaning.css';

export default function Meaning(props) {
  return (
    <div className='Meaning'>
      <h3>{props.meaning.partOfSpeech}</h3>
      <div>
        <span>
          <div className='definition'>{props.meaning.definition}</div>

          <div className='example'>
            <em>{props.meaning.example}</em>
          </div>

          <div className='synonyms'>
            <Synonyms synonyms={props.meaning.synonyms} />
          </div>
        </span>
      </div>
    </div>
  );
}
