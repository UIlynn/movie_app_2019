import React from "react";
import {Link} from "react-router-dom"


// a href 를 하면 html이 새로고침되고 react는 죽음
// a 대신 Link 사용해보자. href 대시 to

function Navigation(){
    return (
      <div>
        <Link to="/">HOME</Link>
        <Link to="/about">About</Link>
      </div>
    );
}


export default Navigation;