
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/HelloWorld.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvSGVsbG9Xb3JsZC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImxhYmVsIiwidHlwZSIsIkxhYmVsIiwidGV4dCIsIm9uTG9hZCIsInVwZGF0ZSIsImR0Iiwib25CdG5DbGljayIsImV2ZW50IiwicGFyYW0iLCJsb2ciLCJzeXMiLCJPU19JT1MiLCJvcyIsImpzYiIsInJlZmxlY3Rpb24iLCJjYWxsU3RhdGljTWV0aG9kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsS0FBSyxFQUFFO0FBQ0gsaUJBQVMsSUFETjtBQUVIQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGTixLQURDO0FBS1I7QUFDQUMsSUFBQUEsSUFBSSxFQUFFO0FBTkUsR0FIUDtBQVlMO0FBQ0FDLEVBQUFBLE1BQU0sRUFBRSxrQkFBWSxDQUNoQjtBQUNILEdBZkk7QUFpQkw7QUFDQUMsRUFBQUEsTUFBTSxFQUFFLGdCQUFVQyxFQUFWLEVBQWMsQ0FFckIsQ0FwQkk7QUFxQkxDLEVBQUFBLFVBckJLLHNCQXFCTUMsS0FyQk4sRUFxQllDLEtBckJaLEVBcUJrQjtBQUNuQmIsSUFBQUEsRUFBRSxDQUFDYyxHQUFILENBQU8sUUFBUDs7QUFDQSxRQUFLZCxFQUFFLENBQUNlLEdBQUgsQ0FBT0MsTUFBUCxLQUFrQmhCLEVBQUUsQ0FBQ2UsR0FBSCxDQUFPRSxFQUE5QixFQUFpQztBQUM3QkMsTUFBQUEsR0FBRyxDQUFDQyxVQUFKLENBQWVDLGdCQUFmLENBQWdDLGVBQWhDLEVBQWdELHlDQUFoRCxFQUEwRixZQUExRixFQUF1RyxFQUF2RztBQUNIO0FBQ0o7QUExQkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9LFxuICAgICAgICAvLyBkZWZhdWx0cywgc2V0IHZpc3VhbGx5IHdoZW4gYXR0YWNoaW5nIHRoaXMgc2NyaXB0IHRvIHRoZSBDYW52YXNcbiAgICAgICAgdGV4dDogJ0hlbGxvLCBXb3JsZCEnXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAvL3RoaXMubGFiZWwuc3RyaW5nID0gdGhpcy50ZXh0O1xuICAgIH0sXG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWVcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4gICAgfSxcbiAgICBvbkJ0bkNsaWNrKGV2ZW50LHBhcmFtKXtcbiAgICAgICAgY2MubG9nKFwiPT3ngrnlh7vmjInpkq5cIik7XG4gICAgICAgIGlmICAoY2Muc3lzLk9TX0lPUyA9PT0gY2Muc3lzLm9zKXtcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJOYXRpdmVPY0NsYXNzXCIsXCJjYWxsTmF0aXZlVUlXaXRoVGl0bGU6dGl0bGUgYW5kQ29udGVudDpcIixcImNvY29zMmQtanNcIixcIlwiKVxuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=