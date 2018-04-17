// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/promiseUtils ../../../views/3d/terrain/terrainUtils ../../../core/Error ../../../views/3d/terrain/TilingScheme".split(" "),function(q,h,f,k,g,l){function m(a){var c=a.basemap,e=a.view;return c.load().then(function(){if(0!==c.baseLayers.length){var b=c.baseLayers.concat(c.referenceLayers),b=n(b);return b.length?f.reject(b[0]):c.baseLayers.getItemAt(0).load().then(function(b){return p(b,e)})}}).otherwise(function(b){var a=b.name,c=b.message;return f.reject(new g(void 0===
a?"basemap-compatibility:unknown-error":a,void 0===c?"Unknown basemap compatibility error":c,b.details))})}function n(a){var c=["ArcGISTiledImageServiceLayer","ArcGISTiledMapServiceLayer","OpenStreetMap","VectorTileLayer","WebTiledLayer"];return a.toArray().filter(function(a){return-1===c.indexOf(a.operationalLayerType)}).map(function(a){return new g("basemap-compatibility:unsupported-basemap-layer-type","Unsupported basemap layer type ${operationalLayerType}",{layer:a,operationalLayerType:a.operationalLayerType||
"unknown"})})}function p(a,c){var e=a.tileInfo;if(e){var b=c.get("viewingMode");if(b){var d;d=e.spatialReference;d=null==d?!1:"global"===b?d.isWebMercator||d.isWGS84:!d.isGeographic;if(!d)return f.reject(new g("basemapgalleryitem:spatial-reference-unsupported-"+b,"Basemap spatial reference is unsupported in "+b+" mode"));if("global"===b){if((d=k.checkIfTileInfoSupportedForView(e,a.fullExtent,null,b))&&a.compatibleTileInfo256&&!k.checkIfTileInfoSupportedForView(a.compatibleTileInfo256,a.fullExtent,
null,b)&&(d=null),d)return f.reject(new g("basemapgalleryitem:tiling-scheme-unsupported-"+(e.spatialReference.isWebMercator?"web-mercator":"wgs84")+"-global","Basemap tiling scheme is unsupported in global mode",{error:d}))}else if(l.checkUnsupported(e))return f.reject(new g("basemapgalleryitem:tiling-scheme-unsupported-local","Basemap tiling scheme is unsupported in local mode"));c=c.get("basemapTerrain.tilingScheme");if(!(!c||c.compatibleWith(e)||a.compatibleTileInfo256&&c.compatibleWith(a.compatibleTileInfo256)))return f.reject(new g("basemapgalleryitem:tiling-scheme-incompatible",
"Basemap tiling scheme is incompatible with the view"))}}}Object.defineProperty(h,"__esModule",{value:!0});h.default3DCompatibility=function(a){return m(a).then(function(){})}});