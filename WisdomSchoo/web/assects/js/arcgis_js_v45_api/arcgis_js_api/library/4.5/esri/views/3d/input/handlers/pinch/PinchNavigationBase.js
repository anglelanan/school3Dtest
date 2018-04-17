// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/extendsHelper ../../../../input/InputHandler ../../../lib/glMatrix ../../../webgl-engine/lib/Camera".split(" "),function(e,h,l,m,k,n){Object.defineProperty(h,"__esModule",{value:!0});e=function(e){function d(a,b){var c=e.call(this,"esri.views.3d.input.handlers.PinchTest",!0)||this;c.view=a;c._helper=b;c._lastEndTimestamp=0;c._dragNavigationActive=!1;c._beginCamera=new n;c._tmpvec2d=k.vec2.create();c.registerIncoming("drag",function(a){return c._handleDrag(a)});
c.registerIncoming("pointer-down",function(a){return c.stopMomentumNavigation()});c.registerIncoming("two-finger-drag-vertical",function(a){return c.stopMomentumNavigation()});return c}l(d,e);d.prototype.stopMomentumNavigation=function(){this.momentum&&this.momentum.stop()};d.prototype.destroy=function(){this.momentum&&this.momentum.destroy()};d.prototype.applyNavigationConstraints=function(){var a=this.view.navigation;a.fixTargetUpVector();a.constrainTargetEyeByElevationAndMoveLookAt();a.targetAndCurrentChanged()};
Object.defineProperty(d.prototype,"beginCamera",{get:function(){return this._beginCamera},enumerable:!0,configurable:!0});d.prototype.computePlanePoints=function(a,b,c,d,f){f.length=a.data.pointers.length;for(var e=this._tmpvec2d,g=0;g<f.length;g++){var h=a.data.pointers[g];e[0]=h[b].x;e[1]=this.view.height-h[b].y;void 0===f[g]&&(f[g]=k.vec3d.create());this._helper.planar.intersectPlaneFromScreenPoint(c,d,e,f[g])}return f};d.prototype._handleDrag=function(a){if(1!==a.data.pointers.length||"mouse"!==
a.data.pointers[0].currentEvent.native.pointerType){var b=a.timestamp-this._lastEndTimestamp,b=this.momentum&&this.momentum.active&&40>b;switch(a.data.action){case "start":if(b)break;this._navigationBegin(a);break;case "update":if(b)break;this._dragNavigationActive?this._navigationUpdate(a):this._navigationBegin(a);break;case "end":this._dragNavigationActive&&(this._lastEndTimestamp=a.timestamp,this._navigationEnd(a))}a.stopPropagation()}};d.prototype._navigationBegin=function(a){var b=this.view.navigation;
this.stopMomentumNavigation();this._dragNavigationActive=!0;this.beginCamera.copyFrom(b.currentCamera);b.begin(this);this.onNavigationBegin(a)};d.prototype._navigationUpdate=function(a){if(!(.002>(a.data.currentState.timestamp-a.data.previousState.timestamp)/1E3)){var b=this.view.navigation.targetCamera;b.eye=this.beginCamera.eye;b.center=this.beginCamera.center;b.up=this.beginCamera.up;this.onNavigationUpdate(a,b);this.applyNavigationConstraints()}};d.prototype._navigationEnd=function(a){this.onNavigationEnd(a);
this._dragNavigationActive=!1;this.momentum&&this.momentum.initiate();this.view.navigation.end(this)};return d}(m.InputHandler);h.PinchNavigationBase=e});