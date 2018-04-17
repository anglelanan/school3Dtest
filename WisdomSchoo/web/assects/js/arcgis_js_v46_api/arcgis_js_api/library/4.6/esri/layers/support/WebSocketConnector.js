// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("dojo/_base/lang dojo/io-query dojo/Deferred ../../core/Accessor ../../core/Evented ../../core/Promise ../../core/promiseUtils ../../core/watchUtils ../../core/Error".split(" "),function(d,h,f,k,l,m,g,n,e){return k.createSubclass([l,m],{declareSubclass:"esri.layers.support.WebSocketConnector",initialize:function(){var a=null;this.socketUrls.length||(a=Error("No urls passed to WebSocketConnector. No live connection possible"));"WebSocket"in window||(a=Error("The browser does not support Web Sockets. No live connection possible"));
if(a){var b=new f;this.addResolvingPromise(b.promise);b.reject(a)}this.queryParams&&this.queryParams.token&&this._set("tokenNeeded",!0)},_socket:null,_connectPromise:null,_disconnectPromise:null,properties:{currentSocketUrl:{value:null,readOnly:!0},queryParams:null,socketUrls:{value:[]},tokenNeeded:{value:!1},connectionError:{value:null,type:e,readOnly:!0},connectionStatus:{value:"disconnected",readOnly:!0}},connect:function(){var a=this.connectionStatus;if("connected"===a||"connecting"===a)return this._connectPromise;
if("disconnected"===this.connectionStatus)return this._set("connectionStatus","connecting"),this._connect();if("disconnecting"===this.connectionStatus)return this._connectPromise=null,this._disconnectPromise||(this._disconnectPromise=n.once(this,"connectionStatus").then(function(a){if("disconnected"===a.value)return this._connect()}.bind(this))),this._disconnectPromise},disconnect:function(){var a=this.connectionStatus;"connected"===a?(this._set("connectionStatus","disconnecting"),this._socket?this._socket.close():
this._set("connectionStatus","disconnected")):"connecting"===a&&this._connectPromise.then(function(){this.disconnect()}.bind(this))},send:function(a){this._socket&&("object"===typeof a&&(a=JSON.stringify(a)),this._socket.send(a))},_connect:function(){this._connectPromise&&(this._connectPromise=null);var a=new f;this._connectPromise=a;this._getWebSocketToken().then(function(a){a&&(this.queryParams.token=a);a=this._makeCurrentUrl();a=new WebSocket(a);a.onopen=d.hitch(this,this._handleSocketOpen);a.onclose=
d.hitch(this,this._handleSocketClose);a.onmessage=d.hitch(this,this._handleSocketMessage);this._socket=a}.bind(this)).otherwise(function(a){a=new e("web-socket-connector:connect","Could not get websocket token for secured service",a);this._set("connectionError",a);this._connectPromise.reject(a)}.bind(this));return a.promise},_getWebSocketToken:function(){var a=this.queryParams,a=a&&a.token,b=this.tokenNeeded;return a?g.resolve(a):b?this.layerSource.getWebSocketToken():g.resolve()},_makeCurrentUrl:function(){var a=
this.queryParams,b=this.socketUrls,c;1!==b.length&&this.currentSocketUrl?(c=b.indexOf(this.currentSocketUrl),c=c>=b.length-1?0:c+1,b=b[c]):b=b[0];this._set("currentSocketUrl",b);a&&(b+="?"+h.objectToQuery(a));return b},_handleSocketOpen:function(){this._set("connectionStatus","connected");this._set("connectionError",null);this._disconnectPromise=null;this._connectPromise&&this._connectPromise.resolve()},_handleSocketClose:function(a){var b,c=null;this.queryParams&&(this.queryParams.token=null);if(!a.wasClean||
a.code)1001===a.code?b="Service is going away.":4400===a.code?b=a.reason||"Invalid url parameters. Check filter properties.":4404===a.code?b="Service not found":4401===a.code||4403===a.code?b="Not authorized":a.wasClean||(b=a.reason||"Unknown reason"),b&&(c=new e("web-socket-connector:connection closed","Connection failed: "+b),this._set("connectionError",c),this._connectPromise&&this._connectPromise.reject(c));this._connectPromise=null;this._set("connectionStatus","disconnected");this._socket=null},
_handleSocketMessage:function(a){this.emit("data-received",a.data)}})});