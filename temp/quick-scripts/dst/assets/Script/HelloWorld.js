
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvSGVsbG9Xb3JsZC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImxhYmVsIiwidHlwZSIsIkxhYmVsIiwibGFiZWwxIiwib25Mb2FkIiwid2luZG93IiwiY2FsbE9DTWV0aG9lZCIsInN0ciIsImNvbnNvbGUiLCJsb2ciLCJ1cGRhdGUiLCJkdCIsIm9uQnRuQ2xpY2siLCJldmVudCIsInBhcmFtIiwic3lzIiwiT1NfSU9TIiwib3MiLCJhbGVydCIsInJldCIsImpzYiIsInJlZmxlY3Rpb24iLCJjYWxsU3RhdGljTWV0aG9kIiwic3RyaW5nIiwiVUlNYW5hZ2VyIiwic2hvd1RpcHNVSSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsS0FBSyxFQUFFO0FBQ0gsaUJBQVMsSUFETjtBQUVIQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGTixLQURDO0FBS1JDLElBQUFBLE1BQU0sRUFBRTtBQUNKLGlCQUFTLElBREw7QUFFSkYsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkw7QUFMQSxHQUhQO0FBZUw7QUFDQUUsRUFBQUEsTUFBTSxFQUFFLGtCQUFZO0FBQ2hCQyxJQUFBQSxNQUFNLENBQUNDLGFBQVAsR0FBdUIsVUFBQ0MsR0FBRCxFQUFPO0FBQzFCQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNILEtBRkQ7QUFHSCxHQXBCSTtBQXNCTDtBQUNBRyxFQUFBQSxNQUFNLEVBQUUsZ0JBQVVDLEVBQVYsRUFBYyxDQUVyQixDQXpCSTtBQTBCTEMsRUFBQUEsVUExQkssc0JBMEJNQyxLQTFCTixFQTBCWUMsS0ExQlosRUEwQmtCO0FBQ25CbEIsSUFBQUEsRUFBRSxDQUFDYSxHQUFILENBQU8sUUFBUDs7QUFDQSxRQUFJSyxLQUFLLEtBQUssTUFBZCxFQUFxQjtBQUNqQixVQUFLbEIsRUFBRSxDQUFDbUIsR0FBSCxDQUFPQyxNQUFQLEtBQWtCcEIsRUFBRSxDQUFDbUIsR0FBSCxDQUFPRSxFQUE5QixFQUFpQztBQUM3QkMsUUFBQUEsS0FBSyxDQUFDdEIsRUFBRSxDQUFDbUIsR0FBSCxDQUFPRSxFQUFSLENBQUw7QUFDQSxZQUFJRSxHQUFHLEdBQUdDLEdBQUcsQ0FBQ0MsVUFBSixDQUFlQyxnQkFBZixDQUFnQyxlQUFoQyxFQUNOLG1DQURNLEVBRU4sUUFGTSxFQUdOLGNBSE0sQ0FBVjtBQUlIO0FBQ0osS0FSRCxNQVFNLElBQUlSLEtBQUssS0FBSyxZQUFkLEVBQTJCO0FBQzdCLFVBQUlLLElBQUcsR0FBR0MsR0FBRyxDQUFDQyxVQUFKLENBQWVDLGdCQUFmLENBQWdDLFlBQWhDLEVBQTZDLG9CQUE3QyxDQUFWOztBQUNBMUIsTUFBQUEsRUFBRSxDQUFDYSxHQUFILENBQU8sbUJBQVAsRUFBMkJVLElBQTNCO0FBQ0EsV0FBS2hCLE1BQUwsQ0FBWW9CLE1BQVosR0FBcUJKLElBQXJCOztBQUNBSyw0QkFBVUMsVUFBVixDQUFxQk4sSUFBckI7QUFDSDtBQUNKO0FBMUNJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVSU1hbmFnZXIgZnJvbSBcIi4vVUlNYW5hZ2VyXCI7XG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgbGFiZWwxOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcblxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93LmNhbGxPQ01ldGhvZWQgPSAoc3RyKT0+e1xuICAgICAgICAgICAgY29uc29sZS5sb2coc3RyKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWVcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4gICAgfSxcbiAgICBvbkJ0bkNsaWNrKGV2ZW50LHBhcmFtKXtcbiAgICAgICAgY2MubG9nKFwiPT3ngrnlh7vmjInpkq5cIik7XG4gICAgICAgIGlmIChwYXJhbSA9PT0gXCJ0ZXN0XCIpe1xuICAgICAgICAgICAgaWYgIChjYy5zeXMuT1NfSU9TID09PSBjYy5zeXMub3Mpe1xuICAgICAgICAgICAgICAgIGFsZXJ0KGNjLnN5cy5vcylcbiAgICAgICAgICAgICAgICB2YXIgcmV0ID0ganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIk5hdGl2ZU9jQ2xhc3NcIixcbiAgICAgICAgICAgICAgICAgICAgXCJjYWxsTmF0aXZlVUlXaXRoVGl0bGU6YW5kQ29udGVudDpcIixcbiAgICAgICAgICAgICAgICAgICAgXCIxMjPmnKjlpLTkurpcIixcbiAgICAgICAgICAgICAgICAgICAgXCLmiJHku6znmoTmlYXkuovvvIzmmK/lvojplb/nmoTnlLXlvbFcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNlIGlmIChwYXJhbSA9PT0gXCJzaGFyZXRyYWNlXCIpe1xuICAgICAgICAgICAgbGV0IHJldCA9IGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJTREtNYW5hZ2VyXCIsXCJnZXRTaGFyZXRyYWNlUGFyYW1cIik7XG4gICAgICAgICAgICBjYy5sb2coXCI9PT09c2hhcmV0cmFjZee7k+aenDpcIixyZXQpO1xuICAgICAgICAgICAgdGhpcy5sYWJlbDEuc3RyaW5nID0gcmV0O1xuICAgICAgICAgICAgVUlNYW5hZ2VyLnNob3dUaXBzVUkocmV0KTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19