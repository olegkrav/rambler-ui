(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{125:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l,n=function(){function e(e,t){for(var o=0;o<t.length;o++){var l=t[o];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,o,l){return o&&e(t.prototype,o),l&&e(t,l),t}}(),a=o(698),r=o(2),i=(l=r)&&l.__esModule?l:{default:l};function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var s=i.default.createElement("h4",null,"block, equalWidth"),c=i.default.createElement(a.ToggleOption,{value:"Rambler"},"Rambler&Co"),d=i.default.createElement(a.ToggleOption,{value:"Yandex"},"Yandex"),f=i.default.createElement(a.ToggleOption,{value:"Mail"},"Mail.ru"),g=i.default.createElement(a.ToggleOption,{value:"Google"},"Google"),p=i.default.createElement("h4",null,"disabled, equalWidth"),h=i.default.createElement(a.ToggleOption,{value:"Google"},"Google"),b=i.default.createElement(a.ToggleOption,{value:"Rambler"},"Rambler&Co"),m=i.default.createElement(a.ToggleOption,{value:"Yandex"},"Yandex"),v=i.default.createElement(a.ToggleOption,{value:"Mail"},"Mail.ru"),y=i.default.createElement("h4",null,"size: medium, behavior: toggle"),O=i.default.createElement(a.ToggleOption,{value:"Yandex"},"Yandex"),E=i.default.createElement(a.ToggleOption,{value:"Google"},"Google"),k=i.default.createElement(a.ToggleOption,{value:"Mail"},"Mail.ru"),x=i.default.createElement(a.ToggleOption,{value:"Rambler"},"Rambler&Co"),C=i.default.createElement("h4",null,"variation: transparent"),w=i.default.createElement(a.ToggleOption,{value:"Mail"},"Mail.ru"),T=i.default.createElement(a.ToggleOption,{value:"Yandex"},"Yandex"),_=i.default.createElement(a.ToggleOption,{value:"Rambler"},"Rambler&Co"),j=i.default.createElement(a.ToggleOption,{value:"Google"},"Google"),z=i.default.createElement("h4",null,"variation: transparent, disabled"),M=i.default.createElement(a.ToggleOption,{value:"Rambler"},"Rambler&Co"),P=i.default.createElement(a.ToggleOption,{value:"Mail"},"Mail.ru"),R=i.default.createElement(a.ToggleOption,{value:"Google"},"Google"),S=i.default.createElement(a.ToggleOption,{value:"Yandex"},"Yandex"),W=i.default.createElement("br",null),N=function(e){function t(){var e,o,l;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,a=Array(n),r=0;r<n;r++)a[r]=arguments[r];return o=l=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),l.state={toggleValue:"Rambler"},l.onChange=function(e,t){l.setState({toggleValue:t})},u(l,o)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),n(t,[{key:"render",value:function(){return i.default.createElement("div",null,i.default.createElement("div",{style:{width:480,marginBottom:20}},s,i.default.createElement(a.Toggle,{value:this.state.toggleValue,className:"toggle",onChange:this.onChange,block:!0,equalWidth:!0},c,d,f,g)),i.default.createElement("div",{style:{marginBottom:20}},p,i.default.createElement(a.Toggle,{value:this.state.toggleValue,onChange:this.onChange,disabled:!0,equalWidth:!0},h,b,m,v)),i.default.createElement("div",{style:{marginBottom:20}},y,i.default.createElement(a.Toggle,{value:this.state.toggleValue,onChange:this.onChange,size:"medium",behavior:"toggle"},O,E,k,x)),i.default.createElement("div",{style:{marginBottom:20}},C,i.default.createElement(a.Toggle,{value:this.state.toggleValue,onChange:this.onChange,variation:"transparent"},w,T,_,j)),i.default.createElement("div",{style:{marginBottom:20}},z,i.default.createElement(a.Toggle,{value:this.state.toggleValue,onChange:this.onChange,disabled:!0,variation:"transparent"},M,P,R,S)),W,i.default.createElement("div",null,"this.state.toggleValue: ",i.default.createElement("b",null,this.state.toggleValue)))}}]),t}();t.default=N},696:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l,n,a,r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&(e[l]=o[l])}return e},i=function(){function e(e,t){for(var o=0;o<t.length;o++){var l=t[o];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,o,l){return o&&e(t.prototype,o),l&&e(t,l),t}}(),u=o(2),s=p(u),c=p(o(1)),d=p(o(25)),f=o(35),g=o(83);function p(e){return e&&e.__esModule?e:{default:e}}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var b=(0,f.injectSheet)(function(e){return{toggleOption:{extend:[g.isolateMixin,g.middleMixin],fontFamily:e.fontFamily,display:"inline-block",textAlign:"center",userSelect:"none",whiteSpace:"nowrap",cursor:"pointer",color:"inherit",outline:"none !important",background:"transparent","&::-moz-focus-inner":{border:"none !important",outline:"none !important"}},"size-small":{fontSize:e.toggle.sizes.small.fontSize,height:e.toggle.sizes.small.height,lineHeight:e.toggle.sizes.small.height-2+"px",padding:"0 "+e.toggle.sizes.small.paddingHr+"px"},"size-medium":{fontSize:e.toggle.sizes.medium.fontSize,height:e.toggle.sizes.medium.height,lineHeight:e.toggle.sizes.medium.height-2+"px",padding:"0 "+e.toggle.sizes.medium.paddingHr+"px"},icon:{display:"inline-block",marginRight:10}}},{name:"ToggleOption"})((a=n=function(e){function t(){var e,o,l;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,a=Array(n),r=0;r<n;r++)a[r]=arguments[r];return o=l=h(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),l.onClick=function(e){l.props.onPress(e,l.props.value),l.props.onClick&&l.props.onClick(e)},h(l,o)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.Component),i(t,[{key:"renderIcon",value:function(e){if(e){var t=this.props,o=t.size,l=t.isSelected,n=t.theme,a=t.classes,i={size:n.toggle.sizes[o].icon,color:l?n.toggle.selectedColor:n.toggle.color},s=e.props||{},c=(0,d.default)(s.className,a.icon),f=r({},i,s,{className:c});return(0,u.cloneElement)(e,f)}}},{key:"render",value:function(){var e=this.props,t=e.icon,o=e.size,l=e.children,n=e.className,a=e.nodeRef,i=e.classes,u=(e.isSelected,e.onPress,e.theme,function(e,t){var o={};for(var l in e)t.indexOf(l)>=0||Object.prototype.hasOwnProperty.call(e,l)&&(o[l]=e[l]);return o}(e,["icon","size","children","className","nodeRef","classes","isSelected","onPress","theme"])),c=(0,d.default)(i.toggleOption,i["size-"+o],n);return s.default.createElement("button",r({type:"button",tabIndex:"0"},u,{className:c,onClick:this.onClick,ref:a}),this.renderIcon(t),l)}}]),t}(),n.propTypes={value:c.default.any.isRequired,className:c.default.string,style:c.default.object,children:c.default.node,icon:c.default.node,size:c.default.oneOf(["small","medium"]),isSelected:c.default.bool,onPress:c.default.func,nodeRef:c.default.func},l=a))||l;b.displayName="ruiToggleOption",t.default=b},697:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l,n,a,r=function(){function e(e,t){for(var o=0;o<t.length;o++){var l=t[o];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,o,l){return o&&e(t.prototype,o),l&&e(t,l),t}}(),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&(e[l]=o[l])}return e},u=o(2),s=p(u),c=p(o(1)),d=p(o(25)),f=o(35),g=o(83);function p(e){return e&&e.__esModule?e:{default:e}}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var b=new Promise(function(e){"complete"===document.readyState?e():window.addEventListener("load",e)}),m=(0,f.injectSheet)(function(e){return{toggle:{extend:g.isolateMixin,fontFamily:e.fontFamily,display:"inline-block","&$block":{display:"flex"},"&, & *":{transitionDuration:e.toggle.animationDuration+"ms",transitionProperty:"background, opacity, border, box-shadow"}},option:{"&&":{fontFamily:e.fontFamily,textAlign:"center",borderStyle:"solid",color:e.toggle.colors.default.text,borderWidth:1,borderColor:e.toggle.colors.default.border,background:e.toggle.colors.default.background,cursor:"pointer",userSelect:"none",position:"relative",display:"inline-block",marginLeft:-1},"&:first-child":{marginLeft:0,borderTopLeftRadius:e.toggle.borderRadius,borderBottomLeftRadius:e.toggle.borderRadius},"&:last-child":{borderWidth:1,borderTopRightRadius:e.toggle.borderRadius,borderBottomRightRadius:e.toggle.borderRadius},"&:enabled:hover":{zIndex:1},"&:active":{zIndex:1},"&:disabled":{color:e.toggle.colors.disabled.text,cursor:"not-allowed"}},isSelected:{zIndex:2,"&:enabled:hover":{zIndex:3}},regular:i({"& $option:disabled":{borderColor:e.toggle.colors.disabled.border},"& $option:enabled:hover":{borderColor:e.toggle.colors.hover.border,color:e.toggle.colors.checked.text}},(0,g.focusSourceMixin)("other","& $option:focus",{color:e.toggle.colors.focus.text}),{"& $option:active":{color:e.toggle.colors.active.text,background:e.toggle.colors.active.background},"& $isSelected:enabled":{borderColor:e.toggle.colors.checked.border,color:e.toggle.colors.checked.text},"& $isSelected:enabled:hover":{borderColor:e.toggle.colors.checkedHover.border,color:e.toggle.colors.checkedHover.text},"& $isSelected:disabled":{background:e.toggle.colors.checkedDisabled.background}}),transparent:i({"& $isSelected":{background:e.toggle.transparentColors.checked.background},"& $option:enabled:hover":{background:e.toggle.transparentColors.hover.background}},(0,g.focusSourceMixin)("other","& $option:focus",{color:e.toggle.colors.focus.text}),{"& $option:disabled":{borderColor:e.toggle.transparentColors.disabled.border}}),block:{flexDirection:"row",flexWrap:"nowrap"},equalWidth:{"& $option":{flex:1,flexBasis:0}},"behavior-radio":{"& $isSelected:enabled":{cursor:"default"}}}},{name:"Toggle"})((a=n=function(e){function t(){var e,o,l;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,a=Array(n),r=0;r<n;r++)a[r]=arguments[r];return o=l=h(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),l.state={value:null,minWidth:0},l.optionsElements=[],l.addElement=function(e){l.optionsElements.push(e)},l.onValueChange=function(e,t){t===l.value&&"toggle"===l.props.behavior&&(t=null),l.setValue(t),l.props.onChange&&l.props.onChange(e,t)},h(l,o)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.Component),r(t,[{key:"componentWillMount",value:function(){this.setValue(this.props.value)}},{key:"componentWillReceiveProps",value:function(e){this.setValue(e.value)}},{key:"componentDidMount",value:function(){var e=this;this.shouldCalcMinWidth()&&b.then(function(){e.setState({minWidth:e.calcMinWidth()})})}},{key:"calcMinWidth",value:function(){return this.optionsElements.reduce(function(e,t){return Math.max(t?t.offsetWidth:0,e)},0)}},{key:"shouldCalcMinWidth",value:function(){return this.props.equalWidth&&!this.props.block}},{key:"setValue",value:function(e){this.value!==e&&(this.value=e,this.setState({value:e}))}},{key:"render",value:function(){var e=this,t=this.props,o=t.children,l=t.size,n=t.block,a=t.equalWidth,r=t.behavior,c=t.disabled,f=t.variation,g=t.className,p=t.classes,h=(t.theme,function(e,t){var o={};for(var l in e)t.indexOf(l)>=0||Object.prototype.hasOwnProperty.call(e,l)&&(o[l]=e[l]);return o}(t,["children","size","block","equalWidth","behavior","disabled","variation","className","classes","theme"]));this.optionsElements=[];var b=0,m=s.default.Children.map(o,function(t){if(!t.type||"ruiToggleOption"!==t.type.displayName)throw new Error("Child component should be instance of <ToggleOption />");var o=t.props.value,n=o===e.state.value;return(0,u.cloneElement)(t,{size:l,disabled:c,isSelected:n,"aria-pressed":n,key:void 0!==t.key?t.key:"string"==typeof o||"number"==typeof o?o:b++,onPress:e.onValueChange,nodeRef:e.shouldCalcMinWidth()?e.addElement:null,className:(0,d.default)(p.option,n&&p.isSelected,t.props.className),style:i({},t.props.style,{minWidth:e.state.minWidth})})}),v=(0,d.default)(g,p.toggle,p["behavior-"+r],n&&p.block,p[f],a&&p.equalWidth);return s.default.createElement("div",i({},h,{className:v}),m)}}]),t}(),n.propTypes={value:c.default.any,onChange:c.default.func,className:c.default.string,style:c.default.object,children:c.default.node,size:c.default.oneOf(["small","medium"]),behavior:c.default.oneOf(["radio","toggle"]),block:c.default.bool,equalWidth:c.default.bool,disabled:c.default.bool,variation:c.default.oneOf(["regular","transparent"])},n.defaultProps={size:"small",behavior:"radio",block:!1,equalWidth:!1,disabled:!1,variation:"regular"},l=a))||l;t.default=m},698:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=o(697);Object.defineProperty(t,"Toggle",{enumerable:!0,get:function(){return a(l).default}});var n=o(696);function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"ToggleOption",{enumerable:!0,get:function(){return a(n).default}})}}]);