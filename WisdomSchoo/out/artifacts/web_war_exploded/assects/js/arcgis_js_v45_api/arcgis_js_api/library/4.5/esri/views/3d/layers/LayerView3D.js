// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/accessorSupport/decorators ../../../core/promiseUtils ../../../core/watchUtils ../../../geometry/support/heightModelInfoUtils ../../layers/LayerView".split(" "),function(m,n,h,e,d,f,k,g,l){return function(c){function a(){var b=null!==c&&c.apply(this,arguments)||this;b.supportsHeightUnitConversion=!1;return b}h(a,c);a.prototype.getHeightModelInfoResolvingPromise=function(){return g.mayHaveHeightModelInfo(this.layer)?
this._validateHeightModelInfo():f.resolve()};a.prototype._validateHeightModelInfo=function(){var b=this;return f.create(function(a,d){k.whenFalseOnce(b.view.defaultsFromMap,"isHeightModelInfoSearching",function(){var c=g.rejectLayerError(b.layer,b.view.heightModelInfo,b.supportsHeightUnitConversion);c?d(c):a()})})};e([d.property()],a.prototype,"view",void 0);return a=e([d.subclass("esri.views.3d.layers.LayerView3D")],a)}(d.declared(l))});