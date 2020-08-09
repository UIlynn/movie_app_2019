import React from 'react';


function Food({name, picture}){ // 객체의 비구조화 - 필요한 속성만 가져와보기
  return <div>
    <h2>I like {name}</h2>
    <img src={picture}/>  
  </div>
}

const foodILike = [
  {
    name : "sandwitch",
    image : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.spcmagazine.com%2Fwp-content%2Fuploads%2F2019%2F04%2F04.png&f=1&nofb=1"
  },
  {
    name : "hamburger",
    image : "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fthefw.com%2Ffiles%2F2017%2F05%2FHamburger.jpg%3Fw%3D600%26h%3D0%26zc%3D1%26s%3D0%26a%3Dt%26q%3D89&f=1&nofb=1"
  },
  {
    name : "hotdog",
    image : "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.todayifoundout.com%2Fwp-content%2Fuploads%2F2014%2F01%2Fhot-dog.jpg&f=1&nofb=1"
  },
  
]

function App() {
  return (
    <div>
      {/* <Food fav="kimchi"/> */}
      {foodILike.map(dish => (
        <Food name={dish.name} picture={dish.image}/>
      ))}
    </div>
  );
}

export default App;