// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("require exports ../../../../geometry/ScreenPoint ../../../../core/screenUtils ../../../../Basemap ../../../../support/basemapUtils".split(" "),function(r,b,f,g,n,p){function h(a){var d=a.width,b=a.height,c=a.pixelSizeAt(new f(.5*d,.5*b));0>=c&&(c=a.pixelSizeAt(new f(.5*d,.95*b)),0>=c&&(d=a.camera.position.clone(),d.z=0,c=2*a.pixelSizeAt(d)));return c}function k(a,b,e){void 0===e&&(e=!0);var c=null;"string"===typeof a&&-1<b.indexOf(a)?c=a:a instanceof n&&(c=p.getWellKnownBasemapId(a));return e?
c||"gray":c}Object.defineProperty(b,"__esModule",{value:!0});var l="streets gray topo terrain national-geographic oceans osm gray-vector streets-vector topo-vector streets-relief-vector streets-navigation-vector".split(" "),m=["satellite","hybrid","dark-gray","dark-gray-vector","streets-night-vector"],q=[].concat(l).concat(m);b.getPixelSize=h;b.toWorldScale=function(a,b){return Math.ceil(h(b)*g.pt2px(g.toPt(a)))};b.getStorageType=function(a){return"multipoint"===a?"point":"mesh"===a?"polygon":a};
b.getBasemapId=k;b.getBasemapTheme=function(a){a=k(a,q,!1);if(!a)return null;if(-1<l.indexOf(a))return"light";if(-1<m.indexOf(a))return"dark"}});