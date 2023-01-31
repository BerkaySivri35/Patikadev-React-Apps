import React, { useState } from 'react'


function InputExample() {
    const [form, setForm] = useState({name:'', surname:''});

    const OncHnageInput = (e) =>{
        setForm({...form, [e.target.name]:e.target.value});
    }
  return (
    <div>
        <h1>Name</h1>
        <input type="text" name='name' value={form.name} onChange={OncHnageInput} />
        <br />
        <h1>Surname</h1>
        <input type="text" name='surname' value={form.surname} onChange={OncHnageInput} />
        
        <h3>
            {form.name} {form.surname}
        </h3>
    </div>
  )
}

export default InputExample