webpackJsonp([0x8c68e41d6ed8],{48:function(e,t){(function(t){"use strict";e.exports={siteMetadata:{title:"Selformative, Improve Yourself"},plugins:["gatsby-plugin-react-helmet","gatsby-plugin-catch-links",{resolve:"gatsby-source-filesystem",options:{path:t+"/src/pages",name:"pages"}},"gatsby-transformer-remark",{resolve:"gatsby-plugin-mailchimp",options:{endpoint:"https://selformative.us12.list-manage.com/subscribe/post?u=290fa60d77ff0968747ddf2f3&amp;id=1a233a1eec"}},{resolve:"gatsby-source-filesystem",options:{name:"img",path:t+"/src/img/"}},"gatsby-transformer-sharp","gatsby-plugin-sharp"],pathPrefix:"/"}}).call(t,"/")},59:function(e,t,n){(function(r){function o(){return!("undefined"==typeof window||!window.process||"renderer"!==window.process.type)||("undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))}function a(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),n){var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var o=0,a=0;e[0].replace(/%[a-zA-Z%]/g,function(e){"%%"!==e&&(o++,"%c"===e&&(a=o))}),e.splice(a,0,r)}}function i(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function s(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(e){}}function l(){var e;try{e=t.storage.debug}catch(e){}return!e&&"undefined"!=typeof r&&"env"in r&&(e={NODE_ENV:"production",PUBLIC_DIR:"/Users/bchehraz/Projects/selformative/public"}.DEBUG),e}function u(){try{return window.localStorage}catch(e){}}t=e.exports=n(60),t.log=i,t.formatArgs=a,t.save=s,t.load=l,t.useColors=o,t.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:u(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},t.enable(l())}).call(t,n(23))},60:function(e,t,n){function r(e){var n,r=0;for(n in e)r=(r<<5)-r+e.charCodeAt(n),r|=0;return t.colors[Math.abs(r)%t.colors.length]}function o(e){function n(){if(n.enabled){var e=n,r=+new Date,o=r-(u||r);e.diff=o,e.prev=u,e.curr=r,u=r;for(var a=new Array(arguments.length),i=0;i<a.length;i++)a[i]=arguments[i];a[0]=t.coerce(a[0]),"string"!=typeof a[0]&&a.unshift("%O");var s=0;a[0]=a[0].replace(/%([a-zA-Z%])/g,function(n,r){if("%%"===n)return n;s++;var o=t.formatters[r];if("function"==typeof o){var i=a[s];n=o.call(e,i),a.splice(s,1),s--}return n}),t.formatArgs.call(e,a);var l=n.log||t.log||console.log.bind(console);l.apply(e,a)}}return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=r(e),"function"==typeof t.init&&t.init(n),n}function a(e){t.save(e),t.names=[],t.skips=[];for(var n=("string"==typeof e?e:"").split(/[\s,]+/),r=n.length,o=0;o<r;o++)n[o]&&(e=n[o].replace(/\*/g,".*?"),"-"===e[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))}function i(){t.enable("")}function s(e){var n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;return!1}function l(e){return e instanceof Error?e.stack||e.message:e}t=e.exports=o.debug=o.default=o,t.coerce=l,t.disable=i,t.enable=a,t.enabled=s,t.humanize=n(68),t.names=[],t.skips=[],t.formatters={};var u},64:function(e,t){"use strict";var n=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-?\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;t.validate=function(e){if(!e)return!1;if(e.length>254)return!1;var t=n.test(e);if(!t)return!1;var r=e.split("@");if(r[0].length>64)return!1;var o=r[1].split(".");return!o.some(function(e){return e.length>63})}},16:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(){return"undefined"==typeof S&&"undefined"!=typeof window&&window.IntersectionObserver&&(S=new window.IntersectionObserver(function(e){e.forEach(function(e){x.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(S.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),S}t.__esModule=!0;var a=n(25),i=r(a),s=n(31),l=r(s),u=n(30),c=r(u),f=n(80),d=r(f),p=n(79),m=r(p),h=n(1),g=r(h),y=n(6),b=r(y),v=function(e){var t=(0,m.default)({},e);return t.responsiveResolution&&(t.resolutions=t.responsiveResolution,delete t.responsiveResolution),t.responsiveSizes&&(t.sizes=t.responsiveSizes,delete t.responsiveSizes),t},w={},E=function(e){var t=v(e),n=t.sizes?t.sizes.src:t.resolutions.src;return!!w[n]||(w[n]=!0,!1)},S=void 0,x=[],_=function(e,t){o().observe(e),x.push([e,t])},T=null,C=function(){if(null!==T)return T;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return T=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},L=function(e){var t=e.src?'src="'+e.src+'" ':'src=""',n=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.sizes?'sizes="'+e.sizes+'" ':"",o=e.title?'title="'+e.title+'" ':"",a=e.alt?'alt="'+e.alt+'" ':'alt=""',i=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.opacity?e.opacity:"1",u=e.transitionDelay?e.transitionDelay:"0.5s";return"<img "+i+s+t+n+a+o+r+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+u+";opacity:"+l+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},M=function(e){var t=e.style,n=e.onLoad,r=(0,d.default)(e,["style","onLoad"]);return g.default.createElement("img",(0,m.default)({},r,{onLoad:n,style:(0,m.default)({position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},t)}))};M.propTypes={style:b.default.object,onLoad:b.default.func};var j=function(e){function t(n){(0,i.default)(this,t);var r=(0,l.default)(this,e.call(this,n)),o=!0,a=!0,s=!1,u=E(n);return!u&&"undefined"!=typeof window&&window.IntersectionObserver&&(o=!1,a=!1,s=!0),"undefined"==typeof window&&(o=!1,a=!1),r.state={isVisible:o,imgLoaded:a,IOSupported:s},r.handleRef=r.handleRef.bind(r),r}return(0,c.default)(t,e),t.prototype.handleRef=function(e){var t=this;this.state.IOSupported&&e&&_(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},t.prototype.render=function(){var e=this,t=v(this.props),n=t.title,r=t.alt,o=t.className,a=t.outerWrapperClassName,i=t.style,s=void 0===i?{}:i,l=t.imgStyle,u=void 0===l?{}:l,c=t.sizes,f=t.resolutions,d=t.backgroundColor,p=t.Tag,h=void 0;h="boolean"==typeof d?"lightgray":d;var y=(0,m.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},u),b=(0,m.default)({opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0},u);if(c){var w=c;return w.srcWebp&&w.srcSetWebp&&C()&&(w.src=w.srcWebp,w.srcSet=w.srcSetWebp),g.default.createElement(p,{className:(a?a:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===s.position?"initial":"relative"}},g.default.createElement(p,{className:(o?o:"")+" gatsby-image-wrapper",style:(0,m.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef},g.default.createElement(p,{style:{width:"100%",paddingBottom:100/w.aspectRatio+"%"}}),w.base64&&g.default.createElement(M,{alt:r,title:n,src:w.base64,style:y}),w.tracedSVG&&g.default.createElement(M,{alt:r,title:n,src:w.tracedSVG,style:y}),h&&g.default.createElement(p,{title:n,style:{backgroundColor:h,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&g.default.createElement(M,{alt:r,title:n,srcSet:w.srcSet,src:w.src,sizes:w.sizes,style:b,onLoad:function(){e.state.IOSupported&&e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),g.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,m.default)({alt:r,title:n},w))}})))}if(f){var E=f,S=(0,m.default)({position:"relative",overflow:"hidden",display:"inline-block",width:E.width,height:E.height},s);return"inherit"===s.display&&delete S.display,E.srcWebp&&E.srcSetWebp&&C()&&(E.src=E.srcWebp,E.srcSet=E.srcSetWebp),g.default.createElement(p,{className:(a?a:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===s.position?"initial":"relative"}},g.default.createElement(p,{className:(o?o:"")+" gatsby-image-wrapper",style:S,ref:this.handleRef},E.base64&&g.default.createElement(M,{alt:r,title:n,src:E.base64,style:y}),E.tracedSVG&&g.default.createElement(M,{alt:r,title:n,src:E.tracedSVG,style:y}),h&&g.default.createElement(p,{title:n,style:{backgroundColor:h,width:E.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:E.height}}),this.state.isVisible&&g.default.createElement(M,{alt:r,title:n,width:E.width,height:E.height,srcSet:E.srcSet,src:E.src,style:b,onLoad:function(){e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),g.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,m.default)({alt:r,title:n,width:E.width,height:E.height},E))}})))}return null},t}(g.default.Component);j.defaultProps={fadeIn:!0,alt:"",Tag:"div"},j.propTypes={responsiveResolution:b.default.object,responsiveSizes:b.default.object,resolutions:b.default.object,sizes:b.default.object,fadeIn:b.default.bool,title:b.default.string,alt:b.default.string,className:b.default.oneOfType([b.default.string,b.default.object]),outerWrapperClassName:b.default.oneOfType([b.default.string,b.default.object]),style:b.default.object,imgStyle:b.default.object,position:b.default.string,backgroundColor:b.default.oneOfType([b.default.string,b.default.bool]),onLoad:b.default.func,Tag:b.default.string},t.default=j},66:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(48),a=r(o),i=n(67),s=r(i),l=n(64),u=function(e){return new Promise(function(t,n){return(0,s.default)(e,{param:"c"},function(e,r){e&&n(e),r&&t(r)})})},c=function(){var e=a.default.plugins.find(function(e){return"gatsby-plugin-mailchimp"===e.resolve}).options,t="string"==typeof e.endpoint;if(!t)throw"Mailchimp endpoint required and must be of type string. See repo README for more info.";return e},f=function(e){var t="";for(var n in e)t=t.concat("&"+n.toUpperCase()+"="+e[n]);return t},d=function(e,t){var n=(0,l.validate)(e),r=encodeURIComponent(e);if(!n)throw"gatsy-plugin-mailchimp: email must be of type string and a valid email address. See README for more information.";var o=c(),a=o.endpoint;a=a.replace(/\/post/g,"/post-json");var i="&EMAIL="+r+f(t),s=""+a+i;return u(s)};t.default=d},67:function(e,t,n){function r(){}function o(e,t,n){function o(){l.parentNode&&l.parentNode.removeChild(l),window[f]=r,u&&clearTimeout(u)}function s(){window[f]&&o()}"function"==typeof t&&(n=t,t={}),t||(t={});var l,u,c=t.prefix||"__jp",f=t.name||c+i++,d=t.param||"callback",p=null!=t.timeout?t.timeout:6e4,m=encodeURIComponent,h=document.getElementsByTagName("script")[0]||document.head;return p&&(u=setTimeout(function(){o(),n&&n(new Error("Timeout"))},p)),window[f]=function(e){a("jsonp got",e),o(),n&&n(null,e)},e+=(~e.indexOf("?")?"&":"?")+d+"="+m(f),e=e.replace("?&","?"),a('jsonp req "%s"',e),l=document.createElement("script"),l.src=e,h.parentNode.insertBefore(l,h),s}var a=n(59)("jsonp");e.exports=o;var i=0},68:function(e,t){function n(e){if(e=String(e),!(e.length>100)){var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(t){var n=parseFloat(t[1]),r=(t[2]||"ms").toLowerCase();switch(r){case"years":case"year":case"yrs":case"yr":case"y":return n*c;case"days":case"day":case"d":return n*u;case"hours":case"hour":case"hrs":case"hr":case"h":return n*l;case"minutes":case"minute":case"mins":case"min":case"m":return n*s;case"seconds":case"second":case"secs":case"sec":case"s":return n*i;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n;default:return}}}}function r(e){return e>=u?Math.round(e/u)+"d":e>=l?Math.round(e/l)+"h":e>=s?Math.round(e/s)+"m":e>=i?Math.round(e/i)+"s":e+"ms"}function o(e){return a(e,u,"day")||a(e,l,"hour")||a(e,s,"minute")||a(e,i,"second")||e+" ms"}function a(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}var i=1e3,s=60*i,l=60*s,u=24*l,c=365.25*u;e.exports=function(e,t){t=t||{};var a=typeof e;if("string"===a&&e.length>0)return n(e);if("number"===a&&isNaN(e)===!1)return t.long?o(e):r(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},23:function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(c===setTimeout)return setTimeout(e,0);if((c===n||!c)&&setTimeout)return c=setTimeout,setTimeout(e,0);try{return c(e,0)}catch(t){try{return c.call(null,e,0)}catch(t){return c.call(this,e,0)}}}function a(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function i(){h&&p&&(h=!1,p.length?m=p.concat(m):g=-1,m.length&&s())}function s(){if(!h){var e=o(i);h=!0;for(var t=m.length;t;){for(p=m,m=[];++g<t;)p&&p[g].run();g=-1,t=m.length}p=null,h=!1,a(e)}}function l(e,t){this.fun=e,this.array=t}function u(){}var c,f,d=e.exports={};!function(){try{c="function"==typeof setTimeout?setTimeout:n}catch(e){c=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(e){f=r}}();var p,m=[],h=!1,g=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];m.push(new l(e,t)),1!==m.length||h||o(s)},l.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=u,d.addListener=u,d.once=u,d.off=u,d.removeListener=u,d.removeAllListeners=u,d.emit=u,d.prependListener=u,d.prependOnceListener=u,d.listeners=function(e){return[]},d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},49:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(1),a=r(o),i=n(16),s=r(i),l=function(e){return a.default.createElement(s.default,{sizes:e.image.sizes,style:{position:"absolute",left:0,top:0,height:"100vh",width:"100%",zIndex:"-1"}})};t.default=l,e.exports=t.default},50:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=n(1),u=r(l),c=n(66),f=r(c),d=n(51),p=(r(d),function(e){function t(n){o(this,t);var r=a(this,e.call(this,n));return r.handleSubmit=function(e){e.preventDefault(),(0,f.default)(r.state.email).then(function(e){console.log(e),"success"===e.result?r.setState(s({},r.state,{success:!0,error:!1})):r.setState(s({},r.state,{error:!0}))})},r.state={email:"",submitted:!1,success:!1,successMessage:"Thank you! :)",error:!1,errorMessage:"Error: Invalid email or already on the list"},r.onTextChange=r.onTextChange.bind(r),r}return i(t,e),t.prototype.onTextChange=function(e){this.setState({email:e.target.value})},t.prototype.render=function(){var e=this.state,t=e.success,n=e.error,r=e.successMessage,o=e.errorMessage,a=e.email;return u.default.createElement("div",null,u.default.createElement("form",{onSubmit:this.handleSubmit,style:t?m.containerSuccess:m.container},u.default.createElement("div",{style:m.emailInputDiv},u.default.createElement("label",null,"Email Address:"),u.default.createElement("input",{style:m.emailInput,type:"email",value:a,onChange:this.onTextChange,placeholder:"youremail@email.com"})),u.default.createElement("div",{style:m.buttonDiv},u.default.createElement("input",{type:"submit",value:"Join Selformative's Mailing List",style:m.buttonStyle}))),u.default.createElement("h4",null,t?r:""),u.default.createElement("h4",null,n?o:""))},t}(l.Component)),m={container:{display:"flex",flexDirection:"column",justifyContent:"space-around",alignContent:"center"},containerSuccess:{display:"none"},emailInputDiv:{flex:"1",display:"flex",flexDirection:"column",textAlign:"left"},emailInput:{padding:"10px",width:"100%"},buttonDiv:{flex:"1"},buttonStyle:{padding:"10px",width:"100%",backgroundColor:"#77BFA3",color:"white"}};t.default=p,e.exports=t.default},51:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(1),a=r(o),i=function(e){return a.default.createElement("form",{onSubmit:e.onSubmit(state.email)},a.default.createElement("input",{type:"email",placeholder:"email@example.com"}),a.default.createElement("input",{type:"submit",value:"Join the List"}))};t.default=i,e.exports=t.default},98:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s,l=n(1),u=r(l),c=n(16),f=(r(c),n(50)),d=r(f),p=n(49),m=(r(p),function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e="Under Construction",t="In the meantime, check out the recent JRE talk on health with Dr. Peter Atia";return u.default.createElement("div",{style:h.container},u.default.createElement("h1",{style:{color:"white"}},e),u.default.createElement("h2",{style:h.subTextStyle},t),u.default.createElement("iframe",{src:"http://www.youtube.com/embed/gP1NA5f4LfE",width:"560",height:"315",frameborder:"0",style:h.iframeStyle}),u.default.createElement("div",{style:h.emailFormContainer},u.default.createElement("h1",null,"Ready to Make a Change?"),u.default.createElement(d.default,null)))},t}(l.Component)),h={container:{textAlign:"center",maxWidth:"100%",margin:"0 auto"},emailFormContainer:(s={padding:"10",width:"80vw",maxWidth:"550px",margin:"0 auto",borderRadius:"20",backgroundColor:"#B1E5F2"},s.padding="20px",s),iframeStyle:{border:"none",width:"80vw",maxWidth:"550px"},subTextStyle:{color:"white",backgroundColor:"black",width:"80vw",maxWidth:"550px",margin:"0 auto",padding:"5px"}};t.default=m,e.exports=t.default},99:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(1),a=r(o),i=n(16),s=(r(i),n(98)),l=r(s),u=function(e){e.data;return a.default.createElement(l.default,null)};t.default=u,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-landing-js-7544700a38674eef5585.js.map