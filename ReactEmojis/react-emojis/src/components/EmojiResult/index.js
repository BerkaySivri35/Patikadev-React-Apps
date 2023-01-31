import React from 'react'
import { useEmojis } from '../../context/EmojiContext'
import './index.css'


function EmojiResults() {
  const {emojis} = useEmojis();
  return (
    <div>
      <ul>
      {
            emojis.slice(0,50).map((emoji,index)=>(
                <li key={index} className="list-group-item" onClick={() =>navigator.clipboard.writeText(`${emoji.symbol}`)}>
                  {/* when the user clicked the row, it will be copied with  navigator.clipboard.writeText(`${emoji.symbol}`)*/}
                  <div>
                    <>
                    <span style={{fontSize:"27px"}}>{emoji.symbol}</span>
                     <span className='title' >{emoji.title}</span>
                     <span className="info"> Click to copy emoji</span>
                     
                    </>
                  </div>
                </li>
            ))
            
         }
      </ul>
        {/* {
            emojis.map(item=>{
              return(<EmojiResultrow
                key={item}
                symbol = {item}
                title = {item}
              />)
              
                
            })
        } */}
    </div>
  )
}

export default EmojiResults