// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/accessorSupport/decorators ../../../core/Accessor".split(" "),function(c,f,g,e,d,h){Object.defineProperty(f,"__esModule",{value:!0});c=function(c){function b(){var a=null!==c&&c.apply(this,arguments)||this;a.mode="auto";return a}g(b,c);Object.defineProperty(b.prototype,"near",{get:function(){return this._get("near")},set:function(a){this._set("near",a);a>=this._get("far")&&(this.far=
a+1E-9);this.mode="manual"},enumerable:!0,configurable:!0});b.prototype.castNear=function(a){return Math.max(1E-8,a)};Object.defineProperty(b.prototype,"far",{get:function(){return this._get("far")},set:function(a){this._set("far",a);a<=this._get("near")&&(this.near=a-1E-9);this.mode="manual"},enumerable:!0,configurable:!0});b.prototype.castFar=function(a){return Math.max(1E-8,a)};b.prototype.autoUpdate=function(a,b){"auto"===this.mode&&(this._get("near")!==a&&this._set("near",a),this._get("far")!==
b&&this._set("far",b))};e([d.property({type:Number,value:1E-8})],b.prototype,"near",null);e([d.cast("near")],b.prototype,"castNear",null);e([d.property({type:Number,value:1E-8})],b.prototype,"far",null);e([d.cast("far")],b.prototype,"castFar",null);e([d.property({type:String})],b.prototype,"mode",void 0);return b=e([d.subclass("esri.views.3d.constraints.ClipDistanceConstraint")],b)}(d.declared(h));f.ClipDistanceConstraint=c;f.default=c});