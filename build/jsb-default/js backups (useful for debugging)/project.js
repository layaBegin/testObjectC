window.__require = function e(r, t, n) {
function c(l, u) {
if (!t[l]) {
if (!r[l]) {
var i = l.split("/");
i = i[i.length - 1];
if (!r[i]) {
var _ = "function" == typeof __require && __require;
if (!u && _) return _(i, !0);
if (o) return o(i, !0);
throw new Error("Cannot find module '" + l + "'");
}
l = i;
}
var s = t[l] = {
exports: {}
};
r[l][0].call(s.exports, function(e) {
return c(r[l][1][e] || e);
}, s, s.exports, e, r, t, n);
}
return t[l].exports;
}
for (var o = "function" == typeof __require && __require, l = 0; l < n.length; l++) c(n[l]);
return c;
}({
HelloWorld: [ function(e, r, t) {
"use strict";
cc._RF.push(r, "280c3rsZJJKnZ9RqbALVwtK", "HelloWorld");
cc.Class({
extends: cc.Component,
properties: {
label: {
default: null,
type: cc.Label
},
text: "Hello, World!"
},
onLoad: function() {},
update: function(e) {}
});
cc._RF.pop();
}, {} ],
"use_v2.1-2.2.1_cc.Toggle_event": [ function(e, r, t) {
"use strict";
cc._RF.push(r, "84bc1D1nVlDMbvSqc1JZyQ2", "use_v2.1-2.2.1_cc.Toggle_event");
cc.Toggle && (cc.Toggle._triggerEventInScript_isChecked = !0);
cc._RF.pop();
}, {} ]
}, {}, [ "HelloWorld", "use_v2.1-2.2.1_cc.Toggle_event" ]);