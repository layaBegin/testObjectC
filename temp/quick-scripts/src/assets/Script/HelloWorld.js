"use strict";
cc._RF.push(module, '280c3rsZJJKnZ9RqbALVwtK', 'HelloWorld');
// Script/HelloWorld.js

"use strict";

var _UIManager = _interopRequireDefault(require("./UIManager"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

cc.Class({
  "extends": cc.Component,
  properties: {
    label: {
      "default": null,
      type: cc.Label
    },
    label1: {
      "default": null,
      type: cc.Label
    }
  },
  // use this for initialization
  onLoad: function onLoad() {
    window.callOCMethoed = function (str) {
      console.log(str);
    };
  },
  // called every frame
  update: function update(dt) {},
  onBtnClick: function onBtnClick(event, param) {
    cc.log("==点击按钮");

    if (param === "test") {
      if (cc.sys.OS_IOS === cc.sys.os) {
        alert(cc.sys.os);
        var ret = jsb.reflection.callStaticMethod("NativeOcClass", "callNativeUIWithTitle:andContent:", "123木头人", "我们的故事，是很长的电影");
      }
    } else if (param === "sharetrace") {
      var _ret = jsb.reflection.callStaticMethod("SDKManager", "getSharetraceParam");

      cc.log("====sharetrace结果:", _ret);
      this.label1.string = _ret;

      _UIManager["default"].showTipsUI(_ret);
    }
  }
});

cc._RF.pop();