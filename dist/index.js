var n=function(n){return!n};exports.complement=function(t){return function(){for(var r=[],o=arguments.length;o--;)r[o]=arguments[o];return n(t.apply(void 0,r))}},exports.identity=function(n){return n},exports.ifElse=function(n,t,r){return function(){for(var o=[],e=arguments.length;e--;)o[e]=arguments[e];return n.apply(void 0,o)?t.apply(void 0,o):r.apply(void 0,o)}},exports.not=n,exports.when=function(n,t){return function(r){return n(r)?t(r):r}};
//# sourceMappingURL=index.js.map
