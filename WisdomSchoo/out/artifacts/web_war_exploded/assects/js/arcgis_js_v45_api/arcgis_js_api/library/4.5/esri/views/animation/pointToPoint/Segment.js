// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(h,k){Object.defineProperty(k,"__esModule",{value:!0});h=function(){function c(a){a&&this.update(a)}c.prototype.update=function(a){a&&(this.definition?this.definition.copyFrom(a):this.definition=a.clone());this._updatePrecomputedVariables();this._updatePixelFlow()};c.prototype._updatePrecomputedVariables=function(){var a=this.definition,b=a.compared,e=b.sourceZoom,d=b.targetZoom;this._sl=e>d?1:-1;this._panPixelsAtSource=b.pan*a.source.pixelsPerPanAtZoom(e);a=(a.source.pixelsPerRotateAtZoom(e)+
a.target.pixelsPerRotateAtZoom(d))/2;this._rotatePixels=b.rotate*a};c.prototype._updatePixelFlow=function(){var a=this.definition.compared.sourceZoom,b=this.definition.compared.targetZoom,e=this.definition.hasZoom,d=this.definition.hasPan,c=this.definition.hasRotate,f,g;f=d&&e?(b/a-1)/(-1/(this._sl*this.definition.halfWindowSize)*Math.LN2*this._panPixelsAtSource):0;g=e&&c?Math.log(a/b)/Math.LN2*this._sl*this.definition.halfWindowSize/this._rotatePixels:0;this._rotatePixelFlow=this._panPixelFlow=this._zoomPixelFlow=
0;a=this.definition.desiredPixelFlow;e&&d&&c?(b=f+g+f*g,this._zoomPixelFlow=f*g/b*a,this._panPixelFlow=g/b*a,this._rotatePixelFlow=f/b*a):e&&d?(b=1+f,this._zoomPixelFlow=f/b*a,this._panPixelFlow=1/b*a):e&&c?(b=1+g,this._zoomPixelFlow=g/b*a,this._rotatePixelFlow=1/b*a):d&&c?(f=this._panPixelsAtSource/this._rotatePixels,b=1+f,this._panPixelFlow=f/b*a,this._rotatePixelFlow=1/b*a):d?this._panPixelFlow=a:e?this._zoomPixelFlow=a:c&&(this._rotatePixelFlow=a);this.time=c?this.rotateTime:e?this.zoomTime:d?
this.panTime:0};Object.defineProperty(c.prototype,"zoomTime",{get:function(){return this.definition.hasZoom?Math.log(this.definition.compared.sourceZoom/this.definition.compared.targetZoom)/Math.LN2*this._sl*this.definition.halfWindowSize/this._zoomPixelFlow:0},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"panTime",{get:function(){if(this.definition.hasPan){if(this.definition.hasZoom){var a=-1/(this._sl*this.definition.halfWindowSize)*Math.LN2;return Math.log(this._zoomPixelFlow/
this._panPixelFlow*this._panPixelsAtSource*a+1)/(a*this._zoomPixelFlow)}return this._panPixelsAtSource/this._panPixelFlow}return 0},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"rotateTime",{get:function(){return this.definition.hasRotate?this._rotatePixels/this._rotatePixelFlow:0},enumerable:!0,configurable:!0});c.prototype._interpolateComponentsZoom=function(a){if(this.definition.hasZoom){var b=this.definition.compared.sourceZoom,c=this.definition.compared.targetZoom;return(b*
Math.pow(b/c,-a)-b)/(c-b)}return a};c.prototype._interpolateComponentsPan=function(a){if(this.definition.hasPan&&this.definition.hasZoom){var b=-1/(this._sl*this.definition.halfWindowSize)*this._zoomPixelFlow;return 1/this._panPixelsAtSource*this._panPixelFlow*(Math.pow(2,b*a*this.time)-1)/(b*Math.LN2)}return a};c.prototype._interpolateComponentsRotate=function(a){return a};c.prototype.interpolateComponentsAt=function(a,b){a=Math.min(Math.max(a,0),1);var c=this._interpolateComponentsZoom(a),d=this._interpolateComponentsPan(a);
a=this._interpolateComponentsRotate(a);b?(b.zoom=c,b.pan=d,b.rotate=a):b={zoom:c,pan:d,rotate:a};return b};return c}();k.Segment=h;k.default=h});