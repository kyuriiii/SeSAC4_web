import React from 'react';
import ReactDOM from 'react-dom/client';
import Hook from './1HooksEffect';
import Reducer from './2HooksReducer';
import Memo from './3HooksMemo';
import Origin from './4Origin';
import UseSass from './5UseSass';
import CSSModule from './6CSSModule';
import StyledComponent from './7StyledComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Hook />
    <hr />
    <Reducer />
    <hr />
    <Memo /> */}
    <Origin />
    <hr />
    <UseSass />
    <hr />
    <CSSModule />
    <hr />
    <StyledComponent />
  </React.StrictMode>
);