// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define("../mixins/ConstraintsMixin ../../support/mathUtils ../../support/earthUtils ../../constraints/SceneViewTiltConstraint ../../lib/glMatrix ../../terrain/StableSurfaceCenter ../../webgl-engine/lib/Util ../../../../geometry/support/scaleUtils ../../../../core/watchUtils ../../../../core/Logger".split(" "),function(k,l,q,r,v,w,x,y,t,z){var d=v.vec3d,A=z.getLogger("esri.views.3d.navigation.planar.ConstraintsPlanar"),f=d.create(),u=d.create(),m=d.create(),B={min:0,max:Math.PI};return k.createSubclass({declaredClass:"esri.views.3d.navigation.planar.ConstraintsPlanar",
defaultConstraints:{tilt:new k.Tilt({min:function(){return l.deg2rad(r.MAX_DEFAULT)},max:l.makePiecewiseLinearFunction([[4E3,l.deg2rad(r.MIN_DEFAULT)],[1E4,l.deg2rad(88)],[6E6,l.deg2rad(88)]])}),altitude:new k.Altitude({min:function(){return-Infinity},max:function(){return Infinity}}),collision:new k.Collision},_surfaceDistanceConstraint:Infinity,_surfaceCenter:null,_surfaceCenterHelper:null,_basemapTerrainWatchHandle:null,constructor:function(b){this._basemapTerrainWatchHandle=t.init(b.view,"basemapTerrain",
this._initializeSurfaceCenterHelper.bind(this,b.view))},destroy:function(){this._surfaceCenterHelper&&(this._surfaceCenterHelper.destroy(),this._surfaceCenterHelper=null);this._basemapTerrainWatchHandle&&(this._basemapTerrainWatchHandle.remove(),this._basemapTerrainWatchHandle=null)},_initializeSurfaceCenterHelper:function(b){this._surfaceCenterHelper&&(this._surfaceCenterHelper.destroy(),this._surfaceCenter=this._surfaceCenterHelper=null);b.basemapTerrain&&(this._surfaceCenterHelper=new w({view:b}),
t.init(this._surfaceCenterHelper,"center",function(a){a&&this.renderCoordsHelper.toRenderCoords(a,f)?(this._surfaceCenter=d.create(f),this._dataExtentChanged()):this._surfaceCenter=null}.bind(this)))},_altitudeModeHandler:function(b){this.inherited(arguments);"auto"!==b&&A.warn("Altitude constraint is ignored in local scenes")},_updateSurfaceDistanceConstraint:function(b){var a=Math.max(b.xmax-b.xmin,b.ymax-b.ymin);b.hasZ&&(a=Math.max(a,b.zmax-b.zmin));a=3*a/Math.atan((this._targetCameraBeforeElevationUpdate||
this.targetCamera)._fov/2);b=y.getMetersPerUnitForSR(b.spatialReference);this._surfaceDistanceConstraint=a*b},limitAltitude:function(b,a,c){var g=this._surfaceDistanceConstraint;if(!this._surfaceCenter||Infinity===g)return b;d.scale(c,b/d.length(c),f);var e=d.subtract(a,f,f);return 1E-6<d.dist(e,this._surfaceCenter)-g&&x.raySphere(e,c,this._surfaceCenter,g,u)?d.dist(a,u):b},tiltConstraintsFromAltitudeConstraints:function(b,a){return B},distanceToSilhouette:function(b,a,c,g,e){e||(e={maxFarNearRatio:0,
distance:0});e.maxFarNearRatio=this.maxFarNearRatio;var p=this.renderCoordsHelper.getAltitude(b.eye),n=p*=c;g=p-g;var h=this.elevationProvider?this.elevationProvider.getElevationBounds():null;h&&(p=0<=g?n-c*h[0]:c*h[1]-n);n=Math.max(a.xmax-a.xmin,a.ymax-a.ymin,4*Math.max(a.xmax-a.xmin,a.ymax-a.ymin));d.subtract(b.center,b.eye,m);f[0]=0<m[0]?a.xmax:a.xmin;f[1]=0<m[1]?a.ymax:a.ymin;f[2]=0<m[2]?n/2:-n/2;d.subtract(f,b.eye);d.normalize(m);b=1.1*d.dot(f,m)*c;h=p+q.earthRadius;h=Math.sqrt(h*h-q.earthRadius*
q.earthRadius);a=Math.max(a.xmax-a.xmin,a.ymax-a.ymin);var k=1E-4*a*c;c=l.clamp((p-k)/(.001*a*c-k),0,1);e.distance=l.lerp(h,b,c*c*c);e.maxFarNearRatio=2E4;e.distance*=Math.max(Math.log(Math.abs(g)),1);e.distance=Math.min(e.distance,Math.max(34064E4,n));return e},getFallbackCenterAlongViewDirection:function(b,a,c){d.set(a,c)}})});