import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home"
import About from "./routes/About"

function App(){
  // url 라우터 설정
  return (
    <HashRouter>
      {/* 두 페이지 동시 렌더링 문제가 있음 */}
      {/* url 경로가 겹치면(매칭되면) 안 됨. 2개 이상의 라우터가 매칭됨 */}
      {/* <Route path="/" component={Home} /> */}
      {/* <Route path="/about" component={About} /> */}

      {/* exact={true} : 완벽할 때 렌더링*/}
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      

    </HashRouter>
  );
}

export default App;