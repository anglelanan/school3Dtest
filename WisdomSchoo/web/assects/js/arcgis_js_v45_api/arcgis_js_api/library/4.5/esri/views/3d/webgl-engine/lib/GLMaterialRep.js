// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define(["require","exports","./Util"],function(g,h,e){var f=function(){function c(a){this.refCnt=0;this.glMaterial=a}c.prototype.incRefCnt=function(){++this.refCnt};c.prototype.decRefCnt=function(){--this.refCnt;e.assert(0<=this.refCnt)};c.prototype.getRefCnt=function(){return this.refCnt};c.prototype.getGLMaterial=function(){return this.glMaterial};return c}();return function(){function c(a,b){this.textureRep=a;this.programRep=b;this.id2glMaterialRef={}}c.prototype.aquire=function(a){return this.aquireExt(a,
"color")};c.prototype.aquireDepthShadowMap=function(a){return this.aquireExt(a,"depthShadowMap")};c.prototype.aquireDepth=function(a){return this.aquireExt(a,"depth")};c.prototype.aquireNormal=function(a){return this.aquireExt(a,"normal")};c.prototype.aquireHighlight=function(a){return this.aquireExt(a,"highlight")};c.prototype.aquireExt=function(a,b){var c;c=a.getId()+"_"+b;var d=this.id2glMaterialRef[c];null==d?(a=(d=a.getGLMaterials()[b])?new d(a,this.programRep,this.textureRep):void 0,d=new f(a),
this.id2glMaterialRef[c]=d):a=d.getGLMaterial();d.incRefCnt();a&&this.increaseProgramReferences(a);return a};c.prototype.release=function(a){this.releaseExt(a,"color")};c.prototype.releaseDepth=function(a){this.releaseExt(a,"depth")};c.prototype.releaseNormal=function(a){this.releaseExt(a,"normal")};c.prototype.releaseDepthShadowMap=function(a){this.releaseExt(a,"depthShadowMap")};c.prototype.releaseHighlight=function(a){this.releaseExt(a,"highlight")};c.prototype.releaseExt=function(a,b){a=a+"_"+
b;b=this.id2glMaterialRef[a];b.decRefCnt();if(0===b.getRefCnt()){if(b=b.getGLMaterial())this.decreaseProgramReferences(b),void 0!==b.dispose&&b.dispose();delete this.id2glMaterialRef[a]}};c.prototype.updateMaterialParameters=function(a){var b=this.id2glMaterialRef[a+"_color"];b&&b.getGLMaterial()&&this.updateParamsForMat(b.getGLMaterial());(b=this.id2glMaterialRef[a+"_depth"])&&b.getGLMaterial()&&this.updateParamsForMat(b.getGLMaterial());(b=this.id2glMaterialRef[a+"_depthShadowMap"])&&b.getGLMaterial()&&
this.updateParamsForMat(b.getGLMaterial());(b=this.id2glMaterialRef[a+"_normal"])&&b.getGLMaterial()&&this.updateParamsForMat(b.getGLMaterial());(a=this.id2glMaterialRef[a+"_highlight"])&&a.getGLMaterial()&&this.updateParamsForMat(a.getGLMaterial())};c.prototype.updateParamsForMat=function(a){a.updateParameters&&a.updateParameters()};c.prototype.increaseProgramReferences=function(a){if(a.getAllPrograms){a=a.getAllPrograms();for(var b=0;b<a.length;b++)this.programRep.increaseRefCount(a[b])}else this.programRep.increaseRefCount(a.getProgram())};
c.prototype.decreaseProgramReferences=function(a){if(a.getAllPrograms){a=a.getAllPrograms();for(var b=0;b<a.length;b++)this.programRep.decreaseRefCount(a[b])}else this.programRep.decreaseRefCount(a.getProgram())};return c}()});