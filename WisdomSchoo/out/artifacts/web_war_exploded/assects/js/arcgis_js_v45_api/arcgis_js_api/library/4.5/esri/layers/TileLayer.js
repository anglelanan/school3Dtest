// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define("dojo/_base/lang dojo/io-query ../request ../core/urlUtils ../core/promiseUtils ../geometry/SpatialReference ./TiledLayer ./mixins/ArcGISMapService ./mixins/ArcGISCachedService ./mixins/OperationalLayer ./mixins/PortalLayer ./mixins/RefreshableLayer ./support/arcgisLayers ./support/arcgisLayerUrl".split(" "),function(f,h,k,g,l,m,n,p,q,r,t,u,v,w){return n.createSubclass([p,q,r,t,u],{declaredClass:"esri.layers.TileLayer",_mapsWithAttribution:"Canvas/World_Dark_Gray_Base Canvas/World_Dark_Gray_Reference Canvas/World_Light_Gray_Base Canvas/World_Light_Gray_Reference Elevation/World_Hillshade Ocean/World_Ocean_Base Ocean/World_Ocean_Reference Ocean_Basemap Reference/World_Boundaries_and_Places Reference/World_Boundaries_and_Places_Alternate Reference/World_Transportation World_Imagery World_Street_Map World_Topo_Map".split(" "),
_TILE_FORMATS:{PNG:"png",PNG8:"png",PNG24:"png",PNG32:"png",JPG:"jpg",JPEG:"jpg",GIF:"gif"},_attributionServices:["services.arcgisonline.com/arcgis/rest/services","servicesdev.arcgisonline.com/arcgis/rest/services","servicesqa.arcgisonline.com/arcgis/rest/services"],normalizeCtorArgs:function(a,b){return"string"===typeof a?f.mixin({},{url:a},b):a},load:function(){this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service","Map Service"]}).always(this._fetchService.bind(this)))},
properties:{operationalLayerType:{get:function(){if(this.capabilities)return-1!==this.capabilities.indexOf("Map")?"ArcGISTiledMapServiceLayer":"ArcGISTiledImageServiceLayer";var a=this.url||this.portalItem&&this.portalItem.url;return a&&/\/ImageServer(\/|\/?$)/i.test(a)?"ArcGISTiledImageServiceLayer":"ArcGISTiledMapServiceLayer"}},attributionDataUrl:{dependsOn:["parsedUrl"],get:function(){return this._getDefaultAttribution(this._getMapName(this.parsedUrl.path.toLowerCase()))}},popupTemplates:null,
tileServers:{dependsOn:["parsedUrl"],value:null,cast:function(a){return Array.isArray(a)?a.map(function(a){return g.urlToObject(a).path}):null},get:function(){return this._getDefaultTileServers(this.parsedUrl.path)}},type:{value:"tile",json:{read:!1}},spatialReference:{json:{read:{source:["spatialReference","tileInfo"],reader:function(a,b){return(a=a||b.tileInfo&&b.tileInfo.spatialReference)&&m.fromJSON(a)}}}}},getTileUrl:function(a,b,d){var e=this.tileServers,c=this.parsedUrl.query?h.objectToQuery(this.parsedUrl.query):
"";this.token&&(c=c+(c?"\x26":"")+"token\x3d"+encodeURIComponent(this.token));this.resampling&&!this.tilemapCache&&this.supportsBlankTile&&(c=c+(c?"\x26":"")+"blankTile\x3dfalse");this.refreshTimestamp&&(c=c+(c?"\x26":"")+"_ts\x3d"+this.refreshTimestamp);return(e&&e.length?e[b%e.length]:this.parsedUrl.path)+"/tile/"+a+"/"+b+"/"+d+(c?"?"+c:"")},_fetchService:function(){return l.resolve().then(function(){return this.resourceInfo||k(this.parsedUrl.path,{query:f.mixin({f:"json"},this.parsedUrl.query),
responseType:"json",callbackParamName:"callback"})}.bind(this)).then(function(a){a.ssl&&(this.url=this.url.replace(/^http:/i,"https:"));this.read(a.data,{origin:"service",url:this.parsedUrl});if(10.1===this.version&&!w.isHostedAgolService(this.url))return v.fetchServerVersion(this.url).then(function(a){this.read({currentVersion:a})}.bind(this)).otherwise(function(){})}.bind(this))},_getMapName:function(a){return(a=a.match(/^(?:https?:)?\/\/(server|services)\.arcgisonline\.com\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i))&&
a[2]},_getDefaultAttribution:function(a){if(a){var b;a=a.toLowerCase();for(var d=0,e=this._mapsWithAttribution.length;d<e;d++)if(b=this._mapsWithAttribution[d],-1<b.toLowerCase().indexOf(a))return g.makeAbsolute("//static.arcgis.com/attribution/"+b)}},_getDefaultTileServers:function(a){var b=-1!==a.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i),d=-1!==a.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i);return b||d?[a,a.replace(b?/server\.arcgisonline/i:/services\.arcgisonline/i,b?"services.arcgisonline":
"server.arcgisonline")]:[]}})});