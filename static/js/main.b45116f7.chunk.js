(this.webpackJsonpps=this.webpackJsonpps||[]).push([[0],{29:function(t,e,n){"use strict";n.r(e);var r,i,o,a=n(0),c=n(1),s=n.n(c),u=n(14),l=n.n(u),d=n(3),h=n(4),v={white:"#ffffff",black:"#000000",black400:"#444",black300:"#333",black200:"#222",black100:"#1c1c1c"};!function(t){t[t.move=0]="move",t[t.brush=1]="brush",t[t.zoom=2]="zoom",t[t.crop=3]="crop"}(r||(r={})),function(t){t.move="v",t.brush="b",t.zoom="z",t.zoomOut="alt",t.crop="c"}(i||(i={})),function(t){t[t.asc=0]="asc",t[t.desc=1]="desc"}(o||(o={}));var p={position:{x:0,y:0,startX:0,startY:0,lastX:0,lastY:0},filters:{blur:0,saturation:1,hue:0,sepia:!1},pointGroups:[],pointGroupIndex:-1,color:v.black,brushSize:10,rotation:0,tool:r.move,opacity:1,scale:1,pressedKeys:[],layers:[],selectedLayer:null};function b(){var t=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n\n  @media (max-width: ","px) {\n    flex-direction: column;\n    justify-content: flex-start;\n  }\n"]);return b=function(){return t},t}function f(){var t=Object(d.a)(["\n  width: 100%;\n  max-width: ","px;\n  margin-left: auto;\n  margin-right: auto;\n"]);return f=function(){return t},t}function j(){var t=Object(d.a)(["\n  width: 100%;\n  min-height: 100%;\n  background-color: ",";\n  color: ",";\n  user-select: none;\n  padding: 1em;\n"]);return j=function(){return t},t}var x=h.b.div(j(),v.black100,v.white),g=h.b.div(f(),1e3),m=h.b.div(b(),700);function w(){var t=Object(d.a)(["\n      background-color: ",";\n    "]);return w=function(){return t},t}function O(){var t=Object(d.a)(["\n        background-color: transparent;\n      "]);return O=function(){return t},t}function y(){var t=Object(d.a)(["\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  outline: none;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: ",";\n  margin-right: 0.25em;\n\n  &:last-child {\n    margin-right: 0;\n  }\n\n  &:hover {\n    background-color: ",";\n\n    ","\n  }\n\n  ","\n\n  img {\n    width: 1.5em;\n    align-self: center;\n    flex-shrink: 0;\n  }\n\n  input {\n    position: absolute;\n    cursor: pointer;\n    opacity: 0;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    z-index: 1;\n  }\n"]);return y=function(){return t},t}function k(){var t=Object(d.a)(["\n  width: 100%;\n  background-color: ",";\n  padding: 0.25em;\n  display: flex;\n"]);return k=function(){return t},t}var z=h.b.div(k(),v.black300),C=h.b.button(y(),"0.5em",v.black100,(function(t){if(t.inactive)return Object(h.a)(O())}),(function(t){if(t.active)return Object(h.a)(w(),v.black100)}));function L(t){return"data:image/svg+xml;utf8,".concat(encodeURIComponent(t))}var S=L('<svg width="20" height="20" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h20v20h-20z" fill="#d7d7d7"/><path d="m20 20h20v20h-20z" fill="#d7d7d7"/><g fill="'.concat(v.white,'"><path d="m20 0h20v20h-20z"/><path d="m0 20h20v20h-20z"/></g></svg>')),E=L('<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="m2674 2900-23.08 19.23v-15.38h-23.07v23.07h15.38l-19.23 23.08-19.23-23.08h15.38v-23.07h-23.07v15.38l-23.08-19.23 23.08-19.23v15.38h23.07v-23.07h-15.38l19.23-23.08 19.23 23.08h-15.38v23.07h23.07v-15.38z" fill="'.concat(v.white,'" fill-rule="evenodd" transform="translate(-2574 -2850)"/></svg>')),M=L('<svg width="100" height="98.46" viewBox="0 0 100 98.46" xmlns="http://www.w3.org/2000/svg"><path d="m2210.36 2012.7-8.65 8.64-32.57-32.57a36.468 36.468 0 1 1 8.41-8.88zm-63.33-83.71a30.56 30.56 0 1 0 30.57 30.56 30.564 30.564 0 0 0 -30.57-30.56zm0 13.75a16.653 16.653 0 0 0 -9.16 2.75v-6.94a22.909 22.909 0 0 1 32.09 21h-6.12a16.809 16.809 0 0 0 -16.81-16.81z" fill="'.concat(v.white,'" fill-rule="evenodd" transform="translate(-2110.34 -1922.88)"/></svg>')),I=L('<svg width="99.93" height="102.85" viewBox="0 0 99.93 102.85" xmlns="http://www.w3.org/2000/svg"><path d="m2628.24 1289.83s-2.56-8.1-13.65-10.23c10.6-12.15 50.94-60.57 58-54.58 8.92 7.55-44.35 64.81-44.35 64.81zm-3.41 10.24s1.1 27.29-51.18 27.29c0 0 10.24-7.01 10.24-13.65 0-6.82 6.65-30.7 23.88-30.7 17.06 0 17.06 17.06 17.06 17.06z" fill="'.concat(v.white,'" fill-rule="evenodd" transform="translate(-2573.66 -1224.53)"/></svg>')),B=L('<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="m2674 2022h-70v-30h-30v-70h70v30h30zm-10-60h-20v30h-30v20h50z" fill="'.concat(v.white,'" fill-rule="evenodd" transform="translate(-2574 -1922)"/></svg>')),G=L('<svg width="100" height="89.188" viewBox="0 0 100 89.188" xmlns="http://www.w3.org/2000/svg"><path d="m1278.45 838.175h-12.17v-8.108h12.17a4.054 4.054 0 0 1 0 8.108zm-21.63 18.919a4.05 4.05 0 0 1 -4.05-4.054v-60.81h-31.08a4.055 4.055 0 1 1 0-8.109h39.19v68.919a4.058 4.058 0 0 1 -4.06 4.054zm-13.51-27.027a4.054 4.054 0 0 1 0 8.108h-39.19v-66.216a4.055 4.055 0 0 1 8.11 0v58.108zm-60.81-41.891a4.05 4.05 0 0 1 4.05-4.055h12.17v8.109h-12.17a4.051 4.051 0 0 1 -4.05-4.054z" fill="'.concat(v.white,'" fill-rule="evenodd" transform="translate(-1182.5 -767.906)"/></svg>')),R=L('<svg width="99.3" height="66.2" viewBox="0 0 99.3 66.2" xmlns="http://www.w3.org/2000/svg"><g fill="'.concat(v.white,'"><path d="m49.7 0c-32.7 0-49.7 33.1-49.7 33.1s18.5 33.1 49.7 33.1c33.1 0 49.7-33.1 49.7-33.1s-17.9-33.1-49.7-33.1zm0 53.8c-13.7 0-24.8-8.6-24.8-20.7 0-16.4 11.1-24.8 24.8-24.8s24.8 8.2 24.8 24.8c0 12.3-11.1 20.7-24.8 20.7z"/><path d="m62.1 29c-4.6 0-8.3-3.7-8.3-8.3 0-1.4.4-2.7 1-3.8-1-.2-2-.3-3-.3-8 0-14.5 6.5-14.5 14.5s6.5 14.5 14.5 14.5 14.5-6.5 14.5-14.5c0-1-.1-2.1-.3-3-1.3.5-2.6.9-3.9.9z"/></g></svg>')),D=L('<svg width="'.concat(50,'" height="').concat(22.297,'" viewBox="0 0 100 89.188" xmlns="http://www.w3.org/2000/svg"><path d="m1278.45 838.175h-12.17v-8.108h12.17a4.054 4.054 0 0 1 0 8.108zm-21.63 18.919a4.05 4.05 0 0 1 -4.05-4.054v-60.81h-31.08a4.055 4.055 0 1 1 0-8.109h39.19v68.919a4.058 4.058 0 0 1 -4.06 4.054zm-13.51-27.027a4.054 4.054 0 0 1 0 8.108h-39.19v-66.216a4.055 4.055 0 0 1 8.11 0v58.108zm-60.81-41.891a4.05 4.05 0 0 1 4.05-4.055h12.17v8.109h-12.17a4.051 4.051 0 0 1 -4.05-4.054z" fill="').concat(v.white,'" fill-rule="evenodd" transform="translate(-1182.5 -767.906)"/></svg>')),P=n(2),U=n(6),X=n(5);function Y(t,e,n){return Math.min(Math.max(t,e),n)}function K(t,e){if(null===e)return{x:0,y:0};var n,r,i,o,a,c,s=e.getBoundingClientRect(),u=s.left,l=s.top,d=s.width,h=s.height;(u=Math.abs(u),l=Math.abs(l),"touches"in t)?(n=null!==(i=null===(o=t.touches[0])||void 0===o?void 0:o.pageX)&&void 0!==i?i:0,r=null!==(a=null===(c=t.touches[0])||void 0===c?void 0:c.pageY)&&void 0!==a?a:0):(n=t.pageX,r=t.pageY);return{x:Y(n-u,0,d)/d,y:Y(r-l,0,h)/h}}function A(t){var e=t.pointGroups,n=t.pointGroupIndex,r=t.pointer,i=t.color,o=t.brushSize,a=void 0===o?10:o,c=t.size,s=t.settings,u=a/Math.min(c.width,c.height)/s.p,l=e[n];if(void 0===l)return e[n]={color:i,size:a,points:[{x:r.x,y:r.y}]},Object(U.a)(e);var d,h,v=l.points[l.points.length-1];if(void 0!==v&&(d=v,h=r,Math.sqrt(Math.pow(d.x-h.x,2)+Math.pow(d.y-h.y,2)))<u)return e;return e[n].color=i,e[n].points=[].concat(Object(U.a)(e[n].points),[{x:r.x,y:r.y}]),Object(U.a)(e)}function F(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(t){case r.move:return"move";case r.brush:return"none";case r.zoom:var n=e.includes(i.zoomOut)?"out":"in";return"zoom-".concat(n);case r.crop:return'url("'.concat(D,'") 17 0, default');default:return"default"}}function T(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0;return("x"===t?e:3&e|8).toString(16)}))}function H(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=["image/png","image/jpg","image/jpeg"];return new Promise((function(r,i){if(n.includes(t.type)){var o=URL.createObjectURL(t),a=new Image;a.onload=function(){var n,c=document.createElement("canvas"),s=c.getContext("2d");null!==s?(c.width=a.width,c.height=a.height,s.drawImage(a,0,0),r({id:T(),name:null!==(n=t.name)&&void 0!==n?n:"Layer ".concat(e+1),visible:!0,image:{src:c.toDataURL("image/png"),width:a.width,height:a.height,ratio:a.width/a.height},rotation:p.rotation,position:p.position,filters:p.filters,opacity:p.opacity,order:e}),URL.revokeObjectURL(o)):i("Failed to load image")},a.src=o}else i("Invalid image file, must be one of: ".concat(n.join(" ")))}))}function J(t,e){var n=e.rotation,r=e.position,i=t.width/2,o=t.height/2;return["translate(".concat(r.x*t.width," ").concat(r.y*t.height,")"),"rotate(".concat(n,", ").concat(t.width/2,", ").concat(t.height/2,")"),"matrix(".concat(1,", 0, 0, ").concat(1,", ").concat(i-1*i,", ").concat(o-1*o,")")].join(" ")}function W(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.asc;return t.sort((function(t,n){return e===o.desc?n.order-t.order:e===o.asc?t.order-n.order:0}))}var q=s.a.createContext({});function Z(t){var e=t.children,n=s.a.useState(p.pointGroups),o=Object(X.a)(n,2),c=o[0],u=o[1],l=s.a.useState(p.pointGroupIndex),d=Object(X.a)(l,2),h=d[0],v=d[1],b=s.a.useState({down:!1,x:0,y:0}),f=Object(X.a)(b,2),j=f[0],x=f[1],g=s.a.useState({width:0,height:0,ratio:1}),m=Object(X.a)(g,2),w=m[0],O=m[1],y=s.a.useState(p.rotation),k=Object(X.a)(y,2),z=k[0],C=k[1],L=s.a.useState(r.move),S=Object(X.a)(L,2),E=S[0],M=S[1],I=s.a.useState(p.filters),B=Object(X.a)(I,2),G=B[0],R=B[1],D=s.a.useState(p.color),Y=Object(X.a)(D,2),F=Y[0],T=Y[1],H=s.a.useState(p.brushSize),J=Object(X.a)(H,2),W=J[0],Z=J[1],N=s.a.useState(p.scale),Q=Object(X.a)(N,2),V=Q[0],$=Q[1],_=s.a.useState(p.opacity),tt=Object(X.a)(_,2),et=tt[0],nt=tt[1],rt=s.a.useState(p.layers),it=Object(X.a)(rt,2),ot=it[0],at=it[1],ct=s.a.useState(p.selectedLayer),st=Object(X.a)(ct,2),ut=st[0],lt=st[1],dt=s.a.useState(p.pressedKeys),ht=Object(X.a)(dt,2),vt=ht[0],pt=ht[1],bt=s.a.useMemo((function(){return{lineCap:"round",p:3*w.ratio}}),[w]),ft=s.a.useRef(null),jt=s.a.useCallback((function(){R(p.filters),u(p.pointGroups),v(p.pointGroupIndex),T(p.color),Z(p.brushSize),C(p.rotation),M(p.tool),nt(p.opacity),$(p.scale),pt(p.pressedKeys),at(p.layers),lt(p.selectedLayer)}),[]),xt=s.a.useCallback((function(){if(null!==ft.current){var t=document.createElement("canvas"),e=t.getContext("2d");if(null!==e){var n=new Image;if(n.onload=function(){t.width=n.width,t.height=n.height,e.drawImage(n,0,0,n.width,n.height),t.toBlob((function(t){var e=document.createElement("a");e.href=URL.createObjectURL(t),e.download="image.png",e.click()}),"image/png")},null!==ft.current){ft.current.setAttribute("width",w.width.toString()),ft.current.setAttribute("height",w.height.toString());var r=encodeURIComponent(ft.current.outerHTML);n.src="data:image/svg+xml;utf8,".concat(r),ft.current.removeAttribute("width"),ft.current.removeAttribute("height")}}}}),[w,ft]);s.a.useEffect((function(){var t=ft.current;if(null!==t)return t.addEventListener("pointerdown",e,{passive:!0}),window.addEventListener("pointermove",n,{passive:!1}),window.addEventListener("pointerup",i,{passive:!1}),t.addEventListener("touchstart",e,{passive:!1}),window.addEventListener("touchmove",n,{passive:!1}),window.addEventListener("touchend",i,{passive:!1}),function(){t.removeEventListener("pointerdown",e),window.removeEventListener("pointermove",n),window.removeEventListener("pointerup",i),t.removeEventListener("touchstart",e),window.removeEventListener("touchmove",n),window.removeEventListener("touchend",i)};function e(e){var n=K(e,t);E===r.brush&&(v((function(t){return t+1})),u((function(t){return[].concat(Object(U.a)(t),[{color:F,size:W,points:[n,n]}])}))),null!==ut&&at((function(t){return t.map((function(t){return t.visible?(t.id===ut.id&&(t.position=Object(P.a)(Object(P.a)({},t.position),{},{startX:n.x,startY:n.y})),t):t}))})),x((function(t){return Object(P.a)(Object(P.a)(Object(P.a)({},t),n),{},{down:!0})}))}function n(e){e.preventDefault();var n=K(e,t);x((function(t){return Object(P.a)(Object(P.a)({},t),n)}))}function i(){null!==ut&&at((function(t){return t.map((function(t){return t.visible?(t.id===ut.id&&(t.position=Object(P.a)(Object(P.a)({},t.position),{},{lastX:t.position.x,lastY:t.position.y})),t):t}))})),x((function(t){return Object(P.a)(Object(P.a)({},t),{},{down:!1})}))}}),[ft,E,w,F,W,v,u,x,ut,at,j]),s.a.useEffect((function(){j.down&&E===r.brush&&u((function(t){return A({pointGroups:t,pointGroupIndex:h,pointer:j,color:F,size:w,settings:bt})}))}),[E,j,h,F,w,bt,u]),s.a.useEffect((function(){j.down&&E===r.move&&null!==ut&&at((function(t){return t.map((function(t){return t.visible?(t.id===ut.id&&(t.position=Object(P.a)(Object(P.a)({},t.position),{},{x:j.x-t.position.startX+t.position.lastX,y:j.y-t.position.startY+t.position.lastY})),t):t}))}))}),[j,E,ut]),s.a.useEffect((function(){vt.includes(i.move)&&M(r.move),vt.includes(i.brush)&&M(r.brush),vt.includes(i.zoom)&&M(r.zoom),vt.includes(i.crop)&&M(r.crop)}),[vt]),s.a.useEffect((function(){if(j.down&&E===r.zoom){var t=vt.includes(i.zoomOut)?-1:1;$((function(e){return e+.01*t}))}}),[vt,E,j.down]),s.a.useEffect((function(){function t(t){return t.key.toLowerCase()}function e(e){var n=t(e);pt((function(t){return t.includes(n)?t:[].concat(Object(U.a)(t),[n])}))}function n(e){var n=t(e);pt((function(t){var e=t.indexOf(n);return-1===e?t:(t.splice(e,1),Object(U.a)(t))}))}return window.addEventListener("keydown",e),window.addEventListener("keyup",n),function(){window.removeEventListener("keydown",e),window.removeEventListener("keyup",n)}}),[]);var gt={layers:ot,setLayers:at,selectedLayer:ut,setSelectedLayer:lt,pointGroups:c,setPointGroups:u,pointGroupIndex:h,setPointGroupIndex:v,pointer:j,setPointer:x,size:w,setSize:O,rotation:z,setRotation:C,tool:E,setTool:M,filters:G,setFilters:R,color:F,setColor:T,brushSize:W,setBrushSize:Z,scale:V,setScale:$,opacity:et,setOpacity:nt,pressedKeys:vt,setPressedKeys:pt,settings:bt,svg:ft,reset:jt,download:xt};return Object(a.jsx)(q.Provider,{value:gt,children:e})}function N(){var t=s.a.useContext(q),e=t.tool,n=t.setTool,o=t.setColor,c=s.a.useRef(null),u=s.a.useCallback((function(t){return function(){n((function(e){return e===t?p.tool:t}))}}),[n]);return Object(a.jsxs)(z,{children:[Object(a.jsx)(C,{onClick:u(r.move),active:e===r.move,title:"Move (".concat(i.move,")"),children:Object(a.jsx)("img",{src:E,alt:""})}),Object(a.jsx)(C,{onClick:u(r.zoom),active:e===r.zoom,title:"Zoom (".concat(i.zoom,")"),children:Object(a.jsx)("img",{src:M,alt:""})}),Object(a.jsx)(C,{onClick:u(r.brush),active:e===r.brush,title:"Brush (".concat(i.brush,")"),children:Object(a.jsx)("img",{src:I,alt:""})}),Object(a.jsxs)(C,{inactive:!0,title:"Color",children:[Object(a.jsx)("img",{src:B,alt:""}),Object(a.jsx)("input",{ref:c,type:"color",onChange:function(t){return o(t.target.value)}})]}),Object(a.jsx)(C,{onClick:u(r.crop),active:e===r.crop,title:"Crop (".concat(i.crop,")"),children:Object(a.jsx)("img",{src:G,alt:""})})]})}var Q=n(12),V=n.n(Q),$=n(18);function _(){var t=Object(d.a)(["\n  pointer-events: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n"]);return _=function(){return t},t}function tt(){var t=Object(d.a)(["\n  flex: 1 0;\n  width: 100%;\n  max-width: ","px;\n  background-color: ",";\n\n  @media (max-width: ","px) {\n    flex: 0 1;\n  }\n\n  svg {\n    margin: auto;\n    display: block;\n    background-repeat: repeat;\n    background-image: url(",");\n  }\n"]);return tt=function(){return t},t}var et=h.b.div(tt(),800,v.black400,700,S),nt=h.b.div(_());function rt(){var t=s.a.useContext(q),e=t.size,n=t.scale,i=t.setSize,o=t.setSelectedLayer,c=t.filters,u=t.layers,l=t.setLayers,d=t.pointGroups,h=t.settings,v=t.tool,p=t.pointer,b=t.brushSize,f=t.color,j=t.svg,x=t.pressedKeys,g=s.a.useCallback((function(t){t.stopPropagation(),t.preventDefault()}),[]),m=s.a.useCallback(function(){var t=Object($.a)(V.a.mark((function t(e){var n,r,a;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.stopPropagation(),e.preventDefault(),n=Array.from(e.dataTransfer.files),r=Math.max(Math.max.apply(Math,Object(U.a)(u.map((function(t){return t.order}))))+1,0),t.next=6,Promise.all(n.map((function(t,e){return H(t,r+e)})));case 6:a=t.sent,0===u.length&&i({width:a[0].image.width,height:a[0].image.height,ratio:a[0].image.ratio}),l(u.concat(a)),o(a[a.length-1]);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),[u,i,l,o]);return Object(a.jsxs)(et,{style:{cursor:F(v,x)},onDragOver:g,onDrop:m,children:[Object(a.jsx)(nt,{style:{display:u.length>0?"none":void 0},children:"Drop images here to get started!"}),Object(a.jsxs)("svg",{ref:j,viewBox:"0 0 ".concat(e.width," ").concat(e.height),xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",style:{maxWidth:"".concat(e.width,"px"),maxHeight:"".concat(e.height,"px"),display:0===u.length?"none":void 0},children:[Object(a.jsxs)("filter",{id:"filters",children:[Object(a.jsx)("feGaussianBlur",{stdDeviation:c.blur}),Object(a.jsx)("feColorMatrix",{type:"hueRotate",values:c.hue.toString()}),Object(a.jsx)("feColorMatrix",{type:"saturate",values:c.saturation.toString()}),c.sepia&&Object(a.jsx)("feColorMatrix",{type:"matrix",values:"0.39 0.769 0.189 0 0 0.349 0.686 0.168 0 0 0.272 0.534 0.131 0 0 0 0 0 1 0"})]}),Object(a.jsx)("g",{filter:"url(#filters)",style:{transform:"scale(".concat(n,")")},children:W(u).map((function(t,n){return t.visible?Object(a.jsx)("image",{onDragStart:function(t){return t.preventDefault()},href:t.image.src,transform:J(e,t),opacity:t.opacity},n):null}))}),d.map((function(t,n){return Object(a.jsx)("path",{stroke:t.color,fill:"none",d:"M".concat(t.points.map((function(t){return[t.x*e.width,t.y*e.height].join(",")})).join(",")),strokeWidth:t.size,strokeLinecap:h.lineCap,strokeLinejoin:"round"},n)})),v===r.brush&&Object(a.jsx)("circle",{cx:(p.x*e.width).toString(),cy:(p.y*e.height).toString(),r:b/2,fill:f,strokeMiterlimit:"10"})]})]})}function it(){var t=Object(d.a)(["\n  align-self: flex-start;\n  width: 100%;\n  max-width: ","px;\n  background-color: ",";\n\n  @media (max-width: ","px) {\n    display: flex;\n    flex-wrap: wrap;\n    max-width: 100%;\n  }\n"]);return it=function(){return t},t}var ot=h.b.div(it(),200,v.black300,700);function at(){var t=Object(d.a)(["\n      background-color: ",";\n    "]);return at=function(){return t},t}function ct(){var t=Object(d.a)(["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  padding: 1em 0.5em;\n  border-bottom: 1px solid ",";\n  background-color: ",";\n\n  &:hover {\n    background-color: ",";\n  }\n\n  ","\n\n  &:last-child {\n    border-bottom: none;\n  }\n\n  img {\n    display: block;\n    align-self: center;\n    width: 1em;\n    margin-right: 0.5em;\n    flex-shrink: 0;\n  }\n\n  div {\n    pointer-events: none;\n    overflow: hidden;\n    flex: 1 0;\n  }\n\n  label {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    width: 100%;\n  }\n"]);return ct=function(){return t},t}function st(){var t=Object(d.a)(["\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  max-height: 250px;\n  margin-top: 1em;\n"]);return st=function(){return t},t}var ut=h.b.div(st()),lt=h.b.div(ct(),v.black100,v.black200,v.black400,(function(t){return t.selected?Object(h.a)(at(),v.black400):""}));function dt(){var t=s.a.useContext(q),e=t.layers,n=t.setLayers,r=t.selectedLayer,i=t.setSelectedLayer,c=s.a.useCallback((function(t){return function(){return i(t)}}),[i]),u=s.a.useCallback((function(t){return function(){var r=Object(U.a)(e),i=r.findIndex((function(e){return e.id===t.id}));-1!==i&&(r[i].visible=!r[i].visible,n(r))}}),[e,n]);return Object(a.jsx)(ut,{children:W(e,o.desc).map((function(t){return Object(a.jsxs)(lt,{title:t.name,selected:(null===r||void 0===r?void 0:r.id)===t.id,onClick:c(t),children:[Object(a.jsx)("img",{src:R,alt:"",title:"Toggle layer visibility",onClick:u(t),style:{opacity:t.visible?1:0}}),Object(a.jsx)("div",{children:Object(a.jsx)("label",{children:t.name})})]},t.id)}))})}function ht(){var t=s.a.useContext(q),e=t.filters,n=t.setFilters,r=t.brushSize,i=t.setBrushSize,o=t.rotation,c=t.setRotation,u=t.opacity,l=t.setOpacity,d=t.download,h=t.reset;return Object(a.jsxs)(ot,{children:[Object(a.jsx)("div",{children:Object(a.jsxs)("label",{children:["sepia:",Object(a.jsx)("input",{type:"checkbox",checked:e.sepia,onChange:function(t){return n((function(e){return Object(P.a)(Object(P.a)({},e),{},{sepia:t.target.checked})}))}})]})}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("label",{children:["saturation(",e.saturation,"):"]}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"range",min:0,max:3,step:.01,value:e.saturation,onChange:function(t){return n((function(e){return Object(P.a)(Object(P.a)({},e),{},{saturation:parseFloat(t.target.value)})}))}})]}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("label",{children:["brushSize(",r,"px):"]}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"range",min:0,max:100,step:1,value:r,onChange:function(t){return i(parseInt(t.target.value,10))}})]}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("label",{children:["rotation(",o,"\xb0):"]}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"range",min:0,max:360,step:1,value:o,onChange:function(t){return c(parseInt(t.target.value,10))}})]}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("label",{children:["blur(",e.blur,"px):"]}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"range",min:0,max:100,step:1,value:e.blur,onChange:function(t){return n((function(e){return Object(P.a)(Object(P.a)({},e),{},{blur:parseInt(t.target.value,10)})}))}})]}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("label",{children:["hue(",e.hue,"\xb0):"]}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"range",min:0,max:360,step:1,value:e.hue,onChange:function(t){return n((function(e){return Object(P.a)(Object(P.a)({},e),{},{hue:parseInt(t.target.value,10)})}))}})]}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("label",{children:["opacity(",u,"):"]}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"range",min:0,max:1,step:.01,value:u,onChange:function(t){return l(parseFloat(t.target.value))}})]}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{onClick:d,children:"download"})}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{onClick:h,children:"reset"})}),Object(a.jsx)(dt,{})]})}function vt(){return Object(a.jsx)(Z,{children:Object(a.jsx)(x,{children:Object(a.jsxs)(g,{children:[Object(a.jsx)(N,{}),Object(a.jsxs)(m,{children:[Object(a.jsx)(rt,{}),Object(a.jsx)(ht,{})]})]})})})}l.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(vt,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.b45116f7.chunk.js.map