// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/JSONSupport ../core/kebabDictionary ../core/lang ../core/accessorSupport/decorators".split(" "),function(e,m,k,d,l,g,f,c){e=function(h){function b(a){a=h.call(this)||this;a.pointSizeAlgorithm=null;a.colorModulation=null;a.pointsPerInch=10;return a}k(b,h);b.prototype.readPointSizeAlgorithm=function(a,b,c){return null==a||"object"!==typeof a?null:"pointCloudFixedSizeAlgorithm"===a.type?{type:"fixed-size",
useRealWorldSymbolSizes:!!a.useRealWorldSymbolSizes,size:null!=a.size?parseFloat(a.size):0}:"pointCloudSplatAlgorithm"===a.type?{type:"splat",scaleFactor:null!=a.scaleFactor?parseFloat(a.scaleFactor):1,minSize:null!=a.minSize?parseFloat(a.minSize):null}:null};b.prototype.writePointSizeAlgorithm=function(a,b,c,d){a&&"fixed-size"===a.type?(b.pointSizeAlgorithm={type:"pointCloudFixedSizeAlgorithm",size:null!=a.size?a.size:0},null!=a.useRealWorldSymbolSizes&&(b.pointSizeAlgorithm.useRealWorldSymbolSizes=
a.useRealWorldSymbolSizes)):a&&"splat"===a.type&&(b.pointSizeAlgorithm={type:"pointCloudSplatAlgorithm",scaleFactor:null!=a.scaleFactor?a.scaleFactor:1},null!=a.minSize&&(b.pointSizeAlgorithm.minSize=a.minSize))};b.prototype.readColorModulation=function(a,b,c){return null==a||"object"!==typeof a?null:{field:String(a.field),minValue:null!=a.minValue?parseFloat(a.minValue):0,maxValue:null!=a.maxValue?parseFloat(a.maxValue):255}};b.prototype.clone=function(){console.warn(".clone() is not implemented for "+
this.declaredClass);return null};b.prototype.cloneProperties=function(){return{pointSizeAlgorithm:f.clone(this.pointSizeAlgorithm),colorModulation:f.clone(this.colorModulation),pointsPerInch:f.clone(this.pointsPerInch)}};d([c.property({readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],b.prototype,"type",void 0);d([c.property({json:{write:!0}})],b.prototype,"pointSizeAlgorithm",void 0);d([c.reader("pointSizeAlgorithm")],b.prototype,"readPointSizeAlgorithm",null);d([c.writer("pointSizeAlgorithm")],
b.prototype,"writePointSizeAlgorithm",null);d([c.property({json:{write:!0}})],b.prototype,"colorModulation",void 0);d([c.reader("colorModulation")],b.prototype,"readColorModulation",null);d([c.property({json:{write:!0},type:Number})],b.prototype,"pointsPerInch",void 0);return b=d([c.subclass("esri.renderers.PointCloudRenderer")],b)}(c.declared(l));(function(c){c.pointSizeKebabDict=g({pointCloudSplatAlgorithm:"fixed-size",pointCloudFixedSizeAlgorithm:"splat"});c.fieldTransformTypeKebabDict=g({none:"none",
lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"});c.defaultMinSize=1.1})(e||(e={}));return e});