(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{147:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(2),a=u(r),i=u(n(628)),l=u(n(275));function u(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var c=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,a=Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=o=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),o.state={loading:!1,buttonLoading:!1},o.load=function(){var e=new Promise(function(e){setTimeout(function(){o.setState({buttonLoading:!1}),e()},3e3)});o.setState({loading:e,buttonLoading:!0})},s(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),o(t,[{key:"render",value:function(){return a.default.createElement("div",null,a.default.createElement("div",null,a.default.createElement("div",{style:{height:200,position:"relative"}},a.default.createElement(i.default,{loading:this.state.loading},"Hello world",a.default.createElement(l.default,{type:"secondary",style:{position:"absolute",left:0,bottom:0},loading:this.state.buttonLoading,onClick:this.load},"Загрузить")))))}}]),t}();t.default=c},627:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,r,a,i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(2),u=f(l),s=(f(n(1)),f(n(32))),c=f(n(203));function f(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var p=(0,n(35).injectSheet)(function(e){return{loader:{position:"relative",width:"100%",minHeight:"100%"},overlay:{position:"absolute",background:e.loader.color,transitionProperty:"opacity",pointerEvents:"none",transitionDuration:e.loader.animationDuration,opacity:0,zIndex:-1,left:0,top:0,right:0,bottom:0},isLoading:{"&$overlay":{opacity:.7,zIndex:"initial"},"&$loader":{pointerEvents:"none"}},blur:{filter:"blur(1px)"}}},{name:"Loader"})((a=r=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,a=Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=o=d(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),o.state={loading:!1},d(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.PureComponent),i(t,[{key:"componentDidMount",value:function(){this.updateLoading(this.props.loading)}},{key:"componentWillReceiveProps",value:function(e){var t=e.loading;this.updateLoading(t)}},{key:"updateLoading",value:function(e){var t=this;"boolean"==typeof e?this.setState({loading:e}):(this.setState({loading:!0}),e.then(function(){t.setState({loading:!1})}))}},{key:"render",value:function(){var e=this.state.loading,t=this.props,n=t.className,o=t.loadingClassName,r=t.overlayClassName,a=t.style,i=t.classes,l=t.spinnerClassName,f=t.spinnerColor,d=t.children,p=t.hideContent,y=t.blurContent;return u.default.createElement("div",{style:a,className:(0,s.default)(i.loader,n,e&&(0,s.default)(o,i.isLoading))},!(e&&p)&&(y?u.default.createElement("div",{className:(0,s.default)(e&&y&&i.blur)},d):d),u.default.createElement("div",{className:(0,s.default)(i.overlay,r,e&&i.isLoading)}),e&&u.default.createElement(c.default,{className:(0,s.default)(i.spinner,l),color:f}))}}]),t}(),r.defaultProps={loading:!1,hideContent:!1,blurContent:!1},o=a))||o;t.default=p,p.propTypes={}},628:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(627);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return(e=o,e&&e.__esModule?e:{default:e}).default;var e}})}}]);