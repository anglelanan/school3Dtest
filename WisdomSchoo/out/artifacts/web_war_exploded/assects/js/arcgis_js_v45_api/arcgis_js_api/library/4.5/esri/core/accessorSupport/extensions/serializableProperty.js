// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.5/esri/copyright.txt for details.
//>>built
define("require exports ./serializableProperty/shorthands ./serializableProperty/originAliases ./serializableProperty/reader ./serializableProperty/writer".split(" "),function(m,c,k,l,g,h){function f(a,b,d){var e=a&&a.json;a&&a.json&&a.json.origins&&d&&(a=a.json.origins[d.origin])&&b in a&&(e=a);return e}Object.defineProperty(c,"__esModule",{value:!0});c.originSpecificReadPropertyDefinition=function(a,b){return f(a,"read",b)};c.originSpecificWritePropertyDefinition=function(a,b){return f(a,"write",
b)};c.SerializablePropertyExtension={processPrototypePropertyMetadata:function(a,b,d,e){if(k.process(b)){l.process(b);e=(d=Array.isArray(b.type))?b.type[0]:b.type;if(b.json.origins)for(var c in b.json.origins){var f=b.json.origins[c];g.create(e,d,a,f);h.create(e,d,a,f)}g.create(e,d,a,b.json);h.create(e,d,a,b.json)}}};c.default=c.SerializablePropertyExtension});