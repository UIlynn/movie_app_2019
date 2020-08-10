import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home"
import About from "./routes/About"
import Detail from "./routes/Detail"
import Navigation from './components/Navigation';

function App(){
  // url 라우터 설정
  // [주의] Navigation은 Router(정확히는 HashRouter) 밖에서 사용할 수 없다.
  // [변경] HashRouter -> BrowserRouter로 변경하면 #이 없어지긴 하나 github pages에서는 HashRouter가 더 편함
  return (
    <HashRouter>
      <Navigation />
      {/* exact={true} : 완벽할 때 렌더링*/}
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={Detail} />
    </HashRouter>
  );
}

export default App;