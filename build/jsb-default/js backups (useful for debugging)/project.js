window.__require = function e(t, c, n) {
function o(l, a) {
if (!c[l]) {
if (!t[l]) {
var i = l.split("/");
i = i[i.length - 1];
if (!t[i]) {
var s = "function" == typeof __require && __require;
if (!a && s) return s(i, !0);
if (r) return r(i, !0);
throw new Error("Cannot find module '" + l + "'");
}
l = i;
}
var u = c[l] = {
exports: {}
};
t[l][0].call(u.exports, function(e) {
return o(t[l][1][e] || e);
}, u, u.exports, e, t, c, n);
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
SDKCallBack: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "9b9e4xxmT1GYLniHr/X6wZ1", "SDKCallBack");
Object.defineProperty(c, "__esModule", {
value: !0
});
var n = function() {
function e() {}
e.prototype.testFromOC = function(e) {
cc.log("==从原生执行js代码成功:", e);
alert("==从原生执行js代码成功" + e);
};
return e;
}();
c.default = new n();
cc._RF.pop();
}, {} ],
TipsUI: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "b64feMxojxB6bHvjKY0Apgx", "TipsUI");
Object.defineProperty(c, "__esModule", {
value: !0
});
var n = cc._decorator, o = n.ccclass, r = n.property, l = function(e) {
__extends(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.label = null;
return t;
}
t.prototype.start = function() {};
t.prototype.updateUI = function(e) {
this.label.string = e;
};
t.prototype.onBtnClose = function() {
this.node.destroy();
};
__decorate([ r(cc.Label) ], t.prototype, "label", void 0);
return t = __decorate([ o ], t);
}(cc.Component);
c.default = l;
cc._RF.pop();
}, {} ],
UIManager: [ function(e, t, c) {
"use strict";
cc._RF.push(t, "adf90clmF5NlbDT7wEooxnC", "UIManager");
Object.defineProperty(c, "__esModule", {
value: !0
});
var n = function() {
function e() {}
e.prototype.showTipsUI = function(e) {
cc.loader.loadRes("TipsUI", cc.Prefab, function(t, c) {
if (!t) {
var n = cc.instantiate(c);
n.parent = cc.Canvas.instance.node;
n.getComponent("TipsUI").updateUI(e);
}
});
};
return e;
}();
c.default = new n();
cc._RF.pop();
}, {} ],
"use_v2.1-2.2.1_cc.Toggle_event": [ function(e, t, c) {
"use strict";
cc._RF.push(t, "84bc1D1nVlDMbvSqc1JZyQ2", "use_v2.1-2.2.1_cc.Toggle_event");
cc.Toggle && (cc.Toggle._triggerEventInScript_isChecked = !0);
cc._RF.pop();
}, {} ]
}, {}, [ "HelloWorld", "SDKCallBack", "TipsUI", "UIManager", "use_v2.1-2.2.1_cc.Toggle_event" ]);