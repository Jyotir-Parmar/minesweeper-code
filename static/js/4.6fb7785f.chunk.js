(this.webpackJsonpminesweeper=this.webpackJsonpminesweeper||[]).push([[4],{21:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var i=a(3),n=a(6),s=a(1),r=a(2),c=a(7),m=(a(21),a(0)),l=a(4);t.default=function(){var e=Object(r.useState)(Object(m.f)(m.a.Easy)),t=Object(n.a)(e,2),a=t[0],u=t[1],d=Object(r.useState)(m.a.Easy),o=Object(n.a)(d,2),b=o[0],j=o[1],h=Object(r.useRef)(m.a.Easy),g=Object(r.useContext)(c.b).dispatch;Object(r.useEffect)((function(){j(h.current)}),[a]);var f=function(e){u(Object(m.f)(e)),h.current=e},O=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",s=arguments.length>3?arguments[3]:void 0,r=Object(i.a)({},a);"grid"===t?"m"===n?r.gridSize.m=s:r.gridSize.n=s:r.bombInTheGame=s,u(r)};return Object(s.jsx)("section",{className:"designGame fadeEffect",children:Object(s.jsxs)("div",{className:"designGame-form",children:[Object(s.jsx)("h3",{className:"margin-top-20",children:"Please select the difficulty level:"}),Object(s.jsxs)("div",{className:"margin-top-20",children:[Object(s.jsx)("input",{type:"radio",id:"easy",name:"difficulty",value:"easy",onChange:function(){return f(m.a.Easy)},defaultChecked:!0}),Object(s.jsx)("label",{htmlFor:"easy",children:"Easy ( 5 * 5 grid with 5 bombs )"})]}),Object(s.jsxs)("div",{className:"margin-top-20",children:[Object(s.jsx)("input",{type:"radio",id:"medium",name:"difficulty",value:"medium",onChange:function(){return f(m.a.Medium)}}),Object(s.jsx)("label",{htmlFor:"medium",children:"Medium ( 10 * 10 grid with 20 bombs )"})]}),Object(s.jsxs)("div",{className:"margin-top-20",children:[Object(s.jsx)("input",{type:"radio",id:"hard",name:"difficulty",value:"hard",onChange:function(){return f(m.a.Hard)}}),Object(s.jsx)("label",{htmlFor:"hard",children:"Hard ( 15 * 15 grid with 45 bombs )"})]}),Object(s.jsxs)("div",{className:"designGame-form-custom margin-top-20",children:[Object(s.jsxs)("div",{className:"margin-top-20",children:[Object(s.jsx)("input",{type:"radio",id:"custom",name:"difficulty",value:"custom",onChange:function(){return f(m.a.Custom)}}),Object(s.jsxs)("label",{htmlFor:"custom",children:["Customise Your Game ( Maximum ",m.e," row or column allowed )"]})]}),b===m.a.Custom?Object(s.jsxs)(r.Fragment,{children:[" ",Object(s.jsxs)("div",{className:"margin-top-20",children:[Object(s.jsx)("label",{className:"designGame-form--label",children:"Enter Grid Size : "}),Object(s.jsx)("input",{className:"designGame-form-custom--input",type:"number",name:"custom",min:"0",defaultValue:a.gridSize.m,placeholder:"Enter Row Size",onChange:function(e){return O(e,"grid","m",Number(e.target.value))}}),"x",Object(s.jsx)("input",{className:"designGame-form-custom--input",type:"number",name:"customN",min:"0",defaultValue:a.gridSize.n,placeholder:"Enter Column Size",onChange:function(e){return O(e,"grid","n",Number(e.target.value))}})]}),Object(s.jsxs)("div",{className:"margin-top-20",children:[Object(s.jsx)("label",{className:"designGame-form--label",children:"Enter Bombs In the Game : "}),Object(s.jsx)("input",{className:"designGame-form-custom--input",type:"number",name:"custom",min:"0",defaultValue:a.bombInTheGame,placeholder:"Enter Bombs",onChange:function(e){return O(e,"bomb","",Number(e.target.value))}})]})]}):""]}),Object(s.jsx)("button",{className:"margin-top-20",type:"submit",value:"Start Game",onClick:function(){a.gridSize.m*a.gridSize.n<=a.bombInTheGame?alert(m.b.MORE_BOMBS):a.bombInTheGame<1?alert(m.b.LESS_BOMS):a.gridSize.m*a.gridSize.n<2?alert(m.b.GRID_ERROR):a.gridSize.m>m.e||a.gridSize.n>m.e?alert(m.b.MAX_DIM):g&&(g(Object(l.d)(l.a,a)),g(Object(l.d)(l.b,m.d.GAME_IN_PROGRESS)))},children:"Start Game"})]})})}}}]);
//# sourceMappingURL=4.6fb7785f.chunk.js.map