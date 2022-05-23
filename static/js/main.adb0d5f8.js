/*! For license information please see main.adb0d5f8.js.LICENSE.txt */
  background: ${Qo};
  box-sizing: border-box;
  width: 100%;
  background-attachment: fixed;
  display: flex;
  flex-flow: column nowrap;
  min-height: 100vh;
  flex-grow: 1;

  h1 {
    color: ${Xo};
  }
  h2 {
    color: ${Xo};
  }
  h3 {
    color: ${Xo};
  }
  h4 {
    color: ${Xo};
  }
  h5 {
    color: ${Xo};
  }
  a {
    color: ${Xo};
  }
  input {
    color: ${Xo};
  }

  path.primary {
    fill: ${Xo};
  }
  .xs-none {
    @media (max-width: ${Lo}px) {
      display: none;
    }
  }
  .page-padding {
    padding-left: 1rem;
    padding-right: 1rem;

    @media (min-width: ${801}px) {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
    @media (min-width: ${1176}px) {
      padding: 0 3rem 0 1rem;
    }
    @media (min-width: 1500px) {
      padding: 0 5rem 0 1.5rem;
    }
  }
`),yi=M.default.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  position: relative;
  flex-grow: 1;
`,wi=M.default.div`
  box-sizing: border-box;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  position: sticky;
  top: 0px;
  z-index: 6;
  flex: 0;
  overflow: hidden;
  min-width: ${e=>e.minimised?"75px":"200px"};
  max-width: ${e=>e.minimised?"75px":"200px"};

  @media (max-width: ${To}px) {
    position: fixed;
    transition: all 0.15s ease-in-out;
    top: 0;
    left: ${e=>e.open?0:"-200px"};
  }
`,ki=M.default.div`
  box-sizing: border-box;
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  position: relative;
`,xi=(0,M.default)(co.div)`
  max-width: ${1800}px;
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  padding-bottom: 4.5rem;
  width: 100%;
  margin: 0 auto;
`,Ci=M.default.header`
  box-sizing: border-box;
  background: ${Go};
  position: sticky;
  top: 0px;
  padding-top: 1.25rem;
  padding-bottom: 0.5rem;
  @media (max-width: ${To}px) {
    top: 4rem;
    padding-top: 0.25rem;
  }
  width: 100%;
  z-index: 4;
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-end;
  transition: padding 0.3s ease-out;

  h1 {
    font-size: ${e=>e.sticky?"1.4rem ":"1.8rem"};
    @media (max-width: ${To}px) {
      font-size: 1.5rem;
    }
    transition: font 0.5s;
  }
`,Mi=M.default.div`
  background: ${Go};
  box-sizing: border-box;
  position: fixed;
  top: 0px;
  width: 100%;
  height: 4rem;
  z-index: 4;
  display: none;
  @media (max-width: ${To}px) {
    display: block;
  }
`,Ei=M.default.div`
  box-sizing: border-box;
  margin-top: ${e=>!0===e.noVerticalSpacer?"0":"1rem"};
  margin-bottom: ${e=>!0===e.noVerticalSpacer?"0":"1rem"};
  display: flex;
  flex-shrink: 0;
  flex-flow: row wrap;
  width: 100%;
  * {
    box-sizing: border-box;
  }
  /* kill heading padding, already applied to wrapper */
  h1,
  h2,
  h3,
  h4 {
    margin-top: 0;
  }
`,Ni=M.default.div`
  order: ${e=>e.vOrder};
  box-sizing: border-box;
  overflow: hidden;
  flex: 1;
  flex-basis: 100%;
  max-width: 100%;

  @media (min-width: ${1051}px) {
    ${e=>0===e.hOrder&&" padding-right: 1rem;"}
    ${e=>1===e.hOrder&&"padding-left: 1rem;"}
    order: ${e=>e.hOrder};
    flex-basis: 62%;
    width: 62%;
    flex: 1;
  }
`,Pi=M.default.div`
  order: ${e=>e.vOrder};
  box-sizing: border-box;
  overflow: hidden;
  flex-basis: 100%;
  width: 100%;
  border-radius: 1rem;

  @media (min-width: ${1051}px) {
    order: ${e=>e.hOrder};
    flex-basis: 38%;
    max-width: 38%;
    flex-grow: 1;
  }
`,ji=M.default.div`
  border-bottom: 1px solid ${fi};
  width: 100%;
  margin: 1.5rem 0;
`;function zi(){return zi=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},zi.apply(this,arguments)}var Ti;!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(Ti||(Ti={}));var Li=function(e){return e};var Si="beforeunload",Oi="popstate";function Ai(e){void 0===e&&(e={});var t=e.window,a=void 0===t?document.defaultView:t,l=a.history;function r(){var e=Ii(a.location.hash.substr(1)),t=e.pathname,r=void 0===t?"/":t,s=e.search,n=void 0===s?"":s,o=e.hash,i=void 0===o?"":o,u=l.state||{};return[u.idx,Li({pathname:r,search:n,hash:i,state:u.usr||null,key:u.key||"default"})]}var s=null;function n(){if(s)f.call(s),s=null;else{var e=Ti.Pop,t=r(),a=t[0],l=t[1];if(f.length){if(null!=a){var n=u-a;n&&(s={action:e,location:l,retry:function(){b(-1*n)}},b(n))}}else v(e)}}a.addEventListener(Oi,n),a.addEventListener("hashchange",(function(){Bi(r()[1])!==Bi(c)&&n()}));var o=Ti.Pop,i=r(),u=i[0],c=i[1],d=Hi(),f=Hi();function h(e){return function(){var e=document.querySelector("base"),t="";if(e&&e.getAttribute("href")){var l=a.location.href,r=l.indexOf("#");t=-1===r?l:l.slice(0,r)}return t}()+"#"+("string"===typeof e?e:Bi(e))}function p(e,t){return void 0===t&&(t=null),Li(zi({pathname:c.pathname,hash:"",search:""},"string"===typeof e?Ii(e):e,{state:t,key:_i()}))}function g(e,t){return[{usr:e.state,key:e.key,idx:t},h(e)]}function m(e,t,a){return!f.length||(f.call({action:e,location:t,retry:a}),!1)}function v(e){o=e;var t=r();u=t[0],c=t[1],d.call({action:o,location:c})}function b(e){l.go(e)}null==u&&(u=0,l.replaceState(zi({},l.state,{idx:u}),""));var y={get action(){return o},get location(){return c},createHref:h,push:function e(t,r){var s=Ti.Push,n=p(t,r);if(m(s,n,(function(){e(t,r)}))){var o=g(n,u+1),i=o[0],c=o[1];try{l.pushState(i,"",c)}catch(d){a.location.assign(c)}v(s)}},replace:function e(t,a){var r=Ti.Replace,s=p(t,a);if(m(r,s,(function(){e(t,a)}))){var n=g(s,u),o=n[0],i=n[1];l.replaceState(o,"",i),v(r)}},go:b,back:function(){b(-1)},forward:function(){b(1)},listen:function(e){return d.push(e)},block:function(e){var t=f.push(e);return 1===f.length&&a.addEventListener(Si,Vi),function(){t(),f.length||a.removeEventListener(Si,Vi)}}};return y}function Vi(e){e.preventDefault(),e.returnValue=""}function Hi(){var e=[];return{get length(){return e.length},push:function(t){return e.push(t),function(){e=e.filter((function(e){return e!==t}))}},call:function(t){e.forEach((function(e){return e&&e(t)}))}}}function _i(){return Math.random().toString(36).substr(2,8)}function Bi(e){var t=e.pathname,a=void 0===t?"/":t,l=e.search,r=void 0===l?"":l,s=e.hash,n=void 0===s?"":s;return r&&"?"!==r&&(a+="?"===r.charAt(0)?r:"?"+r),n&&"#"!==n&&(a+="#"===n.charAt(0)?n:"#"+n),a}function Ii(e){var t={};if(e){var a=e.indexOf("#");a>=0&&(t.hash=e.substr(a),e=e.substr(0,a));var l=e.indexOf("?");l>=0&&(t.search=e.substr(l),e=e.substr(0,l)),e&&(t.pathname=e)}return t}const Ri=(0,C.createContext)(null);const Wi=(0,C.createContext)(null);const Di=(0,C.createContext)({outlet:null,matches:[]});function Fi(e,t){if(!e)throw new Error(t)}function Ui(e,t,a){void 0===a&&(a="/");let l=Qi(("string"===typeof t?Ii(t):t).pathname||"/",a);if(null==l)return null;let r=qi(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let a=e.length===t.length&&e.slice(0,-1).every(((e,a)=>e===t[a]));return a?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(r);let s=null;for(let n=0;null==s&&n<r.length;++n)s=Ki(r[n],l);return s}function qi(e,t,a,l){return void 0===t&&(t=[]),void 0===a&&(a=[]),void 0===l&&(l=""),e.forEach(((e,r)=>{let s={relativePath:e.path||"",caseSensitive:!0===e.caseSensitive,childrenIndex:r,route:e};s.relativePath.startsWith("/")&&(s.relativePath.startsWith(l)||Fi(!1),s.relativePath=s.relativePath.slice(l.length));let n=$i([l,s.relativePath]),o=a.concat(s);e.children&&e.children.length>0&&(!0===e.index&&Fi(!1),qi(e.children,t,o,n)),(null!=e.path||e.index)&&t.push({path:n,score:Yi(n,e.index),routesMeta:o})})),t}const Xi=/^:\w+$/,Zi=e=>"*"===e;function Yi(e,t){let a=e.split("/"),l=a.length;return a.some(Zi)&&(l+=-2),t&&(l+=2),a.filter((e=>!Zi(e))).reduce(((e,t)=>e+(Xi.test(t)?3:""===t?1:10)),l)}function Ki(e,t){let{routesMeta:a}=e,l={},r="/",s=[];for(let n=0;n<a.length;++n){let e=a[n],o=n===a.length-1,i="/"===r?t:t.slice(r.length)||"/",u=Gi({path:e.relativePath,caseSensitive:e.caseSensitive,end:o},i);if(!u)return null;Object.assign(l,u.params);let c=e.route;s.push({params:l,pathname:$i([r,u.pathname]),pathnameBase:eu($i([r,u.pathnameBase])),route:c}),"/"!==u.pathnameBase&&(r=$i([r,u.pathnameBase]))}return s}function Gi(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[a,l]=function(e,t,a){void 0===t&&(t=!1);void 0===a&&(a=!0);let l=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,((e,t)=>(l.push(t),"([^\\/]+)")));e.endsWith("*")?(l.push("*"),r+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):r+=a?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)";return[new RegExp(r,t?void 0:"i"),l]}(e.path,e.caseSensitive,e.end),r=t.match(a);if(!r)return null;let s=r[0],n=s.replace(/(.)\/+$/,"$1"),o=r.slice(1),i=l.reduce(((e,t,a)=>{if("*"===t){let e=o[a]||"";n=s.slice(0,s.length-e.length).replace(/(.)\/+$/,"$1")}return e[t]=function(e,t){try{return decodeURIComponent(e)}catch(a){return e}}(o[a]||""),e}),{});return{params:i,pathname:s,pathnameBase:n,pattern:e}}function Ji(e,t,a){let l,r="string"===typeof e?Ii(e):e,s=""===e||""===r.pathname?"/":r.pathname;if(null==s)l=a;else{let e=t.length-1;if(s.startsWith("..")){let t=s.split("/");for(;".."===t[0];)t.shift(),e-=1;r.pathname=t.join("/")}l=e>=0?t[e]:"/"}let n=function(e,t){void 0===t&&(t="/");let{pathname:a,search:l="",hash:r=""}="string"===typeof e?Ii(e):e,s=a?a.startsWith("/")?a:function(e,t){let a=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?a.length>1&&a.pop():"."!==e&&a.push(e)})),a.length>1?a.join("/"):"/"}(a,t):t;return{pathname:s,search:tu(l),hash:au(r)}}(r,l);return s&&"/"!==s&&s.endsWith("/")&&!n.pathname.endsWith("/")&&(n.pathname+="/"),n}function Qi(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let a=e.charAt(t.length);return a&&"/"!==a?null:e.slice(t.length)||"/"}const $i=e=>e.join("/").replace(/\/\/+/g,"/"),eu=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),tu=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",au=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";function lu(e){ru()||Fi(!1);let{basename:t,navigator:a}=(0,C.useContext)(Ri),{hash:l,pathname:r,search:s}=ou(e),n=r;if("/"!==t){let a=function(e){return""===e||""===e.pathname?"/":"string"===typeof e?Ii(e).pathname:e.pathname}(e),l=null!=a&&a.endsWith("/");n="/"===r?t+(l?"/":""):$i([t,r])}return a.createHref({pathname:n,search:s,hash:l})}function ru(){return null!=(0,C.useContext)(Wi)}function su(){return ru()||Fi(!1),(0,C.useContext)(Wi).location}function nu(){ru()||Fi(!1);let{basename:e,navigator:t}=(0,C.useContext)(Ri),{matches:a}=(0,C.useContext)(Di),{pathname:l}=su(),r=JSON.stringify(a.map((e=>e.pathnameBase))),s=(0,C.useRef)(!1);return(0,C.useEffect)((()=>{s.current=!0})),(0,C.useCallback)((function(a,n){if(void 0===n&&(n={}),!s.current)return;if("number"===typeof a)return void t.go(a);let o=Ji(a,JSON.parse(r),l);"/"!==e&&(o.pathname=$i([e,o.pathname])),(n.replace?t.replace:t.push)(o,n.state)}),[e,t,r,l])}function ou(e){let{matches:t}=(0,C.useContext)(Di),{pathname:a}=su(),l=JSON.stringify(t.map((e=>e.pathnameBase)));return(0,C.useMemo)((()=>Ji(e,JSON.parse(l),a)),[e,l,a])}function iu(e,t){return void 0===t&&(t=[]),null==e?null:e.reduceRight(((a,l,r)=>(0,C.createElement)(Di.Provider,{children:void 0!==l.route.element?l.route.element:a,value:{outlet:a,matches:t.concat(e.slice(0,r+1))}})),null)}function uu(e){let{to:t,replace:a,state:l}=e;ru()||Fi(!1);let r=nu();return(0,C.useEffect)((()=>{r(t,{replace:a,state:l})})),null}function cu(e){Fi(!1)}function du(e){let{basename:t="/",children:a=null,location:l,navigationType:r=Ti.Pop,navigator:s,static:n=!1}=e;ru()&&Fi(!1);let o=eu(t),i=(0,C.useMemo)((()=>({basename:o,navigator:s,static:n})),[o,s,n]);"string"===typeof l&&(l=Ii(l));let{pathname:u="/",search:c="",hash:d="",state:f=null,key:h="default"}=l,p=(0,C.useMemo)((()=>{let e=Qi(u,o);return null==e?null:{pathname:e,search:c,hash:d,state:f,key:h}}),[o,u,c,d,f,h]);return null==p?null:(0,C.createElement)(Ri.Provider,{value:i},(0,C.createElement)(Wi.Provider,{children:a,value:{location:p,navigationType:r}}))}function fu(e){let{children:t,location:a}=e;return function(e,t){ru()||Fi(!1);let{matches:a}=(0,C.useContext)(Di),l=a[a.length-1],r=l?l.params:{},s=(l&&l.pathname,l?l.pathnameBase:"/");l&&l.route;let n,o=su();if(t){var i;let e="string"===typeof t?Ii(t):t;"/"===s||(null==(i=e.pathname)?void 0:i.startsWith(s))||Fi(!1),n=e}else n=o;let u=n.pathname||"/",c=Ui(e,{pathname:"/"===s?u:u.slice(s.length)||"/"});return iu(c&&c.map((e=>Object.assign({},e,{params:Object.assign({},r,e.params),pathname:$i([s,e.pathname]),pathnameBase:"/"===e.pathnameBase?s:$i([s,e.pathnameBase])}))),a)}(hu(t),a)}function hu(e){let t=[];return C.Children.forEach(e,(e=>{if(!(0,C.isValidElement)(e))return;if(e.type===C.Fragment)return void t.push.apply(t,hu(e.props.children));e.type!==cu&&Fi(!1);let a={caseSensitive:e.props.caseSensitive,element:e.props.element,index:e.props.index,path:e.props.path};e.props.children&&(a.children=hu(e.props.children)),t.push(a)})),t}function pu(){return pu=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},pu.apply(this,arguments)}function gu(e,t){if(null==e)return{};var a,l,r={},s=Object.keys(e);for(l=0;l<s.length;l++)a=s[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}const mu=["onClick","reloadDocument","replace","state","target","to"];function vu(e){let{basename:t,children:a,window:l}=e,r=(0,C.useRef)();null==r.current&&(r.current=Ai({window:l}));let s=r.current,[n,o]=(0,C.useState)({action:s.action,location:s.location});return(0,C.useLayoutEffect)((()=>s.listen(o)),[s]),(0,C.createElement)(du,{basename:t,children:a,location:n.location,navigationType:n.action,navigator:s})}const bu=(0,C.forwardRef)((function(e,t){let{onClick:a,reloadDocument:l,replace:r=!1,state:s,target:n,to:o}=e,i=gu(e,mu),u=lu(o),c=function(e,t){let{target:a,replace:l,state:r}=void 0===t?{}:t,s=nu(),n=su(),o=ou(e);return(0,C.useCallback)((t=>{if(0===t.button&&(!a||"_self"===a)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(t)){t.preventDefault();let a=!!l||Bi(n)===Bi(o);s(e,{replace:a,state:r})}}),[n,s,o,l,r,a,e])}(o,{replace:r,state:s,target:n});return(0,C.createElement)("a",pu({},i,{href:u,onClick:function(e){a&&a(e),e.defaultPrevented||l||c(e)},ref:t,target:n}))}));function yu(){var e=(0,C.useRef)(!1);return X((function(){return e.current=!0,function(){e.current=!1}}),[]),e}var wu=function(e){var t=e.children,a=e.initial,l=e.isPresent,r=e.onExitComplete,s=e.custom,n=e.presenceAffectsLayout,o=ne(ku),i=Ss(),u=(0,C.useMemo)((function(){return{id:i,initial:a,isPresent:l,custom:s,onExitComplete:function(e){var t,a;o.set(e,!0);try{for(var l=L(o.values()),s=l.next();!s.done;s=l.next()){if(!s.value)return}}catch(n){t={error:n}}finally{try{s&&!s.done&&(a=l.return)&&a.call(l)}finally{if(t)throw t.error}}null===r||void 0===r||r()},register:function(e){return o.set(e,!1),function(){return o.delete(e)}}}}),n?void 0:[l]);return(0,C.useMemo)((function(){o.forEach((function(e,t){return o.set(t,!1)}))}),[l]),C.useEffect((function(){!l&&!o.size&&(null===r||void 0===r||r())}),[l]),C.createElement(U.Provider,{value:u},t)};function ku(){return new Map}var xu=function(e){return e.key||""};var Cu=function(e){var t=e.children,a=e.custom,l=e.initial,r=void 0===l||l,s=e.onExitComplete,n=e.exitBeforeEnter,o=e.presenceAffectsLayout,i=void 0===o||o,u=S(function(){var e=yu(),t=S((0,C.useState)(0),2),a=t[0],l=t[1],r=(0,C.useCallback)((function(){e.current&&l(a+1)}),[a]);return[(0,C.useCallback)((function(){return Ce.postRender(r)}),[r]),a]}(),1),c=u[0],d=(0,C.useContext)(dr).forceRender;d&&(c=d);var f=yu(),h=function(e){var t=[];return C.Children.forEach(e,(function(e){(0,C.isValidElement)(e)&&t.push(e)})),t}(t),p=h,g=new Set,m=(0,C.useRef)(p),v=(0,C.useRef)(new Map).current,b=(0,C.useRef)(!0);if(X((function(){b.current=!1,function(e,t){e.forEach((function(e){var a=xu(e);t.set(a,e)}))}(h,v),m.current=p})),ys((function(){b.current=!0,v.clear(),g.clear()})),b.current)return C.createElement(C.Fragment,null,p.map((function(e){return C.createElement(wu,{key:xu(e),isPresent:!0,initial:!!r&&void 0,presenceAffectsLayout:i},e)})));p=O([],S(p),!1);for(var y=m.current.map(xu),w=h.map(xu),k=y.length,x=0;x<k;x++){var M=y[x];-1===w.indexOf(M)&&g.add(M)}return n&&g.size&&(p=[]),g.forEach((function(e){if(-1===w.indexOf(e)){var t=v.get(e);if(t){var l=y.indexOf(e);p.splice(l,0,C.createElement(wu,{key:xu(t),isPresent:!1,onExitComplete:function(){v.delete(e),g.delete(e);var t=m.current.findIndex((function(t){return t.key===e}));if(m.current.splice(t,1),!g.size){if(m.current=h,!1===f.current)return;c(),s&&s()}},custom:a,presenceAffectsLayout:i},t))}}})),p=p.map((function(e){var t=e.key;return g.has(t)?e:C.createElement(wu,{key:xu(e),isPresent:!0,presenceAffectsLayout:i},e)})),C.createElement(C.Fragment,null,g.size?p:p.map((function(e){return(0,C.cloneElement)(e)})))},Mu=__webpack_require__(52007),Eu=__webpack_require__.n(Mu),Nu=__webpack_require__(39475),Pu=__webpack_require__.n(Nu),ju=__webpack_require__(50077),zu=__webpack_require__.n(ju),Tu=__webpack_require__(31725),Lu=__webpack_require__.n(Tu),Su="bodyAttributes",Ou="htmlAttributes",Au="titleAttributes",Vu={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},Hu=(Object.keys(Vu).map((function(e){return Vu[e]})),"charset"),_u="cssText",Bu="href",Iu="http-equiv",Ru="innerHTML",Wu="itemprop",Du="name",Fu="property",Uu="rel",qu="src",Xu="target",Zu={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Yu="defaultTitle",Ku="defer",Gu="encodeSpecialCharacters",Ju="onChangeClientState",Qu="titleTemplate",$u=Object.keys(Zu).reduce((function(e,t){return e[Zu[t]]=t,e}),{}),ec=[Vu.NOSCRIPT,Vu.SCRIPT,Vu.STYLE],tc="data-react-helmet",ac="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},lc=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},rc=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),sc=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},nc=function(e,t){var a={};for(var l in e)t.indexOf(l)>=0||Object.prototype.hasOwnProperty.call(e,l)&&(a[l]=e[l]);return a},oc=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t},ic=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},uc=function(e){var t=pc(e,Vu.TITLE),a=pc(e,Qu);if(a&&t)return a.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var l=pc(e,Yu);return t||l||void 0},cc=function(e){return pc(e,Ju)||function(){}},dc=function(e,t){return t.filter((function(t){return"undefined"!==typeof t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return sc({},e,t)}),{})},fc=function(e,t){return t.filter((function(e){return"undefined"!==typeof e[Vu.BASE]})).map((function(e){return e[Vu.BASE]})).reverse().reduce((function(t,a){if(!t.length)for(var l=Object.keys(a),r=0;r<l.length;r++){var s=l[r].toLowerCase();if(-1!==e.indexOf(s)&&a[s])return t.concat(a)}return t}),[])},hc=function(e,t,a){var l={};return a.filter((function(t){return!!Array.isArray(t[e])||("undefined"!==typeof t[e]&&yc("Helmet: "+e+' should be of type "Array". Instead found type "'+ac(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,a){var r={};a.filter((function(e){for(var a=void 0,s=Object.keys(e),n=0;n<s.length;n++){var o=s[n],i=o.toLowerCase();-1===t.indexOf(i)||a===Uu&&"canonical"===e[a].toLowerCase()||i===Uu&&"stylesheet"===e[i].toLowerCase()||(a=i),-1===t.indexOf(o)||o!==Ru&&o!==_u&&o!==Wu||(a=o)}if(!a||!e[a])return!1;var u=e[a].toLowerCase();return l[a]||(l[a]={}),r[a]||(r[a]={}),!l[a][u]&&(r[a][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var s=Object.keys(r),n=0;n<s.length;n++){var o=s[n],i=Lu()({},l[o],r[o]);l[o]=i}return e}),[]).reverse()},pc=function(e,t){for(var a=e.length-1;a>=0;a--){var l=e[a];if(l.hasOwnProperty(t))return l[t]}return null},gc=function(){var e=Date.now();return function(t){var a=Date.now();a-e>16?(e=a,t(a)):setTimeout((function(){gc(t)}),0)}}(),mc=function(e){return clearTimeout(e)},vc="undefined"!==typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||gc:__webpack_require__.g.requestAnimationFrame||gc,bc="undefined"!==typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||mc:__webpack_require__.g.cancelAnimationFrame||mc,yc=function(e){return console&&"function"===typeof console.warn&&console.warn(e)},wc=null,kc=function(e,t){var a=e.baseTag,l=e.bodyAttributes,r=e.htmlAttributes,s=e.linkTags,n=e.metaTags,o=e.noscriptTags,i=e.onChangeClientState,u=e.scriptTags,c=e.styleTags,d=e.title,f=e.titleAttributes;Mc(Vu.BODY,l),Mc(Vu.HTML,r),Cc(d,f);var h={baseTag:Ec(Vu.BASE,a),linkTags:Ec(Vu.LINK,s),metaTags:Ec(Vu.META,n),noscriptTags:Ec(Vu.NOSCRIPT,o),scriptTags:Ec(Vu.SCRIPT,u),styleTags:Ec(Vu.STYLE,c)},p={},g={};Object.keys(h).forEach((function(e){var t=h[e],a=t.newTags,l=t.oldTags;a.length&&(p[e]=a),l.length&&(g[e]=h[e].oldTags)})),t&&t(),i(e,p,g)},xc=function(e){return Array.isArray(e)?e.join(""):e},Cc=function(e,t){"undefined"!==typeof e&&document.title!==e&&(document.title=xc(e)),Mc(Vu.TITLE,t)},Mc=function(e,t){var a=document.getElementsByTagName(e)[0];if(a){for(var l=a.getAttribute(tc),r=l?l.split(","):[],s=[].concat(r),n=Object.keys(t),o=0;o<n.length;o++){var i=n[o],u=t[i]||"";a.getAttribute(i)!==u&&a.setAttribute(i,u),-1===r.indexOf(i)&&r.push(i);var c=s.indexOf(i);-1!==c&&s.splice(c,1)}for(var d=s.length-1;d>=0;d--)a.removeAttribute(s[d]);r.length===s.length?a.removeAttribute(tc):a.getAttribute(tc)!==n.join(",")&&a.setAttribute(tc,n.join(","))}},Ec=function(e,t){var a=document.head||document.querySelector(Vu.HEAD),l=a.querySelectorAll(e+"["+"data-react-helmet]"),r=Array.prototype.slice.call(l),s=[],n=void 0;return t&&t.length&&t.forEach((function(t){var a=document.createElement(e);for(var l in t)if(t.hasOwnProperty(l))if(l===Ru)a.innerHTML=t.innerHTML;else if(l===_u)a.styleSheet?a.styleSheet.cssText=t.cssText:a.appendChild(document.createTextNode(t.cssText));else{var o="undefined"===typeof t[l]?"":t[l];a.setAttribute(l,o)}a.setAttribute(tc,"true"),r.some((function(e,t){return n=t,a.isEqualNode(e)}))?r.splice(n,1):s.push(a)})),r.forEach((function(e){return e.parentNode.removeChild(e)})),s.forEach((function(e){return a.appendChild(e)})),{oldTags:r,newTags:s}},Nc=function(e){return Object.keys(e).reduce((function(t,a){var l="undefined"!==typeof e[a]?a+'="'+e[a]+'"':""+a;return t?t+" "+l:l}),"")},Pc=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,a){return t[Zu[a]||a]=e[a],t}),t)},jc=function(e,t,a){switch(e){case Vu.TITLE:return{toComponent:function(){return function(e,t,a){var l,r=((l={key:t})[tc]=!0,l),s=Pc(a,r);return[C.createElement(Vu.TITLE,s,t)]}(0,t.title,t.titleAttributes)},toString:function(){return function(e,t,a,l){var r=Nc(a),s=xc(t);return r?"<"+e+' data-react-helmet="true" '+r+">"+ic(s,l)+"</"+e+">":"<"+e+' data-react-helmet="true">'+ic(s,l)+"</"+e+">"}(e,t.title,t.titleAttributes,a)}};case Su:case Ou:return{toComponent:function(){return Pc(t)},toString:function(){return Nc(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,a){var l,r=((l={key:a})[tc]=!0,l);return Object.keys(t).forEach((function(e){var a=Zu[e]||e;if(a===Ru||a===_u){var l=t.innerHTML||t.cssText;r.dangerouslySetInnerHTML={__html:l}}else r[a]=t[e]})),C.createElement(e,r)}))}(e,t)},toString:function(){return function(e,t,a){return t.reduce((function(t,l){var r=Object.keys(l).filter((function(e){return!(e===Ru||e===_u)})).reduce((function(e,t){var r="undefined"===typeof l[t]?t:t+'="'+ic(l[t],a)+'"';return e?e+" "+r:r}),""),s=l.innerHTML||l.cssText||"",n=-1===ec.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+r+(n?"/>":">"+s+"</"+e+">")}),"")}(e,t,a)}}}},zc=function(e){var t=e.baseTag,a=e.bodyAttributes,l=e.encode,r=e.htmlAttributes,s=e.linkTags,n=e.metaTags,o=e.noscriptTags,i=e.scriptTags,u=e.styleTags,c=e.title,d=void 0===c?"":c,f=e.titleAttributes;return{base:jc(Vu.BASE,t,l),bodyAttributes:jc(Su,a,l),htmlAttributes:jc(Ou,r,l),link:jc(Vu.LINK,s,l),meta:jc(Vu.META,n,l),noscript:jc(Vu.NOSCRIPT,o,l),script:jc(Vu.SCRIPT,i,l),style:jc(Vu.STYLE,u,l),title:jc(Vu.TITLE,{title:d,titleAttributes:f},l)}},Tc=function(e){var t,a;return a=t=function(t){function a(){return lc(this,a),oc(this,t.apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(a,t),a.prototype.shouldComponentUpdate=function(e){return!zu()(this.props,e)},a.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case Vu.SCRIPT:case Vu.NOSCRIPT:return{innerHTML:t};case Vu.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},a.prototype.flattenArrayTypeChildren=function(e){var t,a=e.child,l=e.arrayTypeChildren,r=e.newChildProps,s=e.nestedChildren;return sc({},l,((t={})[a.type]=[].concat(l[a.type]||[],[sc({},r,this.mapNestedChildrenToProps(a,s))]),t))},a.prototype.mapObjectTypeChildren=function(e){var t,a,l=e.child,r=e.newProps,s=e.newChildProps,n=e.nestedChildren;switch(l.type){case Vu.TITLE:return sc({},r,((t={})[l.type]=n,t.titleAttributes=sc({},s),t));case Vu.BODY:return sc({},r,{bodyAttributes:sc({},s)});case Vu.HTML:return sc({},r,{htmlAttributes:sc({},s)})}return sc({},r,((a={})[l.type]=sc({},s),a))},a.prototype.mapArrayTypeChildrenToProps=function(e,t){var a=sc({},t);return Object.keys(e).forEach((function(t){var l;a=sc({},a,((l={})[t]=e[t],l))})),a},a.prototype.warnOnInvalidChildren=function(e,t){return!0},a.prototype.mapChildrenToProps=function(e,t){var a=this,l={};return C.Children.forEach(e,(function(e){if(e&&e.props){var r=e.props,s=r.children,n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,a){return t[$u[a]||a]=e[a],t}),t)}(nc(r,["children"]));switch(a.warnOnInvalidChildren(e,s),e.type){case Vu.LINK:case Vu.META:case Vu.NOSCRIPT:case Vu.SCRIPT:case Vu.STYLE:l=a.flattenArrayTypeChildren({child:e,arrayTypeChildren:l,newChildProps:n,nestedChildren:s});break;default:t=a.mapObjectTypeChildren({child:e,newProps:t,newChildProps:n,nestedChildren:s})}}})),t=this.mapArrayTypeChildrenToProps(l,t)},a.prototype.render=function(){var t=this.props,a=t.children,l=nc(t,["children"]),r=sc({},l);return a&&(r=this.mapChildrenToProps(a,r)),C.createElement(e,r)},rc(a,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),a}(C.Component),t.propTypes={base:Eu().object,bodyAttributes:Eu().object,children:Eu().oneOfType([Eu().arrayOf(Eu().node),Eu().node]),defaultTitle:Eu().string,defer:Eu().bool,encodeSpecialCharacters:Eu().bool,htmlAttributes:Eu().object,link:Eu().arrayOf(Eu().object),meta:Eu().arrayOf(Eu().object),noscript:Eu().arrayOf(Eu().object),onChangeClientState:Eu().func,script:Eu().arrayOf(Eu().object),style:Eu().arrayOf(Eu().object),title:Eu().string,titleAttributes:Eu().object,titleTemplate:Eu().string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=zc({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},a}(Pu()((function(e){return{baseTag:fc([Bu,Xu],e),bodyAttributes:dc(Su,e),defer:pc(e,Ku),encode:pc(e,Gu),htmlAttributes:dc(Ou,e),linkTags:hc(Vu.LINK,[Uu,Bu],e),metaTags:hc(Vu.META,[Du,Hu,Iu,Fu,Wu],e),noscriptTags:hc(Vu.NOSCRIPT,[Ru],e),onChangeClientState:cc(e),scriptTags:hc(Vu.SCRIPT,[qu,Ru],e),styleTags:hc(Vu.STYLE,[_u],e),title:uc(e),titleAttributes:dc(Au,e)}}),(function(e){wc&&bc(wc),e.defer?wc=vc((function(){kc(e,(function(){wc=null}))})):(kc(e),wc=null)}),zc)((function(){return null})));Tc.renderStatic=Tc.rewind;var Lc={prefix:"fas",iconName:"angles-right",icon:[448,512,[187,"angle-double-right"],"f101","M246.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L178.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C47.63 444.9 55.81 448 64 448s16.38-3.125 22.62-9.375l160-160C259.1 266.1 259.1 245.9 246.6 233.4zM438.6 233.4l-160-160c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L370.8 256l-137.4 137.4c-12.5 12.5-12.5 32.75 0 45.25C239.6 444.9 247.8 448 256 448s16.38-3.125 22.62-9.375l160-160C451.1 266.1 451.1 245.9 438.6 233.4z"]},Sc={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"]},Oc={prefix:"fas",iconName:"braille",icon:[640,512,[],"f2a1","M128 96C128 131.3 99.35 160 64 160C28.65 160 0 131.3 0 96C0 60.65 28.65 32 64 32C99.35 32 128 60.65 128 96zM160 256C160 220.7 188.7 192 224 192C259.3 192 288 220.7 288 256C288 291.3 259.3 320 224 320C188.7 320 160 291.3 160 256zM224 272C232.8 272 240 264.8 240 256C240 247.2 232.8 240 224 240C215.2 240 208 247.2 208 256C208 264.8 215.2 272 224 272zM128 416C128 451.3 99.35 480 64 480C28.65 480 0 451.3 0 416C0 380.7 28.65 352 64 352C99.35 352 128 380.7 128 416zM64 400C55.16 400 48 407.2 48 416C48 424.8 55.16 432 64 432C72.84 432 80 424.8 80 416C80 407.2 72.84 400 64 400zM288 416C288 451.3 259.3 480 224 480C188.7 480 160 451.3 160 416C160 380.7 188.7 352 224 352C259.3 352 288 380.7 288 416zM224 400C215.2 400 208 407.2 208 416C208 424.8 215.2 432 224 432C232.8 432 240 424.8 240 416C240 407.2 232.8 400 224 400zM0 256C0 220.7 28.65 192 64 192C99.35 192 128 220.7 128 256C128 291.3 99.35 320 64 320C28.65 320 0 291.3 0 256zM160 96C160 60.65 188.7 32 224 32C259.3 32 288 60.65 288 96C288 131.3 259.3 160 224 160C188.7 160 160 131.3 160 96zM480 96C480 131.3 451.3 160 416 160C380.7 160 352 131.3 352 96C352 60.65 380.7 32 416 32C451.3 32 480 60.65 480 96zM640 96C640 131.3 611.3 160 576 160C540.7 160 512 131.3 512 96C512 60.65 540.7 32 576 32C611.3 32 640 60.65 640 96zM576 80C567.2 80 560 87.16 560 96C560 104.8 567.2 112 576 112C584.8 112 592 104.8 592 96C592 87.16 584.8 80 576 80zM512 256C512 220.7 540.7 192 576 192C611.3 192 640 220.7 640 256C640 291.3 611.3 320 576 320C540.7 320 512 291.3 512 256zM576 272C584.8 272 592 264.8 592 256C592 247.2 584.8 240 576 240C567.2 240 560 247.2 560 256C560 264.8 567.2 272 576 272zM640 416C640 451.3 611.3 480 576 480C540.7 480 512 451.3 512 416C512 380.7 540.7 352 576 352C611.3 352 640 380.7 640 416zM576 400C567.2 400 560 407.2 560 416C560 424.8 567.2 432 576 432C584.8 432 592 424.8 592 416C592 407.2 584.8 400 576 400zM352 256C352 220.7 380.7 192 416 192C451.3 192 480 220.7 480 256C480 291.3 451.3 320 416 320C380.7 320 352 291.3 352 256zM416 272C424.8 272 432 264.8 432 256C432 247.2 424.8 240 416 240C407.2 240 400 247.2 400 256C400 264.8 407.2 272 416 272zM480 416C480 451.3 451.3 480 416 480C380.7 480 352 451.3 352 416C352 380.7 380.7 352 416 352C451.3 352 480 380.7 480 416zM416 400C407.2 400 400 407.2 400 416C400 424.8 407.2 432 416 432C424.8 432 432 424.8 432 416C432 407.2 424.8 400 416 400z"]},Ac={prefix:"fas",iconName:"bullhorn",icon:[512,512,[128363,128226],"f0a1","M480 179.6C498.6 188.4 512 212.1 512 240C512 267.9 498.6 291.6 480 300.4V448C480 460.9 472.2 472.6 460.2 477.6C448.3 482.5 434.5 479.8 425.4 470.6L381.7 426.1C333.7 378.1 268.6 352 200.7 352H192V480C192 497.7 177.7 512 160 512H96C78.33 512 64 497.7 64 480V352C28.65 352 0 323.3 0 288V192C0 156.7 28.65 128 64 128H200.7C268.6 128 333.7 101 381.7 53.02L425.4 9.373C434.5 .2215 448.3-2.516 460.2 2.437C472.2 7.39 480 19.06 480 32V179.6zM200.7 192H192V288H200.7C280.5 288 357.2 317.8 416 371.3V108.7C357.2 162.2 280.5 192 200.7 192V192z"]},Vc={prefix:"fas",iconName:"chart-line",icon:[512,512,["line-chart"],"f201","M64 400C64 408.8 71.16 416 80 416H480C497.7 416 512 430.3 512 448C512 465.7 497.7 480 480 480H80C35.82 480 0 444.2 0 400V64C0 46.33 14.33 32 32 32C49.67 32 64 46.33 64 64V400zM342.6 278.6C330.1 291.1 309.9 291.1 297.4 278.6L240 221.3L150.6 310.6C138.1 323.1 117.9 323.1 105.4 310.6C92.88 298.1 92.88 277.9 105.4 265.4L217.4 153.4C229.9 140.9 250.1 140.9 262.6 153.4L320 210.7L425.4 105.4C437.9 92.88 458.1 92.88 470.6 105.4C483.1 117.9 483.1 138.1 470.6 150.6L342.6 278.6z"]},Hc={prefix:"fas",iconName:"check",icon:[448,512,[10004,10003],"f00c","M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"]},_c={prefix:"fas",iconName:"chevron-left",icon:[320,512,[9001],"f053","M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z"]},Bc={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"]},Ic={prefix:"fas",iconName:"circle",icon:[512,512,[128308,128309,128992,128993,128994,128995,128996,9898,9899,11044,61708,61915,9679],"f111","M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256z"]},Rc={prefix:"fas",iconName:"circle-chevron-right",icon:[512,512,["chevron-circle-right"],"f138","M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM358.6 278.6l-112 112c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L290.8 256L201.4 166.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l112 112C364.9 239.6 368 247.8 368 256S364.9 272.4 358.6 278.6z"]},Wc=Rc,Dc={prefix:"fas",iconName:"circle-play",icon:[512,512,[61469,"play-circle"],"f144","M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM176 168V344C176 352.7 180.7 360.7 188.3 364.9C195.8 369.2 205.1 369 212.5 364.5L356.5 276.5C363.6 272.1 368 264.4 368 256C368 247.6 363.6 239.9 356.5 235.5L212.5 147.5C205.1 142.1 195.8 142.8 188.3 147.1C180.7 151.3 176 159.3 176 168V168z"]},Fc=Dc,Uc={prefix:"fas",iconName:"circle-stop",icon:[512,512,[62094,"stop-circle"],"f28d","M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM352 328c0 13.2-10.8 24-24 24h-144C170.8 352 160 341.2 160 328v-144C160 170.8 170.8 160 184 160h144C341.2 160 352 170.8 352 184V328z"]},qc=Uc,Xc={prefix:"fas",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"]},Zc={prefix:"fas",iconName:"comment",icon:[512,512,[61669,128489],"f075","M256 32C114.6 32 .0272 125.1 .0272 240c0 49.63 21.35 94.98 56.97 130.7c-12.5 50.37-54.27 95.27-54.77 95.77c-2.25 2.25-2.875 5.734-1.5 8.734C1.979 478.2 4.75 480 8 480c66.25 0 115.1-31.76 140.6-51.39C181.2 440.9 217.6 448 256 448c141.4 0 255.1-93.13 255.1-208S397.4 32 256 32z"]},Yc={prefix:"fas",iconName:"diagram-project",icon:[576,512,["project-diagram"],"f542","M0 80C0 53.49 21.49 32 48 32H144C170.5 32 192 53.49 192 80V96H384V80C384 53.49 405.5 32 432 32H528C554.5 32 576 53.49 576 80V176C576 202.5 554.5 224 528 224H432C405.5 224 384 202.5 384 176V160H192V176C192 177.7 191.9 179.4 191.7 180.1L272 288H368C394.5 288 416 309.5 416 336V432C416 458.5 394.5 480 368 480H272C245.5 480 224 458.5 224 432V336C224 334.3 224.1 332.6 224.3 331L144 224H48C21.49 224 0 202.5 0 176V80z"]},Kc=Yc,Gc={prefix:"fas",iconName:"down-left-and-up-right-to-center",icon:[512,512,["compress-alt"],"f422","M215.1 272h-136c-12.94 0-24.63 7.797-29.56 19.75C45.47 303.7 48.22 317.5 57.37 326.6l30.06 30.06l-78.06 78.07c-12.5 12.5-12.5 32.75-.0012 45.25l22.62 22.62c12.5 12.5 32.76 12.5 45.26 .0013l78.06-78.07l30.06 30.06c6.125 6.125 14.31 9.367 22.63 9.367c4.125 0 8.279-.7891 12.25-2.43c11.97-4.953 19.75-16.62 19.75-29.56V296C239.1 282.7 229.3 272 215.1 272zM296 240h136c12.94 0 24.63-7.797 29.56-19.75c4.969-11.97 2.219-25.72-6.938-34.87l-30.06-30.06l78.06-78.07c12.5-12.5 12.5-32.76 .0002-45.26l-22.62-22.62c-12.5-12.5-32.76-12.5-45.26-.0003l-78.06 78.07l-30.06-30.06c-9.156-9.141-22.87-11.84-34.87-6.937c-11.97 4.953-19.75 16.62-19.75 29.56v135.1C272 229.3 282.7 240 296 240z"]},Jc=Gc,Qc={prefix:"fas",iconName:"grip-vertical",icon:[320,512,[],"f58e","M88 352C110.1 352 128 369.9 128 392V440C128 462.1 110.1 480 88 480H40C17.91 480 0 462.1 0 440V392C0 369.9 17.91 352 40 352H88zM280 352C302.1 352 320 369.9 320 392V440C320 462.1 302.1 480 280 480H232C209.9 480 192 462.1 192 440V392C192 369.9 209.9 352 232 352H280zM40 320C17.91 320 0 302.1 0 280V232C0 209.9 17.91 192 40 192H88C110.1 192 128 209.9 128 232V280C128 302.1 110.1 320 88 320H40zM280 192C302.1 192 320 209.9 320 232V280C320 302.1 302.1 320 280 320H232C209.9 320 192 302.1 192 280V232C192 209.9 209.9 192 232 192H280zM40 160C17.91 160 0 142.1 0 120V72C0 49.91 17.91 32 40 32H88C110.1 32 128 49.91 128 72V120C128 142.1 110.1 160 88 160H40zM280 32C302.1 32 320 49.91 320 72V120C320 142.1 302.1 160 280 160H232C209.9 160 192 142.1 192 120V72C192 49.91 209.9 32 232 32H280z"]},$c={prefix:"fas",iconName:"lock-open",icon:[576,512,[],"f3c1","M352 192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H288V144C288 64.47 352.5 0 432 0C511.5 0 576 64.47 576 144V192C576 209.7 561.7 224 544 224C526.3 224 512 209.7 512 192V144C512 99.82 476.2 64 432 64C387.8 64 352 99.82 352 144V192z"]},ed={prefix:"fas",iconName:"minus",icon:[448,512,[8722,10134,8211,"subtract"],"f068","M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z"]},td={prefix:"fas",iconName:"percent",icon:[384,512,[62101,"percentage"],"25","M374.6 73.39c-12.5-12.5-32.75-12.5-45.25 0l-320 320c-12.5 12.5-12.5 32.75 0 45.25C15.63 444.9 23.81 448 32 448s16.38-3.125 22.62-9.375l320-320C387.1 106.1 387.1 85.89 374.6 73.39zM64 192c35.3 0 64-28.72 64-64S99.3 64.01 64 64.01S0 92.73 0 128S28.7 192 64 192zM320 320c-35.3 0-64 28.72-64 64s28.7 64 64 64s64-28.72 64-64S355.3 320 320 320z"]},ad=td,ld={prefix:"fas",iconName:"plus",icon:[448,512,[10133,"add"],"2b","M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"]},rd={prefix:"fas",iconName:"right-left",icon:[512,512,["exchange-alt"],"f362","M32 160h319.9l.0791 72c0 9.547 5.652 18.19 14.41 22c8.754 3.812 18.93 2.078 25.93-4.406l112-104c10.24-9.5 10.24-25.69 0-35.19l-112-104c-6.992-6.484-17.17-8.217-25.93-4.408c-8.758 3.816-14.41 12.46-14.41 22L351.9 96H32C14.31 96 0 110.3 0 127.1S14.31 160 32 160zM480 352H160.1L160 279.1c0-9.547-5.652-18.19-14.41-22C136.9 254.2 126.7 255.9 119.7 262.4l-112 104c-10.24 9.5-10.24 25.69 0 35.19l112 104c6.992 6.484 17.17 8.219 25.93 4.406C154.4 506.2 160 497.5 160 488L160.1 416H480c17.69 0 32-14.31 32-32S497.7 352 480 352z"]},sd=rd,nd={prefix:"fas",iconName:"rotate-right",icon:[512,512,["redo-alt","rotate-forward"],"f2f9","M468.9 32.11c13.87 0 27.18 10.77 27.18 27.04v145.9c0 10.59-8.584 19.17-19.17 19.17h-145.7c-16.28 0-27.06-13.32-27.06-27.2c0-6.634 2.461-13.4 7.96-18.9l45.12-45.14c-28.22-23.14-63.85-36.64-101.3-36.64c-88.09 0-159.8 71.69-159.8 159.8S167.8 415.9 255.9 415.9c73.14 0 89.44-38.31 115.1-38.31c18.48 0 31.97 15.04 31.97 31.96c0 35.04-81.59 70.41-147 70.41c-123.4 0-223.9-100.5-223.9-223.9S132.6 32.44 256 32.44c54.6 0 106.2 20.39 146.4 55.26l47.6-47.63C455.5 34.57 462.3 32.11 468.9 32.11z"]},od=nd,id={prefix:"fas",iconName:"scale-unbalanced",icon:[640,512,["balance-scale-left"],"f515","M85 250.5c-87 174.2-84.1 165.9-84.1 181.5C.0035 476.1 57.25 512 128 512s128-35.88 128-79.1c0-16.12 1.375-8.752-85.12-181.5C153.3 215.3 102.8 215.1 85 250.5zM55.96 416l71.98-143.1l72.15 143.1H55.96zM554.9 122.5c-17.62-35.25-68.08-35.37-85.83 0c-87 174.2-85.04 165.9-85.04 181.5c0 44.12 57.25 79.1 128 79.1s127.1-35.87 127.1-79.1C639.1 287.9 641.4 295.3 554.9 122.5zM439.1 288l72.04-143.1l72.08 143.1H439.1zM495.1 448h-143.1V153.3c20.83-9.117 36.72-26.93 43.78-48.77l126.3-42.11c16.77-5.594 25.83-23.72 20.23-40.48c-5.578-16.73-23.62-25.86-40.48-20.23l-113.3 37.76c-13.94-23.49-39.29-39.41-68.58-39.41c-44.18 0-79.1 35.82-79.1 80c0 2.961 .5587 5.771 .8712 8.648L117.9 129.7C101.1 135.3 92.05 153.4 97.64 170.1c4.469 13.41 16.95 21.88 30.36 21.88c3.344 0 6.768-.5186 10.13-1.644L273.8 145.1C278.2 148.3 282.1 151.1 288 153.3V496C288 504.8 295.2 512 304 512h223.1c8.838 0 16-7.164 16-15.1C543.1 469.5 522.5 448 495.1 448z"]},ud=id,cd={prefix:"fas",iconName:"server",icon:[512,512,[],"f233","M480 288H32c-17.62 0-32 14.38-32 32v128c0 17.62 14.38 32 32 32h448c17.62 0 32-14.38 32-32v-128C512 302.4 497.6 288 480 288zM352 408c-13.25 0-24-10.75-24-24s10.75-24 24-24s24 10.75 24 24S365.3 408 352 408zM416 408c-13.25 0-24-10.75-24-24s10.75-24 24-24s24 10.75 24 24S429.3 408 416 408zM480 32H32C14.38 32 0 46.38 0 64v128c0 17.62 14.38 32 32 32h448c17.62 0 32-14.38 32-32V64C512 46.38 497.6 32 480 32zM352 152c-13.25 0-24-10.75-24-24S338.8 104 352 104S376 114.8 376 128S365.3 152 352 152zM416 152c-13.25 0-24-10.75-24-24S402.8 104 416 104S440 114.8 440 128S429.3 152 416 152z"]},dd={prefix:"fas",iconName:"star",icon:[576,512,[61446,11088],"f005","M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"]},fd={prefix:"fas",iconName:"thumbtack",icon:[384,512,[128392,128204,"thumb-tack"],"f08d","M32 32C32 14.33 46.33 0 64 0H320C337.7 0 352 14.33 352 32C352 49.67 337.7 64 320 64H290.5L301.9 212.2C338.6 232.1 367.5 265.4 381.4 306.9L382.4 309.9C385.6 319.6 383.1 330.4 377.1 338.7C371.9 347.1 362.3 352 352 352H32C21.71 352 12.05 347.1 6.04 338.7C.0259 330.4-1.611 319.6 1.642 309.9L2.644 306.9C16.47 265.4 45.42 232.1 82.14 212.2L93.54 64H64C46.33 64 32 49.67 32 32zM224 384V480C224 497.7 209.7 512 192 512C174.3 512 160 497.7 160 480V384H224z"]},hd={prefix:"fas",iconName:"triangle-exclamation",icon:[512,512,[9888,"exclamation-triangle","warning"],"f071","M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"]},pd=hd,gd={prefix:"fas",iconName:"up-right-and-down-left-from-center",icon:[512,512,["expand-alt"],"f424","M208 281.4c-12.5-12.5-32.76-12.5-45.26-.002l-78.06 78.07l-30.06-30.06c-6.125-6.125-14.31-9.367-22.63-9.367c-4.125 0-8.279 .7891-12.25 2.43c-11.97 4.953-19.75 16.62-19.75 29.56v135.1C.0013 501.3 10.75 512 24 512h136c12.94 0 24.63-7.797 29.56-19.75c4.969-11.97 2.219-25.72-6.938-34.87l-30.06-30.06l78.06-78.07c12.5-12.49 12.5-32.75 .002-45.25L208 281.4zM487.1 0h-136c-12.94 0-24.63 7.797-29.56 19.75c-4.969 11.97-2.219 25.72 6.938 34.87l30.06 30.06l-78.06 78.07c-12.5 12.5-12.5 32.76 0 45.26l22.62 22.62c12.5 12.5 32.76 12.5 45.26 0l78.06-78.07l30.06 30.06c9.156 9.141 22.87 11.84 34.87 6.937C504.2 184.6 512 172.9 512 159.1V23.1C512 10.74 501.3 0 487.1 0z"]},md=gd,vd={prefix:"fas",iconName:"up-right-from-square",icon:[512,512,["external-link-alt"],"f35d","M384 320c-17.67 0-32 14.33-32 32v96H64V160h96c17.67 0 32-14.32 32-32s-14.33-32-32-32L64 96c-35.35 0-64 28.65-64 64V448c0 35.34 28.65 64 64 64h288c35.35 0 64-28.66 64-64v-96C416 334.3 401.7 320 384 320zM488 0H352c-12.94 0-24.62 7.797-29.56 19.75c-4.969 11.97-2.219 25.72 6.938 34.88L370.8 96L169.4 297.4c-12.5 12.5-12.5 32.75 0 45.25C175.6 348.9 183.8 352 192 352s16.38-3.125 22.62-9.375L416 141.3l41.38 41.38c9.156 9.141 22.88 11.84 34.88 6.938C504.2 184.6 512 172.9 512 160V24C512 10.74 501.3 0 488 0z"]},bd=vd,yd={prefix:"fas",iconName:"user-group",icon:[640,512,[128101,"user-friends"],"f500","M224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3c-95.73 0-173.3 77.6-173.3 173.3C0 496.5 15.52 512 34.66 512H413.3C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM479.1 320h-73.85C451.2 357.7 480 414.1 480 477.3C480 490.1 476.2 501.9 470 512h138C625.7 512 640 497.6 640 479.1C640 391.6 568.4 320 479.1 320zM432 256C493.9 256 544 205.9 544 144S493.9 32 432 32c-25.11 0-48.04 8.555-66.72 22.51C376.8 76.63 384 101.4 384 128c0 35.52-11.93 68.14-31.59 94.71C372.7 243.2 400.8 256 432 256z"]},wd=yd,kd={prefix:"fas",iconName:"user-slash",icon:[640,512,[],"f506","M95.1 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7c5.625 0 10.73-1.65 15.42-4.029L264.9 304.3C171.3 306.7 95.1 383.1 95.1 477.3zM630.8 469.1l-277.1-217.9c54.69-14.56 95.18-63.95 95.18-123.2C447.1 57.31 390.7 0 319.1 0C250.2 0 193.7 55.93 192.3 125.4l-153.4-120.3C34.41 1.672 29.19 0 24.03 0C16.91 0 9.845 3.156 5.127 9.187c-8.187 10.44-6.375 25.53 4.062 33.7L601.2 506.9c10.5 8.203 25.56 6.328 33.69-4.078C643.1 492.4 641.2 477.3 630.8 469.1z"]},xd={prefix:"fas",iconName:"user-tag",icon:[640,512,[],"f507","M351.8 367.3v-44.1C328.5 310.7 302.4 304 274.7 304H173.3c-95.73 0-173.3 77.65-173.3 173.4C.0005 496.5 15.52 512 34.66 512h378.7c11.86 0 21.82-6.337 28.07-15.43l-61.65-61.57C361.7 416.9 351.8 392.9 351.8 367.3zM224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM630.6 364.8L540.3 274.8C528.3 262.8 512 256 495 256h-79.23c-17.75 0-31.99 14.25-31.99 32l.0147 79.2c0 17 6.647 33.15 18.65 45.15l90.31 90.27c12.5 12.5 32.74 12.5 45.24 0l92.49-92.5C643.1 397.6 643.1 377.3 630.6 364.8zM447.8 343.9c-13.25 0-24-10.62-24-24c0-13.25 10.75-24 24-24c13.38 0 24 10.75 24 24S461.1 343.9 447.8 343.9z"]},Cd={prefix:"fas",iconName:"users",icon:[640,512,[],"f0c0","M319.9 320c57.41 0 103.1-46.56 103.1-104c0-57.44-46.54-104-103.1-104c-57.41 0-103.1 46.56-103.1 104C215.9 273.4 262.5 320 319.9 320zM369.9 352H270.1C191.6 352 128 411.7 128 485.3C128 500.1 140.7 512 156.4 512h327.2C499.3 512 512 500.1 512 485.3C512 411.7 448.4 352 369.9 352zM512 160c44.18 0 80-35.82 80-80S556.2 0 512 0c-44.18 0-80 35.82-80 80S467.8 160 512 160zM183.9 216c0-5.449 .9824-10.63 1.609-15.91C174.6 194.1 162.6 192 149.9 192H88.08C39.44 192 0 233.8 0 285.3C0 295.6 7.887 304 17.62 304h199.5C196.7 280.2 183.9 249.7 183.9 216zM128 160c44.18 0 80-35.82 80-80S172.2 0 128 0C83.82 0 48 35.82 48 80S83.82 160 128 160zM551.9 192h-61.84c-12.8 0-24.88 3.037-35.86 8.24C454.8 205.5 455.8 210.6 455.8 216c0 33.71-12.78 64.21-33.16 88h199.7C632.1 304 640 295.6 640 285.3C640 233.8 600.6 192 551.9 192z"]},Md={prefix:"fas",iconName:"wallet",icon:[512,512,[],"f555","M448 32C465.7 32 480 46.33 480 64C480 81.67 465.7 96 448 96H80C71.16 96 64 103.2 64 112C64 120.8 71.16 128 80 128H448C483.3 128 512 156.7 512 192V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H448zM416 336C433.7 336 448 321.7 448 304C448 286.3 433.7 272 416 272C398.3 272 384 286.3 384 304C384 321.7 398.3 336 416 336z"]},Ed={prefix:"fas",iconName:"xmark",icon:[320,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"]},Nd=Ed,Pd=__webpack_require__(72426),jd=__webpack_require__.n(Pd);const zd=M.default.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
`,Td=M.default.div`
  display: flex;
  flex-flow: row wrap;
  padding-top: 1rem;
