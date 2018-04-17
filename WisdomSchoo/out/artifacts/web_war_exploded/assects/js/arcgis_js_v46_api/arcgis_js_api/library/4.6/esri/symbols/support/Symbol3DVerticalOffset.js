// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/JSONSupport ../../core/accessorSupport/decorators ./materialUtils".split(" "),function(b,c,f,e,g,d,h){Object.defineProperty(c,"__esModule",{value:!0});b=function(b){function a(){var a=null!==b&&b.apply(this,arguments)||this;a.screenLength=0;a.minWorldLength=0;return a}f(a,b);c=a;a.prototype.writeMinWorldLength=function(a,b,c){a&&(b[c]=a)};a.prototype.clone=function(){return new c({screenLength:this.screenLength,
minWorldLength:this.minWorldLength,maxWorldLength:this.maxWorldLength})};e([d.property(h.screenSizeProperty)],a.prototype,"screenLength",void 0);e([d.property({type:Number,json:{write:!0}})],a.prototype,"minWorldLength",void 0);e([d.writer("minWorldLength")],a.prototype,"writeMinWorldLength",null);e([d.property({type:Number,json:{write:!0}})],a.prototype,"maxWorldLength",void 0);return a=c=e([d.subclass("esri.symbols.support.Symbol3DVerticalOffset")],a);var c}(d.declared(g));c.Symbol3DVerticalOffset=
b;c.default=b});