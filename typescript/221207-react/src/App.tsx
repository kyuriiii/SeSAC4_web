import React, {useState} from 'react';

type AppProps = {
  name: string;
  age?: number;
}
function App(props:AppProps) {
  const [list, setList] = useState<number[]>([]);
  return (
    <div className="App">
      {props.name}
    </div>
  );
}

export default App;
