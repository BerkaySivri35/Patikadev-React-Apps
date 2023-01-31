import React, { useState, useEffect } from 'react'
import Form from "./Form"
import List from "./List"


function Contacts() {
    const [contacts, setContacts] = useState([
      {
        fullname: 'Berkay',
        phone_number:'343945'
      },
      {
        fullname: 'Berk',
        phone_number:'53575745'
      },
      {
        fullname: 'eren',
        phone_number:'987654'
      }
  ]);
    useEffect(()=>{
        console.log(contacts);
    },[contacts])
  return (
    <div>
        <List contacts={contacts}/>
        <Form addContact = {setContacts} contacts={contacts}/> 
        {/* //Form componentine prop olarak gönder addContact */}
    </div>
  )
}

export default Contacts