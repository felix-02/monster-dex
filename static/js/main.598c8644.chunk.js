(this.webpackJsonpmonster0dex=this.webpackJsonpmonster0dex||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),l=(n(12),n(3)),s=n(4),i=n(6),u=n(5);n(13),n(14);var h=function(e){return r.a.createElement("div",null,r.a.createElement("img",{src:" https://robohash.org/".concat(e.x.id,"?set=set2 "),alt:""}),r.a.createElement("h1",null,e.x.name),r.a.createElement("p",null,e.x.email))};var m=function(e){return r.a.createElement("div",{className:"card-list"},e.monsters.map((function(e){return r.a.createElement(h,{key:e.id,x:e})})))};var d=function(e){var t=e.placeholder,n=e.handleChange;return r.a.createElement("input",{type:"search",placeholder:t,onChange:n})},f=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleChange=function(e){a.setState({searchField:e.target.value})},a.state={monsters:[],searchField:""},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})})).catch()}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return r.a.createElement("div",null,r.a.createElement("h1",null,"monster rolodex"),r.a.createElement(d,{placeholder:"search here",handleChange:this.handleChange}),r.a.createElement(m,{monsters:a}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.598c8644.chunk.js.map