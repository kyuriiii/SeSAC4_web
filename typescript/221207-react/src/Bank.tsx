import './App.css';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import {Provider, useSelector, useDispatch} from 'react-redux';
import { createRef, useRef } from 'react';

type State = {
  money: number;
}
type Action = {
  type: string; 
  money: string;
}
// type Pet = Cat | Fish;
const initState = { money: 0 };
function reducer(state: State = initState, action: Action){
  const newState: State = {...state};
  if ( action.type === 'DEPOSIT' ) {
    newState.money += parseInt(action.money);
  } else if ( action.type === 'WITHDRAW' ) {
    newState.money -= parseInt(action.money);
  }

  return newState;
}
const store:any = createStore(reducer, composeWithDevTools());


function Practice() {
  return (
    <Provider store={store}>
      <Balance/>
      <Button />
    </Provider>
  );
}
const Balance = () => {
  const money = useSelector((state: State) => state.money);
  return (
    <div style={{textAlign: 'center'}}>
      <h1>코딩온 은행</h1>
      <h3>잔액 : {money}원</h3>
    </div>
  )
}

const Button = () => {
  const input = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <input type="text" ref={input} />
      <button onClick={()=>{
        if ( input.current != null ) dispatch({type: 'DEPOSIT', money: input.current.value})
      }}>입금</button>
      <button onClick={()=>{
        if ( input.current != null ) dispatch({type: 'WITHDRAW', money: input.current.value})}}>출금</button>
    </div>
  )
}

export default Practice;