import './App.css';
import { useState } from 'react';

function App() {
  // 최상위에 있는 number을 Box3까지 전달하기 위해서는 props로 계속 전달해야 한다.
  // 자식 요소가 많아질수록 props 지옥이 생겨난다.
  const [number, setNumber] = useState(0);
  return (
    <div id="app">
      <h1>number : {number}</h1>
      <Box1 number={number} onIncrease={()=>{setNumber(number+1)}} onDecrease={()=>{setNumber(number-1)}}/>
    </div>
  );
}

const Box1 = (props) =>{
  console.log('Box1');
  return (
    <div>
      <h2>Box1 컴포넌트 number : {props.number}</h2>
      <Box2 number={props.number} onIncrease={props.onIncrease} onDecrease={props.onDecrease} />
    </div>
  )
}

const Box2 = (props) =>{
  console.log('Box2');
  return (
    <div>
      <h3>Box2 컴포넌트 number : {props.number}</h3>
      <Box3 number={props.number} onIncrease={props.onIncrease} onDecrease={props.onDecrease} />
    </div>
  )
}
const Box3 = (props) =>{
  console.log('Box3');
  return (
    <div>
      <h4>Box3 컴포넌트 number : {props.number}</h4>
      <input type="button" value="+" onClick={()=>{props.onIncrease()}} />
      <input type="button" value="-" onClick={()=>{props.onDecrease()}} />
    </div>
  )
}

export default App;
