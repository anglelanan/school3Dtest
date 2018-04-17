// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define(["require","exports","./WhereGrammar","../../moment","./StandardizedFunctions"],function(v,w,t,m,n){function p(c){return Array.isArray(c)?c:[c]}function k(c){return null!==c?!0!==c:null}function q(c,a){if(null==c)return null;for(var b=!1,d=0;d<a.length;d++){var f=a[d];if(null==f)b=null;else if(c===f){b=!0;break}}return b}function r(c,a,b){if(null==c)return null;for(var d="",f=0,e=0;e<a.length;e++){var g=a.charAt(e);switch(f){case 0:g===b?f=1:d=0<="-[]/{}()*+?.\\^$|".indexOf(g)?d+("\\"+g):"%"===
g?d+".*":"_"===g?d+".":d+g;break;case 1:d=0<="-[]/{}()*+?.\\^$|".indexOf(g)?d+("\\"+g):d+g,f=0}}return(new RegExp("^"+d+"$")).test(c)}function h(c){return c instanceof Date?c.valueOf():c}function u(c,a,b){if(null==a||null==b)return null;a=h(a);b=h(b);switch(c){case "\x3c\x3e":return a!==b;case "\x3d":return a===b;case "\x3e":return a>b;case "\x3c":return a<b;case "\x3e\x3d":return a>=b;case "\x3c\x3d":return a<=b}}function l(c){for(var a=[],b={},d=0;d<c.length;d++){var f=c[d],e=f.toLowerCase();void 0===
b[e]&&(a.push(f),b[e]=1)}return a}return function(){function c(){this.parameters=this.parseTree=null}c.create=function(a){var b=new c;b.parseTree=t.WhereGrammar.parse(a);return b};c.prototype.isStandardized=function(){var a=!0;this.visitAll(this.parseTree,function(b){a&&"function"===b.type&&(a=n.isStandardized(b.name,b.args.value.length))});return a};c.prototype.setVariablesDictionary=function(a){this.parameters=a};c.prototype.testFeature=function(a){return!!this.evaluateNode(this.parseTree,a)};c.prototype.calculateValue=
function(a){return this.evaluateNode(this.parseTree,a)};c.prototype.getFunctions=function(){var a=[];this.visitAll(this.parseTree,function(b){"function"===b.type&&a.push(b.name.toLowerCase())});return l(a)};c.prototype.getFields=function(){var a=[];this.visitAll(this.parseTree,function(b){"column_ref"===b.type&&a.push(b.column)});return l(a)};c.prototype.getVariables=function(){var a=[];this.visitAll(this.parseTree,function(b){"param"===b.type&&a.push(b.value.toLowerCase())});return l(a)};c.prototype.featureValue=
function(a,b,d){var c=a.attributes[b];if(void 0!==c)return c;for(var e in a.attributes)if(b.toLowerCase()===e.toLowerCase())return d.column=e,a.attributes[e];return null};c.prototype.visitAll=function(a,b){if(null!=a)switch(b(a),a.type){case "when_clause":this.visitAll(a.operand,b);this.visitAll(a.value,b);break;case "case_expression":for(var d=0,c=a.clauses;d<c.length;d++){var e=c[d];this.visitAll(e,b)}"simple"===a.format&&this.visitAll(a.operand,b);null!==a.else&&this.visitAll(a.else,b);break;case "expr_list":d=
0;for(a=a.value;d<a.length;d++)e=a[d],this.visitAll(e,b);break;case "unary_expr":this.visitAll(a.expr,b);break;case "binary_expr":this.visitAll(a.left,b);this.visitAll(a.right,b);break;case "function":this.visitAll(a.args,b)}};c.prototype.evaluateNode=function(a,b){switch(a.type){case "case_expression":if("simple"===a.format)for(var d=h(this.evaluateNode(a.operand,b)),c=0;c<a.clauses.length;c++){if(d===h(this.evaluateNode(a.clauses[c].operand,b)))return this.evaluateNode(a.clauses[c].value,b)}else for(c=
0;c<a.clauses.length;c++)if(!0===this.evaluateNode(a.clauses[c].operand,b))return this.evaluateNode(a.clauses[c].value,b);return null!==a.else?this.evaluateNode(a.else,b):null;case "param":return this.parameters[a.value.toLowerCase()];case "expr_list":d=[];c=0;for(a=a.value;c<a.length;c++){var e=a[c];d.push(this.evaluateNode(e,b))}return d;case "unary_expr":return k(this.evaluateNode(a.expr,b));case "binary_expr":switch(a.operator){case "AND":return d=this.evaluateNode(a.left,b),b=this.evaluateNode(a.right,
b),null!=d&&null!=b?!0===d&&!0===b:!1===d||!1===b?!1:null;case "OR":return d=this.evaluateNode(a.left,b),b=this.evaluateNode(a.right,b),null!=d&&null!=b?!0===d||!0===b:!0===d||!0===b?!0:null;case "IS":if("null"!==a.right.type)throw Error("Unsupported RHS for IS");return null===this.evaluateNode(a.left,b);case "ISNOT":if("null"!==a.right.type)throw Error("Unsupported RHS for IS");return null!==this.evaluateNode(a.left,b);case "IN":return d=p(this.evaluateNode(a.right,b)),q(this.evaluateNode(a.left,
b),d);case "NOT IN":return d=p(this.evaluateNode(a.right,b)),k(q(this.evaluateNode(a.left,b),d));case "BETWEEN":return d=this.evaluateNode(a.left,b),b=this.evaluateNode(a.right,b),null==d||null==b[0]||null==b[1]?null:d>=b[0]&&d<=b[1];case "NOTBETWEEN":return d=this.evaluateNode(a.left,b),b=this.evaluateNode(a.right,b),null==d||null==b[0]||null==b[1]?null:d<b[0]||d>b[1];case "LIKE":return r(this.evaluateNode(a.left,b),this.evaluateNode(a.right,b),a.escape);case "NOT LIKE":return k(r(this.evaluateNode(a.left,
b),this.evaluateNode(a.right,b),a.escape));case "\x3c\x3e":case "\x3c":case "\x3e":case "\x3e\x3d":case "\x3c\x3d":case "\x3d":return u(a.operator,this.evaluateNode(a.left,b),this.evaluateNode(a.right,b));case "*":return this.evaluateNode(a.left,b)*this.evaluateNode(a.right,b);case "-":return this.evaluateNode(a.left,b)-this.evaluateNode(a.right,b);case "+":return this.evaluateNode(a.left,b)+this.evaluateNode(a.right,b);case "/":return this.evaluateNode(a.left,b)/this.evaluateNode(a.right,b)}throw Error("Not Supported Operator "+
a.operator);case "null":case "bool":case "string":case "number":return a.value;case "date":return m(a.value,["YYYY-M-D"]).toDate();case "timestamp":return m(a.value,["YYYY-M-D H:m:s","YYYY-M-D H:mZ","YYYY-M-D H:m:sZ","YYYY-M-D H:m","YYYY-m-d"]).toDate();case "column_ref":return"CURRENT_DATE"===a.column.toUpperCase()?(e=new Date,e.setHours(0,0,0,0),e):"CURRENT_TIMESTAMP"===a.column.toUpperCase()?new Date:this.featureValue(b,a.column,a);case "function":return b=this.evaluateNode(a.args,b),n.evaluateFunction(a.name,
b)}throw Error("Unsupported sql syntax "+a.type);};return c}()});