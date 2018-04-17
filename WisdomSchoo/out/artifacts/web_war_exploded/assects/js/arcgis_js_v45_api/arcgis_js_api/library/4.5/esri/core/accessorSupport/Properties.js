// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define("require exports dojo/has ./Store ./PropertyOrigin ./extensions ../Logger".split(" "),function(h,k,p,l,d,m,n){Object.defineProperty(k,"__esModule",{value:!0});n.getLogger("esri.core.accessorSupport.Properties");h=function(){function b(a){this.host=a;this._origin=d.OriginId.USER;this.ctorArgs=this.cursors=null;this.destroyed=!1;this.dirties={};this.lifecycle=0;this.overridden=null;this.store=new l.default;a=this.host.constructor.__accessorMetadata__;this.metadatas=a.properties;this.autoDestroy=
a.autoDestroy}b.prototype.initialize=function(){this.lifecycle=1;m.instanceCreated(this.host,this.metadatas)};b.prototype.constructed=function(){this.lifecycle=2};b.prototype.destroy=function(){this.destroyed=!0;var a=this.cursors;if(this.cursors)for(var c=0,e=Object.getOwnPropertyNames(a);c<e.length;c++){var b=e[c],f=a[b];if(f){for(;0<f.length;)f.pop().propertyDestroyed(this,b);a[b]=null}}if(this.autoDestroy)for(b in this.metadatas)(a=this.internalGet(b))&&a&&"function"===typeof a.destroy&&(a.destroy(),
this.internalSet(b,null))};Object.defineProperty(b.prototype,"initialized",{get:function(){return 0!==this.lifecycle},enumerable:!0,configurable:!0});b.prototype.clearOverride=function(a){this.isOverridden(a)&&(this.overridden[a]=!1,this.propertyInvalidated(a))};b.prototype.get=function(a){var c=this.metadatas[a];if(this.store.has(a)&&!this.dirties[a])return this.store.get(a);var b=c.get;return b?(c=b.call(this.host),this.store.set(a,c,d.OriginId.COMPUTED),this.propertyCommitted(a),c):c.value};b.prototype.originOf=
function(a){var c=this.store.originOf(a);return void 0===c&&(a=this.metadatas[a])&&a.hasOwnProperty("value")?"defaults":d.idToName(c)};b.prototype.has=function(a){return this.metadatas[a]?this.store.has(a):!1};b.prototype.internalGet=function(a){if(this.metadatas[a]){var c=this.store;return c.has(a)?c.get(a):this.metadatas[a].value}};b.prototype.internalSet=function(a,c){this.metadatas[a]&&(this.propertyInvalidated(a),this.initialized?this.store.set(a,c,this._origin):this.store.set(a,c,d.OriginId.DEFAULTS),
this.propertyCommitted(a))};b.prototype.isOverridden=function(a){return null!=this.overridden&&!0===this.overridden[a]};b.prototype.keys=function(){return this.store.keys()};b.prototype.override=function(a,c){this.metadatas[a]&&(this.overridden||(this.overridden={}),this.overridden[a]=!0,this.internalSet(a,c))};b.prototype.set=function(a,c){if(this.metadatas[a]){var b=this.metadatas[a],g=b.set;(b=b.cast)&&(c=b.call(this.host,c));g?g.call(this.host,c):this.internalSet(a,c)}};b.prototype.setDefaultOrigin=
function(a){this._origin=d.nameToId(a)};b.prototype.propertyInvalidated=function(a){var b=this.dirties,e=this.isOverridden(a),g=this.cursors&&this.cursors[a],f=this.metadatas[a].computes;if(g)for(var d=0;d<g.length;d++)g[d].propertyInvalidated(this,a);e||(b[a]=!0);if(f)for(a=0;a<f.length;a++)this.propertyInvalidated(f[a])};b.prototype.propertyCommitted=function(a){var b=this.cursors&&this.cursors[a];this.dirties[a]=!1;if(b)for(var e=0;e<b.length;e++)b[e].propertyCommitted(this,a)};b.prototype.addCursor=
function(a,b){this.cursors||(this.cursors={});var c=this.cursors[a];c||(this.cursors[a]=c=[]);c.push(b)};b.prototype.removeCursor=function(a,b){var c=this.cursors[a];this.cursors[a]&&(c.splice(c.indexOf(b),1),0===c.length&&(this.cursors[a]=null))};return b}();k.default=h});