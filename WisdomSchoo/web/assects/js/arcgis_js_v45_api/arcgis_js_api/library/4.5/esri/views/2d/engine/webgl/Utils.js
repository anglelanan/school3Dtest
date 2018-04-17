// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define(["require","exports","./enums"],function(w,a,h){function g(b){for(var a={},d=0;d<b.length;d++){var k=b[d];a[k.name]=k.strideInBytes}return a}function m(b){if(b.type){switch(b.type){case "simple-marker":case "picture-marker":return!0;case "CIMPointSymbol":return!0}return!1}}function n(b){if(b.type){switch(b.type){case "simple-fill":case "picture-fill":return!0;case "CIMPolygonSymbol":return!0}return!1}}function p(b){if(b.type){switch(b.type){case "simple-line":case "picture-line":return!0;case "CIMLineSymbol":return!0}return!1}}
function q(b){if(b.type){switch(b.type){case "text":return!0;case "CIMTextSymbol":return!0}return!1}}function l(b){return b&&b.length||0}function r(b,a,d){var c=0;do{var e=b%128;b-=e;b/=128;0<b&&(e+=128);a&&(a[d+c]=e);++c}while(0<b);return c}function t(b,a,d){for(var c=0,e=0,f=!0,h=1;f;){var g=a[d+c];++c;128<=g?(g-=128,f=!0):f=!1;e+=g*h;h*=128}b.n=e;return c}function u(b,a,d){void 0===a&&(a=0);void 0===d&&(d=!1);var c=b[a+3];b[a+0]*=c;b[a+1]*=c;b[a+2]*=c;d||(b[a+3]*=255);return b}function v(b){return"string"===
typeof b}Object.defineProperty(a,"__esModule",{value:!0});a.C_HITTEST_SEARCH_SIZE=4;a.C_TILE_SIZE=512;a.C_VBO_GEOMETRY="geometry";a.C_VBO_PERINSTANCE="per_instance";a.C_VBO_PERINSTANCE_VV="per_instance_vv";a.C_VBO_VISIBILITY="visibility";a.C_ICON_VERTEX_DEF=[{name:a.C_VBO_GEOMETRY,strideInBytes:24,divisor:0}];a.C_ICON_VERTEX_DEF_VV=[{name:a.C_VBO_GEOMETRY,strideInBytes:40,divisor:0}];a.C_ICON_HEATMAP=[{name:a.C_VBO_GEOMETRY,strideInBytes:28,divisor:0}];a.C_FILL_VERTEX_DEF=[{name:a.C_VBO_GEOMETRY,
strideInBytes:24,divisor:0}];a.C_FILL_VERTEX_DEF_VV=[{name:a.C_VBO_GEOMETRY,strideInBytes:32,divisor:0}];a.C_LINE_VERTEX_DEF=[{name:a.C_VBO_GEOMETRY,strideInBytes:32,divisor:0}];a.C_LINE_VERTEX_DEF_VV=[{name:a.C_VBO_GEOMETRY,strideInBytes:44,divisor:0}];a.C_TEXT_VERTEX_DEF=[{name:a.C_VBO_GEOMETRY,strideInBytes:24,divisor:0},{name:a.C_VBO_VISIBILITY,strideInBytes:1,divisor:0}];a.C_TEXT_VERTEX_DEF_VV=[{name:a.C_VBO_GEOMETRY,strideInBytes:40,divisor:0},{name:a.C_VBO_VISIBILITY,strideInBytes:1,divisor:0}];
a.C_ICON_STRIDE_SPEC=g(a.C_ICON_VERTEX_DEF);a.C_ICON_STRIDE_SPEC_VV=g(a.C_ICON_VERTEX_DEF_VV);a.C_ICON_STRIDE_SPEC_HEATMAP=g(a.C_ICON_HEATMAP);a.C_FILL_STRIDE_SPEC=g(a.C_FILL_VERTEX_DEF);a.C_FILL_STRIDE_SPEC_VV=g(a.C_FILL_VERTEX_DEF_VV);a.C_LINE_STRIDE_SPEC=g(a.C_LINE_VERTEX_DEF);a.C_LINE_STRIDE_SPEC_VV=g(a.C_LINE_VERTEX_DEF_VV);a.C_TEXT_STRIDE_SPEC=g(a.C_TEXT_VERTEX_DEF);a.C_TEXT_STRIDE_SPEC_VV=g(a.C_TEXT_VERTEX_DEF_VV);a.getStrides=function(b,c,d){void 0===d&&(d=!1);switch(b){case h.WGLGeometryType.MARKER:return c?
a.C_ICON_STRIDE_SPEC_VV:d?a.C_ICON_STRIDE_SPEC_HEATMAP:a.C_ICON_STRIDE_SPEC;case h.WGLGeometryType.FILL:return c?a.C_FILL_STRIDE_SPEC_VV:a.C_FILL_STRIDE_SPEC;case h.WGLGeometryType.LINE:return c?a.C_LINE_STRIDE_SPEC_VV:a.C_LINE_STRIDE_SPEC;case h.WGLGeometryType.TEXT:return c?a.C_TEXT_STRIDE_SPEC_VV:a.C_TEXT_STRIDE_SPEC}return null};a.getSymbolGeometryType=function(b){return m(b)?h.WGLGeometryType.MARKER:p(b)?h.WGLGeometryType.LINE:n(b)?h.WGLGeometryType.FILL:q(b)?h.WGLGeometryType.TEXT:h.WGLGeometryType.UNKNOWN};
a.isMarkerSymbol=m;a.isFillSymbol=n;a.isLineSymbol=p;a.isPictureSymbol=function(b){if(b.type)switch(b.type){case "picture-marker":case "picture-line":case "picture-fill":return!0}return!1};a.isTextSymbol=q;a.isSameUniformValue=function(b,a){return!1};a.isSameMaterialInfo=function(b,a){if(b.materialKey!==a.materialKey||l(b.texBindingInfo)!==l(a.texBindingInfo)||l(b.materialParams)!==l(a.materialParams))return!1;for(var c=b.texBindingInfo.length,k=0;k<c;++k){var e=b.texBindingInfo[k],f=a.texBindingInfo[k];
if(e.unit!==f.unit||e.pageId!==f.pageId||e.semantic!==f.semantic)return!1}b=b.materialParams.length;for(k=0;k<b;)return!1;return!0};a.i1616to32=function(b,a){return 65535&b|a<<16};a.i8888to32=function(b,a,d,k){return b&255|(a&255)<<8|(d&255)<<16|k<<24};a.i8816to32=function(b,a,d){return b&255|(a&255)<<8|d<<16};a.numTo32=function(b){return b|0};a.serializeInteger=r;a.deserializeInteger=t;a.serializeString=function(b,a,d){for(var c=0,e=b.length,f=0;f<e;++f)a&&(a[d+c]=b.charCodeAt(f)),++c;a&&(a[d+c]=
0);++c;return c};a.deserializeString=function(a,c,d){var b=0;a.s="";for(var e=!0;e;){var f=c[d+b];++b;0!==f?a.s+=String.fromCharCode(f):e=!1}return b};a.serializeUniform=function(a,c,d){return r(a,c,d)};a.deserializeUniform=function(a,c,d){return t(a,c,d)};a.premultiplyAlpha=u;a.copyAndPremultiply=function(a){a=Array.isArray(a)?[a[0],a[1],a[2],a[3]]:[a.r,a.g,a.b,a.a];u(a);return a};a.nextHighestPowerOfTwo=function(a){a--;a|=a>>1;a|=a>>2;a|=a>>4;a|=a>>8;a|=a>>16;a++;return a};a.isDefined=function(a){return null!==
a&&void 0!==a};a.isNumber=function(a){return"number"===typeof a};a.isString=v;a.isStringOrNull=function(a){return null==a||v(a)};a.lerp=function(a,c,d){return a+(c-a)*d}});