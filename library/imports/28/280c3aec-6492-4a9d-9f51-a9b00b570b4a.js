"use strict";
cc._RF.push(module, '280c3rsZJJKnZ9RqbALVwtK', 'HelloWorld');
// Script/HelloWorld.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    label: {
      "default": null,
      type: cc.Label
    },
    // defaults, set visually when attaching this script to the Canvas
    text: 'Hello, World!'
  },
  // use this for initialization
  onLoad: function onLoad() {//this.label.string = this.text;
  },
  // called every frame
  update: function update(dt) {},
  onBtnClick: function onBtnClick(event, param) {
    cc.log("==点击按钮");

    if (cc.sys.OS_IOS === cc.sys.os) {
      jsb.reflection.callStaticMethod("NativeOcClass", "callNativeUIWithTitle:title andContent:", "cocos2d-js", "");
    }
  }
});

cc._RF.pop();