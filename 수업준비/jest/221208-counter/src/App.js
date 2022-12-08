import { useState } from 'react';
import Button from './Button';
import Count from './Count';

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount((count) => count + 1);
  }

  const decrease = () => {
    setCount((count) => count - 1);
  }

  return (
    <>
      <Count count={count} />
      <Button 
        increase={increase}
        decrease={decrease}
      />
    </>
  );
}

export default App;