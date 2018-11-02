(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{40:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.meta=void 0;var t=o(n(2)),s=n(610),r=o(n(632));function o(e){return e&&e.__esModule?e:{default:e}}var p=a.meta={title:"Установка",toc:["Использование","Server-Side rendering"]};a.default=function(e){var a=e.components,n=function(e,a){var n={};for(var t in e)a.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n}(e,["components"]);return t.default.createElement(s.MDXTag,{name:"wrapper",Layout:(0,r.default)(p)(function(e){return e.children}),layoutProps:n,components:a},t.default.createElement(s.MDXTag,{name:"pre",components:a},t.default.createElement(s.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-sh",metaString:""}},"npm install --save rambler-ui")),t.default.createElement(s.MDXTag,{name:"p",components:a},"Библиотека и ее зависимости используют фичи ES2015+: ",t.default.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"Promise")," и т. д. Для использования в старых браузерах необходимо добавить ",t.default.createElement(s.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://babeljs.io/docs/usage/polyfill/"}},t.default.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"a"},"babel-polyfill"))," в ваше приложение."),t.default.createElement(s.MDXTag,{name:"h2",components:a},"Использование"),t.default.createElement(s.MDXTag,{name:"pre",components:a},t.default.createElement(s.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-js",metaString:""}},t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-comment"}},"// src/index.js"),"\n",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"import")," React ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"from")," ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},"'react'"),"\n",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"import")," { render } ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"from")," ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},"'react-dom'"),"\n",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"import")," { ApplyTheme } ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"from")," ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},"'rambler-ui/theme'"),"\n",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"import")," App ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"from")," ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},"'./App'"),"\n\n",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"const")," app = (\n  ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"xml"}},t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-tag"}},"<",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-name"}},"ApplyTheme"),">"),"\n    "),"<App />",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"xml"}},"\n  ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-tag"}},"</",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-name"}},"ApplyTheme"),">")),"\n)\n\nrender(app, ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-built_in"}},"document"),".getElementById(",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},"'app'"),"))\n\n",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-comment"}},"// src/App.js"),"\n",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"import")," React ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"from")," ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},"'react'"),"\n",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"import")," Button ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"from")," ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},"'rambler-ui/Button'"),"\n\n",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"export")," ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"default")," () => (\n  ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"xml"}},t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-tag"}},"<",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-name"}},"div"),">"),"\n    "),'<Button buttonType="button">\n      Кнопка\n    </Button>',t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"xml"}},"\n  ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-tag"}},"</",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-name"}},"div"),">")),"\n)")),t.default.createElement(s.MDXTag,{name:"p",components:a},"Более подробно можно посмотреть в ",t.default.createElement(s.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/rambler-digital-solutions/rambler-ui/tree/master/examples/simple"}},"примере"),"."),t.default.createElement(s.MDXTag,{name:"h2",components:a},"Server-Side rendering"),t.default.createElement(s.MDXTag,{name:"p",components:a},"Для отрисовки на сервере необходимо в ",t.default.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"<ApplyTheme />")," пробрасывать отдельный ",t.default.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"sheetsRegistry"),", для извлечения стилей и вставки их непосредственно в html ответа сервера. После загрузки и регидратации приложения в браузере, необходимо удалить извлеченные на сервере стили из DOM для избежания сайд-эффектов."),t.default.createElement(s.MDXTag,{name:"pre",components:a},t.default.createElement(s.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-js",metaString:""}},t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-comment"}},"// src/render.js"),"\n",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"import")," React ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"from")," ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},"'react'"),"\n",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"import")," { renderToString } ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"from")," ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},"'react-dom/server'"),"\n",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"import")," { ApplyTheme, createSheetsRegistry } ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"from")," ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},"'rambler-ui/theme'"),"\n",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"import")," App ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"from")," ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},"'./App'"),"\n\n",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"export")," ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"default")," ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-function"}},t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-keyword"}},"function")," ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-title"}},"render"),"(",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-params"}},"req, res"),") "),"{\n  ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"const")," sheetsRegistry = createSheetsRegistry()\n\n  ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"const")," app = renderToString(\n    ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"xml"}},t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-tag"}},"<",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-name"}},"ApplyTheme")," ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-attr"}},"sheetsRegistry"),"=",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-string"}},"{sheetsRegistry}"),">"),"\n      "),"<App />",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"xml"}},"\n    ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-tag"}},"</",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-name"}},"ApplyTheme"),">")),"\n  )\n\n  ",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"return")," res.send(",t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'`\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <style type="text/css">\n          ',t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-subst"}},"${sheetsRegistry.toString()}"),'\n        </style>\n      </head>\n      <body>\n        <div id="app">\n          ',t.default.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-subst"}},"${app}"),'\n        </div>\n        <script src="./index.js"><\/script>\n      </body>\n    </html>\n  `'),")\n}")),t.default.createElement(s.MDXTag,{name:"p",components:a},"Более подробно можно посмотреть в ",t.default.createElement(s.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/rambler-digital-solutions/rambler-ui/tree/master/examples/ssr"}},"примере с SSR")," или в документации ",t.default.createElement(s.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/cssinjs/jss/blob/master/docs/ssr.md"}},"JSS"),"."))}},596:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=o(n(2)),s=n(38),r=o(s);function o(e){return e&&e.__esModule?e:{default:e}}var p={root:{margin:0,fontFamily:s.fontFamily.Roboto,fontSize:40,fontWeight:300,lineHeight:"50px",overflow:"hidden",textOverflow:"ellipsis"}};a.default=(0,r.default)(p)(function(e){var a=e.classes,n=e.style,s=e.children;return t.default.createElement("h1",{className:a.root,style:n},s)})},628:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=o(n(2)),s=n(38),r=o(s);function o(e){return e&&e.__esModule?e:{default:e}}a.default=(0,r.default)(function(){return{root:{display:"inline",padding:".2em .3em",backgroundColor:"rgba(238, 242, 244, .5)",fontFamily:s.fontFamily.Menlo,fontSize:"92%",lineHeight:"18px"}}})(function(e){var a=e.classes,n=e.children;return t.default.createElement("code",{className:a.root},n)})},629:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=o(n(2)),s=n(38),r=o(s);function o(e){return e&&e.__esModule?e:{default:e}}a.default=(0,r.default)(function(){return{root:{padding:"14px 25px 14px 20px",overflow:"auto",backgroundColor:"rgba(238, 242, 244, .5)",fontFamily:s.fontFamily.Menlo,fontSize:13,lineHeight:"18px","& code":{padding:0,backgroundColor:"transparent",fontFamily:"inherit"}}}})(function(e){var a=e.classes,n=e.children;return t.default.createElement("pre",{className:a.root},n)})},630:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=o(n(2)),s=n(38),r=o(s);function o(e){return e&&e.__esModule?e:{default:e}}var p={root:{marginTop:40,marginBottom:25,fontFamily:s.fontFamily.CorsicaRamblerLX,fontSize:35,fontWeight:500,lineHeight:"35px"}};a.default=(0,r.default)(p)(function(e){var a=e.classes,n=e.children;return t.default.createElement("h2",{className:a.root},n)})},631:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){if(o[e])return o[e];var a=e.substring(1).split(/\//),n=a[0];if("components"!==n)return r.default.repoLink+"tree/"+r.default.branch+"/docs"+e+"/index.md";var t=a.pop();if(null==t||n===t)return;return r.default.repoLink+"tree/"+r.default.branch+"/src/"+t};var t,s=n(280),r=(t=s)&&t.__esModule?t:{default:t};var o={}},632:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=function(){function e(e,a){for(var n=0;n<a.length;n++){var t=a[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(a,n,t){return n&&e(a.prototype,n),t&&e(a,t),a}}(),s=n(2),r=E(s),o=n(610),p=n(99),m=E(n(268)),l=E(n(631)),c=E(n(38));n(635);var d=E(n(596)),u=E(n(630)),i=E(n(277)),f=E(n(276)),g=E(n(629)),h=E(n(628)),N=E(n(279));function E(e){return e&&e.__esModule?e:{default:e}}function T(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?e:a}var M={h1:d.default,h2:u.default,h3:i.default,pre:g.default,inlineCode:h.default},y=function(e){return{header:{padding:"107px 30px 48px",backgroundColor:e.colors.argentumLight,"@media screen and (min-width: 768px)":{padding:"65px 200px 35px 100px"},"& h1 + p":{marginTop:25,marginBottom:0,"@media screen and (min-width: 768px)":{marginTop:15}}},toc:{marginTop:15,marginLeft:-6,"@media screen and (min-width: 768px)":{marginLeft:-11},"& button":{marginTop:15,marginRight:10}},source:{position:"absolute",top:30,right:30,"@media screen and (min-width: 768px)":{top:30,right:40},"& svg":{width:20,height:20}},content:{padding:"40px 0",marginLeft:30,marginRight:30,"@media screen and (min-width: 768px)":{marginLeft:100,marginRight:100,maxWidth:670},"& ~ footer":{display:"flex"}}}},D=r.default.createElement(N.default,null);a.default=function(e){return function(a){return(0,p.withRouter)((0,c.default)(y)(function(n){function p(){var e,a,n;!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,p);for(var t=arguments.length,s=Array(t),r=0;r<t;r++)s[r]=arguments[r];return a=n=T(this,(e=p.__proto__||Object.getPrototypeOf(p)).call.apply(e,[this].concat(s))),n.sourceUrl=(0,l.default)(n.props.location.pathname),n.scrollToHeading=function(e){var a=parseInt(e.currentTarget.getAttribute("data-index"),10),t=n.headingElements[a];t&&window.scrollTo(0,t.offsetTop-30)},T(n,a)}return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}(p,s.PureComponent),t(p,[{key:"componentDidMount",value:function(){var e=this.props.classes;this.headingElements=document.querySelectorAll("."+e.content+" h2, ."+e.content+" h3")}},{key:"render",value:function(){var n=this,t=this.props,p=t.classes,l=(t.location,t.history,function(e,a){var n={};for(var t in e)a.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n}(t,["classes","location","history"]));return r.default.createElement(o.MDXProvider,{components:M},r.default.createElement(s.Fragment,null,r.default.createElement("header",{className:p.header},this.sourceUrl&&r.default.createElement(m.default,{className:p.source,size:"small",href:this.sourceUrl,rel:"noreferrer noopener",target:"_blank"},D),r.default.createElement(d.default,null,e.title),e.description&&r.default.createElement("p",null,e.description),e.toc&&r.default.createElement("div",{className:p.toc},e.toc.map(function(e,a){return r.default.createElement(f.default,{type:"outline",key:e,"data-index":a,onClick:n.scrollToHeading},e)}))),r.default.createElement("div",{className:p.content},r.default.createElement(a,l))))}}]),p}()))}}}}]);