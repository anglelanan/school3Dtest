// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/declareExtendsHelper ../../../../../core/tsSupport/decorateHelper ../../../../../core/HandleRegistry ../../../../../core/StackedObjectPool ../../../../overlay/TextOverlayItem ../../../../overlay/LineOverlayItem ../../../lib/glMatrix ../../../webgl-engine/lib/Layer ../../../webgl-engine/lib/Object3D ../../../webgl-engine/lib/Geometry ../../../webgl-engine/lib/GeometryData ../../../webgl-engine/lib/GeometryUtil ../../../webgl-engine/lib/Selector ../../../webgl-engine/materials/Material ../../../webgl-engine/materials/ColorMaterial ../../../webgl-engine/materials/RibbonLineMaterial ../../../webgl-engine/materials/MeasurementArrowMaterial ../../../webgl-engine/parts/Model ../support/viewUtils ../support/PathSegmentInterpolator ./LaserLineRenderer ../../../support/mathUtils".split(" "),
function(u,U,V,W,I,J,K,L,B,M,q,z,N,C,O,F,P,D,Q,h,r,G,R,x){var v=B.vec2d,k=B.vec3d,t=B.mat4d,g=new J(function(){return k.create()});u=[1,.5,0,.75];var S={laserLineGlowColor:[1,.5,0],laserLineGlowWidth:8,laserLineInnerColor:[1,1,1],laserLineInnerWidth:.75,laserLineGlobalAlpha:.75,laserLineEnabled:!0,handleColor:[1,.5,0],handleRadius:10,triangleColor:u,triangleLineWidth:3,triangleCornerSize:32,triangleSubdivisions:128,arrowWidth:16,arrowOutlineColor:[1,.5,0,1],arrowOutlineWidth:.2,arrowStripeEvenColor:[1,
1,1,1],arrowStripeOddColor:[1,.5,0,1],arrowStripeLength:16,arrowSubdivisions:128,geodesicProjectionLineWidth:2,geodesicProjectionLineColor:u,guideLineWidth:2,guideLineColor:u,guideStippleLengthPixels:6,labelDistance:25},p;(function(b){b[b.Small=12]="Small";b[b.Large=16]="Large"})(p||(p={}));var E=function(){function b(){this.text=new K({visible:!1});this.callout=new L({visible:!1,width:2});this._visible=!1}Object.defineProperty(b.prototype,"visible",{get:function(){return this._visible},set:function(a){this._visible=
a;this.text.visible=a;this.callout.visible=a},enumerable:!0,configurable:!0});b.prototype.addToView=function(a){a.overlay.items.addMany([this.text,this.callout])};b.prototype.removeFromView=function(a){a.overlay.items.removeMany([this.text,this.callout])};b.prototype.update=function(a,c,f,b,e){void 0===e&&(e=p.Small);var l=c[0]-a[0],d=c[1]-a[1],l=Math.abs(l)>Math.abs(d)?0<l?"left":"right":0<d?"top":"bottom";this.text.position=[c[0],c[1]];this.text.text=f;this.text.fontSize=e;this.text.anchor=l;this.callout.startPosition=
[a[0],a[1]];this.callout.endPosition=[c[0],c[1]];this.visible=b};return b}(),A=function(){function b(){this.origin=k.create();this.start=k.create();this.end=k.create()}b.prototype.update=function(a,c,f){k.set(a,this.start);k.set(c,this.end);f?k.set(f,this.origin):r.midpoint([a,c],this.origin)};return b}();u=function(){function b(a,c,f){void 0===f&&(f={});this._visible=!1;this._laserLineRenderer=null;this._handleGeometry=new z(C.createSphereGeometry(1,32,32),"handle");this._listenerHandles=null;this._cursorPosition=
k.create();this._startPosition=k.create();this._endPosition=k.create();this._centerPosition=k.create();this._cornerPosition=k.create();this._arrowLabelSegment=new A;this._horizontalLabelSegment=new A;this._verticalLabelSegment=new A;this._geodesicProjectionLabelSegment=new A;this._origin=k.create();this._originTransform=t.create();this._tempMat4=t.create();this._model=a;this._sceneView=c;this._params=r.copyParameter(S,f);this._layer=new M("point-to-point-measurement",{},"point-to-point-measurement");
this._createMaterials();this._createObjects();this._createLabels();this._selector=new O(this._sceneView.viewingMode)}b.prototype.destroy=function(){this.hide()};Object.defineProperty(b.prototype,"cameraAboveGround",{get:function(){return this._sceneView.state.camera.aboveGround},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"visible",{get:function(){return this._visible},set:function(a){a?this.show():this.hide()},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,
"testData",{get:function(){return{labels:{direct:this._directDistanceLabel,horizontal:this._horizontalDistanceLabel,vertical:this._verticalDistanceLabel},laserLineRenderer:this._laserLineRenderer}},enumerable:!0,configurable:!0});b.prototype.show=function(){if(!this._visible){this._visible=!0;var a=this._sceneView._stage;this._laserLineRenderer=new R(this._sceneView.renderCoordsHelper,{glowColor:this._params.laserLineGlowColor,glowWidth:this._params.laserLineGlowWidth,innerColor:this._params.laserLineInnerColor,
innerWidth:this._params.laserLineInnerWidth,globalAlpha:this._params.laserLineGlobalAlpha});a.addExternalRenderer(this._laserLineRenderer.renderSlots,this._laserLineRenderer);this._addToStage(a);this._directDistanceLabel.addToView(this._sceneView);this._horizontalDistanceLabel.addToView(this._sceneView);this._verticalDistanceLabel.addToView(this._sceneView);this._initializeListeners();this._updateCursorPosition();this._updateStartPosition();this._updateEndPosition();this._updateMouseCursor();this._updateView()}};
b.prototype.hide=function(){if(this._visible){this._visible=!1;var a=this._sceneView._stage;a.removeExternalRenderer(this._laserLineRenderer);this._laserLineRenderer=null;this._removeFromStage(a);this._directDistanceLabel.removeFromView(this._sceneView);this._horizontalDistanceLabel.removeFromView(this._sceneView);this._verticalDistanceLabel.removeFromView(this._sceneView);this._destroyListeners();this._sceneView.cursor=null}};b.prototype.pick=function(a){this._selector.enableTerrain=!a.pickHandles;
this._selector.enableHUDSelection=!a.pickHandles;var c=[];if(a.pickHandles)c.push(this._layer.id);else for(var f=this._sceneView._stage.getViewContent(),d=this._sceneView._stage.getAll(h.ContentType.LAYER),e=0;e<f.length;e++){var l=d[f[e]];l&&l!==this._layer&&"VISIBLE"===l.getState()&&c.push(l.id)}f=this._sceneView.spatialReference;a=this._sceneView._stage.pick([a.screenPoint.x,this._sceneView.height-a.screenPoint.y],c,!0,this._selector).getMinResult();c=k.create();if(!a.getIntersectionPoint(c))return new b.PickResult;
f=this._sceneView.renderCoordsHelper.fromRenderCoords(c,f);d=null;a.target===this._startHandleObject?d="start":a.target===this._endHandleObject&&(d="end");return new b.PickResult("terrain"===a.intersector?"surface":"feature",c,f,d)};b.prototype.getElevation=function(a){return this._sceneView.basemapTerrain.ready?this._sceneView.basemapTerrain.getElevation(a)||0:0};b.prototype.overlappingHandles=function(a,c){return r.pointToPointScreenDistance(a,c,this._sceneView)<=this._params.handleRadius};b.prototype._createMaterials=
function(){this._handleMaterial=new F({diffuse:this._params.handleColor,castShadows:!1},"handle");this._handleMaterial.setRenderOccluded(!0);this._handleMaterialHidden=new F({opacity:0,transparent:!0,castShadows:!1},"handle-hidden");this._triangleLineMaterial=new D({width:this._params.triangleLineWidth,color:this._params.triangleColor,polygonOffset:!0},"triangle-line");this._triangleLineMaterial.setRenderOccluded(!0);this._triangleCornerMaterial=new P({color:this._params.triangleColor,transparent:!0,
polygonOffset:!0},"triangle-corner");this._triangleCornerMaterial.setRenderOccluded(!0);this._arrowMaterial=new Q({outlineColor:this._params.arrowOutlineColor,stripeEvenColor:this._params.arrowStripeEvenColor,stripeOddColor:this._params.arrowStripeOddColor,polygonOffset:!0},"arrow");this._arrowMaterial.setRenderOccluded(!0);this._geodesicProjectionLineMaterial=new D({width:this._params.geodesicProjectionLineWidth,color:this._params.geodesicProjectionLineColor,polygonOffset:!0},"geodesic-line");this._geodesicProjectionLineMaterial.setRenderOccluded(!0);
this._geodesicGuideLineMaterial=new D({width:this._params.guideLineWidth,color:this._params.geodesicProjectionLineColor,polygonOffset:!0,stippleLength:0},"geodesic-guide");this._geodesicGuideLineMaterial.setRenderOccluded(!0)};b.prototype._createObjects=function(){this._startHandleObject=new q;this._startHandleObject.addGeometry(this._handleGeometry,[this._handleMaterial],t.identity());this._layer.addObject(this._startHandleObject);this._endHandleObject=new q;this._endHandleObject.addGeometry(this._handleGeometry,
[this._handleMaterial],t.identity());this._layer.addObject(this._endHandleObject);this._triangleLineObject=new q;this._layer.addObject(this._triangleLineObject);this._triangleCornerObject=new q;this._layer.addObject(this._triangleCornerObject);this._arrowObject=new q;this._layer.addObject(this._arrowObject);this._geodesicProjectionLineObject=new q;this._layer.addObject(this._geodesicProjectionLineObject);this._geodesicProjectionStartGuideObject=new q;this._layer.addObject(this._geodesicProjectionStartGuideObject);
this._geodesicProjectionEndGuideObject=new q;this._layer.addObject(this._geodesicProjectionEndGuideObject)};b.prototype._createLabels=function(){this._directDistanceLabel=new E;this._horizontalDistanceLabel=new E;this._verticalDistanceLabel=new E};b.prototype._addToStage=function(a){a.add(h.ContentType.LAYER,this._layer);a.add(h.ContentType.MATERIAL,this._handleMaterial);a.add(h.ContentType.MATERIAL,this._handleMaterialHidden);a.add(h.ContentType.MATERIAL,this._triangleLineMaterial);a.add(h.ContentType.MATERIAL,
this._triangleCornerMaterial);a.add(h.ContentType.MATERIAL,this._arrowMaterial);a.add(h.ContentType.MATERIAL,this._geodesicProjectionLineMaterial);a.add(h.ContentType.MATERIAL,this._geodesicGuideLineMaterial);a.add(h.ContentType.OBJECT,this._startHandleObject);a.add(h.ContentType.OBJECT,this._endHandleObject);a.add(h.ContentType.OBJECT,this._triangleLineObject);a.add(h.ContentType.OBJECT,this._triangleCornerObject);a.add(h.ContentType.OBJECT,this._arrowObject);a.add(h.ContentType.OBJECT,this._geodesicProjectionLineObject);
a.add(h.ContentType.OBJECT,this._geodesicProjectionStartGuideObject);a.add(h.ContentType.OBJECT,this._geodesicProjectionEndGuideObject);a.addToViewContent([this._layer.id])};b.prototype._removeFromStage=function(a){a.removeFromViewContent([this._layer.id]);a.remove(h.ContentType.LAYER,this._layer.id);a.remove(h.ContentType.MATERIAL,this._handleMaterial.getId());a.remove(h.ContentType.MATERIAL,this._handleMaterialHidden.getId());a.remove(h.ContentType.MATERIAL,this._triangleLineMaterial.getId());a.remove(h.ContentType.MATERIAL,
this._triangleCornerMaterial.getId());a.remove(h.ContentType.MATERIAL,this._arrowMaterial.getId());a.remove(h.ContentType.MATERIAL,this._geodesicProjectionLineMaterial.getId());a.remove(h.ContentType.MATERIAL,this._geodesicGuideLineMaterial.getId());a.remove(h.ContentType.OBJECT,this._startHandleObject.id);a.remove(h.ContentType.OBJECT,this._endHandleObject.id);a.remove(h.ContentType.OBJECT,this._triangleLineObject.id);a.remove(h.ContentType.OBJECT,this._triangleCornerObject.id);a.remove(h.ContentType.OBJECT,
this._arrowObject.id);a.remove(h.ContentType.OBJECT,this._geodesicProjectionLineObject.id);a.remove(h.ContentType.OBJECT,this._geodesicProjectionStartGuideObject.id);a.remove(h.ContentType.OBJECT,this._geodesicProjectionEndGuideObject.id)};b.prototype._mirrorLabelPosition=function(a){switch(a){case "top":return"bottom";case "right":return"left";case "bottom":return"top";case "left":return"right"}};b.prototype._getLabelPositions=function(a,c,f,b,e){var l=this._model.triangleView.collapsed;g.push();
var d=g.allocate(),k=g.allocate();e.projectPoint(f,d);e.projectPoint(c,k);d={direct:l?"top":"bottom",horizontal:"top",vertical:d[0]<k[0]?"left":"right"};l||(k=g.allocate(),l=g.allocate(),r.screenSpaceTangent(a,f,k,e),r.screenSpaceTangent(a,c,l,e),v.dot(k,l)>=H?d.direct=x.sign(k[1])===x.sign(l[1])?this._mirrorLabelPosition(d.vertical):d.vertical:(a=g.allocate(),r.screenSpaceTangent(f,c,a,e),v.dot(a,l)>=H&&(d.direct=x.sign(a[0])===x.sign(l[0])?this._mirrorLabelPosition(d.horizontal):d.horizontal)));
"below-the-surface"===b&&(c=function(a){return"top"===a?"bottom":"top"},d.direct=c(d.direct),d.horizontal=c(d.horizontal),d.vertical=c(d.vertical));g.pop();return d};b.prototype._updateView=function(){if(this._sceneView.ready){var a=this._sceneView._stage.getCamera(),c=this._sceneView.renderCoordsHelper;this._updateHandleObject(this._startHandleObject,this._startPosition,null!==this._model.startPoint,0===this._model.draggedHandles.length&&"start"===this._model.hoveredHandle,this._model.draggedHandles.includes("start"),
a);this._updateHandleObject(this._endHandleObject,this._endPosition,null!==this._model.endPoint,0===this._model.draggedHandles.length&&"end"===this._model.hoveredHandle,this._model.draggedHandles.includes("end")||"drawing"===this._model.state,a);var f=this._model.triangleView;if(f.visible){var d="camera-dependent"===this._model.measurementSurfaceLocation?this._sceneView.state.camera.aboveGround?"above-the-surface":"below-the-surface":this._model.measurementSurfaceLocation,e=this._startPosition,b=
this._endPosition,g="above-the-surface"===d?1:-1,h=g*(c.getAltitude(b)-c.getAltitude(e));0>h&&(b=[b,e],e=b[0],b=b[1]);var n=this._cornerPosition;c.worldUpAtPosition(e,n);k.scale(n,g*Math.abs(h));k.add(n,e);c=this._centerPosition;r.midpoint([e,b,n],c);k.set(c,this._origin);t.identity(this._originTransform);t.translate(this._originTransform,this._origin);f.collapsed?(this._triangleLineObject.removeAllGeometries(),this._triangleCornerObject.removeAllGeometries()):this._updateTriangleObjects(this._triangleLineObject,
this._triangleCornerObject,e,b,n,this._origin,this._originTransform,a,f.mode,this._horizontalLabelSegment,this._verticalLabelSegment);this._updateArrowObject(this._arrowObject,this._startPosition,this._endPosition,this._origin,this._originTransform,f.stripeLength,a,f.mode,this._arrowLabelSegment);c=this._requiresGeodesicGuides(this._startPosition,this._endPosition,a,f.mode);this._updateGeodesicProjectionLineObject(this._geodesicProjectionLineObject,this._startPosition,this._endPosition,this._origin,
this._originTransform,c,this._geodesicProjectionLabelSegment);this._updateGeodesicProjectionGuideObjects(a,c);g=this._params.labelDistance;d=this._getLabelPositions(e,b,n,d,a);this._updateAuxiliaryMeasureLabels(f,a,d);"geodesic"!==f.mode?this._updateLabel(this._directDistanceLabel,this._arrowLabelSegment,g,d.direct,f.directLabel,f.visible,p.Large,a):(this._updateLabel(this._horizontalDistanceLabel,c?this._geodesicProjectionLabelSegment:this._arrowLabelSegment,g,d.horizontal,f.horizontalLabel,f.visible,
p.Large,a),this._directDistanceLabel.visible=!1)}else this._triangleLineObject.removeAllGeometries(),this._triangleCornerObject.removeAllGeometries(),this._arrowObject.removeAllGeometries(),this._geodesicProjectionLineObject.removeAllGeometries(),this._geodesicProjectionStartGuideObject.removeAllGeometries(),this._geodesicProjectionEndGuideObject.removeAllGeometries(),this._directDistanceLabel.visible=!1,this._horizontalDistanceLabel.visible=!1,this._verticalDistanceLabel.visible=!1}};b.prototype._updateAuxiliaryMeasureLabels=
function(a,c,f){if(a.collapsed)this._horizontalDistanceLabel.visible=!1,this._verticalDistanceLabel.visible=!1;else{var d=this._params.labelDistance;this._updateLabel(this._horizontalDistanceLabel,this._horizontalLabelSegment,d,f.horizontal,a.horizontalLabel,!0,p.Small,c);this._updateLabel(this._verticalDistanceLabel,this._verticalLabelSegment,d,f.vertical,a.verticalLabel,!0,p.Small,c)}};b.prototype._updateHandleObject=function(a,c,f,d,b,g){a.removeAllGeometries();f&&(r.scaleTranslateMatrix(this._params.handleRadius*
g.computePixelSizeAt(c),c,this._tempMat4),a.addGeometry(this._handleGeometry,[d&&!b?this._handleMaterial:this._handleMaterialHidden],this._tempMat4))};b.prototype._updateTriangleObjects=function(a,c,f,b,e,l,h,m,n,w,r){g.push();n=[k.subtract(f,l,g.allocate()),k.subtract(e,l,g.allocate()),k.subtract(b,l,g.allocate())];w.update(e,b);r.update(f,e);w=new z(C.createPolylineGeometry(n),"triangle-line");a.removeAllGeometries();a.addGeometry(w,[this._triangleLineMaterial],h);a=g.allocate();w=g.allocate();
k.subtract(e,f,a);k.normalize(a,a);k.subtract(b,e,w);k.normalize(w,w);f=.33*Math.min(k.dist(e,f),k.dist(e,b));m=this._params.triangleCornerSize*m.computePixelSizeAt(e);e=new z(this._quadGeometryData(e,a,w,Math.min(f,m),l),"triangle-corner");c.removeAllGeometries();c.addGeometry(e,[this._triangleCornerMaterial],h);g.pop()};b.prototype._updateArrowObject=function(a,c,f,b,e,g,k,h,n){this._createInterpolatedLineGeometry(a,this._arrowMaterial,"arrow",c,f,b,e,h,this._arrowLabelSegment);a=k.computePixelSizeAt(n.origin);
this._arrowMaterial.setParameterValues({width:this._params.arrowWidth*a,stripeLength:g})};b.prototype._getSegmentInterpolator=function(a,c){var b=this._sceneView.spatialReference,d=this._sceneView.renderCoordsHelper.spatialReference;return b.isWebMercator||b.isWGS84?new G.Spherical(a,c,d,d):new G.Linear(a,c)};b.prototype._updateGeodesicProjectionLineObject=function(a,c,b,d,e,l,h){l?(g.push(),l=this._sceneView.renderCoordsHelper,c=k.set(c,g.allocate()),b=k.set(b,g.allocate()),l.setAltitude(0,c),l.setAltitude(0,
b),this._createInterpolatedLineGeometry(a,this._geodesicProjectionLineMaterial,"geodesicProjectionLine",c,b,d,e,"geodesic",h),g.pop()):a.removeAllGeometries()};b.prototype._requiresGeodesicGuides=function(a,c,b,d){return"geodesic"===d&&this._model.geodesicDistanceExceeded?this._requiresGeodesicGuideAt(a,b)||this._requiresGeodesicGuideAt(c,b):!1};b.prototype._requiresGeodesicGuideAt=function(a,c){var b=this._sceneView.renderCoordsHelper;c=c.computePixelSizeAt(a);return 10<=b.getAltitude(a)/c};b.prototype._updateGeodesicProjectionGuideObjects=
function(a,c){if(c){g.push();c=this._sceneView.renderCoordsHelper;var b=k.set(this._startPosition,g.allocate()),d=k.set(this._endPosition,g.allocate());c.setAltitude(0,b);c.setAltitude(0,d);this._createInterpolatedLineGeometry(this._geodesicProjectionStartGuideObject,this._geodesicGuideLineMaterial,"geodesicGuideLine",b,this._startPosition,this._origin,this._originTransform,"euclidean");this._createInterpolatedLineGeometry(this._geodesicProjectionEndGuideObject,this._geodesicGuideLineMaterial,"geodesicGuideLine",
d,this._endPosition,this._origin,this._originTransform,"euclidean");a=Math.min(a.computePixelSizeAt(this._startPosition),a.computePixelSizeAt(b),a.computePixelSizeAt(this._endPosition),a.computePixelSizeAt(d));this._geodesicGuideLineMaterial.setParameterValues({stippleLength:this._params.guideStippleLengthPixels*a});g.pop()}else this._geodesicProjectionStartGuideObject.removeAllGeometries(),this._geodesicProjectionEndGuideObject.removeAllGeometries()};b.prototype._createInterpolatedLineGeometry=function(a,
c,b,d,e,h,T,m,n){g.push();var f=this._sceneView.renderCoordsHelper,l=[],u=[],q=function(a,b){var c=g.allocate();k.subtract(a,h,c);l.push(c);u.push(b)};if("euclidean"===m){var p=g.allocate();r.midpoint([d,e],p);m=g.allocate();f.worldUpAtPosition(p,m);q(d,m);q(e,m);n&&n.update(d,e)}else{d=this._getSegmentInterpolator(d,e);e=this._params.arrowSubdivisions+1&-2;for(var v=p=null,t=0;t<e;++t){var x=t/(e-1),y=g.allocate();m=g.allocate();d.eval(x,y);f.worldUpAtPosition(y,m);t===e/2-1?p=y:t===e/2&&(v=y);q(y,
m)}n&&n.update(p,v)}b=new z(C.createPolylineGeometry(l,u),b);a.removeAllGeometries();a.addGeometry(b,[c],T);g.pop()};b.prototype._quadGeometryData=function(a,c,b,d,e){g.push();var f=g.allocate(),h=[],m=g.allocate();k.scale(b,d,m);b=g.allocate();k.scale(c,-d,b);for(c=0;4>c;++c)k.set(a,f),k.subtract(f,e),c&1&&k.add(f,m),c&2&&k.add(f,b),h.push(f[0],f[1],f[2]);a=new N({position:{size:3,data:h}},{position:new Uint32Array([0,1,2,1,2,3])});g.pop();return a};b.prototype._updateLabel=function(a,b,f,d,e,h,
k,m){g.push();var c=g.allocate(),l=g.allocate();b=this._computeLabelPosition(b.origin,b.start,b.end,f,d,c,l,m);a.update(c,l,e,b&&h,k);g.pop()};b.prototype._computeLabelPosition=function(a,b,f,d,e,h,k,m){g.push();var c=g.allocate();r.screenSpaceTangent(b,f,c,m);b=g.allocate();v.set2(-c[1],c[0],b);c=!1;switch(e){case "top":c=0>b[1];break;case "bottom":c=0<b[1];break;case "left":c=0<b[0];break;case "right":c=0>b[0]}c&&v.negate(b);e=g.allocate();c=g.allocate();m.projectPoint(a,e);if(0>e[2]||1<e[2])return g.pop(),
!1;v.scale(b,d,c);v.add(c,e,c);h[0]=e[0];h[1]=this._sceneView.height-e[1];k[0]=c[0];k[1]=this._sceneView.height-c[1];g.pop();return!0};b.prototype._updateMouseCursor=function(){if("drawing"===this._model.state||"initial"===this._model.state)this._sceneView.cursor="crosshair";else if("editing"===this._model.state||"measured"===this._model.state)this._sceneView.cursor=null!==this._model.hoveredHandle?"pointer":"crosshair"};b.prototype._updateCursorPosition=function(){this._model.cursorPoint&&this._sceneView.renderCoordsHelper.toRenderCoords(this._model.cursorPoint,
this._cursorPosition);this._updateLaserLine()};b.prototype._updateStartPosition=function(){this._model.startPoint&&this._sceneView.renderCoordsHelper.toRenderCoords(this._model.startPoint,this._startPosition);this._updateLaserLine()};b.prototype._updateEndPosition=function(){this._model.endPoint&&this._sceneView.renderCoordsHelper.toRenderCoords(this._model.endPoint,this._endPosition);this._updateLaserLine()};b.prototype._getFocusPosition=function(){if(this._model.triangleView.collapsed&&this._model.triangleView.visible&&
this._model.horizontalDistance.value>this._model.verticalDistance.value&&(1===this._model.draggedHandles.length||"drawing"===this._model.state)){var a=this._model.draggedHandles.getItemAt(0);return"drawing"===this._model.state||"end"===a?this._startPosition:this._endPosition}return this._cursorPosition};b.prototype._updateLaserLine=function(){var a="measured"===this._model.state,b=this._params.laserLineEnabled;this._laserLineRenderer.focusActive=b&&!!this._model.cursorPoint&&!a;this._laserLineRenderer.focusPosition=
this._getFocusPosition();this._laserLineRenderer.segmentActive=b&&this._model.triangleView.visible&&!this._model.triangleView.collapsed&&!a;this._laserLineRenderer.segmentStartPosition=this._startPosition;this._laserLineRenderer.segmentEndPosition=this._endPosition};b.prototype._initializeListeners=function(){var a=this;this._listenerHandles=new I;this._listenerHandles.add(this._model.watch("state",function(){a._updateMouseCursor()}));this._listenerHandles.add(this._model.watch("hoveredHandle",function(){a._updateMouseCursor();
a._updateView()}));this._listenerHandles.add(this._model.watch("cursorPoint",function(){a._updateCursorPosition()}));this._listenerHandles.add(this._model.watch("startPoint",function(){a._updateStartPosition();a._updateView()}));this._listenerHandles.add(this._model.watch("endPoint",function(){a._updateEndPosition();a._updateView()}));this._listenerHandles.add(this._model.watch("unit",function(){a._updateView()}));this._listenerHandles.add(this._sceneView.state.watch("camera",function(){a._updateView()}))};
b.prototype._destroyListeners=function(){this._listenerHandles.destroy();this._listenerHandles=null};return b}();(function(b){var a=function(){return function(){}}();b.PickRequest=a;a=function(){return function(a,b,d,e){void 0===a&&(a=null);void 0===b&&(b=null);void 0===d&&(d=null);void 0===e&&(e=null);this.type=a;this.scenePoint=b;this.mapPoint=d;this.handle=e}}();b.PickResult=a})(u||(u={}));var H=Math.cos(x.deg2rad(12));return u});