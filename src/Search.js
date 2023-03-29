import React, { useState } from 'react';
import './Search.css';

export default function Search() {
  let [keyword, setKeyword] = useState('');
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition...`);
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
