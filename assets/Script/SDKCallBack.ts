class SDKCallBack{

    testFromOC(str){
        cc.log("==从原生执行js代码成功:",str);
        alert("==从原生执行js代码成功"+str);
    }

}
export default new SDKCallBack()