// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define("require exports ../../../../geometry/SpatialReference ../../support/projectionUtils ../../lib/glMatrix ../../webgl-engine/lib/Util".split(" "),function(A,r,x,p,d,y){function w(f,e,l,g,m){for(var a=[Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE],b=[-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE],c=0;c<f.length/3;c++)for(var n=[f[3*c],f[3*c+1],f[3*c+2]],h=0;3>h;h++)a[h]=Math.min(a[h],n[h]),b[h]=Math.max(b[h],n[h]);c=g.wkid===z?[e[0],e[1],e[2]]:e;d.vec3d.add(c,a,a);d.vec3d.add(c,
b,b);for(c=0;3>c;c++)b[c]===a[c]&&(b[c]+=1);c=[[a[0],a[1],a[2]],[b[0],a[1],a[2]],[a[0],b[1],a[2]],[a[0],a[1],b[2]]];for(n=0;4>n;n++)h=c[n],p.vectorToVector(h,g,h,m);g=d.vec3d.subtract(c[1],c[0],d.vec3d.create());n=d.vec3d.subtract(c[2],c[0],d.vec3d.create());h=d.vec3d.subtract(c[3],c[0],d.vec3d.create());d.vec3d.scale(g,1/(b[0]-a[0]));d.vec3d.scale(n,1/(b[1]-a[1]));d.vec3d.scale(h,1/(b[2]-a[2]));var a=d.vec3d.length(g),b=d.vec3d.length(n),k=d.vec3d.length(h);if(3<Math.abs(a-b)||3<Math.abs(a-k)||3<
Math.abs(b-k)){for(c=0;c<f.length/3;c++)f[3*c]*=a,f[3*c+1]*=b,f[3*c+2]*=k;d.vec3d.normalize(g);d.vec3d.normalize(n);d.vec3d.normalize(h)}f=d.mat4d.createFromMatrixRowMajor([g[0],n[0],h[0],0,g[1],n[1],h[1],0,g[2],n[2],h[2],0,0,0,0,1]);a=[0,0,0,0];p.vectorToVector(e,l,a,m);return{globalTrafo:d.mat4d.createFromMatrixRowMajor([1,0,0,a[0],0,1,0,a[1],0,0,1,a[2],0,0,0,1]),localTrafo:f}}Object.defineProperty(r,"__esModule",{value:!0});var z=x.WGS84.wkid;r.ReprojectionTypes={PER_VERTEX:"perVertex",BOUNDINGBOX:"boundingBox",
NO_REPROJECTION:"noReprojection"};var q=new Float64Array(3E3);r.reprojectPoints=function(f,e,l,g,m,a){if(f===r.ReprojectionTypes.PER_VERTEX){f=d.mat4d.create();p.computeLinearTransformation(g,l,f,a);var b=d.mat4d.create();d.mat4d.inverse(f,b);var c=d.mat4d.create();d.mat4d.identity(c);var n=[0,0,0],h=e.length/3;p.vectorToVector(l,g,n,m);for(l=0;l<h;l+=1E3){g=Math.min(1E3,h-l);for(var k=0;k<g;k++)q[3*k]=e[3*(l+k)]+n[0],q[3*k+1]=e[3*(l+k)+1]+n[1],q[3*k+2]=e[3*(l+k)+2]+n[2];p.bufferToBuffer(q,m,0,q,
a,0,g);for(k=0;k<g;k++){var t=q[3*k],u=q[3*k+1],v=q[3*k+2];e[3*(l+k)]=b[0]*t+b[4]*u+b[8]*v+b[12];e[3*(l+k)+1]=b[1]*t+b[5]*u+b[9]*v+b[13];e[3*(l+k)+2]=b[2]*t+b[6]*u+b[10]*v+b[14]}}a={localTrafo:c,globalTrafo:f}}else f===r.ReprojectionTypes.BOUNDINGBOX?a=w(e,l,g,m,a):(e=d.mat4d.create(),d.mat4d.identity(e),m=d.mat4d.create(),p.computeLinearTransformation(g,l,m,a),a={localTrafo:e,globalTrafo:m});return a};r.reprojectNormalsPerVertex=function(f,e,l,g,m){y.assert(g.equals(p.SphericalRenderSpatialReference));
g=d.mat4d.create();p.computeLinearTransformation(l,e,g,m);e=d.mat4d.create();d.mat4d.inverse(g,e);l=f.length/3;for(m=0;m<l;m++){g=f[3*m];var a=f[3*m+1],b=f[3*m+2];f[3*m]=e[0]*g+e[4]*a+e[8]*b;f[3*m+1]=e[1]*g+e[5]*a+e[9]*b;f[3*m+2]=e[2]*g+e[6]*a+e[10]*b}};r.reprojectBoundingBox=w});