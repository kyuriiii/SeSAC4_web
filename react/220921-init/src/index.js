import React from 'react';
import ReactDOM from 'react-dom/client';
import ClassComponent from './ClassComponent';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <ClassComponent name = {1} location="문래">문자</ClassComponent>
    <App />
  </>
);
