(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{127:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=n(2),o=c(a),r=n(593),l=c(n(869)),s=c(n(609));function c(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var d=["Чехия","Мальта","Нидерланды","Германия","Гватемала","США","Люксембург","Канада","Австралия"],f=o.default.createElement(l.default,null),p=o.default.createElement(l.default,null),h=o.default.createElement(l.default,{color:"#262626"}),m=o.default.createElement("h4",null,"onChange"),v=o.default.createElement("h4",null,"onChange, items with icon"),b=o.default.createElement("h4",null,"onChange, isExpanded, items with onClick"),y=o.default.createElement("h4",null,"onChange, items with onClick with icon"),g=o.default.createElement("h4",null,"onMoreClick"),k=o.default.createElement("h4",null,"isExpanded, items with onClick"),E=o.default.createElement("h4",null,"items with onClick and colored icon"),C=o.default.createElement("h4",null,"disabled, onChange, onMoreClick"),w=o.default.createElement("h4",null,"disabled, isExpanded, onChange, items with onClick"),x=o.default.createElement("h4",null,"disabled, onChange, items with onClick and icon"),$=function(e){function t(){var e,n,i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,o=Array(a),r=0;r<a;r++)o[r]=arguments[r];return n=i=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),i.state={items:d.slice(2,6)},i.toggleValue=function(e,t){i.setState({items:t?i.state.items.concat(e):i.state.items.filter(function(t){return t!==e})})},i.changeValue=function(e){i.setState({items:e})},u(i,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),i(t,[{key:"render",value:function(){var e=this,t=this.state.items.map(function(e){return o.default.createElement(r.TagsInputItem,{value:e,key:e},e)}),n=this.state.items.map(function(e){return o.default.createElement(r.TagsInputItem,{value:e,key:e,icon:f},e)}),i=this.state.items.map(function(e){return o.default.createElement(r.TagsInputItem,{value:e,key:e,onClick:function(){}},e)}),a=this.state.items.map(function(e){return o.default.createElement(r.TagsInputItem,{value:e,key:e,onClick:function(){},icon:p},e)}),l=this.state.items.map(function(e){return o.default.createElement(r.TagsInputItem,{value:e,key:e,onClick:function(){},icon:h},e)});return o.default.createElement("div",null,d.map(function(t){return o.default.createElement(s.default,{checked:e.state.items.indexOf(t)>-1,style:{marginRight:20},onCheck:function(n,i){e.toggleValue(t,i)},key:t},t)}),o.default.createElement("div",{style:{display:"flex",marginLeft:-20}},["regular","background"].map(function(s){return o.default.createElement("div",{style:{marginLeft:20,flex:"none",width:"calc(50% - 20px)"},key:s},o.default.createElement("h3",null,"type: "+s),m,o.default.createElement("div",{style:{maxWidth:300}},o.default.createElement(r.TagsInput,{onChange:e.changeValue,type:s},t)),v,o.default.createElement("div",{style:{maxWidth:300}},o.default.createElement(r.TagsInput,{onChange:e.changeValue,type:s},n)),b,o.default.createElement("div",{style:{maxWidth:300}},o.default.createElement(r.TagsInput,{onChange:e.changeValue,isExpanded:!0,type:s},i)),y,o.default.createElement("div",{style:{maxWidth:300}},o.default.createElement(r.TagsInput,{onChange:e.changeValue,type:s},a)),g,o.default.createElement("div",{style:{maxWidth:240}},o.default.createElement(r.TagsInput,{type:s,onMoreClick:function(){}},t)),k,o.default.createElement("div",{style:{maxWidth:240}},o.default.createElement(r.TagsInput,{isExpanded:!0,type:s},i)),E,o.default.createElement("div",{style:{maxWidth:240}},o.default.createElement(r.TagsInput,{type:s},l)),C,o.default.createElement("div",{style:{maxWidth:240}},o.default.createElement(r.TagsInput,{onChange:e.changeValue,onMoreClick:function(){},disabled:!0,type:s},t)),w,o.default.createElement("div",{style:{maxWidth:240}},o.default.createElement(r.TagsInput,{onChange:e.changeValue,isExpanded:!0,disabled:!0,type:s},i)),x,o.default.createElement("div",{style:{maxWidth:240}},o.default.createElement(r.TagsInput,{onChange:e.changeValue,disabled:!0,type:s},a)))})),o.default.createElement("div",{style:{marginTop:40}},"this.state.value: ",o.default.createElement("strong",null,JSON.stringify(this.state.items))))}}]),t}();t.default=$},593:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(626);Object.defineProperty(t,"TagsInput",{enumerable:!0,get:function(){return o(i).default}});var a=n(625);function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"TagsInputItem",{enumerable:!0,get:function(){return o(a).default}})},597:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};t.default=s;var a=r(n(2)),o=r(n(91));function r(e){return e&&e.__esModule?e:{default:e}}var l=a.default.createElement("path",{d:"M12-6H-3h15zM-3 14h15-15zM.146 2.854a.5.5 0 0 0 0 .707l2.647 2.646a.999.999 0 0 0 1.414 0l4.647-4.646a.5.5 0 0 0 0-.707L8.146.146a.5.5 0 0 0-.707 0L3.5 4.086l-1.939-1.94a.5.5 0 0 0-.707 0l-.708.708z",fillRule:"evenodd"});function s(e){return a.default.createElement(o.default,i({},e,{viewBox:"0 0 9 7"}),l)}s.displayName="TickIcon"},607:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};t.default=s;var a=r(n(2)),o=r(n(91));function r(e){return e&&e.__esModule?e:{default:e}}var l=a.default.createElement("path",{d:"M13 0v13M0 0v13m5.146-3.439l-2.249-2.25a.5.5 0 0 1 0-.708l.706-.706a.5.5 0 0 1 .708 0L5.5 7.086l3.439-3.439a.5.5 0 0 1 .708 0l.706.706a.5.5 0 0 1 0 .708l-4.499 4.5a.502.502 0 0 1-.708 0",fillRule:"evenodd"});function s(e){return a.default.createElement(o.default,i({},e,{viewBox:"0 0 13 13"}),l)}s.displayName="TickIconSmall"},608:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,a,o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},s=n(2),c=m(s),u=(m(n(1)),m(n(32))),d=m(n(597)),f=m(n(607)),p=n(83),h=n(35);function m(e){return e&&e.__esModule?e:{default:e}}function v(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}n(201);var b=function(e){return{background:e.background,borderColor:e.border,color:e.tick}},y={fill:null,width:null,height:null},g=(0,h.injectSheet)(function(e){var t=e.checkbox,n=t.types,i=n.regular,a=n.awesome;return l({checkbox:{extend:p.isolateMixin,fontFamily:e.fontFamily,fontSize:t.fontSize,position:"relative",display:"inline-block",verticalAlign:"top",cursor:"pointer",userSelect:"none",transition:"color "+t.animationDuration+"ms"},isDisabled:{cursor:"not-allowed",pointerEvents:"none"},regular:l({color:i.colors.default.text,"&$isDisabled":{color:i.colors.disabled.text},"& $fake":b(i.colors.default),"&$isEnabled:hover $fake":b(i.colors.hover),"&$isEnabled:active $fake":b(i.colors.active),"&$isDisabled $fake":b(i.colors.disabled),"&$isChecked $fake":b(i.colors.checked)},(0,p.focusSourceMixin)("other","& $real:focus ~ $fake",b(i.colors.focus))),awesome:{color:a.colors.default.text,"&$isDisabled":{color:a.colors.disabled.text},"& $fake":b(a.colors.default),"&$isEnabled:hover $fake":b(a.colors.hover),"&&$isChecked $fake, &&$indeterminate $fake":b(a.colors.checked),"&$isEnabled$isChecked:hover $fake, &$isEnabled$indeterminate:hover $fake":b(a.colors.checkedHover),"&$isDisabled $fake":b(a.colors.disabled)},fake:{display:"block",boxSizing:"border-box",position:"absolute",borderRadius:t.borderRadius,borderStyle:"solid",borderWidth:1,lineHeight:0,transitionDuration:t.animationDuration,transitionProperty:"border-color, background-color, color","&:before":{position:"absolute",content:'""',opacity:0,top:0,right:0,bottom:.5,left:0,background:"currentColor",height:2,margin:"auto 2px",borderRadius:1,transform:"scaleX(0.4)",transitionDuration:t.animationDuration,transitionProperty:"transform, opacity"},"$indeterminate &:before":{opacity:1,transform:"scaleX(1)"},"$iconright &":{right:0},"$iconleft &":{left:0}},real:{position:"absolute",opacity:0,appearance:"none",pointerEvents:"none"},label:{fontSize:t.fontSize,fontWeight:"normal",display:"inline-block"},tick:{position:"absolute",fill:"currentColor",opacity:0,transitionDuration:t.animationDuration,transitionProperty:"transform, opacity","$isChecked &":{opacity:1}},isEnabled:{},isChecked:{},indeterminate:{},iconright:{},iconleft:{}},["medium","small"].reduce(function(e,n){return l({},e,(i={},a=n,o={"&$checkbox":{lineHeight:t.sizes[n].size+"px"},"& $fake":{top:"small"===n?Math.round((t.sizes[n].lineHeight-t.sizes[n].size)/2):Math.round((t.sizes[n].lineHeight-t.sizes[n].size)/2)-1,width:t.sizes[n].size,height:t.sizes[n].size},"& $tick":{top:Math.round((t.sizes[n].size-t.sizes[n].tickSize)/2)-1,left:Math.round((t.sizes[n].size-t.sizes[n].tickSize)/2)-1,width:t.sizes[n].tickSize,height:t.sizes[n].tickSize,transform:"small"===n?"translateY(-"+.3*t.sizes[n].tickSize+"px)":"translateY(-"+.5*t.sizes[n].tickSize+"px)","$isChecked&":{transform:"translateY(0)"}},"& $label":{lineHeight:t.sizes[n].lineHeight+"px","$iconright&":{paddingRight:t.sizes[n].size+t.sizes[n].labelMargin},"$iconleft&":{paddingLeft:t.sizes[n].size+t.sizes[n].labelMargin}}},a in i?Object.defineProperty(i,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):i[a]=o,i));var i,a,o},{}))},{name:"Checkbox"})((o=a=function(e){function t(){var e,n,i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,o=Array(a),r=0;r<a;r++)o[r]=arguments[r];return n=i=v(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),i.onChange=function(e){i.props.onCheck&&i.props.onCheck(e,i.input.checked)},v(i,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.Component),r(t,[{key:"componentDidMount",value:function(){this.input&&(this.input.indeterminate=this.props.indeterminate)}},{key:"componentDidUpdate",value:function(){this.input&&(this.input.indeterminate=this.props.indeterminate)}},{key:"render",value:function(){var e=this,t=this.props,n=t.name,i=t.style,a=t.disabled,o=t.iconPosition,r=t.className,s=t.checkboxClassName,p=t.checkboxStyle,h=t.labelClassName,m=t.labelStyle,v=t.children,b=t.variation,g=t.size,k=t.checked,E=t.indeterminate,C=t.classes,w=(t.onCheck,t.theme,function(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}(t,["name","style","disabled","iconPosition","className","checkboxClassName","checkboxStyle","labelClassName","labelStyle","children","variation","size","checked","indeterminate","classes","onCheck","theme"])),x=(0,u.default)(r,C.checkbox,C[b],C[g],C["icon"+o],a?C.isDisabled:C.isEnabled,E?C.indeterminate:k&&C.isChecked);return c.default.createElement("label",{className:x,style:i},c.default.createElement("input",l({},w,{ref:function(t){e.input=t},checked:k,name:n,type:"checkbox",className:C.real,disabled:a,onChange:this.onChange})),c.default.createElement("span",{className:(0,u.default)(C.fake,s),style:p},"small"===g?c.default.createElement(f.default,{className:C.tick,style:y}):c.default.createElement(d.default,{className:C.tick,style:y})),c.default.createElement("span",{className:(0,u.default)(C.label,h),style:m},v))}}]),t}(),a.defaultProps={iconPosition:"left",disabled:!1,checked:!1,indeterminate:!1,name:"",variation:"regular",size:"medium"},i=o))||i;t.default=g,g.propTypes={}},609:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(608);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return(e=i,e&&e.__esModule?e:{default:e}).default;var e}})},624:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};t.default=s;var a=r(n(2)),o=r(n(91));function r(e){return e&&e.__esModule?e:{default:e}}var l=a.default.createElement("path",{d:"M0 15V0v15zM15 0v15V0zM8.35 7.5l3.22 3.22a.5.5 0 0 1 0 .71l-.14.14a.5.5 0 0 1-.7 0L7.5 8.35l-3.22 3.22a.5.5 0 0 1-.7 0l-.15-.14a.5.5 0 0 1 0-.7L6.65 7.5 3.43 4.28a.5.5 0 0 1 0-.71l.14-.14a.5.5 0 0 1 .7 0L7.5 6.65l3.22-3.22a.5.5 0 0 1 .7 0l.15.14a.5.5 0 0 1 0 .7L8.35 7.5z"});function s(e){return a.default.createElement(o.default,i({},e,{viewBox:"0 0 15 15"}),l)}s.displayName="ClearIcon"},625:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,a,o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},s=n(2),c=h(s),u=(h(n(1)),h(n(32))),d=n(83),f=n(35),p=h(n(624));function h(e){return e&&e.__esModule?e:{default:e}}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var v={fill:null},b=(0,f.injectSheet)(function(e){var t=e.tagsInput;return l({root:{extend:d.isolateMixin,display:"inline-flex",fontSize:t.fontSize,whiteSpace:"nowrap",pointerEvents:"none",transition:"background-color .2s"},icon:{alignSelf:"center",fill:"currentColor",transition:"fill .2s, color .2s"},text:{flex:"0 1 auto",overflow:"hidden",textOverflow:"ellipsis",transition:"color .2s"},remove:{order:1,flex:"none",fontSize:15,width:"1em",height:"1em",alignSelf:"center",pointerEvents:"auto",transition:"fill .2s"},isClickable:{pointerEvents:"auto"},isEnabled:{"&$isClickable, & $remove":{cursor:"pointer"}},isDisabled:{"&$isClickable, & $remove":{cursor:"not-allowed"}}},["regular","background"].reduce(function(e,n){var i,a,o,r=t.types[n],s=r.height,c=r.colors;return l({},e,(i={},a=n,o={borderRadius:r.borderRadius,lineHeight:s+"px","& $icon":{marginLeft:r.iconLeftMargin,marginRight:r.iconRightMargin},"& $remove":{marginLeft:r.removeLeftMargin,marginRight:r.removeRightMargin},"& $text":{marginLeft:r.paddingLeft,marginRight:r.paddingRight},"& $icon + $text":{marginLeft:0},"& $remove ~ $text":{marginRight:0},"&$isEnabled":{color:c.default.text,background:c.default.background,"&$isClickable":{"&:hover":{background:c.hover.background,"& $remove:not(:hover) ~ $text, & $text:only-child, & $icon:first-child + $text":{color:c.hover.text},"& $remove:not(:hover) + $icon, & $icon:first-child":{fill:"currentColor!important",color:c.hover.icon}},"&:active":{background:c.active.background,"& $remove:not(:active) ~ $text$text, & $text$text:only-child, & $icon:first-child + $text$text":{color:c.active.text},"& $remove:not(:active) + $icon$icon, & $icon$icon:first-child":{fill:"currentColor!important",color:c.active.icon}}},"& $remove":{fill:c.default.icon,"&:hover":{fill:c.hover.icon},"&:active":{fill:c.active.icon}}},"&$isDisabled":{color:c.disabled.text,background:c.disabled.background,"& $remove":{fill:c.disabled.icon}}},a in i?Object.defineProperty(i,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):i[a]=o,i))},{}))},{name:"TagsInputItem"})((o=a=function(e){function t(){var e,n,i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,o=Array(a),r=0;r<a;r++)o[r]=arguments[r];return n=i=m(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),i.handleClick=function(e){var t=i.props,n=t.value;(0,t.onClick)(e,n)},i.handleRemoveClick=function(e){e.stopPropagation();var t=i.props,n=t.value;(0,t.onRemove)(e,n)},i.handleMouseDown=function(e){e.preventDefault()},m(i,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.Component),r(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.disabled,i=e.nodeRef,a=e.children,o=e.icon,r=e.onClick,d=e.onRemove,f=e.classes,h=e.type,m=e.theme,b=(e.value,function(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}(e,["className","disabled","nodeRef","children","icon","onClick","onRemove","classes","type","theme","value"]));return c.default.createElement("div",l({},b,{className:(0,u.default)(t,f.root,f[h],r&&f.isClickable,n?f.isDisabled:f.isEnabled),onClick:n?void 0:this.handleClick,ref:i}),d&&c.default.createElement(p.default,{className:f.remove,size:null,style:v,onClick:n?void 0:this.handleRemoveClick,onMouseDown:n?void 0:this.handleMouseDown,role:n?void 0:"button"}),o&&(0,s.cloneElement)(o,{className:(0,u.default)(f.icon,o.props.className),size:m.tagsInput.types[h].iconSize,color:!n&&o.props.color||null}),c.default.createElement("span",{className:f.text},a))}}]),t}(),a.defaultProps={type:"regular"},i=o))||i;b.propTypes={},b.displayName="ruiTagsInputItem",t.default=b},626:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,a,o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},s=n(2),c=h(s),u=(h(n(1)),h(n(32))),d=n(35),f=n(83),p=h(n(204));function h(e){return e&&e.__esModule?e:{default:e}}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var v=(0,d.injectSheet)(function(e){var t=e.fontFamily,n=e.tagsInput;return l({root:{extend:f.isolateMixin,fontSize:n.fontSize,fontFamily:t,fontWeight:400,userSelect:"none",overflow:"hidden"},items:{display:"flex","$isDisabled &":{pointerEvents:"none"}},isExpanded:{"& $items":{flexWrap:"wrap"}},item:{"&&":{flex:"none",alignSelf:"flex-start",whiteSpace:"nowrap"}},more:{composes:"$item",color:n.colors.default.more,transition:"color .2s","$isDisabled &":{color:n.colors.disabled.more}},isClickable:{pointerEvents:"auto","$isEnabled &":{cursor:"pointer","&:hover":{color:n.colors.hover.more},"&:active":{color:n.colors.active.more}},"$isDisabled &":{cursor:"not-allowed"}}},["regular","background"].reduce(function(e,t){var i,a,o,r=n.types[t],s=r.height,c=r.verticalGap,u=r.horizontalGap;return l({},e,(o={"& $items":{marginTop:-c,marginLeft:-u,minHeight:s+c},"& $item":{marginTop:c,marginLeft:u,maxWidth:"calc(100% - "+u+"px)",lineHeight:s+"px"}},(a=t)in(i={})?Object.defineProperty(i,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):i[a]=o,i))},{}),{isHidden:{"&&":{order:1,visibility:"hidden"}},isEnabled:{},isDisabled:{}})},{name:"TagsInput"})(i=(0,p.default)("resize")((o=a=function(e){function t(){var e,n,i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,o=Array(a),r=0;r<a;r++)o[r]=arguments[r];return n=i=m(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),i.state={visibleItemsCount:null,containerWidth:null},i.items=[],i.container=null,i.moreButton=null,i.handleWindowResize=function(){i.setState({containerWidth:Math.floor(i.container.getBoundingClientRect().width)})},i.saveItemsRefs=function(e,t,n){i.items.length=n,i.items[t]=e},i.saveContainerRef=function(e){i.container=e},i.saveMoreButtonRef=function(e){i.moreButton=e},i.onItemRemove=function(e,t){if(!i.props.disabled){e.stopPropagation();var n=c.default.Children.toArray(i.props.children).map(function(e){return e.props.value});i.props.onChange(n.filter(function(e){return e!==t}))}},m(i,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.PureComponent),r(t,[{key:"componentDidMount",value:function(){this.props.windowEvents.on("resize",this.handleWindowResize,!1),this.props.isExpanded||this.updateVisibleItemsCount()}},{key:"componentWillUpdate",value:function(e){0===c.default.Children.count(e.children)&&(this.items=[])}},{key:"componentDidUpdate",value:function(e,t){this.shouldVisibleItemsCountUpdate(this.state,t,this.props,e)&&this.updateVisibleItemsCount()}},{key:"componentWillUnmount",value:function(){this.props.windowEvents.removeListener("resize",this.handleWindowResize,!1)}},{key:"shouldVisibleItemsCountUpdate",value:function(e,t,n,i){if(n.isExpanded)return!1;if(n.isExpanded!==i.isExpanded)return!0;if(e.containerWidth!==t.containerWidth)return!0;var a=c.default.Children.toArray(n.children),o=c.default.Children.toArray(i.children),r=a.length;if(r!==o.length)return!0;for(;r--;)if(a[r].props.children!==o[r].props.children)return!0;return!1}},{key:"updateVisibleItemsCount",value:function(){var e=this.items.filter(Boolean).length;if(e<1)this.setState({visibleItemsCount:null});else{for(var t=this.props,n=t.theme.tagsInput.types[t.type].horizontalGap,i=Math.ceil(this.container.getBoundingClientRect().width),a=Math.ceil(this.moreButton.getBoundingClientRect().width)+n,o=0,r=0,l=[];o<e;){var s=Math.ceil(this.items[o].getBoundingClientRect().width)+n;if(r+s>i)break;l.push(s),r+=s,o+=1}if(o<e)for(var c=i-r;c<a;){c+=l[o],o-=1}this.setState({visibleItemsCount:o<e?o:null})}}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,i=t.className,a=t.disabled,o=t.classes,r=t.isExpanded,d=t.onMoreClick,f=t.type,p=t.onChange,h=(t.theme,t.windowEvents,function(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}(t,["children","className","disabled","classes","isExpanded","onMoreClick","type","onChange","theme","windowEvents"])),m=this.state.visibleItemsCount,v=(0,u.default)(i,o.root,o[f],a?o.isDisabled:o.isEnabled,r&&o.isExpanded),b=c.default.Children.count(n),y=c.default.Children.map(n,function(t,n){if(!t.type||"ruiTagsInputItem"!==t.type.displayName)throw new Error("Child component should be instance of <TagsInputItem />");var i=!r&&null!==m&&m<=n;return(0,s.cloneElement)(t,{nodeRef:function(t){e.saveItemsRefs(t,n,b)},className:(0,u.default)(t.props.className,o.item,i&&o.isHidden),key:t.props.children,onRemove:p?e.onItemRemove:void 0,type:f,disabled:a})}),g=null===m?0:y.length-m;return c.default.createElement("div",l({className:v},h),c.default.createElement("div",{ref:this.saveContainerRef,className:o.items},y,!r&&c.default.createElement("div",{className:(0,u.default)(o.more,d&&o.isClickable,0===g&&o.isHidden),role:d?"button":void 0,ref:this.saveMoreButtonRef,onClick:a?void 0:d},"+",g)))}}]),t}(),a.defaultProps={type:"regular"},i=o))||i)||i;t.default=v,v.propTypes={}},869:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};t.default=s;var a=r(n(2)),o=r(n(91));function r(e){return e&&e.__esModule?e:{default:e}}var l=a.default.createElement("path",{d:"M13.993 3c.556 0 1.007.445 1.007.996v9.008a1 1 0 0 1-1.007.996H1.007A1.001 1.001 0 0 1 0 13.004V3.996A1 1 0 0 1 1.007 3h12.986zM10 8.5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0zM4 2c0-.552.438-1 1.003-1h4.994A.999.999 0 0 1 11 2v1H4V2z"});function s(e){return a.default.createElement(o.default,i({},e,{viewBox:"0 0 15 15"}),l)}s.displayName="PhotoCameraIcon"}}]);