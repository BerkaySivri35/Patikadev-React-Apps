import React from 'react'
import Header from '../Header'
import EmojiResults from '../EmojiResult'
import SearchInput from '../SearcInput'

function Container() {
  return (
    <div>
      <Header/>
      <SearchInput/>
      <EmojiResults/>
    </div>
  )
}

export default Container
