// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper dojo/_base/lang ../../core/JSONSupport ../../core/kebabDictionary ../../core/accessorSupport/decorators ../../geometry/SpatialReference ../../geometry/Point ../../geometry/support/spatialReferenceUtils ../../geometry/support/webMercatorUtils ../../geometry/support/scaleUtils ./LOD".split(" "),function(A,B,t,d,u,v,w,f,m,h,p,x,y,z){var q=w({PNG:"png",PNG8:"png8",PNG24:"png24",PNG32:"png32",JPEG:"jpg",
JPG:"jpg",DIB:"dib",TIFF:"tiff",EMF:"emf",PS:"ps",PDF:"pdf",GIF:"gif",SVG:"svg",SVGZ:"svgz",Mixed:"mixed",MIXED:"mixed",LERC:"lerc"});return function(r){function c(a){a=r.call(this)||this;a.dpi=96;a.format=null;a.origin=null;a.minScale=0;a.maxScale=0;a.size=null;a.spatialReference=null;return a}t(c,r);k=c;c.create=function(a){void 0===a&&(a={size:256,spatialReference:m.WebMercator});var b=a.scales,c=a.size||256;a=a.spatialReference||m.WebMercator;var e=p.getInfo(a),e=e?new h(e.origin[0],e.origin[1],
a):new h(0,0,a),f=1/(39.37*y.getMetersPerUnitForSR(a)*96),l=[];if(b)for(var d=0;d<b.length;d++){var g=b[d],n=g*f;l.push({level:d,scale:g,resolution:n})}else for(b=256/c*5.91657527591555E8,l.push({level:0,scale:b,resolution:b*f}),d=1;24>d;d++)g=b/2,n=g*f,l.push({level:d,scale:g,resolution:n}),b=g;return new k({dpi:96,lods:l,origin:e,size:c,spatialReference:a})};Object.defineProperty(c.prototype,"isWrappable",{get:function(){var a=this.spatialReference,b=this.origin;if(a&&b){var c=p.getInfo(a);return a.isWrappable&&
Math.abs(c.origin[0]-b.x)<=c.dx}return!1},enumerable:!0,configurable:!0});c.prototype.readOrigin=function(a,b){return h.fromJSON(u.mixin({spatialReference:b.spatialReference},a))};Object.defineProperty(c.prototype,"lods",{set:function(a){var b=this,c=0,e=0,d=[];this._levelToLOD={};a&&(c=-Infinity,e=Infinity,a.forEach(function(a){d.push(a.scale);c=a.scale>c?a.scale:c;e=a.scale<e?a.scale:e;b._levelToLOD[a.level]=a}));this._set("scales",d);this._set("minScale",c);this._set("maxScale",e);this._set("lods",
a);this._initializeUpsampleLevels()},enumerable:!0,configurable:!0});c.prototype.readSize=function(a,b){return[b.cols,b.rows]};c.prototype.writeSize=function(a,b){b.cols=a[0];b.rows=a[0]};c.prototype.zoomToScale=function(a){var b=this.scales;if(0>=a)return b[0];if(a>=b.length)return b[b.length-1];var c=Math.round(a);return b[c]+(c-a)*(b[Math.round(a-.5)]-b[c])};c.prototype.scaleToZoom=function(a){for(var b=this.scales,c=b.length-1,e=0;e<c;e++){var d=b[e],f=b[e+1];if(d<=a)break;if(f===a)return e+1;
if(d>a&&f<a)return e+1-(a-f)/(d-f)}return e};c.prototype.snapScale=function(a,b){void 0===b&&(b=.95);a=this.scaleToZoom(a);return a%Math.floor(a)>=b?this.zoomToScale(Math.ceil(a)):this.zoomToScale(Math.floor(a))};c.prototype.tileAt=function(a,b,c,e){var d=this.lodAt(a);if(!d)return null;e||(e={id:null,level:0,row:0,col:0,extent:[0,0,0,0]});var f;if("number"===typeof b)f=b,b=c;else{if(b.spatialReference.equals(this.spatialReference))f=b.x,b=b.y;else{e=x.project(b,this.spatialReference);if(!e)return null;
f=e.x;b=e.y}e=c}c=d.resolution*this.size[0];d=d.resolution*this.size[1];e.level=a;e.row=Math.floor((this.origin.y-b)/d+.001);e.col=Math.floor((f-this.origin.x)/c+.001);this.updateTileInfo(e);return e};c.prototype.updateTileInfo=function(a){var b=this.lodAt(a.level),c=b.resolution*this.size[0],b=b.resolution*this.size[1];a.id=a.level+"/"+a.row+"/"+a.col;a.extent||(a.extent=[0,0,0,0]);a.extent[0]=this.origin.x+a.col*c;a.extent[1]=this.origin.y-(a.row+1)*b;a.extent[2]=a.extent[0]+c;a.extent[3]=a.extent[1]+
b};c.prototype.upsampleTile=function(a){var b=this._upsampleLevels[a.level];if(!b||-1===b.parentLevel)return!1;a.level=b.parentLevel;a.row=Math.floor(a.row/b.factor+.001);a.col=Math.floor(a.col/b.factor+.001);this.updateTileInfo(a);return!0};c.prototype.lodAt=function(a){return this._levelToLOD&&this._levelToLOD[a]||null};c.prototype.clone=function(){return k.fromJSON(this.write({}))};c.prototype._initializeUpsampleLevels=function(){var a=this.lods;this._upsampleLevels=[];for(var b=null,c=0;c<a.length;c++){var d=
a[c];this._upsampleLevels[d.level]={parentLevel:b?b.level:-1,factor:b?b.resolution/d.resolution:0};b=d}};d([f.property({type:Number,json:{write:!0}})],c.prototype,"compressionQuality",void 0);d([f.property({type:Number,json:{write:!0}})],c.prototype,"dpi",void 0);d([f.property({type:String,json:{read:q.read,write:q.write}})],c.prototype,"format",void 0);d([f.property({readOnly:!0,dependsOn:["spatialReference","origin"]})],c.prototype,"isWrappable",null);d([f.property({type:h,json:{write:!0}})],c.prototype,
"origin",void 0);d([f.reader("origin")],c.prototype,"readOrigin",null);d([f.property({type:[z],value:null,json:{write:!0}})],c.prototype,"lods",null);d([f.property({readOnly:!0})],c.prototype,"minScale",void 0);d([f.property({readOnly:!0})],c.prototype,"maxScale",void 0);d([f.property({readOnly:!0})],c.prototype,"scales",void 0);d([f.property({cast:function(a){return Array.isArray(a)?a:"number"===typeof a?[a,a]:[256,256]}})],c.prototype,"size",void 0);d([f.reader("size",["rows","cols"])],c.prototype,
"readSize",null);d([f.writer("size",{cols:{type:Number},rows:{type:Number}})],c.prototype,"writeSize",null);d([f.property({type:m,json:{write:!0}})],c.prototype,"spatialReference",void 0);return c=k=d([f.subclass("esri.layers.support.TileInfo")],c);var k}(f.declared(v))});