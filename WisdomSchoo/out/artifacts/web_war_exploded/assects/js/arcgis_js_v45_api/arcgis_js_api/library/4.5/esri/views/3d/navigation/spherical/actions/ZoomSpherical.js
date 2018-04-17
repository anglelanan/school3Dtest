// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define(["./ActionSpherical","../../mixins/ZoomMixin","../../../lib/glMatrix","../../../support/earthUtils"],function(t,u,r,m){var v=r.vec2d,b=r.vec3d,p=r.mat4d,h=b.create(),f=b.create(),e=b.create(),k=p.create(),n=b.create(),q=b.create();return t.createSubclass([u],{declaredClass:"esri.views.3d.navigation.spherical.actions.ZoomSpherical",constructor:function(){},begin:function(c){this.inherited(arguments);this.pickPointInScreen(c,this._navPickPoint)?this._navSphereRadius=b.length(this._navPickPoint):
(this._navSphereRadius=b.length(this.targetCamera.center),this._navSphereRadius<.9*m.earthRadius&&(this._navSphereRadius=m.earthRadius),this.createPickRay(c,c,this.currentCamera.viewMatrix,h,f),b.subtract(f,this.currentCamera.eye),this.intersectManifold(this.currentCamera.eye,f,this._navSphereRadius-m.earthUtils,this._navPickPoint)||(this._navSphereRadius=0));this._mouseDownCamera.copyFrom(this.targetCamera)},update:function(c){var a=this.targetCamera;a.eye=this._mouseDownCamera.eye;a.center=this._mouseDownCamera.center;
a.up=this._mouseDownCamera.up;b.subtract(a.center,a.eye,e);var d=b.length(e);this.normalizeCoordinate(c,h);var g=12*(h[1]-this.normalizedAnchorPoint[1]);c=d*Math.pow(2,g);0>g&&c<this.navigation.minPoiDist&&(c=this.navigation.minPoiDist);c=this.limitAltitude(c,a.center,e);1E-6>Math.abs(d-c)||(0<this._navSphereRadius&&c<d&&(g=1-(1-c/d)*(1-this._navSphereRadius/b.length(a.center)),b.scale(a.center,g)),b.scale(e,-c/d),b.add(a.center,e,a.eye),d=!1,0<this._navSphereRadius&&(p.lookAt(a.eye,a.center,a.up,
k),this.createPickRay(this._dragBeginPoint,this._dragBeginPoint,k,h,f),b.normalize(b.subtract(f,a.eye)),this.intersectManifold(a.eye,f,this._navSphereRadius-m.earthRadius,this._targetOnSphere)||(this.closestPointOnSphereSilhouette(a.eye,h,this._navSphereRadius,this._targetOnSphere),d=!0),this.rotateCameraWithPointsOnSphere(this._navPickPoint,this._targetOnSphere,a,a,this._navSphereRadius),this.fixTargetUpVector()),this.applyConstraints(a),this.constrainTargetEyeByElevation(),this.targetAndCurrentChanged(),
v.set(this._dragBeginPoint,this._dragLastPoint),d&&(p.lookAt(a.eye,a.center,a.up,k),this._dragLastPoint=this.currentCamera.projectPoint(this._navPickPoint,k)),a=this._toYDownCoord(this._dragLastPoint),this.emit("update",a[0],a[1]))},stepAtPoint:function(c,a,d,g){b.set(a,q);a=b.length(q);b.subtract(this.targetCamera.center,this.targetCamera.eye,n);var l=b.length(n),e=l*c,e=1>=c&&e<this.minPoiDist?this.minPoiDist:this.limitAltitude(e,q,n);c=e/l;1E-6>Math.abs(l-e)||(g&&(l=b.length(this.targetCamera.center),
b.scale(this.targetCamera.center,(a+c*(l-a))/l)),b.scale(n,-c),b.add(this.targetCamera.center,n,this.targetCamera.eye),g&&d&&(p.lookAt(this.targetCamera.eye,this.targetCamera.center,this.targetCamera.up,k),this.createPickRay(d,d,k,h,f),b.normalize(b.subtract(f,this.targetCamera.eye)),this.intersectManifold(this.targetCamera.eye,f,a-m.earthRadius,this._targetOnSphere)?this.rotateCameraWithPointsOnSphere(q,this._targetOnSphere,this.targetCamera,this.targetCamera,a):g=!1),this.navigation.adjustTiltAfterZoom(this.targetCamera),
this.applyConstraints(this.targetCamera),this.constrainTargetEyeByElevation(),g&&this.fixTargetUpVector(),this.navigation.currentHasAlmostReachedTarget()?this.targetAndCurrentChanged():this.targetAnimatedChanged(!1,{internalUpdate:!0}))}})});