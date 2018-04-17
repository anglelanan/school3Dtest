// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define("../../../core/declare ../../../core/Scheduler ../../../core/HandleRegistry ../../../core/watchUtils ./StreamDataSupplier ./StreamDataLoader ./PreallocArray ../webgl-engine/lib/Util".split(" "),function(k,q,r,m,t,u,v,n){function f(a){this.budget=this.begin=0;this.performance=a;this.enabled=!0}var l=n.assert,g={TERRAIN:"terrain",SCENE:"scene",SYMBOLOGY:"symbols"},h=new v(20);f.prototype.now=function(){return this.performance.now()};f.prototype.reset=function(a){this.begin=this.now();this.budget=
this.enabled?a:Number.MAX_VALUE};f.prototype.done=function(){return this.enabled&&this.elapsed()>=this.budget};f.prototype.remaining=function(){return Math.max(this.budget-this.elapsed(),0)};f.prototype.elapsed=function(){return this.now()-this.begin};k=k(null,{constructor:function(a,b,c){c=c||n.performance;this._clients=[];this._frameWorker=null;this._budget=new f(c);this._idleFrameWorkers=[];this._idleFrameWorkerRobin=0;this._idleUpdatesStartFired=!1;this._targetReached=!0;this._lastTargetChangeTime=
c.now();this.navigationTimeout=300;this.animatingFrameTimeBudget=10;this.idleFrameWorkerBudget=30;this.idleFrameTimeBudget=50;c={};for(var e in g)c[g[e]]=0;c[g.TERRAIN]=15;c[g.SCENE]=20;c[g.SYMBOLOGY]=5;this._maxGpuMemory=500;this.streamDataLoader=new u(c);this._cameraListeners=new r;this._cameraListeners.add([m.on(a,"navigation","currentViewReachedTarget",this._currentViewReachedTargetHandler.bind(this)),m.on(a,"navigation","targetViewChanged",this._targetViewChangedHandler.bind(this))]);b||(b=q);
this._frameTask=b.addFrameTask({update:this._frameUpdate.bind(this)});this._view=a;this.stats={frameUpdateTime:new p,idleUpdateTime:new p};this.frameUpdateNavigation=null},destroy:function(){this._frameTask.remove();this._frameTask=null;this._cameraListeners.remove();this.streamDataLoader.destroy();this.streamDataLoader=null},setEnableBudget:function(a){this._budget.enabled=!!a},registerClient:function(a,b,c){this._clients.push({client:a,type:b});"function"===typeof a.setMaxGpuMemory&&a.setMaxGpuMemory(this._maxGpuMemory);
return new t(b,this.streamDataLoader,c)},deregisterClient:function(a){for(var b=0;b<this._clients.length;b++)if(this._clients[b].client===a){this._clients[b]=this._clients[this._clients.length-1];this._clients.pop();return}console.warn("deregistering an unregistered client.")},setMaxGpuMemory:function(a){this._maxGpuMemory=a;for(var b=0;b<this._clients.length;b++){var c=this._clients[b].client;"function"===typeof c.setMaxGpuMemory&&c.setMaxGpuMemory(a)}},registerIdleFrameWorker:function(a,b){var c=
this._idleFrameWorkers.some(function(b){return b.client===a});l(!c,"Can only register idle frame workers once per client/layer");l(!b.idleFrame||b.needsUpdate,"needsUpdate has to be specified if idleFrame is specified");this._idleFrameWorkers.push({client:a,callbacks:b});this._isIdle()&&this._idleUpdatesStartFired&&b.idleBegin&&b.idleBegin.call(a)},deregisterIdleFrameWorker:function(a){for(var b=this._idleFrameWorkers,c=0;c<b.length;c++){var e=b[c];if(e.client===a){this._idleUpdatesStartFired&&e.callbacks.idleEnd&&
e.callbacks.idleEnd.call(a);b[c]=b[b.length-1];b.pop();break}}},registerFrameWorker:function(a){l(!this._frameWorker,"Only one (non-idle) per-frame worker supported at the moment");this._frameWorker=a},deregisterFrameWorker:function(){this._frameWorker=null},_targetViewChangedHandler:function(a){this._lastTargetChangeTime=this._budget.now();this._targetReached=!1;this._idleUpdatesStartFired&&(this._idleUpdatesStartFired=!1,this._callWorkersNoScheduling("idleEnd"))},_currentViewReachedTargetHandler:function(a){this._targetReached=
!0},_frameUpdate:function(a){var b=this._isIdle()?this.idleFrameWorkerBudget:this.animatingFrameTimeBudget;this._budget.reset(b-a.spendInFrame);this._view.navigation&&this._view.navigation.step(a.deltaTime);this._view.inputManager&&this._view.inputManager._pinchNavigation&&this._view.inputManager._pinchNavigation.momentum.doFrameUpdate(a.deltaTime);this._frameWorker&&(this._frameWorker(this._budget),this.stats.frameUpdateTime.addSample(this._budget.elapsed()));this._isIdle()&&(this._idleUpdatesStartFired||
(this._callWorkersNoScheduling("idleBegin"),this._idleUpdatesStartFired=!0),this._budget.reset(this.idleFrameTimeBudget-this._budget.elapsed()),3<this._budget.remaining()&&(this._callWorkersStrictScheduling("idleFrame",this._budget),this.stats.idleUpdateTime.addSample(this._budget.elapsed())))},_isIdle:function(){return this._budget.now()-this._lastTargetChangeTime>this.navigationTimeout&&this._targetReached},_callWorkersNoScheduling:function(a){for(var b=this._idleFrameWorkers,c=0;c<b.length;c++){var e=
b[c];e.callbacks[a]&&e.callbacks[a].call(e.client)}},_callWorkersStrictScheduling:function(a,b){var c=this._idleFrameWorkers,e=c.length,d,f,g;h.clear();f=0;for(g=this._idleFrameWorkerRobin;f<e;f++)d=c[g++%e],d.callbacks.needsUpdate&&d.callbacks.needsUpdate.call(d.client)&&(0===h.length&&(this._idleFrameWorkerRobin=g),h.push(d));d=b.now();for(c=d+b.remaining();0<h.length&&d<c;)b.reset((c-d)/h.length),d=h.pop(),d.callbacks[a].call(d.client,b),d=b.now()}});k.ClientType=g;var p=function(){this.addSample=
function(a){this.min=Math.min(this.min,a);this.max=Math.max(this.max,a);this.total+=a;this.numSamples++};this.getAverage=function(){return this.total/this.numSamples};this.reset=function(){this.numSamples=this.total=0;this.min=Number.MAX_VALUE;this.max=-Number.MAX_VALUE};this.reset()};return k});