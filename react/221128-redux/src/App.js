import './App.css';
import { useState } from 'react';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

function reducer(state, action){
  // state : 현재 상태의 state -> 아직 바뀌기 전
  // action : dispatch를 실행할 때 넣었던 객체
  if ( action.type === 'INCREASE' ){
    return { number: state.number + 1, isData: state.isData };
  } else if ( action.type === 'DECREASE' ){
    return { number: state.number - 1}
  }
  return { number: 1};
}
const store = createStore(reducer);
function App() {
  return (
      <div id="app">
          <Provider store={store}>
            <h1>number : {}</h1>
            <Box1/>
        </Provider>
      </div>
  );
}

const Box1 = () =>{
  const number = useSelector((state) => state.number); // 일반 js에서의 getState 역할
  console.log('Box1');
  return (
    <div>
      <h2>Box1 컴포넌트 number : {number} </h2>
      <Box2 />
    </div>
  )
}

const Box2 = () =>{
  console.log('Box2');
  return (
    <div>
      <h3>Box2 컴포넌트 number : </h3>
      <Box3  />
    </div>
  )
}
const Box3 = () =>{
  console.log('Box3');
  const number = useSelector((state) => state.number);
  const dispatch = useDispatch()
  return (
    <div>
      <h4>Box3 컴포넌트 number : { number } </h4>
      <input type="button" value="+" onClick={()=>{dispatch({type:'INCREASE'})}} />
      <input type="button" value="-" onClick={()=>{dispatch({type:'DECREASE'})}} />
    </div>
  )
}

export default App;