import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(<App/>, document.getElementById("root"));

// react application은 한번에 하나만 Component만 rendering 해야되서 
// 아래같은 경우는 안된다.
// import Potato from './Potato';
// ReactDOM.render(<App /><Potato />, document.getElementById("root"));
// 따라서 새로운 Component js참조 여기 말고 App.js에서 하자.