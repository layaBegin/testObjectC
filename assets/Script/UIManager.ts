

 class UIManager{

     showTipsUI(content){
        cc.loader.loadRes("TipsUI",cc.Prefab,function (err,pfb){
            if (!err){
                let tipsUI = cc.instantiate(pfb);
                tipsUI.parent  = cc.Canvas.instance.node;
                tipsUI.getComponent("TipsUI").updateUI(content);
            }


        })
    }
}

export default new UIManager();