(this.webpackJsonp2048=this.webpackJsonp2048||[]).push([[0],[,,,,,,,,,,,,,,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var i=n(0),c=n.n(i),r=n(10),o=n.n(r),a=n(3),u=(n(17),n(1)),s=function(t){var e=t.children,n=t.onClick;return Object(u.jsx)("button",{className:"button",onClick:n,children:e})},l=n(26),d=n(2),b=n(7),f=c.a.createContext({containerWidth:0,tileCount:v}),j=function(t){var e=t.children,n=t.containerWidth,i=void 0===n?0:n,c=t.tileCount,r=void 0===c?v:c;return Object(u.jsx)(f.Provider,{value:{containerWidth:i,tileCount:r},children:e})},O=function(){var t=Object(i.useContext)(f);return[t.containerWidth,t.tileCount]},v=(n(19),4),h=n(8),p=(n(20),function(){var t=O(),e=Object(a.a)(t,2)[1];return Object(u.jsx)("div",{className:"grid",children:function(){for(var t=e*e,n=[],i=0;i<t;i+=1)n.push(Object(u.jsx)("div",{className:"grid-cell"},"".concat(i)));return n}()})}),E=n(11),C=(n(21),function(t){var e=t.value,n=t.position,c=t.zIndex,r=O(),o=Object(a.a)(r,2),s=o[0],l=o[1],d=Object(i.useState)(1),b=Object(a.a)(d,2),f=b[0],j=b[1],v=function(t){var e=Object(i.useRef)();return Object(i.useEffect)((function(){e.current=t})),e.current}(e),h=n[0]<l&&n[1]<l;Object(E.a)(h,"Tile out of bound");var p=void 0===v||v!==e;Object(i.useEffect)((function(){p&&(j(1.1),setTimeout((function(){return j(1)}),100))}),[p,f]);var C=function(t){return t/l*s},x={top:C(n[1]),left:C(n[0]),transform:"scale(".concat(f,")"),zIndex:c};return Object(u.jsx)("div",{className:"tile tile-".concat(e),style:x,children:e})}),x=(n(22),["id"]),w=function(t){var e=t.tiles,n=t.tileCountPerRow,i=void 0===n?v:n,c=116*i,r=c+16,o=e.map((function(t){var e=t.id,n=Object(h.a)(t,x);return Object(u.jsx)(C,Object(d.a)(Object(d.a)({},n),{},{zIndex:e}),"tile-".concat(e))}));return Object(u.jsx)("div",{className:"board",style:{width:r},children:Object(u.jsxs)(j,{containerWidth:c,tileCount:i,children:[Object(u.jsx)("div",{className:"tile-container",children:o}),Object(u.jsx)(p,{})]})})},g=1,m=n(12),T=n(4),y={tiles:{},byIds:[],hasChanged:!1,inMotion:!1},I=function(t,e){switch(e.type){case"CREATE_TILE":return Object(d.a)(Object(d.a)({},t),{},{tiles:Object(d.a)(Object(d.a)({},t.tiles),{},Object(T.a)({},e.tile.id,e.tile)),byIds:[].concat(Object(b.a)(t.byIds),[e.tile.id]),hasChanged:!1});case"UPDATE_TILE":return Object(d.a)(Object(d.a)({},t),{},{tiles:Object(d.a)(Object(d.a)({},t.tiles),{},Object(T.a)({},e.tile.id,e.tile)),hasChanged:!0});case"MERGE_TILE":var n=t.tiles,i=e.source.id,c=e.destination.id,r=(n[i],n[c],Object(h.a)(n,[i,c].map(m.a)));return Object(d.a)(Object(d.a)({},t),{},{tiles:Object(d.a)(Object(d.a)({},r),{},Object(T.a)({},e.destination.id,{id:e.destination.id,value:e.source.value+e.destination.value,position:e.destination.position})),byIds:t.byIds.filter((function(t){return t!==e.source.id})),hasChanged:!0});case"START_MOVE":return Object(d.a)(Object(d.a)({},t),{},{inMotion:!0});case"END_MOVE":return Object(d.a)(Object(d.a)({},t),{},{inMotion:!1});default:return t}},k=void 0,M=function(){var t=Object(i.useRef)(!0),e=[function(){return g++}],n=Object(a.a)(e,1)[0],c=Object(i.useReducer)(I,y),r=Object(a.a)(c,2),o=r[0],u=r[1],s=o.tiles,l=o.byIds,f=o.hasChanged,j=o.inMotion,O=Object(i.useCallback)((function(t){var e=t.position,i=t.value,c={id:n(),position:e,value:i};u({type:"CREATE_TILE",tile:c})}),[n]),h=function(t,e){setTimeout((function(){return function(t,e){u({type:"MERGE_TILE",source:t,destination:e})}(t,e)}),250)},p=function(t){u({type:"UPDATE_TILE",tile:t})},E=Object(i.useCallback)((function(){var t=new Array(v*v).fill(0);return l.forEach((function(e){var n=s[e].position,i=w(n);t[i]=e})),t}),[l,s]),C=Object(i.useCallback)((function(){return E().reduce((function(t,e,n){return 0===e?[].concat(Object(b.a)(t),[m(n)]):t}),[])}),[E]),x=Object(i.useCallback)((function(){var t=C();if(t.length>0){var e=t[Math.floor(Math.random()*t.length)];O({position:e,value:2})}}),[C,O]),w=function(t){return t[1]*v+t[0]},m=function(t){return[t%v,Math.floor(t/v)]},T=function(t,e){u({type:"START_MOVE"});for(var n=v-1,i=function(i){var c=t(i),r=void 0,o=0;c.forEach((function(t,c){var a=s[t];if(void 0!==r&&r.value===a.value){var u=Object(d.a)(Object(d.a)({},a),{},{position:r.position,mergeWith:r.id});return h(u,r),r=void 0,o+=1,p(u)}var l=Object(d.a)(Object(d.a)({},a),{},{position:m(e(i,c,o,n))});if(r=l,function(t,e){var n=t.position[0]!==e.position[0],i=t.position[1]!==e.position[1];return n||i}(a,l))return p(l)}))},c=0;c<v;c+=1)i(c);setTimeout((function(){return u({type:"END_MOVE"})}),250)};return Object(i.useEffect)((function(){if(t.current)return O({position:[0,1],value:2}),O({position:[0,2],value:2}),void(t.current=!1);!j&&f&&x()}),[f,j,O,x]),[l.map((function(t){return s[t]})),T.bind(k,(function(t){var e=E();return[e[t*v+0],e[t*v+1],e[t*v+2],e[t*v+3]].filter((function(t){return 0!==t}))}),(function(t,e,n,i){return t*v+e-n})),T.bind(k,(function(t){var e=E();return[e[t*v+0],e[t*v+1],e[t*v+2],e[t*v+3]].filter((function(t){return 0!==t})).reverse()}),(function(t,e,n,i){return t*v+i+n-e})),T.bind(k,(function(t){var e=E();return[e[t+0*v],e[t+1*v],e[t+2*v],e[t+3*v]].filter((function(t){return 0!==t}))}),(function(t,e,n,i){return t+v*(e-n)})),T.bind(k,(function(t){var e=E();return[e[t+0*v],e[t+1*v],e[t+2*v],e[t+3*v]].filter((function(t){return 0!==t})).reverse()}),(function(t,e,n,i){return t+v*(i-e+n)}))]},R=function(){var t=M(),e=Object(a.a)(t,5),n=e[0],c=e[1],r=e[2],o=e[3],s=e[4],d=Object(l.a)((function(t){switch(t.preventDefault(),t.code){case"ArrowLeft":c();break;case"ArrowRight":r();break;case"ArrowUp":o();break;case"ArrowDown":s()}}),250,{leading:!0,trailing:!1});return Object(i.useEffect)((function(){return window.addEventListener("keydown",d),function(){window.removeEventListener("keydown",d)}}),[d]),Object(u.jsx)(w,{tiles:n,tileCountPerRow:v})},A=(n(23),function(){var t=Object(i.useState)(new Date),e=Object(a.a)(t,2),n=e[0],c=e[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)("div",{className:"header",children:[Object(u.jsx)("div",{children:Object(u.jsx)("h1",{children:"Play 2048"})}),Object(u.jsx)("div",{children:Object(u.jsx)(s,{onClick:function(){c(new Date)},children:"Restart"})})]}),Object(u.jsx)(R,{},n.toISOString())]})}),L=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(e){var n=e.getCLS,i=e.getFID,c=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),i(t),c(t),r(t),o(t)}))};o.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(A,{})}),document.getElementById("root")),L()}],[[24,1,2]]]);
//# sourceMappingURL=main.98f2ff7b.chunk.js.map