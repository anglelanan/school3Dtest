// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define(["require","exports","./enums"],function(q,r,d){return function(){function p(){}p.prototype.replayList=function(b,m,e,f,k,l,g,h,n,a){var d=this;m=m.symbolLevels;m.length<=e||!(e=m[e])||(b.setStencilTestEnabled(!0),b.setStencilFunction(514,k.stencilRef,255),e.zLevels.forEach(function(c){c=c.geometryDPInfo;c.fill&&d._draw(b,c.fill,f,k,h,n,l,g,a);c.line&&d._draw(b,c.line,f,k,h,n,l,g,a);c.marker&&d._draw(b,c.marker,f,k,h,n,l,g,a);c.text&&d._draw(b,c.text,f,k,h,n,l,g,a)}))};p.prototype._draw=function(b,
m,e,f,k,l,g,h,n){m.forEach(function(a){switch(a.geometryType){case d.WGLGeometryType.FILL:e.drawFill(b,a.materialInfo,f,g,h,k,l,n,a.indexFrom,a.indexCount);break;case d.WGLGeometryType.LINE:e.drawLine(b,a.materialInfo,f,g,h,k,l,a.indexFrom,a.indexCount);break;case d.WGLGeometryType.MARKER:e.drawIcon(b,a.materialInfo,f,g,h,a.indexFrom,a.indexCount);break;case d.WGLGeometryType.TEXT:e.drawText(b,a.materialInfo,f,g,h,a.indexFrom,a.indexCount)}})};return p}()});