

 class UIManager{

     showTipsUI(content){
        cc.loader.loadRes("TipsUI",cc.Prefab,function (err,pfb){
            cc.log("==进入生成tips回掉");
            if (!err){
                cc.log("==tips回掉成功");
                let tipsUI = cc.instantiate(pfb);
                tipsUI.parent  = cc.Canvas.instance.node;
                tipsUI.getComponent("TipsUI").updateUI(content);
            }


        })
    }
}

export default new UIManager();