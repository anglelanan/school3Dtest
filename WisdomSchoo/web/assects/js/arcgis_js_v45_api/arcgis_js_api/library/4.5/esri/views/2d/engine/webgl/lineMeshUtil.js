// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define("require exports ./Utils ./visualVariablesUtils ./LineTess ./MeshData ./TileClipper".split(" "),function(da,L,z,aa,a,ba,ca){function X(A,f,g,z,C){"butt"===C?q.buttCap(A,f,g):"round"===C?q.roundCap(A,f,g,z,a.getNumberOfSlices(Math.PI),z===a.CapPosition.START?-1:1):"square"===C?q.squareCap(A,f,g,z):(q.buttCap(A,f,g),console.error("Unknown cap type!"))}function T(a,f,g,q,C,h,E,H,n,r,c,x){var A=0,u;for(u=0;u<c.vectors.count;++u){var J=c.vectors.items[u].vector[0],v=c.vectors.items[u].vector[1],
I=c.vectors.items[u].texCoords[0],B=c.vectors.items[u].texCoords[1],p=c.vectors.items[u].direction[0],t=c.vectors.items[u].direction[1],k=n+A;++A;x.push(z.i1616to32(a,f));x.push(E);x.push(q);x.push(z.i8888to32(Math.round(31*J),Math.round(31*v),Math.round(31*I),Math.round(31*B)));x.push(z.i1616to32(g,31*H));x.push(z.i1616to32(C[0],C[1]));x.push(z.i1616to32(h[0],h[1]));x.push(z.i8888to32(Math.round(31*p),Math.round(31*t),0,0));r&&(x.push(r.size),x.push(r.color),x.push(r.opacity));c.vectors.items[u].base=
{index:k,point:[a,f]}}return A}function Y(a,f,g){q.bridge(Q,a,f);for(a=0;a<Q.count;++a)f=Q.items[a],g.push(f.v1.base.index,f.v2.base.index,f.v3.base.index)}Object.defineProperty(L,"__esModule",{value:!0});var q=new a.Tessellator({distanceAlongCorrection:!0}),R=new Float32Array(1),U=new Uint32Array(R.buffer),V=[a.allocExtrudeVectors(),a.allocExtrudeVectors()],Z=a.allocExtrudeVectors(),Q=a.allocTriangles(20),W=a.allocTriangles(20),M=new ca.TileClipper(0,0,0,1,8);M.setExtent(z.C_TILE_SIZE);L.createLineMeshData=
function(A,f,g,P,C,h,E,H){var n=null!=P?P.spriteMosaicItem:null,r=E.geometry,c=!z.isPictureSymbol(H)&&H.color?z.copyAndPremultiply(H.color):[255,255,255,1];P=z.numTo32(A);var x=window.devicePixelRatio||1;H=0<H.width?.5*(H.width+1/x):0;var x=null!=n,L=g.vvColor||g.vvOpacity||g.vvSizeMinMaxValue||g.vvSizeScaleStops||g.vvSizeFieldStops||g.vvSizeUnitValue,u=0,J=0,v=0;L&&(v=f.vvFields,u=v.opacity?f.getValue(E,v.opacity):0,J=v.color?f.getValue(E,v.color):0,v=v.size&&!g.vvSizeScaleStops?f.getValue(E,v.size):
0,g.vvSizeUnitValue&&(v=aa.getVisualVariableSizeValueRepresentationRatio(v,f.vvRanges.size.unitValue.valueRepresentation)),isNaN(v)&&(v=1),isNaN(u)&&(u=1),isNaN(J)&&(J=1),R[0]=v,v=U[0],R[0]=u,u=U[0],R[0]=J,J=U[0]);f=z.i8888to32(c[0],c[1],c[2],c[3]);g=[0,0];E=[0,0];if(n){var c=n.rect.x,I=n.rect.y,B=n.width,n=n.height;g[0]=c+1;g[1]=I+1;E[0]=c+1+B;E[1]=I+1+n}r=r.rings||r.paths;h*=8;n=-h;c=C+h;C=[];for(var I=r.length,B=0,p=!1;B<I;){var t=r[B];h=[];M.reset(2);var k=t[0][0],d=t[0][1];if(p)M.moveTo(k,d);
else{if(k<n||k>c||d<n||d>c){p=!0;continue}h.push({x:k,y:d})}for(var K=!1,F=t.length,y=1;y<F;++y)if(k+=t[y][0],d+=t[y][1],p)M.lineTo(k,d);else{if(k<n||k>c||d<n||d>c){K=!0;break}h.push({x:k,y:d})}if(K)p=!0;else{if(p){if(p=M.resultWithStarts())for(h=0;h<p.length;h++)C.push(p[h])}else C.push({line:h,start:0});B++;p=!1}}r=0;n=[];c=[];for(I=0;I<C.length;I++)if(t=C[I],h=t.line,!(2>h.length))for(B=h.length,k=h[0],d=h[B-1],p=d.x-k.x,k=d.y-k.y,p=1E-6>p*p+k*k,t=t.start,d=k=void 0,K=L?{size:v,color:J,opacity:u}:
null,d=0;d<B;++d){y=h[d];F=k===V[d%2]?V[(d+1)%2]:V[d%2];if(d<B-1||!p||x){a:{var l=F,m=d,D=h,w=B,S=p,G=D[m],b=[void 0,void 0],e=[void 0,void 0];if(0<m&&m<w-1){var N=D[(m+w-1)%w],O=D[(m+1)%w];a.normalize(b,[G.x-N.x,G.y-N.y]);a.normalize(e,[O.x-G.x,O.y-G.y])}else if(0===m)O=D[(m+1)%w],a.normalize(e,[O.x-G.x,O.y-G.y]),S?(D=D[w-2],a.normalize(b,[G.x-D.x,G.y-D.y])):b=e;else if(m===w-1)N=D[(m+w-1)%w],a.normalize(b,[G.x-N.x,G.y-N.y]),S?(D=D[1],a.normalize(e,[D.x-G.x,D.y-G.y])):e=b;else{console.error("Vertex index 'i' out of range.");
break a}S||0!==m?S||m!==w-1?(m=a.getRads(b,e),m>Math.PI-.05?q.rectJoin(l,b,e):.1>m?.05>m?q.fastMiterJoin(l,b,e):m<a.MITER_SAFE_RADS?q.miterJoin(l,b,e):q.bevelJoin(l,b,e,a.SYSTEM_MAG_LIMIT):(w=a.getNumberOfSlices(m),2.3>m?2>w||.5>m?q.bevelJoin(l,b,e,1):q.roundJoin(l,b,e,w):q.unitRoundJoin(l,b,e,w))):X(l,b,e,a.CapPosition.END,"round"):X(l,b,e,a.CapPosition.START,"round")}r+=T(y.x,y.y,t,f,g,E,P,H,r,K,F,n);if(F.capCenter&&(!p||d!==B-1))for(e=c,q.pie(W,F),b=void 0,b=0;b<W.count;++b)l=W.items[b],e.push(l.v1.base.index,
l.v2.base.index,l.v3.base.index);p&&0===d&&!x&&a.copyExtrudeVectors(Z,F)}else a.copyExtrudeVectors(F,Z);k&&Y(k,F,c);d<B-1&&(b=h[d+1],e=[b.x-y.x,b.y-y.y],l=a.length(e),e=[e[0]/l,e[1]/l],l=t+l,65535<l?(w=(65535-t)/(l-t),m=y.x+(b.x-y.x)*w,y=y.y+(b.y-y.y)*w,b=k,q.buttCap(b,e,e),r+=T(m,y,65535,f,g,E,A,H,r,K,b,n),q.bridge(Q,F,b),Y(F,b,c),q.buttCap(b,e,e),r+=T(m,y,0,f,g,E,A,H,r,K,b,n),t=l-t):(t=l,k=F))}A=new ba;A.update({geometry:n},r,c);return A}});