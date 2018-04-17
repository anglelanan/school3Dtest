// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/accessorSupport/decorators ../core/lang ../symbols/support/jsonUtils ../symbols/support/typeUtils ./Renderer".split(" "),function(m,n,h,c,b,f,g,k,l){return function(d){function a(){var a=null!==d&&d.apply(this,arguments)||this;a.description=null;a.label=null;a.symbol=null;a.type="simple";return a}h(a,d);e=a;a.prototype.writeSymbol=function(a,b,c,d){b[c]=g.write(a,{},d)};a.prototype.readSymbol=function(a,
b,c){return g.read(a,b,c)};a.prototype.getSymbol=function(a,b){return this.symbol};a.prototype.getSymbols=function(){return this.symbol?[this.symbol]:[]};a.prototype.clone=function(){return new e({description:this.description,label:this.label,symbol:this.symbol&&this.symbol.clone(),visualVariables:f.clone(this.visualVariables),authoringInfo:f.clone(this.authoringInfo)})};c([b.property({type:String,json:{write:!0}})],a.prototype,"description",void 0);c([b.property({type:String,json:{write:!0}})],a.prototype,
"label",void 0);c([b.property({types:k.types})],a.prototype,"symbol",void 0);c([b.writer("symbol")],a.prototype,"writeSymbol",null);c([b.reader("symbol")],a.prototype,"readSymbol",null);return a=e=c([b.subclass("esri.renderers.SimpleRenderer")],a);var e}(b.declared(l))});