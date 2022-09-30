import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import LifeCycle from './LifeCycle';
import Ref from './Ref';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <LifeCycle />
    <Ref />
    <Ref />
  </React.StrictMode>
);