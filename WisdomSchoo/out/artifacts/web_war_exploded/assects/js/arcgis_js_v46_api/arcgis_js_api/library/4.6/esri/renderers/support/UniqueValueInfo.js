// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/accessorSupport/decorators ../../core/JSONSupport ../../symbols/support/typeUtils ../../symbols/support/jsonUtils".split(" "),function(b,c,h,e,d,k,g,f){Object.defineProperty(c,"__esModule",{value:!0});b=function(b){function a(){var a=null!==b&&b.apply(this,arguments)||this;a.description=null;a.label=null;a.symbol=null;a.value=null;return a}h(a,b);c=a;a.prototype.clone=function(){return new c({value:this.value,
description:this.description,label:this.label,symbol:this.symbol?this.symbol.clone():null})};e([d.property({type:String,json:{write:!0}})],a.prototype,"description",void 0);e([d.property({type:String,json:{write:!0}})],a.prototype,"label",void 0);e([d.property({types:g.types,json:{origins:{"web-scene":{read:f.read,write:{target:{symbol:{types:g.types3D}},writer:f.writeTarget}}},read:f.read,write:f.writeTarget}})],a.prototype,"symbol",void 0);e([d.property({type:String,json:{write:!0}})],a.prototype,
"value",void 0);return a=c=e([d.subclass("esri.renderers.support.UniqueValueInfo")],a);var c}(d.declared(k));c.UniqueValueInfo=b;c.default=b});