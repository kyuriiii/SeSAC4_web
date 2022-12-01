import React from 'react';
import Button from './Button';
import Card from "./03_react_typescript/Card";
import Card2 from "./03_react_typescript/Card2"; 
import StateClass from "./04_State/StateClass";
import StateFunc from "./04_State/StateFunc";

const showAlert = (text:string) => {
  alert(text);
}

const App: React.FC = () => {
  return (
    <div>
      <Card name="내용"></Card>
      <Card2 name="내용"></Card2>
      <Button name="버튼" onAlert={showAlert} />

      <StateClass />
    </div>
  );
}

export default App;