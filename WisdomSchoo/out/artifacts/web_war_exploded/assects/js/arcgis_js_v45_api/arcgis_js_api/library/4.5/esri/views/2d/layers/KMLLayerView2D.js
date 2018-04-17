// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/accessorSupport/decorators ../../../core/HandleRegistry ../../../core/promiseUtils ../../../request ../../../geometry/Extent ../../../geometry/support/webMercatorUtils ../engine/DOMContainer ../engine/Canvas2DContainer ../engine/Bitmap ../engine/BitmapSource ./LayerView2D ../../layers/RefreshableLayerView ./support/GraphicsView2D".split(" "),function(z,A,m,n,h,p,k,q,r,l,t,u,v,
w,x,y,f){return function(g){function e(){var a=null!==g&&g.apply(this,arguments)||this;a._handles=new p;a._bitmapIndex=new Map;a._mapImageContainer=new u;a.container=new t;return a}m(e,g);e.prototype.hitTest=function(a,c){var b=this;if(this.suspended||!this._pointsView&&!this._polylinesView&&!this._polygonsView)return k.resolve();a=[this._pointsView.hitTest(a,c),this._polylinesView.hitTest(a,c),this._polygonsView.hitTest(a,c)];return k.all(a).then(function(a){return a.filter(function(a){a&&(a.layer=
b.layer);return!!a})[0]||null})};e.prototype.update=function(a){};e.prototype.attach=function(){var a=this;this.layer.allVisibleMapImages.forEach(function(c){return a._addMapImage(c)});this._handles.add(this.layer.allVisibleMapImages.on("change",function(c){c.added.forEach(function(b){return a._addMapImage(b)});c.removed.forEach(function(b){return a._removeMapImage(b)})}));this.container.addChild(this._mapImageContainer);this._polygonsView=new f({view:this.view,graphics:this.layer.allVisiblePolygons});
this.container.addChild(this._polygonsView.container);this._polylinesView=new f({view:this.view,graphics:this.layer.allVisiblePolylines});this.container.addChild(this._polylinesView.container);this._pointsView=new f({view:this.view,graphics:this.layer.allVisiblePoints});this.container.addChild(this._pointsView.container)};e.prototype.detach=function(){this._handles.removeAll();this._mapImageContainer.removeAllChildren();this.container.removeAllChildren();this._bitmapIndex.clear();this._polygonsView.graphics=
null;this._pointsView.graphics=null;this._polygonsView=this._polylinesView=this._pointsView=this._polylinesView.graphics=null};e.prototype.moveStart=function(){};e.prototype.viewChange=function(){};e.prototype.moveEnd=function(){};e.prototype._addMapImage=function(a){var c=this;this.view.spatialReference.isWGS84&&q(a.href,{responseType:"image"}).then(function(b){var d=r.fromJSON(a.extent);l.canProject(d,c.view.spatialReference)&&(d=l.project(d,c.view.spatialReference));b=new w(b.data);b.coords[0]=
d.xmin;b.coords[1]=d.ymax;b.resolution=d.width/b.width;b.rotation=a.rotation;d=new v(b);d.coords=[b.coords[0],b.coords[1]];d.resolution=b.resolution;d.width=b.width;d.height=b.height;c._mapImageContainer.addChild(d);c._bitmapIndex.set(a,d)})};e.prototype._removeMapImage=function(a){var c=this._bitmapIndex.get(a);c&&(this._mapImageContainer.removeChild(c),this._bitmapIndex.delete(a))};return e=n([h.subclass("esri.views.2d.layers.KMLLayerView2D")],e)}(h.declared(x,y))});