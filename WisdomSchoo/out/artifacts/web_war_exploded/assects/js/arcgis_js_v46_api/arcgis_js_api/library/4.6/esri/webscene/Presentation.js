// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/JSONSupport ../core/Collection ../core/collectionUtils ../core/accessorSupport/decorators ./Slide".split(" "),function(n,p,k,e,l,m,f,c,g){var d=m.ofType(g);return function(h){function b(a){a=h.call(this,a)||this;a.slides=new d;return a}k(b,h);Object.defineProperty(b.prototype,"slides",{set:function(a){this._set("slides",f.referenceSetter(a,this._get("slides"),d))},enumerable:!0,configurable:!0});
b.prototype.clone=function(){return new this.constructor({slides:this.slides.clone()})};b.sanitizeJSON=function(a){return{slides:void 0!==a.slides&&Array.isArray(a.slides)?a.slides.filter(function(a){return a&&!!a.viewpoint}).map(function(a){return g.sanitizeJSON(a)}):[]}};e([c.property({type:d,json:{write:!0}}),c.cast(f.castForReferenceSetter)],b.prototype,"slides",null);return b=e([c.subclass("esri.webscene.Presentation")],b)}(c.declared(l))});