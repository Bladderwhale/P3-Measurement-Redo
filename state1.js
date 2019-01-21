
demo.state1 = function() {}
demo.state1.prototype = {
    title:{},
    preload: function(){
        loadAssets();
    },
    create: function(){
        GameInstance.stage.backgroundColor = '#DDDDDD';
        console.log("state1");
        addChangeStateEventListers(); 
        //Background
        this.background = GameInstance.add.sprite(0,0,'newBackground');
        this.background.scale.setTo(1, 1);
        //Phaser.Text
        this.title.h1 = GameInstance.add.text(GameInstance.world.centerX,GameInstance.world.centerY-200,"Converting Units of Length");
        this.title.h2 = GameInstance.add.text(GameInstance.world.centerX-120,GameInstance.world.centerY-160,"Select a conversion.");
        this.title.h2.fontWeight = 'normal';
        this.title.h1.anchor.setTo(0.5,0.5);
        this.title.h2.anchor.setTo(0.5,0.5);
        this.title.h1.fontSize = 40;
        this.title.h2.fontSize = 30;
        //Phaser.Button
        this.leftBtn = GameInstance.add.button(150,200,'button1');
        this.leftBtn.scale.setTo(0.7,0.7);
        this.rightBtn = GameInstance.add.button(420,200,'button2');
        this.rightBtn.scale.setTo(0.7,0.7);
        this.bottomBtn = GameInstance.add.button(320,440,'button3');
        this.bottomBtn.scale.setTo(0.7,0.7);
        
        /*Texts*/
        //Phaser.Text
        this.cmText = GameInstance.add.text(180,233,'metres and centimetres\nto\ncentimetres');
        this.cmText.align = 'center';
        this.cmText.fontSize = 17;
        this.cmText.addColor('#ff0000',0)
        .addColor('#000000',22)
        .addColor('#000000',24)
        .addFontWeight('bold',0)
        .addFontWeight('normal',22)
        .addFontWeight('bold',24)
        //Phaser.Graphics
        this.line0 = GameInstance.add.graphics(225,300);
        this.line0.lineStyle(1,0x000000,1);
        this.line0.lineTo(100,0);
        //Phaser.Text
        this.mCmText = GameInstance.add.text(180,322,'centimetres\nto\nmetres and centimetres');
        this.mCmText.align = 'center';
        this.mCmText.fontSize = 17;
        this.mCmText.addColor('#ff0000',0)
        .addColor('#000000',11)
        .addColor('#000000',13)
        .addFontWeight('bold',0)
        .addFontWeight('normal',11)
        .addFontWeight('bold',13)
        //Phaser.Graphics
        this.line1 = GameInstance.add.graphics(180,390);
        this.line1.lineStyle(1,0x000000,1);
        this.line1.lineTo(100+90,0);
        //Phaser.Text
        this.mText = GameInstance.add.text(455,233,'kilometres and metres\nto\nmetres');
        this.mText.align = 'center';
        this.mText.fontSize = 17;
        this.mText.addColor('#ff0000',0)
        .addColor('#000000',21)
        .addColor('#000000',23)
        .addFontWeight('bold',0)
        .addFontWeight('normal',21)
        .addFontWeight('bold',23)
        //Phaser.Graphics
        this.line2 = GameInstance.add.graphics(515,300);
        this.line2.lineStyle(1,0x000000,1);
        this.line2.lineTo(60,0);
        //Phaser.Text
        this.kmMText = GameInstance.add.text(455,320,'metres\nto\nkilometres and metres');
        this.kmMText.align = 'center';
        this.kmMText.fontSize = 17;
        this.kmMText.addColor('#ff0000',0)
        .addColor('#000000',6)
        .addColor('#000000',8)
        .addFontWeight('bold',0)
        .addFontWeight('normal',6)
        .addFontWeight('bold',8)
        //Phaser.Graphics
        this.line3 = GameInstance.add.graphics(515,300);
        this.line3.lineStyle(1,0x000000,1);
        this.line3.lineTo(60,0);
         //Phaser.Text
         this.mixedText = GameInstance.add.text(390,470,'Mixed');
         this.mixedText.align = 'center';
         this.mixedText.fontSize = 19;
         this.mixedText.addColor('#ff0000',0)
         .addFontWeight('bold',0)

         //Phaser events




        

        
    },
    update: function(){
    }
}