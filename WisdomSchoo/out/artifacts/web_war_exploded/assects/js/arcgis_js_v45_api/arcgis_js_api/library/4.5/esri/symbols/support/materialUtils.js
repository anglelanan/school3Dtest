// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define(["require","exports","../../Color","../../core/screenUtils"],function(m,c,e,l){function f(a){return Math.max(0,Math.min(Math.round(100*(1-a)),100))}function g(a){return Math.max(0,Math.min(1-a/100,1))}function h(a,b){a=null!=b.transparency?g(b.transparency):1;if((b=b.color)&&Array.isArray(b))return new e([b[0]||0,b[1]||0,b[2]||0,a])}function k(a,b){b.color=[d(a.r),d(a.g),d(a.b)];a=f(a.a);0!==a&&(b.transparency=a)}function d(a){return Math.max(0,Math.min(Math.round(a),255))}Object.defineProperty(c,
"__esModule",{value:!0});c.opacityToTransparency=f;c.transparencyToOpacity=g;c.readColorAndTransparency=h;c.writeColorAndTransparency=k;c.colorAndTransparencyProperty={type:e,json:{read:{source:["color","transparency"],reader:h},write:{writer:k}}};c.screenSizeProperty={type:Number,cast:l.toPt,json:{write:!0}}});