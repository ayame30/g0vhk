(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1021:function(e,t,a){"use strict";a.r(t);var n=a(899),r=a(2),c=a.n(r),o=a(85),l=a(106),i=a(912),s=a(907),u=a(959),d=a(960),m=a(961),p=a(5),b=a.n(p),f=a(18),v=a(34),g=a(0),h=a.n(g),y=a(896),E={tabs:h.a.bool,pills:h.a.bool,vertical:h.a.oneOfType([h.a.bool,h.a.string]),horizontal:h.a.string,justified:h.a.bool,fill:h.a.bool,navbar:h.a.bool,card:h.a.bool,tag:y.l,className:h.a.string,cssModule:h.a.object},j=function(e){var t=e.className,a=e.cssModule,n=e.tabs,r=e.pills,o=e.vertical,l=e.horizontal,i=e.justified,s=e.fill,u=e.navbar,d=e.card,m=e.tag,p=Object(v.a)(e,["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"]),g=Object(y.h)(b()(t,u?"navbar-nav":"nav",!!l&&"justify-content-"+l,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(o),{"nav-tabs":n,"card-header-tabs":d&&n,"nav-pills":r,"card-header-pills":d&&r,"nav-justified":i,"nav-fill":s}),a);return c.a.createElement(m,Object(f.a)({},p,{className:g}))};j.propTypes=E,j.defaultProps={tag:"ul",vertical:!1};var _=j,O={tag:y.l,active:h.a.bool,className:h.a.string,cssModule:h.a.object},N=function(e){var t=e.className,a=e.cssModule,n=e.active,r=e.tag,o=Object(v.a)(e,["className","cssModule","active","tag"]),l=Object(y.h)(b()(t,"nav-item",!!n&&"active"),a);return c.a.createElement(r,Object(f.a)({},o,{className:l}))};N.propTypes=O,N.defaultProps={tag:"li"};var x=N,w=a(54),M=a(48),T={tag:y.l,innerRef:h.a.oneOfType([h.a.object,h.a.func,h.a.string]),disabled:h.a.bool,active:h.a.bool,className:h.a.string,cssModule:h.a.object,onClick:h.a.func,href:h.a.any},k=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(w.a)(a)),a}Object(M.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled?e.preventDefault():("#"===this.props.href&&e.preventDefault(),this.props.onClick&&this.props.onClick(e))},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,n=e.active,r=e.tag,o=e.innerRef,l=Object(v.a)(e,["className","cssModule","active","tag","innerRef"]),i=Object(y.h)(b()(t,"nav-link",{disabled:l.disabled,active:n}),a);return c.a.createElement(r,Object(f.a)({},l,{ref:o,onClick:this.onClick,className:i}))},t}(c.a.Component);k.propTypes=T,k.defaultProps={tag:"a"};var C=k,R=a(347),D=a(963),A=a.n(D),P=c.a.lazy(function(){return Promise.all([a.e(1),a.e(13)]).then(a.bind(null,1020))}),I=c.a.lazy(function(){return a.e(10).then(a.bind(null,1025))}),W=c.a.lazy(function(){return Promise.all([a.e(5),a.e(12)]).then(a.bind(null,1018))}),z=c.a.lazy(function(){return a.e(11).then(a.bind(null,1019))});var J=Object(o.g)(function(e){var t=e.history,a=e.match,n=(e.id,e.member),r=a.url,i=function(e){return!(e!==t.location.pathname)};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"bg-white"},c.a.createElement(_,{tabs:!0,className:A.a.navTab},c.a.createElement(x,null,c.a.createElement(l.b,{to:r},c.a.createElement(C,{exact:!0,to:r,active:i(r)},"\u80cc\u666f"))),c.a.createElement(x,null,c.a.createElement(l.b,{to:"".concat(r,"/votes")},c.a.createElement(C,{exact:!0,to:"".concat(r,"/votes"),active:i("".concat(r,"/votes"))},"\u6295\u7968"))),c.a.createElement(x,null,c.a.createElement(l.b,{to:"".concat(r,"/speech")},c.a.createElement(C,{exact:!0,to:"".concat(r,"/speech"),active:i("".concat(r,"/speech"))},"\u767c\u8a00"))),c.a.createElement(x,null,c.a.createElement(l.b,{to:"".concat(r,"/news")},c.a.createElement(C,{exact:!0,to:"".concat(r,"/news"),active:i("".concat(r,"/news"))},"\u65b0\u805e"))))),c.a.createElement("div",{className:A.a.tabContent},c.a.createElement(c.a.Suspense,{fallback:R.a},c.a.createElement(o.d,null,c.a.createElement(o.b,{exact:!0,path:r,name:"\u80cc\u666f",render:function(){return c.a.createElement(P,{member:n})}}),c.a.createElement(o.b,{exact:!0,path:"".concat(r,"/votes"),name:"\u6295\u7968",render:function(){return c.a.createElement(I,{member:n})}}),c.a.createElement(o.b,{exact:!0,path:"".concat(r,"/speech"),name:"\u767c\u8a00",render:function(){return c.a.createElement(W,{member:n})}}),c.a.createElement(o.b,{exact:!0,path:"".concat(r,"/news"),name:"\u65b0\u805e",render:function(){return c.a.createElement(z,{member:n})}})))))}),S=a(964),F=a.n(S);t.default=Object(o.g)(function(e){e.history;var t=e.match.params.id,a=Object(r.useState)({}),o=Object(n.a)(a,2),p=o[0],f=o[1];return Object(r.useEffect)(function(){Object(s.a)(t).then(f)},[t]),c.a.createElement("div",{className:F.a.root},c.a.createElement(u.a,null,c.a.createElement(d.a,{active:!0},c.a.createElement(l.b,{to:"/"},"\u4e3b\u9801")),c.a.createElement(d.a,{active:!0},c.a.createElement(l.b,{to:"/area/ke"},"\u4e5d\u9f8d\u6771")),c.a.createElement(d.a,{active:!0},p.name)),c.a.createElement("div",{className:b()("animated fadeIn bg-white row",F.a.info)},c.a.createElement(i.a,{src:p.avatar,party:p.party}),c.a.createElement("div",{className:b()("col",F.a.topLine)},c.a.createElement("div",{className:b()("row justify-content-between",F.a.topLineFlex)},c.a.createElement("div",{className:F.a.infoText},c.a.createElement("h3",null,p.name," ",c.a.createElement("h6",null,p.name_en)),p.tags?c.a.createElement("div",{className:b()(F.a.tags)},c.a.createElement("div",null,"\u5206\u985e:",p.tags.map(function(e){return c.a.createElement("h5",null,c.a.createElement(m.a,{color:"primary"},e))}))):null)))),c.a.createElement(J,{id:t,member:p}))})},896:function(e,t,a){"use strict";a.d(t,"k",function(){return o}),a.d(t,"g",function(){return l}),a.d(t,"e",function(){return i}),a.d(t,"h",function(){return s}),a.d(t,"i",function(){return u}),a.d(t,"j",function(){return d}),a.d(t,"m",function(){return p}),a.d(t,"l",function(){return f}),a.d(t,"c",function(){return v}),a.d(t,"a",function(){return g}),a.d(t,"b",function(){return h}),a.d(t,"d",function(){return y}),a.d(t,"f",function(){return E});a(236);var n,r=a(0),c=a.n(r);function o(e){document.body.style.paddingRight=e>0?e+"px":null}function l(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function i(){var e=function(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],a=t?parseInt(t.style.paddingRight||0,10):0;document.body.clientWidth<window.innerWidth&&o(a+e)}function s(e,t){return void 0===e&&(e=""),void 0===t&&(t=n),t?e.split(" ").map(function(e){return t[e]||e}).join(" "):e}function u(e,t){var a={};return Object.keys(e).forEach(function(n){-1===t.indexOf(n)&&(a[n]=e[n])}),a}function d(e,t){for(var a,n=Array.isArray(t)?t:[t],r=n.length,c={};r>0;)c[a=n[r-=1]]=e[a];return c}var m={};function p(e){m[e]||("undefined"!==typeof console&&console.error(e),m[e]=!0)}var b="object"===typeof window&&window.Element||function(){};c.a.oneOfType([c.a.string,c.a.func,function(e,t,a){if(!(e[t]instanceof b))return new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Expected prop to be an instance of Element. Validation failed.")},c.a.shape({current:c.a.any})]);var f=c.a.oneOfType([c.a.func,c.a.string,c.a.shape({$$typeof:c.a.symbol,render:c.a.func}),c.a.arrayOf(c.a.oneOfType([c.a.func,c.a.string,c.a.shape({$$typeof:c.a.symbol,render:c.a.func})]))]),v={Fade:150,Collapse:350,Modal:300,Carousel:600},g=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],h={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"},y=!("undefined"===typeof window||!window.document||!window.document.createElement);var E=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},899:function(e,t,a){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=[],n=!0,r=!1,c=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(i){r=!0,c=i}finally{try{n||null==l.return||l.return()}finally{if(r)throw c}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}a.d(t,"a",function(){return n})},907:function(e,t,a){"use strict";a.d(t,"d",function(){return o}),a.d(t,"c",function(){return l}),a.d(t,"b",function(){return i});var n=a(906),r=a(914),c=r.reduce(function(e,t){return e.concat(t.members)},[]);function o(e){return Object(n.a)([{id:"123121",voteResult:"passed",name:"\u9003\u72af\u689d\u4f8b\u4fee\u8a02\u6848",date:"23/04/2019",action:"agree",avatar:"assets/img/avatars/1.jpg"},{id:"123122",voteResult:"passed",name:"\u9003\u72af\u689d\u4f8b\u4fee\u8a02\u6848",date:"23/04/2019",action:"absent",avatar:"assets/img/avatars/1.jpg"},{id:"123123",voteResult:"negatived",name:"\u9003\u72af\u689d\u4f8b\u4fee\u8a02\u6848",date:"23/04/2019",action:"disagree",avatar:"assets/img/avatars/1.jpg"},{id:"123124",voteResult:"passed",name:"\u9003\u72af\u689d\u4f8b\u4fee\u8a02\u6848",date:"23/04/2019",action:"abstention",avatar:"assets/img/avatars/1.jpg"},{id:"123125",voteResult:"negatived",name:"\u9003\u72af\u689d\u4f8b\u4fee\u8a02\u6848",date:"23/04/2019",action:"disagree",avatar:"assets/img/avatars/1.jpg"},{id:"123126",voteResult:"passed",name:"\u9003\u72af\u689d\u4f8b\u4fee\u8a02\u6848",date:"23/04/2019",action:"abstention",avatar:"assets/img/avatars/1.jpg"}])}function l(e){return Object(n.a)([{id:"1234351",title:"\u9003\u72af\u689d\u4f8b\u4fee\u8a02\u6848",contentHtml:"\n      <p>\n        \u8db3\u9032\u4e2d\u5ea6\u5e02\uff0c\u5225\u81ea\u5206\u696d\u805e\u5bb6\u9593\u8a72\u662f\uff0c\u6027\u6e05\u6240\u6c11\u570b\u73fe\u793a\u751f\u5c0f\u4e86\uff0c\u4ed6\u4e2d\u6d88\u914d\u4e00\u4e8b\u6709\u6211\u6797\u4f86\u5148\uff0c\u5927\u5f88\u5f97\u6642\u722d\u5df1\u767d\u81ea\u5750\u6a5f\u5916\u5c0f\u3002\u623f\u71c8\u897f\u5e38\u4f4e\u8981\u751f\u7121\u6b61\u4e2d\u898b\u53e3\uff1f\u4e8b\u6210\u5831\uff0c\u4e86\u7a7a\u6c11\u660e\u7576\u958b\u904e\u4e00\u4f86\u90a3\u91cf\u5317\u7684\u5c31\u7684\u8fa6\u79d1\uff1f\u65bc\u5b50\u662f\u5fc3\u610f\u4ed6\u4f60\u6a23\u660e\u9ebc\u4f86\u5531\u6cb3\u3002\n      </p>\n      <p>\n        \u53ea\u5834\u5982\u4e0d\u2026\u2026\u5c31\u9084\u6708\u4f5c\u7269\u7522\u5e38\u6c34\u3002\n      </p>",date:"23/04/2019"},{id:"1234352",title:"\u9003\u72af\u689d\u4f8b\u4fee\u8a02\u6848",contentHtml:"\n      <p>\n        \u8db3\u9032\u4e2d\u5ea6\u5e02\uff0c\u5225\u81ea\u5206\u696d\u805e\u5bb6\u9593\u8a72\u662f\uff0c\u6027\u6e05\u6240\u6c11\u570b\u73fe\u793a\u751f\u5c0f\u4e86\uff0c\u4ed6\u4e2d\u6d88\u914d\u4e00\u4e8b\u6709\u6211\u6797\u4f86\u5148\uff0c\u5927\u5f88\u5f97\u6642\u722d\u5df1\u767d\u81ea\u5750\u6a5f\u5916\u5c0f\u3002\u623f\u71c8\u897f\u5e38\u4f4e\u8981\u751f\u7121\u6b61\u4e2d\u898b\u53e3\uff1f\u4e8b\u6210\u5831\uff0c\u4e86\u7a7a\u6c11\u660e\u7576\u958b\u904e\u4e00\u4f86\u90a3\u91cf\u5317\u7684\u5c31\u7684\u8fa6\u79d1\uff1f\u65bc\u5b50\u662f\u5fc3\u610f\u4ed6\u4f60\u6a23\u660e\u9ebc\u4f86\u5531\u6cb3\u3002\n      </p>\n      <p>\n        \u53ea\u5834\u5982\u4e0d\u2026\u2026\u5c31\u9084\u6708\u4f5c\u7269\u7522\u5e38\u6c34\u3002\n      </p>",date:"23/04/2019"},{id:"1234353",title:"\u9003\u72af\u689d\u4f8b\u4fee\u8a02\u6848",contentHtml:"\n      <p>\n        \u8db3\u9032\u4e2d\u5ea6\u5e02\uff0c\u5225\u81ea\u5206\u696d\u805e\u5bb6\u9593\u8a72\u662f\uff0c\u6027\u6e05\u6240\u6c11\u570b\u73fe\u793a\u751f\u5c0f\u4e86\uff0c\u4ed6\u4e2d\u6d88\u914d\u4e00\u4e8b\u6709\u6211\u6797\u4f86\u5148\uff0c\u5927\u5f88\u5f97\u6642\u722d\u5df1\u767d\u81ea\u5750\u6a5f\u5916\u5c0f\u3002\u623f\u71c8\u897f\u5e38\u4f4e\u8981\u751f\u7121\u6b61\u4e2d\u898b\u53e3\uff1f\u4e8b\u6210\u5831\uff0c\u4e86\u7a7a\u6c11\u660e\u7576\u958b\u904e\u4e00\u4f86\u90a3\u91cf\u5317\u7684\u5c31\u7684\u8fa6\u79d1\uff1f\u65bc\u5b50\u662f\u5fc3\u610f\u4ed6\u4f60\u6a23\u660e\u9ebc\u4f86\u5531\u6cb3\u3002\n      </p>\n      <p>\n        \u53ea\u5834\u5982\u4e0d\u2026\u2026\u5c31\u9084\u6708\u4f5c\u7269\u7522\u5e38\u6c34\u3002\n      </p>",date:"23/04/2019"},{id:"1234354",title:"\u9003\u72af\u689d\u4f8b\u4fee\u8a02\u6848",contentHtml:"\n      <p>\n        \u8db3\u9032\u4e2d\u5ea6\u5e02\uff0c\u5225\u81ea\u5206\u696d\u805e\u5bb6\u9593\u8a72\u662f\uff0c\u6027\u6e05\u6240\u6c11\u570b\u73fe\u793a\u751f\u5c0f\u4e86\uff0c\u4ed6\u4e2d\u6d88\u914d\u4e00\u4e8b\u6709\u6211\u6797\u4f86\u5148\uff0c\u5927\u5f88\u5f97\u6642\u722d\u5df1\u767d\u81ea\u5750\u6a5f\u5916\u5c0f\u3002\u623f\u71c8\u897f\u5e38\u4f4e\u8981\u751f\u7121\u6b61\u4e2d\u898b\u53e3\uff1f\u4e8b\u6210\u5831\uff0c\u4e86\u7a7a\u6c11\u660e\u7576\u958b\u904e\u4e00\u4f86\u90a3\u91cf\u5317\u7684\u5c31\u7684\u8fa6\u79d1\uff1f\u65bc\u5b50\u662f\u5fc3\u610f\u4ed6\u4f60\u6a23\u660e\u9ebc\u4f86\u5531\u6cb3\u3002\n      </p>\n      <p>\n        \u53ea\u5834\u5982\u4e0d\u2026\u2026\u5c31\u9084\u6708\u4f5c\u7269\u7522\u5e38\u6c34\u3002\n      </p>",date:"23/04/2019"}])}function i(e){return Object(n.a)([{id:"124341",url:"https://hk.news.appledaily.com/local/realtime/article/20190912/60038070?utm_campaign=hkad_social_hk.nextmedia&utm_medium=social&utm_source=facebook&utm_content=link_post&fbclid=IwAR05JYRsZ9Bl9wkyobnW4c2WDGDD2aCvBTAOWTu-KqDzJlsPO89vWMCDAy8",date:"2019-04-23",source:"\u9999\u6e2f01",title:"\u3010\u9006\u6b0a\u904b\u52d5\u3011\u6c11\u4e3b\u6d3e\u5021\u8b66\u57f7\u52e4\u885d\u7a81\u524d\u8b80\u8a93\u8a5e\u88ab\u5426\u6c7a \u6c99\u7530\u5340\u6703\u4e3b\u5e2d\u7a31\u4ee4\u8b66\u300c\u4ef2\u5931\u63a7"},{id:"124342",url:"https://hk.news.appledaily.com/local/realtime/article/20190912/60038070?utm_campaign=hkad_social_hk.nextmedia&utm_medium=social&utm_source=facebook&utm_content=link_post&fbclid=IwAR05JYRsZ9Bl9wkyobnW4c2WDGDD2aCvBTAOWTu-KqDzJlsPO89vWMCDAy8",date:"2019-04-23",source:"\u9999\u6e2f01",title:"\u3010\u9006\u6b0a\u904b\u52d5\u3011\u6c11\u4e3b\u6d3e\u5021\u8b66\u57f7\u52e4\u885d\u7a81\u524d\u8b80\u8a93\u8a5e\u88ab\u5426\u6c7a \u6c99\u7530\u5340\u6703\u4e3b\u5e2d\u7a31\u4ee4\u8b66\u300c\u4ef2\u5931\u63a7"}])}t.a=function(e){var t=c.find(function(t){return"".concat(t.id)==="".concat(e)});return t?Object(n.a)({id:e,name:t.name_ch,name_en:t.name_en,avatar:"https://g0vhk.io".concat(t.image),party:t.party&&t.party.name_ch,attendanceRate:50,voteRate:12.2,questionRate:19.7,speechCount:356,amendmentCount:37,lastAction:"agree",tags:["\u5efa\u5236","\u529f\u80fd\u7d44\u5225","\u5efa\u5236","\u529f\u80fd\u7d44\u5225","\u5efa\u5236","\u529f\u80fd\u7d44\u5225"]}):Object(n.a)({})}},912:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var r=a(2),c=a.n(r),o=a(5),l=a.n(o),i=a(962),s=a.n(i);function u(e){e.type;var t=e.party,a=(e.size,e.src),r=e.className;n(e,["type","party","size","src","className"]);return c.a.createElement("div",{className:l()(s.a.avatar,r),style:{"background-image":"url(".concat(a,")")}},t?c.a.createElement("div",{className:s.a.party},t):null)}a.d(t,"a",function(){return u})},959:function(e,t,a){"use strict";var n=a(18),r=a(34),c=a(2),o=a.n(c),l=a(0),i=a.n(l),s=a(5),u=a.n(s),d=a(896),m={tag:d.l,listTag:d.l,className:i.a.string,listClassName:i.a.string,cssModule:i.a.object,children:i.a.node,"aria-label":i.a.string},p=function(e){var t=e.className,a=e.listClassName,c=e.cssModule,l=e.children,i=e.tag,s=e.listTag,m=e["aria-label"],p=Object(r.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),b=Object(d.h)(u()(t),c),f=Object(d.h)(u()("breadcrumb",a),c);return o.a.createElement(i,Object(n.a)({},p,{className:b,"aria-label":m}),o.a.createElement(s,{className:f},l))};p.propTypes=m,p.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},t.a=p},960:function(e,t,a){"use strict";var n=a(18),r=a(34),c=a(2),o=a.n(c),l=a(0),i=a.n(l),s=a(5),u=a.n(s),d=a(896),m={tag:d.l,active:i.a.bool,className:i.a.string,cssModule:i.a.object},p=function(e){var t=e.className,a=e.cssModule,c=e.active,l=e.tag,i=Object(r.a)(e,["className","cssModule","active","tag"]),s=Object(d.h)(u()(t,!!c&&"active","breadcrumb-item"),a);return o.a.createElement(l,Object(n.a)({},i,{className:s,"aria-current":c?"page":void 0}))};p.propTypes=m,p.defaultProps={tag:"li"},t.a=p},961:function(e,t,a){"use strict";var n=a(18),r=a(34),c=a(2),o=a.n(c),l=a(0),i=a.n(l),s=a(5),u=a.n(s),d=a(896),m={color:i.a.string,pill:i.a.bool,tag:d.l,innerRef:i.a.oneOfType([i.a.object,i.a.func,i.a.string]),children:i.a.node,className:i.a.string,cssModule:i.a.object},p=function(e){var t=e.className,a=e.cssModule,c=e.color,l=e.innerRef,i=e.pill,s=e.tag,m=Object(r.a)(e,["className","cssModule","color","innerRef","pill","tag"]),p=Object(d.h)(u()(t,"badge","badge-"+c,!!i&&"badge-pill"),a);return m.href&&"span"===s&&(s="a"),o.a.createElement(s,Object(n.a)({},m,{className:p,ref:l}))};p.propTypes=m,p.defaultProps={color:"secondary",pill:!1,tag:"span"},t.a=p},962:function(e,t,a){e.exports={avatar:"Avatar_avatar__TDntD",party:"Avatar_party__1BMAM"}},963:function(e,t,a){e.exports={tabContent:"Tabs_tabContent__2rvHd",navTab:"Tabs_navTab__2U3Hx"}},964:function(e,t,a){e.exports={root:"Member_root__2aAEL",info:"Member_info__U3Ras",infoText:"Member_infoText__3g9ZF",tags:"Member_tags__1Jbq3",relative:"Member_relative__2Mm9Q",statNumber:"Member_statNumber__11Dp-",number:"Member_number__2cUkM",label:"Member_label__3Xsjy",topLineFlex:"Member_topLineFlex__TLljM"}}}]);
//# sourceMappingURL=8.b5c4ead0.chunk.js.map