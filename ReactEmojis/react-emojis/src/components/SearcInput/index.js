import React, { useState } from 'react'
import './index.css'
import { useEmojis } from '../../context/EmojiContext';

function SearchInput() {
    //const [text, setText] = useState('');
    const {searchText,setSearchText} = useEmojis();

    const handleChange = (e) => {
        setSearchText(e.target.value)   
    }

  return (
    <div className="component-search-input">
        <div>
            <label>Ara...
            <input value={searchText} onChange={handleChange}/>
            </label>
        </div>
      </div>
  )
}

export default SearchInput
