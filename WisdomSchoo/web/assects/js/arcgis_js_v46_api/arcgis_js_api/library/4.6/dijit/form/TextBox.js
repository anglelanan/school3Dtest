//>>built
require({cache:{"url:dijit/form/templates/TextBox.html":'\x3cdiv class\x3d"dijit dijitReset dijitInline dijitLeft" id\x3d"widget_${id}" role\x3d"presentation"\r\n\t\x3e\x3cdiv class\x3d"dijitReset dijitInputField dijitInputContainer"\r\n\t\t\x3e\x3cinput class\x3d"dijitReset dijitInputInner" data-dojo-attach-point\x3d\'textbox,focusNode\' autocomplete\x3d"off"\r\n\t\t\t${!nameAttrSetting} type\x3d\'${type}\'\r\n\t/\x3e\x3c/div\r\n\x3e\x3c/div\x3e\r\n'}});
define("dojo/_base/declare dojo/dom-construct dojo/dom-style dojo/_base/kernel dojo/_base/lang dojo/on dojo/sniff ./_FormValueWidget ./_TextBoxMixin dojo/text!./templates/TextBox.html ../main".split(" "),function(d,k,l,e,m,f,c,b,g,n,p){b=d("dijit.form.TextBox"+(c("dojo-bidi")?"_NoBidi":""),[b,g],{templateString:n,_singleNodeTemplate:'\x3cinput class\x3d"dijit dijitReset dijitLeft dijitInputField" data-dojo-attach-point\x3d"textbox,focusNode" autocomplete\x3d"off" type\x3d"${type}" ${!nameAttrSetting} /\x3e',
_buttonInputDisabled:c("ie")?"disabled":"",baseClass:"dijitTextBox",postMixInProperties:function(){var a=this.type.toLowerCase();if(this.templateString&&"input"==this.templateString.toLowerCase()||("hidden"==a||"file"==a)&&this.templateString==this.constructor.prototype.templateString)this.templateString=this._singleNodeTemplate;this.inherited(arguments)},postCreate:function(){this.inherited(arguments);9>c("ie")&&this.defer(function(){try{var a=l.getComputedStyle(this.domNode);if(a){var h=a.fontFamily;
if(h){var b=this.domNode.getElementsByTagName("INPUT");if(b)for(a=0;a<b.length;a++)b[a].style.fontFamily=h}}}catch(q){}})},_setPlaceHolderAttr:function(a){this._set("placeHolder",a);this._phspan||(this._attachPoints.push("_phspan"),this._phspan=k.create("span",{className:"dijitPlaceHolder dijitInputField"},this.textbox,"after"),this.own(f(this._phspan,"mousedown",function(a){a.preventDefault()}),f(this._phspan,"touchend, pointerup, MSPointerUp",m.hitch(this,function(){this.focus()}))));this._phspan.innerHTML=
"";this._phspan.appendChild(this._phspan.ownerDocument.createTextNode(a));this._updatePlaceHolder()},_onInput:function(a){this.inherited(arguments);this._updatePlaceHolder()},_updatePlaceHolder:function(){this._phspan&&(this._phspan.style.display=this.placeHolder&&!this.textbox.value?"":"none")},_setValueAttr:function(a,b,c){this.inherited(arguments);this._updatePlaceHolder()},getDisplayedValue:function(){e.deprecated(this.declaredClass+"::getDisplayedValue() is deprecated. Use get('displayedValue') instead.",
"","2.0");return this.get("displayedValue")},setDisplayedValue:function(a){e.deprecated(this.declaredClass+"::setDisplayedValue() is deprecated. Use set('displayedValue', ...) instead.","","2.0");this.set("displayedValue",a)},_onBlur:function(a){this.disabled||(this.inherited(arguments),this._updatePlaceHolder(),this.selectOnClick&&(this.textbox.selectionStart=this.textbox.selectionEnd=void 0))},_onFocus:function(a){this.disabled||this.readOnly||(this.inherited(arguments),this._updatePlaceHolder())}});
9>c("ie")&&(b.prototype._isTextSelected=function(){var a=this.ownerDocument.selection.createRange();return a.parentElement()==this.textbox&&0<a.text.length},p._setSelectionRange=g._setSelectionRange=function(a,b,c){a.createTextRange&&(a=a.createTextRange(),a.collapse(!0),a.moveStart("character",-99999),a.moveStart("character",b),a.moveEnd("character",c-b),a.select())});c("dojo-bidi")&&(b=d("dijit.form.TextBox",b,{_setPlaceHolderAttr:function(a){this.inherited(arguments);this.applyTextDir(this._phspan)}}));
return b});