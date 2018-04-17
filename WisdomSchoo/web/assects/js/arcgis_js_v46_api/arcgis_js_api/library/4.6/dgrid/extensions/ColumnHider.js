//>>built
define("dojo/_base/declare dojo/dom-construct dojo/has dojo/on ../util/misc dojo/i18n!./nls/columnHider".split(" "),function(p,g,m,f,h,q){var n,l;return p(null,{hiderMenuNode:null,hiderToggleNode:null,i18nColumnHider:q,_hiderMenuOpened:!1,_columnHiderRules:null,_columnHiderCheckboxes:null,_renderHiderMenuEntries:function(){var a=this.subRows,b=!0,c,d,e,k;delete this._columnHiderFirstCheckbox;e=0;for(c=a.length;e<c;e++)for(k=0,d=a[e].length;k<d;k++)this._renderHiderMenuEntry(a[e][k]),b&&(b=!1,this._columnHiderFirstCheckbox=
this._columnHiderCheckboxes[a[e][k].id])},_renderHiderMenuEntry:function(a){var b=a.id,c=h.escapeCssIdentifier(b,"-"),d,e;a.hidden&&(a.hidden=!1,this._hideColumn(b),a.hidden=!0);a.unhidable||(d=g.create("div",{className:"dgrid-hider-menu-row"}),e=this.domNode.id+"-hider-menu-check-"+c,b=this._columnHiderCheckboxes[b]=g.create("input",{className:"dgrid-hider-menu-check hider-menu-check-"+c,id:e,type:"checkbox"},d),g.create("label",{className:"dgrid-hider-menu-label hider-menu-label-"+c,"for":e},d).appendChild(document.createTextNode(a.label||
a.field||"")),this.hiderMenuNode.appendChild(d),a.hidden||(b.checked=!0))},renderHeader:function(){function a(a){a.stopPropagation()}var b=this,c=this.hiderMenuNode,d=this.hiderToggleNode,e;this.inherited(arguments);if(c){for(e in this._columnHiderRules)this._columnHiderRules[e].remove();c.innerHTML=""}else d=this.hiderToggleNode=g.create("div",{"aria-label":this.i18nColumnHider.popupTriggerLabel,className:"ui-icon dgrid-hider-toggle",type:"button"},this.domNode),c=this.bodyNode.offsetWidth-this.bodyNode.clientWidth,
16>c&&0<c&&(d.style.transform="scale("+c/16+") translate("+(16-c)/2+"px)"),this._listeners.push(f(d,"click",function(a){b._toggleColumnHiderMenu(a)})),c=this.hiderMenuNode=g.create("div",{"aria-label":this.i18nColumnHider.popupLabel,className:"dgrid-hider-menu",id:this.id+"-hider-menu",role:"dialog"}),this._listeners.push(f(c,"keyup",function(a){27===(a.charCode||a.keyCode)&&(b._toggleColumnHiderMenu(a),d.focus())})),c.style.display="none",this.domNode.appendChild(c),this._listeners.push(f(c,".dgrid-hider-menu-check:"+
(9>m("ie")?"click":"change"),function(a){b._updateColumnHiddenState(a.target.id.substr(b.id.length+18),!a.target.checked)})),this._listeners.push(f(c,"mousedown",a),f(d,"mousedown",a)),l||(l=f.pausable(document,"mousedown",function(a){n&&n._toggleColumnHiderMenu(a)}),l.pause());this._columnHiderCheckboxes={};this._columnHiderRules={};this._renderHiderMenuEntries()},destroy:function(){this.inherited(arguments);for(var a in this._columnHiderRules)this._columnHiderRules[a].remove()},left:function(a,
b){return this.right(a,-b)},right:function(a,b){a.element||(a=this.cell(a));for(var c=this.inherited(arguments),d=a;c.column.hidden;){c=this.inherited(arguments,[c,0<b?1:-1]);if(d.element===c.element)return a;d=c}return c},isColumnHidden:function(a){return!!this._columnHiderRules[a]},_toggleColumnHiderMenu:function(){var a=this._hiderMenuOpened,b=this.hiderMenuNode,c=this.domNode,d;b.style.display=a?"none":"";a?b.style.height="":(b.offsetHeight>c.offsetHeight-12&&(b.style.height=c.offsetHeight-12+
"px"),(d=this._columnHiderFirstCheckbox)&&d.focus());l[a?"pause":"resume"]();n=a?null:this;this._hiderMenuOpened=!a},_hideColumn:function(a){var b=this,c="#"+h.escapeCssIdentifier(this.domNode.id)+" .dgrid-column-",d;this._columnHiderRules[a]||(this._columnHiderRules[a]=h.addCssRule(c+h.escapeCssIdentifier(a,"-"),"display: none;"),8!==m("ie")&&10!==m("ie"))||(d=h.addCssRule(".dgrid-row-table","display: inline-table;"),window.setTimeout(function(){d.remove();b.resize()},0))},_showColumn:function(a){this._columnHiderRules[a]&&
(this._columnHiderRules[a].remove(),delete this._columnHiderRules[a])},_updateColumnHiddenState:function(a,b){this[b?"_hideColumn":"_showColumn"](a);this.columns[a].hidden=b;f.emit(this.domNode,"dgrid-columnstatechange",{grid:this,column:this.columns[a],hidden:b,bubbles:!0});this.resize()},toggleColumnHiddenState:function(a,b){"undefined"===typeof b&&(b=!this._columnHiderRules[a]);this._updateColumnHiddenState(a,b);this._columnHiderCheckboxes[a]&&(this._columnHiderCheckboxes[a].checked=!b)}})});