`,Ld=(0,M.default)(co.div)`
  display: flex;
  flex-flow: column wrap;
  z-index: 0;
  flex-basis: 100%;
  flex: 1;
  flex-basis: 100%;
  margin-bottom: 1rem;

  @media (min-width: 800px) {
    flex-basis: 33%;
    min-width: 200px;
    max-width: none;
    margin-bottom: 0;
  }

  /* responsive screen sizing */
  h2 {
    font-size: 1.2rem;
  }

  @media (min-width: 950px) {
    max-width: 300px;
    h2 {
      font-size: 1.35rem;
    }
  }

  .content {
    background: ${Jo};
    display: flex;
    border-radius: 0.75rem;
    margin-right: 1.25rem;
    padding: 1rem 0;
    max-height: 3.4rem;
    flex-flow: row wrap;

    @media (max-width: 749px) {
      margin-right: 0;
      padding: 0.9rem 0;
    }

    h2,
    h4 {
      margin: 0;
    }

    h4 {
      flex: 1;
      display: flex;
      flex-flow: row wrap;
      align-items: center;

      .assistant-icon {
        margin-left: 0.6rem;
      }
    }

    > .chart {
      position: relative;
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
      padding-left: 1rem;

      .graph {
        opacity: 0.75;
        overflow: hidden;
      }

      .tooltip {
        background: ${di};
        opacity: 0;
        position: absolute;
        top: -20px;
        left: -8px;
        z-index: 2;
        border-radius: 0.5rem;
        padding: 0 0.5rem;
        width: auto;
        max-width: 200px;
        transition: opacity 0.2s;

        p {
          text-align: center;
          color: ${Yo};
          margin: 0;
          font-size: 0.9rem;
        }
      }

      &:hover {
        .tooltip {
          opacity: 1;
        }
      }
    }

    > .labels {
      padding-left: 1.25rem;
      flex-basis: 70%;
      flex: 1;
      display: flex;
      flex-flow: column wrap;
      justify-content: center;
      overflow: hidden;

      h2 {
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        align-items: flex-start;
        margin-bottom: 0.4rem;

        span.total {
          color: ${Zo};
          font-size: 0.88rem;
          margin-left: 0.3rem;
          margin-top: 0.2rem;
        }
      }
    }
  }
