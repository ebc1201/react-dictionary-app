import React, { useState } from 'react';
import './Search.css';
import axios from 'axios';

export default function Search() {
  let [keyword, setKeyword] = useState('');

  function handleResponse(response) {
    console.log(response.data.meanings[0]);
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
      <form onSubmit={search}>
        <input type='search' autoFocus={true} onChange={handleKeywordChange} />
      </form>
    </div>
  );
}
