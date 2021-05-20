window.__require = function e(t, c, n) {
function o(l, i) {
if (!c[l]) {
if (!t[l]) {
var u = l.split("/");
u = u[u.length - 1];
if (!t[u]) {
var s = "function" == typeof __require && __require;
if (!i && s) return s(u, !0);
if (r) return r(u, !0);
throw new Error("Cannot find module '" + l + "'");
}
l = u;
}
var _ = c[l] = {
exports: {}
};
t[l][0].call(_.exports, function(e) {
return o(t[l][1][e] || e);
}, _, _.exports, e, t, c, n);
}
return c[l].exports;
}
for (var r = "function" == typeof __require && __require, l = 0; l < n.length; l++) o(n[l]);
return o;
}({
HelloWorld: [ function(e, t, c) {
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
onLoad: function() {},
update: function(e) {},
onBtnClick: function(e, t) {
cc.log("==点击按钮");
cc.sys.OS_IOS === cc.sys.os && jsb.reflection.callStaticMethod("NativeOcClass", "callNativeUIWithTitle:title andContent:", "cocos2d-js", "");
}
});
cc._RF.pop();
}, {} ],
"use_v2.1-2.2.1_cc.Toggle_event": [ function(e, t, c) {
"use strict";
cc._RF.push(t, "84bc1D1nVlDMbvSqc1JZyQ2", "use_v2.1-2.2.1_cc.Toggle_event");
cc.Toggle && (cc.Toggle._triggerEventInScript_isChecked = !0);
cc._RF.pop();
}, {} ]
}, {}, [ "HelloWorld", "use_v2.1-2.2.1_cc.Toggle_event" ]);