// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/assignHelper ../../../../core/promiseUtils ../../tiling/TileInfoView ../../tiling/TileKey ../../engine/Bitmap ../../viewStateUtils ../../../../geometry/Extent ../../../../geometry/support/spatialReferenceUtils ../../../../layers/support/TileInfo".split(" "),function(y,z,n,r,t,u,v,m,p,w,x){var e=[0,0,0,0],l=[0,0],q=new u(0,0,0,0),k={container:null,fetchImage:null,requestUpdate:null,imageMaxWidth:2048,imageMaxHeight:2048,imageRotationSupported:!1,imageNormalizationSupported:!1,
imageDataAccessRequired:!1,hidpi:!1};return function(){function h(a){this._imagePromise=null;this.hidpi=k.hidpi;this.imageDataAccessRequired=k.imageDataAccessRequired;this.imageMaxWidth=k.imageMaxWidth;this.imageMaxHeight=k.imageMaxHeight;this.imageRotationSupported=k.imageRotationSupported;this.imageNormalizationSupported=k.imageNormalizationSupported;a=n({},k,a);this.container=a.container;this.fetchImage=a.fetchImage;this.requestUpdate=a.requestUpdate;this.imageMaxWidth=a.imageMaxWidth;this.imageMaxHeight=
a.imageMaxHeight;this.imageRotationSupported=a.imageRotationSupported;this.imageNormalizationSupported=a.imageNormalizationSupported;this.hidpi=a.hidpi}h.prototype.destroy=function(){};Object.defineProperty(h.prototype,"updating",{get:function(){return null!==this._imagePromise},enumerable:!0,configurable:!0});h.prototype.update=function(a){var c=this,b=a.state,f=w.getInfo(b.spatialReference),g=this.hidpi?a.devicePixelRatio:1;this._imagePromise&&(this._imagePromise.cancel(),this._imagePromise=null);
if(a.stationary){this.imageRotationSupported?(l[0]=b.width,l[1]=b.height):m.getOuterSize(l,b);a=!this.imageNormalizationSupported&&f&&(b.extent.xmin<f.valid[0]||b.extent.xmax>f.valid[1]);f=this.imageRotationSupported?b.rotation:0;if(Math.floor(l[0]*g)>this.imageMaxWidth||Math.floor(l[1]*g)>this.imageMaxHeight||a){var d=Math.min(this.imageMaxWidth,this.imageMaxHeight);a&&(d=Math.min(b.worldScreenWidth,d));this._imagePromise=this._tiledExport(b,d,f,g)}else this._imagePromise=this._singleExport(b,l,
f,g);this._imagePromise.then(function(a){c._imagePromise=null;c.container.removeAllChildren();a.forEach(c.container.addChild,c.container)}).otherwise(function(a){c._imagePromise=null;if("cancel"!==a.dojoType)throw a;})}};h.prototype.updateExports=function(a,c){for(var b=0,f=this.container.children;b<f.length;b++){var g=f[b];if(!g.visible||!g.attached)break;a(g,c)?console.error("ExportStrategy.updateExports doesn't support promise yet"):g.requestRender()}};h.prototype._export=function(a,c,b,f,g){return this.fetchImage(a,
Math.floor(c*g),Math.floor(b*g),{allowImageDataAccess:this.imageDataAccessRequired,rotation:f,pixelRatio:g}).then(function(d){var e=new v(d);e.coords[0]=d.coords[0]=a.xmin;e.coords[1]=d.coords[1]=a.ymax;e.resolution=d.resolution=a.width/c;d.rotation=f;d.pixelRatio=g;e.width=c;e.height=b;return e})};h.prototype._singleExport=function(a,c,b,f){m.getBBox(e,a.center,a.resolution,c);a=new p(e[0],e[1],e[2],e[3],a.spatialReference);return this._export(a,c[0],c[1],b,f).then(function(a){return[a]})};h.prototype._tiledExport=
function(a,c,b,f){var g=this,d=x.create({size:c,spatialReference:a.spatialReference,scales:[a.scale]}),h=new t(d),d=h.getTileCoverage(a);if(!d)return null;var k=[];d.forEach(function(d,l,m,n){q.set(d,l,m,n);h.getTileBounds(e,q);d=new p(e[0],e[1],e[2],e[3],a.spatialReference);k.push(g._export(d,c,c,b,f))});return r.all(k)};return h}()});