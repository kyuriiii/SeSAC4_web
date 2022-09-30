import React from 'react';
import ReactDOM from 'react-dom/client';
import Origin from './1Origin';
import UseSass from './2UseSass';
import SassModule from './3SassModule';
import CSSModule from './4CSSModule';
import StyledComponent from './5StyledComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Origin />
    <hr />
    <UseSass />
    <hr />
    <SassModule />
    <hr />
    <CSSModule />
    <hr />
    <StyledComponent />
  </React.StrictMode>
);