`;var Sd=__webpack_require__(80184);const Od=e=>{let{children:t}=e;return(0,Sd.jsx)(zd,{className:"page-padding",children:(0,Sd.jsx)(Td,{children:t})})},Ad=M.default.div`
  box-sizing: border-box;
  padding: ${e=>e.noPadding?"0rem":e.transparent?"0rem 0rem":"1.2rem"};
  border-radius: 1rem;
  background: ${e=>e.transparent?"none":Jo};
  display: flex;
  flex-flow: column nowrap;
  align-content: flex-start;
  align-items: flex-start;
  flex: 1;
  width: 100%;
  margin-top: ${e=>e.transparent?"0rem":"1rem"};
  position: relative;

  @media (min-width: ${1051}px) {
    height: ${e=>e.height?`${e.height}px`:"inherit"};
  }

  .inner {
    padding: 1rem;
    display: flex;
    flex-flow: column nowrap;
    align-content: flex-start;
    align-items: flex-start;
    width: 100%;
    position: relative;
  }

  h2,
  h3 {
    display: flex;
    flex-flow: row wrap;
    align-items: center;

    .assistant-icon {
      margin-left: 0.6rem;
    }
  }

  h2 {
    .amount {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }

  h4 {
    margin: 0.75rem 0;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: flex-start;

    .assistant-icon {
      margin-left: 0.5rem;
    }
  }
  .head {
    padding: 0.25rem;
    width: 100%;
    h4 {
      margin: 0 0 0.5rem 0;
    }

    &.with-action {
      display: flex;
      flex-flow: row wrap;
      > h2 {
        flex-grow: 1;
      }
    }
  }

  .option {
    border-bottom: 1px solid #ddd;
    padding: 0.75rem 1rem;
    font-size: 1rem;
    text-align: left;
  }
`,Vd=M.default.div`
  box-sizing: border-box;
  border-radius: 1rem;
  background: ${e=>e.transparent?"none":Jo};
  display: flex;
  flex-flow: column nowrap;
  align-content: flex-start;
  align-items: flex-start;
  flex: 1;
  margin-top: ${e=>e.noMargin?0:"1rem"};
  position: relative;
  overflow: hidden;

  .inner {
    width: 100%;
    height: 100%;
  }

  .label {
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 0.8rem;
    font-variation-settings: 'wght' 550;
    background: #d33079;
    border-radius: 0.3rem;
    padding: 0.2rem 0.4rem;
    color: #fff;
    opacity: 0.8;
  }
  .head {
    padding: 0.75rem 1.2rem 0.5rem 1.2rem;
  }

  h2 {
    .amount {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      flex: 1;
    }
  }

  h2,
  h4 {
    margin: 0;
    padding: 0.25rem 0;
    display: flex;
    flex-flow: row wrap;
    align-content: flex-end;
    align-items: flex-end;
    justify-content: flex-start;

    .fiat {
      font-size: 1rem;
      color: ${Zo};
      margin-top: 0.2rem;
      font-variation-settings: 'wght' 530;
    }
  }
  h2 {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
  }
  p {
    margin: 0.25rem 0 0;
  }
  h4 {
    margin-top: 0.4rem;

    .assistant-icon {
      margin-left: 0.4rem;
    }
  }
  .small_button {
    background: #f1f1f1;
    padding: 0.25rem 0.75rem;
    border-radius: 1rem;
  }
  .graph {
    position: relative;
    flex: ${e=>e.flex?1:0};
    flex-flow: row wrap;
    justify-content: center;
    width: 100%;
    padding: 1rem 1.2rem;
  }
  .graph_line {
    margin-top: 1.5rem;
    margin-left: 1rem;
    padding: 1rem 1rem 0.5rem 1rem;
  }
  .graph_with_extra {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    height: 190px;
    flex: 1;

    .extra {
      flex: 1;
      display: flex;
      flex-flow: row wrap;
      justify-content: flex-end;
      align-items: flex-end;
      align-content: flex-end;
      height: 190px;
      border: 1px solid;
    }
  }

  .change {
    margin-left: 0.6rem;
    font-size: 0.9rem;
    color: white;
    border-radius: 0.75rem;
    padding: 0.15rem 0.5rem;
    font-variation-settings: 'wght' 550;
    &.pos {
      background: #3eb955;
    }
    &.neg {
      background: #d2545d;
    }
  }
  position: absolute;
  top: ${e=>e.topOffset?e.topOffset:"50%"};
  left: 0;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  z-index: 2;

  > div {
    background: ${ai};
    opacity: 0.75;
    padding: 0.75rem 1.25rem;
    border-radius: 0.75rem;

    h3 {
      padding: 0;
      margin: 0;
      display: flex;
      flex-flow: row wrap;
      align-items: center;
    }
  }
`,c5=e=>{var t,a,l;const r=null!==(t=e.status)&&void 0!==t?t:"sync_or_setup",s=null!==(a=e.statusFor)&&void 0!==a&&a,{isSyncing:n,services:o}=DK(),{inSetup:i}=_K();if("sync_or_setup"===r&&(n||!i()))return(0,Sd.jsx)(Sd.Fragment,{});if("active_service"===r&&o.includes(s))return(0,Sd.jsx)(Sd.Fragment,{});const{title:u}=e,c=null!==(l=e.topOffset)&&void 0!==l?l:"40%";return(0,Sd.jsx)(u5,{topOffset:c,children:(0,Sd.jsx)("div",{children:(0,Sd.jsxs)("h3",{children:[(0,Sd.jsx)(o5,{icon:pd,transform:"grow-1"}),"\xa0",u]})})})},d5=e=>{const{payouts:t}=e,{services:a}=DK(),l=C.useRef(),r=I2(l.current),{width:s,height:n,minHeight:o}=R2(r,352),i=D2([...t],10);return(0,Sd.jsxs)("div",{className:"inner",ref:l,style:{minHeight:o},children:[a.includes("subscan")?(0,Sd.jsx)(c5,{status:"sync_or_setup",title:"Not Yet Staking"}):(0,Sd.jsx)(c5,{status:"active_service",statusFor:"subscan",title:"Subscan Disabled"}),(0,Sd.jsxs)("div",{className:"graph",style:{height:`${n}px`,width:`${s}px`,position:"absolute"},children:[(0,Sd.jsx)(Z2,{payouts:i,height:"200px"}),(0,Sd.jsx)("div",{style:{marginTop:"1rem"},children:(0,Sd.jsx)(X2,{payouts:i,height:"80px"})})]})]})};class f5 extends C.Component{shouldComponentUpdate(e,t){const a=e.account!==this.props.account,l=e.payouts!==this.props.payouts;return a||l}render(){return(0,Sd.jsx)(d5,{...this.props})}}const h5=f5,p5=()=>{const{network:e,fetchDotPrice:t}=rK(),{services:a}=DK();let l=localStorage.getItem(`${e.name}_prices`);l=null===l?{lastPrice:0,change:0}:JSON.parse(l);const[r,s]=(0,C.useState)(l),n=(0,C.useRef)(r),o=t=>{localStorage.setItem(`${e.name}_prices`,JSON.stringify(t)),n.current=r,s({...n.current,...t})},i=async()=>{const e=await t();o(e),null===u&&c()};let u=null;const c=async()=>{u=setInterval((async()=>{const e=await t();o(e)}),3e4)};return(0,C.useEffect)((()=>(i(),()=>{null!==u&&clearInterval(u)})),[]),(0,C.useEffect)((()=>{null!==u&&clearInterval(u),i()}),[e]),(0,C.useEffect)((()=>{a.includes("binance_spot")?null===u&&i():null!==u&&clearInterval(u)}),[a]),r};n1.register(p1,G1,V1);const g5=()=>{const{mode:e}=U2(),{network:t}=rK(),{units:a}=t,{activeAccount:l}=kK(),{getAccountBalance:r,getBondOptions:s}=TK(),n=r(l),{services:o}=DK(),i=p5(),{freeToStake:u,freeToUnbond:c}=s(l)||{};let{free:d}=n;const{miscFrozen:f}=n,h=iK(d.toNumber(),a),p=(h*i.lastPrice).toFixed(2);d=iK(d.toNumber(),a);let g=c,m=u,v=!1;0===g&&0===m&&(g=-1,m=-1,v=!0);const b={responsive:!0,maintainAspectRatio:!1,spacing:v?0:5,plugins:{legend:{display:!0,padding:{right:10},position:"left",align:"center",labels:{padding:20,color:Wo.text.primary[e],font:{size:15,weight:"500"}}},tooltip:{displayColors:!1,backgroundColor:Wo.graphs.tooltip[e],bodyColor:Wo.text.invert[e],callbacks:{label:e=>`${e.label}: ${-1===e.parsed?0:e.parsed} ${t.unit}`}}},cutout:"75%"},y={labels:["Available","Staking"],datasets:[{label:t.unit,data:[m,g],backgroundColor:[Wo.graphs.colors[2][e],v?Wo.graphs.inactive[e]:Wo.graphs.colors[0][e]],borderWidth:0}]},w=C.useRef(),k=I2(w.current),{width:x,height:M,minHeight:E}=R2(k,252);return(0,Sd.jsxs)(Sd.Fragment,{children:[(0,Sd.jsxs)("div",{className:"head",style:{paddingTop:"0.5rem"},children:[(0,Sd.jsx)("h4",{children:"Balance"}),(0,Sd.jsxs)("h2",{children:[(0,Sd.jsx)("span",{className:"amount",children:h}),"\xa0",t.unit,o.includes("binance_spot")&&(0,Sd.jsxs)(Sd.Fragment,{children:["\xa0",(0,Sd.jsxs)("span",{className:"fiat",children:["$",cK(p)]})]})]})]}),(0,Sd.jsx)("div",{style:{paddingTop:"20px"}}),(0,Sd.jsx)("div",{className:"inner",ref:w,style:{minHeight:E},children:(0,Sd.jsx)("div",{className:"graph",style:{height:`${M}px`,width:`${x}px`,position:"absolute"},children:(0,Sd.jsx)(A2,{options:b,data:y})})}),(0,Sd.jsx)("div",{style:{paddingTop:"25px"}})]})},m5=M.default.div`
  flex: 1;
  display: flex;
  flex-flow: column wrap;
  width: 100%;
`,v5=(0,M.default)(co.div)`
  list-style: none;
  flex: 1;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 1rem;
  padding: 1rem;
  border-bottom: 1px solid ${fi};

  h3 {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    margin: 0 0 0.8rem;
    padding: 0.2rem 0;

    &.neutral {
      color: #d33079;
    }
    &.danger {
      color: #d2545d;
    }
    &.warning {
      color: #b5a200;
    }
  }

  p {
    margin: 0;
    color: ${Zo};
    font-size: 0.9rem;
    line-height: 1.2rem;
    font-variation-settings: 'wght' 490;
  }
`;var b5=function(){return b5=Object.assign||function(e){for(var t,a=1,l=arguments.length;a<l;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},b5.apply(this,arguments)};var y5=function(e){var t=e.animate,a=e.animateBegin,l=e.backgroundColor,r=e.backgroundOpacity,s=e.baseUrl,n=e.children,o=e.foregroundColor,i=e.foregroundOpacity,u=e.gradientRatio,c=e.gradientDirection,d=e.uniqueKey,f=e.interval,h=e.rtl,p=e.speed,g=e.style,m=e.title,v=e.beforeMask,b=function(e,t){var a={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(a[l]=e[l]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(l=Object.getOwnPropertySymbols(e);r<l.length;r++)t.indexOf(l[r])<0&&Object.prototype.propertyIsEnumerable.call(e,l[r])&&(a[l[r]]=e[l[r]])}return a}(e,["animate","animateBegin","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","gradientDirection","uniqueKey","interval","rtl","speed","style","title","beforeMask"]),y=d||Math.random().toString(36).substring(6),w=y+"-diff",k=y+"-animated-diff",x=y+"-aria",M=h?{transform:"scaleX(-1)"}:null,E="0; "+f+"; 1",N=p+"s",P="top-bottom"===c?"rotate(90)":void 0;return(0,C.createElement)("svg",b5({"aria-labelledby":x,role:"img",style:b5(b5({},g),M)},b),m?(0,C.createElement)("title",{id:x},m):null,v&&(0,C.isValidElement)(v)?v:null,(0,C.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+s+"#"+w+")",style:{fill:"url("+s+"#"+k+")"}}),(0,C.createElement)("defs",null,(0,C.createElement)("clipPath",{id:w},n),(0,C.createElement)("linearGradient",{id:k,gradientTransform:P},(0,C.createElement)("stop",{offset:"0%",stopColor:l,stopOpacity:r},t&&(0,C.createElement)("animate",{attributeName:"offset",values:-u+"; "+-u+"; 1",keyTimes:E,dur:N,repeatCount:"indefinite",begin:a})),(0,C.createElement)("stop",{offset:"50%",stopColor:o,stopOpacity:i},t&&(0,C.createElement)("animate",{attributeName:"offset",values:-u/2+"; "+-u/2+"; "+(1+u/2),keyTimes:E,dur:N,repeatCount:"indefinite",begin:a})),(0,C.createElement)("stop",{offset:"100%",stopColor:l,stopOpacity:r},t&&(0,C.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+u),keyTimes:E,dur:N,repeatCount:"indefinite",begin:a})))))};y5.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,gradientDirection:"left-right",id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading...",beforeMask:null};var w5=function(e){return e.children?(0,C.createElement)(y5,b5({},e)):(0,C.createElement)(k5,b5({},e))},k5=function(e){return(0,C.createElement)(w5,b5({viewBox:"0 0 476 124"},e),(0,C.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),(0,C.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),(0,C.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),(0,C.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),(0,C.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),(0,C.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};const x5=w5,C5=()=>{const{mode:e}=U2();return(0,Sd.jsxs)(Sd.Fragment,{children:[(0,Sd.jsx)(x5,{height:90,width:"100%",backgroundColor:Wo.loader.background[e],foregroundColor:Wo.loader.foreground[e],opacity:.2,style:{marginTop:"0.75rem",marginBottom:"0.75rem"},children:(0,Sd.jsx)("rect",{x:"0",y:"0",rx:"0.5rem",ry:"0.5rem",width:"100%",height:"100%"})}),(0,Sd.jsx)(x5,{height:90,width:"100%",backgroundColor:Wo.loader.background[e],foregroundColor:Wo.loader.foreground[e],opacity:.2,children:(0,Sd.jsx)("rect",{x:"0",y:"0",rx:"0.5rem",ry:"0.5rem",width:"100%",height:"100%"})})]})},M5=M.default.button`
  background: ${ci};
  color: ${Zo};
  fill: ${Zo};
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 0.05rem;
  transition: all 0.15s;

  &:hover {
    fill: ${Uo};
  }
`,E5=C.createContext({toggle:()=>{},setPage:e=>{},setInnerDefinition:e=>{},getDefinition:(e,t)=>{},openAssistant:()=>{},closeAssistant:e=>{},setActiveSection:e=>{},goToDefinition:(e,t)=>{},setAssistantHeight:e=>{},activeSection:0,open:0,page:"overview",innerDefinition:{},height:0,transition:1}),N5=()=>C.useContext(E5);class P5 extends C.Component{constructor(e){super(e),this.setPage=e=>{this.setState({page:e})},this.setInnerDefinition=e=>{this.setState({innerDefinition:e})},this.toggle=()=>{const{open:e}=this.state,t=1===e?0:1;this.setState({open:t,transition:0})},this.openAssistant=()=>{this.setState({open:1,transition:0})},this.closeAssistant=e=>{this.setState({open:0,transition:0}),setTimeout((()=>{this.setState({...this.state,activeSection:0})}),100)},this.setActiveSection=e=>{this.setState({activeSection:e,transition:1})},this.goToDefinition=(e,t)=>{this.setPage(e),this.setInnerDefinition(P5.getDefinition(e,t)),this.setActiveSection(1),setTimeout((()=>this.openAssistant()),60)},this.setAssistantHeight=e=>{this.setState({...this.state,height:e})},this.state={open:0,page:"overview",innerDefinition:[],activeSection:0,height:0,transition:0}}render(){return(0,Sd.jsx)(E5.Provider,{value:{toggle:this.toggle,setPage:this.setPage,setInnerDefinition:this.setInnerDefinition,getDefinition:P5.getDefinition,openAssistant:this.openAssistant,closeAssistant:this.closeAssistant,setActiveSection:this.setActiveSection,goToDefinition:this.goToDefinition,setAssistantHeight:this.setAssistantHeight,activeSection:this.state.activeSection,open:this.state.open,page:this.state.page,innerDefinition:this.state.innerDefinition,height:this.state.height,transition:this.state.transition},children:this.props.children})}}var j5;function z5(){return z5=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},z5.apply(this,arguments)}function T5(e,t){let{title:a,titleId:l,...r}=e;return C.createElement("svg",z5({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64",width:"100%",height:"100%",ref:t,"aria-labelledby":l},r),a?C.createElement("title",{id:l},a):null,j5||(j5=C.createElement("path",{d:"M32 15c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2-4.5-4.5-4.5zm0 14.5c-2.5 0-4.5 2-4.5 4.5v12c0 2.5 2 4.5 4.5 4.5s4.5-2 4.5-4.5V34c0-2.5-2-4.5-4.5-4.5z"})))}P5.getDefinition=(e,t)=>{var a;return null===(a=aae.find((t=>t.key===e)))||void 0===a?void 0:a.definitions.find((e=>e.title===t))};const L5=C.forwardRef(T5),S5=(__webpack_require__.p,e=>{var t;const{goToDefinition:a}=N5(),{page:l,title:r}=e,s=null!==(t=e.size)&&void 0!==t?t:"1.3em";return(0,Sd.jsx)(M5,{className:"assistant-icon ignore-assistant-outside-alerter",onClick:()=>{a(l,r)},style:{width:s,height:s},children:(0,Sd.jsx)(L5,{className:"ignore-assistant-outside-alerter"})})}),O5=()=>{const{isSyncing:e}=DK(),{network:t}=rK(),{units:a}=t,{staking:l}=_K(),{minNominatorBond:r,totalNominators:s,maxNominatorsCount:n}=l,o={hidden:{opacity:0},show:{opacity:1}},i=n.eq(s);let u=0;n.gt(new(_d())(0))&&s.gt(new(_d())(0))&&(u=s.div(n.div(new(_d())(100))));const c=r.div(new(_d())(10**a)),d=[];return i&&d.push({class:"danger",title:"Nominator Limit Has Been Reached.",subtitle:"The maximum allowed nominators have been reached on the network. Please wait for available slots if you wish to nominate."}),u>=90&&d.push({class:"warning",title:`${u.toFixed(2)}% of Nominator Limit Reached.`,subtitle:`The maximum amount of nominators has almost been reached. The nominator cap is currently ${cK(n.toNumber())}.`}),d.push({class:"neutral",title:`The minimum nominator bond is now ${c} ${t.unit}.`,subtitle:`The minimum bonding amount to start nominating on ${t.name} is now ${iK(r,a)} ${t.unit}.`}),d.push({class:"neutral",title:`The maximum nominator cap is now ${cK(n.toNumber())}.`,subtitle:`A total of ${cK(n.toNumber())} nominators can now join the ${t.name} network.`}),(0,Sd.jsxs)(Ad,{children:[(0,Sd.jsxs)("h2",{children:["Announcements",(0,Sd.jsx)(S5,{page:"overview",title:"Announcements"})]}),(0,Sd.jsx)(m5,{children:(0,Sd.jsx)(co.div,{variants:{hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:.25}}},initial:"hidden",animate:"show",style:{width:"100%"},children:e?(0,Sd.jsx)(C5,{}):d.map(((e,t)=>(0,Sd.jsxs)(v5,{variants:o,children:[(0,Sd.jsxs)("h3",{className:e.class,children:[(0,Sd.jsx)(o5,{icon:Ac,style:{marginRight:"0.6rem"}}),e.title]}),(0,Sd.jsx)("p",{children:e.subtitle})]},`announcement_${t}`)))})})]})},A5=C.createContext({fetchEraPoints:(e,t)=>{},payouts:[]}),V5=()=>C.useContext(A5),H5=M.default.div`
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 0.9rem;
  font-variation-settings: 'wght' 570;
  background: ${e=>e.background};
  border-radius: 0.3rem;
  padding: 0.25rem 0.4rem;
  color: ${e=>e.color};
  opacity: 0.8;
`,_5=()=>{const{mode:e}=U2(),{services:t}=DK();return(0,Sd.jsxs)(H5,{color:t.includes("subscan")?Wo.text.invert[e]:Wo.text.secondary[e],background:t.includes("subscan")?Wo.primary[e]:Wo.background.label[e],children:[(0,Sd.jsx)(o5,{icon:Kc,transform:"shrink-2",style:{marginRight:"0.3rem"}}),"Subscan"]})},B5=e=>{const{title:t}=e,[a,l]=(0,C.useState)(!1),r=(0,C.useRef)();return(0,C.useEffect)((()=>{const e=r.current,t=new IntersectionObserver((e=>{let[t]=e;l(t.intersectionRatio<1)}),{threshold:[1],rootMargin:"-1px 0px 0px 0px"});return t.observe(e),()=>{t.unobserve(e)}}),[a]),(0,Sd.jsxs)(Sd.Fragment,{children:[(0,Sd.jsx)(Mi,{}),(0,Sd.jsx)(Ci,{ref:r,sticky:a,children:(0,Sd.jsx)("h1",{className:"page-padding",children:t})})]})};var I5={prefix:"far",iconName:"arrow-alt-circle-up",icon:[512,512,[],"f35b","M256 504c137 0 248-111 248-248S393 8 256 8 8 119 8 256s111 248 248 248zm0-448c110.5 0 200 89.5 200 200s-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56zm20 328h-40c-6.6 0-12-5.4-12-12V256h-67c-10.7 0-16-12.9-8.5-20.5l99-99c4.7-4.7 12.3-4.7 17 0l99 99c7.6 7.6 2.2 20.5-8.5 20.5h-67v116c0 6.6-5.4 12-12 12z"]},R5={prefix:"far",iconName:"check-circle",icon:[512,512,[],"f058","M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"]},W5={prefix:"far",iconName:"circle",icon:[512,512,[],"f111","M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z"]},D5={prefix:"far",iconName:"copy",icon:[448,512,[],"f0c5","M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"]},F5={prefix:"far",iconName:"flag",icon:[512,512,[],"f024","M336.174 80c-49.132 0-93.305-32-161.913-32-31.301 0-58.303 6.482-80.721 15.168a48.04 48.04 0 0 0 2.142-20.727C93.067 19.575 74.167 1.594 51.201.104 23.242-1.71 0 20.431 0 48c0 17.764 9.657 33.262 24 41.562V496c0 8.837 7.163 16 16 16h16c8.837 0 16-7.163 16-16v-83.443C109.869 395.28 143.259 384 199.826 384c49.132 0 93.305 32 161.913 32 58.479 0 101.972-22.617 128.548-39.981C503.846 367.161 512 352.051 512 335.855V95.937c0-34.459-35.264-57.768-66.904-44.117C409.193 67.309 371.641 80 336.174 80zM464 336c-21.783 15.412-60.824 32-102.261 32-59.945 0-102.002-32-161.913-32-43.361 0-96.379 9.403-127.826 24V128c21.784-15.412 60.824-32 102.261-32 59.945 0 102.002 32 161.913 32 43.271 0 96.32-17.366 127.826-32v240z"]},U5=__webpack_require__(78029);const q5=M.default.div`
  padding: 0 1.25rem 0rem 1.25rem;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-flow: column wrap;

  .account {
    box-sizing: border-box;
    width: 100%;
    height: 27px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    padding: 0;
    margin-top: 1.25rem;

    button {
      color: ${Xo};
    }

    .icon {
      position: relative;
      top: 0.1rem;
    }
    .title {
      box-sizing: border-box;
      margin: 0;
      padding: 0 0.5rem;
      flex-grow: 1;
      overflow: hidden;
    }
    h4 {
      margin: 0;
      > .sep {
        border-right: 1px solid ${fi};
        margin: 0 0.7rem;
        width: 1px;
        height: 1.25rem;
      }
      > .addr {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        flex: 1;
        opacity: 0.75;
      }
    }

    > *:last-child {
      flex-grow: 1;
      display: flex;
      flex-flow: row-reverse wrap;

      > .copy {
        color: ${Zo};
        opacity: 0.5;
        cursor: pointer;
        transition: opacity 0.1s;
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
`,X5=M.default.div`
  border-bottom: 1px solid ${fi};
  margin-top: 0.8rem;
  width: 100%;
  height: 1px;
`;var Z5=__webpack_require__(67550);const Y5="function"===typeof iw.BigInt&&"function"===typeof iw.BigInt.asIntN?iw.BigInt:()=>Number.NaN,K5=("function"===typeof Y5&&Y5.asIntN,"object"===typeof process);function G5(e){return"undefined"===typeof e}const J5=[{info:"on",text:"Allow camera access",value:"on"},{info:"off",text:"Do not allow camera access",value:"off"}],Q5=[{info:"session",text:"Once per session",value:"session"},{info:"tx",text:"On each transaction",value:"tx"}],$5=[{info:"local",text:"Local Node (Own, 127.0.0.1:9944)",value:"ws://127.0.0.1:9944/"}],e8=$5[0],t8=[{info:"none",text:"Do not attach Ledger devices",value:"none"},{info:"webusb",text:"Attach Ledger via WebUSB (Chrome, recommended)",value:"webusb"},{info:"hid",text:"Attach Ledger via WebHID (Chrome, experimental)",value:"hid"}],a8="undefined"!==typeof window&&window.location.host.includes("polkadot"),l8=!a8&&"undefined"!==typeof window&&window.location.host.includes("ui-light")?"light":"full",r8=[{info:"full",text:"Fully featured",value:"full"},{info:"light",text:"Basic features only",value:"light"}],s8=a8?"polkadot":"substrate",n8=[{info:"polkadot",text:"Polkadot",value:"polkadot"},{info:"substrate",text:"Substrate",value:"substrate"}],o8=a8?"polkadot":"substrate",i8=[{info:"default",text:"Default for the connected node",value:"default"},{info:"polkadot",text:"Polkadot",value:"polkadot"},{info:"substrate",text:"Substrate",value:"substrate"},{info:"beachball",text:"Beachball",value:"beachball"}],u8=qk.map((e=>{let{displayName:t,network:a,prefix:l}=e;return{info:a,text:t,value:l}})),c8=[{info:"default",text:"Default for the connected node",value:-1},...u8],d8=[{info:"sr25519",text:"Schnorrkel (sr25519, recommended)",value:"sr25519"},{info:"ed25519",text:"Edwards (ed25519, alternative)",value:"ed25519"},{info:"ecdsa",text:"ECDSA (Non BTC/ETH compatible)",value:"ecdsa"}],f8=[{info:"ethereum",text:"ECDSA (ETH compatible)",value:"ethereum"}],h8=[...d8,{info:"ed25519-ledger",text:"Ledger (ed25519, BIP32 derivation)",value:"ed25519-ledger"}];function p8(e,t,a){const l=t||a;return e.some((e=>{let{value:t}=e;return t===l}))?l:a}var g8=new WeakMap,m8=new WeakMap,v8=new WeakMap,b8=new WeakMap,y8=new WeakMap,w8=new WeakMap,k8=new WeakMap,x8=new WeakMap,C8=new WeakMap,M8=new WeakMap,E8=new WeakMap,N8=new WeakMap;const P8=new class{constructor(){Jd(this,g8,{writable:!0,value:void 0}),Jd(this,m8,{writable:!0,value:void 0}),Jd(this,v8,{writable:!0,value:void 0}),Jd(this,b8,{writable:!0,value:void 0}),Jd(this,y8,{writable:!0,value:void 0}),Jd(this,w8,{writable:!0,value:void 0}),Jd(this,k8,{writable:!0,value:void 0}),Jd(this,x8,{writable:!0,value:void 0}),Jd(this,C8,{writable:!0,value:void 0}),Jd(this,M8,{writable:!0,value:void 0}),Jd(this,E8,{writable:!0,value:void 0}),Jd(this,N8,{writable:!0,value:void 0});const e=Z5.get("settings")||{};ef(this,g8,new oq),ef(this,v8,"string"===typeof e.apiUrl&&e.apiUrl||K5&&{NODE_ENV:"production",PUBLIC_URL:"/polkadot-staking-dashboard",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&{NODE_ENV:"production",PUBLIC_URL:"/polkadot-staking-dashboard",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.WS_URL||e8.value),ef(this,m8,{param:$d(this,v8),type:"json-rpc"}),ef(this,b8,p8(J5,e.camera,"off")),ef(this,k8,p8(t8,e.ledgerConn,"none")),ef(this,y8,e.i18nLang||"default"),ef(this,w8,e.icon||"default"),ef(this,x8,e.locking||"session"),ef(this,C8,G5(e.prefix)?-1:e.prefix),ef(this,M8,e.uiMode||l8),ef(this,E8,e.uiTheme||s8),ef(this,N8,e.notification||"popup")}get camera(){return $d(this,b8)}get apiType(){return $d(this,m8)}get apiUrl(){return $d(this,v8)}get i18nLang(){return $d(this,y8)}get icon(){return $d(this,w8)}get notification(){return $d(this,N8)}get ledgerConn(){return $d(this,k8)}get locking(){return $d(this,x8)}get prefix(){return $d(this,C8)}get uiMode(){return $d(this,M8)}get uiTheme(){return $d(this,E8)}get availableCamera(){return J5}get availableCryptos(){return d8}get availableCryptosEth(){return f8}get availableCryptosLedger(){return h8}get availableIcons(){return i8}get availableLedgerConn(){return t8}get availableLocking(){return Q5}get availableNodes(){return $5}get availablePrefixes(){return c8}get availableUIModes(){return r8}get availableUIThemes(){return n8}get(){return{apiType:$d(this,m8),apiUrl:$d(this,v8),camera:$d(this,b8),i18nLang:$d(this,y8),icon:$d(this,w8),ledgerConn:$d(this,k8),locking:$d(this,x8),notification:$d(this,N8),prefix:$d(this,C8),uiMode:$d(this,M8),uiTheme:$d(this,E8)}}set(e){ef(this,m8,e.apiType||$d(this,m8)),ef(this,v8,e.apiUrl||$d(this,v8)),ef(this,b8,e.camera||$d(this,b8)),ef(this,k8,e.ledgerConn||$d(this,k8)),ef(this,y8,e.i18nLang||$d(this,y8)),ef(this,w8,e.icon||$d(this,w8)),ef(this,x8,e.locking||$d(this,x8)),ef(this,N8,e.notification||$d(this,N8)),ef(this,C8,G5(e.prefix)?$d(this,C8):e.prefix),ef(this,M8,e.uiMode||$d(this,M8)),ef(this,E8,e.uiTheme||$d(this,E8));const t=this.get();Z5.set("settings",t),$d(this,g8).emit("change",t)}on(e,t){$d(this,g8).on(e,t)}};function j8(e){const t=e.length%2,a=e.length-t,l=new DataView(e.buffer,e.byteOffset);let r="";for(let s=0;s<a;s+=2)r+=Ay[l.getUint16(s)];return t&&(r+=Oy[l.getUint8(a)]),r}const z8=["#ffe119","#4363d8","#f58231","#fabebe","#e6beff","#800000","#000075","#a9a9a9","#ffffff","#000000"];function T8(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function L8(e,t,a){const l=T8("circle");return l.setAttributeNS("","cx",`${t}`),l.setAttributeNS("","cy",`${a}`),l.setAttributeNS("","r",`${e}`),l}function S8(e,t,a,l){const r=a/2,s=360*e(),n=(5-l)/5*(a/2)+a/8*e(),o=a/4*(e()+(l+1)/5),i=L8(n,o*Math.sin(s)+r,o*Math.cos(s)+r);return i.setAttributeNS("","fill",t),i}function O8(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"svg",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;const r=T8(t);return r.setAttributeNS("","x",`${a}`),r.setAttributeNS("","y",`${l}`),r.setAttributeNS("","width",`${e}`),r.setAttributeNS("","height",`${e}`),r}var A8=__webpack_require__(3861);function V8(e){const t=30*e()-15,a=z8.map((e=>A8(e).rotate(t)));return function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;const l=Math.floor(a.length*e());return a.splice(l,1)[0].alpha(t).string()}}function H8(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"white",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const r=document.createElement("div"),s=Object.assign({background:t,borderRadius:e/2+"px",display:"inline-block",height:`${e}px`,margin:"0px",overflow:"hidden",padding:"0px",width:`${e}px`},l);return r.className=a,r.style.background=t,Object.keys(s).forEach((e=>{r.style[e]=s[e]})),r}function _8(e){return e instanceof Uint8Array}const B8=uw("TextEncoder",class{encode(e){const t=new Uint8Array(e.length);for(let a=0;a<e.length;a++)t[a]=e.charCodeAt(a);return t}}),I8=new B8;function R8(e){return e?I8.encode(e.toString()):new Uint8Array}function W8(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Uint8Array(32);const t=_8(e)?e:R8(e);let a=t[Math.floor(t.length/2)]%t.length-1;const l=()=>(a+=1,a===t.length&&(a=0),t[a]);return()=>(256*l()+l())/65536}function D8(e){let{address:t,className:a="",size:l,style:r}=e;const s=(0,C.useCallback)((e=>{e&&e.appendChild(function(e,t){let{size:a=256}=t,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3?arguments[3]:void 0;const s=W8(e),n=V8(s),o=H8(a,"white",l,r),i=H8(a,n()),u=O8(a);o.appendChild(i),i.appendChild(u);for(let c=0;c<5;c++){const e=S8(s,n(),a,c);u.appendChild(e)}return o}(t,{isAlternative:!1,size:l}))}),[t,l]);return(0,Sd.jsx)("div",{className:a,ref:s,style:r})}const F8=C.memo(D8);function U8(e){let{className:t="",size:a,style:l}=e;return(0,Sd.jsx)("svg",{className:t,height:a,style:l,viewBox:"0 0 64 64",width:a})}const q8=C.memo(U8);var X8=__webpack_require__(77883);const Z8=C.memo((0,M.default)((function(e){let{address:t,className:a="",style:l}=e;const r=(0,C.useMemo)((()=>X8(t)),[t]);return(0,Sd.jsx)("img",{className:a,src:r,style:l})})).withConfig({displayName:"Ethereum",componentId:"sc-osop9v-0"})((e=>{let{size:t}=e;return`\n  display: block;\n  height: ${t}px;\n  width: ${t}px;\n`})));function Y8(e,t,a){return parseInt(e.substr(t,a),16)}function K8(e){return(e|=0)<0?"00":e<16?"0"+e.toString(16):e<256?e.toString(16):"ff"}function G8(e,t,a){return K8(255*((a=a<0?a+6:a>6?a-6:a)<1?e+(t-e)*a:a<3?t:a<4?e+(t-e)*(4-a):e))}function J8(e){if(/^#[0-9a-f]{3,8}$/i.test(e)){let t;const a=e.length;if(a<6){const a=e[1],l=e[2],r=e[3],s=e[4]||"";t="#"+a+a+l+l+r+r+s+s}return(7==a||a>8)&&(t=e),t}}function Q8(e,t,a){const l=[.55,.5,.5,.46,.6,.55,.55][6*e+.5|0];return function(e,t,a){let l;if(0==t){const e=K8(255*a);l=e+e+e}else{const r=a<=.5?a*(t+1):a+t-a*t,s=2*a-r;l=G8(s,r,6*e+2)+G8(s,r,6*e)+G8(s,r,6*e-2)}return"#"+l}(e,t,a=a<.5?a*l*2:l+(a-.5)*(1-l)*2)}const $8="undefined"!==typeof window?window:"undefined"!==typeof self?self:"undefined"!==typeof global?global:{},e9="jdenticon_config",t9="config";var a9={};class l9{constructor(e,t){this.x=e,this.y=t}}class r9{constructor(e,t,a,l){this.q=e,this.t=t,this.H=a,this.Y=l}I(e,t,a,l){const r=this.q+this.H,s=this.t+this.H,n=this.Y;return 1===n?new l9(r-t-(l||0),this.t+e):2===n?new l9(r-e-(a||0),s-t-(l||0)):3===n?new l9(this.q+t,s-e-(a||0)):new l9(this.q+e,this.t+t)}}const s9=new r9(0,0,0,0);class n9{constructor(e){this.J=e,this.u=s9}g(e,t){const a=t?-2:2,l=[];for(let r=t?e.length-2:0;r<e.length&&r>=0;r+=a)l.push(this.u.I(e[r],e[r+1]));this.J.g(l)}h(e,t,a,l){const r=this.u.I(e,t,a,a);this.J.h(r,a,l)}i(e,t,a,l,r){this.g([e,t,e+a,t,e+a,t+l,e,t+l],r)}j(e,t,a,l,r,s){const n=[e+a,t,e+a,t+l,e,t+l,e,t];n.splice((r||0)%4*2,2),this.g(n,s)}K(e,t,a,l,r){this.g([e+a/2,t,e+a,t+l/2,e+a/2,t+l,e,t+l/2],r)}}function o9(e,t,a,l){let r,s,n,o,i,u;(e%=14)?1==e?(n=0|.5*a,o=0|.8*a,t.j(a-n,0,n,o,2)):2==e?(n=0|a/3,t.i(n,n,a-n,a-n)):3==e?(i=.1*a,u=a<6?1:a<8?2:0|.25*a,i=i>1?0|i:i>.5?1:i,t.i(u,u,a-i-u,a-i-u)):4==e?(s=0|.15*a,n=0|.5*a,t.h(a-n-s,a-n-s,n)):5==e?(i=.1*a,u=4*i,u>3&&(u|=0),t.i(0,0,a,a),t.g([u,u,a-i,u,u+(a-u-i)/2,a-i],!0)):6==e?t.g([0,0,a,0,a,.7*a,.4*a,.4*a,.7*a,a,0,a]):7==e?t.j(a/2,a/2,a/2,a/2,3):8==e?(t.i(0,0,a,a/2),t.i(0,a/2,a/2,a/2),t.j(a/2,a/2,a/2,a/2,1)):9==e?(i=.14*a,u=a<4?1:a<6?2:0|.35*a,i=a<8?i:0|i,t.i(0,0,a,a),t.i(u,u,a-u-i,a-u-i,!0)):10==e?(i=.12*a,u=3*i,t.i(0,0,a,a),t.h(u,u,a-i-u,!0)):11==e?t.j(a/2,a/2,a/2,a/2,3):12==e?(s=.25*a,t.i(0,0,a,a),t.K(s,s,a-s,a-s,!0)):!l&&(s=.4*a,n=1.2*a,t.h(s,s,n)):(r=.42*a,t.g([0,0,a,0,a,a-2*r,a-r,a,0,a]))}function i9(e,t,a){let l;(e%=4)?1==e?t.j(0,a/2,a,a/2,0):2==e?t.K(0,0,a,a):(l=a/6,t.h(l,l,a-2*l)):t.j(0,0,a,a,0)}function u9(e,t,a){const l=function(e,t){const a="object"==typeof e&&e||a9[t9]||$8[e9]||{},l=a.lightness||{},r=a.saturation||{},s="color"in r?r.color:r,n=r.grayscale,o=a.backColor,i=a.padding;function u(e,t){let a=l[e];return a&&a.length>1||(a=t),function(e){return(e=a[0]+e*(a[1]-a[0]))<0?0:e>1?1:e}}return{W:function(e){const t=a.hues;let l;return t&&t.length>0&&(l=t[0|.999*e*t.length]),"number"==typeof l?(l/360%1+1)%1:e},o:"number"==typeof s?s:.5,D:"number"==typeof n?n:0,p:u("color",[.4,.8]),F:u("grayscale",[.3,.9]),G:J8(o),X:"number"==typeof e?e:"number"==typeof i?i:t}}(a,.08);l.G&&e.m(l.G);let r=e.k;const s=.5+r*l.X|0;r-=2*s;const n=new n9(e),o=0|r/4,i=0|s+r/2-2*o,u=0|s+r/2-2*o;function c(a,l,r,s,c){const h=Y8(t,r,1);let p=s?Y8(t,s,1):0;e.L(d[f[a]]);for(let e=0;e<c.length;e++)n.u=new r9(i+c[e][0]*o,u+c[e][1]*o,o,p++%4),l(h,n,o,e);e.M()}const d=function(e,t){return[Q8(e=t.W(e),t.D,t.F(0)),Q8(e,t.o,t.p(.5)),Q8(e,t.D,t.F(1)),Q8(e,t.o,t.p(1)),Q8(e,t.o,t.p(0))]}(Y8(t,-7)/268435455,l),f=[];let h;function p(e){if(e.indexOf(h)>=0)for(let t=0;t<e.length;t++)if(f.indexOf(e[t])>=0)return!0}for(let g=0;g<3;g++)h=Y8(t,8+g,1)%d.length,(p([0,4])||p([2,3]))&&(h=1),f.push(h);c(0,i9,2,3,[[1,0],[2,0],[2,3],[1,3],[0,1],[3,1],[3,2],[0,2]]),c(1,i9,4,5,[[0,0],[3,0],[3,3],[0,3]]),c(2,o9,1,null,[[1,1],[2,1],[2,2],[1,2]]),e.finish()}function c9(e){return/^[0-9a-f]{11,}$/i.test(e)&&e}function d9(e){return function(e){var t,a=0,l=0,r=encodeURI(e)+"%80",s=[],n=[],o=1732584193,i=4023233417,u=~o,c=~i,d=3285377520,f=[o,i,u,c,d],h=0,p="";function g(e,t){return e<<t|e>>>32-t}for(;a<r.length;l++)s[l>>2]=s[l>>2]|("%"==r[a]?parseInt(r.substring(a+1,a+=3),16):r.charCodeAt(a++))<<8*(3-(3&l));for(s[(t=16*(1+(l+7>>6)))-1]=8*l-8;h<t;h+=16){for(a=0;a<80;a++)l=g(o,5)+d+(a<20?1518500249+(i&u^~i&c):a<40?1859775393+(i^u^c):a<60?2400959708+(i&u^i&c^u&c):3395469782+(i^u^c))+(n[a]=a<16?0|s[h+a]:g(n[a-3]^n[a-8]^n[a-14]^n[a-16],1)),d=c,c=u,u=g(i,30),i=o,o=l;f[0]=o=f[0]+o|0,f[1]=i=f[1]+i|0,f[2]=u=f[2]+u|0,f[3]=c=f[3]+c|0,f[4]=d=f[4]+d|0}for(a=0;a<40;a++)p+=(f[a>>3]>>>4*(7-(7&a))&15).toString(16);return p}(null==e?"":""+e)}function f9(e){return(10*e+.5|0)/10}class h9{constructor(){this.v=""}g(e){let t="";for(let a=0;a<e.length;a++)t+=(a?"L":"M")+f9(e[a].x)+" "+f9(e[a].y);this.v+=t+"Z"}h(e,t,a){const l=a?0:1,r=f9(t/2),s=f9(t),n="a"+r+","+r+" 0 1,"+l+" ";this.v+="M"+f9(e.x)+" "+f9(e.y+t/2)+n+s+",0"+n+-s+",0"}}class p9{constructor(e){this.A,this.B={},this.N=e,this.k=e.k}m(e){const t=/^(#......)(..)?/.exec(e),a=t[2]?Y8(t[2],0)/255:1;this.N.m(t[1],a)}L(e){this.A=this.B[e]||(this.B[e]=new h9)}M(){}g(e){this.A.g(e)}h(e,t,a){this.A.h(e,t,a)}finish(){const e=this.B;for(let t in e)e.hasOwnProperty(t)&&this.N.O(t,e[t].v)}}const g9="http://www.w3.org/2000/svg";class m9{constructor(e){this.k=e,this.C='<svg xmlns="'+g9+'" width="'+e+'" height="'+e+'" viewBox="0 0 '+e+" "+e+'">'}m(e,t){t&&(this.C+='<rect width="100%" height="100%" fill="'+e+'" opacity="'+t.toFixed(2)+'"/>')}O(e,t){this.C+='<path fill="'+e+'" d="'+t+'"/>'}toString(){return this.C+"</svg>"}}function v9(e,t,a){const l=new m9(t);return u9(new p9(l),c9(e)||d9(e),a),l.toString()}"undefined"!==typeof document&&document.querySelectorAll.bind(document);function b9(e){let{className:t="",publicKey:a,size:l,style:r}=e;return(0,Sd.jsx)("div",{className:t,dangerouslySetInnerHTML:{__html:v9(a.substr(2),l)},style:r})}const y9=C.memo(b9),w9=e=>Ak(e,512),k9=32,x9=w9(new Uint8Array(32)),C9={target:{colors:[0,28,0,0,28,0,0,28,0,0,28,0,0,28,0,0,28,0,1],freq:1},cube:{colors:[0,1,3,2,4,3,0,1,3,2,4,3,0,1,3,2,4,3,5],freq:20},quazar:{colors:[1,2,3,1,2,4,5,5,4,1,2,3,1,2,4,5,5,4,0],freq:16},flower:{colors:[0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,3],freq:32},cyclic:{colors:[0,1,2,3,4,5,0,1,2,3,4,5,0,1,2,3,4,5,6],freq:32},vmirror:{colors:[0,1,2,3,4,5,3,4,2,0,1,6,7,8,9,7,8,6,10],freq:128},hmirror:{colors:[0,1,2,3,4,5,6,7,8,9,10,8,6,7,5,3,4,2,11],freq:128}},M9={cx:k9,cy:k9,fill:"#eee",r:k9};function E9(e){const{r:t,r3o4:a,ro2:l,ro4:r,rroot3o2:s,rroot3o4:n}=function(e){const t=e?20:24;return{r:t,r3o4:3*t/4,ro2:t/2,ro4:t/4,rroot3o2:t*Math.sqrt(3)/2,rroot3o4:t*Math.sqrt(3)/4}}(e);return[[k9,k9-t],[k9,k9-l],[k9-n,k9-a],[k9-s,k9-l],[k9-n,k9-r],[k9-s,k9],[k9-s,k9+l],[k9-n,k9+r],[k9-n,k9+a],[k9,k9+t],[k9,k9+l],[k9+n,k9+a],[k9+s,k9+l],[k9+n,k9+r],[k9+s,k9],[k9+s,k9-l],[k9+n,k9-r],[k9+n,k9-a],[k9,k9]]}function N9(e){const t=Object.values(C9).map((e=>e.freq)).reduce(((e,t)=>e+t)),a=function(e){return w9(Yk(e)).map(((e,t)=>(e+256-x9[t])%256))}(e),l=Math.floor((a[30]+256*a[31])%t),r=a[28]%6*3,s=Math.floor(70*a[29]/256+26)%80+30,n=function(e){let t=0;const a=Object.values(C9).find((a=>(t+=a.freq,e<t)));if(!a)throw new Error("Unable to find schema");return a}(l),o=Array.from(a).map(((e,t)=>{const a=(e+t%28*58)%256;if(0===a)return"#444";if(255===a)return"transparent";const l=Math.floor(a%64*360/64),r=[53,15,35,75][Math.floor(a/64)];return`hsl(${l}, ${s}%, ${r}%)`}));return n.colors.map(((e,t)=>o[n.colors[t<18?(t+r)%18:18]]))}function P9(e,t){let{isAlternative:a}=t;const l=N9(e);return[M9].concat(E9(a).map(((e,t)=>{let[a,r]=e;return{cx:a,cy:r,fill:l[t],r:5}})))}function j9(e,t){let{cx:a,cy:l,fill:r,r:s}=e;return(0,Sd.jsx)("circle",{cx:a,cy:l,fill:r,r:s},t)}function z9(e){let{address:t,className:a="",isAlternative:l=!1,size:r,style:s}=e;return(0,Sd.jsx)("svg",{className:a,height:r,id:t,name:t,style:s,viewBox:"0 0 64 64",width:r,children:P9(t,{isAlternative:l}).map(j9)})}const T9=F8,L9=64,S9={beachball:F8,empty:q8,ethereum:Z8,jdenticon:y9,polkadot:C.memo(z9),substrate:y9},O9=M.default.div.withConfig({displayName:"Identicon__Wrapper",componentId:"sc-1gm2vek-0"})(["cursor:copy;display:inline-block;line-height:0;> .container{position:relative;> div,> svg{position:relative;}&.highlight:before{position:absolute;top:0;left:0;right:0;bottom:0;border-radius:50%;box-shadow:0 0 5px 2px #aaa;content:'';}}"]);class A9 extends C.PureComponent{constructor(){super(...arguments),Gd(this,"state",{address:"",publicKey:"0x"}),Gd(this,"onCopy",(()=>{const{onCopy:e}=this.props,{address:t}=this.state;t&&e&&e(t)}))}static setDefaultPrefix(e){A9.prefix=e}static getDerivedStateFromProps(e,t){let{prefix:a=A9.prefix,theme:l,value:r}=e;if("ethereum"===l){return{address:Uy(r)?gL(r):r||"",publicKey:""}}try{const e=Uy(r)||Iy(r)?Kk(r,a):r||"",l=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];const l=Math.ceil(t/8);return`${a?"0x":""}${e&&e.length?l>0&&e.length>l?`${j8(e.subarray(0,l/2))}\u2026${j8(e.subarray(e.length-l/2))}`:j8(e):""}`}(Yk(e,!1,a));return e===t.address?null:{address:e,publicKey:l}}catch(s){return{address:"",publicKey:"0x"}}}render(){const{address:e}=this.state,t=this.getWrapped(this.state,this.props);return e?(0,Sd.jsx)(U5,{onCopy:this.onCopy,text:e,children:t}):t}getWrapped(e,t){let{address:a,publicKey:l}=e,{Custom:r}=t;const{className:s="",isAlternative:n,isHighlight:o,size:i=L9,style:u,theme:c=P8.icon}=this.props,d=a?r||S9["default"===c?o8:c]||T9:q8;return(0,Sd.jsx)(O9,{className:`ui--IdentityIcon  ${s}`,style:u,children:(0,Sd.jsx)(d,{address:a,className:o?"highlight":"",isAlternative:n,publicKey:l,size:i})},a)}}function V9(e){return(0,Sd.jsx)(A9,{...e})}Gd(A9,"prefix",void 0);const H9=C.memo(V9),_9=M.default.div`
  svg > circle:first-child {
    fill: ${li};
  }
`,B9=e=>{const{value:t,size:a}=e;return(0,Sd.jsx)(_9,{children:(0,Sd.jsx)(H9,{value:t,size:a,theme:"polkadot",style:{cursor:"default"}})})},I9=B9,R9=C.createContext({addNotification:e=>{},removeNotification:e=>{},notifications:[]}),W9=()=>C.useContext(R9),D9=()=>{const{addNotification:e}=W9(),{activeAccount:t,getAccount:a}=kK(),l=a(t);let r={};return null!==l&&(r={title:"Address Copied to Clipboard",subtitle:l.address}),(0,Sd.jsxs)(q5,{children:[(0,Sd.jsxs)("div",{className:"account",children:[null!==l&&(0,Sd.jsxs)(Sd.Fragment,{children:[(0,Sd.jsx)("div",{className:"icon",children:(0,Sd.jsx)(B9,{value:l.address,size:"1.6rem"})}),(0,Sd.jsx)("div",{className:"title",children:(0,Sd.jsxs)("h4",{children:[sK(l.address),(0,Sd.jsx)("div",{className:"sep"})," ",(0,Sd.jsx)("span",{className:"addr",children:l.meta.name})]})}),(0,Sd.jsx)("div",{children:(0,Sd.jsx)(co.div,{className:"copy",whileHover:{scale:1.02},whileTap:{scale:.97},children:(0,Sd.jsx)("button",{type:"button",onClick:()=>e(r),children:(0,Sd.jsx)(U5.CopyToClipboard,{text:l.address,children:(0,Sd.jsx)(o5,{icon:D5,transform:"grow-3"})})})})})]}),null===l&&(0,Sd.jsxs)(Sd.Fragment,{children:[(0,Sd.jsx)("h4",{style:{marginLeft:0},children:"Account Not Connected"}),(0,Sd.jsx)("div",{})]})]}),(0,Sd.jsx)(X5,{})]})};var F9=__webpack_require__(46066);const U9=e=>{var t,a,l;const{label:r,value:s,unit:n,assistant:o}=e,i=void 0!==o,u=null!==(t=null===o||void 0===o?void 0:o.page)&&void 0!==t?t:"",c=null!==(a=null===o||void 0===o?void 0:o.key)&&void 0!==a?a:"",d=null!==(l=e.currency)&&void 0!==l?l:"";return(0,Sd.jsx)(q9,{children:(0,Sd.jsx)("div",{className:"content chart",children:(0,Sd.jsxs)("div",{className:"labels",children:[(0,Sd.jsxs)("h2",{children:[(0,Sd.jsx)(F9.Z,{ease:"quintInOut",precision:2,speed:250,trail:!1,value:s,useLocaleString:!0,currency:d}),n&&(0,Sd.jsxs)(Sd.Fragment,{children:["\xa0",n]})]}),(0,Sd.jsxs)("h4",{children:[r,i&&(0,Sd.jsx)(S5,{page:u,title:c})]})]})})})},q9=e=>{let{children:t}=e;return(0,Sd.jsx)(Ld,{whileHover:{scale:1.02},transition:{duration:.5,type:"spring",bounce:.4},children:t})};n1.register(p1,G1);const X9=e=>{let{value:t,value2:a}=e;const l=!t&&!t;l&&(t=1,a=0);const{mode:r}=U2(),s=l?Wo.buttons.toggle.background[r]:[Wo.text.secondary[r],Wo.transparent[r]],n=l?Wo.buttons.toggle.background[r]:Wo.transparent[r],o={borderColor:s,hoverBorderColor:s,backgroundColor:n,hoverBackgroundColor:n,responsive:!0,maintainAspectRatio:!1,spacing:0,plugins:{legend:{display:!1},tooltip:{enabled:!1}}},i={datasets:[{data:[t,a],backgroundColor:n,borderWidth:1.25}]};return(0,Sd.jsx)("div",{className:"graph",style:{width:36,height:36},children:(0,Sd.jsx)(V2,{options:o,data:i})})},Z9=e=>{var t,a;const{label:l,stat:r,graph:s,tooltip:n,assistant:o}=e,i=void 0!==o,u=null!==(t=null===o||void 0===o?void 0:o.page)&&void 0!==t?t:"",c=null!==(a=null===o||void 0===o?void 0:o.key)&&void 0!==a?a:"",d=0!==(null===r||void 0===r?void 0:r.value)||0===(null===r||void 0===r?void 0:r.total),f=!(null===r||void 0===r||!r.total);return(0,Sd.jsx)(q9,{children:(0,Sd.jsxs)("div",{className:"content chart",children:[(0,Sd.jsxs)("div",{className:"chart",children:[(0,Sd.jsx)(X9,{value:null===s||void 0===s?void 0:s.value1,value2:null===s||void 0===s?void 0:s.value2}),n&&(0,Sd.jsx)("div",{className:"tooltip",children:(0,Sd.jsx)("p",{children:n})})]}),(0,Sd.jsxs)("div",{className:"labels",children:[(0,Sd.jsx)("h2",{children:d?(0,Sd.jsxs)(Sd.Fragment,{children:[(0,Sd.jsx)(F9.Z,{ease:"quintInOut",precision:2,speed:250,trail:!1,value:null===r||void 0===r?void 0:r.value,useLocaleString:!0}),(null===r||void 0===r?void 0:r.unit)&&(0,Sd.jsxs)(Sd.Fragment,{children:["\xa0",null===r||void 0===r?void 0:r.unit]}),f&&(0,Sd.jsxs)("span",{className:"total",children:["/"," ",(0,Sd.jsx)(F9.Z,{ease:"quintInOut",precision:2,speed:250,trail:!1,value:null===r||void 0===r?void 0:r.total,useLocaleString:!0}),(null===r||void 0===r?void 0:r.unit)&&(0,Sd.jsxs)(Sd.Fragment,{children:["\xa0",null===r||void 0===r?void 0:r.unit]})]})]}):(0,Sd.jsx)(Sd.Fragment,{children:"0"})}),(0,Sd.jsxs)("h4",{children:[l,i&&(0,Sd.jsx)(S5,{page:u,title:c})]})]})]})})},Y9=()=>{const{staking:e}=_K(),{totalNominators:t,maxNominatorsCount:a}=e;let l=0;a.gt(new(_d())(0))&&(l=t.div(a.div(new(_d())(100))).toNumber());const r={label:"Total Nominators",stat:{value:t.toNumber(),total:a,unit:""},graph:{value1:t.toNumber(),value2:a.sub(t).toNumber()},tooltip:`${l.toFixed(2)}%`,assistant:{page:"overview",key:"Nominators"}};return(0,Sd.jsx)(Z9,{...r})},K9=()=>{const{network:e}=rK(),{units:t}=e,{metrics:a}=MK(),{totalIssuance:l}=a,{staking:r}=_K(),{lastTotalStake:s}=r;let n=0;l.gt(new(_d())(0))&&(n=s.div(l.div(new(_d())(100))).toNumber());const o=s.div(new(_d())(10**t)),i=l.div(new(_d())(10**t)),u={label:"Supply Staked",stat:{value:o.toNumber(),unit:e.unit},graph:{value1:o.toNumber(),value2:i.sub(o).toNumber()},tooltip:`${n.toFixed(2)}%`,assistant:{page:"overview",key:"Supply Staked"}};return(0,Sd.jsx)(Z9,{...u})},G9=()=>{const{consts:e}=rK(),{maxElectingVoters:t}=e,{eraStakers:a}=_K(),{activeNominators:l}=a;let r=0;t>0&&(r=l/new(_d())(t).div(new(_d())(100)).toNumber());const s={label:"Active Nominators",stat:{value:l,total:t,unit:""},graph:{value1:l,value2:t-l},tooltip:`${r.toFixed(2)}%`,assistant:{page:"overview",key:"Active Nominators"}};return(0,Sd.jsx)(Z9,{...s})},J9=()=>{const{network:e}=rK(),{units:t}=e,{activeAccount:a}=kK(),{payouts:l}=V5();let r=null;if(l.length>0){const e=l[l.length-1];r={amount:iK(e.amount,t),block_timestamp:`${e.block_timestamp}`}}let s=l.length;s=s<0?0:s;let n=s-10;return n=n<0?0:n,(0,Sd.jsxs)(Sd.Fragment,{children:[(0,Sd.jsx)(B5,{title:"What's Happening"}),(0,Sd.jsxs)(Od,{children:[(0,Sd.jsx)(K9,{}),(0,Sd.jsx)(Y9,{}),(0,Sd.jsx)(G9,{})]}),(0,Sd.jsxs)(Ei,{className:"page-padding",noVerticalSpacer:!0,children:[(0,Sd.jsx)(Pi,{hOrder:0,vOrder:0,children:(0,Sd.jsxs)(Vd,{flex:!0,children:[(0,Sd.jsx)(D9,{}),(0,Sd.jsx)(g5,{})]})}),(0,Sd.jsx)(Ni,{hOrder:1,vOrder:1,children:(0,Sd.jsxs)(Vd,{style:{minHeight:430},flex:!0,children:[(0,Sd.jsx)(_5,{}),(0,Sd.jsxs)("div",{className:"head",children:[(0,Sd.jsx)("h4",{children:"Recent Payouts"}),(0,Sd.jsxs)("h2",{children:[(0,Sd.jsx)("span",{className:"amount",children:null===r?0:r.amount}),"\xa0",e.unit,"\xa0",(0,Sd.jsx)("span",{className:"fiat",children:null===r?"":jd().unix(r.block_timestamp).fromNow()})]})]}),(0,Sd.jsx)(h5,{account:a,payouts:l.slice(n,s)})]})})]}),(0,Sd.jsx)(Ei,{className:"page-padding",noVerticalSpacer:!0,children:(0,Sd.jsx)(O5,{})})]})},Q9=M.default.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;

  h3 {
    margin-bottom: 0;
  }
`,$9=M.default.div`
  border-bottom: 1px solid ${fi};
  padding-bottom: 1rem;
  width: 100%;
  margin-top: 1rem;
`,e7=(M.default.div`
  margin-bottom: ${e=>!0===e.last?"none":"1rem"};
  display: flex;
  flex-flow: row wrap;
  h4 {
    color: ${Zo};
  }
`,M.default.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  padding: 0 0.25rem;

  > section {
    color: ${Zo};
    display: flex;
    flex-flow: row wrap;
    align-items: center;
  }

  > section:last-child {
    flex: 1;
    justify-content: flex-end;

    .progress {
      color: ${Zo};
      opacity: 0.5;
    }

    .complete {
      margin: 0;
      color: ${Uo};
    }

    span {
      margin-right: 1rem;
    }
  }

  h2 {
    margin: 0;
    padding: 0.3rem 0;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;

    .assistant-icon {
      margin-left: 0.6rem;
    }
  }
`),t7=M.default.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-end;
  padding: 0 0.25rem;
  margin-top: 1rem;
`,a7=(M.default.div`
  flex: 1;
  display: flex;
  padding-right: 0.5rem;

  &:last-child {
    padding-right: 0;
  }

  > div {
    flex: 1;
    background: white;
    border-radius: 0.75rem;
    margin-right: 1rem;
    padding: 0 1rem;
  }
`,M.default.div`
  width: 100%;
  height: 1px;
  margin: 0.75rem 0;
`),l7=M.default.div`
  flex: 1;
  display: flex;
  flex-flow: column wrap;
  width: 100%;

  .head {
    flex: 1;
    display: flex;
    flex-flow: row wrap;

    > h2 {
      flex: 1;
    }
  }
`,r7=M.default.div`
  display: flex;
  width: 100%;
  flex-flow: column nowrap;
`,s7=M.default.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  padding: 0 0.25rem 0.5rem 0.25rem;
  flex: 1;
  border-bottom: 1px solid ${fi};
  margin-top: 0.75rem;

  h4 {
    margin: 0;
    color: ${Zo};
  }

  > div {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }

  > div:first-child {
    justify-content: flex-start;
  }

  > div:last-child {
    justify-content: flex-end;
    flex: 1;

    button {
      font-size: 1.1rem;
      margin-left: 0.4rem;
      opacity: 0.6;
      transition: all 0.2s;
      color: ${Zo};

      &:hover {
        opacity: 0.9;
      }
    }
  }
`,n7=M.default.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.75rem 0.5rem;

  h4 {
    margin: 0;
  }

  > div:first-child {
    display: flex;
    justify-content: flex-start;
    flex: 1;
  }
  > div:last-child {
    display: flex;
    justify-content: flex-end;

    button {
      margin-left: 0.5rem;
      &.next {
        color: ${e=>e.next?"rgb(211, 48, 121)":Zo};
        cursor: ${e=>e.next?"pointer":"default"};
      }
      &.prev {
        color: ${e=>e.prev?"rgb(211, 48, 121)":Zo};
        cursor: ${e=>e.prev?"pointer":"default"};
      }
    }
  }
`,o7=M.default.div`
  margin-top: 1rem;
  width: 100%;

  .transition {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: flex-start;

    > .item {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      overflow: hidden;

      &.row {
        flex-basis: 100%;
      }

      &.col {
        flex-grow: 1;
        flex-basis: 100%;
        @media (min-width: 875px) {
          flex-basis: 50%;
          max-width: 50%;
        }
        @media (min-width: 1500px) {
          flex-basis: ${e=>e.flexBasisLarge};
          max-width: ${e=>e.flexBasisLarge};
        }
      }
    }
  }
`,i7=(0,M.default)(co.div)`
  padding: 0.5rem;
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  height: 3.2rem;
  position: relative;
  margin: 0.5rem;

  > div {
    background: ${ti};
    box-sizing: border-box;
    padding: 0.75rem 0.6rem;
    flex: 1;
    border-radius: 0.75rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    flex: 1;
    overflow: hidden;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;

    .identity {
      box-sizing: border-box;
      display: flex;
      margin-left: 0.75rem;
      margin-right: 0.5rem;
      flex-flow: row wrap;
      align-items: center;
      align-content: center;
      overflow: hidden;
      flex: 1 1 100%;

      h4 {
        margin: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .labels {
      display: flex;
      flex-flow: row wrap;
      justify-content: flex-end;
      align-items: center;
      overflow: hidden;
      flex: 1 1 100%;

      .label {
        margin-left: 0.35rem;
        color: #aaa;

        &.warning {
          color: #d2545d;
          display: flex;
          flex-flow: row wrap;
          align-items: center;
        }
        button {
          color: #aaa;
          &:hover {
            color: #666;
          }
          &.active {
            color: rgba(211, 48, 121, 0.85);
          }
        }
      }
    }

    svg {
      margin: 0;
    }
  }
`,u7=e=>{var t,a,l,r,s,n,o,i,u,c,d,f,h;const{consts:p,network:g}=rK(),{openModalWith:m}=yK(),{addNotification:v}=W9(),{favourites:b,addFavourite:y,removeFavourite:w,meta:k}=RK(),{validator:x,toggleFavourites:C,batchIndex:M,batchKey:E}=e,N=null!==(t=null===(a=k[E])||void 0===a?void 0:a.identities)&&void 0!==t?t:[],P=null!==(l=null===(r=k[E])||void 0===r?void 0:r.supers)&&void 0!==l?l:[],j=null!==(s=null===(n=k[E])||void 0===n?void 0:n.stake)&&void 0!==s?s:[],z=null!==(o=N.length>0)&&void 0!==o&&o,T=null!==(i=P.length>0)&&void 0!==i&&i,L={identities:z&&T,stake:null!==(u=j.length>0)&&void 0!==u&&u},{address:S,prefs:O}=x,A=j[M],V=((e,t)=>{var a,l,r,s,n,o,i,u,c,d,f;let h=null!==(a=null===e||void 0===e||null===(l=e.info)||void 0===l||null===(r=l.display)||void 0===r?void 0:r.Raw)&&void 0!==a?a:null;if(h=null===h?null!==(s=null===e||void 0===e||null===(n=e.info)||void 0===n?void 0:n.legal.Raw)&&void 0!==s?s:null:h,null!==h)return h;const p=null!==(o=null===t||void 0===t?void 0:t.identity)&&void 0!==o?o:null;return h=null!==(i=null===p||void 0===p||null===(u=p.info)||void 0===u||null===(c=u.display)||void 0===c?void 0:c.Raw)&&void 0!==i?i:null,h=null===h?null!==(d=null===p||void 0===p||null===(f=p.info)||void 0===f?void 0:f.legal.Raw)&&void 0!==d?d:null:h,h})(N[M],P[M]),H=null!==(c=null===O||void 0===O?void 0:O.commission)&&void 0!==c?c:null,_=null!==(d=null===O||void 0===O?void 0:O.blocked)&&void 0!==d?d:null,B=null!==(f=null===A||void 0===A?void 0:A.total_nominations)&&void 0!==f?f:0,I=null!==(h=null===A||void 0===A?void 0:A.lowestReward)&&void 0!==h?h:0,R=null==S?{}:{title:"Address Copied to Clipboard",subtitle:S},W=b.includes(S)?{title:"Favourite Validator Removed",subtitle:S}:{title:"Favourite Validator Added",subtitle:S};return(0,Sd.jsx)(i7,{children:(0,Sd.jsxs)("div",{children:[(0,Sd.jsx)(I9,{value:S,size:26}),L.identities&&null!==V?(0,Sd.jsx)(co.div,{className:"identity",initial:{opacity:.5},animate:{opacity:1},transition:{duration:.3},children:(0,Sd.jsx)("h4",{children:V})}):(0,Sd.jsx)(co.div,{className:"identity",initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},children:(0,Sd.jsx)("h4",{children:sK(S)})}),(0,Sd.jsxs)("div",{className:"labels",children:[L.stake&&B>=p.maxNominatorRewardedPerValidator&&(0,Sd.jsx)(co.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.1},children:(0,Sd.jsxs)("div",{className:"label warning",children:[(0,Sd.jsx)(o5,{icon:pd,transform:"shrink-2"}),"\xa0",I," ",g.unit]})}),void 0!==O&&(0,Sd.jsxs)(Sd.Fragment,{children:[_&&(0,Sd.jsx)("div",{className:"label",children:(0,Sd.jsx)(o5,{icon:kd,color:"#d2545d",transform:"shrink-1"})}),(0,Sd.jsxs)("div",{className:"label",children:[H,"%"]})]}),(0,Sd.jsx)("div",{className:"label",children:(0,Sd.jsx)("button",{type:"button",onClick:()=>m("ValidatorMetrics",{address:S,identity:V},"large"),children:(0,Sd.jsx)(o5,{icon:Vc})})}),(0,Sd.jsx)("div",{className:"label",children:(0,Sd.jsx)("button",{type:"button",onClick:()=>v(R),children:(0,Sd.jsx)(U5.CopyToClipboard,{text:S,children:(0,Sd.jsx)(o5,{icon:D5})})})}),C&&(0,Sd.jsx)("div",{className:"label",children:(0,Sd.jsx)("button",{type:"button",className:b.includes(S)?"active":void 0,onClick:()=>{b.includes(S)?w(S):y(S),v(W)},children:(0,Sd.jsx)(o5,{icon:fd})})})]})]})})};class c7 extends C.Component{shouldComponentUpdate(e,t){return this.props.validator.address!==e.validator.address||this.props.batchIndex!==e.batchIndex||this.props.batchKey!==e.batchKey}render(){return(0,Sd.jsx)(u7,{...this.props})}}const d7=M.default.div`
  box-sizing: border-box;
  padding: 0.25rem 0.5rem 1rem 0.5rem;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-wrap: nowrap;
  height: 125px;

  > .hide-scrollbar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

    > div {
      box-sizing: border-box;
      display: flex;
      flex-wrap: nowrap;
      overflow: auto;
      width: 100%;
      padding-bottom: 3rem;

      > .category {
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;

        > .head {
          flex: 1;
          padding-bottom: 0.6rem;
          font-size: 0.8rem;
          color: ${Zo};
        }
        > .items {
          flex: 1;
          display: flex;
          flex-flow: row nowrap;
          justify-content: flex-start;
        }
      }
    }
  }
`,f7=M.default.div`
  width: 110px;
  height: 80px;
  border-radius: 0.7rem;
  background: ${e=>e.active?"rgba(211, 48, 121, 0.85)":"none"};
  display: flex;
  flex-flow: column nowrap;
  margin-right: 1rem;
  position: relative;
  border: 1px solid ${fi};

  &:last-child {
    margin-right: 0;
  }

  section {
    display: flex;
    flex-flow: row wrap;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    width: 100%;

    &:first-child {
      flex-grow: 1;
      flex-basis: 70%;
      justify-content: flex-start;
      align-items: flex-end;
      padding-bottom: 0.6rem;

      .icon {
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        align-items: center;
        padding: 0 0.5rem;
      }
    }

    &:last-child {
      justify-content: flex-start;
      padding-top: 0.2rem;
      flex-basis: 30%;
      min-height: 40px;
      display: flex;
      flex-flow: column wrap;
      justify-content: flex-start;

      p {
        color: ${e=>e.active?"white":Zo};
        font-size: 0.85rem;
        margin: 0;
        text-align: left;
        padding-top: 0.15rem;
        line-height: 0.9rem;
      }
    }

    .active {
      position: absolute;
      right: 6px;
      top: 4px;
      width: 20px;
      height: 20px;
      z-index: 2;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    }
  }
`,h7=e=>{const{mode:t}=(0,M.useTheme)(),{icon:a,label:l,transform:r,onClick:s}=e,[n,o]=(0,C.useState)(e.active);return(0,Sd.jsx)(co.button,{whileHover:{scale:1.02},whileTap:{scale:.99},transition:{duration:.3},onClick:()=>{o(!n),s()},children:(0,Sd.jsxs)(f7,{active:n,children:[(0,Sd.jsxs)("section",{children:[n&&(0,Sd.jsx)("div",{className:"active",children:(0,Sd.jsx)(o5,{icon:Hc,transform:"grow-0"})}),(0,Sd.jsx)("div",{className:"icon",children:(0,Sd.jsx)(o5,{icon:a,color:n?"white":Do.text.secondary[t],transform:r,opacity:n?1:.7})})]}),(0,Sd.jsx)("section",{children:(0,Sd.jsx)("p",{children:l})})]})})},p7=()=>{var e,t,a,l,r;const{validatorOrder:s,validatorFilters:n,orderValidators:o,toggleFilterValidators:i}=DK(),u=(e,t)=>{e(t)};return(0,Sd.jsx)(d7,{children:(0,Sd.jsx)("div",{className:"hide-scrollbar",children:(0,Sd.jsxs)("div",{children:[(0,Sd.jsxs)("div",{className:"category",children:[(0,Sd.jsx)("div",{className:"head",children:"Order"}),(0,Sd.jsx)("div",{className:"items",children:(0,Sd.jsx)(h7,{label:"lowest commission",icon:ad,transform:"grow-10",active:"commission"===s,onClick:()=>u(o,"commission")})})]}),(0,Sd.jsxs)("div",{className:"category",children:[(0,Sd.jsx)("div",{className:"head",children:"Exclude"}),(0,Sd.jsxs)("div",{className:"items",children:[(0,Sd.jsx)(h7,{label:"inactive validators",icon:Xc,transform:"grow-8",active:null!==(e=null===n||void 0===n?void 0:n.includes("inactive"))&&void 0!==e&&e,onClick:()=>{u(i,"inactive")}}),(0,Sd.jsx)(h7,{label:"over subscribed",icon:pd,transform:"grow-8",active:null!==(t=null===n||void 0===n?void 0:n.includes("over_subscribed"))&&void 0!==t&&t,onClick:()=>{u(i,"over_subscribed")}}),(0,Sd.jsx)(h7,{label:"100% commission",icon:ud,transform:"grow-4",active:null!==(a=null===n||void 0===n?void 0:n.includes("all_commission"))&&void 0!==a&&a,onClick:()=>{u(i,"all_commission")}}),(0,Sd.jsx)(h7,{label:"blocked nominations",icon:kd,transform:"grow-7",active:null!==(l=null===n||void 0===n?void 0:n.includes("blocked_nominations"))&&void 0!==l&&l,onClick:()=>{u(i,"blocked_nominations")}}),(0,Sd.jsx)(h7,{label:"missing identity",icon:xd,transform:"grow-7",active:null!==(r=null===n||void 0===n?void 0:n.includes("missing_identity"))&&void 0!==r&&r,onClick:()=>{u(i,"missing_identity")}})]})]})]})})})},g7=e=>{var t;const{isReady:a}=rK(),{activeAccount:l}=kK(),{metrics:r}=MK(),{fetchValidatorMetaBatch:s}=RK(),{setListFormat:n,listFormat:o,validatorFilters:i,validatorOrder:u,applyValidatorFilters:c,applyValidatorOrder:d}=DK(),{batchKey:f,allowMoreCols:h,allowFilters:p,toggleFavourites:g,pagination:m,title:v}=e,b=null!==(t=e.disableThrottle)&&void 0!==t&&t,y=void 0!==e.refetchOnListUpdate&&e.refetchOnListUpdate,[w,k]=(0,C.useState)(1),[x,M]=(0,C.useState)(1),[E,N]=(0,C.useState)(e.validators),[P,j]=(0,C.useState)(e.validators),[z,T]=(0,C.useState)(!1),L=(0,C.useRef)(x),S=e=>{L.current=e,M(e)},O=Math.ceil(P.length/Oo),A=w+1>O?O:w+1,V=w-1<1?1:w-1,H=w*Oo-1,_=H-49,B=30*x-1;(0,C.useEffect)((()=>{e.validators!==E&&T(!1)}),[e.validators,l]),(0,C.useEffect)((()=>{a&&0!==r.activeEra.index&&!z&&I()}),[a,r.activeEra.index,z]),(0,C.useEffect)((()=>{B>=H||b||setTimeout((()=>{S(L.current+1)}),50)}),[L.current]),(0,C.useEffect)((()=>{p&&z&&R()}),[i,u]);const I=()=>{N(e.validators),j(e.validators),T(!0),s(f,e.validators,y)},R=()=>{if(p){let e=Object.assign(E);"default"!==u&&(e=d(e,u)),e=c(e,f),j(e),k(1),S(1)}};let W=[];return W=b?P:P.slice(_).slice(0,B),P.length?(0,Sd.jsxs)(r7,{children:[(0,Sd.jsxs)(s7,{children:[(0,Sd.jsx)("div",{children:(0,Sd.jsx)("h4",{children:v||`Dispalying ${P.length} Validator${1===P.length?"":"s"}`})}),(0,Sd.jsxs)("div",{children:[(0,Sd.jsx)("button",{type:"button",onClick:()=>n("row"),children:(0,Sd.jsx)(o5,{icon:Sc,color:"row"===o?"#d33079":"inherit"})}),(0,Sd.jsx)("button",{type:"button",onClick:()=>n("col"),children:(0,Sd.jsx)(o5,{icon:Qc,color:"col"===o?"#d33079":"inherit"})})]})]}),(0,Sd.jsxs)(o7,{flexBasisLarge:h?"33.33%":"50%",children:[p&&(0,Sd.jsx)(p7,{}),m&&(0,Sd.jsxs)(n7,{prev:1!==w,next:w!==O,children:[(0,Sd.jsx)("div",{children:(0,Sd.jsxs)("h4",{children:["Page ",w," of ",O]})}),(0,Sd.jsxs)("div",{children:[(0,Sd.jsx)("button",{type:"button",className:"prev",onClick:()=>{k(V)},children:"Prev"}),(0,Sd.jsx)("button",{type:"button",className:"next",onClick:()=>{k(A)},children:"Next"})]})]}),(0,Sd.jsx)(co.div,{className:"transition",initial:"hidden",animate:"show",variants:{hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:.01}}},children:W.map(((e,t)=>{const a=E.indexOf(e);return(0,Sd.jsx)(co.div,{className:"item "+("row"===o?"row":"col"),variants:{hidden:{y:15,opacity:0},show:{y:0,opacity:1}},children:(0,Sd.jsx)(c7,{validator:e,toggleFavourites:g,batchIndex:a,batchKey:f})},`nomination_${t}`)}))})]})]}):(0,Sd.jsx)(Sd.Fragment,{})};class m7 extends C.Component{shouldComponentUpdate(e,t){return this.props.validators!==e.validators}render(){return(0,Sd.jsx)(g7,{...this.props})}}m7.contextType=HK;const v7=M.default.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`,b7=(0,M.default)(co.div)`
  display: inline-block;
  margin: ${e=>e.margin};

  > button {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    background: ${e=>"default"===e.type?ii:"rgba(211, 48, 121, 0.9)"};
    color: ${e=>"default"===e.type?Zo:"white"};

    padding: ${e=>e.padding};
    border-radius: 0.75rem;
    font-size: ${e=>e.fontSize};
    font-variation-settings: 'wght' 560;
    transition: opacity 0.2s;

    .space {
      margin-right: 0.6rem;
    }

    &:disabled {
      cursor: default;
      opacity: 0.25;
    }
  }
