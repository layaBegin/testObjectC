window.__require = function e(t, r, n) {
function c(l, i) {
if (!r[l]) {
if (!t[l]) {
var u = l.split("/");
u = u[u.length - 1];
if (!t[u]) {
var _ = "function" == typeof __require && __require;
if (!i && _) return _(u, !0);
if (o) return o(u, !0);
throw new Error("Cannot find module '" + l + "'");
}
l = u;
}
var s = r[l] = {
exports: {}
};
t[l][0].call(s.exports, function(e) {
return c(t[l][1][e] || e);
}, s, s.exports, e, t, r, n);
}
return r[l].exports;
}
for (var o = "function" == typeof __require && __require, l = 0; l < n.length; l++) c(n[l]);
return c;
}({
HelloWorld: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "280c3rsZJJKnZ9RqbALVwtK", "HelloWorld");
cc.Class({
extends: cc.Component,
properties: {
label: {
default: null,
type: cc.Label
},
text: "Hello, World!"
},
onLoad: function() {
this.label.string = this.text;
},
update: function(e) {}
});
cc._RF.pop();
}, {} ],
"use_v2.1-2.2.1_cc.Toggle_event": [ function(e, t, r) {
"use strict";
cc._RF.push(t, "84bc1D1nVlDMbvSqc1JZyQ2", "use_v2.1-2.2.1_cc.Toggle_event");
cc.Toggle && (cc.Toggle._triggerEventInScript_isChecked = !0);
cc._RF.pop();
}, {} ]
}, {}, [ "HelloWorld", "use_v2.1-2.2.1_cc.Toggle_event" ]);