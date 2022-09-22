import React from 'react';
import ReactDOM from 'react-dom/client';
import SyntheticEvent from './SyntheticEvent';
import ClassBind from './ClassBind';
import RepeatMap from './RepeatMap';
import RepeatMapClass from './RepeatMapClass';
import Search from './Practice59_Search';
import Test from './Test';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <SyntheticEvent /> */}
    {/* <ClassBind /> */}
    <RepeatMap />
    <RepeatMapClass />
    {/* <Search /> */}
    {/* <Test /> */}
  </React.StrictMode>
);