import React from 'react';

class App extends React.Component{
  // Mounting - constructor()
  constructor(props){
    super(props)
    console.log("> constructor") // 1번
  }

  state = {
    count : 0,
  };

  add = () => { 
    this.setState(current => ({count : current.count +1 }));
  };
  minus = () => {
    this.setState(current => ({count : current.count -1 }));
  };

  // Mounting - componentDidMout()
  componentDidMount(){
    console.log("> rendered") // 3번
  }

  // Update - componentDidUpdate()
  componentDidUpdate(){
    console.log("> updated") // 4번... 이후 이벤트나 컴포넌트 변경이 있을 경우 render->updated
  }

  // UnMounting - componentWillUnmount()
  componentWillUnmount(){
    console.log("> unmounting~")
  }

  render(){
    console.log("> render") // 2번
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