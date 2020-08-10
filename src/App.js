import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import "./App.css";

class App extends React.Component{
  state = {
    isLoading : true,
    movies : [],
  }

  // 비동기 호출
  getMovie = async ()=>{
    // fetch 와 같은 기능
    // const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    // console.log(movies.data.data.movies)
 
    // 위를 es6로 변경
    const {data:{data:{movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    console.log(movies)

    // state에 movies를 변경
    // this.setState({movies:movies});
    this.setState({movies, isLoading: false }); // ES6

  }

  // render후 첫번째 호출
  async componentDidMount(){
    this.getMovie();
  }

  // render
  render(){
    const {isLoading, movies} = this.state;

    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">"Loading..."</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;