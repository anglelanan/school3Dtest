// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define(["require","exports","../SpatialReference"],function(u,c,h){function n(a,b,e,l,d){if("point"===a.type)b=b(a.x,a.y,p,0,l),d.x=b[0],d.y=b[1];else if("extent"===a.type)f=b(a.xmin,a.ymin,p,0,l),d.xmin=f[0],d.ymin=f[1],b=b(a.xmax,a.ymax,p,0,l),d.xmax=b[0],d.ymax=b[1];else if("polyline"===a.type||"polygon"===a.type){var c=(f="polyline"===a.type)?a.paths:a.rings,h=[],m=void 0;for(a=0;a<c.length;a++){var k=c[a],m=[];h.push(m);for(var g=0;g<k.length;g++)m.push(b(k[g][0],k[g][1],[0,0],0,l)),2<k[g].length&&
m[g].push(k[g][2]),3<k[g].length&&m[g].push(k[g][3])}f?d.paths=h:d.rings=h}else if("multipoint"===a.type){f=a.points;c=[];for(a=0;a<f.length;a++)c[a]=b(f[a][0],f[a][1],[0,0],0,l),2<f[a].length&&c[a].push(f[a][2]),3<f[a].length&&c[a].push(f[a][3]);d.points=c}d.spatialReference=e;return d;var f}function t(a,b){a=a&&(null!=a.wkid||null!=a.wkt?a:a.spatialReference);b=b&&(null!=b.wkid||null!=b.wkt?b:b.spatialReference);return a&&b?b.equals(a)?!0:b.isWebMercator&&a.isWGS84||a.isWebMercator&&b.isWGS84:!1}
function q(a,b,e,c){void 0===e&&(e=[0,0]);void 0===c&&(c=0);89.99999<b?b=89.99999:-89.99999>b&&(b=-89.99999);b*=.017453292519943;e[c]=111319.49079327169*a;e[c+1]=3189068.5*Math.log((1+Math.sin(b))/(1-Math.sin(b)));return e}function r(a,b,e,c,d){void 0===e&&(e=[0,0]);void 0===c&&(c=0);void 0===d&&(d=!1);a=a/6378137*57.29577951308232;e[c]=d?a:a-360*Math.floor((a+180)/360);e[c+1]=57.29577951308232*(1.5707963267948966-2*Math.atan(Math.exp(-1*b/6378137)));return e}Object.defineProperty(c,"__esModule",
{value:!0});var p=[0,0];c.canProject=t;c.project=function(a,b){var c=a&&a.spatialReference;b=b&&(null!=b.wkid||null!=b.wkt?b:b.spatialReference);return t(c,b)?c.equals(b)?a.clone():b.isWebMercator?n(a,q,h.WebMercator,!1,a.clone()):b.isWGS84?n(a,r,h.WGS84,!1,a.clone()):null:null};c.lngLatToXY=q;c.xyToLngLat=r;c.geographicToWebMercator=function(a,b,c){void 0===b&&(b=!1);void 0===c&&(c=a.clone());return n(a,q,h.WebMercator,b,c)};c.webMercatorToGeographic=function(a,b,c){void 0===b&&(b=!1);void 0===c&&
(c=a.clone());return n(a,r,h.WGS84,b,c)}});