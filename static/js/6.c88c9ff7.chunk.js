(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1023:function(e,a,t){"use strict";t.r(a);var n=t(899),r=t(2),i=t.n(r),o=t(85),s=t(106),c=t(5),l=t.n(c),u=t(959),d=t(960),m=t(929),f=t(958),p=t(961),b=t(913),g=t(915),v=t(928),h=t(940),y=t.n(h),E=function(e){var a=e.name,t=e.onClick,n=e.activeName,r=e.ascending,o="fas fa-sort";a===n&&(o=r?"fas fa-sort-up":"fas fa-sort-down");return i.a.createElement("button",{onClick:function(){t(a,a!==n||!r)},className:y.a.sortButton},i.a.createElement("i",{className:o}))};var x=function(e){var a=e.onChange,t=e.ascending,n=e.sortingBy;return i.a.createElement(m.a,{className:y.a.tableHeading},i.a.createElement(f.a,{className:l()("text-center",y.a.flexFixed)},i.a.createElement("i",{className:"icon-people"})),i.a.createElement(f.a,{className:y.a.flexExpand},"\u8b70\u54e1\u59d3\u540d",i.a.createElement(E,{name:"name",onClick:a,activeName:n,ascending:t})),i.a.createElement(f.a,{className:y.a.flexFixed},"\u51fa\u5e2d\u7387",i.a.createElement(E,{name:"attendanceRate",onClick:a,activeName:n,ascending:t})),i.a.createElement(f.a,{className:y.a.flexFixed},"\u6700\u8fd1\u8868\u6c7a",i.a.createElement(E,{name:"lastAction",onClick:a,activeName:n,ascending:t})))};a.default=Object(o.g)(function(e){var a=e.history,t=e.match.params.area,o=Object(r.useState)([]),c=Object(n.a)(o,2),h=c[0],E=c[1],N=Object(r.useState)("name"),j=Object(n.a)(N,2),_=j[0],w=j[1],O=Object(r.useState)(!0),M=Object(n.a)(O,2),C=M[0],k=M[1],T=g.a.find(function(e){return e.id===t}).label;return Object(r.useEffect)(function(){Object(b.b)(t).then(E)},[t]),i.a.createElement("div",{className:y.a.root},i.a.createElement(u.a,null,i.a.createElement(d.a,{active:!0},i.a.createElement(s.b,{to:"/"},"\u4e3b\u9801")),i.a.createElement(d.a,{active:!0},T)),i.a.createElement(x,{ascending:C,sortingBy:_,onChange:function(e,a){k(a),w(e)}}),i.a.createElement("div",{className:y.a.list},h.sort(function(e,a){return"number"==typeof e[_]?(e[_]-a[_])*(C?1:-1):e[_].localeCompare(a[_])*(C?1:-1)}).map(function(e){return i.a.createElement(m.a,{className:l()("pointer",y.a.tableRow),onClick:function(){return a.push("/members/".concat(e.id))}},i.a.createElement(f.a,{className:l()("text-center",y.a.flexFixed)},i.a.createElement("div",{className:y.a.avatar,style:{backgroundImage:"url(".concat(e.avatar,")")}})),i.a.createElement(f.a,{classnames:y.a.flexExpand},i.a.createElement("div",{className:l()("py-0 h4")},e.name),e.party?i.a.createElement("div",{className:"small mb-1"},i.a.createElement("i",{className:"flag-icon flag-icon-us h6 mb-0",title:"us",id:"us"}),i.a.createElement("span",{className:"h6 px-1"},e.party)):null),i.a.createElement(f.a,{className:y.a.flexFixed},i.a.createElement("strong",null,e.attendanceRate,"%")),i.a.createElement(f.a,{className:l()("h4",y.a.flexFixed)},i.a.createElement(p.a,{className:y.a[e.lastAction]},i.a.createElement("i",{className:l()("mr-2",v.a[e.lastAction].iconClass)}),v.a[e.lastAction].label)))})))})},896:function(e,a,t){"use strict";t.d(a,"k",function(){return o}),t.d(a,"g",function(){return s}),t.d(a,"e",function(){return c}),t.d(a,"h",function(){return l}),t.d(a,"i",function(){return u}),t.d(a,"j",function(){return d}),t.d(a,"m",function(){return f}),t.d(a,"l",function(){return b}),t.d(a,"c",function(){return g}),t.d(a,"a",function(){return v}),t.d(a,"b",function(){return h}),t.d(a,"d",function(){return y}),t.d(a,"f",function(){return E});t(236);var n,r=t(0),i=t.n(r);function o(e){document.body.style.paddingRight=e>0?e+"px":null}function s(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function c(){var e=function(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var a=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),a}(),a=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],t=a?parseInt(a.style.paddingRight||0,10):0;document.body.clientWidth<window.innerWidth&&o(t+e)}function l(e,a){return void 0===e&&(e=""),void 0===a&&(a=n),a?e.split(" ").map(function(e){return a[e]||e}).join(" "):e}function u(e,a){var t={};return Object.keys(e).forEach(function(n){-1===a.indexOf(n)&&(t[n]=e[n])}),t}function d(e,a){for(var t,n=Array.isArray(a)?a:[a],r=n.length,i={};r>0;)i[t=n[r-=1]]=e[t];return i}var m={};function f(e){m[e]||("undefined"!==typeof console&&console.error(e),m[e]=!0)}var p="object"===typeof window&&window.Element||function(){};i.a.oneOfType([i.a.string,i.a.func,function(e,a,t){if(!(e[a]instanceof p))return new Error("Invalid prop `"+a+"` supplied to `"+t+"`. Expected prop to be an instance of Element. Validation failed.")},i.a.shape({current:i.a.any})]);var b=i.a.oneOfType([i.a.func,i.a.string,i.a.shape({$$typeof:i.a.symbol,render:i.a.func}),i.a.arrayOf(i.a.oneOfType([i.a.func,i.a.string,i.a.shape({$$typeof:i.a.symbol,render:i.a.func})]))]),g={Fade:150,Collapse:350,Modal:300,Carousel:600},v=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],h={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"},y=!("undefined"===typeof window||!window.document||!window.document.createElement);var E=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},899:function(e,a,t){"use strict";function n(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){var t=[],n=!0,r=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(t.push(o.value),!a||t.length!==a);n=!0);}catch(c){r=!0,i=c}finally{try{n||null==s.return||s.return()}finally{if(r)throw i}}return t}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.d(a,"a",function(){return n})},913:function(e,a,t){"use strict";t.d(a,"b",function(){return o});var n=t(906),r=t(914),i=r.reduce(function(e,a){return e.concat(a.members)},[]).filter(function(e,a,t){return a!==t.findIndex(function(a){return a.id===e.id})});function o(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return Object(n.a)(i.map(function(e){return{id:e.id,name:e.name_ch,avatar:"https://g0vhk.io".concat(e.image),party:e.party&&e.party.name_ch,attendanceRate:e.id%100,voteRate:e.id%100,lastAction:["agree","disagree","abstention","absent"][e.id%4]}}))}a.a=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").toUpperCase();return Object(n.a)(i.filter(function(a){return a.name_ch.toUpperCase().includes(e)||a.name_en.toUpperCase().includes(e)||a.party&&a.party.name_ch.toUpperCase().includes(e)}).map(function(e){return{id:e.id,name:e.name_ch,avatar:"https://g0vhk.io".concat(e.image),party:e.party&&e.party.name_ch,attendanceRate:e.id%100,voteRate:e.id%100,lastAction:["agree","disagree","abstention","absent"][e.id%4]}}))}},915:function(e,a,t){"use strict";var n=t(916),r=t.n(n),i=t(917),o=t.n(i),s=t(918),c=t.n(s),l=t(919),u=t.n(l),d=t(920),m=t.n(d),f=t(921),p=t.n(f),b=t(922),g=t.n(b),v=t(923),h=t.n(v),y=t(924),E=t.n(y),x=t(925),N=t.n(x),j=t(926),_=t.n(j),w=t(927),O=t.n(w);a.a=[{id:"nte",label:"\u65b0\u754c\u6771",map:E.a,img:r.a},{id:"ntw",label:"\u65b0\u754c\u897f",map:_.a,img:c.a},{id:"ke",label:"\u4e5d\u9f8d\u6771",map:N.a,img:o.a},{id:"kw",label:"\u4e5d\u9f8d\u897f",map:h.a,img:u.a},{id:"hki",label:"\u6e2f\u5cf6",map:g.a,img:m.a},{id:"fnc",label:"\u529f\u80fd",map:O.a,img:p.a}]},916:function(e,a,t){e.exports=t.p+"static/media/taipo.1f1a91be.jpeg"},917:function(e,a,t){e.exports=t.p+"static/media/kwuntong.30bb457e.jpg"},918:function(e,a,t){e.exports=t.p+"static/media/tsuenwan.121d760e.jpg"},919:function(e,a,t){e.exports=t.p+"static/media/hunghom.fb30a507.jpg"},920:function(e,a,t){e.exports=t.p+"static/media/hki.a9d4bc38.jpg"},921:function(e,a,t){e.exports=t.p+"static/media/fnc.f81bf875.jpg"},922:function(e,a,t){e.exports=t.p+"static/media/hki.f6a634e9.svg"},923:function(e,a,t){e.exports=t.p+"static/media/kw.7bf4486d.svg"},924:function(e,a,t){e.exports=t.p+"static/media/nte.55ae42f3.svg"},925:function(e,a,t){e.exports=t.p+"static/media/ke.32b52656.svg"},926:function(e,a,t){e.exports=t.p+"static/media/ntw.461dd0ae.svg"},927:function(e,a,t){e.exports=t.p+"static/media/group.34bed7e7.svg"},928:function(e,a,t){"use strict";a.a={agree:{label:"\u8d0a\u6210",iconClass:"far fa-thumbs-up"},disagree:{label:"\u53cd\u5c0d",iconClass:"far fa-thumbs-down"},absent:{label:"\u7f3a\u5e2d",iconClass:"fas fa-question"},abstention:{label:"\u68c4\u6b0a",iconClass:"far fa-hand-paper"}}},929:function(e,a,t){"use strict";var n=t(18),r=t(34),i=t(2),o=t.n(i),s=t(0),c=t.n(s),l=t(5),u=t.n(l),d=t(896),m={tag:d.l,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool},f=function(e){var a=e.className,t=e.cssModule,i=e.noGutters,s=e.tag,c=e.form,l=Object(r.a)(e,["className","cssModule","noGutters","tag","form"]),m=Object(d.h)(u()(a,i?"no-gutters":null,c?"form-row":"row"),t);return o.a.createElement(s,Object(n.a)({},l,{className:m}))};f.propTypes=m,f.defaultProps={tag:"div"},a.a=f},930:function(e,a){e.exports=function(e){var a=typeof e;return!!e&&("object"==a||"function"==a)}},940:function(e,a,t){e.exports={root:"MemberList_root__q-euO",list:"MemberList_list__1W7dV",avatar:"MemberList_avatar__175Xg",agree:"MemberList_agree__2nENb",disagree:"MemberList_disagree__eX2t5",absent:"MemberList_absent__2h4kW",abstention:"MemberList_abstention__3X7lx",tableHeading:"MemberList_tableHeading__1_RkZ",tableRow:"MemberList_tableRow__1sh7Z",flexFixed:"MemberList_flexFixed__33CF-",flexExpand:"MemberList_flexExpand__3iJkc",sortButton:"MemberList_sortButton__2NH4R"}},958:function(e,a,t){"use strict";var n=t(18),r=t(34),i=t(930),o=t.n(i),s=t(2),c=t.n(s),l=t(0),u=t.n(l),d=t(5),m=t.n(d),f=t(896),p=u.a.oneOfType([u.a.number,u.a.string]),b=u.a.oneOfType([u.a.bool,u.a.number,u.a.string,u.a.shape({size:u.a.oneOfType([u.a.bool,u.a.number,u.a.string]),order:p,offset:p})]),g={tag:f.l,xs:b,sm:b,md:b,lg:b,xl:b,className:u.a.string,cssModule:u.a.object,widths:u.a.array},v={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},y=function(e){var a=e.className,t=e.cssModule,i=e.widths,s=e.tag,l=Object(r.a)(e,["className","cssModule","widths","tag"]),u=[];i.forEach(function(a,n){var r=e[a];if(delete l[a],r||""===r){var i=!n;if(o()(r)){var s,c=i?"-":"-"+a+"-",d=h(i,a,r.size);u.push(Object(f.h)(m()(((s={})[d]=r.size||""===r.size,s["order"+c+r.order]=r.order||0===r.order,s["offset"+c+r.offset]=r.offset||0===r.offset,s)),t))}else{var p=h(i,a,r);u.push(p)}}}),u.length||u.push("col");var d=Object(f.h)(m()(a,u),t);return c.a.createElement(s,Object(n.a)({},l,{className:d}))};y.propTypes=g,y.defaultProps=v,a.a=y},959:function(e,a,t){"use strict";var n=t(18),r=t(34),i=t(2),o=t.n(i),s=t(0),c=t.n(s),l=t(5),u=t.n(l),d=t(896),m={tag:d.l,listTag:d.l,className:c.a.string,listClassName:c.a.string,cssModule:c.a.object,children:c.a.node,"aria-label":c.a.string},f=function(e){var a=e.className,t=e.listClassName,i=e.cssModule,s=e.children,c=e.tag,l=e.listTag,m=e["aria-label"],f=Object(r.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),p=Object(d.h)(u()(a),i),b=Object(d.h)(u()("breadcrumb",t),i);return o.a.createElement(c,Object(n.a)({},f,{className:p,"aria-label":m}),o.a.createElement(l,{className:b},s))};f.propTypes=m,f.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=f},960:function(e,a,t){"use strict";var n=t(18),r=t(34),i=t(2),o=t.n(i),s=t(0),c=t.n(s),l=t(5),u=t.n(l),d=t(896),m={tag:d.l,active:c.a.bool,className:c.a.string,cssModule:c.a.object},f=function(e){var a=e.className,t=e.cssModule,i=e.active,s=e.tag,c=Object(r.a)(e,["className","cssModule","active","tag"]),l=Object(d.h)(u()(a,!!i&&"active","breadcrumb-item"),t);return o.a.createElement(s,Object(n.a)({},c,{className:l,"aria-current":i?"page":void 0}))};f.propTypes=m,f.defaultProps={tag:"li"},a.a=f},961:function(e,a,t){"use strict";var n=t(18),r=t(34),i=t(2),o=t.n(i),s=t(0),c=t.n(s),l=t(5),u=t.n(l),d=t(896),m={color:c.a.string,pill:c.a.bool,tag:d.l,innerRef:c.a.oneOfType([c.a.object,c.a.func,c.a.string]),children:c.a.node,className:c.a.string,cssModule:c.a.object},f=function(e){var a=e.className,t=e.cssModule,i=e.color,s=e.innerRef,c=e.pill,l=e.tag,m=Object(r.a)(e,["className","cssModule","color","innerRef","pill","tag"]),f=Object(d.h)(u()(a,"badge","badge-"+i,!!c&&"badge-pill"),t);return m.href&&"span"===l&&(l="a"),o.a.createElement(l,Object(n.a)({},m,{className:f,ref:s}))};f.propTypes=m,f.defaultProps={color:"secondary",pill:!1,tag:"span"},a.a=f}}]);
//# sourceMappingURL=6.c88c9ff7.chunk.js.map