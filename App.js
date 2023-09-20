import React, { useMemo, useState } from 'react';
import './App.css';

function App() {
  const [add, setAdd]= useState(0);
  const [sub, setSub]= useState(100)

  const multiplication = useMemo(function multiply(){
    console.log("***************")
    return add*10;
  } ,[add] )
  return (
    <div className='App'>
      <h1>Learning useMemo</h1>
      <div className='div1'>
      <h2 className='h2'>{multiplication}</h2><br></br>
      <button type="button" class="btn btn-primary btn1" onClick={()=>setAdd(add + 1)}>Plus</button>
      <span>{add}</span><br></br>
      <button type="button" class="btn btn-danger btn2" onClick={()=> setSub(sub - 1)}>Minus</button>
       <span>{sub}</span></div>
    </div>
  );
}

export default App;
