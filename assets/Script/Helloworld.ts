
import UIManager from "./UIManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

    @property(cc.Label)
    label1: cc.Label = null;


    onLoad () {
        window["callOCMethoed"] = (str)=>{
            console.log(str);
        }
    }

    onBackHallFromGame(){
        console.log("===从原生返回");
        alert("====从原生返回")
    }

    start () {

    }

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
        }else if (param === "qiu"){
            let scriptStr = "cc.find('Canvas').getComponent('Helloworld').onBackHallFromGame();"
            this.createNativeButton(scriptStr)
        }
    }

    private createNativeButton (scriptStr) {
        if (cc.sys.isNative && cc.sys.os === cc.sys.OS_IOS) {
            jsb.reflection.callStaticMethod("NativeUIManager", "createWebViewButton:scriptStr:", "btn.png", scriptStr);
        }else if (cc.sys.isNative && cc.sys.os === cc.sys.OS_ANDROID) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/NativeUIManager", "createWebViewButton", "(Ljava/lang/String;Ljava/lang/String;)V", "btn.png", scriptStr);
        }else if (cc.sys.isBrowser) {
            var bt =document.createElement("button");
            var gameDiv = document.getElementById("GameDiv");

            gameDiv.appendChild(bt);
            bt.setAttribute('id','btn')

            let btn = document.getElementById('btn');
            btn.innerHTML = '返回大厅';
            btn.style.position =  'fixed';
            btn.style.top = '100px';
            btn.style.left = '100px';
            btn.addEventListener('click', function(){
                btn.remove()
                this.onBackHallFromGame()
            }.bind(this));
        }
    }

}
