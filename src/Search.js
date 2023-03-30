import React, { useState } from 'react';
import './Search.css';
import axios from 'axios';
import Results from './Results';

export default function Search() {
  let [keyword, setKeyword] = useState('');
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();

    const apiKey = '5ae36e7a40754bfb55o3c43890a696t8';
    const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className='Search'>
      <center>
        <form onSubmit={search}>
          <input
            type='search'
            autoFocus={true}
            onChange={handleKeywordChange}
          />
        </form>
      </center>
      <Results results={results} />
    </div>
  );
}
