// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/tsSupport/extendsHelper","./DisplayObject"],function(n,p,k,l){var m=[0,0];return function(h){function g(b){var a=h.call(this)||this;a.source=b;a.coords=[0,0];a.resolution=0;a.rotation=0;a.width=0;a.height=0;return a}k(g,h);g.prototype.doRender=function(b){this.source&&this.source.ready&&null!=b.context&&this.renderCanvas2D(b)};g.prototype.renderCanvas2D=function(b){var a=this.source,c=b.context,d=b.state;b=d.rotation;var e=this.resolution/d.resolution*d.pixelRatio;
if(!(.05>e)){c.save();var f=d.toScreen(m,this.coords),d=f[0],f=f[1];.99<e&&1.01>e?c.translate(Math.round(d),Math.round(f)):(c.translate(d,f),c.scale(e,e));b&&c.rotate(b*Math.PI/180);a.rotation&&(c.translate(.5*this.width,.5*this.height),c.rotate(-a.rotation*Math.PI/180),c.translate(.5*-this.width,.5*-this.height));b=(this.coords[0]-a.coords[0])/a.resolution;e=-(this.coords[1]-a.coords[1])/a.resolution;d=this.resolution/a.resolution*a.width;f=this.resolution/a.resolution*a.height;c.clearRect(0,0,this.width,
this.height);a.draw(c,Math.round(b),Math.round(e),Math.round(d),Math.round(f),0,0,this.width,this.height);c.restore()}};return g}(l)});