import './App.css';

function App() {
  // 1) jsx 기본 태그만 사용하기
  // return (
  //   <div>
  //     <h1>안녕</h1>
  //     <h2>바보</h2>
  //   </div>
  // );

  // 2) jsx 안에서 javascript 표현
  // const name = 'SeSAC';
  // return (
  //   <div>
  //     <h1>Hello {name}</h1> 
  //   </div>
  // );

  // 3) jsx 안에서 삼항 연산자
  // let flag = true;
  // return (
  //   <div>
  //     { flag ? (<h1>True입니다.</h1>) : (<h1>False입니다.</h1>) }
  //     <br />
  //     { flag && (<h1>True일 때만 보이는 True 입니다.</h1>)}
  //   </div>
  // );

  // 4) jsx 안에서 style과 css 사용하기
  const style = {
    backgroundColor: "yellow",
    color: "green",
    fontSize: "30px",
    textAlign: "center"
  };
  return (
    <>
      <div style={style}>반가워요.</div>
      <br />
      <div style={{backgroundColor: "orange", color: "blue", textAlign: "center"}}>SeSAC입니다.</div>
      <br />
      <div className="test">모두들 화이팅!</div>
    </>
  );
}

export default App;
