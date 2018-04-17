// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/ObjectPool","../../../../core/Scheduler","./disposeMembers"],function(f,g,h,k,l){Object.defineProperty(g,"__esModule",{value:!0});f=function(){function e(a,b){this.owner=b;this.properties={};this.scheduleHandle=null;for(var c in a)b=new h(a[c],null,null,2,2),this.properties[c]={pool:b,acquired:[]}}e.prototype.destroy=function(){l.default(this,"scheduleHandle");this.owner=null};e.prototype.get=function(a){var b=this,c=this.owner._get(a);a=this.properties[a];
var d=a.pool.acquire();for(a.acquired.push(d);d===c;)a.acquired.push(d),d=a.pool.acquire();this.scheduleHandle||(this.scheduleHandle=k.schedule(function(){return b.release()}));return d};e.prototype.release=function(){this.scheduleHandle=null;for(var a in this.properties){for(var b=this.properties[a],c=0,d=b.acquired;c<d.length;c++)b.pool.release(d[c]);b.acquired.length=0}};return e}();g.PropertiesPool=f;g.default=f});