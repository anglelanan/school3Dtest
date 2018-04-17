// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("require exports module ../../../../core/Error ../../../../core/promiseUtils ../../../../core/promiseUtils ../../../../core/kebabDictionary ../../../../core/workers/workers ../../../../core/requireUtils ../../../../tasks/QueryTask ../../../../tasks/support/Query ./TileData".split(" "),function(g,w,l,h,e,m,n,p,q,r,k,t){var u=n({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch"});return function(){function b(a,
d,c,f,b,v){this._parent=a;this._tilecoordRange=f;this._tileCoordRatio=b;this._quantizationFactor=v;this._wglFeatureView=d}b.prototype.start=function(){var a=this;return p.open(this,q.getAbsMid("./WorkerTileHandler",g,l),!0).then(function(d){a._connection=d})};b.prototype.configure=function(a,d){var c=this._parent.layer;this._queryTask=new r(c.parsedUrl.path);this._returnCentroid=this._getReturnCentroid(c.renderer);var f=c.createQuery();return this._connection.invoke("configure",{renderer:a.toJSON(),
spatialReference:this._parent.view.spatialReference.toJSON(),capabilities:c.capabilities,url:c.parsedUrl.path,geometryType:u.toJSON(c.geometryType),query:f.toJSON(),outFields:f.outFields,objectIdField:c.objectIdField,tileCoordRange:this._tilecoordRange,tileCoordRatio:this._tileCoordRatio,returnCentroid:this._returnCentroid,quantizationFactor:this._quantizationFactor,pixelRatio:window.devicePixelRatio||1,processing:d&&d.toWorker()||null,queryInMainThread:!0})};b.prototype.stop=function(){this._connection&&
(this._connection.close(),this._connection=null)};b.prototype.registerTile=function(a){return this._connection.invoke("registerTile",{key:a.id}).then(function(a){return a&&a.displayData&&a.bufferData?t.deserialize(a):null})};b.prototype.removeTile=function(a){this._connection.invoke("unregisterTile",{key:a.id})};b.prototype.getFeatures=function(a){return this._connection.invoke("getFeatures",{featureIds:a})};b.prototype.getMaterialItems=function(a){(a=a.items)&&0!==a.length||e.resolve({data:{items:[]},
buffers:[]});var d=this._wglFeatureView.textureManager,c=[];a.forEach(function(a){c.push(d.rasterizeItem(a.symbol,a.glyphIds))});return m.all(c).then(function(a){return{data:{items:a.map(function(a,c){return{id:c,mosaicItem:a}})},buffers:[]}})};b.prototype.executeProcessing=function(a){var d=this;return e.resolve().then(function(){var c=d._parent.layer.processing;return c?(c=c.process(JSON.parse(a.featureSet),k.fromJSON(a.query),c.options))?c:e.reject(new h("FeatureLayer","invalid processing.process() method, returns nothing")):
e.resolve({data:a.featureSet})}).then(function(a){return{data:{featureSet:JSON.stringify(a)},buffers:[]}})};b.prototype.queryFeatures=function(a){var d=this,c=k.fromJSON(a.query);a=this._queryTask;var b=this._parent.layer,g=b.source&&"esri.layers.graphics.sources.CSVSource"===b.source.declaredClass;c.returnGeometry=!this._returnCentroid||b.renderer.backgroundFillSymbol;c.returnJSON=!0;c.returnCentroid=this._returnCentroid;return(g?b.source.queryFeaturesJSON(c):a.rawExecute(c).then(function(a){return a.data})).then(function(a){var b=
d._parent.layer.processing;return b?(a=b.process(a,c,b.options))?a:e.reject(new h("FeatureLayer","invalid processing.process() method, returns nothing")):a}).then(function(a){return{data:{featureSet:JSON.stringify(a)},buffers:[]}})};b.prototype._getReturnCentroid=function(a){function b(a){if(!a)return!1;a=a.type;return"simple-marker"===a||"picture-marker"===a||"text"===a}if("polygon"!==this._parent.layer.geometryType)return!1;switch(a.type){case "simple":return b(a.symbol);case "unique-value":return b(a.defaultSymbol)||
a.uniqueValueInfos.some(function(a){return b(a.symbol)});case "class-breaks":return b(a.defaultSymbol)||a.classBreakInfos.some(function(a){return b(a.symbol)});default:return!0}};return b}()});