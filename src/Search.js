import React, { useState } from 'react';
import './Search.css';
import axios from 'axios';
import Results from './Results';

export default function Search(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data);
  }

  function search(event) {
    const apiKey = '5ae36e7a40754bfb55o3c43890a696t8';
    const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function load() {
    setLoaded(true);
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  if (loaded) {
    return (
      <div className='Search'>
        <center>
          <form onSubmit={handleSubmit}>
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
  } else {
    load();
    return 'Loading';
  }
}
