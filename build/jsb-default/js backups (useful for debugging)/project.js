window.__require = function e(t, c, r) {
function n(l, i) {
if (!c[l]) {
if (!t[l]) {
var s = l.split("/");
s = s[s.length - 1];
if (!t[s]) {
var a = "function" == typeof __require && __require;
if (!i && a) return a(s, !0);
if (o) return o(s, !0);
throw new Error("Cannot find module '" + l + "'");
}
l = s;
}
var u = c[l] = {
exports: {}
};
t[l][0].call(u.exports, function(e) {
return n(t[l][1][e] || e);
}, u, u.exports, e, t, c, r);
}
return c[l].exports;
}
for (var o = "function" == typeof __require && __require, l = 0; l < r.length; l++) n(r[l]);
return n;
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
if ("test" === t) {
if (cc.sys.OS_IOS === cc.sys.os) {
alert(cc.sys.os);
var c = jsb.reflection.callStaticMethod("NativeOcClass", "callNativeUIWithTitle:andContent:", "123木头人", "我们的故事，是很长的电影");
}
} else if ("sharetrace" === t) {
c = jsb.reflection.callStaticMethod("SDKManager", "getSharetraceParam");
cc.log("====sharetrace结果:", c);
}
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