import UIManager from "./UIManager";

cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        label1: {
            default: null,
            type: cc.Label
        },

    },

    // use this for initialization
    onLoad: function () {
        window.callOCMethoed = (str)=>{
            console.log(str);
        }
    },

    // called every frame
    update: function (dt) {

    },
    onBtnClick(event,param){
        cc.log("==点击按钮");
        if (param === "test"){
            if  (cc.sys.OS_IOS === cc.sys.os){
                alert(cc.sys.os)
                var ret = jsb.reflection.callStaticMethod("NativeOcClass",
                    "callNativeUIWithTitle:andContent:",
                    "123木头人",
                    "我们的故事，是很长的电影");
            }
        }else if (param === "sharetrace"){
            let ret = jsb.reflection.callStaticMethod("SDKManager","getSharetraceParam");
            cc.log("====sharetrace结果:",ret);
            this.label1.string = ret;
            UIManager.showTipsUI(ret);
        }
    }
});
