// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/tsSupport/extendsHelper","../../lib/glMatrix","../../support/debugFlags"],function(v,f,w,u,k){function r(a,d){if(g){var e=c.height,b=h;b.beginPath();b.lineWidth=1;b.strokeStyle=d;b.moveTo(a[0][0],e-a[0][1]);for(d=1;4>d;d++)b.lineTo(a[d][0],e-a[d][1]),b.stroke();b.lineTo(a[0][0],e-a[0][1]);b.stroke();b.closePath()}}Object.defineProperty(f,"__esModule",{value:!0});var n=u.vec2d,g=!1,p=!1,c,h;f.drawAccelerationStruct=function(a,c){if(p&&h){for(var e=h,b=
[n.create(),n.create(),n.create(),n.create()],d=0,l=0;l<a.accBinsNumX;l++)for(var m=0;m<a.accBinsNumY;m++){var f=a.accBins[l][m],d=d+f.length,g=l*a.accBinsSizeX,k=(l+1)*a.accBinsSizeX,q=m*a.accBinsSizeY,t=(m+1)*a.accBinsSizeY;b[0][0]=g;b[0][1]=q;b[1][0]=k;b[1][1]=q;b[2][0]=k;b[2][1]=t;b[3][0]=g;b[3][1]=t;e.fillText(f.length.toFixed(),g+5,q+15);r(b,"blue")}e.fillText("total totalShownLabels: "+d,70,40);e.fillText("total visible labels: "+c.length,70,50);e.fillText("total numTests: "+a.accNumTests,
70,30)}};f.prepare=function(a){g=k.DECONFLICTOR_SHOW_OUTLINES;p=k.DECONFLICTOR_SHOW_GRID;if(g||p)null==c&&(c=document.createElement("canvas"),c.setAttribute("id","canvas2d"),a.surface.parentElement.style.position="relative",a.surface.parentElement.appendChild(c)),c.setAttribute("width",a.width+"px"),c.setAttribute("height",a.height+"px"),c.setAttribute("style","position:absolute;left:0px;top:0px;display:block;pointer-events:none;"),h=c.getContext("2d"),h.clearRect(0,0,a.width,a.height),h.font="8px Arial"};
f.drawPoly=r});