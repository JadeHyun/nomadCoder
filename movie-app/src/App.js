import React, { useState, useEffect } from 'react';
// import Button from './Button';
import AppStyles from './App.module.css' 

function App() {
  const [counter,setcounter] = useState(0);
  const [keyword, setkeyword] = useState("")
  const onClick = ()=>{ setcounter( a => a+1) }

  console.log('hi')
  const onChange = (e)=>{
    setkeyword(e.target.value)
  }
  const iRunOnly = () =>{
    console.log('i run only once')
  }

  useEffect(iRunOnly,[])
  useEffect(()=>{
    if(keyword.length > 5){
      console.log('keyword working!!')
    }
  },[keyword])
  return (
    <div className="App">
      <input value={keyword} type="text" placeholder='Search here' onChange={onChange}></input>
      <h1 className={AppStyles.title}>{counter}</h1>
      <button onClick={onClick}>Click me!</button>
    </div>
  );
}

export default App;
