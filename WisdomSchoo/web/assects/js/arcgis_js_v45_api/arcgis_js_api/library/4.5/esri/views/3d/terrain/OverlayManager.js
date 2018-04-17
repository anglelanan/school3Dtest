// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper dojo/on ../../../core/Logger ../../../core/Accessor ../../../core/HandleRegistry ../../../core/accessorSupport/decorators ../../../geometry/Point ../lib/glMatrix ../support/mathUtils ../support/earthUtils ../support/projectionUtils ../support/aaBoundingRect ../webgl-engine/Stage ../webgl-engine/lib/Texture ../webgl-engine/lib/Selector ../support/debugFlags ../../../symbols/SimpleMarkerSymbol ../../../Graphic".split(" "),
function(T,U,F,t,G,H,I,J,r,K,u,q,L,v,A,n,w,M,N,O,P){var B=u.vec2d,k=u.vec3d,l=u.vec4d,m={width:0,height:0,pixelRatio:0,views:null},C=[{viewport:l.create(),extent:l.create()}],Q=[C[0],{viewport:l.create(),extent:l.create()}],p=l.create(),D=k.create(),x=[l.create(),l.create()],R=[[-.1,-2,3.9,2],[-.1,-3.9,3.9,.1],[-2,-3.9,2,.1],[-3.9,-3.9,.1,.1],[-3.9,-2,.1,2],[-3.9,-.1,.1,3.9],[-2,-.1,2,3.9],[-.1,-.1,3.9,3.9]],S=H.getLogger("esri.views.3d.OverlayManager"),y,E=function(z){function e(){var a=null!==z&&
z.apply(this,arguments)||this;a._handles=new J;a._overlaySR=null;a._renderSR=null;a._overlaySREqualsRenderSR=!0;a._connectedLayers={};a._scale=0;a._dirty=!1;a._isSpherical=!1;a._latestOriginId=0;a.opacity=0;return a}F(e,z);Object.defineProperty(e.prototype,"hasHighlights",{get:function(){return this._renderer.hasHighlights},enumerable:!0,configurable:!0});e.prototype.initialize=function(){var a=this;this._stage=this.view._stage;this._renderer=this._stage.getTextureGraphicsRenderer();this._renderer.onHasHighlightsChanged=
function(){return a.onHasHighlightsChanged()};this._initialEmptyTexture=new w(new Uint8Array([0,0,0,0]),"overlayEmpty",{width:1,height:1,wrapClamp:!0});this.groundSelector=new M(this.view.viewingMode);this.groundSelector.enableBackfacesTerrain=!0;this.groundSelector.enableInvisibleTerrain=!0;this.groundSelector.enableHUDSelection=!1;this._stage.add(n.ModelContentType.TEXTURE,this._initialEmptyTexture);this._handles.add(this.view.watch(["pointsOfInterest.renderPointOfView","pointsOfInterest.centerOnSurfaceFrequent.location"],
function(){return a.setOverlayDirty()}))};e.prototype.destroy=function(){for(var a in this._connectedLayers)this.unregisterLayerView(this._connectedLayers[a].layerView);this._disposeOverlays();this._stage.remove(n.ModelContentType.TEXTURE,this._initialEmptyTexture.getId());this._handles&&(this._handles.destroy(),this._handles=null)};e.prototype.onHasHighlightsChanged=function(){this.setOverlayDirty();this.notifyChange("hasHighlights")};e.prototype.hasOverlays=function(){return!!this._overlays};e.prototype.setSpatialReference=
function(a,b){(this._overlaySR=a)?(this._renderSR=this.view.renderSpatialReference,this._overlaySREqualsRenderSR=this._overlaySR.equals(this._renderSR),this._longitudeCyclical=(this._isSpherical=b)?a.isWebMercator?new q.Cyclical(-2.0037508342788905E7,2.0037508342788905E7):new q.Cyclical(-180,180):null):(this._disposeOverlays(),this._longitudeCyclical=null)};e.prototype.registerLayerView=function(a){var b=this,d=a.layer.uid;if(this._connectedLayers[d])S.warn("[OverlayManager#registerLayerView]: Layer "+
d+" is already connected");else{var c=G(a,"draped-data-change",function(){return b.setOverlayDirty()});this._connectedLayers[d]={eventHandles:[c],layerView:a};if(a.setDrapingExtent&&this._overlays)for(d=0;d<this._overlays.length;d++)c=this._overlays[d],a.setDrapingExtent(d,c.extent,this._overlaySR,2048,c.renderLocalOrigin);this.setOverlayDirty()}};e.prototype.unregisterLayerView=function(a){for(var b in this._connectedLayers){var d=this._connectedLayers[b];if(d.layerView===a){if(d.eventHandles)for(var c=
0;c<d.eventHandles.length;c++)d.eventHandles[c].remove();delete this._connectedLayers[b];this.setOverlayDirty();a.destroyed||(a._overlayUpdating=!1,a._evaluateUpdatingState())}}};e.prototype.setOverlayDirty=function(){this._dirty||(this._setOverlayUpdating(!0),this._dirty=!0)};e.prototype._setOverlayUpdating=function(a){for(var b in this._connectedLayers){var d=this._connectedLayers[b].layerView;if(!a||!d.suspended&&d.hasDraped)d._overlayUpdating=a,d._evaluateUpdatingState()}if(b=this.view._graphicsView)b._overlayUpdating=
a,b._evaluateUpdatingState()};e.prototype.updateOverlay=function(){if(this._overlaySR){var a=this._computeOverlayExtents();if(a){this._overlays||this._initOverlays();for(var b=0;b<this._overlays.length;b++){var d=this._overlays[b],c;a:{c=a[b];for(var f=d.extent,e=E.EXTENTS_DIFFER_THRESHOLD*Math.max(c[2]-c[0],c[3]-c[1],f[2]-f[0],f[3]-f[1]),g=0;4>g;g++)if(Math.abs(f[g]-c[g])>e){c=!0;break a}c=!1}if(c){l.set(a[b],d.extent);d.renderLocalOrigin={id:"OV_"+this._latestOriginId++,vec3:A.center(d.extent,k.create())};
for(var h in this._connectedLayers)c=this._connectedLayers[h].layerView,c.setDrapingExtent&&c.setDrapingExtent(b,a[b],this._overlaySR,2048,d.renderLocalOrigin)}}this._setOverlayUpdating(!1);this._drawOverlays();this.terrainSurface._updateTileOverlayParams();this._dirty=!1}}};e.prototype.overlaysNeedUpdate=function(){return this._dirty&&!!this._overlaySR};e.prototype.updateOpacity=function(a){var b=1;if(this._overlays){var d=this._scale;a=this.view.renderCoordsHelper.getAltitude(a);3.5*a<d&&(b=Math.sqrt(q.clamp((a-
d/10)/(d/3.5-d/10),0,1)))}return b};e.prototype.setOverlayParamsOfTile=function(a,b,d){a=a.extent;var c=-1;this._rectInsideRect(a,this._overlays[0].extent)?c=0:this._rectanglesOverlap(a,this._overlays[1].extent)&&(c=1);if(0<=c){var f=this._overlays[c].extent;b.overlayTexScale[0]=(a[2]-a[0])/(f[2]-f[0]);b.overlayTexScale[1]=(a[3]-a[1])/(f[3]-f[1]);var e=a[0];if(this._longitudeCyclical){var e=this._longitudeCyclical.minimalMonotonic(f[0],e),g=this._longitudeCyclical.minimalMonotonic(f[0],a[2]);e>g&&
(e=g-(a[2]-a[0]))}B.set2((e-f[0])/(f[2]-f[0]),(a[1]-f[1])/(f[3]-f[1]),b.overlayTexOffset);b.overlayTexId=this._overlays[c].valid?this._overlays[c].texture.getId():this._initialEmptyTexture.getId();b.highlightOverlayTexId=this._overlays[c].highlightValid?this._overlays[c].highlightTexture.getId():this._initialEmptyTexture.getId();b.overlayOpacity=void 0!==d?d:1}else b.overlayTexId=null,b.highlightOverlayTexId=null};e.prototype.overlayPixelSizeInMapUnits=function(a){var b;this._overlays&&(this._overlays[0]&&
this._pointIsInExtent(a,this._overlays[0].extent)?b=this._overlays[0].extent:this._overlays[1]&&(b=this._overlays[1].extent));return b?(b[2]-b[0])/2048:0};e.prototype._createEmptyOverlay=function(){var a=new w(null,"overlay",{wrapClamp:!0,mipmap:!0});this._stage.add(n.ModelContentType.TEXTURE,a);var b=new w(null,"highlightOverlay",{wrapClamp:!0,mipmap:!0});this._stage.add(n.ModelContentType.TEXTURE,b);return{extent:l.create(),texture:a,valid:!1,highlightTexture:b,highlightValid:!1,renderLocalOrigin:{id:"O",
vec3:[0,0,0]}}};e.prototype._initOverlays=function(){this._overlays=[this._createEmptyOverlay(),this._createEmptyOverlay()]};e.prototype._disposeOverlays=function(){if(this._overlays){var a=this._stage;this._overlays.forEach(function(b){a.remove(n.ModelContentType.TEXTURE,b.texture.getId());a.remove(n.ModelContentType.TEXTURE,b.highlightTexture.getId())});this._overlays=null}};e.prototype._intersectGroundFromView=function(a,b,d,c){var f=k.createFrom(b*this.view.width,d*this.view.height,1);k.unproject(f,
a.viewMatrix,a.projectionMatrix,a.fullViewport,f);b=k.createFrom(b*this.view.width,d*this.view.height,0);k.unproject(b,a.viewMatrix,a.projectionMatrix,a.fullViewport,b);this.groundSelector.init([],b,f,null,a,null,!1);this.view.basemapTerrain.intersect(this.groundSelector,b,f);return this.groundSelector.minResult.getIntersectionPoint(c)};e.prototype._findHorizonBasedPointOfInterest=function(a,b,d){var c=.5;if("global"===this.view.viewingMode){c=k.create(a.eye);k.normalize(c);k.negate(c);b=k.length(b);
b=Math.asin(b/k.length(a.eye));var f=Math.acos(k.dot(a.viewForward,c)),c=q.clamp((b-(f-.5*a.fovY))/a.fovY,0,1);b=q.clamp((-b-(f-.5*a.fovY))/a.fovY,0,1);c=1===c&&0===b?.5:b+.55*(c-b)}else c=u.mat4d.multiplyVec4(a.projectionMatrix,l.createFrom(0,Math.tan(.5*Math.PI-Math.acos(-a.viewForward[2])),1,0))[1],c=q.clamp(.5+.5*c,0,1),c=1===c||0===c?.5:0<a.eye[2]?.55*c:1-.55*(1-c);return this._intersectGroundFromView(a,.5,c,d)?!0:!1};e.prototype._computeOverlayExtents=function(){var a=this.view.navigation.currentCamera,
b=this.terrainSurface.extent,d=k.create(),c=this.view.pointsOfInterest.centerOnSurfaceFrequent.renderLocation;this._findHorizonBasedPointOfInterest(a,this.view.pointsOfInterest.centerOnSurfaceFrequent.renderLocation,d)||k.set(c,d);this._scale=this.view.renderCoordsHelper.getAltitude(a.eye);var f=k.dist(a.eye,d),c=this.view.renderCoordsHelper.viewAngle(c,a.eye),c=Math.PI/2-Math.abs(c-Math.PI/2);if(N.OVERLAY_SHOW_CENTER){var e=new O({color:[255,0,0],outline:{color:[255,255,255],width:2}}),g=new K;v.vectorToPoint(d,
this._renderSR,g,this._overlaySR);e=new P({geometry:g,symbol:e});void 0!==y&&this.view.graphics.remove(y);this.view.graphics.add(e);y=e}this._overlaySREqualsRenderSR||v.vectorToVector(d,this._renderSR,d,this._overlaySR);var f=1024*a.perPixelRatio*f*2,h=!1,e=Infinity;this._isSpherical&&(this._overlaySR.isWebMercator?(f/=Math.cos(v.webMercator.y2lat(d[1])),e=this.terrainSurface.extent[3],e*=.999):(h=!0,f/=L.metersPerDegree,e=90),f>=e&&(f=e,d[1]=0,this._overlaySR.isWebMercator&&(d[0]=0)));g=1;h&&(g=
1/Math.max(.2,Math.cos(Math.abs(q.deg2rad(d[1])))),180<f*g&&(g=180/f));var m=f*g,n=x[0];n[0]=d[0]-m;n[1]=d[1]-f;n[2]=d[0]+m;n[3]=d[1]+f;this._isSpherical&&this._shiftExtentToFitBounds(n,Infinity,e);h=x[1];l.set(n,h);6*m>b[2]-b[0]?l.set(b,h):c<=.25*Math.PI?(h[0]-=m,h[1]-=f,h[2]+=m,h[3]+=f):(v.vectorToVector(a.eye,this._renderSR,D,this._overlaySR),B.subtract(d,D,p),a=-Math.atan2(p[1],p[0])+.125*Math.PI,0>a&&(a+=2*Math.PI),l.scale(R[Math.floor(a/(.25*Math.PI))],2*f,p),p[0]*=g,p[2]*=g,l.add(h,p,h));this._isSpherical&&
(h[0]=this._longitudeCyclical.clamp(h[0]),h[2]=this._longitudeCyclical.clamp(h[2]),h[1]=Math.max(h[1],-e),h[3]=Math.min(h[3],e));this.opacity=1;return x};e.prototype._drawOverlays=function(){for(var a=this._overlays[0].extent[2]-this._overlays[0].extent[0],b=this._renderer,d=0;d<this._overlays.length;d++){var c=this._overlays[d].extent,e=this._longitudeCyclical?c[2]>this._longitudeCyclical.max:!1,k=this._longitudeCyclical?c[0]<this._longitudeCyclical.min:!1;if(e||k){m.views=Q;var k=void 0,k=e?this._longitudeCyclical.max-
c[0]:this._longitudeCyclical.min-c[0],k=Math.round(k/(c[2]-c[0])*2048),g=m.views[0];l.set4(0,0,k,2048,g.viewport);l.set4(c[0],c[1],this._longitudeCyclical.max,c[3],g.extent);e||(g.extent[0]+=this._longitudeCyclical.range);g=m.views[1];l.set4(k,0,2048-k,2048,g.viewport);l.set4(this._longitudeCyclical.min,c[1],c[2],c[3],g.extent);e&&(g.extent[2]-=this._longitudeCyclical.range)}else m.views=C,l.set(c,m.views[0].extent),l.set4(0,0,2048,2048,m.views[0].viewport);m.width=2048;m.height=2048;m.pixelRatio=
a/(c[2]-c[0]);this._overlays[d].valid=b.draw(this._overlays[d].texture,m);this._overlays[d].highlightValid=b.drawHighlights(this._overlays[d].highlightTexture,m)}};e.prototype._rectanglesOverlap=function(a,b){return this._longitudeCyclical?(this._longitudeCyclical.contains(b[0],b[2],a[0])||this._longitudeCyclical.contains(b[0],b[2],a[2])||this._longitudeCyclical.contains(a[0],a[2],b[0]))&&!(a[1]>b[3]||a[3]<b[1]):!(a[0]>b[2]||a[2]<b[0]||a[1]>b[3]||a[3]<b[1])};e.prototype._rectInsideRect=function(a,
b){return this._longitudeCyclical?this._longitudeCyclical.contains(b[0],b[2],a[0])&&this._longitudeCyclical.contains(b[0],b[2],a[2])&&a[1]>b[1]&&a[3]<b[3]:a[0]>b[0]&&a[2]<b[2]&&a[1]>b[1]&&a[3]<b[3]};e.prototype._pointIsInExtent=function(a,b){if(this._longitudeCyclical)return this._longitudeCyclical.contains(b[0],b[2],a.x)&&a.y>=b[1]&&a.y<=b[3];var d=a.x;a=a.y;return d>b[0]&&d<b[2]&&a>b[1]&&a<b[3]};e.prototype._shiftExtentToFitBounds=function(a,b,d){var c=0,e=0;a[0]<-b?c=a[0]+b:a[2]>b&&(c=b-a[2]);
a[1]<-d?e=a[1]+d:a[3]>d&&(e=d-a[3]);A.offset(a,c,e)};e.EXTENTS_DIFFER_THRESHOLD=1E-5;t([r.property()],e.prototype,"view",void 0);t([r.property()],e.prototype,"terrainSurface",void 0);t([r.property({type:Boolean})],e.prototype,"hasHighlights",null);return e=t([r.subclass("esri.views.3d.terrain.OverlayManager")],e)}(r.declared(I));return E});