`,y7=e=>{var t,a,l,r,s,n,o;let{primary:i,inline:u,small:c,disabled:d,icon:f,transform:h,title:p}=e;const{onClick:g}=e;return p=null!==(t=p)&&void 0!==t&&t,i=null!==(a=i)&&void 0!==a&&a,u=null!==(l=u)&&void 0!==l&&l,c=null!==(r=c)&&void 0!==r&&r,d=null!==(s=d)&&void 0!==s&&s,f=null!==(n=f)&&void 0!==n&&n,h=null!==(o=h)&&void 0!==o?o:"shrink-1",(0,Sd.jsx)(b7,{whileHover:{scale:d?1:1.02},whileTap:{scale:d?1:.98},type:!0===i?"invert":"default",margin:u?"0":"0 0.5rem",padding:c?"0.3rem 0.75rem":"0.45rem 1.2rem",fontSize:c?"0.95rem":"1.05rem",children:(0,Sd.jsxs)("button",{type:"button",disabled:d,onClick:()=>g(),children:[f&&(0,Sd.jsx)(o5,{icon:f,className:p?"space":void 0,transform:h}),p&&p]})})},w7=y7,k7=()=>{const{openModalWith:e}=yK(),{isReady:t}=rK(),{activeAccount:a}=kK(),{nominated:l}=RK(),{inSetup:r}=_K(),{getAccountNominations:s}=TK(),{isSyncing:n}=DK(),o=s(a);return(0,Sd.jsxs)(l7,{children:[(0,Sd.jsxs)("div",{className:"head",children:[(0,Sd.jsxs)("h2",{children:["Nominations",(0,Sd.jsx)(S5,{page:"stake",title:"Nominations"})]}),(0,Sd.jsx)("div",{children:o.length?(0,Sd.jsx)("div",{children:(0,Sd.jsx)(y7,{small:!0,inline:!0,primary:!0,title:"Stop",disabled:r()||n,onClick:()=>e("StopNominating",{},"small")})}):(0,Sd.jsx)(Sd.Fragment,{})})]}),null===l||n?(0,Sd.jsx)("div",{className:"head",children:(0,Sd.jsx)("h3",{children:"Syncing nominations..."})}):(0,Sd.jsx)(Sd.Fragment,{children:t&&(0,Sd.jsx)(Sd.Fragment,{children:l.length>0?(0,Sd.jsx)("div",{style:{marginTop:"1rem"},children:(0,Sd.jsx)(m7,{validators:l,batchKey:"stake_nominations",title:"Your Nominations",refetchOnListUpdate:!0,allowMoreCols:!0,disableThrottle:!0})}):(0,Sd.jsx)("div",{className:"head",children:(0,Sd.jsx)("h3",{children:"Not Nominating."})})})})]})};n1.register(p1,G1,V1);const x7=e=>{const{mode:t}=U2(),{network:a}=rK(),{active:l,unlocking:r,total:s,inactive:n}=e;let{free:o}=e,i=!1;0!==s&&void 0!==s||(o=-1,i=!0);const u={responsive:!0,maintainAspectRatio:!1,spacing:i?0:2,plugins:{legend:{padding:{right:20},display:!0,position:"left",align:"center",labels:{padding:20,color:Wo.text.primary[t],font:{size:15,weight:"500"}}},tooltip:{displayColors:!1,backgroundColor:Wo.graphs.tooltip[t],bodyColor:Wo.text.invert[t],callbacks:{label:e=>n?"Inactive":`${e.label}: ${-1===e.parsed?0:e.parsed} ${a.unit}`}}},cutout:"70%"},c={labels:["Active","Unlocking","Free"],datasets:[{label:a.unit,data:[l,r,o],backgroundColor:[Wo.graphs.colors[0][t],Wo.graphs.colors[1][t],Wo.graphs.colors[2][t]],borderWidth:0}]};return(0,Sd.jsx)(A2,{options:u,data:c})},C7=()=>{const{network:e}=rK(),{units:t}=e,{openModalWith:a}=yK(),{activeAccount:l}=kK(),{getAccountLedger:r,getBondedAccount:s,getBondOptions:n}=TK(),{inSetup:o}=_K(),{isSyncing:i}=DK(),u=r(s(l)),{active:c,total:d}=u,{freeToBond:f,totalUnlocking:h,totalUnlockChuncks:p}=n(l);return(0,Sd.jsxs)(Sd.Fragment,{children:[(0,Sd.jsxs)("div",{className:"head",children:[(0,Sd.jsxs)("h4",{children:["Bonded Funds",(0,Sd.jsx)(S5,{page:"stake",title:"Bonding"})]}),(0,Sd.jsxs)("h2",{children:[(0,Sd.jsx)("span",{className:"amount",children:uK(c,t)}),"\xa0",e.unit," \xa0"]}),(0,Sd.jsxs)(v7,{children:[(0,Sd.jsx)(y7,{small:!0,primary:!0,inline:!0,title:"+",disabled:o()||i,onClick:()=>a("UpdateBond",{fn:"add"},"small")}),(0,Sd.jsx)(y7,{small:!0,primary:!0,title:"-",disabled:o()||i,onClick:()=>a("UpdateBond",{fn:"remove"},"small")}),(0,Sd.jsx)(y7,{small:!0,inline:!0,primary:!0,icon:$c,title:String(null!==p&&void 0!==p?p:0),disabled:o()||i,onClick:()=>a("UnlockChunks",{},"small")})]})]}),(0,Sd.jsx)(Vd,{transparent:!0,noMargin:!0,children:(0,Sd.jsx)("div",{className:"graph",style:{flex:0,paddingRight:"1rem",height:160},children:(0,Sd.jsx)(x7,{active:uK(c,t),unlocking:h,free:f,total:d.toNumber(),inactive:o()})})})]})},M7=e=>{var t;const a=null!==(t=e.setters)&&void 0!==t?t:[],l=e.nominations,{isReady:r}=rK(),{activeAccount:s}=kK(),{removeValidatorMetaBatch:n,validators:o,favouritesList:i,meta:u}=RK(),{applyValidatorOrder:c,applyValidatorFilters:d}=DK(),[f,h]=(0,C.useState)(null),[p,g]=(0,C.useState)(!1),[m,v]=(0,C.useState)(l),b="validators_browse",y="generated_nominations";(0,C.useEffect)((()=>{v(l)}),[s,l]);return(0,C.useEffect)((()=>{if(!r||!o.length)return;const e=u[b];if(void 0===e)return;if(void 0===e.stake)return;let t;if(p){if("Favourites"===f)t=(()=>{let e=[];return i.length&&(e=i.slice(0,16)),e})();else t=(()=>{let e=Object.assign(o);return e=d(e,b,["all_commission","blocked_nominations","over_subscribed","inactive","missing_identity"]),e=c(e,"commission"),e.length&&(e=e.slice(0,16)),e})();v(t),g(!1);for(const e of a)e.set({...e.current,nominations:t})}})),(0,Sd.jsxs)(m5,{style:{minHeight:200},children:[(0,Sd.jsx)("div",{children:m.length?(0,Sd.jsx)(y7,{inline:!0,small:!0,title:"Clear Nominations",onClick:()=>{h(null),n(y),v([]);for(const e of a)e.set({...e.current,nominations:[]})}}):(0,Sd.jsxs)(Sd.Fragment,{children:[(0,Sd.jsx)(y7,{inline:!0,small:!0,title:"Get Most Profitable",onClick:()=>{h("Most Profitable"),n(y),v([]),g(!0)}}),null===i?(0,Sd.jsx)(Sd.Fragment,{}):(0,Sd.jsx)(y7,{small:!0,title:"Get Favourites",onClick:()=>{h("Favourites"),n(y),v([]),g(!0)}})]})}),p?(0,Sd.jsx)(Sd.Fragment,{}):(0,Sd.jsx)(Sd.Fragment,{children:r&&m.length>0&&(0,Sd.jsx)("div",{style:{marginTop:"1rem"},children:(0,Sd.jsx)(m7,{validators:m,batchKey:y,allowMoreCols:!0})})})]})},E7=()=>{var e;const{getNominationsStatus:t}=_K(),a=t(),l=Object.values(a).length,r=null!==(e=Object.values(a).filter((e=>"active"===e)).length)&&void 0!==e?e:0,s={label:"Active Nominations",stat:{value:r,total:l,unit:""},graph:{value1:r,value2:r?0:1},tooltip:""+(r?"Active":"Inactive"),assistant:{page:"stake",key:"Nominations"}};return(0,Sd.jsx)(Z9,{...s})},N7=()=>{const{network:e}=rK(),{eraStakers:t}=_K(),{minActiveBond:a}=t,l={label:"Minimum Active Bond",value:a,unit:e.unit,assistant:{page:"stake",key:"Bonding"}};return(0,Sd.jsx)(U9,{...l})},P7={eraLength:0,eraProgress:0,sessionLength:0,sessionProgress:0,sessionsPerEra:0,unsub:void 0},j7=C.createContext({getEraTimeLeft:()=>0,sessionEra:{}}),z7=()=>C.useContext(j7),T7=()=>{const{sessionEra:e,getEraTimeLeft:t}=z7(),[a,l]=(0,C.useState)(0),r=(0,C.useRef)(a),s=e=>{l(e),r.current=e};let n;return(0,C.useEffect)((()=>(s(t()),n=setInterval((()=>{s(r.current-1)}),1e3),()=>{clearInterval(n)})),[e]),r.current},L7=()=>{const{metrics:e}=MK(),{sessionEra:t}=z7(),a=T7(),l=jd().duration(1e3*a,"milliseconds"),r=`${l.hours()}:${l.minutes()}:${l.seconds()}`,s={label:"Active Era",stat:{value:e.activeEra.index,unit:""},graph:{value1:t.eraProgress,value2:t.eraLength-t.eraProgress},tooltip:r,assistant:{page:"validators",key:"Era"}};return(0,Sd.jsx)(Z9,{...s})},S7=()=>{const{openModalWith:e}=yK(),{isSyncing:t}=DK(),{getControllerNotImported:a}=_K(),{activeAccount:l}=kK(),{getBondedAccount:r}=TK(),s=r(l);return(0,Sd.jsx)(Sd.Fragment,{children:a(s)&&!t&&(0,Sd.jsx)(Ei,{className:"page-padding",noVerticalSpacer:!0,children:(0,Sd.jsxs)(Ad,{style:{border:"2px solid rgba(242, 185, 27,0.25)"},children:[(0,Sd.jsx)("div",{className:"head",children:(0,Sd.jsx)("h4",{children:"You have not imported your Controller account. If you have lost access to your Controller account, set a new one now."})}),(0,Sd.jsx)(y7,{small:!0,primary:!0,inline:!0,title:"Set New Controller",onClick:()=>e("UpdateController",{},"large")})]})})})},O7=e=>{var t;let{title:a}=e;const{isReady:l}=rK(),{setOnSetup:r}=DK(),{openModalWith:s}=yK(),{activeAccount:n}=kK(),{isSyncing:o}=DK(),{getNominationsStatus:i,staking:u,targets:c,setTargets:d,inSetup:f}=_K(),{getAccountNominations:h}=TK(),{payee:p}=u,g=h(n),m=i(),v=void 0===m?[]:m,b=Object.values(v).filter((e=>"active"===e)).length,y=zo.find((e=>e.key===p));return(0,Sd.jsxs)(Sd.Fragment,{children:[(0,Sd.jsx)(B5,{title:a}),(0,Sd.jsxs)(Od,{children:[(0,Sd.jsx)(E7,{}),(0,Sd.jsx)(N7,{}),(0,Sd.jsx)(L7,{})]}),(0,Sd.jsx)(S7,{}),(0,Sd.jsxs)(Ei,{className:"page-padding",noVerticalSpacer:!0,children:[(0,Sd.jsx)(Ni,{hOrder:1,vOrder:0,children:(0,Sd.jsx)(Ad,{height:310,children:(0,Sd.jsxs)("div",{className:"head",children:[(0,Sd.jsxs)("h4",{children:["Status",(0,Sd.jsx)(S5,{page:"stake",title:"Staking Status"})]}),(0,Sd.jsxs)("h2",{children:[f()||o?"Not Staking":g.length?b?"Actively Nominating with Bonded Funds":"Waiting for Active Nominations":"Inactive: Not Nominating",f()&&(0,Sd.jsxs)("span",{children:["\xa0\xa0",(0,Sd.jsx)(y7,{primary:!0,inline:!0,title:"Start Staking",icon:Wc,transform:"grow-1",disabled:!l,onClick:()=>r(!0)})]})]}),(0,Sd.jsx)(ji,{}),(0,Sd.jsxs)("h4",{children:["Reward Destination",(0,Sd.jsx)(S5,{page:"stake",title:"Reward Destination"})]}),(0,Sd.jsxs)("h2",{children:[(0,Sd.jsx)(o5,{icon:null===p?W5:"Staked"===p?od:"None"===p?W5:Md,transform:"shrink-4"}),"\xa0",f()?"Not Assigned":null!==(t=null===y||void 0===y?void 0:y.name)&&void 0!==t?t:"Not Assigned","\xa0\xa0",(0,Sd.jsx)("div",{children:(0,Sd.jsx)(y7,{small:!0,inline:!0,primary:!0,disabled:f()||o,title:"Update",onClick:()=>s("UpdatePayee",{},"small")})})]})]})})}),(0,Sd.jsx)(Pi,{hOrder:0,vOrder:1,children:(0,Sd.jsx)(Ad,{height:310,children:(0,Sd.jsx)(C7,{})})})]}),(0,Sd.jsx)(Ei,{className:"page-padding",noVerticalSpacer:!0,children:(0,Sd.jsx)(Ad,{children:g.length||f()||o?(0,Sd.jsx)(k7,{}):(0,Sd.jsxs)(Sd.Fragment,{children:[(0,Sd.jsxs)("div",{className:"head with-action",children:[(0,Sd.jsxs)("h2",{children:["Generate Nominations",(0,Sd.jsx)(S5,{page:"stake",title:"Nominations"})]}),(0,Sd.jsx)("div",{children:(0,Sd.jsx)(y7,{small:!0,inline:!0,primary:!0,title:"Nominate",disabled:0===c.length||f()||o,onClick:()=>s("Nominate",{},"small")})})]}),(0,Sd.jsx)(M7,{setters:[{set:d,current:c}],nominations:c.nominations})]})})})]})};var A7=__webpack_require__(35667);const V7=e=>{const{activeAccount:t}=kK(),{getSetupProgress:a,setActiveAccountSetupSection:l}=DK(),r=a(t),{title:s,assistantPage:n,assistantKey:o,complete:i,thisSection:u}=e;return(0,Sd.jsxs)(e7,{children:[(0,Sd.jsx)("section",{children:(0,Sd.jsxs)("h2",{children:[s,void 0!==n&&void 0!==o&&(0,Sd.jsx)(S5,{page:n,title:o})]})}),(0,Sd.jsx)("section",{children:i&&(0,Sd.jsxs)(Sd.Fragment,{children:[r.section!==u&&u<r.section&&(0,Sd.jsx)("span",{children:(0,Sd.jsx)(y7,{inline:!0,small:!0,title:"Update",onClick:()=>{l(u)}})}),(0,Sd.jsx)("h4",{className:"complete",children:"Complete"})]})})]})},H7=e=>{const{activeAccount:t}=kK(),{getSetupProgress:a,setActiveAccountSetupSection:l}=DK(),r=a(t),{complete:s}=e;return(0,Sd.jsx)(t7,{children:(0,Sd.jsx)("section",{children:s?(0,Sd.jsx)(y7,{inline:!0,primary:!0,title:"Continue",onClick:()=>l(r.section+1)}):(0,Sd.jsx)("div",{style:{opacity:.5},children:(0,Sd.jsx)(y7,{inline:!0,title:"Continue",disabled:!0})})})})},_7=e=>{const{thisSection:t,activeSection:a}=e,l=t===a?"visible":"hidden";return(0,Sd.jsx)(co.div,{initial:!1,style:{overflow:"hidden",width:"100%"},variants:{hidden:{height:"0px"},visible:{height:"auto"}},animate:l,transition:{duration:.5,type:"spring",bounce:.2},children:e.children})},B7=e=>{const{section:t}=e,{activeAccount:a}=kK(),{getSetupProgress:l,setActiveAccountSetup:r}=DK(),s=l(a);return(0,Sd.jsxs)(Sd.Fragment,{children:[(0,Sd.jsx)(V7,{thisSection:t,complete:s.nominations.length>0,title:"Nominate",assistantPage:"stake",assistantKey:"Nominating"}),(0,Sd.jsxs)(_7,{thisSection:t,activeSection:s.section,children:[(0,Sd.jsx)("div",{style:{marginTop:"1rem"},children:(0,Sd.jsx)(M7,{setters:[{set:r,current:s}],nominations:s.nominations,setSetup:r})}),(0,Sd.jsx)(H7,{complete:s.nominations.length>0})]})]})};function I7(e,t){if(null==e)return{};var a,l,r={},s=Object.keys(e);for(l=0;l<s.length;l++)a=s[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}__webpack_require__(70419);function R7(e){return"object"==typeof e&&null!=e&&1===e.nodeType}function W7(e,t){return(!t||"hidden"!==e)&&"visible"!==e&&"clip"!==e}function D7(e,t){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var a=getComputedStyle(e,null);return W7(a.overflowY,t)||W7(a.overflowX,t)||function(e){var t=function(e){if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch(e){return null}}(e);return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)}(e)}return!1}function F7(e,t,a,l,r,s,n,o){return s<e&&n>t||s>e&&n<t?0:s<=e&&o<=a||n>=t&&o>=a?s-e-l:n>t&&o<a||s<e&&o>a?n-t+r:0}var U7=0;function q7(){}function X7(e,t){if(e){var a=function(e,t){var a=window,l=t.scrollMode,r=t.block,s=t.inline,n=t.boundary,o=t.skipOverflowHiddenElements,i="function"==typeof n?n:function(e){return e!==n};if(!R7(e))throw new TypeError("Invalid target");for(var u=document.scrollingElement||document.documentElement,c=[],d=e;R7(d)&&i(d);){if((d=d.parentElement)===u){c.push(d);break}null!=d&&d===document.body&&D7(d)&&!D7(document.documentElement)||null!=d&&D7(d,o)&&c.push(d)}for(var f=a.visualViewport?a.visualViewport.width:innerWidth,h=a.visualViewport?a.visualViewport.height:innerHeight,p=window.scrollX||pageXOffset,g=window.scrollY||pageYOffset,m=e.getBoundingClientRect(),v=m.height,b=m.width,y=m.top,w=m.right,k=m.bottom,x=m.left,C="start"===r||"nearest"===r?y:"end"===r?k:y+v/2,M="center"===s?x+b/2:"end"===s?w:x,E=[],N=0;N<c.length;N++){var P=c[N],j=P.getBoundingClientRect(),z=j.height,T=j.width,L=j.top,S=j.right,O=j.bottom,A=j.left;if("if-needed"===l&&y>=0&&x>=0&&k<=h&&w<=f&&y>=L&&k<=O&&x>=A&&w<=S)return E;var V=getComputedStyle(P),H=parseInt(V.borderLeftWidth,10),_=parseInt(V.borderTopWidth,10),B=parseInt(V.borderRightWidth,10),I=parseInt(V.borderBottomWidth,10),R=0,W=0,D="offsetWidth"in P?P.offsetWidth-P.clientWidth-H-B:0,F="offsetHeight"in P?P.offsetHeight-P.clientHeight-_-I:0;if(u===P)R="start"===r?C:"end"===r?C-h:"nearest"===r?F7(g,g+h,h,_,I,g+C,g+C+v,v):C-h/2,W="start"===s?M:"center"===s?M-f/2:"end"===s?M-f:F7(p,p+f,f,H,B,p+M,p+M+b,b),R=Math.max(0,R+g),W=Math.max(0,W+p);else{R="start"===r?C-L-_:"end"===r?C-O+I+F:"nearest"===r?F7(L,O,z,_,I+F,C,C+v,v):C-(L+z/2)+F/2,W="start"===s?M-A-H:"center"===s?M-(A+T/2)+D/2:"end"===s?M-S+B+D:F7(A,S,T,H,B+D,M,M+b,b);var U=P.scrollLeft,q=P.scrollTop;C+=q-(R=Math.max(0,Math.min(q+R,P.scrollHeight-z+F))),M+=U-(W=Math.max(0,Math.min(U+W,P.scrollWidth-T+D)))}E.push({el:P,top:R,left:W})}return E}(e,{boundary:t,block:"nearest",scrollMode:"if-needed"});a.forEach((function(e){var t=e.el,a=e.top,l=e.left;t.scrollTop=a,t.scrollLeft=l}))}}function Z7(e,t,a){return e===t||t instanceof a.Node&&e.contains&&e.contains(t)}function Y7(e,t){var a;function l(){a&&clearTimeout(a)}function r(){for(var r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];l(),a=setTimeout((function(){a=null,e.apply(void 0,s)}),t)}return r.cancel=l,r}function K7(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return function(e){for(var a=arguments.length,l=new Array(a>1?a-1:0),r=1;r<a;r++)l[r-1]=arguments[r];return t.some((function(t){return t&&t.apply(void 0,[e].concat(l)),e.preventDownshiftDefault||e.hasOwnProperty("nativeEvent")&&e.nativeEvent.preventDownshiftDefault}))}}function G7(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return function(e){t.forEach((function(t){"function"===typeof t?t(e):t&&(t.current=e)}))}}function J7(){return String(U7++)}function Q7(e){var t=e.isOpen,a=e.resultCount,l=e.previousResultCount;return t?a?a!==l?a+" result"+(1===a?" is":"s are")+" available, use up and down arrow keys to navigate. Press Enter key to select.":"":"No results are available.":""}function $7(e,t){return Object.keys(e).reduce((function(a,l){return a[l]=eee(t,l)?t[l]:e[l],a}),{})}function eee(e,t){return void 0!==e[t]}function tee(e){var t=e.key,a=e.keyCode;return a>=37&&a<=40&&0!==t.indexOf("Arrow")?"Arrow"+t:t}function aee(e,t,a,l,r){if(void 0===r&&(r=!0),0===a)return-1;var s=a-1;("number"!==typeof t||t<0||t>=a)&&(t=e>0?-1:s+1);var n=t+e;n<0?n=r?s:0:n>s&&(n=r?0:s);var o=lee(e,n,a,l,r);return-1===o?t>=a?-1:t:o}function lee(e,t,a,l,r){var s=l(t);if(!s||!s.hasAttribute("disabled"))return t;if(e>0){for(var n=t+1;n<a;n++)if(!l(n).hasAttribute("disabled"))return n}else for(var o=t-1;o>=0;o--)if(!l(o).hasAttribute("disabled"))return o;return r?e>0?lee(1,0,a,l,!1):lee(-1,a-1,a,l,!1):-1}function ree(e,t,a,l){return void 0===l&&(l=!0),t.some((function(t){return t&&(Z7(t,e,a)||l&&Z7(t,a.document.activeElement,a))}))}var see=Y7((function(e){oee(e).textContent=""}),500);function nee(e,t){var a=oee(t);e&&(a.textContent=e,see(t))}function oee(e){void 0===e&&(e=document);var t=e.getElementById("a11y-status-message");return t||((t=e.createElement("div")).setAttribute("id","a11y-status-message"),t.setAttribute("role","status"),t.setAttribute("aria-live","polite"),t.setAttribute("aria-relevant","additions text"),Object.assign(t.style,{border:"0",clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0",position:"absolute",width:"1px"}),e.body.appendChild(t),t)}var iee=["isInitialMount","highlightedIndex","items","environment"],uee={highlightedIndex:-1,isOpen:!1,selectedItem:null,inputValue:""};function cee(e,t,a){var l=e.props,r=e.type,s={};Object.keys(t).forEach((function(l){!function(e,t,a,l){var r=t.props,s=t.type,n="on"+gee(e)+"Change";r[n]&&void 0!==l[e]&&l[e]!==a[e]&&r[n](zi({type:s},l))}(l,e,t,a),a[l]!==t[l]&&(s[l]=a[l])})),l.onStateChange&&Object.keys(s).length&&l.onStateChange(zi({type:r},s))}var dee=Y7((function(e,t){nee(e(),t)}),200),fee="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?C.useLayoutEffect:C.useEffect;function hee(e){var t=e.id,a=void 0===t?"downshift-"+J7():t,l=e.labelId,r=e.menuId,s=e.getItemId,n=e.toggleButtonId,o=e.inputId;return(0,C.useRef)({labelId:l||a+"-label",menuId:r||a+"-menu",getItemId:s||function(e){return a+"-item-"+e},toggleButtonId:n||a+"-toggle-button",inputId:o||a+"-input"}).current}function pee(e,t,a){return void 0!==e?e:0===a.length?-1:a.indexOf(t)}function gee(e){return""+e.slice(0,1).toUpperCase()+e.slice(1)}function mee(e){var t=(0,C.useRef)(e);return t.current=e,t}function vee(e,t,a){var l=(0,C.useRef)(),r=(0,C.useRef)(),s=(0,C.useCallback)((function(t,a){r.current=a,t=$7(t,a.props);var l=e(t,a);return a.props.stateReducer(t,zi({},a,{changes:l}))}),[e]),n=(0,C.useReducer)(s,t),o=n[0],i=n[1],u=mee(a),c=(0,C.useCallback)((function(e){return i(zi({props:u.current},e))}),[u]),d=r.current;return(0,C.useEffect)((function(){d&&l.current&&l.current!==o&&cee(d,$7(l.current,d.props),o),l.current=o}),[o,a,d]),[o,c]}var bee={itemToString:function(e){return e?String(e):""},stateReducer:function(e,t){return t.changes},getA11ySelectionMessage:function(e){var t=e.selectedItem,a=e.itemToString;return t?a(t)+" has been selected.":""},scrollIntoView:X7,circularNavigation:!1,environment:"undefined"===typeof window?{}:window};function yee(e,t,a){void 0===a&&(a=uee);var l="default"+gee(t);return l in e?e[l]:a[t]}function wee(e,t,a){if(void 0===a&&(a=uee),t in e)return e[t];var l="initial"+gee(t);return l in e?e[l]:yee(e,t,a)}function kee(e){var t=wee(e,"selectedItem"),a=wee(e,"isOpen"),l=wee(e,"highlightedIndex"),r=wee(e,"inputValue");return{highlightedIndex:l<0&&t&&a?e.items.indexOf(t):l,isOpen:a,selectedItem:t,inputValue:r}}function xee(e,t,a,l){var r=e.items,s=e.initialHighlightedIndex,n=e.defaultHighlightedIndex,o=t.selectedItem,i=t.highlightedIndex;return 0===r.length?-1:void 0!==s&&i===s?s:void 0!==n?n:o?0===a?r.indexOf(o):aee(a,r.indexOf(o),r.length,l,!1):0===a?-1:a<0?r.length-1:0}function Cee(e,t,a,l){var r=(0,C.useRef)({isMouseDown:!1,isTouchMove:!1});return(0,C.useEffect)((function(){var s=function(){r.current.isMouseDown=!0},n=function(s){r.current.isMouseDown=!1,e&&!ree(s.target,t.map((function(e){return e.current})),a)&&l()},o=function(){r.current.isTouchMove=!1},i=function(){r.current.isTouchMove=!0},u=function(s){!e||r.current.isTouchMove||ree(s.target,t.map((function(e){return e.current})),a,!1)||l()};return a.addEventListener("mousedown",s),a.addEventListener("mouseup",n),a.addEventListener("touchstart",o),a.addEventListener("touchmove",i),a.addEventListener("touchend",u),function(){a.removeEventListener("mousedown",s),a.removeEventListener("mouseup",n),a.removeEventListener("touchstart",o),a.removeEventListener("touchmove",i),a.removeEventListener("touchend",u)}}),[e,a]),r}var Mee=function(){return q7};function Eee(e,t,a){var l=a.isInitialMount,r=a.highlightedIndex,s=a.items,n=a.environment,o=I7(a,iee);(0,C.useEffect)((function(){l||dee((function(){return e(zi({highlightedIndex:r,highlightedItem:s[r],resultCount:s.length},o))}),n.document)}),t)}function Nee(e){var t=e.highlightedIndex,a=e.isOpen,l=e.itemRefs,r=e.getItemNodeFromIndex,s=e.menuElement,n=e.scrollIntoView,o=(0,C.useRef)(!0);return fee((function(){t<0||!a||!Object.keys(l.current).length||(!1===o.current?o.current=!0:n(r(t),s))}),[t]),o}var Pee=q7;function jee(e,t,a){var l,r=t.type,s=t.props;switch(r){case a.ItemMouseMove:l={highlightedIndex:t.index};break;case a.MenuMouseLeave:l={highlightedIndex:-1};break;case a.ToggleButtonClick:case a.FunctionToggleMenu:l={isOpen:!e.isOpen,highlightedIndex:e.isOpen?-1:xee(s,e,0)};break;case a.FunctionOpenMenu:l={isOpen:!0,highlightedIndex:xee(s,e,0)};break;case a.FunctionCloseMenu:l={isOpen:!1};break;case a.FunctionSetHighlightedIndex:l={highlightedIndex:t.highlightedIndex};break;case a.FunctionSetInputValue:l={inputValue:t.inputValue};break;case a.FunctionReset:l={highlightedIndex:yee(s,"highlightedIndex"),isOpen:yee(s,"isOpen"),selectedItem:yee(s,"selectedItem"),inputValue:yee(s,"inputValue")};break;default:throw new Error("Reducer called without proper action type.")}return zi({},e,l)}Eu().array.isRequired,Eu().func,Eu().func,Eu().func,Eu().bool,Eu().number,Eu().number,Eu().number,Eu().bool,Eu().bool,Eu().bool,Eu().any,Eu().any,Eu().any,Eu().string,Eu().string,Eu().string,Eu().func,Eu().string,Eu().func,Eu().func,Eu().func,Eu().func,Eu().func,Eu().shape({addEventListener:Eu().func,removeEventListener:Eu().func,document:Eu().shape({getElementById:Eu().func,activeElement:Eu().any,body:Eu().any})});P(P({},bee),{getA11yStatusMessage:function(e){var t=e.isOpen,a=e.resultCount,l=e.previousResultCount;return t?a?a!==l?a+" result"+(1===a?" is":"s are")+" available, use up and down arrow keys to navigate. Press Enter or Space Bar keys to select.":"":"No results are available.":""}});var zee=Object.freeze({__proto__:null,InputKeyDownArrowDown:0,InputKeyDownArrowUp:1,InputKeyDownEscape:2,InputKeyDownHome:3,InputKeyDownEnd:4,InputKeyDownEnter:5,InputChange:6,InputBlur:7,MenuMouseLeave:8,ItemMouseMove:9,ItemClick:10,ToggleButtonClick:11,FunctionToggleMenu:12,FunctionOpenMenu:13,FunctionCloseMenu:14,FunctionSetHighlightedIndex:15,FunctionSelectItem:16,FunctionSetInputValue:17,FunctionReset:18,ControlledPropUpdatedSelectedItem:19});Eu().array.isRequired,Eu().func,Eu().func,Eu().func,Eu().bool,Eu().number,Eu().number,Eu().number,Eu().bool,Eu().bool,Eu().bool,Eu().any,Eu().any,Eu().any,Eu().string,Eu().string,Eu().string,Eu().string,Eu().string,Eu().string,Eu().func,Eu().string,Eu().string,Eu().func,Eu().func,Eu().func,Eu().func,Eu().func,Eu().func,Eu().shape({addEventListener:Eu().func,removeEventListener:Eu().func,document:Eu().shape({getElementById:Eu().func,activeElement:Eu().any,body:Eu().any})});var Tee=q7;var Lee=zi({},bee,{getA11yStatusMessage:Q7,circularNavigation:!0});function See(e,t){var a,l=t.type,r=t.props,s=t.shiftKey;switch(l){case 10:a={isOpen:yee(r,"isOpen"),highlightedIndex:yee(r,"highlightedIndex"),selectedItem:r.items[t.index],inputValue:r.itemToString(r.items[t.index])};break;case 0:a=e.isOpen?{highlightedIndex:aee(s?5:1,e.highlightedIndex,r.items.length,t.getItemNodeFromIndex,r.circularNavigation)}:{highlightedIndex:xee(r,e,1,t.getItemNodeFromIndex),isOpen:r.items.length>=0};break;case 1:a=e.isOpen?{highlightedIndex:aee(s?-5:-1,e.highlightedIndex,r.items.length,t.getItemNodeFromIndex,r.circularNavigation)}:{highlightedIndex:xee(r,e,-1,t.getItemNodeFromIndex),isOpen:r.items.length>=0};break;case 5:a=zi({},e.isOpen&&e.highlightedIndex>=0&&{selectedItem:r.items[e.highlightedIndex],isOpen:yee(r,"isOpen"),highlightedIndex:yee(r,"highlightedIndex"),inputValue:r.itemToString(r.items[e.highlightedIndex])});break;case 2:a=zi({isOpen:!1,highlightedIndex:-1},!e.isOpen&&{selectedItem:null,inputValue:""});break;case 3:a={highlightedIndex:lee(1,0,r.items.length,t.getItemNodeFromIndex,!1)};break;case 4:a={highlightedIndex:lee(-1,r.items.length-1,r.items.length,t.getItemNodeFromIndex,!1)};break;case 7:a=zi({isOpen:!1,highlightedIndex:-1},e.highlightedIndex>=0&&t.selectItem&&{selectedItem:r.items[e.highlightedIndex],inputValue:r.itemToString(r.items[e.highlightedIndex])});break;case 6:a={isOpen:!0,highlightedIndex:yee(r,"highlightedIndex"),inputValue:t.inputValue};break;case 16:a={selectedItem:t.selectedItem,inputValue:r.itemToString(t.selectedItem)};break;case 19:a={inputValue:t.inputValue};break;default:return jee(e,t,zee)}return zi({},e,a)}var Oee=["onMouseLeave","refKey","ref"],Aee=["item","index","refKey","ref","onMouseMove","onClick","onPress"],Vee=["onClick","onPress","refKey","ref"],Hee=["onKeyDown","onChange","onInput","onBlur","onChangeText","refKey","ref"],_ee=["refKey","ref"];function Bee(e){void 0===e&&(e={}),Tee(e,Bee);var t=zi({},Lee,e),a=t.initialIsOpen,l=t.defaultIsOpen,r=t.items,s=t.scrollIntoView,n=t.environment,o=t.getA11yStatusMessage,i=t.getA11ySelectionMessage,u=t.itemToString,c=function(e){var t=kee(e),a=t.selectedItem,l=t.inputValue;return""===l&&a&&void 0===e.defaultInputValue&&void 0===e.initialInputValue&&void 0===e.inputValue&&(l=e.itemToString(a)),zi({},t,{inputValue:l})}(t),d=function(e,t,a){var l=(0,C.useRef)(),r=vee(e,t,a),s=r[0],n=r[1];return(0,C.useEffect)((function(){eee(a,"selectedItem")&&(l.current!==a.selectedItem&&n({type:19,inputValue:a.itemToString(a.selectedItem)}),l.current=s.selectedItem===l.current?a.selectedItem:s.selectedItem)})),[$7(s,a),n]}(See,c,t),f=d[0],h=d[1],p=f.isOpen,g=f.highlightedIndex,m=f.selectedItem,v=f.inputValue,b=(0,C.useRef)(null),y=(0,C.useRef)({}),w=(0,C.useRef)(null),k=(0,C.useRef)(null),x=(0,C.useRef)(null),M=(0,C.useRef)(!0),E=hee(t),N=(0,C.useRef)(),P=mee({state:f,props:t}),j=(0,C.useCallback)((function(e){return y.current[E.getItemId(e)]}),[E]);Eee(o,[p,g,v,r],zi({isInitialMount:M.current,previousResultCount:N.current,items:r,environment:n,itemToString:u},f)),Eee(i,[m],zi({isInitialMount:M.current,previousResultCount:N.current,items:r,environment:n,itemToString:u},f));var z=Nee({menuElement:b.current,highlightedIndex:g,isOpen:p,itemRefs:y,scrollIntoView:s,getItemNodeFromIndex:j});Pee({isInitialMount:M.current,props:t,state:f}),(0,C.useEffect)((function(){(a||l||p)&&w.current&&w.current.focus()}),[]),(0,C.useEffect)((function(){M.current||(N.current=r.length)}));var T=Cee(p,[x,b,k],n,(function(){h({type:7,selectItem:!1})})),L=Mee();(0,C.useEffect)((function(){M.current=!1}),[]),(0,C.useEffect)((function(){p||(y.current={})}),[p]);var S=(0,C.useMemo)((function(){return{ArrowDown:function(e){e.preventDefault(),h({type:0,shiftKey:e.shiftKey,getItemNodeFromIndex:j})},ArrowUp:function(e){e.preventDefault(),h({type:1,shiftKey:e.shiftKey,getItemNodeFromIndex:j})},Home:function(e){P.current.state.isOpen&&(e.preventDefault(),h({type:3,getItemNodeFromIndex:j}))},End:function(e){P.current.state.isOpen&&(e.preventDefault(),h({type:4,getItemNodeFromIndex:j}))},Escape:function(){var e=P.current.state;(e.isOpen||e.inputValue||e.selectedItem||e.highlightedIndex>-1)&&h({type:2})},Enter:function(e){var t=P.current.state;!t.isOpen||t.highlightedIndex<0||229===e.which||(e.preventDefault(),h({type:5,getItemNodeFromIndex:j}))}}}),[h,P,j]),O=(0,C.useCallback)((function(e){return zi({id:E.labelId,htmlFor:E.inputId},e)}),[E]),A=(0,C.useCallback)((function(e,t){var a,l=void 0===e?{}:e,r=l.onMouseLeave,s=l.refKey,n=void 0===s?"ref":s,o=l.ref,i=I7(l,Oee),u=(void 0===t?{}:t).suppressRefError;return L("getMenuProps",void 0!==u&&u,n,b),zi(((a={})[n]=G7(o,(function(e){b.current=e})),a.id=E.menuId,a.role="listbox",a["aria-labelledby"]=E.labelId,a.onMouseLeave=K7(r,(function(){h({type:8})})),a),i)}),[h,L,E]),V=(0,C.useCallback)((function(e){var t,a,l=void 0===e?{}:e,r=l.item,s=l.index,n=l.refKey,o=void 0===n?"ref":n,i=l.ref,u=l.onMouseMove,c=l.onClick;l.onPress;var d=I7(l,Aee),f=P.current,p=f.props,g=f.state,m=pee(s,r,p.items);if(m<0)throw new Error("Pass either item or item index in getItemProps!");var v=c;return zi(((t={})[o]=G7(i,(function(e){e&&(y.current[E.getItemId(m)]=e)})),t.role="option",t["aria-selected"]=""+(m===g.highlightedIndex),t.id=E.getItemId(m),t),!d.disabled&&((a={onMouseMove:K7(u,(function(){s!==g.highlightedIndex&&(z.current=!1,h({type:9,index:s}))}))}).onClick=K7(v,(function(){h({type:10,index:s}),w.current&&w.current.focus()})),a),d)}),[h,P,z,E]),H=(0,C.useCallback)((function(e){var t,a=void 0===e?{}:e,l=a.onClick;a.onPress;var r=a.refKey,s=void 0===r?"ref":r,n=a.ref,o=I7(a,Vee);return zi(((t={})[s]=G7(n,(function(e){k.current=e})),t.id=E.toggleButtonId,t.tabIndex=-1,t),!o.disabled&&zi({},{onClick:K7(l,(function(){h({type:11}),!P.current.state.isOpen&&w.current&&w.current.focus()}))}),o)}),[h,P,E]),_=(0,C.useCallback)((function(e,t){var a,l=void 0===e?{}:e,r=l.onKeyDown,s=l.onChange,n=l.onInput,o=l.onBlur;l.onChangeText;var i=l.refKey,u=void 0===i?"ref":i,c=l.ref,d=I7(l,Hee),f=(void 0===t?{}:t).suppressRefError;L("getInputProps",void 0!==f&&f,u,w);var p,g=P.current.state,m={};d.disabled||((p={}).onChange=K7(s,n,(function(e){h({type:6,inputValue:e.target.value})})),p.onKeyDown=K7(r,(function(e){var t=tee(e);t&&S[t]&&S[t](e)})),p.onBlur=K7(o,(function(){g.isOpen&&!T.current.isMouseDown&&h({type:7,selectItem:!0})})),m=p);return zi(((a={})[u]=G7(c,(function(e){w.current=e})),a.id=E.inputId,a["aria-autocomplete"]="list",a["aria-controls"]=E.menuId,a),g.isOpen&&g.highlightedIndex>-1&&{"aria-activedescendant":E.getItemId(g.highlightedIndex)},{"aria-labelledby":E.labelId,autoComplete:"off",value:g.inputValue},m,d)}),[h,S,P,T,L,E]),B=(0,C.useCallback)((function(e,t){var a,l=void 0===e?{}:e,r=l.refKey,s=void 0===r?"ref":r,n=l.ref,o=I7(l,_ee),i=(void 0===t?{}:t).suppressRefError;return L("getComboboxProps",void 0!==i&&i,s,x),zi(((a={})[s]=G7(n,(function(e){x.current=e})),a.role="combobox",a["aria-haspopup"]="listbox",a["aria-owns"]=E.menuId,a["aria-expanded"]=P.current.state.isOpen,a),o)}),[P,L,E]),I=(0,C.useCallback)((function(){h({type:12})}),[h]),R=(0,C.useCallback)((function(){h({type:14})}),[h]),W=(0,C.useCallback)((function(){h({type:13})}),[h]),D=(0,C.useCallback)((function(e){h({type:15,highlightedIndex:e})}),[h]),F=(0,C.useCallback)((function(e){h({type:16,selectedItem:e})}),[h]);return{getItemProps:V,getLabelProps:O,getMenuProps:A,getInputProps:_,getComboboxProps:B,getToggleButtonProps:H,toggleMenu:I,openMenu:W,closeMenu:R,setHighlightedIndex:D,setInputValue:(0,C.useCallback)((function(e){h({type:17,inputValue:e})}),[h]),selectItem:F,reset:(0,C.useCallback)((function(){h({type:18})}),[h]),highlightedIndex:g,isOpen:p,selectedItem:m,inputValue:v}}Bee.stateChangeTypes=zee;Eu().array,Eu().array,Eu().array,Eu().func,Eu().func,Eu().func,Eu().number,Eu().number,Eu().number,Eu().func,Eu().func,Eu().string,Eu().string,Eu().shape({addEventListener:Eu().func,removeEventListener:Eu().func,document:Eu().shape({getElementById:Eu().func,activeElement:Eu().any,body:Eu().any})});const Iee=M.default.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: ${e=>e.height?e.height:"auto"};
  overflow: hidden;

  /* title of dropdown */
  .label {
    margin: 1rem 0;
    display: block;
  }

  /* input element of dropdown */
  .input-wrap {
    border: 1px solid ${fi};
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    box-sizing: border-box;
    border-radius: 1rem;
    padding: 0.1rem 0.75rem;
    margin: 0.25rem 0;
  }

  .input {
    border: none;
    box-sizing: border-box;
    padding-left: 0.75rem;
    flex-grow: 1;
  }
`,Ree=M.default.button`
  color: ${Xo};
  box-sizing: border-box;
  position: absolute;
  right: 0.5rem;
  top: 0.4rem;
  width: 2.2rem;
  height: 2.2rem;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`,Wee=M.default.div`
  border: 1px solid ${fi};
  position: relative;
  box-sizing: border-box;
  margin: 0.75rem 0 0;
  width: 100%;
  border-radius: 0.75rem;
  z-index: 1;
  height: 148px;
  padding: 0.25rem;
  overflow: auto;
  display: flex;
  flex-flow: row wrap;
  flex: 1;
  border-radius: 1rem;

  .wrapper {
    position: relative;
    width: 240px;
    height: 130px;
    margin: 0.25rem;

    .item {
      background: ${ui};
      position: relative;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      padding: 0.65rem 1rem;
      cursor: pointer;
      border-radius: 0.75rem;
      display: flex;
      flex-flow: column wrap;
      justify-content: center;
      align-items: flex-start;
      flex-grow: 1;
      overflow: hidden;

      > .title {
        box-sizing: border-box;
        display: flex;
        flex-flow: row wrap;
        max-width: 100%;
        h3 {
          box-sizing: border-box;
          display: inline-block;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
      }

      &:first-child {
        margin-left: 0rem;
      }
      &:last-child {
        margin-right: 0rem;
      }
      p {
        color: ${Xo};
        margin: 0.15rem 0 0;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        flex: 1;
      }
      .icon {
        margin-bottom: 0.7rem;
      }
    }
  }
`,Dee=e=>{var t;const{items:a,onChange:l,placeholder:r,value:s}=e,[n,o]=(0,C.useState)(a),i=Bee({items:n,itemToString:e=>e?e.meta.name:"",onSelectedItemChange:l,initialSelectedItem:s,onInputValueChange:e=>{let{inputValue:t}=e;o(a.filter((e=>e.meta.name.toLowerCase().startsWith(t.toLowerCase()))))}});return(0,Sd.jsx)(Iee,{children:(0,Sd.jsx)("div",{children:(0,Sd.jsxs)("div",{style:{position:"relative"},children:[(0,Sd.jsxs)("div",{className:"input-wrap",...i.getComboboxProps(),children:[null!==s&&(0,Sd.jsx)(I9,{value:null!==(t=null===s||void 0===s?void 0:s.address)&&void 0!==t?t:"",size:nK("2rem")}),(0,Sd.jsx)("input",{...i.getInputProps({placeholder:r}),className:"input"})]}),i.selectedItem&&(0,Sd.jsx)(Ree,{onClick:()=>i.selectItem(null),"aria-label":"clear selection",children:(0,Sd.jsx)(o5,{transform:"grow-2",icon:Nd})}),(0,Sd.jsx)(Wee,{...i.getMenuProps(),children:n.map(((e,t)=>(0,Sd.jsx)(Fee,{c:i,item:e,index:t},`controller_acc_${t}`)))})]})})})},Fee=e=>{var t,a;let{c:l,item:r,index:s}=e;const{mode:n}=U2(),o=r.active?l.getItemProps({index:s,item:r}):{},i=(null===(t=l.selectedItem)||void 0===t?void 0:t.address)===(null===r||void 0===r?void 0:r.address)?Wo.primary[n]:Wo.text.primary[n],u=(null===(a=l.selectedItem)||void 0===a?void 0:a.address)===(null===r||void 0===r?void 0:r.address)?`2px solid ${Wo.primary[n]}`:`2px solid ${Wo.transparent[n]}`,c=r.active?1:.1;return(0,Sd.jsxs)("div",{className:"wrapper",...o,children:[!r.active&&(0,Sd.jsx)(c5,{status:"sync_or_setup",title:r.alert,topOffset:"40%"}),(0,Sd.jsxs)("div",{className:"item",style:{color:i,border:u,opacity:c},children:[(0,Sd.jsx)("div",{className:"icon",children:(0,Sd.jsx)(I9,{value:r.address,size:40})}),(0,Sd.jsx)("h3",{style:{color:i},children:r.meta.name}),(0,Sd.jsx)("p",{children:sK(r.address)})]})]},r.meta.name)},Uee=e=>{const{section:t}=e,{network:a}=rK(),{units:l}=a,{activeAccount:r,accounts:s,getAccount:n}=kK(),{getBondedAccount:o,getAccountBalance:i,minReserve:u,isController:c}=TK(),{getSetupProgress:d,setActiveAccountSetup:f}=DK(),h=o(r),p=d(r),g=null!==p.controller?p.controller:h,m=n(g),[v,b]=(0,C.useState)(m);(0,C.useEffect)((()=>{const e=null!==p.controller?p.controller:h,t=n(e);b(t)}),[r]);let y=s.filter((e=>!c(e.address)));return y=y.filter((e=>e.address!==r)),y=y.map((e=>{const t=i(e.address);return{...e,balance:t,active:iK(t.free.toNumber(),l)>=iK(u.toNumber(),l),alert:`Not Enough ${a.unit}`}})),y=y.sort(((e,t)=>t.balance.free.sub(e.balance.free).toNumber())),(0,Sd.jsx)(Sd.Fragment,{children:(0,Sd.jsxs)(Ad,{transparent:!0,children:[(0,Sd.jsx)(V7,{thisSection:t,title:"Set Controller Account",assistantPage:"stake",assistantKey:"Stash and Controller Accounts",complete:null!==p.controller}),(0,Sd.jsxs)(_7,{thisSection:t,activeSection:p.section,children:[(0,Sd.jsx)(a7,{}),(0,Sd.jsx)(Dee,{items:y,onChange:e=>{var t;let{selectedItem:a}=e;b(a),f({...p,controller:null!==(t=null===a||void 0===a?void 0:a.address)&&void 0!==t?t:null})},placeholder:"Search Account",value:v}),(0,Sd.jsx)(H7,{complete:null!==p.controller})]})]})})},qee=M.default.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: flex-end;

  > div:last-child {
    height: 100%;
    flex-grow: 1;
    display: flex;
    flex-flow: row wrap;
    align-items: flex-end;
    padding: 0.5rem 1rem;
  }
