function changeState(i ,stateNum) { //Global Function (All scripts can access to it) //Forth step@
    console.log(i); //Callback function -(Carries information of what happened)
    console.log(stateNum);
    GameInstance.state.start('state' + stateNum);
};

function addKeyCallback (key, fn , args) { //Global Function (All scripts can access to it) //Third step@
    GameInstance.input.keyboard.addKey(key).onDown.add(fn, null, null, args); //Event listener //Events - Occurance, Listener - parameters/arguments inside the events. 
};

function addChangeStateEventListers() { //Global Function (All scripts can access to it)
    addKeyCallback(Phaser.Keyboard.ZERO, changeState, 0); //Second step@
    addKeyCallback(Phaser.Keyboard.ONE, changeState, 1);
    addKeyCallback(Phaser.Keyboard.TWO, changeState, 2);
    addKeyCallback(Phaser.Keyboard.THREE, changeState, 3);
    addKeyCallback(Phaser.Keyboard.FOUR, changeState, 4);
    addKeyCallback(Phaser.Keyboard.FIVE, changeState, 5);
    addKeyCallback(Phaser.Keyboard.SIX, changeState, 6);
    addKeyCallback(Phaser.Keyboard.SEVEN, changeState, 7);
    addKeyCallback(Phaser.Keyboard.EIGHT, changeState, 8);
    addKeyCallback(Phaser.Keyboard.NINE, changeState, 9);
    addKeyCallback(Phaser.Keyboard.NUMPAD_0, changeState, 10);
    addKeyCallback(Phaser.Keyboard.NUMPAD_1, changeState, 11);
    addKeyCallback(Phaser.Keyboard.NUMPAD_2, changeState, 12);
};

//Preload all the game assets.
function loadAssets() {
    GameInstance.load.video('intro', 'assets/intro.mp4');
    GameInstance.load.image('credits', 'assets/credits.png');
    GameInstance.load.image('board', 'assets/board.png');
    GameInstance.load.image('home','assets/home.png');
    GameInstance.load.image('clipboard','assets/clipboard.png');
    GameInstance.load.image('cloud', 'assets/cloud.png');
    GameInstance.load.image('tick', 'assets/tick.png');
    GameInstance.load.image('cross', 'assets/cross.png');
    GameInstance.load.image('BackgroundNoText', 'assets/1/BackgroundNoText.jpg');
    GameInstance.load.image('button1', 'assets/Button1.png');
    GameInstance.load.image('button2', 'assets/Button2.png');
    GameInstance.load.image('button3', 'assets/Button3.png');
    GameInstance.load.image('button','assets/1/StartButton.png');
    GameInstance.load.spritesheet('circle', 'assets/circle.png',580,580,12);
    GameInstance.load.image('newBackground','assets/BackgroundNew2.jpg');
};

function background() {
    var background = GameInstance.add.sprite(0,0,'newBackground');
    background.scale.setTo(1, 1);
};

mathHelper = {
    metreProperty: function(){
        return (Math.floor(Math.random()*9)+1); //1 to 9
    },
    cmPropertydd: function() {
        return (Math.floor(Math.random()*89)+10) //10 to 99
    },
    cmPropertyd0: function() {
        return (Math.floor(Math.random()*9)+1)*10 //10 to 99
    },
    cmPropertyd: function() {
        return (Math.floor(Math.random()*9)+1);
    }
};