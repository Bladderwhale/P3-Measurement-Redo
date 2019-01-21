demo.state7 = function(){};
demo.state7.prototype = {
    preload: function(){

    },
    create: function(){
        GameInstance.stage.backgroundColor = '#DDDDDD';
        console.log('state7');
        addChangeStateEventListers();
        //Background
        background(this);

        this.textA = GameInstance.add.text(GameInstance.world.centerX,GameInstance.world.centerY-150,"Well Done!");
        this.textB = GameInstance.add.text(GameInstance.world.centerX,GameInstance.world.centerY,"You have completed all the activities!");
        this.textA.anchor.setTo(0.5,0.5);
        this.textB.anchor.setTo(0.5,0.5);
        this.textA.fontSize = 50;
        this.textB.fontSize = 50;

        this.btnReplay = GameInstance.add.graphics(0,0);
        this.btnReplay.beginFill(0x294153,1);
        this.btnReplay.drawRect(500,600,200,100);
        this.btnReplay.endFill();
        this.txtReplay = GameInstance.add.text(500+50,630,"Replay");
        this.txtReplay.addColor("#ffffff", 0);
        this.btnReplay.inputEnabled = true;

        this.btnReplay.events.onInputOver.add(function(){
            this.btnReplay.input.useHandCursor = true;
        },this);

        this.btnExit = GameInstance.add.graphics(0,0);
        this.btnExit.beginFill(0x294153,1);
        this.btnExit.drawRect(800,600,200,100);
        this.btnExit.endFill();
        this.txtExit = GameInstance.add.text(800+75,630,"Exit");
        this.txtExit.addColor("#ffffff", 0);
        this.btnExit.inputEnabled = true;

        this.btnExit.events.onInputOver.add(function(){
            this.btnExit.input.useHandCursor = true;
        },this);

        this.btnExit.events.onInputDown.add(function(){
            GameInstance.state.start('state1');
        },this);

    },
    update: function(){

    }
}