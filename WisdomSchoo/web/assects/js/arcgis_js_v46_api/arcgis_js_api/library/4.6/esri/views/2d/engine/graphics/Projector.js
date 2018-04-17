// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(x,y){function t(c,a,e,f,b){void 0===f&&(f=0);void 0===b&&(b=c.length);for(var d=c[f],m=c[b-1],g=0,h=0,k,p=f+1;p<b-1;p++){var q=c[p];k=q[0];var q=q[1],r=d[0],n=d[1],l=m[0],v=m[1];r===l?k=u(k-r):(l=(v-n)/(l-r),k=u(l*k-q+(n-l*r))/w(l*l+1));k>g&&(h=p,g=k)}g>a?(t(c,a,e,f,h+1),t(c,a,e,h,b)):(e(d[0],d[1]),e(m[0],m[1]))}var n=Math.round,u=Math.abs,w=Math.sqrt;return function(){function c(){this._transform=null}c.prototype.update=function(a,e){this._transform=a;this._resolution=
e};c.prototype.toScreenPoint=function(a,e,c){this.transformPoint(e.x+c*this._resolution,e.y,function(b,d){a.x=b;a.y=d});return a};c.prototype.toScreenPath=function(a,c){var e=this,b=null!=a.paths;a=b?a.paths:a.rings;var d="",m=function(a,b){a+=c*e._resolution;e.transformPoint(a,b,function(a,b){isNaN(a)||isNaN(b)||(d+=a,d+=",",d+=b,d+=" ")})};if(a)for(var g=a.length,h=0;h<g;h++)d+="M ",t(a[h],this._resolution,m),b||(d+="Z ");return d};c.prototype.transformPoint=function(a,c,f){var b=this._transform,
d=b[1],e=b[3],g=b[5];f(n(b[0]*a+b[2]*c+b[4]),n(d*a+e*c+g))};return c}()});