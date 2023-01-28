import './App.css';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import {Provider, useSelector, useDispatch} from 'react-redux';
import { createRef } from 'react';

// 잔액이 0인 초기화 state를 생성한다.
const initState = { money: 0 }; 
// 1) reducer 함수 만들기
// store에 등록시킬 reducer 함수를 만든다.
// 이때, reducer 에는 DEPOSIT 과 WITHDRAW action에 대한 state 처리 방법이 담겨 있다.
function reducer(state = initState, action){
  const newState = {...state};
  if ( action.type === 'DEPOSIT' ) {
    newState.money += parseInt(action.money);
  } else if ( action.type === 'WITHDRAW' ) {
    newState.money -= parseInt(action.money);
  }

  return newState;
}

// 2) store 만들기
// store 을 만들 때는 store 안의 stat를 변경할 수 있는 reducer 함수를 등록해야 한다.
// 2번째 인자로 들어온 composeWithDevTools는 "크롬 확장 프로그램"을 사용하기 위함으로 삭제해도 된다.
const store = createStore(reducer, composeWithDevTools());


function Practice() {
  return (
    // Provider은 어디서 store을 사용할지 알려주는 친구로, store의 state를 사용할 컴포넌트들의 가장 바깥쪽 울타리에 위치해야 한다.
    <Provider store={store}>
      <Balance/>
      <Button />
    </Provider>
  );
}
const Balance = () => {
  // 3) store의 state 가져오기
  // 순수 redux에서 getState 를 통해 state를 가져왔던 것처럼 react-redux에서는 useSelector 을 이용해 state를 가져올 수 있다.
  // useSelector 안에서 state의 값을 선택하면 해당 값이 반환된다.
  // 현재는 state의 money 값이 반환된다.
  const money = useSelector((state) => state.money);
  return (
    <div style={{textAlign: 'center'}}>
      <h1>코딩온 은행</h1>
      <h3>잔액 : {money}원</h3>
    </div>
  )
}

const Button = () => {
  const input = createRef();
  // 4) dispatch 함수
  // react-redux에서 dispatch 함수를 사용하기 위해서는 useDispatch 를 이용해 dispatch 함수를 만들어줘야 한다.
  const dispatch = useDispatch();
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <input type="text" ref={input} />
      <button onClick={()=>{dispatch({type: 'DEPOSIT', money: input.current.value})}}>입금</button>
      <button onClick={()=>{dispatch({type: 'WITHDRAW', money: input.current.value})}}>출금</button>
    </div>
  )
}

export default Practice;