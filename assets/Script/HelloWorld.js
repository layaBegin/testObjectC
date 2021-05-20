cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!'
    },

    // use this for initialization
    onLoad: function () {
        //this.label.string = this.text;
    },

    // called every frame
    update: function (dt) {

    },
    onBtnClick(event,param){
        cc.log("==点击按钮");
        if  (cc.sys.OS_IOS === cc.sys.os){
            jsb.reflection.callStaticMethod("NativeOcClass","callNativeUIWithTitle:title andContent:","cocos2d-js","")
        }
    }
});
