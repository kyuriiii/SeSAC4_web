import React from 'react';
import ReactDOM from 'react-dom/client';
import Hook from './1HooksEffect';
import Reducer from './2HooksReducer';
import Memo from './3HooksMemo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hook />
    <hr />
    <Reducer />
    <hr />
    <Memo />
  </React.StrictMode>
);