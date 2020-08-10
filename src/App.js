import React from 'react';
import axios from 'axios';

class App extends React.Component{
  state = {
    isLoading : true,
    movies : [],
  }

  // 비동기 호출
  getMovie = async ()=>{
    // fetch 와 같은 기능
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  }

  // render후 첫번째 호출
  async componentDidMount(){
    this.getMovie();
  }

  // render
  render(){
    const {isLoading} = this.state;

    return (
    <div>{isLoading ? "Loading...":"We are ready"}</div>
    )
  }
}

export default App;