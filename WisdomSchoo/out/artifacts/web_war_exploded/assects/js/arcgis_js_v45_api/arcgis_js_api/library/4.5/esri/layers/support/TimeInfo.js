// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define(["../../core/declare","dojo/_base/lang","../../TimeExtent","./TimeReference","./LayerTimeOptions"],function(b,c,d,e,f){b=b(null,{declaredClass:"esri.layers.support.TimeInfo",constructor:function(a){null!==a&&(c.mixin(this,a),a.exportOptions&&(this.exportOptions=new f(a.exportOptions)),this.timeExtent=null,a.timeExtent&&2===a.timeExtent.length&&(this.timeExtent=new d(a.timeExtent)),this.timeReference=new e(a.timeReference))}});c.mixin(b,{UNIT_CENTURIES:"esriTimeUnitsCenturies",UNIT_DAYS:"esriTimeUnitsDays",
UNIT_DECADES:"esriTimeUnitsDecades",UNIT_HOURS:"esriTimeUnitsHours",UNIT_MILLISECONDS:"esriTimeUnitsMilliseconds",UNIT_MINUTES:"esriTimeUnitsMinutes",UNIT_MONTHS:"esriTimeUnitsMonths",UNIT_SECONDS:"esriTimeUnitsSeconds",UNIT_UNKNOWN:"esriTimeUnitsUnknown",UNIT_WEEKS:"esriTimeUnitsWeeks",UNIT_YEARS:"esriTimeUnitsYears"});return b});