`,Xee=M.default.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;

  > section {
    flex: 1;

    h3 {
      margin: 0;
    }

    input {
      max-width: 100%;
      margin-top: 0.5rem;
      border: none;
      background: ${ai};
      border-radius: 0.75rem;
      padding: 0.75rem;
    }
  }
`,Zee=e=>{var t,a,l;const r=null!==(t=e.setters)&&void 0!==t?t:[],{disabled:s}=e,n=null!==(a=e.task)&&void 0!==a?a:"bond",o=null!==(l=e.value)&&void 0!==l?l:null,{network:i}=rK(),{units:u}=i,{activeAccount:c}=kK(),{staking:d}=_K(),{minNominatorBond:f}=d,{getBondOptions:h}=TK(),{freeToBond:p,freeToUnbond:g}=h(c),m=Math.max(g-uK(f,u),0),[v,b]=(0,C.useState)(o),y=e=>{for(const t of r)t.set({...t.current,bond:e})};return(0,C.useEffect)((()=>{var t;b(null!==(t=e.defaultValue)&&void 0!==t?t:0)}),[c]),(0,Sd.jsxs)(qee,{children:[(0,Sd.jsx)("div",{children:(0,Sd.jsx)(Xee,{children:(0,Sd.jsxs)("section",{style:{opacity:s?.5:1},children:[(0,Sd.jsxs)("h3",{children:["unbond"===n?"Unbond":"Bond"," ",i.unit,":"]}),(0,Sd.jsx)("input",{type:"text",placeholder:`0 ${i.unit}`,value:v,onChange:e=>{"bond"===n?(e=>{const{value:t}=e.target;(gK(t)||""===t)&&(b(t),y(t))})(e):(e=>{const{value:t}=e.target;(gK(t)||""===t)&&(b(t),y(t))})(e)},disabled:s})]})})}),(0,Sd.jsx)("div",{children:(0,Sd.jsx)("div",{children:(0,Sd.jsx)(y7,{inline:!0,small:!0,title:"Max",onClick:()=>{const e="bond"===n?p:m;b(e),y(e)}})})})]})},Yee=M.default.div`
  width: 100%;
  height: 1px;
  margin: 0.75rem 0;
`,Kee=M.default.div`
  background: ${ai};
  margin: 0.6rem 0;
  padding: 0.5rem 1rem;
  border-radius: 0.75rem;
  display: flex;
  flex-flow: row wrap;
  align-items: center;

  > h4 {
    margin: 0;

    .icon {
      color: rgba(255, 144, 0, 1);
      margin-right: 0.4rem;
    }
  }
`,Gee=e=>{const{text:t}=e;return(0,Sd.jsx)(Kee,{children:(0,Sd.jsxs)("h4",{children:[(0,Sd.jsx)(o5,{icon:pd,transform:"shrink-2",className:"icon"}),t]})})},Jee=e=>{var t,a,l;const{defaultBond:r,unbond:s}=e,n=null!==(t=e.nominating)&&void 0!==t&&t,o=null!==(a=e.setters)&&void 0!==a?a:[],i=null!==(l=e.listenIsValid)&&void 0!==l?l:()=>{},{network:u}=rK(),{activeAccount:c}=kK(),{staking:d,getControllerNotImported:f}=_K(),{getAccountLedger:h,getBondedAccount:p,getBondOptions:g}=TK(),{freeToBond:m,freeToUnbond:v}=g(c),b=p(c),y=h(b),{units:w}=u,{active:k}=y,{minNominatorBond:x}=d,M=uK(k,w),E=uK(x,w),N=Math.max(v-uK(x,w),0),[P,j]=(0,C.useState)([]),[z,T]=(0,C.useState)({bond:r}),[L,S]=(0,C.useState)(!1);o.push({set:T,current:z}),(0,C.useEffect)((()=>{T({bond:r})}),[c]),(0,C.useEffect)((()=>{O()}),[z]);const O=()=>{let e=!1;const t=[];if(s||(0===m&&(e=!0,t.push(`You have no free ${u.unit} to bond.`)),""!==z.bond&&z.bond>m&&t.push("Bond amount is more than your free balance."),n&&(m<E&&(e=!0,t.push(`You do not meet the minimum nominator bond of ${E} ${u.unit}.`)),""!==z.bond&&z.bond<E&&t.push(`Bond amount must be at least ${E} ${u.unit}.`))),s)if(f(b)&&t.push("You must have your controller account imported to unbond."),""!==z.bond&&z.bond>M)t.push("Unbond amount is more than your bonded balance.");else if(""!==z.bond&&z.bond>N){const e=(z.bond-N).toFixed(2);t.push(`A minimum bond of ${E} ${u.unit} is required when actively nominating. Removing this amount will result in ~${e} ${u.unit} remaining bond.`)}const a=!t.length&&""!==z.bond;S(e),i(a),j(t)};return(0,Sd.jsxs)(Sd.Fragment,{children:[(0,Sd.jsx)("div",{className:"head",children:(0,Sd.jsxs)("h4",{children:[s?"Bonded":"Available",":"," ",cK(s?M:m)," ",u.unit]})}),P.map(((e,t)=>(0,Sd.jsx)(Gee,{text:e},`setup_error_${t}`))),(0,Sd.jsx)(Yee,{}),(0,Sd.jsx)(Zee,{task:s?"unbond":"bond",value:z.bond,defaultValue:r,disabled:L,setters:o})]})},Qee=M.default.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-end;
  margin-top: 1rem;

  .bars {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: flex-end;
    margin-top: 1rem;

    > section {
      box-sizing: border-box;
      padding: 0 0.15rem;

      &:nth-child(1) {
        flex-basis: 15%;
      }
      &:nth-child(2) {
        flex-basis: 40%;
      }
      &:nth-child(3) {
        flex-basis: 45%;
      }
      h4,
      h5 {
        color: ${Zo};
      }

      h4 {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        margin-bottom: 0.4rem;
      }
      h5 {
        margin: 0;
        position: relative;
        opacity: 0.75;
      }
      .bar {
        background: ${ai};
        width: 100%;
        padding: 0.4rem 0.5rem;
        overflow: hidden;
        position: relative;
        transition: background 0.15s;
      }
      &:first-child .bar {
        border-top-left-radius: 1rem;
        border-bottom-left-radius: 1rem;
        h5 {
          margin-left: 0.25rem;
        }
      }
      &:last-child .bar {
        border-top-right-radius: 1rem;
        border-bottom-right-radius: 1rem;
      }

      &.invert {
        h4 {
          color: ${Uo};
        }
        h5 {
          opacity: 1;
          color: white;
        }
        .bar {
          background: ${qo};
        }
      }
    }
  }
