// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/accessorSupport/decorators ./support/widget ./Widget ./Attribution/AttributionViewModel ../core/watchUtils".split(" "),function(m,n,h,d,c,e,k,f,l){return function(g){function b(a){a=g.call(this)||this;a._isOpen=!1;a._attributionTextOverflowed=!1;a._prevSourceNodeHeight=0;a.itemDelimiter=" | ";a.view=null;a.viewModel=new f;return a}h(b,g);b.prototype.postInitialize=function(){var a=this;this.own(l.on(this,
"viewModel.items","change",function(){return a.scheduleRender()}))};Object.defineProperty(b.prototype,"attributionText",{get:function(){return this.viewModel.items.map(function(a){return a.text}).join(this.itemDelimiter)},enumerable:!0,configurable:!0});b.prototype.render=function(){var a=(b={},b["esri-attribution--open"]=this._isOpen,b);return e.tsx("div",{bind:this,class:"esri-attribution esri-widget",classes:a,onclick:this._toggleState,onkeydown:this._toggleState},this._renderSourcesNode(),e.tsx("div",
{class:"esri-attribution__powered-by"},"Powered by ",e.tsx("a",{target:"_blank",href:"http://www.esri.com/",class:"esri-attribution__link"},"Esri")));var b};b.prototype._renderSourcesNode=function(){var a=this._isOpen,b=this._isInteractive(),d=this.attributionText,a=(c={},c["esri-attribution__sources--open"]=a,c["esri-interactive"]=b,c);return e.tsx("div",{afterCreate:this._afterSourcesNodeCreate,afterUpdate:this._afterSourcesNodeUpdate,bind:this,class:"esri-attribution__sources",classes:a,innerHTML:d,
role:b?"button":void 0,tabIndex:b?0:-1});var c};b.prototype._afterSourcesNodeCreate=function(a){this._prevSourceNodeHeight=a.clientWidth};b.prototype._afterSourcesNodeUpdate=function(a){var b=!1,c=a.clientHeight;a=a.scrollWidth>=a.clientWidth;var d=this._attributionTextOverflowed!==a;this._attributionTextOverflowed=a;d&&(b=!0);this._isOpen&&(a=c<this._prevSourceNodeHeight,this._prevSourceNodeHeight=c,a&&(this._isOpen=!1,b=!0));b&&this.scheduleRender()};b.prototype._toggleState=function(){this._isInteractive()&&
(this._isOpen=!this._isOpen)};b.prototype._isInteractive=function(){return this._isOpen||this._attributionTextOverflowed};d([c.property({dependsOn:["viewModel.items.length","itemDelimiter"],readOnly:!0}),e.renderable()],b.prototype,"attributionText",null);d([c.property(),e.renderable()],b.prototype,"itemDelimiter",void 0);d([c.aliasOf("viewModel.view")],b.prototype,"view",void 0);d([c.property({type:f}),e.renderable(["state","view.size"])],b.prototype,"viewModel",void 0);d([e.accessibleHandler()],
b.prototype,"_toggleState",null);return b=d([c.subclass("esri.widgets.Attribution")],b)}(c.declared(k))});