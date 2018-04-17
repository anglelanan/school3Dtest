// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define(function(){function m(a,b){b=b||Object.create(null);var c=document.createEvent("Event");c.initEvent(a,b.bubbles||!1,b.cancelable||!1);a=2;for(var e;a<z.length;a++)e=z[a],c[e]=b[e]||K[a];c.buttons=b.buttons||0;a=0;a=b.pressure?b.pressure:c.buttons?.5:0;c.x=c.clientX;c.y=c.clientY;c.pointerId=b.pointerId||0;c.width=b.width||0;c.height=b.height||0;c.pressure=a;c.tiltX=b.tiltX||0;c.tiltY=b.tiltY||0;c.pointerType=b.pointerType||"";c.hwTimestamp=b.hwTimestamp||0;c.isPrimary=b.isPrimary||!1;return c}
function A(){this.array=[];this.size=0}function u(a,b,c,e){this.addCallback=a.bind(e);this.removeCallback=b.bind(e);this.changedCallback=c.bind(e);B&&(this.observer=new B(this.mutationWatcher.bind(this)))}function C(a){return"body /shadow-deep/ "+v(a)}function v(a){return'[touch-action\x3d"'+a+'"]'}function p(a){return"{ -ms-touch-action: "+a+"; touch-action: "+a+"; touch-action-delay: none; }"}function L(){if(M){N.forEach(function(a){String(a)===a?(n+=v(a)+p(a)+"\n",D&&(n+=C(a)+p(a)+"\n")):(n+=a.selectors.map(v)+
p(a.rule)+"\n",D&&(n+=a.selectors.map(C)+p(a.rule)+"\n"))});var a=document.createElement("style");a.textContent=n;document.head.appendChild(a)}}function q(a){if(!d.pointermap.has(a))throw a=Error("InvalidPointerId"),a.name="InvalidPointerId",a;}function E(a){if(!a.ownerDocument.contains(a))throw a=Error("InvalidStateError"),a.name="InvalidStateError",a;}var z="bubbles cancelable view detail screenX screenY clientX clientY ctrlKey altKey shiftKey metaKey button relatedTarget pageX pageY".split(" "),
K=[!1,!1,null,null,0,0,0,0,!1,!1,!1,!1,0,null,0,0],F=window.Map&&window.Map.prototype.forEach?Map:A;A.prototype={set:function(a,b){if(void 0===b)return this.delete(a);this.has(a)||this.size++;this.array[a]=b},has:function(a){return void 0!==this.array[a]},delete:function(a){this.has(a)&&(delete this.array[a],this.size--)},get:function(a){return this.array[a]},clear:function(){this.size=this.array.length=0},forEach:function(a,b){return this.array.forEach(function(c,e){a.call(b,c,e,this)},this)}};var G=
"bubbles cancelable view detail screenX screenY clientX clientY ctrlKey altKey shiftKey metaKey button relatedTarget buttons pointerId width height pressure tiltX tiltY pointerType hwTimestamp isPrimary type target currentTarget which pageX pageY timeStamp".split(" "),O=[!1,!1,null,null,0,0,0,0,!1,!1,!1,!1,0,null,0,0,0,0,0,0,0,"",0,!1,"",null,null,0,0,0,0],P={pointerover:1,pointerout:1,pointerenter:1,pointerleave:1},Q="undefined"!==typeof SVGElementInstance,d={pointermap:new F,eventMap:Object.create(null),
captureInfo:Object.create(null),eventSources:Object.create(null),eventSourceList:[],registerSource:function(a,b){var c=b.events;c&&(c.forEach(function(a){b[a]&&(this.eventMap[a]=b[a].bind(b))},this),this.eventSources[a]=b,this.eventSourceList.push(b))},register:function(a){for(var b=this.eventSourceList.length,c=0,e;c<b&&(e=this.eventSourceList[c]);c++)e.register.call(e,a)},unregister:function(a){for(var b=this.eventSourceList.length,c=0,e;c<b&&(e=this.eventSourceList[c]);c++)e.unregister.call(e,
a)},contains:function(a,b){try{return a.contains(b)}catch(c){return!1}},down:function(a){a.bubbles=!0;this.fireEvent("pointerdown",a)},move:function(a){a.bubbles=!0;this.fireEvent("pointermove",a)},up:function(a){a.bubbles=!0;this.fireEvent("pointerup",a)},enter:function(a){a.bubbles=!1;this.fireEvent("pointerenter",a)},leave:function(a){a.bubbles=!1;this.fireEvent("pointerleave",a)},over:function(a){a.bubbles=!0;this.fireEvent("pointerover",a)},out:function(a){a.bubbles=!0;this.fireEvent("pointerout",
a)},cancel:function(a){a.bubbles=!0;this.fireEvent("pointercancel",a)},leaveOut:function(a){this.out(a);this.propagate(a,this.leave,!1)},enterOver:function(a){this.over(a);this.propagate(a,this.enter,!0)},eventHandler:function(a){if(!a._handledByPE){var b=a.type;(b=this.eventMap&&this.eventMap[b])&&b(a);a._handledByPE=!0}},listen:function(a,b){b.forEach(function(b){this.addEvent(a,b)},this)},unlisten:function(a,b){b.forEach(function(b){this.removeEvent(a,b)},this)},addEvent:function(a,b){a.addEventListener(b,
this.boundHandler)},removeEvent:function(a,b){a.removeEventListener(b,this.boundHandler)},makeEvent:function(a,b){this.captureInfo[b.pointerId]&&(b.relatedTarget=null);a=new m(a,b);b.preventDefault&&(a.preventDefault=b.preventDefault);a._target=a._target||b.target;return a},fireEvent:function(a,b){a=this.makeEvent(a,b);return this.dispatchEvent(a)},cloneEvent:function(a){for(var b=Object.create(null),c,e=0;e<G.length;e++)c=G[e],b[c]=a[c]||O[e],Q&&("target"===c||"relatedTarget"===c)&&b[c]instanceof
SVGElementInstance&&(b[c]=b[c].correspondingUseElement);a.preventDefault&&(b.preventDefault=function(){a.preventDefault()});return b},getTarget:function(a){var b=this.captureInfo[a.pointerId];if(!b)return a._target;if(a._target===b||!(a.type in P))return b},propagate:function(a,b,c){for(var e=a.target,d=[];!e.contains(a.relatedTarget)&&e!==document;)d.push(e),e=e.parentNode;c&&d.reverse();d.forEach(function(c){a.target=c;b.call(this,a)},this)},setCapture:function(a,b){this.captureInfo[a]&&this.releaseCapture(a);
this.captureInfo[a]=b;var c=new m("gotpointercapture");c.pointerId=a;this.implicitRelease=this.releaseCapture.bind(this,a);document.addEventListener("pointerup",this.implicitRelease);document.addEventListener("pointercancel",this.implicitRelease);c._target=b;this.asyncDispatchEvent(c)},releaseCapture:function(a){var b=this.captureInfo[a];if(b){var c=new m("lostpointercapture");c.pointerId=a;this.captureInfo[a]=void 0;document.removeEventListener("pointerup",this.implicitRelease);document.removeEventListener("pointercancel",
this.implicitRelease);c._target=b;this.asyncDispatchEvent(c)}},dispatchEvent:function(a){var b=this.getTarget(a);if(b)return b.dispatchEvent(a)},asyncDispatchEvent:function(a){requestAnimationFrame(this.dispatchEvent.bind(this,a))}};d.boundHandler=d.eventHandler.bind(d);var h={shadow:function(a){if(a)return a.shadowRoot||a.webkitShadowRoot},canTarget:function(a){return a&&!!a.elementFromPoint},targetingShadow:function(a){a=this.shadow(a);if(this.canTarget(a))return a},olderShadow:function(a){var b=
a.olderShadowRoot;!b&&(a=a.querySelector("shadow"))&&(b=a.olderShadowRoot);return b},allShadows:function(a){var b=[];for(a=this.shadow(a);a;)b.push(a),a=this.olderShadow(a);return b},searchRoot:function(a,b,c){if(a){var e=a.elementFromPoint(b,c),d;for(d=this.targetingShadow(e);d;){if(a=d.elementFromPoint(b,c))return e=this.targetingShadow(a),this.searchRoot(e,b,c)||a;d=this.olderShadow(d)}return e}},owner:function(a){for(;a.parentNode;)a=a.parentNode;a.nodeType!==Node.DOCUMENT_NODE&&a.nodeType!==
Node.DOCUMENT_FRAGMENT_NODE&&(a=document);return a},findTarget:function(a){var b=a.clientX,c=a.clientY;a=this.owner(a.target);a.elementFromPoint(b,c)||(a=document);return this.searchRoot(a,b,c)}},S=Array.prototype.forEach.call.bind(Array.prototype.forEach),T=Array.prototype.map.call.bind(Array.prototype.map),U=Array.prototype.slice.call.bind(Array.prototype.slice),V=Array.prototype.filter.call.bind(Array.prototype.filter),B=window.MutationObserver||window.WebKitMutationObserver,W={subtree:!0,childList:!0,
attributes:!0,attributeOldValue:!0,attributeFilter:["touch-action"]};u.prototype={watchSubtree:function(a){this.observer&&h.canTarget(a)&&this.observer.observe(a,W)},enableOnSubtree:function(a){this.watchSubtree(a);a===document&&"complete"!==document.readyState?this.installOnLoad():this.installNewSubtree(a)},installNewSubtree:function(a){S(this.findElements(a),this.addElement,this)},findElements:function(a){return a.querySelectorAll?a.querySelectorAll("[touch-action]"):[]},removeElement:function(a){this.removeCallback(a)},
addElement:function(a){this.addCallback(a)},elementChanged:function(a,b){this.changedCallback(a,b)},concatLists:function(a,b){return a.concat(U(b))},installOnLoad:function(){document.addEventListener("readystatechange",function(){"complete"===document.readyState&&this.installNewSubtree(document)}.bind(this))},isElement:function(a){return a.nodeType===Node.ELEMENT_NODE},flattenMutationTree:function(a){var b=T(a,this.findElements,this);b.push(V(a,this.isElement));return b.reduce(this.concatLists,[])},
mutationWatcher:function(a){a.forEach(this.mutationHandler,this)},mutationHandler:function(a){"childList"===a.type?(this.flattenMutationTree(a.addedNodes).forEach(this.addElement,this),this.flattenMutationTree(a.removedNodes).forEach(this.removeElement,this)):"attributes"===a.type&&this.elementChanged(a.target,a.oldValue)}};var N=["none","auto","pan-x","pan-y",{rule:"pan-x pan-y",selectors:["pan-x pan-y","pan-y pan-x"]}],n="",M=window.PointerEvent||window.MSPointerEvent,D=!window.ShadowDOMPolyfill&&
document.head.createShadowRoot,f=d.pointermap,w=[1,4,2,8,16],k=!1;try{k=1===(new MouseEvent("test",{buttons:1})).buttons}catch(a){}var x={POINTER_ID:1,POINTER_TYPE:"mouse",events:["mousedown","mousemove","mouseup","mouseover","mouseout"],register:function(a){d.listen(a,this.events)},unregister:function(a){d.unlisten(a,this.events)},lastTouches:[],isEventSimulatedFromTouch:function(a){var b=this.lastTouches,c=a.clientX;a=a.clientY;for(var d=0,R=b.length,f;d<R&&(f=b[d]);d++){var g=Math.abs(a-f.y);if(25>=
Math.abs(c-f.x)&&25>=g)return!0}},prepareEvent:function(a){var b=d.cloneEvent(a),c=b.preventDefault;b.preventDefault=function(){a.preventDefault();c()};b.pointerId=this.POINTER_ID;b.isPrimary=!0;b.pointerType=this.POINTER_TYPE;return b},prepareButtonsForMove:function(a,b){var c=f.get(this.POINTER_ID);a.buttons=0!==b.which&&c?c.buttons:0;b.buttons=a.buttons},mousedown:function(a){if(!this.isEventSimulatedFromTouch(a)){var b=f.get(this.POINTER_ID),c=this.prepareEvent(a);k||(c.buttons=w[c.button],b&&
(c.buttons|=b.buttons),a.buttons=c.buttons);f.set(this.POINTER_ID,a);b&&0!==b.buttons?d.move(c):d.down(c)}},mousemove:function(a){if(!this.isEventSimulatedFromTouch(a)){var b=this.prepareEvent(a);k||this.prepareButtonsForMove(b,a);b.button=-1;f.set(this.POINTER_ID,a);d.move(b)}},mouseup:function(a){if(!this.isEventSimulatedFromTouch(a)){var b=f.get(this.POINTER_ID),c=this.prepareEvent(a);if(!k){var e=w[c.button];c.buttons=b?b.buttons&~e:0;a.buttons=c.buttons}f.set(this.POINTER_ID,a);c.buttons&=~w[c.button];
0===c.buttons?d.up(c):d.move(c)}},mouseover:function(a){if(!this.isEventSimulatedFromTouch(a)){var b=this.prepareEvent(a);k||this.prepareButtonsForMove(b,a);b.button=-1;f.set(this.POINTER_ID,a);d.enterOver(b)}},mouseout:function(a){if(!this.isEventSimulatedFromTouch(a)){var b=this.prepareEvent(a);k||this.prepareButtonsForMove(b,a);b.button=-1;d.leaveOut(b)}},cancel:function(a){a=this.prepareEvent(a);d.cancel(a);this.deactivateMouse()},deactivateMouse:function(){f.delete(this.POINTER_ID)}},X=d.captureInfo,
Y=h.findTarget.bind(h),y=h.allShadows.bind(h),g=d.pointermap,H,l={events:["touchstart","touchmove","touchend","touchcancel"],register:function(a){H.enableOnSubtree(a)},unregister:function(a){},elementAdded:function(a){var b=a.getAttribute("touch-action"),c=this.touchActionToScrollType(b);c&&(a._scrollType=c,d.listen(a,this.events),y(a).forEach(function(a){a._scrollType=c;d.listen(a,this.events)},this))},elementRemoved:function(a){a._scrollType=void 0;d.unlisten(a,this.events);y(a).forEach(function(a){a._scrollType=
void 0;d.unlisten(a,this.events)},this)},elementChanged:function(a,b){var c=a.getAttribute("touch-action"),d=this.touchActionToScrollType(c);b=this.touchActionToScrollType(b);d&&b?(a._scrollType=d,y(a).forEach(function(a){a._scrollType=d},this)):b?this.elementRemoved(a):d&&this.elementAdded(a)},scrollTypes:{EMITTER:"none",XSCROLLER:"pan-x",YSCROLLER:"pan-y",SCROLLER:/^(?:pan-x pan-y)|(?:pan-y pan-x)|auto$/},touchActionToScrollType:function(a){var b=this.scrollTypes;if("none"===a)return"none";if(a===
b.XSCROLLER)return"X";if(a===b.YSCROLLER)return"Y";if(b.SCROLLER.exec(a))return"XY"},POINTER_TYPE:"touch",firstTouch:null,isPrimaryTouch:function(a){return this.firstTouch===a.identifier},setPrimaryTouch:function(a){if(0===g.size||1===g.size&&g.has(1))this.firstTouch=a.identifier,this.firstXY={X:a.clientX,Y:a.clientY},this.scrolling=!1,this.cancelResetClickCount()},removePrimaryPointer:function(a){a.isPrimary&&(this.firstXY=this.firstTouch=null,this.resetClickCount())},clickCount:0,resetId:null,resetClickCount:function(){var a=
function(){this.clickCount=0;this.resetId=null}.bind(this);this.resetId=setTimeout(a,200)},cancelResetClickCount:function(){this.resetId&&clearTimeout(this.resetId)},typeToButtons:function(a){var b=0;if("touchstart"===a||"touchmove"===a)b=1;return b},touchToPointer:function(a){var b=this.currentTouchEvent,c=d.cloneEvent(a),e=c.pointerId=a.identifier+2;c.target=X[e]||Y(c);c.bubbles=!0;c.cancelable=!0;c.detail=this.clickCount;c.button=0;c.buttons=this.typeToButtons(b.type);c.width=a.radiusX||a.webkitRadiusX||
0;c.height=a.radiusY||a.webkitRadiusY||0;c.pressure=a.force||a.webkitForce||.5;c.isPrimary=this.isPrimaryTouch(a);c.pointerType=this.POINTER_TYPE;c.altKey=b.altKey;c.ctrlKey=b.ctrlKey;c.metaKey=b.metaKey;c.shiftKey=b.shiftKey;var f=this;c.preventDefault=function(){f.scrolling=!1;f.firstXY=null;b.preventDefault()};return c},processTouches:function(a,b){var c=a.changedTouches;this.currentTouchEvent=a;a=0;for(var d;a<c.length;a++)d=c[a],b.call(this,this.touchToPointer(d))},shouldScroll:function(a){if(this.firstXY){var b;
b=a.currentTarget._scrollType;if("none"===b)b=!1;else if("XY"===b)b=!0;else{a=a.changedTouches[0];var c="Y"===b?"X":"Y";b=Math.abs(a["client"+b]-this.firstXY[b])>=Math.abs(a["client"+c]-this.firstXY[c])}this.firstXY=null;return b}},findTouch:function(a,b){for(var c=0,d=a.length,f;c<d&&(f=a[c]);c++)if(f.identifier===b)return!0},vacuumTouches:function(a){var b=a.touches;if(g.size>=b.length){var c=[];g.forEach(function(a,d){1===d||this.findTouch(b,d-2)||c.push(a.out)},this);c.forEach(this.cancelOut,
this)}},touchstart:function(a){this.vacuumTouches(a);this.setPrimaryTouch(a.changedTouches[0]);this.dedupSynthMouse(a);this.scrolling||(this.clickCount++,this.processTouches(a,this.overDown))},overDown:function(a){g.set(a.pointerId,{target:a.target,out:a,outTarget:a.target});d.enterOver(a);d.down(a)},touchmove:function(a){this.scrolling||(this.shouldScroll(a)?(this.scrolling=!0,this.touchcancel(a)):(a.preventDefault(),this.processTouches(a,this.moveOverOut)))},moveOverOut:function(a){var b=g.get(a.pointerId);
if(b){var c=b.out,e=b.outTarget;d.move(a);c&&e!==a.target&&(c.relatedTarget=a.target,a.relatedTarget=e,c.target=e,a.target?(d.leaveOut(c),d.enterOver(a)):(a.target=e,a.relatedTarget=null,this.cancelOut(a)));b.out=a;b.outTarget=a.target}},touchend:function(a){this.dedupSynthMouse(a);this.processTouches(a,this.upOut)},upOut:function(a){this.scrolling||(d.up(a),d.leaveOut(a));this.cleanUpPointer(a)},touchcancel:function(a){this.processTouches(a,this.cancelOut)},cancelOut:function(a){d.cancel(a);d.leaveOut(a);
this.cleanUpPointer(a)},cleanUpPointer:function(a){g.delete(a.pointerId);this.removePrimaryPointer(a)},dedupSynthMouse:function(a){var b=x.lastTouches;a=a.changedTouches[0];this.isPrimaryTouch(a)&&(a={x:a.clientX,y:a.clientY},b.push(a),b=function(a,b){b=a.indexOf(b);-1<b&&a.splice(b,1)}.bind(null,b,a),setTimeout(b,2500))}};H=new u(l.elementAdded,l.elementRemoved,l.elementChanged,l);var I=d.pointermap,Z=window.MSPointerEvent&&"number"===typeof window.MSPointerEvent.MSPOINTER_TYPE_MOUSE,J={events:"MSPointerDown MSPointerMove MSPointerUp MSPointerOut MSPointerOver MSPointerCancel MSGotPointerCapture MSLostPointerCapture".split(" "),
register:function(a){d.listen(a,this.events)},unregister:function(a){d.unlisten(a,this.events)},POINTER_TYPES:["","unavailable","touch","pen","mouse"],prepareEvent:function(a){var b=a;Z&&(b=d.cloneEvent(a),b.pointerType=this.POINTER_TYPES[a.pointerType]);return b},cleanup:function(a){I.delete(a)},MSPointerDown:function(a){I.set(a.pointerId,a);a=this.prepareEvent(a);d.down(a)},MSPointerMove:function(a){a=this.prepareEvent(a);d.move(a)},MSPointerUp:function(a){var b=this.prepareEvent(a);d.up(b);this.cleanup(a.pointerId)},
MSPointerOut:function(a){a=this.prepareEvent(a);d.leaveOut(a)},MSPointerOver:function(a){a=this.prepareEvent(a);d.enterOver(a)},MSPointerCancel:function(a){var b=this.prepareEvent(a);d.cancel(b);this.cleanup(a.pointerId)},MSLostPointerCapture:function(a){a=d.makeEvent("lostpointercapture",a);d.dispatchEvent(a)},MSGotPointerCapture:function(a){a=d.makeEvent("gotpointercapture",a);d.dispatchEvent(a)}},r,t;window.navigator.msPointerEnabled?(r=function(a){q(a);E(this);0!==d.pointermap.get(a).buttons&&
this.msSetPointerCapture(a)},t=function(a){q(a);this.msReleasePointerCapture(a)}):(r=function(a){q(a);E(this);0!==d.pointermap.get(a).buttons&&d.setCapture(a,this)},t=function(a){q(a);d.releaseCapture(a,this)});var aa=window.PointerEvent||window.MSPointerEvent;return{dispatcher:d,Installer:u,PointerEvent:m,PointerMap:F,targetFinding:h,applyGlobal:function(){L();window.PointerEvent||(window.PointerEvent=m,window.navigator.msPointerEnabled?(Object.defineProperty(window.navigator,"maxTouchPoints",{value:window.navigator.msMaxTouchPoints,
enumerable:!0}),d.registerSource("ms",J)):(d.registerSource("mouse",x),void 0!==window.ontouchstart&&d.registerSource("touch",l)),d.register(document));window.Element&&!Element.prototype.setPointerCapture&&Object.defineProperties(Element.prototype,{setPointerCapture:{value:r},releasePointerCapture:{value:t}})},applyLocal:function(a){aa||(window.PointerEvent||(window.navigator.msPointerEnabled?d.registerSource("ms",J):(d.registerSource("mouse",x),void 0!==window.ontouchstart&&d.registerSource("touch",
l)),d.register(document)),window.Element&&!Element.prototype.setPointerCapture&&(a.setPointerCapture=r.bind(a),a.releasePointerCapture=t.bind(a)),a.getAttribute("touch-action")||a.setAttribute("touch-action","none"))}}});