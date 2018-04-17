// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/HandleRegistry ../../../../core/Scheduler ../../lib/glMatrix ../Evented ../aaBoundingRect ../debugFlags".split(" "),function(h,k,n,p,l,q,b,r){Object.defineProperty(k,"__esModule",{value:!0});h=function(){function c(a){var d=this;this.handles=new n;this.tileGeometryUpdateExtent=b.create(b.NEGATIVE_INFINITY);this.tileGeometryUpdateSpatialReference=null;this.hasPendingTileGeometryChanges=!0;this.events=new q.Evented;this.centerOnSurfaceInstances=a.centerOnSurfaceInstances;
this.renderCoordsHelper=a.renderCoordsHelper;this.state=a.state;this.handles.add(a.surface.on("elevation-change",function(a){return d.tileGeometryChangeHandler(a)}))}c.prototype.destroy=function(){this.handles&&(this.handles.destroy(),this.handles=null)};c.prototype.forceUpdate=function(){this.handles.has("tile-geometry-update")&&this.updateCenterOnGeometryUpdate();this.hasPendingTileGeometryChanges&&(this.events.emit("request-update",m),this.hasPendingTileGeometryChanges=!1)};c.prototype.hasPendingUpdates=
function(){return this.handles.has("tile-geometry-update")};c.prototype.tileGeometryChangeHandler=function(a){var d=this;this.tileGeometryUpdateSpatialReference=a.spatialReference;b.expand(this.tileGeometryUpdateExtent,a.tile.extent);this.handles.has("tile-geometry-update")||this.handles.add(p.schedule(function(){return d.updateCenterOnGeometryUpdate()}),"tile-geometry-update")};c.prototype.updateCenterOnGeometryUpdate=function(){this.handles.remove("tile-geometry-update");this.centerIntersectsExtent(this.tileGeometryUpdateExtent,
this.tileGeometryUpdateSpatialReference)&&(r.DISABLE_POI_UPDATE_ON_SURFACE_GEOMETRY_CHANGES?this.hasPendingTileGeometryChanges=!0:this.events.emit("request-update",m));b.set(this.tileGeometryUpdateExtent,b.NEGATIVE_INFINITY)};c.prototype.furthestCenterOnSurface=function(){for(var a=this.centerOnSurfaceInstances[0],d=1;d<this.centerOnSurfaceInstances.length;d++){var b=this.centerOnSurfaceInstances[d];b.distance>a.distance&&(a=b)}return a};c.prototype.centerIntersectsExtent=function(a,d){var c=this.state.camera.eye,
e=t,h=this.furthestCenterOnSurface();this.renderCoordsHelper.fromRenderCoords(c,f,d);this.renderCoordsHelper.fromRenderCoords(h.renderLocation,g,d);f[0]<g[0]?(e[0]=f[0],e[2]=g[0]):(e[0]=g[0],e[2]=f[0]);f[1]<g[1]?(e[1]=f[1],e[3]=g[1]):(e[1]=g[1],e[3]=f[1]);return b.intersects(e,a)};return c}();k.SurfaceGeometryUpdates=h;var m={},f=l.vec3d.create(),g=l.vec3d.create(),t=b.create(b.NEGATIVE_INFINITY);k.default=h});