`,$ee=e=>{const{value:t}=e,{network:a}=rK(),{staking:l,eraStakers:r}=_K(),{isSyncing:s}=DK(),{unit:n,units:o}=a,{minNominatorBond:i}=l,{minActiveBond:u}=r,c=i.div(new(_d())(10**o)).toNumber(),d=t>=c,f=t>=u;return(0,Sd.jsx)(Qee,{children:(0,Sd.jsxs)("div",{className:"bars",children:[(0,Sd.jsxs)("section",{className:d&&!s?"invert":"",children:[(0,Sd.jsx)("h4",{children:"\xa0"}),(0,Sd.jsx)("div",{className:"bar",children:(0,Sd.jsx)("h5",{children:"Inactive"})})]}),(0,Sd.jsxs)("section",{className:d&&!s?"invert":"",children:[(0,Sd.jsxs)("h4",{children:[(0,Sd.jsx)(o5,{icon:F5,transform:"shrink-4"}),"\xa0 Nominate",(0,Sd.jsx)(S5,{page:"stake",title:"Nominating"})]}),(0,Sd.jsx)("div",{className:"bar",children:(0,Sd.jsxs)("h5",{children:[c," ",n]})})]}),(0,Sd.jsxs)("section",{className:f&&!s?"invert":"",children:[(0,Sd.jsxs)("h4",{children:[(0,Sd.jsx)(o5,{icon:F5,transform:"shrink-4"}),"\xa0 Active",(0,Sd.jsx)(S5,{page:"stake",title:"Active Bond Threshold"})]}),(0,Sd.jsx)("div",{className:"bar",children:(0,Sd.jsx)("h5",{children:s?"...":`${u} ${n}`})})]})]})})},ete=e=>{const{section:t}=e,{activeAccount:a}=kK(),{getBondOptions:l}=TK(),{getSetupProgress:r,setActiveAccountSetup:s}=DK(),{freeToBond:n}=l(a),o=r(a),i=0===o.bond?n:o.bond,[u,c]=(0,C.useState)({bond:i}),[d,f]=(0,C.useState)(!1);return(0,C.useEffect)((()=>{c({bond:o.bond})}),[a]),(0,Sd.jsxs)(Ad,{transparent:!0,children:[(0,Sd.jsx)(V7,{thisSection:t,complete:0!==o.bond,title:"Bond",assistantPage:"stake",assistantKey:"Bonding"}),(0,Sd.jsxs)(_7,{thisSection:t,activeSection:o.section,children:[(0,Sd.jsx)(Jee,{nominating:!0,unbond:!1,listenIsValid:f,defaultBond:i,setters:[{set:s,current:o},{set:c,current:u}]}),(0,Sd.jsx)($ee,{value:u.bond}),(0,Sd.jsx)(H7,{complete:d})]})]})},tte=M.default.div`
  position: relative;
  box-sizing: border-box;
  margin: 0.75rem 0 0;
  width: 100%;
  border-radius: 0.75rem;
  padding: 0.25rem;
  overflow: auto;
  display: flex;
  flex-flow: row wrap;
  flex: 1;
