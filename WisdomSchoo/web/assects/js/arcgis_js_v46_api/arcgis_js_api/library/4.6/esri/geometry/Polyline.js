// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/accessorSupport/decorators ../core/lang ./Geometry ./Extent ./Point ./SpatialReference ./support/zmUtils".split(" "),function(h,O,L,k,d,w,M,I,l,N,x){function J(m){return function(a,e){return null==a?e:null==e?a:m(a,e)}}var m=J(Math.min),e=J(Math.max);h=function(h){function a(){for(var b=[],f=0;f<arguments.length;f++)b[f]=arguments[f];b=h.apply(this,b)||this;b.paths=[];b.type="polyline";return b}
L(a,h);r=a;a.prototype.normalizeCtorArgs=function(b,f){var c=null,p,a,g=null;b&&!Array.isArray(b)?(c=b.paths?b.paths:null,f||(b.spatialReference?f=b.spatialReference:b.paths||(f=b)),p=b.hasZ,a=b.hasM):c=b;c=c||[];f=f||N.WGS84;c.length&&c[0]&&null!=c[0][0]&&"number"===typeof c[0][0]&&(c=[c]);if(g=c[0]&&c[0][0])void 0===p&&void 0===a?(p=2<g.length,a=!1):void 0===p?p=!a&&3<g.length:void 0===a&&(a=!p&&3<g.length);return{paths:c,spatialReference:f,hasZ:p,hasM:a}};Object.defineProperty(a.prototype,"extent",
{get:function(){var b=this.hasZ,f=this.hasM,c=this.spatialReference,a=this.paths,K=b?3:2;if(!a.length||!a[0].length)return null;for(var g=a[0][0],h=g[0],g=g[1],d=a[0][0],l=d[0],d=d[1],k=void 0,y=void 0,r=void 0,w=void 0,D=[],E=0;E<a.length;E++){for(var z=a[E],t=z[0],F=t[0],t=t[1],u=z[0],G=u[0],u=u[1],A=void 0,B=void 0,x=void 0,q=void 0,H=0;H<z.length;H++){var v=z[H],n=v[0],C=v[1],h=m(h,n),g=m(g,C),l=e(l,n),d=e(d,C),F=m(F,n),t=m(t,C),G=e(G,n),u=e(u,C);b&&2<v.length&&(n=v[2],k=m(k,n),y=e(y,n),A=m(A,
n),B=e(B,n));f&&v.length>K&&(q=v[K],r=m(k,q),w=e(y,q),x=m(A,q),q=e(B,q))}D.push(new I({xmin:F,ymin:t,zmin:A,mmin:x,xmax:G,ymax:u,zmax:B,mmax:q,spatialReference:c}))}a=new I;a.xmin=h;a.ymin=g;a.xmax=l;a.ymax=d;a.spatialReference=c;b&&(a.zmin=k,a.zmax=y);f&&(a.mmin=r,a.mmax=w);a.cache._partwise=1<D.length?D:null;return a},enumerable:!0,configurable:!0});a.prototype.writePaths=function(b,a,c,d){a.paths=w.clone(this.paths)};a.prototype.addPath=function(b){if(b){this.clearCache();var a=this.paths,c=a.length;
if(Array.isArray(b[0]))a[c]=b.concat();else{for(var d=[],e=0,g=b.length;e<g;e++)d[e]=b[e].toArray();a[c]=d}return this}};a.prototype.clone=function(){var b=new r;b.spatialReference=this.spatialReference;b.paths=w.clone(this.paths);b.hasZ=this.hasZ;b.hasM=this.hasM;return b};a.prototype.getPoint=function(b,a){if(!this._validateInputs(b,a))return null;b=this.paths[b][a];a=this.hasZ;var c=this.hasM;return a&&!c?new l(b[0],b[1],b[2],void 0,this.spatialReference):c&&!a?new l(b[0],b[1],void 0,b[2],this.spatialReference):
a&&c?new l(b[0],b[1],b[2],b[3],this.spatialReference):new l(b[0],b[1],this.spatialReference)};a.prototype.insertPoint=function(b,a,c){if(!this._validateInputs(b,a,!0))return this;this.clearCache();x.updateSupportFromPoint(this,c);Array.isArray(c)||(c=c.toArray());this.paths[b].splice(a,0,c);return this};a.prototype.removePath=function(b){if(!this._validateInputs(b,null))return null;this.clearCache();b=this.paths.splice(b,1)[0];var a=this.spatialReference;return b.map(function(b){return new l(b,a)})};
a.prototype.removePoint=function(b,a){if(!this._validateInputs(b,a))return null;this.clearCache();return new l(this.paths[b].splice(a,1)[0],this.spatialReference)};a.prototype.setPoint=function(b,a,c){if(!this._validateInputs(b,a))return this;this.clearCache();x.updateSupportFromPoint(this,c);Array.isArray(c)||(c=c.toArray());this.paths[b][a]=c;return this};a.prototype._validateInputs=function(b,a,c){void 0===c&&(c=!1);if(null==b||null==a||0>b||b>=this.paths.length)return!1;b=this.paths[b];return c&&
0>a||a>b.length||0>a||a>=b.length?!1:!0};a.prototype.toJSON=function(a){return this.write(null,a)};k([d.property({dependsOn:["hasM","hasZ","paths"]})],a.prototype,"cache",void 0);k([d.property({dependsOn:["cache"],readOnly:!0})],a.prototype,"extent",null);k([d.property({type:[[[Number]]],json:{write:{isRequired:!0}}})],a.prototype,"paths",void 0);k([d.writer("paths")],a.prototype,"writePaths",null);return a=r=k([d.subclass("esri.geometry.Polyline")],a);var r}(d.declared(M));h.prototype.toJSON.isDefaultToJSON=
!0;return h});