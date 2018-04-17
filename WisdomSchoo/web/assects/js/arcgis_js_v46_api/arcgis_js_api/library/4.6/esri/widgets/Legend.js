// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ./Widget ../core/HandleRegistry ../core/watchUtils ./Legend/LegendViewModel dojo/i18n!./Legend/nls/Legend ../core/lang dojox/gfx ../core/accessorSupport/decorators ./support/widget".split(" "),function(y,z,r,k,t,u,n,v,p,w,x,h,e){return function(q){function c(a){a=q.call(this)||this;a._handleRegistry=new u;a.activeLayerInfos=null;a.basemapLegendVisible=!1;a.groundLegendVisible=!1;a.layerInfos=null;a.view=
null;a.viewModel=new v;return a}r(c,q);c.prototype.postInitialize=function(){var a=this;this.own(n.on(this,"activeLayerInfos","change",function(){return a._refreshActiveLayerInfos(a.activeLayerInfos)}))};c.prototype.destroy=function(){this._handleRegistry.destroy();this._handleRegistry=null};c.prototype.render=function(){var a=this,f=this.activeLayerInfos,b=e.join("esri-legend","esri-widget"),f=f&&f.toArray().map(function(b){return a._renderLegendForLayer(b)}).filter(function(a){return!!a});return e.tsx("div",
{class:b},f&&f.length?f:e.tsx("div",{class:"esri-legend__message"},p.noLegend))};c.prototype._refreshActiveLayerInfos=function(a){var f=this;this._handleRegistry.removeAll();a.forEach(function(a){return f._renderOnActiveLayerInfoChange(a)});this.scheduleRender()};c.prototype._renderOnActiveLayerInfoChange=function(a){var f=this,b=n.init(a,"version",function(){return f.scheduleRender()});this._handleRegistry.add(b,"version_"+a.layer.uid);a.children.forEach(function(a){return f._renderOnActiveLayerInfoChange(a)})};
c.prototype._renderLegendForLayer=function(a){var f=this;if(!a.ready)return null;var b=!!a.children.length,c="esri-legend__"+a.layer.uid+"-version-"+a.version;if(b){var d=a.children.map(function(a){return f._renderLegendForLayer(a)}).toArray(),b=(g={},g["esri-legend__group-layer"]=b,g);return e.tsx("div",{key:c,class:"esri-legend__service",classes:b},e.tsx("p",{class:"esri-legend__service-label"},a.title),d)}if((b=a.legendElements)&&!b.length)return null;g=b.map(function(b){return f._renderLegendForElement(b,
a.layer)}).filter(function(a){return!!a});if(!g.length)return null;b=(d={},d["esri-legend__group-layer-child"]=!!a.parent,d);return e.tsx("div",{key:c,class:"esri-legend__service",classes:b},e.tsx("p",{class:"esri-legend__service-label"},a.title),e.tsx("div",{class:"esri-legend__layer"},g));var g};c.prototype._renderLegendForElement=function(a,f,b){var c=this,d="color-ramp"===a.type,g="opacity-ramp"===a.type,m="size-ramp"===a.type,h=null;if("symbol-table"===a.type||m){var l=a.infos.map(function(b){return c._renderLegendForElementInfo(b,
f,m,a.legendType)}).filter(function(a){return!!a});l.length&&(h=e.tsx("div",{class:"esri-legend__layer-body"},l))}else if(d||g)h=this._renderLegendForRamp(a.infos,a.overlayColor,g);if(!h)return null;var l=a.title,k=null;"string"===typeof l?k=l:l&&(d=this._getTitle(l,d||g),k=l.title?l.title+" ("+d+")":d);b=b?"esri-legend__layer-child-table":"esri-legend__layer-table";d=k?e.tsx("div",{class:"esri-legend__layer-caption"},k):null;return e.tsx("div",{class:b},d,h)};c.prototype._renderLegendForRamp=function(a,
f,b){var c=a.length-1,d=null,d=2<c?25*c:50,g=document.createElement("div");g.className="esri-legend__color-ramp "+(b?"esri-legend__opacity-ramp":"");g.style.height=d+"px";b=x.createSurface(g,"100%",d);try{a.forEach(function(a,b){a.offset=b/c}),b.createRect({x:0,y:0,width:"100%",height:d}).setFill({type:"linear",x1:0,y1:0,x2:0,y2:d,colors:a}).setStroke(null),f&&0<f.a&&b.createRect({x:0,y:0,width:"100%",height:d}).setFill(f).setStroke(null)}catch(m){b.clear(),b.destroy()}if(!b)return null;a=a.filter(function(a){return!!a.label}).map(function(a){return e.tsx("div",
{class:"esri-legend__ramp-label"},a.label)});d={height:d+"px"};return e.tsx("div",{class:"esri-legend__layer-row"},e.tsx("div",{class:"esri-legend__layer-cell esri-legend__layer-cell--symbols",styles:{width:"24px"}},e.tsx("div",{class:"esri-legend__ramps",bind:g,afterCreate:this._attachToNode})),e.tsx("div",{class:"esri-legend__layer-cell esri-legend__layer-cell--info"},e.tsx("div",{class:"esri-legend__ramp-labels",styles:d},a)))};c.prototype._renderLegendForElementInfo=function(a,f,b,c){if(a.type)return this._renderLegendForElement(a,
f,!0);var d=null;c=this._isImageryStretchedLegend(f,c);a.symbol&&a.preview?d=e.tsx("div",{class:"esri-legend__symbol",bind:a.preview,afterCreate:this._attachToNode}):a.src&&(d=this._renderImage(a,f,c));if(!d)return null;f=(g={},g["esri-legend__imagery-layer-info--stretched"]=c,g);b=(h={},h["esri-legend__imagery-layer-info--stretched"]=c,h["esri-legend__size-ramp"]=!c&&b,h);return e.tsx("div",{class:"esri-legend__layer-row"},e.tsx("div",{class:"esri-legend__layer-cell esri-legend__layer-cell--symbols",
classes:b},d),e.tsx("div",{class:"esri-legend__layer-cell esri-legend__layer-cell--info",classes:f},a.label||""));var g,h};c.prototype._attachToNode=function(a){a.appendChild(this)};c.prototype._renderImage=function(a,c,b){var f=a.src,d=a.opacity;b=(g={},g["esri-legend__imagery-layer-image--stretched"]=b,g["esri-legend__symbol"]=!b,g);return e.tsx("img",{src:f,border:0,width:a.width,height:a.height,classes:b,styles:{opacity:""+(null!=d?d:c.opacity)}});var g};c.prototype._isImageryStretchedLegend=
function(a,c){return!!(c&&"Stretched"===c&&10.3<=a.version&&"esri.layers.ImageryLayer"===a.declaredClass)};c.prototype._getTitle=function(a,c){var b=null;c?b=a.ratioPercentTotal?"showRatioPercentTotal":a.ratioPercent?"showRatioPercent":a.ratio?"showRatio":a.normField?"showNormField":a.field?"showField":null:c||(b=a.normField?"showNormField":a.normByPct?"showNormPct":a.field?"showField":null);return b?w.substitute({field:a.field,normField:a.normField},p[b]):null};k([h.aliasOf("viewModel.activeLayerInfos"),
e.renderable()],c.prototype,"activeLayerInfos",void 0);k([h.aliasOf("viewModel.basemapLegendVisible"),e.renderable()],c.prototype,"basemapLegendVisible",void 0);k([h.aliasOf("viewModel.groundLegendVisible"),e.renderable()],c.prototype,"groundLegendVisible",void 0);k([h.aliasOf("viewModel.layerInfos"),e.renderable()],c.prototype,"layerInfos",void 0);k([h.aliasOf("viewModel.view"),e.renderable()],c.prototype,"view",void 0);k([h.property(),e.renderable()],c.prototype,"viewModel",void 0);return c=k([h.subclass("esri.widgets.Legend")],
c)}(h.declared(t))});