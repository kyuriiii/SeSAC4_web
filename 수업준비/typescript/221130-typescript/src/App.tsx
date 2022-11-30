import React from 'react';
import Button from './Button';
import Card from "./Card";
import Card2 from "./Card2"; 
import StateClass from "./StateClass";
import StateFunc from "./StateFunc";

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