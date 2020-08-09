import React from 'react';
import PropTypes from "prop-types";

const foodILike = [
  {
    id : 1,
    name : "sandwitch",
    image : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.spcmagazine.com%2Fwp-content%2Fuploads%2F2019%2F04%2F04.png&f=1&nofb=1",
    rating : 4,
  },
  {
    id : 2,
    name : "hamburger",
    image : "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fthefw.com%2Ffiles%2F2017%2F05%2FHamburger.jpg%3Fw%3D600%26h%3D0%26zc%3D1%26s%3D0%26a%3Dt%26q%3D89&f=1&nofb=1",
    rating : 5,
  },
  {
    id : 3,
    name : "hotdog",
    image : "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.todayifoundout.com%2Fwp-content%2Fuploads%2F2014%2F01%2Fhot-dog.jpg&f=1&nofb=1",
    rating : 3,
  },
  
]

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

function App() {
  return (
    <div>
      {foodILike.map(dish =>(
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

export default App;