// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../support/arcadeUtils"],function(f,c,e){Object.defineProperty(c,"__esModule",{value:!0});c.createContext=function(a,b,c){var d=null;a=a&&a.expression;"string"===typeof a&&(d="0"===a?0:null,null!=d?d={cachedResult:d}:(d=e.createSyntaxTree(a),e.dependsOnView(d)?(null!=c&&c.error("Expressions containing '$view' are not supported on ElevationInfo"),d={cachedResult:0}):d={arcade:{func:e.createFunction(d),context:e.createExecContext(null,{sr:b})}}));return d};c.createFeature=
function(a){return e.createFeature(a)};c.setContextFeature=function(a,b){null!=a&&null==a.cachedResult&&e.updateExecContext(a.arcade.context,b)};c.execute=function(a){if(null!=a){if(null!=a.cachedResult)return a.cachedResult;var b=a.arcade,b=e.executeFunction(b.func,b.context);"number"!==typeof b&&(b=a.cachedResult=0);return b}return 0};c.extractExpressionInfo=function(a,b){void 0===b&&(b=!1);var c=(a=a&&a.featureExpressionInfo)&&a.expression;b||"0"===c||(a=null);return a};c.zeroContext={cachedResult:0}});