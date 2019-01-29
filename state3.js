demo.state3 = function () { };
demo.state3.prototype = {
    tryAgainAttempts: 0,
    preload: function () {
        loadAssets();
    },
    create: function () {
        GameInstance.stage.backgroundColor = '#DDDDDD';
        console.log("state2");
        addChangeStateEventListers();
        background();

        //InputField
        this.inputNum0 = GameInstance.add.inputField(100-70,200, {
            width: 120,
            height: 50,
            font: '40px Arial',
            max: '99999',
            type: PhaserInput.InputType.number
        });
        this.inputNum1 = GameInstance.add.inputField(300-70,200, {
            width: 120,
            height: 50,
            font: '40px Arial',
            max: '99999',
            type: PhaserInput.InputType.number
        });
        this.metreNum = mathHelper.metreProperty();
        this.cmNumdd = mathHelper.cmPropertydd();
        //this.cmNumd0 = mathHelper.cmPropertyd0();
        this.totalmCM = this.metreNum * 100 + this.cmNumdd;
        
        //Text
        this.txtQns = GameInstance.add.text(100-70,100,'What is ' + this.totalmCM + ' cm in metres and centimetres?');
        this.txtQns.addColor('#ff0000',7);
        this.txtQns.addColor('#000000',15);
        this.txtQns.fontSize = 33;
        this.txtM = GameInstance.add.text(170,210, 'm');
        this.txtcm = GameInstance.add.text(360,210, 'cm');
        
        this.board = GameInstance.add.sprite(200,150,'clipboard');
        this.board.scale.setTo(0.7,0.7);

        //Board Texts
        this.textA = GameInstance.add.text(this.board.x+350,this.board.y+70,'000', {font: '25px Arial'});
        this.textB = GameInstance.add.text(this.board.x+440,this.board.y+150,'000', {font: '25px Arial'});
        this.textC = GameInstance.add.text(this.board.x+260,this.board.y+150,'000', {font: '25px Arial'});
        this.textD = GameInstance.add.text(this.board.x+350,this.board.y+240,'000', {font: '25px Arial'});
      

        this.line0 = GameInstance.add.graphics(this.textA.x,this.textA.y+35);
        this.line0.lineStyle(1,0x000000,1);
        this.line0.lineTo(this.textA.x-(this.textB.x-30),this.textA.y+35-(this.textB.y-90)); //TextA to TextC (Left)

        this.line1 = GameInstance.add.graphics(this.textA.x+50,this.textA.y+35);
        this.line1.lineStyle(1,0x000000,1);
        this.line1.lineTo(this.textA.x-(this.textC.x+30),this.textA.y+35-(this.textC.y-90)); //TextA to TextB (Right)

        this.line2 = GameInstance.add.graphics(this.textB.x+20,this.textB.y+35);
        this.line2.lineStyle(1,0x000000,1);
        this.line2.lineTo(this.textB.x-(this.textD.x+160),this.textB.y+35-(this.textD.y-110)); //TextB to TextD (Right)

        this.line3 = GameInstance.add.graphics(this.textC.x+30,this.textC.y+35);
        this.line3.lineStyle(1,0x000000,1);
        this.line3.lineTo(this.textC.x-(this.textD.x-160),this.textC.y+35-(this.textD.y-110)); //TextC to TextD (Left)

    
        //Special Feedback
        this.question = GameInstance.add.text(450,300,'The units are different.\nYou need to first change\nm to cm.', {fontSize: 22});
        this.question.addFontWeight('normal',0);
        this.question1 = GameInstance.add.text(525,230,this.metreNum + '  m  ' + this.cmNumdd + '  cm', {fontSize: 22});
        this.question1.addFontWeight('normal',0);
        this.circle = GameInstance.add.sprite(610,223,'circle');
        this.circle.scale.setTo(0.07,0.07);
        this.circleAnim = this.circle.animations.add('circleAnim');
        this.circle1 = GameInstance.add.sprite(537,223,'circle'); 
        this.circle1.scale.setTo(0.07,0.07);
        this.circleAnim1 = this.circle1.animations.add('circleAnim1');
        


        //Button
        this.btnNext = GameInstance.add.button(600,500,'button');
        this.btnCheck = GameInstance.add.button(270,280,'button');
        this.txtNext = GameInstance.add.text(625,515,'Next');
        this.txtCheck = GameInstance.add.text(285,295,'Check');
        this.btnTryAgain = GameInstance.add.button(600,500,'button');
        this.txtTryAgain = GameInstance.add.text(625,515,'Try Again');
        this.btnTryAgain.scale.setTo(1.6,1);
        this.btnShowAnswer = GameInstance.add.button(560,500,'button');
        this.txtShowAnswer = GameInstance.add.text(585,515,'Show Answer');
        this.btnShowAnswer.scale.setTo(2.1,1);
        //Button for Next Question
        this.btnNextQuestion = GameInstance.add.button(525,500-20,'button');
        this.txtNextQuestion = GameInstance.add.text(550,515-20, 'Next Question');
        this.btnNextQuestion.scale.setTo(2.2,1);
        this.drawBox = GameInstance.add.graphics(0,0);
        this.drawBox.lineStyle(1,0x000000,1);
        this.drawBox.beginFill(0xffffff,1);
        this.drawBox.drawRect(540,540,200,30);
        this.drawBox.endFill();
        this.drawBoxTxt = GameInstance.add.text(565,543,'m and cm to cm');
        this.drawBoxTxt.fontSize = 20;
        this.drawBoxTxt.addColor('red',0);
        this.drawBoxTxt.addColor('black',8);
        this.btnNextQuestion.visible = false;
        this.txtNextQuestion.visible = false;
        this.drawBox.visible = false;
        this.drawBoxTxt.visible = false;

        //Events
        this.btnNextQuestion.events.onInputDown.add(function(){
            GameInstance.state.start("state1");
        },this);

        
    
        //Home
        btnHome();

        //Question Number
        this.txtNum = 1;
        this.box = GameInstance.add.graphics(0,0);
        this.box.lineStyle(1,0x000000,1);
        this.box.beginFill(0xffffff);
        this.box.drawRect(90-30,30,100,50);
        this.questionNum = GameInstance.add.text(95-30,40,'Q' + this.txtNum + " of 5");

        //Prepare for the first segment
        this.inputNum1.visible = true;
        this.txtcm.visible = true;
        this.inputNum0.position.setTo(50,200);
        this.txtM.position.setTo(170+20,210);
        this.txtQns.position.setTo(100-50,100);
        this.txtCheck.position.setTo(285,295);
        this.textAlpha = 0;
        this.scalableLine = 0;
        this.boardAlpha = 0;
        this.questionAlpha = 0;
        this.btnNext.visible = false;
        this.txtNext.visible = false;
        this.btnTryAgain.visible = false;
        this.txtTryAgain.visible = false;
        this.btnShowAnswer.visible = false;
        this.txtShowAnswer.visible = false;

        this.board.alpha = this.boardAlpha;
        this.line0.scale.setTo(this.scalableLine,this.scalableLine);
        this.line1.scale.setTo(this.scalableLine,this.scalableLine);
        this.line2.scale.setTo(this.scalableLine,this.scalableLine);
        this.line3.scale.setTo(this.scalableLine,this.scalableLine);
        this.textA.alpha = this.textAlpha;
        this.textB.alpha = this.textAlpha;
        this.textC.alpha = this.textAlpha;
        this.textD.alpha = this.textAlpha;
        this.question.alpha = this.questionAlpha;
        this.question1.alpha = this.questionAlpha;

        //Tweening
        this.tween0 = GameInstance.add.tween(this.line0.scale).to({x:1,y:1},1500,Phaser.Easing.Linear.None);
        this.tween1 = GameInstance.add.tween(this.line1.scale).to({x:1,y:1},1500,Phaser.Easing.Linear.None);
        this.tween2 = GameInstance.add.tween(this.line2.scale).to({x:1,y:1},1500,Phaser.Easing.Linear.None);
        this.tween3 = GameInstance.add.tween(this.line3.scale).to({x:1,y:1},1500,Phaser.Easing.Linear.None);
        this.tween4 = GameInstance.add.tween(this.textA).to({alpha:1},1500,Phaser.Easing.Linear.None);
        this.tween5 = GameInstance.add.tween(this.textB).to({alpha:1},1500,Phaser.Easing.Linear.None);
        this.tween6 = GameInstance.add.tween(this.textC).to({alpha:1},1500,Phaser.Easing.Linear.None);
        this.tween7 = GameInstance.add.tween(this.textD).to({alpha:1},1500,Phaser.Easing.Linear.None);
        this.tween8 = GameInstance.add.tween(this.question).to({alpha:1},1500,Phaser.Easing.Linear.None);
        this.tween9 = GameInstance.add.tween(this.question1).to({alpha:1},1500,Phaser.Easing.Linear.None);


        //Prepare another set of Texts and Tween for show answer function
        this.textAA = GameInstance.add.text(this.board.x+350,this.board.y+70,'000', {font: '25px Arial'});
        this.textBB = GameInstance.add.text(this.board.x+440,this.board.y+150,'000', {font: '25px Arial'});
        this.textCC = GameInstance.add.text(this.board.x+260,this.board.y+150,'000', {font: '25px Arial'});
        this.textDD = GameInstance.add.text(this.board.x+350,this.board.y+240,'000', {font: '25px Arial'});
        this.textEE = GameInstance.add.text(this.board.x+350,this.board.y+240,'000', {font: '25px Arial'});
        this.textFF = GameInstance.add.text(this.board.x+350,this.board.y+240,'000', {font: '25px Arial'});

        this.line00 = GameInstance.add.graphics(this.textAA.x,this.textAA.y+35);
        this.line00.lineStyle(1,0x000000,1);
        this.line00.lineTo(this.textAA.x-(this.textBB.x-30),this.textAA.y+35-(this.textBB.y-90)); //TextA to TextC (Left)

        this.line11 = GameInstance.add.graphics(this.textAA.x+50,this.textAA.y+35);
        this.line11.lineStyle(1,0x000000,1);
        this.line11.lineTo(this.textAA.x-(this.textCC.x+30),this.textAA.y+35-(this.textCC.y-90)); //TextA to TextB (Right)

        this.line22 = GameInstance.add.graphics(this.textBB.x+20,this.textBB.y+35);
        this.line22.lineStyle(1,0x000000,1);
        this.line22.lineTo(this.textBB.x-(this.textDD.x+160),this.textBB.y+35-(this.textDD.y-110)); //TextB to TextD (Right)

        this.line33 = GameInstance.add.graphics(this.textCC.x+30,this.textCC.y+35);
        this.line33.lineStyle(1,0x000000,1);
        this.line33.lineTo(this.textCC.x-(this.textDD.x-160),this.textCC.y+35-(this.textDD.y-110)); //TextC to TextD (Left)

        this.textAA.alpha = 0
        this.textBB.alpha = 0
        this.textCC.alpha = 0
        this.textDD.alpha = 0
        this.line00.scale.setTo(0,0);
        this.line11.scale.setTo(0,0);
        this.line22.scale.setTo(0,0);
        this.line33.scale.setTo(0,0);

        this.tween00 = GameInstance.add.tween(this.line00.scale).to({x:1,y:1},1500,Phaser.Easing.Linear.None);
        this.tween11 = GameInstance.add.tween(this.line11.scale).to({x:1,y:1},1500,Phaser.Easing.Linear.None);
        this.tween22 = GameInstance.add.tween(this.line22.scale).to({x:1,y:1},1500,Phaser.Easing.Linear.None);
        this.tween33 = GameInstance.add.tween(this.line33.scale).to({x:1,y:1},1500,Phaser.Easing.Linear.None);
        this.tween44 = GameInstance.add.tween(this.textAA).to({alpha:1},1500,Phaser.Easing.Linear.None);
        this.tween55 = GameInstance.add.tween(this.textBB).to({alpha:1},1500,Phaser.Easing.Linear.None);
        this.tween66 = GameInstance.add.tween(this.textCC).to({alpha:1},1500,Phaser.Easing.Linear.None);
        this.tween77 = GameInstance.add.tween(this.textDD).to({alpha:1},1500,Phaser.Easing.Linear.None);
        this.tween88 = GameInstance.add.tween(this.textEE).to({alpha:1},1500,Phaser.Easing.Linear.None).to({x:140-30,y:210},1500,Phaser.Easing.Linear.None);
        this.tween99 = GameInstance.add.tween(this.textFF).to({alpha:1},1500,Phaser.Easing.Linear.None).to({x:140+130,y:210},1500,Phaser.Easing.Linear.None);
        this.rectBox = GameInstance.add.graphics(0,0);
        this.rectBox.lineStyle(1,0x000000,1);
        this.rectBox.beginFill(0x008000,0.2);
        this.rectBox.drawRect(50,200,120,50);
        this.rectBox.endFill();
        this.rectBox2 = GameInstance.add.graphics(0,0);
        this.rectBox2.lineStyle(1,0x000000,1);
        this.rectBox2.beginFill(0x008000,0.2);
        this.rectBox2.drawRect(230,200,120,50);
        this.rectBox2.endFill();
        this.rectBox.alpha = 0;
        this.rectBox2.alpha = 0;
        this.textEE.alpha = 0;
        this.textFF.alpha = 0;
        //
        //Prepare try again's set of Texts and Tween 
        this.textAAA = GameInstance.add.text(this.board.x+350,this.board.y+70,'000', {font: '25px Arial'});
        this.textBBB = GameInstance.add.text(this.board.x+440,this.board.y+150,'000', {font: '25px Arial'});
        this.textCCC = GameInstance.add.text(this.board.x+260,this.board.y+150,'000', {font: '25px Arial'});
        
        this.line000 = GameInstance.add.graphics(this.textAAA.x,this.textAAA.y+35);
        this.line000.lineStyle(1,0x000000,1);
        this.line000.lineTo(this.textAAA.x-(this.textBBB.x-30),this.textAAA.y+35-(this.textBBB.y-90)); //TextA to TextC (Left)
    
        this.line111 = GameInstance.add.graphics(this.textAAA.x+50,this.textAAA.y+35);
        this.line111.lineStyle(1,0x000000,1);
        this.line111.lineTo(this.textAAA.x-(this.textCCC.x+30),this.textAAA.y+35-(this.textCCC.y-90)); //TextA to TextB (Right)
        
        this.textAAA.alpha = 0
        this.textBBB.alpha = 0
        this.textCCC.alpha = 0
         
        this.line000.scale.setTo(0,0);
        this.line111.scale.setTo(0,0);

        this.cloud = GameInstance.add.sprite(300,145,'cloud');
        this.cloud.scale.setTo(0.6,0.7);
        this.cloudtxt = GameInstance.add.text(360,210,'000',{font: '19px Arial'});
        this.cloudtxt1 = GameInstance.add.text(360,235,'000',{font: '19px Arial'});
        this.cloud.alpha = 0;
        this.cloudtxt.alpha = 0;
        this.cloudtxt1.alpha = 0;
    
        this.tween000 = GameInstance.add.tween(this.line000.scale).to({x:1,y:1},1500,Phaser.Easing.Linear.None);
        this.tween111 = GameInstance.add.tween(this.line111.scale).to({x:1,y:1},1500,Phaser.Easing.Linear.None);
        this.tween444 = GameInstance.add.tween(this.textAAA).to({alpha:1},1500,Phaser.Easing.Linear.None);
        this.tween555 = GameInstance.add.tween(this.textBBB).to({alpha:1},1500,Phaser.Easing.Linear.None);
        this.tween666 = GameInstance.add.tween(this.textCCC).to({alpha:1},1500,Phaser.Easing.Linear.None);
        this.tween10 = GameInstance.add.tween(this.cloud).to({alpha:1},1500,Phaser.Easing.Linear.None); 
     
        //

        this.btnCheck.events.onInputDown.add(function(){
            this.textA.setText(this.metreNum*100 + this.cmNumdd*1 + " cm");
            this.textA.position.setTo(this.board.x+320+15,this.board.y+70);
            this.textB.setText(this.cmNumdd + " cm");
            this.textC.setText(this.metreNum * 100 + " cm");
            this.textD.setText(this.metreNum + " m " + this.cmNumdd + " cm");
            this.textD.position.setTo(this.board.x+330,this.board.y+240)
            this.cloudtxt.setText("100 cm = 1 m")
            this.cloudtxt1.setText(this.metreNum * 100 + " cm = " + this.metreNum + " m");
            //
            this.textAAA.setText(this.metreNum * 100 + this.cmNumdd + " cm");
            this.textAAA.position.setTo(this.board.x+340,this.board.y+70);
            this.textBBB.setText(this.cmNumdd + " cm");
            this.textCCC.setText(this.metreNum + " m");
            //
            if (this.txtNum == 4) {
                this.textA.setText(this.metreNum*100 + this.cmNumd*1 + " cm");
                this.textA.position.setTo(this.board.x+340,this.board.y+70);
                this.textB.setText(this.cmNumd + " cm");
                this.textC.setText(this.metreNum + " m");
                this.textD.setText(this.metreNum + " m " + this.cmNumd + " cm");
                this.cloudtxt.setText("100 cm = 1 m")
                this.cloudtxt1.setText(this.metreNum * 100 + " cm = " + this.metreNum + " m");
                //
                this.textAAA.setText(this.metreNum*100 + this.cmNumd*1 + " cm");
                this.textAAA.position.setTo(this.board.x+340,this.board.y+70);
                this.textBBB.setText(this.cmNumd + " cm");
                this.textCCC.setText(this.metreNum + " m");
            }
            if (this.txtNum == 5) {
                this.textA.setText(this.metreNum*100 + this.cmNumd0*1 + " cm");
                this.textA.position.setTo(this.board.x+340,this.board.y+70);
                this.textB.setText(this.cmNumd0 + " cm");
                this.textC.setText(this.metreNum + " m");
                this.textD.setText(this.metreNum + " m " + this.cmNumd0 + " cm");
                this.cloudtxt.setText("100 cm = 1 m")
                this.cloudtxt1.setText(this.metreNum * 100 + " cm = " + this.metreNum + " m");
                //
                this.textAAA.setText(this.metreNum*100 + this.cmNumd0*1 + " cm");
                this.textAAA.position.setTo(this.board.x+340,this.board.y+70);
                this.textBBB.setText(this.cmNumd0 + " cm");
                this.textCCC.setText(this.metreNum + " m");
            }
            //
            if (this.inputNum0.value != 0 && this.inputNum1.value != 0) {
                console.log(this.inputNum0.value);
                if ((this.inputNum0.value == this.metreNum && this.inputNum1.value == this.cmNumdd) ||
                (this.inputNum0.value == this.metreNum && this.inputNum1.value == this.cmNumd0) ||
                (this.inputNum0.value == this.metreNum && this.inputNum1.value == this.cmNumd))
                 {
                    this.btnCheck.visible = false;
                    this.txtCheck.visible = false;
                    this.board.alpha = 1;
                    this.tween4.start();
                    this.tween4.onComplete.add(function(){
                        this.tween0.start(); //Lines
                        this.tween1.start(); //Lines
                    },this);
                    this.tween1.onComplete.add(function(){
                        this.tween5.start();
                        this.tween6.start();
                    },this);
                    this.tween5.onComplete.add(function(){
                        this.textC.setText(this.metreNum + " m");
                        this.tween2.start(); //Lines
                        this.tween3.start(); //Lines
                    },this);
                    this.tween3.onComplete.add(function(){
                        this.tween7.start();
                    },this);
                    this.tween7.onComplete.add(function(){
                        if (this.txtNum == 5) {
                            this.btnNextQuestion.visible = true;
                            this.txtNextQuestion.visible = true;
                            this.drawBox.visible = true;
                            this.drawBoxTxt.visible = true;
                            this.btnNext.visible = false;
                            this.txtNext.visible = false;
                        }
                        else if (this.txtNum !=6) {
                        this.btnNext.visible = true;
                        this.txtNext.visible = true;
                    }
                    
                        
                    },this);
                }
                else if ((this.tryAgainAttempts < 2 && this.inputNum0.value == this.cmNumdd*1 + this.metreNum) || 
                (this.tryAgainAttempts < 2 && this.inputNum0.value == this.cmNumdd*1 + this.metreNum*10)) {
                    this.btnCheck.visible = false;
                    this.txtCheck.visible = false;
                    this.board.alpha = 1;
                    this.tween8.start();
                    this.tween8.onComplete.add(function(){
                        this.tween9.start();
                    },this);
                    this.tween9.onComplete.add(function(){
                        this.circle.animations.play('circleAnim',10,false);
                        this.circle1.animations.play('circleAnim1',10,false);
                    },this);
                    this.circle.events.onAnimationComplete.add(function(){
                        if (this.tryAgainAttempts < 1) {
                        this.btnTryAgain.visible = true;
                        this.txtTryAgain.visible = true;
                        }
                        else {
                        this.btnShowAnswer.visible = true;
                        this.txtShowAnswer.visible = true;
                        }
                    },this);
                }
                else if (this.tryAgainAttempts < 2 && this.inputNum0.value !== this.metreNum*100 + this.cmNumdd*1) {
                    this.btnCheck.visible = false;
                    this.txtCheck.visible = false;
                    this.board.alpha = 1;
                    this.tween444.start();
                    this.tween444.onComplete.add(function(){
                        this.tween000.start(); //Lines
                        this.tween111.start(); //Lines
                    },this);
                    this.tween111.onComplete.add(function(){
                        this.textCCC.setText(this.metreNum + " m");
                        this.tween555.start();
                        this.tween666.start();
                    },this);
                    this.tween555.onComplete.add(function(){
                        this.tween10.start();
                    },this);
                    this.tween10.onComplete.add(function(){
                    this.cloudtxt.alpha = 1;
                    this.cloudtxt1.alpha = 1;
                    if (this.tryAgainAttempts < 1) {
                    this.btnTryAgain.visible = true;
                    this.txtTryAgain.visible = true;
                    }
                    else {
                    this.btnShowAnswer.visible = true;
                    this.txtShowAnswer.visible = true;
                    }
                },this);
            }
            }
        },this);

        this.btnTryAgain.events.onInputDown.add(function(){
            //Special feedback reset
            this.inputNum0.setText("");
            this.inputNum1.setText("");
            this.board.alpha = 0;
            this.question.alpha = 0;
            this.question1.alpha = 0;
            this.circle.frame = 0;
            this.circle1.frame = 0;
            this.btnCheck.visible = true;
            this.txtCheck.visible = true;
            this.txtTryAgain.visible = false;
            this.btnTryAgain.visible = false;
            //End
            this.textA.alpha = 0;
            this.textB.alpha = 0;
            this.textC.alpha = 0;
            this.line0.scale.setTo(0,0);
            this.line1.scale.setTo(0,0);
            this.cloud.alpha = 0;
            this.cloudtxt.alpha = 0;
            this.cloudtxt1.alpha = 0;
            //
            this.textAAA.alpha = 0;
            this.textBBB.alpha = 0;
            this.textCCC.alpha = 0;
            this.line000.scale.setTo(0,0);
            this.line111.scale.setTo(0,0);

            this.tryAgainAttempts++;
            

        },this);
        this.btnShowAnswer.events.onInputDown.add(function(){
            //Special feedback reset
            this.inputNum0.setText("");
            this.inputNum1.setText("");
            this.board.alpha = 1;
            this.question.alpha = 0;
            this.question1.alpha = 0;
            this.circle.frame = 0;
            this.circle1.frame = 0;
            this.btnCheck.visible = false;
            this.txtCheck.visible = false;
            this.txtShowAnswer.visible = false;
            this.btnShowAnswer.visible = false;
            //End
            this.textA.alpha = 0;
            this.textB.alpha = 0;
            this.textC.alpha = 0;
            this.line0.scale.setTo(0,0);
            this.line1.scale.setTo(0,0);
            this.cloud.alpha = 0;
            this.cloudtxt.alpha = 0;
            this.cloudtxt1.alpha = 0;
            //
            //Try Again reset to alpha 0 
            this.textAAA.alpha = 0;
            this.textBBB.alpha = 0;
            this.textCCC.alpha = 0;
            this.line000.scale.setTo(0,0);
            this.line111.scale.setTo(0,0);

            this.tryAgainAttempts++;
            //
            this.textAA.setText(this.metreNum*100 + this.cmNumdd*1 + " cm");
            this.textAA.position.setTo(this.board.x+340,this.board.y+70);
            this.textBB.setText(this.cmNumdd + " cm");
            this.textCC.setText(this.metreNum * 100 + " cm");
            this.textDD.setText(this.metreNum + " m " + this.cmNumdd + " cm");
            this.textDD.position.setTo(this.board.x+330,this.board.y+240)
            this.textEE.setText(this.metreNum);
            this.textFF.setText(this.cmNumdd);
            //
            if (this.txtNum == 4) {
                this.textAA.setText(this.metreNum*100 + this.cmNumd*1 + " cm");
                this.textAA.position.setTo(this.board.x+340,this.board.y+70);
                this.textBB.setText(this.cmNumd + " cm");
                this.textCC.setText(this.metreNum + " m");
                this.textDD.setText(this.metreNum + " m " + this.cmNumd*1 + " cm");
                this.textEE.setText(this.metreNum);
                this.textFF.setText(this.cmNumdd)
            }
            if (this.txtNum == 5) {
                this.textAA.setText(this.metreNum*100 + this.cmNumd0*1 + " cm");
                this.textAA.position.setTo(this.board.x+320,this.board.y+70);
                this.textBB.setText(this.cmNumd0 + " cm");
                this.textCC.setText(this.metreNum + " m");
                this.textDD.setText(this.metreNum + " m " + this.cmNumd0 + " cm");
                this.textEE.setText(this.metreNum);
                this.textFF.setText(this.cmNumd0);
            }
            //
            this.tween44.start();
            this.tween44.onComplete.add(function(){
                this.tween00.start(); //Lines
                this.tween11.start(); //Lines
            },this);
            this.tween11.onComplete.add(function(){
                this.tween55.start();
                this.tween66.start();
            },this);
            this.tween66.onComplete.add(function(){
                this.textCC.setText(this.metreNum  + " m");
                this.tween22.start(); //Lines
                this.tween33.start(); //Lines
            },this);
            this.tween33.onComplete.add(function(){
                this.tween77.start();
            },this);
            this.tween77.onComplete.add(function(){
                this.tween88.start();
                this.tween99.start();
            },this);
            this.tween88.onComplete.add(function(){
                if (this.txtNum == 5) {
                    this.btnNextQuestion.visible = true;
                    this.txtNextQuestion.visible = true;
                    this.drawBox.visible = true;
                    this.drawBoxTxt.visible = true;
                    this.btnNext.visible = false;
                    this.txtNext.visible = false;
                    this.rectBox.alpha = 1;
                    this.rectBox2.alpha = 1;
                }
                else if (this.txtNum !=6) {
                this.rectBox.alpha = 1;
                this.rectBox2.alpha = 1;
                this.btnNext.visible = true;
                this.txtNext.visible = true;
            }
            
            },this);
          
        },this);

        this.btnNext.events.onInputDown.add(function(){
            this.inputNum0.setText("");
            this.inputNum1.setText("");
            this.board.alpha = 0;
            this.question.alpha = 0;
            this.question1.alpha = 0;
            this.circle.frame = 0;
            this.circle1.frame = 0;
            this.btnCheck.visible = false;
            this.txtCheck.visible = false;
            this.txtShowAnswer.visible = false;
            this.btnShowAnswer.visible = false;
            //End
            this.textA.alpha = 0;
            this.textB.alpha = 0;
            this.textC.alpha = 0;
            this.textD.alpha = 0;
            this.line0.scale.setTo(0,0);
            this.line1.scale.setTo(0,0);
            this.line2.scale.setTo(0,0);
            this.line3.scale.setTo(0,0);
            //
            this.textAA.alpha = 0;
            this.textBB.alpha = 0;
            this.textCC.alpha = 0;
            this.textDD.alpha = 0;
            this.textEE.alpha = 0;
            this.textFF.alpha = 0;
            this.line00.scale.setTo(0,0);
            this.line11.scale.setTo(0,0);
            this.line22.scale.setTo(0,0);
            this.line33.scale.setTo(0,0);
            this.cloud.alpha = 0;
            this.cloudtxt.alpha = 0;
            this.cloudtxt1.alpha = 0;
            this.rectBox.alpha = 0;
            this.rectBox2.alpha = 0;
            //
            this.tryAgainAttempts = 0;
            //
            this.metreNum = mathHelper.metreProperty();
            this.cmNumdd = mathHelper.cmPropertydd();
            this.totalmCM = this.metreNum * 100 + this.cmNumdd * 1;
            this.txtQns.setText('What is ' + this.totalmCM + ' cm in metres and centimetres?');
            this.btnCheck.visible = true;
            this.txtCheck.visible = true;
            this.btnNext.visible = false;
            this.txtNext.visible = false;
            //Next Question Number
            this.txtNum++
            this.questionNum.setText('Q' + this.txtNum + " of 5");

            if (this.txtNum == 4) {
                this.cmNumd = mathHelper.cmPropertyd();
                this.newTextNum = this.cmNumd + this.metreNum * 100
                this.txtQns.setText('What is ' + this.newTextNum + ' cm in metres and centimetres?');
            }
            if (this.txtNum == 5) {
                this.cmNumd0 = mathHelper.cmPropertyd0();
                this.newTextNum = this.cmNumd0 + this.metreNum * 100
                this.txtQns.addColor('#000000',17);
                this.txtQns.setText('What is ' +  this.newTextNum  + ' cm in metres and centimetres?');
            }

            this.textEE.position.setTo(this.board.x+350,this.board.y+240);
            this.textFF.position.setTo(this.board.x+350,this.board.y+240);
        },this);

       
      


    },
    update: function () {

    }
};