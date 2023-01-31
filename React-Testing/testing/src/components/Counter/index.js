import React, { useState, useEffect } from 'react'

function Counter() {
    const [count,setCount] = useState(0);

    const BtnArttir = () =>{
        setCount(count + 1)
    };

    const BtnAzalt = () =>{
        count === 0 ? alert("Sayı 0'dan küçük olamaz") : setCount(count - 1)
        
    };

    useEffect(()=>{

        console.log('Counter değişti')
      },[count])
  return (
    <div>
      <h1>Sayi: {count} </h1>  
      <button className='btnArttir' onClick={BtnArttir}>Increase</button>
      <button className='btnAzalt' onClick={BtnAzalt}>Decrease</button>
    </div>
  )
}

export default Counter
