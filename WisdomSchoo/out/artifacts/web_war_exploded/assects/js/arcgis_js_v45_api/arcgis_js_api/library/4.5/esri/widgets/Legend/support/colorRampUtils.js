// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define("require exports ../../../Color ./utils ../../../core/numberUtils ../../../symbols/support/gfxUtils".split(" "),function(A,d,p,r,t,v){function w(b,a){var c=a-b;a=[0,.25,.5,.75,1].map(function(a){return Number((b+a*c).toFixed(6))});q(0,4,a);return a}function q(b,a,c){var e=b+(a-b)/2,g=c[0],k=c[1],f=c[2],m=Math.floor(g),h=Math.floor(k),n=Math.floor(f);m===g&&n===f&&h!==k&&m!==h&&n!==h&&(c[e]=h);b+1!==e&&q(b,e,c);e+1!==a&&q(e,a,c)}function u(b,a){b=x(b,a);var c=b.startIndex,e=b.endIndex;if(c===
e)return a[c].color;a=p.blendColors(a[c].color,a[e].color,b.weight);return new p(a)}function x(b,a){var c=0,e=a.length-1;a.some(function(a,k){if(b<a.value)return e=k,!0;c=k;return!1});return{startIndex:c,endIndex:e,weight:(b-a[c].value)/(a[e].value-a[c].value)}}Object.defineProperty(d,"__esModule",{value:!0});var y=[64,64,64],z=[255,255,255];d.getRampBorderColor=function(b){var a=null;if("simple"===b.type)a=b.symbol;else if("unique-value"===b.type||"class-breaks"===b.type)a=(b=(b=b.classBreakInfos||
b.uniqueValueInfos)&&b[0])&&b.symbol;return(b=(b=a&&-1===a.type.indexOf("line-symbol")?v.getStroke(a):null)&&b.color)&&0<b.a&&!(240<=b.r&&240<=b.g&&240<=b.b)?b:null};d.getRampOverlayColor=function(b){var a=new p(z);a.a=1-b;return a};d.getRampStops=function(b,a,c){var e=!1,g=[],k=[];if(a.colors||a.opacityValues)g=w(a.minDataValue,a.maxDataValue);else if(a.stops){var f=a.stops,g=f.map(function(a){return a.value});(e=f.some(function(a){return!!a.label}))&&(k=f.map(function(a){return a.label}))}var m=
g[0],f=g[g.length-1];if(null==m&&null==f)return null;var h=f-m;return g.map(function(f,d){var l;if("opacity"===a.type){l=c;void 0===l&&(l=y);l=new p(l);var n=b.getOpacity(f,{opacityInfo:a});null!=n&&(l.a=n)}else l=b.getColor(f,{colorInfo:a});d=e?k[d]:r.getLabelPrefix(d,g.length-1)+t.format(f);return{value:f,color:l,label:d,offset:h?1-(f-m)/h:1}}).reverse()};d.getRampStopsForPointCloud=function(b){var a=!1,c=[],e=[],c=b.map(function(a){return a.value});(a=b.some(function(a){return!!a.label}))&&(e=
b.map(function(a){return a.label}));var g=c[0],d=c[c.length-1];if(null==g&&null==d)return null;var f=d-g;return c.map(function(d,h){var k=u(d,b);h=a?e[h]:r.getLabelPrefix(h,c.length-1)+t.format(d);return{value:d,color:k,label:h,offset:f?1-(d-g)/f:1}}).reverse()};d.getColorFromPointCloudStops=u});