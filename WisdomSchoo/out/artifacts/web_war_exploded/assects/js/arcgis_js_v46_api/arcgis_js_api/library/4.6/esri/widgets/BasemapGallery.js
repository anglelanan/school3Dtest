// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ./support/widget ../core/accessorSupport/decorators ../core/watchUtils ./BasemapGallery/BasemapGalleryViewModel ./Widget ../core/HandleRegistry dojo/i18n!./BasemapGallery/nls/BasemapGallery".split(" "),function(k,u,l,d,c,f,m,n,p,q,r){var t=k.toUrl("../themes/base/images/basemap-toggle-64.svg");return function(h){function b(a){a=h.call(this)||this;a._handleRegistry=new q;a.activeBasemap=null;a.source=null;
a.view=null;a.viewModel=new n;return a}l(b,h);b.prototype.postInitialize=function(){var a=this,c=this._handleRegistry;this.own([m.on(this,"viewModel.items","change",function(b){var e=b.added;b=b.moved;c.remove("basemap-gallery-item-changes");c.add(e.concat(b).map(function(c){return c.watch("state",function(){return a.scheduleRender()})}),"basemap-gallery-item-changes");a.scheduleRender()}),c])};b.prototype.render=function(){var a="loading"===this.get("source.state"),b="disabled"===this.get("viewModel.state"),
d=this.get("viewModel.items").toArray().map(this._renderBasemapGalleryItem,this),b=(e={},e["esri-basemap-gallery--source-loading"]=a,e["esri-disabled"]=b,e),e=a?c.tsx("div",{class:"esri-basemap-gallery_loading-indicator",key:"esri-basemap-gallery_loading-indicator"}):null,a=a?null:0<d.length?c.tsx("ul",{class:"esri-basemap-gallery__item-container",key:"esri-basemap-gallery__item-container",role:"menu"},d):c.tsx("div",{class:"esri-basemap-gallery__empty-message",key:"esri-basemap-gallery__empty-message"},
r.noBasemaps);return c.tsx("div",{class:"esri-basemap-gallery esri-widget esri-widget--panel",classes:b},e,a);var e};b.prototype._handleClick=function(a){a=a.currentTarget["data-item"];"ready"===a.state&&(this.activeBasemap=a.basemap)};b.prototype._renderBasemapGalleryItem=function(a){var b=a.get("basemap.thumbnailUrl")||t,d=a.get("basemap.title"),e=a.get("error.message")||d,f="ready"===a.state?0:-1,h=this.viewModel.basemapEquals(a.basemap,this.activeBasemap),k=(g={},g["esri-basemap-gallery__item--selected"]=
h,g["esri-basemap-gallery__item--loading"]="loading"===a.state,g["esri-basemap-gallery__item--error"]="error"===a.state,g),g="loading"===a.state?c.tsx("div",{class:"esri-basemap-gallery_loading-indicator",key:"esri-basemap-gallery__loading-indicator"}):null;return c.tsx("li",{"aria-selected":h,bind:this,class:"esri-basemap-gallery__item",classes:k,"data-item":a,onkeydown:this._handleClick,onclick:this._handleClick,role:"menuitem",tabIndex:f,title:e},g,c.tsx("img",{alt:"",class:"esri-basemap-gallery__item-thumbnail",
src:b}),c.tsx("div",{class:"esri-basemap-gallery__item-title"},d));var g};d([f.aliasOf("viewModel.activeBasemap"),c.renderable()],b.prototype,"activeBasemap",void 0);d([f.aliasOf("viewModel.source"),c.renderable("source.state")],b.prototype,"source",void 0);d([f.aliasOf("viewModel.view"),c.renderable()],b.prototype,"view",void 0);d([f.property(),c.renderable(["viewModel.state"])],b.prototype,"viewModel",void 0);d([c.accessibleHandler()],b.prototype,"_handleClick",null);return b=d([f.subclass("esri.widgets.BasemapGallery")],
b)}(f.declared(p))});