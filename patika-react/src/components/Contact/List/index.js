import React, { useState } from 'react'

function List({contacts}) {
  const [filterText, setFilterText] = useState("");
  const filtered = contacts.filter((item) =>{
    return Object.keys(item).some((key)=> 
      item[key]
      .toString()
      .toLowerCase()
      .includes(filterText.toLocaleLowerCase())
    );
  });
  console.log('filtered', filtered)

  const onFilterText = (e) =>{
    e.preventDefault()
    setFilterText(e.target.value)
  }
  return (
    <div>
      <div>
        <input value={filterText} onChange={onFilterText}/>
      </div>
      <ul>
          {
            filtered.map((contact, index) => (<li key={index}>{contact.fullname}</li>
            )) 
          }
      </ul>
      
    </div>
  )
}

export default List