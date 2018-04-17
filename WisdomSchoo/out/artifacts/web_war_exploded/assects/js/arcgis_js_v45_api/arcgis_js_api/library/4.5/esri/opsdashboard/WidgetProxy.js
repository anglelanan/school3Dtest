// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/extendsHelper ../core/tsSupport/decorateHelper ../core/typescript dojo/_base/lang dojo/when dojo/promise/all dojo/Deferred ../geometry/support/jsonUtils ./core/messageHandler ./core/errorMessages ./core/ExtensionBase ./FeatureActionFeatures".split(" "),function(v,w,p,k,l,q,e,m,f,r,g,d,t,u){return function(n){function c(){var a=n.call(this)||this;a.mapWidgetProxy=null;a.mapWidgetId=null;a.dataSourceProxies=null;a.hasFeatureActions=!1;a.hasDefaultFeatureAction=
!1;a.featureActionFeatures=null;a.dataSourceConfigs=null;return a}p(c,n);c.prototype._initializeResponseReceived=function(a){var b=this;a&&"object"===typeof a||(new f).reject(Error(d.invalidArguments));return this.inherited(arguments).then(function(){b.hasFeatureActions=a.supportFeatureActions;b.hasDefaultFeatureAction=a.supportDefaultFeatureAction;var h=e(b._setupMapWidgetProxy()),c=e(b._setupDataSourceProxies()),d=e(b._setupFeatureActionFeatures());return m([h,c,d])})};c.prototype._setupDataSourceProxies=
function(){var a=this;this.dataSourceConfigs||(this.dataSourceConfigs=[]);if(0!==this.dataSourceConfigs.length){var b=[];this.dataSourceConfigs.forEach(function(h){b.push(a.getDataSourceProxy(h.dataSourceId))});return m(b).then(function(b){a.dataSourceProxies=b})}};c.prototype._setupMapWidgetProxy=function(){var a=this;if(this.mapWidgetId)return this.getMapWidgetProxy(this.mapWidgetId).then(function(b){a.mapWidgetProxy=b})};c.prototype._setupFeatureActionFeatures=function(){var a=this;if(this.hasFeatureActions&&
0!==this.dataSourceConfigs.length){var b=this.dataSourceConfigs[0].dataSourceId;if(this.featureActionFeatures)this.featureActionFeatures.dataSourceProxy.id!==b&&(this.featureActionFeatures=null);else return this.getDataSourceProxy(b).then(function(b){a.featureActionFeatures=new u(b)})}else this.featureActionFeatures=null};c.prototype._messageReceived=function(a){switch(a.functionName.toLowerCase()){case "datasourceexpired":case "datasourceupdated":this._dataSourceExpired(a.args.dataSourceId);break;
case "drawcomplete":this._drawComplete(a.args)}};c.prototype._dataSourceExpired=function(a){var b=this;this.getDataSourceProxy(a).then(function(a){var c=b.getDataSourceConfig(a);b.dataSourceExpired(a,c);b.emit("data-source-expired",{dataSourceProxy:a,dataSourceConfig:c})})};c.prototype.dataSourceExpired=function(a,b){};c.prototype.getDataSourceConfig=function(a){if(!this._isHostInitialized())throw Error(d.hostNotReady);var b=a;"object"===typeof a&&(b=a.id);for(a=0;a<this.dataSourceConfigs.length;a++)if(this.dataSourceConfigs[a].dataSourceId===
b)return this.dataSourceConfigs[a];return null};c.prototype._dataSourceRemoved=function(a){this.inherited(arguments);if(this.dataSourceConfigs){for(var b=!1,c=0;c<this.dataSourceConfigs.length&&!b;c++)this.dataSourceConfigs[c].dataSourceId===a&&(this.dataSourceConfigs.splice(c,1),b=!0);b&&this._setupFeatureActionFeatures()}};c.prototype._mapWidgetRemoved=function(a){this.inherited(arguments);this.mapWidgetProxy&&this.mapWidgetProxy.id===a&&(this.mapWidgetId=this.mapWidgetProxy=null)};c.prototype.activateDrawingToolbar=
function(a,b){if(!this._isHostInitialized())return(new f).reject(Error(d.hostNotReady));b||(b=this.mapWidgetProxy);if(!b)return(new f).reject(Error(d.invalidArguments));var c=b;"object"===typeof b&&(c=b.id);return g._sendMessageWithReply({functionName:"activateDrawingToolbar",args:q.mixin({mapWidgetId:c},a)}).then(function(){return!0},function(){return!1})};c.prototype.deactivateDrawingToolbar=function(a){if(!this._isHostInitialized())throw Error(d.hostNotReady);a||(a=this.mapWidgetProxy);if(!a)throw Error(d.invalidArguments);
var b=a;"object"===typeof a&&(b=a.id);g._sendMessage({functionName:"deactivateDrawingToolbar",args:{mapWidgetId:b}})};c.prototype._drawComplete=function(a){a.cancelled?(this.drawingToolbarDeactivated(),this.emit("drawing-toolbar-deactivated")):(a=r.fromJSON(a.geometry),this.toolbarDrawComplete(a),this.emit("toolbar-draw-complete",{geometry:a}))};c.prototype.toolbarDrawComplete=function(a){};c.prototype.drawingToolbarDeactivated=function(){};c.prototype.executeDefaultFeatureAction=function(a){if(!this._isHostInitialized())throw Error(d.hostNotReady);
if(this.hasDefaultFeatureAction&&Array.isArray(a)&&0!==a.length&&Array.isArray(this.dataSourceProxies)&&0!==this.dataSourceProxies.length){var b=this.dataSourceProxies[0],c=[];a.forEach(function(a){var d=a;if("object"===typeof a){if(!a.attributes||!a.attributes[b.objectIdFieldName])return;d=a.attributes[b.objectIdFieldName]}c.push(d)});0!==c.length&&g._sendMessage({functionName:"executeDefaultFeatureAction",args:{dataSourceId:b.id,objectIds:c}})}};k([l.shared("esri.opsdashboard.WidgetProxy")],c.prototype,
"declaredClass",void 0);return c=k([l.subclass()],c)}(t)});