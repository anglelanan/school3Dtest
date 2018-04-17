// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/accessorSupport/decorators dojo/_base/lang ../core/lang ../core/accessorSupport/ensureType ./PointCloudRenderer ../Color".split(" "),function(r,t,p,f,e,q,h,g,k,m){return function(n){function a(a){a=n.call(this)||this;a.type="point-cloud-unique-value";a.field=null;a.fieldTransformType=null;a.colorUniqueValueInfos=null;return a}p(a,n);l=a;a.prototype.writeType=function(a,c,d,b){c.type="pointCloudUniqueValueRenderer"};
a.prototype.readColorUniqueValueInfos=function(a,c,d){if(!Array.isArray(a))return null;c=[];for(d=0;d<a.length;d++){var b=a[d];b&&"object"===typeof b&&c.push({values:b.values,label:b.label,description:b.description,color:m.fromJSON(b.color)})}return c};a.prototype.castColorUniqueValueInfos=function(a,c,d){if(!Array.isArray(a))return null;c=[];for(d=0;d<a.length;d++){var b=a[d];b&&"object"===typeof b&&c.push({values:Array.isArray(b.values)?b.values.map(function(a){return g.ensureString(a)}):null,label:g.ensureString(b.label),
description:g.ensureString(b.description),color:g.ensureType(m,b.color)})}return c};a.prototype.writeColorUniqueValueInfos=function(a,c,d,b){this.colorUniqueValueInfos&&(c.colorUniqueValueInfos=this.colorUniqueValueInfos.map(function(a){return{values:a.values,color:a.color&&a.color.toJSON(),label:a.label,description:a.description}}))};a.prototype.clone=function(){return new l(q.mixin(this.cloneProperties(),{field:h.clone(this.field),fieldTransformType:h.clone(this.fieldTransformType),colorUniqueValueInfos:h.clone(this.colorUniqueValueInfos)}))};
f([e.property()],a.prototype,"type",void 0);f([e.writer("type")],a.prototype,"writeType",null);f([e.property({json:{write:!0},type:String})],a.prototype,"field",void 0);f([e.property({json:{read:k.fieldTransformTypeKebabDict.read,write:k.fieldTransformTypeKebabDict.write},type:String})],a.prototype,"fieldTransformType",void 0);f([e.property({json:{write:!0}})],a.prototype,"colorUniqueValueInfos",void 0);f([e.reader("colorUniqueValueInfos")],a.prototype,"readColorUniqueValueInfos",null);f([e.cast("colorUniqueValueInfos")],
a.prototype,"castColorUniqueValueInfos",null);f([e.writer("colorUniqueValueInfos")],a.prototype,"writeColorUniqueValueInfos",null);return a=l=f([e.subclass("esri.renderers.PointCloudUniqueValueRenderer")],a);var l}(e.declared(k))});