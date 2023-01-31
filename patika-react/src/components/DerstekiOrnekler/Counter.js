import { useState, useEffect } from "react"


function Counter() {
    const [number, setNumber] = useState(0);

    useEffect(()=>{
        console.log("component mount edildi")
        const ınterval = setInterval(()=>{
             setNumber((n)=> n + 1)
        },1000);

        return () => clearInterval(ınterval);

    },[]);

    useEffect(()=>{
        console.log("number state güncellendi!");
    },[number]);
  return (
    <div>
        <h1>Number: {number}</h1>
        <button onClick={()=> setNumber(number + 1)}>Click</button>
        <hr />
    </div>
  )
}

export default Counter