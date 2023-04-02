import React, { useState } from 'react';
import './Search.css';
import axios from 'axios';
import Results from './Results';
import Photos from './Photos';

export default function Search(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data);
  }

  function handlePexelsResponse(response) {
    console.log(response);
    setPhotos(response.photos);
  }

  function search() {
    const apiKey = '5ae36e7a40754bfb55o3c43890a696t8';
    const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    const pexelsApiKey =
      '6WmmYHE3bRvf1gj5HWSlCLTIcS4WYDaAQ8zIhzFXc26xTNJRZ21oA4Zt';
    const pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`;
    const headers = { Authorization: `${pexelsApiKey}` };
    axios
      .get(pexelsApiUrl, {
        headers: headers,
      })
      .then(handlePexelsResponse);
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
          <section>
            <h1>What word do you want to look up?</h1>
            <form onSubmit={handleSubmit}>
              <input
                type='search'
                autoFocus={true}
                onChange={handleKeywordChange}
                placeholder='Search for a word'
              />
            </form>
            <div className='hint'>ex: sunset, yoga, bombastic</div>
          </section>
        </center>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return 'Loading';
  }
}
