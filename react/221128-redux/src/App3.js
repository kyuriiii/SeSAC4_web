import './App.css';
import { useState } from 'react';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';
import rootReducer from './store/rootReducer'

const store = createStore(rootReducer);
function App3() {
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
  const isData = useSelector((state) => state.isData);
  const dispatch = useDispatch()
  return (
    <div>
      <h4>Box3 컴포넌트 number : { number } </h4>
      { isData? <h5> isData는 true</h5> : <h5>isData는 false</h5>}
      <input type="button" value="+" onClick={()=>{dispatch({type:'INCREASE'})}} />
      <input type="button" value="-" onClick={()=>{dispatch({type:'DECREASE'})}} />
      <input type="button" value="change" onClick={()=>{dispatch({type:'CHANGE'})}} />
    </div>
  )
}

export default App3;