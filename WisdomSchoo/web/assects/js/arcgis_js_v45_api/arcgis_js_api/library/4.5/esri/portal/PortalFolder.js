// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/accessorSupport/decorators ../core/Error ../core/JSONSupport".split(" "),function(h,k,e,c,b,f,g){return function(d){function a(a){a=d.call(this)||this;a.created=null;a.id=null;a.portal=null;a.title=null;a.username=null;return a}e(a,d);Object.defineProperty(a.prototype,"url",{get:function(){var a=this.get("portal.restUrl");return a?a+"/content/users/"+this.username+"/"+this.id:null},enumerable:!0,
configurable:!0});a.prototype.toJSON=function(){throw new f("internal:not-yet-implemented","PortalFolder.toJSON is not yet implemented");};c([b.property({type:Date})],a.prototype,"created",void 0);c([b.property()],a.prototype,"id",void 0);c([b.property()],a.prototype,"portal",void 0);c([b.property()],a.prototype,"title",void 0);c([b.property({dependsOn:["portal.restUrl"],readOnly:!0})],a.prototype,"url",null);c([b.property()],a.prototype,"username",void 0);return a=c([b.subclass("esri.portal.PortalFolder")],
a)}(b.declared(g))});