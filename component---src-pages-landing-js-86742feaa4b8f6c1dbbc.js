webpackJsonp([0x8c68e41d6ed8],{45:function(e,t){(function(t){"use strict";e.exports={siteMetadata:{title:"Selformative, The Blog"},plugins:["gatsby-plugin-react-helmet","gatsby-plugin-catch-links",{resolve:"gatsby-source-filesystem",options:{path:t+"/src/pages",name:"pages"}},"gatsby-transformer-remark",{resolve:"gatsby-plugin-mailchimp",options:{endpoint:"https://selformative.us12.list-manage.com/subscribe/post?u=290fa60d77ff0968747ddf2f3&amp;id=1a233a1eec"}},{resolve:"gatsby-source-filesystem",options:{name:"img",path:t+"/src/img/"}},"gatsby-transformer-sharp","gatsby-plugin-sharp"],pathPrefix:"www.selformative.com/"}}).call(t,"/")},55:function(e,t,n){(function(r){function o(){return!("undefined"==typeof window||!window.process||"renderer"!==window.process.type)||("undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))}function a(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),n){var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var o=0,a=0;e[0].replace(/%[a-zA-Z%]/g,function(e){"%%"!==e&&(o++,"%c"===e&&(a=o))}),e.splice(a,0,r)}}function i(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function s(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(e){}}function u(){var e;try{e=t.storage.debug}catch(e){}return!e&&"undefined"!=typeof r&&"env"in r&&(e={NODE_ENV:"production",PUBLIC_DIR:"/Users/bchehraz/Projects/selformative/public"}.DEBUG),e}function c(){try{return window.localStorage}catch(e){}}t=e.exports=n(56),t.log=i,t.formatArgs=a,t.save=s,t.load=u,t.useColors=o,t.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:c(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},t.enable(u())}).call(t,n(22))},56:function(e,t,n){function r(e){var n,r=0;for(n in e)r=(r<<5)-r+e.charCodeAt(n),r|=0;return t.colors[Math.abs(r)%t.colors.length]}function o(e){function n(){if(n.enabled){var e=n,r=+new Date,o=r-(c||r);e.diff=o,e.prev=c,e.curr=r,c=r;for(var a=new Array(arguments.length),i=0;i<a.length;i++)a[i]=arguments[i];a[0]=t.coerce(a[0]),"string"!=typeof a[0]&&a.unshift("%O");var s=0;a[0]=a[0].replace(/%([a-zA-Z%])/g,function(n,r){if("%%"===n)return n;s++;var o=t.formatters[r];if("function"==typeof o){var i=a[s];n=o.call(e,i),a.splice(s,1),s--}return n}),t.formatArgs.call(e,a);var u=n.log||t.log||console.log.bind(console);u.apply(e,a)}}return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=r(e),"function"==typeof t.init&&t.init(n),n}function a(e){t.save(e),t.names=[],t.skips=[];for(var n=("string"==typeof e?e:"").split(/[\s,]+/),r=n.length,o=0;o<r;o++)n[o]&&(e=n[o].replace(/\*/g,".*?"),"-"===e[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))}function i(){t.enable("")}function s(e){var n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;return!1}function u(e){return e instanceof Error?e.stack||e.message:e}t=e.exports=o.debug=o.default=o,t.coerce=u,t.disable=i,t.enable=a,t.enabled=s,t.humanize=n(64),t.names=[],t.skips=[],t.formatters={};var c},60:function(e,t){"use strict";var n=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-?\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;t.validate=function(e){if(!e)return!1;if(e.length>254)return!1;var t=n.test(e);if(!t)return!1;var r=e.split("@");if(r[0].length>64)return!1;var o=r[1].split(".");return!o.some(function(e){return e.length>63})}},62:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(45),a=r(o),i=n(63),s=r(i),u=n(60),c=function(e){return new Promise(function(t,n){return(0,s.default)(e,{param:"c"},function(e,r){e&&n(e),r&&t(r)})})},l=function(){var e=a.default.plugins.find(function(e){return"gatsby-plugin-mailchimp"===e.resolve}).options,t="string"==typeof e.endpoint;if(!t)throw"Mailchimp endpoint required and must be of type string. See repo README for more info.";return e},f=function(e){var t="";for(var n in e)t=t.concat("&"+n.toUpperCase()+"="+e[n]);return t},d=function(e,t){var n=(0,u.validate)(e),r=encodeURIComponent(e);if(!n)throw"gatsy-plugin-mailchimp: email must be of type string and a valid email address. See README for more information.";var o=l(),a=o.endpoint;a=a.replace(/\/post/g,"/post-json");var i="&EMAIL="+r+f(t),s=""+a+i;return c(s)};t.default=d},63:function(e,t,n){function r(){}function o(e,t,n){function o(){u.parentNode&&u.parentNode.removeChild(u),window[f]=r,c&&clearTimeout(c)}function s(){window[f]&&o()}"function"==typeof t&&(n=t,t={}),t||(t={});var u,c,l=t.prefix||"__jp",f=t.name||l+i++,d=t.param||"callback",p=null!=t.timeout?t.timeout:6e4,m=encodeURIComponent,h=document.getElementsByTagName("script")[0]||document.head;return p&&(c=setTimeout(function(){o(),n&&n(new Error("Timeout"))},p)),window[f]=function(e){a("jsonp got",e),o(),n&&n(null,e)},e+=(~e.indexOf("?")?"&":"?")+d+"="+m(f),e=e.replace("?&","?"),a('jsonp req "%s"',e),u=document.createElement("script"),u.src=e,h.parentNode.insertBefore(u,h),s}var a=n(55)("jsonp");e.exports=o;var i=0},64:function(e,t){function n(e){if(e=String(e),!(e.length>100)){var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(t){var n=parseFloat(t[1]),r=(t[2]||"ms").toLowerCase();switch(r){case"years":case"year":case"yrs":case"yr":case"y":return n*l;case"days":case"day":case"d":return n*c;case"hours":case"hour":case"hrs":case"hr":case"h":return n*u;case"minutes":case"minute":case"mins":case"min":case"m":return n*s;case"seconds":case"second":case"secs":case"sec":case"s":return n*i;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n;default:return}}}}function r(e){return e>=c?Math.round(e/c)+"d":e>=u?Math.round(e/u)+"h":e>=s?Math.round(e/s)+"m":e>=i?Math.round(e/i)+"s":e+"ms"}function o(e){return a(e,c,"day")||a(e,u,"hour")||a(e,s,"minute")||a(e,i,"second")||e+" ms"}function a(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}var i=1e3,s=60*i,u=60*s,c=24*u,l=365.25*c;e.exports=function(e,t){t=t||{};var a=typeof e;if("string"===a&&e.length>0)return n(e);if("number"===a&&isNaN(e)===!1)return t.long?o(e):r(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},22:function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function a(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function i(){h&&p&&(h=!1,p.length?m=p.concat(m):g=-1,m.length&&s())}function s(){if(!h){var e=o(i);h=!0;for(var t=m.length;t;){for(p=m,m=[];++g<t;)p&&p[g].run();g=-1,t=m.length}p=null,h=!1,a(e)}}function u(e,t){this.fun=e,this.array=t}function c(){}var l,f,d=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(e){f=r}}();var p,m=[],h=!1,g=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];m.push(new u(e,t)),1!==m.length||h||o(s)},u.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=c,d.addListener=c,d.once=c,d.off=c,d.removeListener=c,d.removeAllListeners=c,d.emit=c,d.prependListener=c,d.prependOnceListener=c,d.listeners=function(e){return[]},d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},28:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=n(1),c=r(u),l=n(62),f=r(l),d=n(46),p=(r(d),function(e){function t(n){o(this,t);var r=a(this,e.call(this,n));return r.handleSubmit=function(e){e.preventDefault(),(0,f.default)(r.state.email).then(function(e){console.log(e),"success"===e.result?r.setState(s({},r.state,{success:!0,error:!1})):r.setState(s({},r.state,{error:!0}))})},r.state={email:"",submitted:!1,success:!1,successMessage:"=> Thank you! :) <= Redirecting",error:!1,errorMessage:"Error: Invalid email or already on the list"},r.onTextChange=r.onTextChange.bind(r),r}return i(t,e),t.prototype.onTextChange=function(e){this.setState({email:e.target.value})},t.prototype.render=function(){var e=this.state,t=e.success,n=e.error,r=e.successMessage,o=e.errorMessage,a=e.email;return c.default.createElement("div",null,c.default.createElement("form",{onSubmit:this.handleSubmit,style:t?m.containerSuccess:m.container},c.default.createElement("div",{style:m.emailInputDiv},c.default.createElement("label",null,"Email Address:"),c.default.createElement("input",{type:"email",value:a,onChange:this.onTextChange,style:m.emailInput})),c.default.createElement("div",{style:m.buttonDiv},c.default.createElement("input",{type:"submit",value:"Join the List",style:m.buttonStyle}))),c.default.createElement("h4",null,t?r:""),c.default.createElement("h4",null,n?o:""))},t}(u.Component)),m={container:{display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"center",alignContent:"center",flexFlow:"row wrap"},containerSuccess:{display:"none"},emailInputDiv:{flex:"2",display:"flex",flexDirection:"column",textAlign:"left"},emailInput:{padding:"10px",width:"100%"},buttonDiv:{flex:"1"},buttonStyle:{padding:"10px",backgroundColor:"#77BFA3",color:"white"}};t.default=p,e.exports=t.default},46:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(1),a=r(o),i=function(e){return a.default.createElement("form",{onSubmit:e.onSubmit(state.email)},a.default.createElement("input",{type:"email",placeholder:"email@example.com"}),a.default.createElement("input",{type:"submit",value:"Join the List"}))};t.default=i,e.exports=t.default},94:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s,u=n(1),c=r(u),l=n(28),f=r(l),d=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return c.default.createElement("div",{style:p.container},c.default.createElement("h1",{style:{color:"white"}},"Under Construction"),c.default.createElement("iframe",{src:"http://www.youtube.com/embed/W7qWa52k-nE",width:"560",height:"315",frameborder:"0",allowfullscreen:!0}),c.default.createElement("div",{style:p.emailFormContainer},c.default.createElement("h1",null,"Join the Early Starters"),c.default.createElement(f.default,null)))},t}(u.Component),p={container:{textAlign:"center",maxWidth:"100%",margin:"0 auto"},emailFormContainer:(s={padding:"10",maxWidth:"600px",margin:"0 auto",borderRadius:"20",backgroundColor:"#B1E5F2"},s.padding="20px",s)};t.default=d,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-landing-js-86742feaa4b8f6c1dbbc.js.map