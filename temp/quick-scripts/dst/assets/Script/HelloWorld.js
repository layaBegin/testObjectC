
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

    if (param === "test") {
      if (cc.sys.OS_IOS === cc.sys.os) {
        alert(cc.sys.os);
        var ret = jsb.reflection.callStaticMethod("NativeOcClass", "callNativeUIWithTitle:andContent:", "123木头人", "我们的故事，是很长的电影");
      }
    } else if (param === "sharetrace") {
      var ret = jsb.reflection.callStaticMethod("SDKManager", "getSharetraceParam");
      cc.log("====sharetrace结果", ret);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvSGVsbG9Xb3JsZC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImxhYmVsIiwidHlwZSIsIkxhYmVsIiwidGV4dCIsIm9uTG9hZCIsInVwZGF0ZSIsImR0Iiwib25CdG5DbGljayIsImV2ZW50IiwicGFyYW0iLCJsb2ciLCJzeXMiLCJPU19JT1MiLCJvcyIsImFsZXJ0IiwicmV0IiwianNiIiwicmVmbGVjdGlvbiIsImNhbGxTdGF0aWNNZXRob2QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxLQUFLLEVBQUU7QUFDSCxpQkFBUyxJQUROO0FBRUhDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZOLEtBREM7QUFLUjtBQUNBQyxJQUFBQSxJQUFJLEVBQUU7QUFORSxHQUhQO0FBWUw7QUFDQUMsRUFBQUEsTUFBTSxFQUFFLGtCQUFZLENBQ2hCO0FBQ0gsR0FmSTtBQWlCTDtBQUNBQyxFQUFBQSxNQUFNLEVBQUUsZ0JBQVVDLEVBQVYsRUFBYyxDQUVyQixDQXBCSTtBQXFCTEMsRUFBQUEsVUFyQkssc0JBcUJNQyxLQXJCTixFQXFCWUMsS0FyQlosRUFxQmtCO0FBQ25CYixJQUFBQSxFQUFFLENBQUNjLEdBQUgsQ0FBTyxRQUFQOztBQUNBLFFBQUlELEtBQUssS0FBSyxNQUFkLEVBQXFCO0FBQ2pCLFVBQUtiLEVBQUUsQ0FBQ2UsR0FBSCxDQUFPQyxNQUFQLEtBQWtCaEIsRUFBRSxDQUFDZSxHQUFILENBQU9FLEVBQTlCLEVBQWlDO0FBQzdCQyxRQUFBQSxLQUFLLENBQUNsQixFQUFFLENBQUNlLEdBQUgsQ0FBT0UsRUFBUixDQUFMO0FBQ0EsWUFBSUUsR0FBRyxHQUFHQyxHQUFHLENBQUNDLFVBQUosQ0FBZUMsZ0JBQWYsQ0FBZ0MsZUFBaEMsRUFDTixtQ0FETSxFQUVOLFFBRk0sRUFHTixjQUhNLENBQVY7QUFJSDtBQUNKLEtBUkQsTUFRTSxJQUFJVCxLQUFLLEtBQUssWUFBZCxFQUEyQjtBQUM3QixVQUFJTSxHQUFHLEdBQUdDLEdBQUcsQ0FBQ0MsVUFBSixDQUFlQyxnQkFBZixDQUFnQyxZQUFoQyxFQUE2QyxvQkFBN0MsQ0FBVjtBQUNBdEIsTUFBQUEsRUFBRSxDQUFDYyxHQUFILENBQU8sa0JBQVAsRUFBMEJLLEdBQTFCO0FBQ0g7QUFDSjtBQW5DSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBsYWJlbDoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIGRlZmF1bHRzLCBzZXQgdmlzdWFsbHkgd2hlbiBhdHRhY2hpbmcgdGhpcyBzY3JpcHQgdG8gdGhlIENhbnZhc1xuICAgICAgICB0ZXh0OiAnSGVsbG8sIFdvcmxkISdcbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vdGhpcy5sYWJlbC5zdHJpbmcgPSB0aGlzLnRleHQ7XG4gICAgfSxcblxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZVxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbiAgICB9LFxuICAgIG9uQnRuQ2xpY2soZXZlbnQscGFyYW0pe1xuICAgICAgICBjYy5sb2coXCI9PeeCueWHu+aMiemSrlwiKTtcbiAgICAgICAgaWYgKHBhcmFtID09PSBcInRlc3RcIil7XG4gICAgICAgICAgICBpZiAgKGNjLnN5cy5PU19JT1MgPT09IGNjLnN5cy5vcyl7XG4gICAgICAgICAgICAgICAgYWxlcnQoY2Muc3lzLm9zKVxuICAgICAgICAgICAgICAgIHZhciByZXQgPSBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwiTmF0aXZlT2NDbGFzc1wiLFxuICAgICAgICAgICAgICAgICAgICBcImNhbGxOYXRpdmVVSVdpdGhUaXRsZTphbmRDb250ZW50OlwiLFxuICAgICAgICAgICAgICAgICAgICBcIjEyM+acqOWktOS6ulwiLFxuICAgICAgICAgICAgICAgICAgICBcIuaIkeS7rOeahOaVheS6i++8jOaYr+W+iOmVv+eahOeUteW9sVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2UgaWYgKHBhcmFtID09PSBcInNoYXJldHJhY2VcIil7XG4gICAgICAgICAgICB2YXIgcmV0ID0ganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIlNES01hbmFnZXJcIixcImdldFNoYXJldHJhY2VQYXJhbVwiKTtcbiAgICAgICAgICAgIGNjLmxvZyhcIj09PT1zaGFyZXRyYWNl57uT5p6cXCIscmV0KTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19