`,ate=M.default.button`
  background: ${ui};
  border: 2px solid ${e=>e.selected?Uo:ui};
  box-sizing: border-box;
  width: 240px;
  height: 120px;
  padding: 1.25rem;
  margin: 0.25rem;
  border-radius: 0.75rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 1;

  > div {
    width: 100%;
  }
  h3 {
    color: ${e=>e.selected?Uo:Xo};
    font-size: 1.2rem;
  }
  &:first-child {
    margin-left: 0rem;
  }
  &:last-child {
    margin-right: 0rem;
  }
  p {
    color: ${Zo};
    margin-top: 0.4rem;
    text-align: left;
  }
`,lte=e=>{const{section:t}=e,{activeAccount:a}=kK(),{getSetupProgress:l,setActiveAccountSetup:r}=DK(),s=l(a),n=["Staked","Stash","Controller"],[o,i]=(0,C.useState)(s.payee);(0,C.useEffect)((()=>{i(s.payee)}),[a]);return(0,Sd.jsxs)(Ad,{transparent:!0,children:[(0,Sd.jsx)(V7,{thisSection:t,complete:null!==s.payee,title:"Reward Destination",assistantPage:"stake",assistantKey:"Reward Destination"}),(0,Sd.jsxs)(_7,{thisSection:t,activeSection:s.section,children:[(0,Sd.jsx)(a7,{}),(0,Sd.jsx)(tte,{children:[{title:"Back to Staking",subtitle:"Payouts are automatically bonded to your existing bonded balance.",index:0},{title:"To Stash",subtitle:"Payouts will be sent to your stash account as free balance.",index:1},{title:"To Controller",subtitle:"Payouts will be sent to your controller account as free balance.",index:2}].map(((e,t)=>(0,Sd.jsxs)(ate,{selected:o===n[e.index],onClick:()=>{return t=e.index,void(gK(t)&&(t>=n.length||(i(n[t]),r({...s,payee:n[t]}))));var t},children:[(0,Sd.jsx)("h3",{children:e.title}),(0,Sd.jsx)("div",{children:(0,Sd.jsx)("p",{children:e.subtitle})})]},`payee_option_${t}`)))}),(0,Sd.jsx)(H7,{complete:null!==s.payee})]})]})},rte=M.default.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 1rem;

  > section {
    flex-basis: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: flex-end;
    border-bottom: 1px solid ${fi};
    margin-top: 1rem;
    padding: 0.5rem 0 0.75rem 0;

    > div:first-child {
      width: 200px;
      display: flex;
      flex-flow: row wrap;
      align-items: flex-end;

      svg {
        color: ${Uo};
      }
    }

    > div:last-child {
      flex-grow: 1;
      display: flex;
      flex-flow: row wrap;
      align-items: center;
    }
  }
`,ste=C.createContext({addPending:e=>{},removePending:e=>{},pending:[]}),nte=()=>C.useContext(ste),ote=e=>{const{tx:t,from:a,shouldSubmit:l,callbackSubmit:r,callbackInBlock:s}=e,{api:n}=rK(),{addNotification:o}=W9(),{addPending:i,removePending:u}=nte(),[c,d]=(0,C.useState)(!1),[f,h]=(0,C.useState)(null);(0,C.useEffect)((()=>{p()}),[e]);const p=async()=>{if(null===t)return;const e=await t.paymentInfo(a);h(e.partialFee.toHuman())};return{submitTx:async()=>{if(c||!l)return;const e=await n.rpc.system.accountNextIndex(a),f=await ox(a);d(!0);try{const l=await t.signAndSend(a,{signer:f.signer},(t=>{let{status:a,nonce:n,events:c=[]}=t;a.isReady&&(i(e),o({title:"Pending",subtitle:"Transaction was initiated."}),r()),a.isInBlock&&(d(!1),u(e),o({title:"In Block",subtitle:"Transaction in block"}),s()),a.isFinalized&&c.forEach((t=>{let{phase:a,event:{data:r,method:s,section:n}}=t;"ExtrinsicSuccess"===s?(o({title:"Finalized",subtitle:"Transaction successful"}),l()):"ExtrinsicFailed"===s&&(o({title:"Failed",subtitle:"Error with transaction"}),d(!1),u(e),l())}))}))}catch(W7){d(!1),u(e),o({title:"Cancelled",subtitle:"Transaction was cancelled"})}},estimatedFee:f,submitting:c}},ite=e=>{const{section:t}=e,{api:a,network:l}=rK(),{units:r}=l,{activeAccount:s,activeWallet:n}=kK(),{getSetupProgress:o}=DK(),i=o(s),{controller:u,bond:c,nominations:d,payee:f}=i,{submitTx:h,estimatedFee:p,submitting:g}=ote({tx:(()=>{if(""===s||null===n)return null;const e={Id:s},t=c*10**r,l=d.map((e=>({Id:e.address}))),o={Id:u},i=[a.tx.staking.bond(e,t,f),a.tx.staking.nominate(l),a.tx.staking.setController(o)];return a.tx.utility.batch(i)})(),from:s,shouldSubmit:!0,callbackSubmit:()=>{},callbackInBlock:()=>{}});return(0,Sd.jsxs)(Ad,{transparent:!0,children:[(0,Sd.jsx)(V7,{thisSection:t,complete:null,title:"Summary"}),(0,Sd.jsxs)(_7,{thisSection:t,activeSection:i.section,children:[(0,Sd.jsxs)(rte,{children:[(0,Sd.jsxs)("section",{children:[(0,Sd.jsxs)("div",{children:[(0,Sd.jsx)(o5,{icon:R5,transform:"grow-1"})," ","\xa0 Controller:"]}),(0,Sd.jsx)("div",{children:u})]}),(0,Sd.jsxs)("section",{children:[(0,Sd.jsxs)("div",{children:[(0,Sd.jsx)(o5,{icon:R5,transform:"grow-1"})," ","\xa0 Reward Destination:"]}),(0,Sd.jsx)("div",{children:f})]}),(0,Sd.jsxs)("section",{children:[(0,Sd.jsxs)("div",{children:[(0,Sd.jsx)(o5,{icon:R5,transform:"grow-1"})," ","\xa0 Nominations:"]}),(0,Sd.jsx)("div",{children:d.length})]}),(0,Sd.jsxs)("section",{children:[(0,Sd.jsxs)("div",{children:[(0,Sd.jsx)(o5,{icon:R5,transform:"grow-1"})," ","\xa0 Bond Amount:"]}),(0,Sd.jsxs)("div",{children:[cK(c)," ",l.unit]})]}),(0,Sd.jsxs)("section",{children:[(0,Sd.jsx)("div",{children:"Estimated Tx Fee:"}),(0,Sd.jsx)("div",{children:null===p?"...":`${p}`})]})]}),(0,Sd.jsx)("div",{style:{flex:1,width:"100%",display:"flex"},children:(0,Sd.jsx)(b7,{margin:"0",padding:"0.75rem 1.2rem",fontSize:"1.1rem",onClick:()=>h(),disabled:g,children:"Start Staking"})})]})]})},ute=e=>{let{title:t}=e;const{setOnSetup:a}=DK();return(0,Sd.jsxs)(Sd.Fragment,{children:[(0,Sd.jsx)(B5,{title:`${t} Setup`}),(0,Sd.jsx)(Ei,{className:"page-padding",noVerticalSpacer:!0,children:(0,Sd.jsx)($9,{children:(0,Sd.jsx)(y7,{inline:!0,title:"Go Back",icon:_c,transform:"shrink-3",onClick:()=>a(0)})})}),(0,Sd.jsx)(Ei,{className:"page-padding",noVerticalSpacer:!0,children:(0,Sd.jsxs)(Ad,{children:[(0,Sd.jsx)(A7.W_,{name:"controller",style:{position:"absolute"}}),(0,Sd.jsx)(Uee,{section:1})]})}),(0,Sd.jsx)(Ei,{className:"page-padding",noVerticalSpacer:!0,children:(0,Sd.jsxs)(Ad,{children:[(0,Sd.jsx)(A7.W_,{name:"payee",style:{position:"absolute"}}),(0,Sd.jsx)(lte,{section:2})]})}),(0,Sd.jsx)(Ei,{className:"page-padding",noVerticalSpacer:!0,children:(0,Sd.jsxs)(Ad,{children:[(0,Sd.jsx)(A7.W_,{name:"nominate",style:{position:"absolute"}}),(0,Sd.jsx)(B7,{section:3})]})}),(0,Sd.jsx)(Ei,{className:"page-padding",noVerticalSpacer:!0,children:(0,Sd.jsxs)(Ad,{children:[(0,Sd.jsx)(A7.W_,{name:"bond",style:{position:"absolute"}}),(0,Sd.jsx)(ete,{section:4})]})}),(0,Sd.jsx)(Ei,{className:"page-padding",noVerticalSpacer:!0,children:(0,Sd.jsxs)(Ad,{children:[(0,Sd.jsx)(A7.W_,{name:"summary",style:{position:"absolute"}}),(0,Sd.jsx)(ite,{section:5})]})})]})},cte=e=>{const{page:t}=e,{title:a}=t,{onSetup:l,setOnSetup:r}=DK();return(0,Sd.jsx)(Q9,{children:l?(0,Sd.jsx)(ute,{title:a,setOnSetup:r}):(0,Sd.jsx)(O7,{title:a,setOnSetup:r})})},dte=(0,M.default)(co.div)`
  padding: 0.5rem;
  display: flex;
  flex-flow: row nowrap;
  width: 100%;

  > div {
    padding: 0.75rem 0.6rem;
    flex: 1;
    background: ${ti};
    border-radius: 0.75rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    flex: 1;
    max-width: 100%;

    h3 {
      margin: 0 0.75rem;
      border-right: 1px solid ${hi};
      padding-right: 1rem;
    }

    .identity {
      position: relative;
      display: flex;
      margin-left: 0.75rem;
      margin-right: 0.5rem;
      flex-flow: row wrap;
      align-items: center;
      align-content: center;
      overflow: hidden;
      flex: 1;

      h4 {
        margin: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .labels {
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-end;
      align-items: center;
      flex-grow: 1;

      .label {
        margin-left: 0.5rem;
        color: ${Zo};

        &.warning {
          color: #d2545d;
          display: flex;
          flex-flow: row wrap;
          align-items: center;
        }
        button {
          color: ${Zo};
          &:hover {
            color: #666;
          }
          &.active {
            color: rgba(211, 48, 121, 0.85);
          }
        }
      }
    }

    svg {
      margin: 0;
    }
  }
`,fte=e=>{const{initial:t,pool:a}=e,{memberCounter:l,addresses:r,id:s}=a;return(0,Sd.jsx)(dte,{children:(0,Sd.jsxs)("div",{children:[(0,Sd.jsx)("h3",{children:s.toNumber()}),(0,Sd.jsx)(I9,{value:r.stash,size:26}),t?(0,Sd.jsx)(co.div,{className:"identity",initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},children:(0,Sd.jsx)("h4",{children:sK(r.stash)})}):(0,Sd.jsx)("div",{className:"identity",children:(0,Sd.jsx)("h4",{children:sK(r.stash)})}),(0,Sd.jsx)("div",{className:"labels",children:(0,Sd.jsx)(co.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.1},children:(0,Sd.jsxs)("div",{className:"label",children:[(0,Sd.jsx)(o5,{icon:Cd}),"\xa0 ",l]})})})]})})},hte=e=>(0,Sd.jsx)(fte,{...e}),pte=e=>{var t;const{isReady:a}=rK(),{metrics:l}=MK(),{setListFormat:r,listFormat:s}=DK(),{allowMoreCols:n,pagination:o}=e,i=null!==(t=e.disableThrottle)&&void 0!==t&&t,[u,c]=(0,C.useState)(1),[d,f]=(0,C.useState)(1),[h,p]=(0,C.useState)(e.pools),[g,m]=(0,C.useState)(e.pools),[v,b]=(0,C.useState)(!0),[y,w]=(0,C.useState)(!1),k=(0,C.useRef)(d),x=Math.ceil(g.length/Oo),M=u+1>x?x:u+1,E=u-1<1?1:u-1,N=u*Oo-1,P=N-49,j=30*d-1;(0,C.useEffect)((()=>{w(!1)}),[e.pools]),(0,C.useEffect)((()=>{a&&0!==l.activeEra.index&&!y&&(p(e.pools),m(e.pools),b(!0),w(!0))}),[a,y,l.activeEra.index]),(0,C.useEffect)((()=>{j>=N||i||setTimeout((()=>{var e;e=k.current+1,k.current=e,f(e)}),500)}),[k.current]);let z=[];return z=i?g:g.slice(P).slice(0,Oo),g.length?(0,Sd.jsxs)(r7,{children:[(0,Sd.jsxs)(s7,{children:[(0,Sd.jsx)("div",{children:(0,Sd.jsx)("h4",{children:e.title})}),(0,Sd.jsxs)("div",{children:[(0,Sd.jsx)("button",{type:"button",onClick:()=>r("row"),children:(0,Sd.jsx)(o5,{icon:Sc,color:"row"===s?"#d33079":"inherit"})}),(0,Sd.jsx)("button",{type:"button",onClick:()=>r("col"),children:(0,Sd.jsx)(o5,{icon:Qc,color:"col"===s?"#d33079":"inherit"})})]})]}),(0,Sd.jsxs)(o7,{flexBasisLarge:n?"33.33%":"50%",children:[o&&(0,Sd.jsxs)(n7,{prev:1!==u,next:u!==x,children:[(0,Sd.jsx)("div",{children:(0,Sd.jsxs)("h4",{children:["Page",u," of ",x]})}),(0,Sd.jsxs)("div",{children:[(0,Sd.jsx)("button",{type:"button",className:"prev",onClick:()=>{c(E),b(!1)},children:"Prev"}),(0,Sd.jsx)("button",{type:"button",className:"next",onClick:()=>{c(M),b(!1)},children:"Next"})]})]}),(0,Sd.jsx)(co.div,{className:"transition",initial:"hidden",animate:"show",variants:{hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:.01}}},children:z.map(((e,t)=>(0,Sd.jsx)(co.div,{className:"item "+("row"===s?"row":"col"),variants:{hidden:{y:15,opacity:0},show:{y:0,opacity:1}},children:(0,Sd.jsx)(hte,{pool:e,initial:v})},`nomination_${t}`)))})]})]}):(0,Sd.jsx)(Sd.Fragment,{})};class gte extends C.Component{shouldComponentUpdate(e,t){return this.props.pools!==e.pools}render(){return(0,Sd.jsx)(pte,{...this.props})}}gte.contextType=HK;function mte(e){return"number"===typeof e}function vte(e){return Object.keys(e)}function bte(e){for(let t=0;t<(arguments.length<=1?0:arguments.length-1);t++){const a=t+1<1||arguments.length<=t+1?void 0:arguments[t+1];if(a){const t=vte(a);for(let l=0;l<t.length;l++){const r=t[l];e[r]=a[r]}}}return e}function yte(e){return"boolean"===typeof e}function wte(e){return"function"===typeof e}function kte(e){return!!e&&"object"===typeof e}function xte(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return e=>(kte(e)||wte(e))&&t.every((t=>wte(e[t])))}const Cte=xte("toBigInt"),Mte=xte("toBn");function Ete(e){return e?Hd.isBN(e)?e:Iy(e)?function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!e||"0x"===e)return new Hd(0);const{isLe:a,isNegative:l}=bte({isLe:!1,isNegative:!1},yte(t)?{isLe:t}:t),r=Ry(e),s=new Hd(r,16,a?"le":"be");return l?s.fromTwos(4*r.length):s}(e.toString()):function(e){return"bigint"===typeof e}(e)?new Hd(e.toString()):Mte(e)?e.toBn():Cte(e)?new Hd(e.toBigInt().toString()):new Hd(e):new Hd(0)}const Nte={bitLength:-1,isLe:!0,isNegative:!1};const Pte={counterForPoolMembers:new(_d())(0),counterForBondedPools:new(_d())(0),counterForRewardPools:new(_d())(0),maxPoolMembers:new(_d())(0),maxPoolMembersPerPool:new(_d())(0),maxPools:new(_d())(0),minCreateBond:new(_d())(0),minJoinBond:new(_d())(0)},jte=new Uint8Array(32),zte=Gy("modl"),Tte={bitLength:32,isLe:!0},Lte=C.createContext({membership:void 0,enabled:0,stats:Pte,bondedPools:[]}),Ste=()=>C.useContext(Lte),Ote=()=>{const{stats:e}=Ste(),t={label:"Active Pools",value:e.counterForBondedPools.toNumber(),unit:"",assistant:{page:"pools",key:"Nomination Pools"}};return(0,Sd.jsx)(U9,{...t})},Ate=()=>{const{network:e}=rK(),{units:t}=e,{stats:a}=Ste(),l={label:"Minimum Join Bond",value:uK(a.minJoinBond,t),unit:e.unit,assistant:{page:"pools",key:"Minimum Join Bond"}};return(0,Sd.jsx)(U9,{...l})},Vte=()=>{const{network:e}=rK(),{units:t}=e,{stats:a}=Ste(),l={label:"Minimum Create Bond",value:uK(a.minCreateBond,t),unit:e.unit,assistant:{page:"pools",key:"Minimum Create Bond"}};return(0,Sd.jsx)(U9,{...l})},Hte=()=>{const{network:e}=rK(),{activeAccount:t}=kK(),{membership:a}=Ste(),{openModalWith:l}=yK();return(0,Sd.jsx)(Ad,{style:{height:350},children:(0,Sd.jsxs)("div",{className:"head",children:[(0,Sd.jsxs)("h4",{children:["Status",(0,Sd.jsx)(S5,{page:"pools",title:"Pool Status"})]}),(0,Sd.jsxs)("h2",{children:[void 0===a?"Not in a Pool":"Active in Pool"," \xa0",(0,Sd.jsx)("div",{children:void 0===a?(0,Sd.jsx)(y7,{small:!0,inline:!0,primary:!0,title:"Create Pool",onClick:()=>{}}):(0,Sd.jsx)(y7,{small:!0,inline:!0,primary:!0,title:"Leave",onClick:()=>{}})})]}),(0,Sd.jsx)(ji,{}),(0,Sd.jsxs)("h4",{children:["Bonded in Pool",(0,Sd.jsx)(S5,{page:"pools",title:"Bonded in Pool"})]}),(0,Sd.jsx)("h2",{children:void 0===a?`0 ${e.unit}`:(0,Sd.jsxs)(Sd.Fragment,{children:[a.bondedAmount," ",e.unit," \xa0",(0,Sd.jsxs)("div",{children:[(0,Sd.jsx)(y7,{small:!0,primary:!0,inline:!0,title:"+",onClick:()=>{}}),(0,Sd.jsx)(y7,{small:!0,primary:!0,title:"-",onClick:()=>{}})]})]})}),(0,Sd.jsx)(ji,{}),(0,Sd.jsxs)("h4",{children:["Unclaimed Rewards",(0,Sd.jsx)(S5,{page:"pools",title:"Pool Rewards"})]}),(0,Sd.jsx)("h2",{children:void 0===a?`0 ${e.unit}`:(0,Sd.jsxs)(Sd.Fragment,{children:[a.unclaimedRewards," ",e.unit," \xa0",(0,Sd.jsx)("div",{children:(0,Sd.jsx)(y7,{small:!0,primary:!0,inline:!0,title:"Claim",onClick:()=>{}})})]})})]})})},_te=M.default.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  border-bottom: ${e=>e.last?"0px solid":"1px solid "}
    ${fi};
  padding-bottom: ${e=>e.last?0:"0.5rem"};
  margin-bottom: 0.75rem;

  .account {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    padding: 0;

    button {
      color: ${Xo};
    }

    .icon {
      position: relative;
      top: 0.1rem;
      margin-right: 0.5rem;
    }
    h4 {
      margin: 0;
      padding: 0;

      > .addr {
        opacity: 0.75;
      }
    }

    > *:last-child {
      flex-grow: 1;
      display: flex;
      flex-flow: row-reverse wrap;

      > .copy {
        color: ${Zo};
        opacity: 0.5;
        cursor: pointer;
        transition: opacity 0.1s;
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
`,Bte=e=>{const{address:t,last:a}=e,{addNotification:l}=W9();let r={};return null!==t&&(r={title:"Address Copied to Clipboard",subtitle:t}),(0,Sd.jsx)(_te,{last:a,children:(0,Sd.jsxs)("div",{className:"account",children:[null===t?(0,Sd.jsx)("h4",{children:"Not in a Pool"}):(0,Sd.jsxs)(Sd.Fragment,{children:[(0,Sd.jsx)("div",{className:"icon",children:(0,Sd.jsx)(B9,{value:t,size:"1.6rem"})}),(0,Sd.jsx)("h4",{children:sK(t)})]}),(0,Sd.jsx)("div",{children:(0,Sd.jsx)(co.div,{className:"copy",whileHover:{scale:1.02},whileTap:{scale:.97},children:null!==t&&(0,Sd.jsx)("button",{type:"button",onClick:()=>l(r),children:(0,Sd.jsx)(U5.CopyToClipboard,{text:t,children:(0,Sd.jsx)(o5,{icon:D5,transform:"grow-1"})})})})})]})})},Ite=()=>{var e,t,a,l,r,s,n,o;const{activeAccount:i}=kK(),{membership:u}=Ste(),c=null===u||void 0===u?void 0:u.pool;return(0,Sd.jsx)(Ad,{height:350,children:(0,Sd.jsxs)("div",{className:"head",children:[(0,Sd.jsx)("h2",{children:"Pool Roles"}),(0,Sd.jsxs)("h4",{children:["Root ",(0,Sd.jsx)(S5,{page:"pools",title:"Joined Pool"})]}),(0,Sd.jsx)(Bte,{address:null!==(e=null===c||void 0===c||null===(t=c.roles)||void 0===t?void 0:t.root)&&void 0!==e?e:null}),(0,Sd.jsxs)("h4",{children:["Depositor ",(0,Sd.jsx)(S5,{page:"pools",title:"Joined Pool"})]}),(0,Sd.jsx)(Bte,{address:null!==(a=null===c||void 0===c||null===(l=c.roles)||void 0===l?void 0:l.depositor)&&void 0!==a?a:null}),(0,Sd.jsxs)("h4",{children:["Nominator ",(0,Sd.jsx)(S5,{page:"pools",title:"Joined Pool"})]}),(0,Sd.jsx)(Bte,{address:null!==(r=null===c||void 0===c||null===(s=c.roles)||void 0===s?void 0:s.nominator)&&void 0!==r?r:null}),(0,Sd.jsxs)("h4",{children:["State Toggler",(0,Sd.jsx)(S5,{page:"pools",title:"Joined Pool"})]}),(0,Sd.jsx)(Bte,{address:null!==(n=null===c||void 0===c||null===(o=c.roles)||void 0===o?void 0:o.stateToggler)&&void 0!==n?n:null,last:!0})]})})},Rte=e=>{const{page:t}=e,{title:a}=t,{network:l}=rK(),r=nu(),{bondedPools:s}=Ste();return(0,C.useEffect)((()=>{l.features.pools||r("/#/overview",{replace:!0})}),[l]),(0,Sd.jsxs)(Sd.Fragment,{children:[(0,Sd.jsx)(B5,{title:a}),(0,Sd.jsxs)(Od,{children:[(0,Sd.jsx)(Ote,{}),(0,Sd.jsx)(Ate,{}),(0,Sd.jsx)(Vte,{})]}),(0,Sd.jsxs)(Ei,{className:"page-padding",noVerticalSpacer:!0,children:[(0,Sd.jsx)(Ni,{hOrder:0,vOrder:0,children:(0,Sd.jsx)(Hte,{})}),(0,Sd.jsx)(Pi,{hOrder:1,vOrder:1,children:(0,Sd.jsx)(Ite,{})})]}),(0,Sd.jsx)(Ei,{className:"page-padding",noVerticalSpacer:!0,children:(0,Sd.jsxs)(Ad,{children:[(0,Sd.jsxs)("h2",{children:["Pools",(0,Sd.jsx)(S5,{page:"pools",title:"Nomination Pools"})]}),(0,Sd.jsx)(gte,{pools:s,title:"Active Pools",allowMoreCols:!0,pagination:!0})]})})]})},Wte=()=>{const{staking:e}=_K(),{totalValidators:t,maxValidatorsCount:a}=e;let l=0;a.gt(new(_d())(0))&&(l=t.div(a.div(new(_d())(100))).toNumber());const r={label:"Total Validators",stat:{value:t.toNumber(),total:a.toNumber(),unit:""},graph:{value1:t.toNumber(),value2:a.sub(t).toNumber()},tooltip:`${l.toFixed(2)}%`,assistant:{page:"validators",key:"Validator"}};return(0,Sd.jsx)(Z9,{...r})},Dte=()=>{const{staking:e,eraStakers:t}=_K(),{validatorCount:a}=e,{activeValidators:l}=t;let r=0;a.gt(new(_d())(0))&&(r=l/(.01*a.toNumber()));const s={label:"Active Validators",stat:{value:l,total:a.toNumber(),unit:""},graph:{value1:l,value2:a.sub(new(_d())(l)).toNumber()},tooltip:`${r.toFixed(2)}%`,assistant:{page:"validators",key:"Active Validator"}};return(0,Sd.jsx)(Z9,{...s})},Fte=e=>{const{page:t}=e,{title:a}=t,{isReady:l}=rK(),{validators:r}=RK();return(0,Sd.jsxs)(Sd.Fragment,{children:[(0,Sd.jsx)(B5,{title:a}),(0,Sd.jsxs)(Od,{children:[(0,Sd.jsx)(Wte,{}),(0,Sd.jsx)(Dte,{}),(0,Sd.jsx)(L7,{})]}),(0,Sd.jsx)(Ei,{className:"page-padding",noVerticalSpacer:!0,children:(0,Sd.jsx)(Ad,{children:l?(0,Sd.jsxs)(Sd.Fragment,{children:[0===r.length&&(0,Sd.jsx)("div",{className:"item",children:(0,Sd.jsx)("h3",{children:"Fetching validators..."})}),r.length>0&&(0,Sd.jsx)(m7,{validators:r,batchKey:"validators_browse",title:"Network Validators",allowMoreCols:!0,allowFilters:!0,pagination:!0,toggleFavourites:!0})]}):(0,Sd.jsx)("div",{className:"item",children:(0,Sd.jsx)("h3",{children:"Connecting..."})})})})]})},Ute=e=>{const{isReady:t}=rK(),{page:a}=e,{title:l}=a,{favouritesList:r}=RK();return(0,Sd.jsxs)(Sd.Fragment,{children:[(0,Sd.jsx)(B5,{title:l}),(0,Sd.jsx)(Ei,{className:"page-padding",noVerticalSpacer:!0,children:(0,Sd.jsx)(Ad,{children:null===r?(0,Sd.jsx)("h3",{children:"Fetching favourite validators..."}):(0,Sd.jsx)(Sd.Fragment,{children:t&&(0,Sd.jsx)(Sd.Fragment,{children:r.length>0?(0,Sd.jsx)(m7,{validators:r,batchKey:"favourite_validators",title:"Favourite Validators",refetchOnListUpdate:!0,allowMoreCols:!0,toggleFavourites:!0}):(0,Sd.jsx)("h3",{children:"No Favourites."})})})})})]})},qte=(0,M.default)(co.div)`
  padding: 0.5rem;
  display: flex;
  flex-flow: row nowrap;
  width: 100%;

  > div {
    padding: 0.75rem 0.5rem;
    flex: 1;
    background: ${ti};
    border-radius: 0.75rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    flex: 1;
    max-width: 100%;

    h4 {
      margin: 0 0.75rem;
      color: ${Zo};

      &.reward {
        color: ${Uo};
      }
    }

    span {
      border-radius: 0.65rem;
      padding: 0.1rem 0.6rem;
      display: flex;
      flex-flow: row wrap;