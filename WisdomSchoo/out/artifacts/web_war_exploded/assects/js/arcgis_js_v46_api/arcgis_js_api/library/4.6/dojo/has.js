//>>built
define(["./global","require","module"],function(h,e,c){var b=e.has||function(){};if(!b("dojo-has-api")){var g=(e="undefined"!=typeof window&&"undefined"!=typeof location&&"undefined"!=typeof document&&window.location==location&&window.document==document)&&document,k=g&&g.createElement("DiV"),d=c.config&&c.config()||{},b=function(a){return"function"==typeof d[a]?d[a]=d[a](h,g,k):d[a]};b.cache=d;b.add=function(a,c,l,e){("undefined"==typeof d[a]||e)&&(d[a]=c);return l&&b(a)};b.add("host-browser",e);
b.add("dom",e)}b("host-browser")&&(b.add("touch","ontouchstart"in document||"onpointerdown"in document&&0<navigator.maxTouchPoints||window.navigator.msMaxTouchPoints),b.add("touch-events","ontouchstart"in document),b.add("device-width",screen.availWidth||innerWidth),c=document.createElement("form"),b.add("dom-attributes-specified-flag",0<c.attributes.length&&40>c.attributes.length));b.clearElement=function(a){a.innerHTML="";return a};b.normalize=function(a,c){var d=a.match(/[\?:]|[^:\?]*/g),e=0,f=
function(a){var c=d[e++];if(":"==c)return 0;if("?"==d[e++]){if(!a&&b(c))return f();f(!0);return f(a)}return c||0};return(a=f())&&c(a)};b.load=function(a,b,c){a?b([a],c):c()};return b});