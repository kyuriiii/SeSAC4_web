import React from 'react';
import ReactDOM from 'react-dom/client';
import StateClass from './StateClass';
import StateFunction from './StateFunction';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateClass name="Sesac" />
    <StateFunction />
  </React.StrictMode>
);
