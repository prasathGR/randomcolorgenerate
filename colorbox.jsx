import React from 'react'
import { useState } from 'react'
import './App.css'
 function Colorbox() {
    const [color,setcolor]=useState("")
    const random=["yellow","red","pink","orange","violet","green","blue"]
  return (
    <>
    <div className='root'>
       <div className='box' style={{backgroundColor: color }           }>
           <h1>{color}</h1>
       </div>

    </div>
    <button onClick={()=>{
        setcolor(random[Math.floor(Math.random()*random.length)])
    }}>click to see magic</button>
    </>
  
  )
}
export default Colorbox