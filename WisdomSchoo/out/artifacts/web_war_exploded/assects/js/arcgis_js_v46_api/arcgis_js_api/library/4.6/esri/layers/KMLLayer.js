// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/accessorSupport/decorators dojo/_base/lang ../core/Collection ../core/promiseUtils ../core/CollectionFlattener ../geometry/SpatialReference ./Layer ./mixins/OperationalLayer ./mixins/PortalLayer ./mixins/RefreshableLayer ./mixins/ScaleRangeLayer ./support/kmlUtils ./support/KMLSublayer".split(" "),function(x,y,k,e,d,l,m,n,p,g,q,r,t,u,v,f,w){return function(h){function b(a,b){var c=h.call(this)||
this;c._visibleFolders=[];c.allSublayers=new p({root:c,rootCollectionNames:["sublayers"],getChildrenFunction:function(a){return a.sublayers}});c.outSpatialReference=g.WGS84;c.operationalLayerType="KML";c.sublayers=null;c.type="kml";c.url=null;c.watch("sublayers",function(a,b){b&&b.forEach(function(a){a.parent=null;a.layer=null});a&&a.forEach(function(a){a.parent=c;a.layer=c})},!0);return c}k(b,h);b.prototype.normalizeCtorArgs=function(a,b){return"string"===typeof a?l.mixin({},{url:a},b):a};b.prototype.readSublayersFromItemOrWebMap=
function(a,b,c){this._visibleFolders=b.visibleFolders};b.prototype.readSublayers=function(a,b,c){return f.sublayersFromJSON(b,c,this._visibleFolders)};b.prototype.writeSublayers=function(a,b,c,d){c=[];for(a=a.toArray();a.length;)d=a[0],d.networkLink||(d.visible&&c.push(d.id),d.sublayers&&a.push.apply(a,d.sublayers.toArray())),a.shift();b.visibleFolders=c};Object.defineProperty(b.prototype,"title",{get:function(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");
if(this.url){var a=this.url.substring(this.url.lastIndexOf("/")+1,this.parsedUrl.path.lastIndexOf("."));0===a.length&&(a="KML");return a}return this._get("title")||""},set:function(a){this._set("title",a)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"visibleSublayers",{get:function(){var a=this.sublayers,b=[],c=function(a){a.visible&&(b.push(a),a.sublayers&&a.sublayers.forEach(c))};a&&a.forEach(c);return b},enumerable:!0,configurable:!0});b.prototype.load=function(){var a=this;
this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"]}).then(function(){return a._fetchService()}));return this.when()};b.prototype._fetchService=function(){var a=this;return n.resolve().then(function(){return a.resourceInfo?{ssl:!1,data:a.resourceInfo}:f.fetchService(a.url,a.outSpatialReference,a.refreshInterval)}).then(function(b){(b=f.parseKML(b.data))&&a.read(b,{origin:"service"})})};e([d.shared({"2d":"../views/2d/layers/KMLLayerView2D"})],b.prototype,"viewModulePaths",void 0);
e([d.property({readOnly:!0})],b.prototype,"allSublayers",void 0);e([d.property({type:g})],b.prototype,"outSpatialReference",void 0);e([d.property()],b.prototype,"operationalLayerType",void 0);e([d.property({type:m.ofType(w),json:{write:{ignoreOrigin:!0}}})],b.prototype,"sublayers",void 0);e([d.reader(["web-map","portal-item"],"sublayers",["visibleFolders"])],b.prototype,"readSublayersFromItemOrWebMap",null);e([d.reader("service","sublayers",["sublayers"])],b.prototype,"readSublayers",null);e([d.writer("sublayers")],
b.prototype,"writeSublayers",null);e([d.property({readOnly:!0,json:{read:!1}})],b.prototype,"type",void 0);e([d.property({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}},dependsOn:["url","parsedUrl"]})],b.prototype,"title",null);e([d.property()],b.prototype,"url",void 0);e([d.property({readOnly:!0,dependsOn:["sublayers"]})],b.prototype,"visibleSublayers",null);return b=e([d.subclass("esri.layers.KMLLayer")],b)}(d.declared(q,r,t,u,v))});