demo.state6 = function(){};
demo.state6.prototype = {
    preload:function(){
        loadAssets();
    },
    create:function(){
        GameInstance.stage.backgroundColor = '#DDDDDD';
        console.log("state6");
        addChangeStateEventListers();

    },
    update:function(){
    }
};