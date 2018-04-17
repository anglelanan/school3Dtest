// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/accessorSupport/decorators ./Print/PrintViewModel ../tasks/support/PrintTemplate ../core/watchUtils ./Widget ./Print/FileLink ../core/urlUtils ./support/widget dojo/i18n!./Print/nls/Print".split(" "),function(v,w,n,e,g,k,p,l,q,r,t,a,d){return function(m){function c(){var a=m.call(this)||this;a._attribution=!0;a._exportedFileNameMap={};a._layoutTabSelected=!0;a._legend=!0;a._advancedOptionsVisible=
!1;a._pendingExportScroll=!1;a._selectedTemplate=new p;a._scaleEnabled=!1;a._templatesInfo=null;a.view=null;a.viewModel=new k;a.printServiceUrl=null;return a}n(c,m);c.prototype.postInitialize=function(){var a=this;l.init(this,"viewModel.templatesInfo",function(b){b&&(a._templatesInfo=b,a._selectedTemplate.layout=a._templatesInfo.layout.defaultValue,a._selectedTemplate.format=a._templatesInfo.format.defaultValue,"MAP_ONLY"===a._selectedTemplate.layout&&(a._layoutTabSelected=!1))});l.init(this,"viewModel.view.scale",
function(b){a._scaleEnabled||(a._scale=b,a.scheduleRender())});this._width=this._selectedTemplate.exportOptions.width;this._height=this._selectedTemplate.exportOptions.height};c.prototype.render=function(){var u=this,b=a.tsx("div",{key:"title-section",class:"esri-print__form-section-container"},a.tsx("label",null,this._layoutTabSelected?d.title:d.fileName,a.tsx("input",{key:this.id+"__title",name:"title",type:"text",tabIndex:0,placeholder:this._layoutTabSelected?d.titlePlaceHolder:d.fileNamePlaceHolder,
class:"esri-print__input-text",oninput:this._updateInputValue,bind:this}))),c=this.get("_templatesInfo.format.choiceList")||[],c=0<c.length?c.map(function(b){return a.tsx("option",{key:b},b)}):a.tsx("option",{key:"format-default-option"},d.formatDefaultOption),c=a.tsx("div",{key:"file-format-section",class:"esri-print__form-section-container"},a.tsx("label",null,d.fileFormatTitle,a.tsx("select",{key:this.id+"__formats",class:"esri-select",onchange:this._updateFromOption,"data-target-property":"format",
bind:this},c))),f=this.get("_templatesInfo.layout.choiceList")||[],f=0<f.length?f.map(function(b){return a.tsx("option",{key:b,bind:u},b)}):a.tsx("option",{key:"layout-default-option"},d.layoutDefaultOption),f=a.tsx("div",{key:"page-setup-section",class:"esri-print__form-section-container"},a.tsx("label",null,d.layoutTitle,a.tsx("select",{key:this.id+"__layouts",class:"esri-select",onchange:this._updateFromOption,"data-target-property":"layout",bind:this},f))),h=this._advancedOptionsVisible?a.tsx("div",
{"aria-labelledby":this.id+"__advancedOptions",class:"esri-print__advanced-options-container"},a.tsx("div",{class:a.join("esri-print__scale-info-container","esri-print__form-section-container")},a.tsx("label",null,a.tsx("input",{key:this.id+"__scaleEnabled",name:"scaleEnabled",type:"checkbox",tabIndex:0,onchange:this._toggleInputValue,bind:this}),d.scale),a.tsx("div",{class:"esri-print__scale-input-container"},a.tsx("input",{key:this.id+"__scale","aria-label":d.scaleLabel,"aria-valuenow":""+this._scale,
role:"spinbutton",type:"number",name:"scale",class:a.join("esri-print__input-text","esri-print__scale-input"),tabIndex:0,oninput:this._updateInputValue,disabled:!this._scaleEnabled,value:""+this._scale,bind:this}),a.tsx("button",{role:"button","aria-label":d.reset,class:a.join("esri-widget-button","esri-print__refresh-button","esri-icon-refresh"),tabIndex:0,onclick:this._resetToCurrentScale,bind:this}))),a.tsx("div",{class:a.join("esri-print__author-info-container","esri-print__form-section-container")},
a.tsx("label",null,d.author,a.tsx("input",{key:this.id+"__author",type:"text",name:"author",class:"esri-print__input-text",tabIndex:0,oninput:this._updateInputValue,bind:this}))),a.tsx("div",{class:a.join("esri-print__copyright-info-container","esri-print__form-section-container")},a.tsx("label",null,d.copyright,a.tsx("input",{key:this.id+"__copyright",type:"text",name:"copyright",class:"esri-print__input-text",tabIndex:0,oninput:this._updateInputValue,bind:this}))),a.tsx("div",{class:a.join("esri-print__legend-info-container",
"esri-print__form-section-container")},a.tsx("label",null,a.tsx("input",{key:this.id+"__legend",type:"checkbox",name:"legend",tabIndex:0,checked:!0,onchange:this._toggleInputValue,bind:this}),d.legend))):null,b=this._layoutTabSelected?a.tsx("section",{key:this.id+"__layoutContent",id:this.id+"__layoutContent","aria-labelledby":this.id+"__layoutTab",class:"esri-print__layout-section",role:"tabpanel","aria-selected":this._layoutTabSelected},a.tsx("div",{key:"layout",class:"esri-print__panel-container"},
b,f,this._layoutTabSelected?c:null),a.tsx("div",{key:"advanced-section",class:a.join("esri-print__panel-container","esri-print__advanced-options-section")},a.tsx("button",{key:this.id+"__advancedOptions","aria-label":d.advancedOptions,"aria-expanded":this._advancedOptionsVisible?"true":"false",role:"button",class:"esri-print__advanced-options-button",onclick:this._showAdvancedOptions,bind:this},a.tsx("div",{class:"esri-print__advanced-options-button-container"},a.tsx("span",{"aria-hidden":"true",
class:a.join("esri-icon-right-triangle-arrow","esri-print__advanced-options-button-icon--closed")}),a.tsx("span",{"aria-hidden":"true",class:a.join("esri-icon-left-triangle-arrow","esri-print__advanced-options-button-icon--closed-rtl")}),a.tsx("span",{"aria-hidden":"true",class:a.join("esri-icon-down-arrow","esri-print__advanced-options-button-icon--opened")}),a.tsx("span",{class:"esri-print__advanced-options-button-title"},d.advancedOptions))),h)):a.tsx("section",{key:this.id+"__mapOnlyContent",
id:this.id+"__mapOnlyContent","aria-selected":!this._layoutTabSelected,"aria-labelledby":this.id+"__mapOnlyTab",class:"esri-print__map-only-section",role:"tabpanel"},a.tsx("div",{key:"mapOnly",class:"esri-print__panel-container"},b,this._layoutTabSelected?null:c,a.tsx("div",{class:a.join("esri-print__size-container","esri-print__form-section-container")},a.tsx("div",{class:"esri-print__width-container"},a.tsx("label",null,d.width,a.tsx("input",{key:this.id+"__width",type:"text",name:"width",class:"esri-print__input-text",
onchange:this._updateInputValue,value:""+this._width,tabIndex:0,bind:this}))),a.tsx("div",{class:"esri-print__height-container"},a.tsx("label",null,d.height,a.tsx("input",{key:this.id+"__height",type:"text",name:"height",class:"esri-print__input-text",onchange:this._updateInputValue,value:""+this._height,tabIndex:0,bind:this}))),a.tsx("button",{role:"button","aria-label":d.swap,class:a.join("esri-widget-button","esri-print__swap-button","esri-icon-swap"),onclick:this._switchInput,tabIndex:0,bind:this})),
a.tsx("div",{key:"attribution-container",class:"esri-print__form-section-container"},a.tsx("label",null,a.tsx("input",{key:this.id+"__attribution",name:"attribution",type:"checkbox",onchange:this._toggleInputValue,tabIndex:0,checked:!0,bind:this}),d.attribution)))),c=this.exportedLinks.toArray(),f=this._renderExportedLink(c),h=(e={},e["esri-disabled"]=!this._selectedTemplate.layout&&!this._selectedTemplate.format,e),e="2d"!==this.get("view.type"),g=a.tsx("div",{key:this.id+"__errorPanel",class:"esri-print__panel--error"},
e?d.sceneViewError:d.serviceError),b=a.tsx("div",{key:this.id+"__printPanel"},a.tsx("ul",{class:"esri-print__layout-tab-list",role:"tablist",onclick:this._toggleLayoutPanel,onkeydown:this._toggleLayoutPanel,bind:this},a.tsx("li",{id:this.id+"__layoutTab",key:this.id+"__layoutTab","data-tab-id":"layoutTab",class:"esri-print__layout-tab",role:"tab",tabIndex:0,"aria-selected":""+this._layoutTabSelected,bind:this},d.layoutTab),a.tsx("li",{id:this.id+"__mapOnlyTab",key:this.id+"__mapOnlyTab","data-tab-id":"mapOnlyTab",
class:"esri-print__layout-tab",role:"tab",tabIndex:0,"aria-selected":""+!this._layoutTabSelected,bind:this},d.mapOnlyTab)),b,a.tsx("button",{"aria-label":d.exportDescription,role:"button",class:"esri-print__export-button",tabIndex:0,classes:h,onclick:this._handlePrintMap,bind:this},d.export),a.tsx("div",{key:this.id+"__exportedFilesContainer",class:"esri-print__export-panel-container",afterUpdate:this._scrollExportIntoView,onclick:this._removeLink,bind:this},a.tsx("h2",{class:"esri-print__export-title"},
d.exportText),0<c.length?null:a.tsx("div",{key:"exported-section-hints"},a.tsx("div",null,d.exportHint)),f)),e=a.tsx("div",{key:this.id+"__printContainer"},a.tsx("div",{class:"esri-print__container"},a.tsx("header",{class:"esri-print__header-title"},d.export),this.error||!this.printServiceUrl||e?g:b));return a.tsx("div",{class:"esri-print esri-widget esri-widget--panel"},e);var e};c.prototype._configurePrintTemplate=function(){this._selectedTemplate.attributionVisible=this._attribution;this._width&&
(this._selectedTemplate.exportOptions.width=this._width);this._height&&(this._selectedTemplate.exportOptions.height=this._height);this._selectedTemplate.layoutOptions={titleText:this._title||"",authorText:this._author||"",copyrightText:this._copyright||""};this._legend||(this._selectedTemplate.layoutOptions.legendLayers=[]);this.scale=this._scale;this._selectedTemplate.outScale=this.scale;var a=this._title||d.untitled,b=this._selectedTemplate.format.toLowerCase(),b=-1<b.indexOf("png")?"png":b,c=a+
b;void 0!==this._exportedFileNameMap[c]?this._exportedFileNameMap[c]++:this._exportedFileNameMap[c]=0;this.exportedLinks.add(new r({name:a,extension:b,count:this._exportedFileNameMap[c]}))};c.prototype._resetToCurrentScale=function(){this._scale=this.viewModel.view.scale};c.prototype._updateInputValue=function(a){a=a.target;this["_"+a.name]=a.value};c.prototype._handlePrintMap=function(){this._configurePrintTemplate();this._pendingExportScroll=!0;this.viewModel.print(this._selectedTemplate)};c.prototype._updateFromOption=
function(a){var b=a.target;a=b.selectedOptions.item(0).value;var c=this._selectedTemplate,b=b.getAttribute("data-target-property");c[b]=a};c.prototype._switchInput=function(){a=[this._height,this._width];this._width=a[0];this._height=a[1];var a};c.prototype._showAdvancedOptions=function(){this._advancedOptionsVisible=!this._advancedOptionsVisible};c.prototype._scrollExportIntoView=function(a){this._pendingExportScroll&&(this._pendingExportScroll=!1,a.scrollIntoView())};c.prototype._toggleInputValue=
function(a){a=a.target;var b="_"+a.name;this[b]=a.checked;"_scaleEnabled"===b&&(this.viewModel.scaleEnabled=this[b],this[b]||this._resetToCurrentScale())};c.prototype._removeLink=function(a){(a=a.target["data-item"])&&"error"===a.state&&this.exportedLinks.remove(a)};c.prototype._renderExportedLink=function(c){return c.map(function(b){var c=(f={},f["esri-icon-loading-indicator"]="pending"===b.state,f["esri-rotating"]="pending"===b.state,f["esri-icon-download"]="ready"===b.state,f["esri-icon-error"]=
"error"===b.state,f["esri-print__exported-file--error"]="error"===b.state,f),f=(e={},e["esri-disabled"]="pending"===b.state,e["esri-print__exported-file--error"]="error"===b.state,e);(e=""===b.url?null:b.url)&&(e=t.addProxy(e));return a.tsx("div",{"aria-label":"pending"===b.state?d.pending:"ready"===b.state?d.ready:d.error,key:b.formattedName,class:"esri-print__exported-file"},a.tsx("a",{"aria-label":b.formattedName+". "+d.linkReady,href:e,tabIndex:0,target:"_blank",class:"esri-print__exported-file-link"},
a.tsx("span",{"data-item":b,classes:c}),a.tsx("span",{"data-item":b,class:"esri-print__exported-file-link-title",classes:f},b.formattedName)));var f,e})};c.prototype._resetInputValue=function(){this._title="";this._selectedTemplate.format=this._templatesInfo.format.defaultValue};c.prototype._toggleLayoutPanel=function(a){this._resetInputValue();(this._layoutTabSelected="layoutTab"===a.target.getAttribute("data-tab-id"))?(a=this.get("_templatesInfo.layout.choiceList"),this._selectedTemplate.layout=
a&&a[0]):this._selectedTemplate.layout="MAP_ONLY"};e([g.aliasOf("viewModel.view"),a.renderable()],c.prototype,"view",void 0);e([g.property({type:k}),a.renderable(["viewModel.templatesInfo","viewModel.state"])],c.prototype,"viewModel",void 0);e([g.aliasOf("viewModel.printServiceUrl")],c.prototype,"printServiceUrl",void 0);e([g.aliasOf("viewModel.scale"),a.renderable()],c.prototype,"scale",void 0);e([g.aliasOf("viewModel.exportedLinks"),a.renderable()],c.prototype,"exportedLinks",void 0);e([g.aliasOf("viewModel.error")],
c.prototype,"error",void 0);e([a.accessibleHandler()],c.prototype,"_toggleLayoutPanel",null);return c=e([g.subclass("esri.widgets.Print")],c)}(g.declared(q))});