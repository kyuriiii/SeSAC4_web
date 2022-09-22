import React from 'react';
import ReactDOM from 'react-dom/client';
import SyntheticEvent from './SyntheticEvent';
import ClassBind from './ClassBind';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SyntheticEvent />
    <ClassBind />
  </React.StrictMode>
);