
/**
 * @type {Phaser.State}
 */
var GameInstance = new Phaser.Game(800, 600, Phaser.CANVAS);
GameInstance.state.add('state0', demo.state0);
GameInstance.state.add('state1', demo.state1);
GameInstance.state.add('state2', demo.state2);
GameInstance.state.add('state3', demo.state3);
GameInstance.state.add('state4', demo.state4);
GameInstance.state.add('state5', demo.state5);
GameInstance.state.add('state6', demo.state6);
GameInstance.state.add('state7', demo.state7);
GameInstance.state.add('state8', demo.state8);
GameInstance.state.add('state9', demo.state9);
GameInstance.state.add('state10', demo.state10);
GameInstance.state.add('state11',demo.state11);
GameInstance.state.add('state12',demo.state12);
GameInstance.state.start('state0');



