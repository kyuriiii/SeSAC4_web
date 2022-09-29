import React from 'react';
import ReactDOM from 'react-dom/client';
import Origin from './Origin';
import UseSass from './UseSass';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Origin />
    <hr />
    <UseSass />
  </React.StrictMode>
);