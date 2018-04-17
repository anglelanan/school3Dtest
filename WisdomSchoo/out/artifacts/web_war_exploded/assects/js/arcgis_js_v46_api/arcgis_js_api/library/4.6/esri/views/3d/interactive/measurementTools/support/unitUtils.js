// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define(["require","exports","dojo/i18n!./nls/Units","dojo/number"],function(x,y,u,v){var k={length:{baseUnit:"meters",units:{millimeters:{inBaseUnits:.001},centimeters:{inBaseUnits:.01},decimeters:{inBaseUnits:.1},meters:{inBaseUnits:1},kilometers:{inBaseUnits:1E3},inches:{inBaseUnits:.0254},feet:{inBaseUnits:.3048},yards:{inBaseUnits:.9144},miles:{inBaseUnits:1609.344},"nautical-miles":{inBaseUnits:1853.184},"us-feet":{inBaseUnits:1200/3937}}},area:{baseUnit:"square-meters",units:{"square-millimeters":{inBaseUnits:1E-6},
"square-centimeters":{inBaseUnits:1E-4},"square-decimeters":{inBaseUnits:.1*.1},"square-meters":{inBaseUnits:1},"square-kilometers":{inBaseUnits:1E6},"square-inches":{inBaseUnits:6.4516E-4},"square-feet":{inBaseUnits:.09290304},"square-yards":{inBaseUnits:.83612736},"square-miles":{inBaseUnits:2589988.110336},acres:{inBaseUnits:4046.8564224},ares:{inBaseUnits:100},hectares:{inBaseUnits:1E4}}},volume:{baseUnit:"liters",units:{liters:{inBaseUnits:1},"cubic-millimeters":{inBaseUnits:1E3*1E-9},"cubic-centimeters":{inBaseUnits:.001},
"cubic-decimeters":{inBaseUnits:1},"cubic-meters":{inBaseUnits:1E3},"cubic-kilometers":{inBaseUnits:1E12},"cubic-inches":{inBaseUnits:.016387064},"cubic-feet":{inBaseUnits:.09290304*304.8},"cubic-yards":{inBaseUnits:764.554857984},"cubic-miles":{inBaseUnits:4.16818182544058E12}}},angle:{baseUnit:"radians",units:{radians:{inBaseUnits:1},degrees:{inBaseUnits:Math.PI/180}}}},w=function(){var c={},f;for(f in k)for(var m in k[f].units)c[m]=f;return c}(),h;(function(c){function f(a){if(a=w[a])return a;
throw Error("unknown measure");}function m(a){return k[a].baseUnit}function h(a,b){void 0===b&&(b=null);b=b||f(a);return k[b].baseUnit===a}function g(a,b,e){if(b===e)return a;var d=f(b);if(d!==f(e))throw Error("incompatible units");a=h(b,d)?a:a*k[d].units[b].inBaseUnits;return h(e,d)?a:a/k[d].units[e].inBaseUnits}function n(a,b){return u.units[a][b]}function l(a,b,e,d){void 0===e&&(e=2);void 0===d&&(d="abbr");return v.format(a,{places:e})+" "+n(b,d)}function p(a,b){return 3E3>g(a,b,"meters")?"meters":
"kilometers"}function q(a,b){return 1E5>g(a,b,"meters")?"meters":"kilometers"}function r(a,b){return 1E3>g(a,b,"feet")?"feet":"miles"}function t(a,b){return 1E5>g(a,b,"feet")?"feet":"miles"}c.measureForUnit=f;c.baseUnitForMeasure=m;c.baseUnitForUnit=function(a){return m(f(a))};c.isBaseUnit=h;c.convertUnit=g;c.unitName=n;c.formatDecimal=l;c.preferredMetricLengthUnit=p;c.preferredMetricVerticalLengthUnit=q;c.formatMetricLength=function(a,b,e,d){void 0===e&&(e=2);void 0===d&&(d="abbr");var c=p(a,b);
return l(g(a,b,c),c,e,d)};c.formatMetricVerticalLength=function(a,b,e,d){void 0===e&&(e=2);void 0===d&&(d="abbr");var c=q(a,b);return l(g(a,b,c),c,e,d)};c.preferredImperialLengthUnit=r;c.preferredImperialVerticalLengthUnit=t;c.formatImperialLength=function(a,b,e,d){void 0===e&&(e=2);void 0===d&&(d="abbr");var c=r(a,b);return l(g(a,b,c),c,e,d)};c.formatImperialVerticalLength=function(a,b,c,d){void 0===c&&(c=2);void 0===d&&(d="abbr");var e=t(a,b);return l(g(a,b,e),e,c,d)};c.formatDMS=function(a,b,e){void 0===
e&&(e=2);a=c.convertUnit(a,b,"degrees");b=a-Math.floor(a);a-=b;b*=60;var d=b-Math.floor(b);b-=d;d*=60;return a.toFixed()+"\u00b0 "+b.toFixed()+"' "+d.toFixed(e)+'"'}})(h||(h={}));return h});