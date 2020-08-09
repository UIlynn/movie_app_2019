import React from 'react';

// function Food(props){
function Food({fav}){ // 객체의 비구조화 - 필요한 속성만 가져와보기
  // console.log(props.fav);
  return <h1>I Like {fav}</h1>
}

function App() {
  return (
    <div>
      <h1>Hello!</h1>
      <Food fav="kimchi"/>
    </div>
  );
}

export default App;