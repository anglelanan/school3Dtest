// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/tsSupport/extendsHelper","./Shape","dojox/gfx/_base"],function(b,c,d,e,f){Object.defineProperty(c,"__esModule",{value:!0});b=function(b){function a(g){var a=b.call(this)||this;a.shape=f.getDefault("Circle");a.rawNode=g;return a}d(a,b);a.prototype.getBoundingBox=function(){if(!this.bbox){var a=this.shape;this.bbox={x:a.cx-a.r,y:a.cy-a.r,width:2*a.r,height:2*a.r}}return this.bbox};a.nodeType="circle";return a}(e.default);c.default=b});