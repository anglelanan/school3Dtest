// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(d,e){Object.defineProperty(e,"__esModule",{value:!0});d=function(){function c(a,b){this.x=a;this.y=b}c.prototype.clone=function(){return new c(this.x,this.y)};c.prototype.equals=function(a,b){return a===this.x&&b===this.y};c.prototype.isEqual=function(a){return a.x===this.x&&a.y===this.y};c.prototype.setCoords=function(a,b){this.x=a;this.y=b};c.prototype.normalize=function(){var a=this.x,b=this.y,a=Math.sqrt(a*a+b*b);this.x/=a;this.y/=a};c.prototype.rightPerpendicular=
function(){var a=this.x;this.x=this.y;this.y=-a};c.prototype.move=function(a,b){this.x+=a;this.y+=b};c.prototype.assign=function(a){this.x=a.x;this.y=a.y};c.prototype.assignAdd=function(a,b){this.x=a.x+b.x;this.y=a.y+b.y};c.prototype.assignSub=function(a,b){this.x=a.x-b.x;this.y=a.y-b.y};c.prototype.rotate=function(a,b){var c=this.x,d=this.y;this.x=c*a-d*b;this.y=c*b+d*a};c.prototype.scale=function(a){this.x*=a;this.y*=a};c.prototype.length=function(){var a=this.x,b=this.y;return Math.sqrt(a*a+b*
b)};c.distance=function(a,b){var c=b.x-a.x;a=b.y-a.y;return Math.sqrt(c*c+a*a)};c.add=function(a,b){return new c(a.x+b.x,a.y+b.y)};c.sub=function(a,b){return new c(a.x-b.x,a.y-b.y)};return c}();e.Point=d});