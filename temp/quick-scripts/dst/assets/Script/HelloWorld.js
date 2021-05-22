
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
  onLoad: function onLoad() {//this.label.string = this.text;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvSGVsbG9Xb3JsZC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImxhYmVsIiwidHlwZSIsIkxhYmVsIiwibGFiZWwxIiwib25Mb2FkIiwidXBkYXRlIiwiZHQiLCJvbkJ0bkNsaWNrIiwiZXZlbnQiLCJwYXJhbSIsImxvZyIsInN5cyIsIk9TX0lPUyIsIm9zIiwiYWxlcnQiLCJyZXQiLCJqc2IiLCJyZWZsZWN0aW9uIiwiY2FsbFN0YXRpY01ldGhvZCIsInN0cmluZyIsIlVJTWFuYWdlciIsInNob3dUaXBzVUkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLEtBQUssRUFBRTtBQUNILGlCQUFTLElBRE47QUFFSEMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRk4sS0FEQztBQUtSQyxJQUFBQSxNQUFNLEVBQUU7QUFDSixpQkFBUyxJQURMO0FBRUpGLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZMO0FBTEEsR0FIUDtBQWVMO0FBQ0FFLEVBQUFBLE1BQU0sRUFBRSxrQkFBWSxDQUNoQjtBQUNILEdBbEJJO0FBb0JMO0FBQ0FDLEVBQUFBLE1BQU0sRUFBRSxnQkFBVUMsRUFBVixFQUFjLENBRXJCLENBdkJJO0FBd0JMQyxFQUFBQSxVQXhCSyxzQkF3Qk1DLEtBeEJOLEVBd0JZQyxLQXhCWixFQXdCa0I7QUFDbkJiLElBQUFBLEVBQUUsQ0FBQ2MsR0FBSCxDQUFPLFFBQVA7O0FBQ0EsUUFBSUQsS0FBSyxLQUFLLE1BQWQsRUFBcUI7QUFDakIsVUFBS2IsRUFBRSxDQUFDZSxHQUFILENBQU9DLE1BQVAsS0FBa0JoQixFQUFFLENBQUNlLEdBQUgsQ0FBT0UsRUFBOUIsRUFBaUM7QUFDN0JDLFFBQUFBLEtBQUssQ0FBQ2xCLEVBQUUsQ0FBQ2UsR0FBSCxDQUFPRSxFQUFSLENBQUw7QUFDQSxZQUFJRSxHQUFHLEdBQUdDLEdBQUcsQ0FBQ0MsVUFBSixDQUFlQyxnQkFBZixDQUFnQyxlQUFoQyxFQUNOLG1DQURNLEVBRU4sUUFGTSxFQUdOLGNBSE0sQ0FBVjtBQUlIO0FBQ0osS0FSRCxNQVFNLElBQUlULEtBQUssS0FBSyxZQUFkLEVBQTJCO0FBQzdCLFVBQUlNLElBQUcsR0FBR0MsR0FBRyxDQUFDQyxVQUFKLENBQWVDLGdCQUFmLENBQWdDLFlBQWhDLEVBQTZDLG9CQUE3QyxDQUFWOztBQUNBdEIsTUFBQUEsRUFBRSxDQUFDYyxHQUFILENBQU8sbUJBQVAsRUFBMkJLLElBQTNCO0FBQ0EsV0FBS1osTUFBTCxDQUFZZ0IsTUFBWixHQUFxQkosSUFBckI7O0FBQ0FLLDRCQUFVQyxVQUFWLENBQXFCTixJQUFyQjtBQUNIO0FBQ0o7QUF4Q0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVJTWFuYWdlciBmcm9tIFwiLi9VSU1hbmFnZXJcIjtcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9LFxuICAgICAgICBsYWJlbDE6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9LFxuXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAvL3RoaXMubGFiZWwuc3RyaW5nID0gdGhpcy50ZXh0O1xuICAgIH0sXG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWVcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4gICAgfSxcbiAgICBvbkJ0bkNsaWNrKGV2ZW50LHBhcmFtKXtcbiAgICAgICAgY2MubG9nKFwiPT3ngrnlh7vmjInpkq5cIik7XG4gICAgICAgIGlmIChwYXJhbSA9PT0gXCJ0ZXN0XCIpe1xuICAgICAgICAgICAgaWYgIChjYy5zeXMuT1NfSU9TID09PSBjYy5zeXMub3Mpe1xuICAgICAgICAgICAgICAgIGFsZXJ0KGNjLnN5cy5vcylcbiAgICAgICAgICAgICAgICB2YXIgcmV0ID0ganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIk5hdGl2ZU9jQ2xhc3NcIixcbiAgICAgICAgICAgICAgICAgICAgXCJjYWxsTmF0aXZlVUlXaXRoVGl0bGU6YW5kQ29udGVudDpcIixcbiAgICAgICAgICAgICAgICAgICAgXCIxMjPmnKjlpLTkurpcIixcbiAgICAgICAgICAgICAgICAgICAgXCLmiJHku6znmoTmlYXkuovvvIzmmK/lvojplb/nmoTnlLXlvbFcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNlIGlmIChwYXJhbSA9PT0gXCJzaGFyZXRyYWNlXCIpe1xuICAgICAgICAgICAgbGV0IHJldCA9IGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJTREtNYW5hZ2VyXCIsXCJnZXRTaGFyZXRyYWNlUGFyYW1cIik7XG4gICAgICAgICAgICBjYy5sb2coXCI9PT09c2hhcmV0cmFjZee7k+aenDpcIixyZXQpO1xuICAgICAgICAgICAgdGhpcy5sYWJlbDEuc3RyaW5nID0gcmV0O1xuICAgICAgICAgICAgVUlNYW5hZ2VyLnNob3dUaXBzVUkocmV0KTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19