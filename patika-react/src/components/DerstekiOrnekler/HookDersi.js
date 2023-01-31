import React,{useEffect, useState} from 'react'

function HookDersi() {
    const [number, setNumber] = useState(0);
    const [name, setName] = useState("");

    useEffect(() =>{
        console.log('component did mount')
    },[]);

    useEffect(()=>{
        console.log('number güncellendi') //hangi statein güncellendiğini görmek istiyorsam arrayin içine yazıyorum.
    },[number]);

    useEffect(()=>{
        console.log('name güncellendi') //hangi statein güncellendiğini görmek istiyorsam arrayin içine yazıyorum.
    },[name]);

    
  return (
    <div>
        <h1>Number: {number}</h1>
        <button onClick={() => setNumber(number + 1)}>Arttir</button>
        <br /><br />
        <h2>Name: {name}</h2>
        <button onClick={()=> setName("Berkay")}>Get name</button>
    </div>
  )
}

export default HookDersi