(this.webpackJsonpmovie_app_2019=this.webpackJsonpmovie_app_2019||[]).push([[0],{32:function(e,t,a){e.exports=a(62)},55:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(29),c=a.n(o),s=a(7),i=a(1),m=a(10),l=a.n(m),u=a(16),p=a(11),v=a(12),d=a(14),h=a(13),E=a(30),f=a.n(E);a(55);var y=function(e){var t=e.id,a=e.year,n=e.title,o=e.summary,c=e.poster,i=e.genres;return r.a.createElement(s.b,{to:{pathname:"/movie/".concat(t),state:{year:a,title:n,summary:o,poster:c,genres:i}}},r.a.createElement("div",{className:"movie"},r.a.createElement("img",{src:c,alt:n,title:n}),r.a.createElement("div",{className:"movie_data"},r.a.createElement("h3",{className:"movie__title"},n),r.a.createElement("h5",{className:"movie__year"},a),r.a.createElement("ul",{className:"movie__genres"},i.map((function(e,t){return r.a.createElement("li",{key:t,className:"genres__genre"},e)}))," "),r.a.createElement("p",{className:"movie_summary"},o.slice(0,180)))))},g=(a(61),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovie=Object(u.a)(l.a.mark((function t(){var a,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:a=t.sent,n=a.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(v.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getMovie();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader_text"},'"Loading..."')):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(y,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),a}(r.a.Component));var b=function(e){return console.log(e),r.a.createElement("span",null,"About this page")},_=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(v.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?r.a.createElement("span",null,e.state.title):null}}]),a}(r.a.Component);var j=function(){return r.a.createElement("div",null,r.a.createElement(s.b,{to:"/"},"HOME"),r.a.createElement(s.b,{to:"/about"},"About"))};var N=function(){return r.a.createElement(s.a,null,r.a.createElement(j,null),r.a.createElement(i.a,{path:"/",exact:!0,component:g}),r.a.createElement(i.a,{path:"/about",component:b}),r.a.createElement(i.a,{path:"/movie/:id",component:_}))};c.a.render(r.a.createElement(N,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.4511ba52.chunk.js.map