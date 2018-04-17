// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/screenUtils ../../../symbols/support/Symbol3DOutline ../../../symbols/support/symbolLayerUtils ../../../core/promiseUtils dojo/_base/lang dojo/Deferred dojo/dom-construct dojo/on dojo/i18n!../nls/SymbolStyler".split(" "),function(U,c,n,Q,C,R,S,T,D,E,h){function q(a,b){a[b]||(a[b]={})}function f(a,b){return-1<a.indexOf(b)}function k(a){return a&&"icon"===a.type}function m(a){return a&&"object"===a.type}function t(a){return a&&"extrude"===a.type}function u(a){return a&&
"text"===a.type}function v(a){return l(a,"simple-line","2d")}function p(a){return l(a,"simple-marker","2d")}function w(a){return l(a,"picture-marker","2d")}function e(a){return f(a.type,"3d")}function g(a){return a.symbolLayers.getItemAt(0)}function F(a,b){return l(a,"marker",b)||l(a,"point",b)}function l(a,b,d){b=f(a&&a.type,b);return d?b&&("3d"===d?e(a):!e(a)):b}function G(a,b){return l(a,"line",b)}function H(a,b){return l(a,"fill",b)}function x(a){return e(a)?!1:a&&"string"===typeof a.style&&f(r,
a.style)}function y(a){if(e(a))return a=(a=g(a))&&"fill"===a.type&&a.outline||k(a)&&I(a)?{color:a.outline.color,size:n.pt2px(a.outline.size)}:a&&"line"===a.type||a&&"path"===a.type?{color:a.material&&a.material.color,size:n.pt2px(a.size)}:null,a;a=v(a)?{color:a.color,size:a.width}:l(a,"fill","2d")||p(a)?{color:a.get("outline.color"),size:a.get("outline.width")}:null;return a}function J(a,b){!isNaN(b)&&a&&(e(a)?(a=g(a),k(a)||a&&"fill"===a.type?(q(a,"outline"),a.outline.size=n.px2pt(b)):a&&"line"===
a.type?(q(a,"size"),a.size=n.px2pt(b)):a&&"path"===a.type&&(q(a,"size"),a.size=b)):v(a)?a.width=b:a&&a.outline&&(a.outline.width=b))}function K(a,b){b&&a&&!e(a)&&(b=y(a).color?b:"none",v(a)?a.style=b:a&&a.outline&&(a.outline.style=b))}function L(a,b){if(a&&!isNaN(b))if(e(a))if(a=g(a),k(a)||u(a))a.size=n.px2pt(b);else if(m(a)){var d=a.width,c=a.height,h=a.depth;b/=Math.max(d,c,h);a.set({width:d*b,height:c*b,depth:h*b})}else t(a)&&(a.size=b);else d=a.width,d!==b&&(w(a)?(c=a.url,b=M({dimensions:a,targetDimension:"width",
targetSize:b}),a.height=b.height,a.width=b.width,c&&"http://"!==c&&(f(c,"http://")||f(c,"data:"))&&(a.xoffset||a.yoffset)&&(b=a.width/d,a.xoffset=Math.round(a.xoffset*b),a.yoffset=Math.round(a.yoffset*b))):a.size=b)}function N(a,b){e(a)?z(a,{color:b}):a.color=b}function A(a,b){if(e(a)){var d=g(a);d&&"line"===d.type||d&&"path"===d.type?z(a,{color:b}):(q(d,"outline"),d.outline.color=b)}else y(a).color=b}function M(a){var b=a.dimensions,d=a.targetSize;return"height"===("height"===a.targetDimension?"height":
"width")?{height:d,width:b.width/b.height*d}:{height:b.height/b.width*d,width:d}}function z(a,b){a=g(a);a.material=b.color?S.mixin({},a.material,b):void 0}function O(a){return k(a)&&f(r,a.get("resource.primitive"))}function I(a){return k(a)?a.outline&&!a.get("resource.href"):!1}function P(a,b){return e(a)&&e(b)?(a=g(a),b=g(b),k(a)&&k(b)&&!a.resource.href&&!b.resource.href&&!f(r,a.resource.primitive)&&f(r,b.resource.primitive)):B(a,b)}function B(a,b){return p(a)&&p(b)&&!x(a)&&x(b)}Object.defineProperty(c,
"__esModule",{value:!0});var r=["x","cross"];c.is3d=e;c.getSymbolLayer=g;c.isPoint=F;c.hasExtrudeSymbolLayer=function(a){return e(a)&&t(g(a))};c.hasTextSymbolLayer=function(a){return e(a)&&u(g(a))};c.isLine=G;c.isPolygon=H;c.hasPureOutlineStyle=x;c.getOutline=y;c.setOutlineWidth=J;c.setOutlineStyle=K;c.setSize=L;c.getMarkerLength=function(a){if(e(a)){a=g(a);if(k(a)||u(a))return n.pt2px(a.size);if(m(a))return Math.max(a.width,a.height,a.depth);if(t(a))return a.size}else{if(p(a))return a.size;if(w(a))return Math.max(a.width,
a.height,a.depth)}};c.setFillColor=N;c.getFillColor=function(a){return e(a)?g(a).get("material.color"):a.color};c.setOutlineColor=A;c.preserveAspectRatio=M;c.testImageUrl=function(a){var b=new T,d=D.create("img"),c=E(d,"load",function(){0===d.width&&0===d.height?b.reject("image has both width and height of 0"):b.resolve({width:d.width,height:d.height})}),e=E(d,"error",function(a){b.reject("error ocurred while loading image",a)});d.src=a;b.promise.always(function(){c.remove();e.remove();D.destroy(d)});
return b.promise};c.updateShape=function(a){e(a.symbol);L(a.symbol,a.size)};c.updateFill=function(a){e(a.symbol);N(a.symbol,a.color)};c.updateOutline=function(a){e(a.symbol)?A(a.symbol,a.color):(A(a.symbol,a.color),K(a.symbol,a.pattern));J(a.symbol,a.size)};c.blendsIntoBackground=function(a){if(e(a))return!1;var b=void 0;return(b=a&&a.outline?a.outline.color:a.color)&&246<b.r&&246<b.g&&246<b.b};c.updateMaterial=z;c.ensureSupportedSimpleFillSymbolStyle=function(a){l(a,"simple-fill","2d")&&"solid"!==
a.style&&"none"!==a.style&&(a.style="solid")};c.getApplicableTabs=function(a,b){void 0===b&&(b=[]);if(e(a)){a=g(a);var d=a.type,c=["icon","object"],h=["icon","object","fill","extrude","text"],l=["icon","fill","line","path"];return{shape:{state:f(b,"shape")||!f(c,d)?"excluded":"enabled"},fill:{state:f(b,"fill")||!f(h,d)?"excluded":O(a)?"disabled":"enabled"},outline:{state:f(b,"outline")||!f(l,d)?"excluded":!k(a)||I(a)||O(a)?"enabled":"disabled"}}}var d=a.type,c=["simple-marker","picture-marker"],h=
["simple-marker","simple-fill"],l=["simple-marker","simple-line","simple-fill"],m=G(a),n=H(a);return{shape:{state:f(b,"shape")||m||n?"excluded":f(c,d)?"enabled":"disabled"},fill:{state:f(b,"fill")||m?"excluded":h[0]===d&&f(["circle","square","diamond"],a.style)||h[1]===d?"enabled":"disabled"},outline:{state:f(b,"outline")?"excluded":f(l,d)?"enabled":"disabled"}}};c.getSizeUnit=function(a){return e(a)&&(a=g(a).type,"extrude"===a||"object"===a)?"meters":"pixels"};c.getOutlineUnit=function(a){return e(a)&&
"path"===g(a).type?"meters":"pixels"};c.getSymbolSource=function(a){return e(a)?F(a)?(a=g(a),m(a)?"web-style:volumetric":k(a)?"web-style:flat":"web-style"):"web-style":"symbol-set"};c.getDimensionality=function(a){a=g(a).type;return"object"===a||"path"===a||"extrude"===a?"volumetric":"flat"};c.ensureProps=function(a){if(e(a)){var b=g(a);if(k(b)&&(b.outline||(b.outline=new Q.Symbol3DOutline({color:void 0,size:0})),void 0===b.size))return C.computeLayerSize(b).then(function(c){b.size=c[0];return a});
if(m(b)&&void 0===b.width&&void 0===b.height&&void 0===b.depth)return C.computeLayerSize(b).then(function(c){b.set({width:c[0],height:c[1],depth:c[2]});return a})}return R.resolve(a)};c.switchedFromRasterToVectorSymbol=function(a,b){return e(a)&&e(b)?(a=g(a),b=g(b),k(a)&&m(b)&&!!a.resource.href&&!b.resource.href&&!!b.resource.primitive):w(a)&&p(b)};c.switchedToPureOutline=P;c.switchedFromPureOutline=function(a,b){return e(a)&&e(b)?P(b,a):B(b,a)};c.switchedSmsStyleToPureOutline=B;c.getSymbolName=function(a){if(!e(a))return"";
var b=g(a);if(!k(b)&&!m(b))return"";if(a.styleOrigin)return a.styleOrigin.name;if(b.get("resource.href")||!b.get("resource.primitive"))return"";a=b.get("resource.primitive");if(k(b))return h[a];if(m(b)){var c=b.depth,f=b.height,b=b.width;return{sphere:h.sphere,cylinder:h.cylinder,"tall-cylinder":h.tallCylinder,cube:h.cube,"tall-cube":h.tallCube,cone:h.cone,"tall-cone":h.tallCone,"inverted-cone":h.invertedCone,diamond:h.diamond,tetrahedron:h.tetrahedron}[b&&c&&f&&b===c&&b<f?"tall-"+a:a]}}});