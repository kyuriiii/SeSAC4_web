import './App.scss';
function App() {
  return (
    <div className='App'>
      <div>
        <img src={ require('./images/1.png') }/>
      </div>
      <div>
        <img src={ require('./images/2.png') }/>
      </div>
      <div>
        <img src={ require('./images/3.png') }/>
      </div>
      <div>
        <img src={ require('./images/4.png') }/>
      </div>
      <div>
        <img src={ require('./images/5.png') }/>
      </div>
    </div>
  );
}

export default App;
