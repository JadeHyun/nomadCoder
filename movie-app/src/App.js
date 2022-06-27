import React, { useState, useEffect } from 'react';
// import Button from './Button';
import AppStyles from './App.module.css' 

function Hello(){
  useEffect(()=>{
    console.log('im here!');
    return (()=> console.log('im outed!'))
  },[])

  return <h1>Hello</h1>
}


function App() {
  const [counter,setcounter] = useState(0);
  const [keyword, setkeyword] = useState("")
  const onClick = ()=>{ setcounter( a => a+1) }
  const [show, setshow] = useState(false)

  const onclick = (e)=>{
    setshow( a => !a) // 클릭했을 경우 다시 전의 상태로 돌아가고 싶으면 부정연산자(!)를 쓰면 되겠구나!
  }

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
      <button onClick={onclick}>{show ? "hide" : "show"}</button>
      {show ? <Hello /> : null}
      <input value={keyword} type="text" placeholder='Search here' onChange={onChange}></input>
      <h1 className={AppStyles.title}>{counter}</h1>
      <button onClick={onClick}>Click me!</button>
    </div>
  );
}

export default App;
