(function(e){function o(o){for(var a,i,l=o[0],c=o[1],p=o[2],s=0,u=[];s<l.length;s++)i=l[s],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&u.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(o);while(u.length)u.shift()();return n.push.apply(n,p||[]),t()}function t(){for(var e,o=0;o<n.length;o++){for(var t=n[o],a=!0,i=1;i<t.length;i++){var c=t[i];0!==r[c]&&(a=!1)}a&&(n.splice(o--,1),e=l(l.s=t[0]))}return e}var a={},r={1:0},n=[];function i(e){return l.p+"js/"+({}[e]||e)+"."+{2:"b80f8b77",3:"e4833a14",4:"c8ea5d38",5:"f4032137",6:"e3d2c576",7:"27ef149d"}[e]+".js"}function l(o){if(a[o])return a[o].exports;var t=a[o]={i:o,l:!1,exports:{}};return e[o].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.e=function(e){var o=[],t=r[e];if(0!==t)if(t)o.push(t[2]);else{var a=new Promise((function(o,a){t=r[e]=[o,a]}));o.push(t[2]=a);var n,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=i(e);var p=new Error;n=function(o){c.onerror=c.onload=null,clearTimeout(s);var t=r[e];if(0!==t){if(t){var a=o&&("load"===o.type?"missing":o.type),n=o&&o.target&&o.target.src;p.message="Loading chunk "+e+" failed.\n("+a+": "+n+")",p.name="ChunkLoadError",p.type=a,p.request=n,t[1](p)}r[e]=void 0}};var s=setTimeout((function(){n({type:"timeout",target:c})}),12e4);c.onerror=c.onload=n,document.head.appendChild(c)}return Promise.all(o)},l.m=e,l.c=a,l.d=function(e,o,t){l.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:t})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,o){if(1&o&&(e=l(e)),8&o)return e;if(4&o&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var a in e)l.d(t,a,function(o){return e[o]}.bind(null,a));return t},l.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(o,"a",o),o},l.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},l.p="",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],p=c.push.bind(c);c.push=o,c=c.slice();for(var s=0;s<c.length;s++)o(c[s]);var d=p;n.push([0,0]),t()})({0:function(e,o,t){e.exports=t("2f39")},"034f":function(e,o,t){"use strict";t("ed82")},"2f39":function(e,o,t){"use strict";t.r(o);t("ddb0"),t("7d6e"),t("e54f"),t("985d"),t("31cd");var a=t("2b0e"),r=t("1f91"),n=t("42d2"),i=t("b05d"),l=t("2a19");a["a"].use(i["a"],{config:{dark:!0},lang:r["a"],iconSet:n["a"],plugins:{Notify:l["a"]}});var c=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{attrs:{id:"q-app"}},[t("router-view")],1)},p=[],s={name:"App"},d=s,u=(t("034f"),t("2877")),m=Object(u["a"])(d,c,p,!1,null,null,null),f=m.exports,v=t("2f62");const g={top:0,max:0,tiempo:10,puntos:0,operador:"+"},b={SetOperador(e,o){e.operador=o},setPuntos(e){e.puntos+=1,e.top<e.puntos&&(e.top=e.puntos)},limpiarPuntos(e){e.puntos=0}},h={},A={operador:e=>e.operador,tiempo:e=>e.tiempo,puntos:e=>e.puntos,top:e=>e.top};var w={namespaced:!0,state:g,mutations:b,actions:h,getters:A},y=t("39c1");a["a"].use(v["a"]);var x=function(){const e=new v["a"].Store({modules:{puntajes:w,operaciones:y["a"]},strict:!1});return e},_=t("8c4f");const P=[{path:"/",component:()=>Promise.all([t.e(0),t.e(4)]).then(t.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([t.e(0),t.e(3)]).then(t.bind(null,"8b24"))},{path:"/acerca",component:()=>Promise.all([t.e(0),t.e(5)]).then(t.bind(null,"5954"))},{path:"/desarrollador",component:()=>Promise.all([t.e(0),t.e(6)]).then(t.bind(null,"7a8d"))},{path:"/test",component:()=>Promise.all([t.e(0),t.e(2)]).then(t.bind(null,"5252"))}]},{path:"*",component:()=>Promise.all([t.e(0),t.e(7)]).then(t.bind(null,"e51e"))}];var F=P;a["a"].use(_["a"]);var O=function(){const e=new _["a"]({scrollBehavior:()=>({x:0,y:0}),routes:F,mode:"hash",base:""});return e},j=async function(){const e="function"===typeof x?await x({Vue:a["a"]}):x,o="function"===typeof O?await O({Vue:a["a"],store:e}):O;e.$router=o;const t={router:o,store:e,render:e=>e(f),el:"#q-app"};return{app:t,store:e,router:o}},k=t("9483");Object(k["a"])("service-worker.js",{ready(){},registered(){},cached(){},updatefound(){},updated(){},offline(){},error(){}}),/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&t.e(0).then(t.t.bind(null,"a0db",7));async function C(){const{app:e,store:o,router:t}=await j();new a["a"](e)}C()},"31cd":function(e,o,t){},"39c1":function(module,__webpack_exports__,__webpack_require__){"use strict";function generarAleatorio(e){return Math.floor(Math.random()*(e++-1))+1}const state={tiempo:10,operador:"+",valorA:0,valorB:0,opcionA:0,opcionB:0,opcionC:0,opcionD:0,RespuestaCorrecta:0},mutations={SetOperador(e,o){e.operador=o},setTiempo(e,o){e.tiempo=o},restarTiempo(e){e.tiempo--},SetValoresOperacion(state,tam){console.log(tam);let opciones=generarAleatorio(4),valora=generarAleatorio(tam),valorb=generarAleatorio(tam),operador=state.operador,decimal=0;switch(state.valorA=valora,state.valorB=valorb,state.RespuestaCorrecta=eval(valora+operador+valorb),"/"==state.operador&&(decimal=2),opciones){case 1:state.opcionA=eval(valora+operador+valorb).toFixed(decimal),state.opcionB=eval(generarAleatorio(tam)+operador+generarAleatorio(tam)).toFixed(decimal),state.opcionC=eval(generarAleatorio(tam)+operador+generarAleatorio(tam)).toFixed(decimal),state.opcionD=eval(generarAleatorio(tam)+operador+generarAleatorio(tam)).toFixed(decimal);break;case 2:state.opcionB=eval(valora+operador+valorb).toFixed(decimal),state.opcionA=eval(generarAleatorio(tam)+operador+generarAleatorio(tam)).toFixed(decimal),state.opcionC=eval(generarAleatorio(tam)+operador+generarAleatorio(tam)).toFixed(decimal),state.opcionD=eval(generarAleatorio(tam)+operador+generarAleatorio(tam)).toFixed(decimal);break;case 3:state.opcionC=eval(valora+operador+valorb).toFixed(decimal),state.opcionA=eval(generarAleatorio(tam)+operador+generarAleatorio(tam)).toFixed(decimal),state.opcionB=eval(generarAleatorio(tam)+operador+generarAleatorio(tam)).toFixed(decimal),state.opcionD=eval(generarAleatorio(tam)+operador+generarAleatorio(tam)).toFixed(decimal);break;case 4:state.opcionD=eval(valora+operador+valorb).toFixed(decimal),state.opcionA=eval(generarAleatorio(tam)+operador+generarAleatorio(tam)).toFixed(decimal),state.opcionB=eval(generarAleatorio(tam)+operador+generarAleatorio(tam)).toFixed(decimal),state.opcionC=eval(generarAleatorio(tam)+operador+generarAleatorio(tam)).toFixed(decimal);break}}},actions={},getters={operador:e=>e.operador,tiempo:e=>e.tiempo,valorA:e=>e.valorA,valorB:e=>e.valorB,opcionA:e=>e.opcionA,opcionB:e=>e.opcionB,opcionC:e=>e.opcionC,opcionD:e=>e.opcionD,RespuestaCorrecta:e=>e.RespuestaCorrecta};__webpack_exports__["a"]={namespaced:!0,state:state,mutations:mutations,actions:actions,getters:getters}},ed82:function(e,o,t){}});