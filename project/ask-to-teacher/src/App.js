import axios from 'axios';

function App() {
  const clickEvent = () => {
    console.log(process.env.REACT_APP_HOST);
    axios({
      url: `/`
    }).then((res) => {
      console.log( res );
    })
  }
  return (
    <div>
      <h1>{process.env.REACT_APP_HOST}</h1>
      <button onClick={clickEvent}>버튼</button>
    </div>
  );
}

export default App;
