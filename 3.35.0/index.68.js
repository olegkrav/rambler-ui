(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{149:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(2),r=u(i),a=u(n(710)),l=u(n(867));function u(e){return e&&e.__esModule?e:{default:e}}var s=r.default.createElement(l.default,{color:"magenta"}),c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),o(t,[{key:"render",value:function(){return r.default.createElement("div",{style:{display:"flex",alignItems:"center"}},r.default.createElement("div",{style:{width:"33%",display:"flex",alignItems:"center"}},"Подсказка справа",r.default.createElement(a.default,{style:{marginLeft:15}},"Номер телефона поможет вам восстановить пароль от почты")),r.default.createElement("div",{style:{width:"33%",display:"flex",alignItems:"center"}},"Кастомная иконка",r.default.createElement(a.default,{icon:s,style:{marginLeft:15}},"Номер телефона поможет вам восстановить пароль от почты")),r.default.createElement("div",{style:{width:"33%",display:"flex",alignItems:"center",justifyContent:"flex-end"}},"Подсказка слева",r.default.createElement(a.default,{style:{marginLeft:15}},"Номер телефона поможет вам восстановить пароль от почты")))}}]),t}();t.default=c},709:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,i,r,a,l,u,s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(2),f=g(c),d=g(n(1)),p=g(n(25)),h=g(n(722)),m=g(n(267)),y=n(274),b=n(119),v=n(35),O=n(83);function g(e){return e&&e.__esModule?e:{default:e}}function _(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function P(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var E=(0,v.injectSheet)(function(e){return{hint:{extend:O.isolateMixin,fontFamily:e.fontFamily,position:"relative",color:e.hint.colors.text,borderRadius:e.hint.borderRadius,boxSizing:"border-box",boxShadow:e.hint.boxShadow,paddingTop:15,paddingBottom:20,width:275,backgroundColor:e.hint.colors.background,fontSize:e.hint.fontSize,lineHeight:1.31,opacity:.01,transitionDuration:e.hint.animationDuration+"ms",transitionProperty:"opacity"},isVisible:{opacity:1},icon:{position:"absolute"},left:{left:-15,paddingLeft:47,paddingRight:24,"& $icon":{left:15}},right:{left:15,paddingLeft:24,paddingRight:47,"& $icon":{right:15}},top:{top:-14,"& $icon":{top:14}},bottom:{top:19,"& $icon":{bottom:19}}}},{name:"HintContent"})((r=i=function(e){function t(){return _(this,t),w(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return P(t,c.PureComponent),s(t,[{key:"render",value:function(){var e=this.props,t=e.isVisible,n=e.className,o=e.style,i=e.icon,r=e.children,a=e.pointX,l=e.pointY,u=e.theme,s=e.classes,d=e.onMouseEnter,h=e.onMouseLeave,y=e.onBecomeVisible,b=e.onBecomeInvisible,v=i.props||{},O=(0,c.cloneElement)(i,{className:(0,p.default)(s.icon,v.className),color:v.color||u.hint.colors.icon});return f.default.createElement(m.default,{isVisible:t,activeClassName:s.isVisible,animationDuration:u.hint.animationDuration,onVisible:y,onInvisible:b},f.default.createElement("div",{className:(0,p.default)(s.hint,s[a],s[l],n),style:o,onMouseEnter:d,onMouseLeave:h},O,r))}}]),t}(),i.propTypes={className:d.default.string,style:d.default.object,icon:d.default.node.isRequired,children:d.default.node.isRequired,isVisible:d.default.bool.isRequired,pointX:d.default.oneOf(b.POINTS_X),pointY:d.default.oneOf(b.POINTS_Y),onMouseEnter:d.default.func,onMouseLeave:d.default.func,onBecomeVisible:d.default.func,onBecomeInvisible:d.default.func},o=r))||o,j=(0,v.injectSheet)(function(){return{icon:{display:"inline-block"}}},{name:"Hint"})((u=l=function(e){function t(e){_(this,t);var n=w(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.show=function(){n.state.isOpened?clearTimeout(n.hideTimeout):n.setState({isOpened:!0})},n.hide=function(){n.state.isOpened&&(clearTimeout(n.hideTimeout),n.hideTimeout=setTimeout(function(){n.setState({isOpened:!1})},60))},n.state={isOpened:e.isOpened||!1},n}return P(t,c.PureComponent),s(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.isOpened;void 0!==t&&t!==this.props.isOpened&&(t?this.show():this.hide())}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.style,o=e.contentClassName,i=e.contentStyle,r=e.icon,a=e.children,l=e.positionX,u=e.theme,s=e.classes,d=e.closeOnScroll,h="left"===l?"right":"left",m=r.props||{},b=(0,c.cloneElement)(r,{style:n,className:(0,p.default)(s.icon,t),color:m.color||u.hint.colors.icon,onMouseEnter:this.show,onTouchStart:this.show,onMouseLeave:this.hide});return f.default.createElement(y.FixedOverlay,{isOpened:this.state.isOpened,anchor:b,content:f.default.createElement(E,{className:o,style:i,icon:r,onMouseEnter:this.show,onMouseLeave:this.hide},a),autoPositionX:!0,autoPositionY:!0,anchorPointX:h,contentPointX:h,anchorPointY:"top",contentPointY:"top",cachePositionOptions:!1,closeOnScroll:d,onContentClose:this.hide})}}]),t}(),l.propTypes={className:d.default.string,style:d.default.object,icon:d.default.node.isRequired,contentClassName:d.default.string,contentStyle:d.default.object,children:d.default.node.isRequired,isOpened:d.default.bool,positionX:d.default.oneOf(["left","right"]),closeOnScroll:d.default.bool},l.defaultProps={positionX:"right",closeOnScroll:!0,icon:f.default.createElement(h.default,{size:16})},a=u))||a;t.default=j},710:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(709);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return(e=o,e&&e.__esModule?e:{default:e}).default;var e}})},722:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};t.default=u;var i=a(n(2)),r=a(n(91));function a(e){return e&&e.__esModule?e:{default:e}}var l=i.default.createElement("path",{d:"M8 0c4.416 0 8 3.584 8 8s-3.584 8-8 8-8-3.584-8-8 3.584-8 8-8zm0 14.5c3.583 0 6.5-2.917 6.5-6.5S11.583 1.5 8 1.5A6.509 6.509 0 0 0 1.5 8c0 3.583 2.917 6.5 6.5 6.5zM6.917 9.532c0-.593.072-1.065.216-1.416.144-.351.407-.697.79-1.038.383-.34.638-.617.765-.831.127-.214.19-.44.19-.676 0-.715-.33-1.073-.99-1.073-.313 0-.564.096-.752.289-.188.192-.287.458-.295.796H5c.008-.808.27-1.44.784-1.897C6.298 3.229 7 3 7.888 3c.897 0 1.593.217 2.089.65.495.434.742 1.047.742 1.838 0 .36-.08.7-.241 1.02-.16.319-.442.673-.844 1.062l-.514.49c-.322.308-.506.67-.553 1.085l-.025.387H6.917zm-.184 1.948c0-.283.096-.517.289-.7.192-.185.439-.277.74-.277.3 0 .546.092.739.276a.929.929 0 0 1 .289.701c0 .28-.095.51-.283.692-.188.182-.437.273-.746.273s-.557-.09-.746-.273a.921.921 0 0 1-.282-.692z",fillRule:"evenodd"});function u(e){return i.default.createElement(r.default,o({},e,{viewBox:"0 0 16 16"}),l)}u.displayName="QuestionIcon"},867:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};t.default=u;var i=a(n(2)),r=a(n(91));function a(e){return e&&e.__esModule?e:{default:e}}var l=i.default.createElement("path",{d:"M7.25 11.75h1.5v-4.5h-1.5v4.5zM8 .5C3.86.5.5 3.86.5 8c0 4.14 3.36 7.5 7.5 7.5 4.14 0 7.5-3.36 7.5-7.5C15.5 3.86 12.14.5 8 .5zM8 14c-3.308 0-6-2.693-6-6 0-3.308 2.692-6 6-6 3.307 0 6 2.692 6 6 0 3.307-2.693 6-6 6zm-.75-8.25h1.5v-1.5h-1.5v1.5z",fillRule:"evenodd"});function u(e){return i.default.createElement(r.default,o({},e,{viewBox:"0 0 16 16"}),l)}u.displayName="InfoIcon"}}]);