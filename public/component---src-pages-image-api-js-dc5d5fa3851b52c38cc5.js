webpackJsonp([0xe729761326d47800],{"./node_modules/create-react-class/factory.js":function(e,t,n){"use strict";function r(e){return e}function o(e,t,n){function o(e,t){var n=E.hasOwnProperty(t)?E[t]:null;w.hasOwnProperty(t)&&l("OVERRIDE_BASE"===n,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",t),e&&l("DEFINE_MANY"===n||"DEFINE_MANY_MERGED"===n,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",t)}function a(e,n){if(n){l("function"!=typeof n,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),l(!t(n),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var r=e.prototype,a=r.__reactAutoBindPairs;n.hasOwnProperty(u)&&b.mixins(e,n.mixins);for(var s in n)if(n.hasOwnProperty(s)&&s!==u){var i=n[s],c=r.hasOwnProperty(s);if(o(c,s),b.hasOwnProperty(s))b[s](e,i);else{var d=E.hasOwnProperty(s),h="function"==typeof i,m=h&&!d&&!c&&n.autobind!==!1;if(m)a.push(s,i),r[s]=i;else if(c){var g=E[s];l(d&&("DEFINE_MANY_MERGED"===g||"DEFINE_MANY"===g),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",g,s),"DEFINE_MANY_MERGED"===g?r[s]=p(r[s],i):"DEFINE_MANY"===g&&(r[s]=f(r[s],i))}else r[s]=i}}}else;}function c(e,t){if(t)for(var n in t){var r=t[n];if(t.hasOwnProperty(n)){var o=n in b;l(!o,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n);var a=n in e;l(!a,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),e[n]=r}}}function d(e,t){l(e&&t&&"object"==typeof e&&"object"==typeof t,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var n in t)t.hasOwnProperty(n)&&(l(void 0===e[n],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),e[n]=t[n]);return e}function p(e,t){return function(){var n=e.apply(this,arguments),r=t.apply(this,arguments);if(null==n)return r;if(null==r)return n;var o={};return d(o,n),d(o,r),o}}function f(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function h(e,t){var n=t.bind(e);return n}function m(e){for(var t=e.__reactAutoBindPairs,n=0;n<t.length;n+=2){var r=t[n],o=t[n+1];e[r]=h(e,o)}}function g(e){var t=r(function(e,r,o){this.__reactAutoBindPairs.length&&m(this),this.props=e,this.context=r,this.refs=i,this.updater=o||n,this.state=null;var a=this.getInitialState?this.getInitialState():null;l("object"==typeof a&&!Array.isArray(a),"%s.getInitialState(): must return an object or null",t.displayName||"ReactCompositeComponent"),this.state=a});t.prototype=new N,t.prototype.constructor=t,t.prototype.__reactAutoBindPairs=[],y.forEach(a.bind(null,t)),a(t,v),a(t,e),a(t,_),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),l(t.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var o in E)t.prototype[o]||(t.prototype[o]=null);return t}var y=[],E={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},b={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)a(e,t[n])},childContextTypes:function(e,t){e.childContextTypes=s({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=s({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=p(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=s({},e.propTypes,t)},statics:function(e,t){c(e,t)},autobind:function(){}},v={componentDidMount:function(){this.__isMounted=!0}},_={componentWillUnmount:function(){this.__isMounted=!1}},w={replaceState:function(e,t){this.updater.enqueueReplaceState(this,e,t)},isMounted:function(){return!!this.__isMounted}},N=function(){};return s(N.prototype,e.prototype,w),g}var a,s=n("./node_modules/object-assign/index.js"),i=n("./node_modules/fbjs/lib/emptyObject.js"),l=n("./node_modules/fbjs/lib/invariant.js"),u="mixins";a={},e.exports=o},"./node_modules/object-assign/index.js":function(e,t){"use strict";function n(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function r(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==r.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}var o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;e.exports=r()?Object.assign:function(e,t){for(var r,i,l=n(e),u=1;u<arguments.length;u++){r=Object(arguments[u]);for(var c in r)a.call(r,c)&&(l[c]=r[c]);if(o){i=o(r);for(var d=0;d<i.length;d++)s.call(r,i[d])&&(l[i[d]]=r[i[d]])}}return l}},'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/ryanaponte/repos/archived-repos/ryandeussing-gatsby-contentful/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/ryanaponte/repos/archived-repos/ryandeussing-gatsby-contentful/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/ryanaponte/repos/archived-repos/ryandeussing-gatsby-contentful/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/ryanaponte/repos/archived-repos/ryandeussing-gatsby-contentful/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/ryanaponte/repos/archived-repos/ryandeussing-gatsby-contentful/node_modules/babel-preset-stage-0/lib/index.js","/Users/ryanaponte/repos/archived-repos/ryandeussing-gatsby-contentful/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/image-api.js':function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var o=n("./node_modules/react/react.js"),a=r(o);t.default=function(e){var t=e.data.allContentfulAsset.edges;return a.default.createElement("div",null,a.default.createElement("h1",null,"Image API examples"),a.default.createElement("p",null,"Gatsby offers rich integration with"," ",a.default.createElement("a",{href:"https://www.contentful.com/developers/docs/references/images-api/"},"Contentful's Image API")),a.default.createElement("p",null,"Open Graph",a.default.createElement("em",null,"i"),"QL on your own site to experiment with the following options"),a.default.createElement("h2",null,"Resize"),t.map(function(e){var t=e.node,n=t.title,r=t.resize;return a.default.createElement("img",{alt:n,src:r.src,width:r.width,height:r.height,style:{border:"1px solid tomato"}})}),a.default.createElement("h4",null,"GraphQL query"),a.default.createElement("pre",{style:{background:"#efeded"}},a.default.createElement("code",{dangerouslySetInnerHTML:{__html:"{\n  allContentfulAsset {\n    edges {\n      node {\n        title\n        resize(width: 100) {\n          src\n          width\n          height\n          aspectRatio\n        }\n      }\n    }\n  }\n}"}})),a.default.createElement("h2",null,"Responsive Resolution"),a.default.createElement("p",null,"If you make queries with ",a.default.createElement("code",null,"responsiveResolution")," then Gatsby automatically generates images with 1x, 1.5x, 2x, and 3x versions so your images look great on whatever screen resolution of device they're on."),a.default.createElement("p",null,'If you\'re on a retina class screen, notice how much sharper these images are than the above "resized" images.'),a.default.createElement("p",null,"You should prefer this operator over ",a.default.createElement("code",null,"resize"),"."),t.map(function(e){var t=e.node,n=t.title,r=t.responsiveResolution;return a.default.createElement("img",{alt:n,src:r.src,srcSet:r.srcSet,width:r.width,height:r.height,style:{border:"1px solid tomato"}})}),a.default.createElement("h4",null,"GraphQL query"),a.default.createElement("pre",{style:{background:"#efeded"}},a.default.createElement("code",{dangerouslySetInnerHTML:{__html:"{\n  allContentfulAsset {\n    edges {\n      node {\n        title\n        responsiveResolution(width: 100) {\n          width\n          height\n          src\n          srcSet\n        }\n      }\n    }\n  }\n}"}})),a.default.createElement("h2",null,"Resizing"),a.default.createElement("p",null,"On both resize and responsiveResolution you can also add a"," ",a.default.createElement("code",null,"height")," ","argument to the GraphQL argument to crop the image to a certain size."),a.default.createElement("p",null,"You can also set the"," ",a.default.createElement("a",{href:"https://www.contentful.com/developers/docs/references/images-api/#/reference/resizing-&-cropping/change-the-resizing-behavior"},"resizing behavior")," ","and"," ",a.default.createElement("a",{href:"https://www.contentful.com/developers/docs/references/images-api/#/reference/resizing-&-cropping/specify-focus-area-for-resizing"},"resizing focus area")),t.map(function(e){var t=e.node,n=t.title,r=t.resizing;return a.default.createElement("img",{alt:n,src:r.src,srcSet:r.srcSet,width:r.width,height:r.height,style:{border:"1px solid tomato"}})}),a.default.createElement("h4",null,"GraphQL query"),a.default.createElement("pre",{style:{background:"#efeded"}},a.default.createElement("code",{dangerouslySetInnerHTML:{__html:"{\n  allContentfulAsset {\n    edges {\n      node {\n        title\n        responsiveResolution(width: 100, height: 100) {\n          width\n          height\n          src\n          srcSet\n        }\n      }\n    }\n  }\n}"}})),a.default.createElement("h2",null,"Responsive Sizes"),a.default.createElement("p",null,"This GraphQL option allows you to generate responsive images that automatically respond to different device screen resolution and widths. E.g. a smartphone browser will download a much smaller image than a desktop device."),a.default.createElement("p",null,"Instead of specifying a width and height, with responsiveSizes you specify a ",a.default.createElement("code",null,"maxWidth"),", the max width the container of the images reaches."),t.map(function(e){var t=e.node,n=t.title,r=t.responsiveSizes;return a.default.createElement("img",{alt:n,src:r.src,srcSet:r.srcSet,sizes:r.sizes,style:{border:"1px solid tomato"}})}),a.default.createElement("h4",null,"GraphQL query"),a.default.createElement("pre",{style:{background:"#efeded"}},a.default.createElement("code",{dangerouslySetInnerHTML:{__html:"{\n  allContentfulAsset {\n    edges {\n      node {\n        title\n        responsiveSizes(maxWidth: 613) {\n          sizes\n          src\n          srcSet\n        }\n      }\n    }\n  }\n}"}})))};t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-image-api-js-dc5d5fa3851b52c38cc5.js.map