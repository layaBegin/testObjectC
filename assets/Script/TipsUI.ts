
const {ccclass, property} = cc._decorator;

@ccclass
export default class TipsUI extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;


    start () {

    }

    updateUI(content){
        this.label.string = content;
    }

    onBtnClose(){
        this.node.destroy();
    }
}
