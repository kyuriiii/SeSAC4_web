import './App.css';
import { createStore } from 'redux';
import {Provider, useSelector, useDispatch} from 'react-redux';
// Provider : state를 어떤 컴포넌트들에게 전달할 것인지에 대해 가장 바깥쪽 울타리에 놓아야 하는 것ㄴ
// 즉, 현재는 Box에다 사용할 것이기 때문에 Box를 감쌀 것이다.
// provider은 props로 stroe을 필수로 전달해줘야 한다.

function reducer(state, action){
  // state : 현재의 state
  if ( state === undefined ) {
    return {
      number:1
    } // 현재 state 가 없으면 기본값
  }
  const newState = {...state}; // 현재 state의 복제본

  if ( action.type === 'INCREASE' ) {
    newState.number++;
  } else if ( action.type === 'DECREASE' ) {
    newState.number--;
  }

  return newState;
}
const store = createStore(reducer);

function App() {
  return (
    <div id="app">
      <h1>number : {}</h1>
      <Provider store={store}>
        <Box1/>
      </Provider>
    </div>
  );
}

const Box1 = () =>{
  console.log('Box1')
  function f(state) {
    return state.number;
  }
  const number = useSelector(f);
  // const number = useSelector((state) => state.number);
  return (
    <div>
      <h2>Box1 컴포넌트 number : {number}</h2>
      <Box2/>
    </div>
  )
}

const Box2 = () =>{
  console.log('Box2')
  return (
    <div>
      <h3>Box2 컴포넌트 number : {}</h3>
      <Box3/>
    </div>
  )
}
const Box3 = () =>{
  console.log('Box3')
  const number = useSelector((state) => state.number); // useSelector이 react없는 redux에서의 getState 역할을 한다.
  const dispatch = useDispatch();
  return (
    <div>
      <h4>Box3 컴포넌트 number : {number}</h4>
      <input type="button" value="+" onClick={()=>{dispatch({type:'INCREASE'})}} />
      <input type="button" value="-" onClick={()=>{dispatch({type:'DECREASE'})}} />
    </div>
  )
}

export default App;
