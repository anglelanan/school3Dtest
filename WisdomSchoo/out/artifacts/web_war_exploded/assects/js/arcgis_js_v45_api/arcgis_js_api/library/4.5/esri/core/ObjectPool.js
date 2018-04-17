// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(g,h){var e=function(){return function(){}}();return function(){function c(a,b,f,d,c){void 0===d&&(d=1);void 0===c&&(c=0);this.classConstructor=a;this.acquireFunctionOrWithConstructor=b;this.releaseFunction=f;this.growthSize=d;!0===b?this.acquireFunction=this._constructorAcquireFunction:"function"===typeof b&&(this.acquireFunction=b);this._pool=Array(c);this._set=new Set;this._initialSize=c;for(a=0;a<c;a++)this._pool[a]=new this.classConstructor;this.growthSize=
Math.max(d,1)}c.prototype.acquire=function(){for(var a=[],b=0;b<arguments.length;b++)a[b]=arguments[b];b=this.classConstructor||e;if(0===this._pool.length)for(var c=this.growthSize,d=0;d<c;d++)this._pool[d]=new b;b=this._pool.shift();this.acquireFunction?this.acquireFunction.apply(this,[b].concat(a)):b&&b.acquire&&"function"===typeof b.acquire&&b.acquire.apply(b,a);this._set.delete(b);return b};c.prototype.release=function(a){a&&!this._set.has(a)&&(this.releaseFunction?this.releaseFunction(a):a&&
a.release&&"function"===typeof a.release&&a.release(),this._pool.push(a),this._set.add(a))};c.prototype.prune=function(){if(!(this._pool.length<=this._initialSize))for(var a;this._initialSize>this._pool.length;)a=this._pool.shift(),this._set.delete(a),a.dispose&&"function"===typeof a.dispose&&a.dispose()};c.prototype._constructorAcquireFunction=function(a){for(var b=[],c=1;c<arguments.length;c++)b[c-1]=arguments[c];(d=this.classConstructor).call.apply(d,[a].concat(b));var d};return c}()});