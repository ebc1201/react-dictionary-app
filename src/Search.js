import React, { useState } from 'react';
import './Search.css';
import axios from 'axios';
import Results from './Results';
import Photos from './Photos';

export default function Search(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState([]);

  function handleImagesResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleDictionaryResponse(response) {
    setResults(response.data);
    const apiKey = '5ae36e7a40754bfb55o3c43890a696t8';
    const imagesApiUrl = `https://api.shecodes.io/images/v1/search?query=${response.data.word}&key=${apiKey}`;

    axios
      .get(imagesApiUrl, { headers: { Authorization: `Bearer ${apiKey}` } })
      .then(handleImagesResponse);
  }

  function search() {
    const apiKey = '5ae36e7a40754bfb55o3c43890a696t8';
    const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleDictionaryResponse);
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
        <Photos photos={photos} />
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return 'Loading';
  }
}
