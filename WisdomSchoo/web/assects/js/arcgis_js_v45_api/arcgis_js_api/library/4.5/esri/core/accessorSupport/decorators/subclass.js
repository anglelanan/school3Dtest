// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define(["require","exports","../../declare","../metadata"],function(t,h,n,k){function l(b,a){b.read&&("function"===typeof b.read?a.push(b.read):"object"===typeof b.read&&b.read.reader&&a.push(b.read.reader))}function m(b,a){b.write&&("function"===typeof b.write?a.push(b.write):"object"===typeof b.write&&b.write.writer&&a.push(b.write.writer))}function p(b){var a=[];b=k.getPropertiesMetadata(b.prototype);if(!b)return a;for(var d in b){var c=b[d];c.cast&&a.push(c.cast);c.copy&&a.push(c.copy);if(c=c.json)if(l(c,
a),m(c,a),c=c.origins)for(var e in c){var f=c[e];l(f,a);m(f,a)}}return a}function q(b){var a={values:{},descriptors:{}},d=["__bases__"],c=k.getPropertiesMetadata(b.prototype),e=p(b);Object.getOwnPropertyNames(b.prototype).filter(function(a){return-1!==d.indexOf(a)||c&&c.hasOwnProperty(a)||-1!==e.indexOf(b.prototype[a])?!1:!0}).forEach(function(c){var g=Object.getOwnPropertyDescriptor(b.prototype,c);g&&(g.get||g.set)?a.descriptors[c]=g:a.values[c]=b.prototype[c]});return a}function r(b){var a=Object.getOwnPropertyNames(b),
d=Object.getPrototypeOf(b.prototype).constructor,c=Object.getOwnPropertyNames(Function);c.push("__bases__");var e=Object.getOwnPropertyNames(d),f={values:{},descriptors:{}};a.filter(function(a){return-1!==c.indexOf(a)?!1:-1===e.indexOf(a)||d[a]!==b[a]?!0:!1}).forEach(function(a){var c=Object.getOwnPropertyDescriptor(b,a);c&&(c.get||c.set)?f.descriptors[a]=c:f.values[a]=b[a]});return f}Object.defineProperty(h,"__esModule",{value:!0});h.subclass=function(b){return function(a){var d=q(a),c=r(a);null!=
b&&(d.values.declaredClass=b);a=n(a.__bases__,d.values);Object.defineProperties(a.prototype,d.descriptors);for(var e in c.values)a[e]=c.values[e];Object.defineProperties(a,c.descriptors);return a}}});