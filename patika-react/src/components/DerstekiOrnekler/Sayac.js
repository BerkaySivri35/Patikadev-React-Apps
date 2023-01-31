import { useState } from "react";


function Sayac(){
    const [count, setCount] = useState(0)
    
    const increase = () =>{
        setCount(count + 1)
    }

    const decrease = () => {
        // if(count == 0){
        //     alert('Sayi 0 dan küçük olamaz!!')
        // }
        count <= 0 ? alert('Sayi 0 dan küçük olamaz!!'):setCount(count - 1)
        
    }

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={increase}>Increase</button>
            <br />
            <button onClick={decrease}>Decrease</button>
            <br />
            <button onClick={()=>(setCount(0))}>Reset</button>
        </div>
    )
}

export default Sayac;