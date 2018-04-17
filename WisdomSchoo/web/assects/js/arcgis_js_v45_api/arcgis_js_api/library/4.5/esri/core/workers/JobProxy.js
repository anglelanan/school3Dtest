// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define("require exports dojo/_base/kernel dojo/_base/lang dojo/Deferred ../../kernel ../../config ../../request ../sniff ../Logger ../urlUtils ./WorkerFallbackImpl".split(" "),function(t,E,w,g,u,x,h,y,z,A,l,m){function B(){if(!z("esri-workers"))return p(new m);if(!C){var c=void 0;try{c=new Worker(q)}catch(a){n.warn("Failed to create Worker. Fallback to execute module in main thread",event),c=new m}return p(c)}r||(r=y(q,{responseType:"text"}));return r.then(function(a){return new Worker(URL.createObjectURL(new Blob([a.data],
{type:"text/javascript"})))}).otherwise(function(a){n.warn("Failed to create Worker. Fallback to execute module in main thread",a);return new m}).then(function(a){return p(a)})}function p(c){function a(b){if(b&&b.data&&b.data.type)if(b=b.data.type,"\x3cworker-loaded\x3e"===b){b=c;var d;null!=h["default"]?(d=g.mixin({},h),delete d["default"],d=JSON.parse(JSON.stringify(d))):d=JSON.parse(JSON.stringify(h));var e={async:!0,baseUrl:D,locale:w.locale,has:{},paths:{}};g.mixin(e,h.workers.loaderConfig);
e.has=g.mixin({"esri-cors":1,"dojo-test-sniff":0,"config-deferredInstrumentation":0,"host-webworker":1},e.has);e.paths=g.mixin({esri:"../esri",dojo:"../dojo",dojox:"../dojox",dstore:"../dstore",moment:"../moment"},e.paths);b.postMessage({type:"\x3cconfigure\x3e",configure:{esriConfig:d,dojoConfig:e,loaderUrl:v}})}else"\x3cworker-configured\x3e"===b&&(c.removeEventListener("message",a),c.removeEventListener("error",k),f.resolve(c))}function k(b){b.preventDefault();c.removeEventListener("message",a);
c.removeEventListener("error",k);n.warn("Failed to create Worker. Fallback to execute module in main thread",b);c=new m;c.addEventListener("message",a);c.addEventListener("error",k)}var f=new u;c.addEventListener("message",a);c.addEventListener("error",k);return f.promise}var n=A.getLogger("esri.core.workers.JobProxy"),q=l.normalize(t.toUrl("./worker.js")),v=l.makeAbsolute(t.toUrl("dojo/dojo.js")),D=l.makeAbsolute("../",v)+"/",C=!l.hasSameOrigin(q,location.href),r=null;return function(){function c(a,
c,f){var b=this;this.connections=a;this.index=c;this.workerInitCallback=f;this.msgCount=0;this.outgoingJobs={};this.incomingJobs={};this.incomingStaticJobs={};B().then(function(a){b.worker=a;b.worker.addEventListener("message",b.message.bind(b));b.worker.addEventListener("error",function(a){a.preventDefault();n.error(a)});b.workerInitCallback(b.index)})}c.prototype.terminate=function(){this.worker.terminate()};c.prototype.openConnection=function(a,c){return this.invoke("\x3copen-connection\x3e",{path:a},
void 0,c)};c.prototype.closeConnection=function(a){this.invoke("\x3cclose-connection\x3e",void 0,void 0,a)};c.prototype.invoke=function(a,c,f,b){var d=this,e=++this.msgCount,k=new u(function(a){d.worker.postMessage({type:"\x3ccancel\x3e",id:e,connection:b,data:{reason:a}});d.outgoingJobs[e]&&delete d.outgoingJobs[e]});this.outgoingJobs[e]=k;this.worker.postMessage({type:a,id:e,connection:b,data:c},f);return k.promise};c.prototype.message=function(a){var c=this;if(a&&a.data){var f=a.data.type;if(f){var b=
a.data,d=a.data.id;if("\x3cresponse\x3e"===f&&d){if(a=this.outgoingJobs[d])delete this.outgoingJobs[d],b.error?a.reject(b.error):a.resolve(b.data)}else if("\x3ccancel\x3e"===f&&d)(a=this.incomingJobs[d])&&a.cancel(b.data.reason),b.staticMsg&&(a=this.incomingStaticJobs[d])&&a.cancel(b.data.reason);else if("\x3cstatic-message\x3e"===f){var e=b.staticMsg;(a=x.workerMessages[e])&&"function"===typeof a?(b=a.call(this,b.data),this.incomingStaticJobs[d]=b,b.then(function(a){c.worker.postMessage({type:"\x3cstatic-message\x3e",
staticMsg:e,id:d,data:a.data},a.buffers)}).otherwise(function(a){a||(a="Error encountered at method"+e);a.dojoType&&"cancel"===a.dojoType||c.worker.postMessage({type:"\x3cstatic-message\x3e",staticMsg:e,id:d,error:a})}).always(function(){delete c.incomingStaticJobs[d]})):this.worker.postMessage({type:"\x3cstatic-message\x3e",staticMsg:e,id:d,error:e+" message type is not available on the kernel!"})}else{var g=b.connection;if(a=this.connections[g])if(a=a.client){var h=a[f];"function"===typeof h&&(b=
h.call(a,b.data),this.incomingJobs[d]=b,b.then(function(a){c.worker.postMessage({type:"\x3cresponse\x3e",id:d,connection:g,error:a.error,data:a.data},a.buffers)}).otherwise(function(a){a||(a="Error encountered at method"+f);a.dojoType&&"cancel"===a.dojoType||c.worker.postMessage({type:"\x3cresponse\x3e",id:d,connection:g,error:a.message})}).always(function(){delete c.incomingJobs[d]}))}}}}};return c}()});