import { useState } from 'react';
import './App.css';

function App() {
 const [color,setcolor]=useState("olive")
  return (
    <>
  <div className='main' style={{backgroundColor:color}}>
  <div className='color-section'>
    {/* <div className='color-combination'>
    </div> */}
    <button onClick={()=>setcolor("red")} style={{backgroundColor:"red"}} >Red</button>
    <button onClick={()=>setcolor("green")} style={{backgroundColor:"green"}}>Green</button>
    <button onClick={()=>setcolor("blue")} style={{backgroundColor:"blue"}}>Blue</button>
    <button onClick={()=>setcolor("black")} style={{backgroundColor:"black"}}>Black</button>
  </div>
  </div>
    </>
  );
}

export default App;
