import React from 'react'

function Header({number, data}) {
  console.log('Header render edildi.');
  return (
    <div>
      <h1>Header - {number}</h1>
      <br />
      <code>{JSON.stringify(data)}</code>
      <hr />
      </div>
  )
}

export default React.memo(Header)