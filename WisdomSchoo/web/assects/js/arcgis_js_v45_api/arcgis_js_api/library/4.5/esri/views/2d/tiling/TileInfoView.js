// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define("require exports ./LODInfo ./TileKey ./TileSpan ./TileCoverage".split(" "),function(w,x,t,p,q,u){var v=function(){function e(a,b,c,k,d,r,h,g){this.x=a;this.ymin=b;this.ymax=c;this.invM=k;this.leftAdjust=d;this.rightAdjust=r;this.leftBound=h;this.rightBound=g}e.create=function(a,b){a[1]>b[1]&&(g=[b,a],a=g[0],b=g[1]);g=a[0];a=a[1];var c=b[0];b=b[1];var k=c-g,d=b-a,d=0!==d?k/d:0,r=(Math.ceil(a)-a)*d,h=(Math.floor(a)-a)*d;return new e(g,Math.floor(a),Math.ceil(b),d,0>k?r:h,0>k?h:r,0>k?c:g,0>k?
g:c);var g};e.prototype.incrRow=function(){this.x+=this.invM};e.prototype.getLeftCol=function(){return Math.max(this.x+this.leftAdjust,this.leftBound)};e.prototype.getRightCol=function(){return Math.min(this.x+this.rightAdjust,this.rightBound)};return e}(),m=[[0,0],[0,0],[0,0],[0,0]];return function(){function e(a,b){var c=this;this.tileInfo=a;this.fullExtent=b;this.scales=[];this._lodInfos=null;this._infoByScale={};this._infoByLevel={};var k=a.lods.slice();k.sort(function(a,b){return b.scale-a.scale});
var d=this._lodInfos=k.map(function(c){return t.create(a,c,b)});k.forEach(function(a,b){c._infoByLevel[a.level]=d[b];c._infoByScale[a.scale]=d[b];c.scales[b]=a.scale},this);this._wrap=a.isWrappable}e.prototype.getTileBounds=function(a,b){var c=this._infoByLevel[b.level];return c?c.getTileBounds(a,b):a};e.prototype.getTileCoords=function(a,b){var c=this._infoByLevel[b.level];return c?c.getTileCoords(a,b):a};e.prototype.getTileCoverage=function(a){var b=this.getClosestInfoForScale(a.scale),c=u.pool.acquire(b),
k=this._wrap,d;d=Infinity;var e=-Infinity,h,g,p=c.spans;m[0][0]=m[0][1]=m[1][1]=m[3][0]=0;m[1][0]=m[2][0]=a.size[0];m[2][1]=m[3][1]=a.size[1];for(var f=0;f<m.length;f++){var l=m[f];a.toMap(l,l);l[0]=b.getColumnForX(l[0]);l[1]=b.getRowForY(l[1])}a=[];l=3;for(f=0;4>f;f++){if(m[f][1]!==m[l][1]){var n=v.create(m[f],m[l]);d=Math.min(n.ymin,d);e=Math.max(n.ymax,e);void 0===a[n.ymin]&&(a[n.ymin]=[]);a[n.ymin].push(n)}l=f}if(null==d||null==e||100<e-d)return null;for(l=[];d<e;){null!=a[d]&&(l=l.concat(a[d]));
h=Infinity;g=-Infinity;for(f=l.length-1;0<=f;f--)n=l[f],h=Math.min(h,n.getLeftCol()),g=Math.max(g,n.getRightCol());h=Math.floor(h);g=Math.floor(g);if(d>=b.first[1]&&d<=b.last[1])if(k)if(b.size[0]<b.worldSize[0])for(n=Math.floor(g/b.worldSize[0]),f=Math.floor(h/b.worldSize[0]);f<=n;f++)p.push(new q(d,Math.max(b.getFirstColumnForWorld(f),h),Math.min(b.getLastColumnForWorld(f),g)));else p.push(new q(d,h,g));else h>b.last[0]||g<b.first[0]||(h=Math.max(h,b.first[0]),g=Math.min(g,b.last[0]),p.push(new q(d,
h,g)));d+=1;for(f=l.length-1;0<=f;f--)n=l[f],n.ymax>=d?n.incrRow():l.splice(f,1)}return c};e.prototype.getTileIdAtParent=function(a,b){b=p.pool.acquire(b);var c=this._infoByLevel[b.level];if(a.resolution<c.resolution)throw Error("Cannot calculate parent tile. destination LOD's resolution "+a.resolution+" is not a parent resolution of "+c.resolution);return a.resolution===c.resolution?b.id:p.getId(a.level,Math.floor(b.row*c.resolution/a.resolution+.01),Math.floor(b.col*c.resolution/a.resolution+.01),
b.world)};e.prototype.getTileParentId=function(a){a=p.pool.acquire(a);var b=this._lodInfos.indexOf(this._infoByLevel[a.level])-1;if(0>b)return p.pool.release(a),null;b=this.getTileIdAtParent(this._lodInfos[b],a);p.pool.release(a);return b};e.prototype.getTileResolution=function(a){return(a=this._infoByLevel[a.level])?a.resolution:-1};e.prototype.getTileScale=function(a){return(a=this._infoByLevel[a.level])?a.scale:-1};e.prototype.intersects=function(a,b){var c=p.pool.acquire(b);b=this._infoByLevel[c.level];
var k=a.lodInfo;if(k.resolution>b.resolution){var d=p.pool.acquire(this.getTileIdAtParent(k,c)),e=k.denormalizeCol(d.col,d.world);b=a.spans.some(function(a){return a.row===d.row&&a.colFrom<=e&&a.colTo>=e});p.pool.release(c);p.pool.release(d);return b}if(k.resolution<b.resolution){var h=a.spans.reduce(function(a,b){a[0]=Math.min(a[0],b.row);a[1]=Math.max(a[1],b.row);a[2]=Math.min(a[2],b.colFrom);a[3]=Math.max(a[3],b.colTo);return a},[Infinity,-Infinity,Infinity,-Infinity]);a=h[0];var g=h[1],m=h[2],
h=h[3],f=b.denormalizeCol(c.col,c.world),l=k.getColumnForX(b.getXForColumn(f)),n=k.getRowForY(b.getYForRow(c.row)),f=k.getColumnForX(b.getXForColumn(f+1))-1;b=k.getRowForY(b.getYForRow(c.row+1))-1;p.pool.release(c);return!(l>h||f<m||n>g||b<a)}var q=k.denormalizeCol(c.col,c.world);b=a.spans.some(function(a){return a.row===c.row&&a.colFrom<=q&&a.colTo>=q});p.pool.release(c);return b};e.prototype.getClosestInfoForScale=function(a){var b=this.scales;this._infoByScale[a]||(a=b.reduce(function(b,e,d,m){return Math.abs(e-
a)<Math.abs(b-a)?e:b},b[0]));return this._infoByScale[a]};return e}()});