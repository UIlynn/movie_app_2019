import React from 'react';
import PropTypes from "prop-types";


// Food의 유효성 검사
Food.propTypes = {
  name:PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number,
}

function Food({name, picture, rating}){ // 객체의 비구조화 - 필요한 속성만 가져와보기
  return <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5</h4>
    <img src={picture} alt={name}/>  
  </div>
}

class App extends React.Component{
  state = {
    count : 0,
  };

  add = () => { 
    console.log("add")
  };
  minus = () => {
    console.log("minus")
  };

  render(){
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.add}>ADD</button>
        <button onClick={this.minus}>MINUS</button>
      </div>
    )
  }
}

export default App;